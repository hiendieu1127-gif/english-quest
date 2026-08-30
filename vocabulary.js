// ============================================================
// Vocabulary — interactive learning path
// Data-driven: adding a new unit = adding one object to VOCAB_UNITS.
// Each word can carry an icon (for Picture Matching) and an example
// sentence (used by Missing Word + Sentence Shuffle). Stages skip
// words that don't have what they need (e.g. no icon -> skipped in
// Picture Matching) rather than breaking.
// ============================================================

const VOCAB_UNITS = [
  {
    id: "unit1",
    number: 1,
    title: "All About Me",
    subtitle: "Sample words for testing the learning path",
    words: [
      { id: "city", en: "city", vi: "thành phố", example: "I live in the city.", icon: "city" },
      { id: "countryside", en: "countryside", vi: "vùng nông thôn", example: "My grandparents live in the countryside.", icon: "countryside" },
      { id: "nice-to-meet-you", en: "Nice to meet you.", vi: "Rất vui được gặp bạn.", example: "Nice to meet you.", icon: null },
      { id: "tell-about-yourself", en: "Can you tell me about yourself?", vi: "Bạn có thể giới thiệu về bản thân không?", example: "Can you tell me about yourself?", icon: null },
      { id: "basketball", en: "basketball", vi: "bóng rổ", example: "I like playing basketball.", icon: "basketball" },
    ],
  },
];

const STAGES = [
  { key: "tap-pairs", title: "Tap Pairs", subtitle: "Ghép từ với nghĩa" },
  { key: "picture-matching", title: "Picture Matching", subtitle: "Chọn hình đúng" },
  { key: "multiple-choice", title: "Multiple Choice", subtitle: "Chọn nghĩa đúng" },
  { key: "missing-word", title: "Missing Word", subtitle: "Chọn từ còn thiếu" },
  { key: "sentence-shuffle", title: "Sentence Shuffle", subtitle: "Sắp xếp câu" },
];

const VOCAB_ICONS = {
  city: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V9l4-3v14M12 20V5l4 2v13M20 20V11l-4-2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20h16" stroke-linecap="round"/></svg>',
  countryside: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 18l5-8 4 5 2-3 7 6H3Z" stroke-linejoin="round" stroke-linecap="round"/><circle cx="17" cy="6" r="2"/></svg>',
  basketball: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17M3.5 12h17M5.3 6.3c2 1.8 3.3 4 3.3 5.7s-1.3 3.9-3.3 5.7M18.7 6.3c-2 1.8-3.3 4-3.3 5.7s1.3 3.9 3.3 5.7" stroke-linecap="round"/></svg>',
};

const PASS_LS_KEY = "eq_vocab_progress";

// ============================================================
// Progress (localStorage, per word exposure count — mastered at 2+)
// ============================================================
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PASS_LS_KEY) || "{}"); }
  catch (e) { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(PASS_LS_KEY, JSON.stringify(p)); } catch (e) {}
}
function recordExposure(unitId, wordId, wasCorrect) {
  if (!wasCorrect) return;
  const p = loadProgress();
  p[unitId] = p[unitId] || {};
  p[unitId][wordId] = (p[unitId][wordId] || 0) + 1;
  saveProgress(p);
}
function getMasteredCount(unit) {
  const p = loadProgress();
  const unitProgress = p[unit.id] || {};
  return unit.words.filter(w => (unitProgress[w.id] || 0) >= 2).length;
}

// ============================================================
// State
// ============================================================
let currentUnit = null;
let currentStageIdx = 0;
const stageDone = {}; // stageKey -> true

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function sample(arr, n, excludeIdx) {
  const pool = arr.map((_, i) => i).filter(i => i !== excludeIdx);
  return shuffle(pool).slice(0, n);
}
function tokenize(sentence) {
  return sentence.trim().split(/\s+/);
}

// ============================================================
// Rendering: unit select screen
// ============================================================
function renderUnitSelect() {
  const grid = document.getElementById("unit-select-grid");
  if (!grid) return;
  grid.innerHTML = VOCAB_UNITS.map(unit => {
    const mastered = getMasteredCount(unit);
    const total = unit.words.length;
    const pct = Math.round((mastered / total) * 100);
    return `
      <div class="unit-card" data-unit="${unit.id}">
        <div class="unit-card-top">
          <span class="unit-num">${unit.number}</span>
          <div><h3>${unit.title}</h3></div>
        </div>
        <p>${unit.subtitle}</p>
        <div class="progress-bar"><span style="width:${pct}%"></span></div>
        <div class="unit-card-meta">${mastered}/${total} từ đã thuộc</div>
      </div>`;
  }).join("");
  grid.querySelectorAll(".unit-card").forEach(card => {
    card.addEventListener("click", () => openUnit(card.dataset.unit));
  });
}

function openUnit(unitId) {
  currentUnit = VOCAB_UNITS.find(u => u.id === unitId);
  if (!currentUnit) return;
  currentStageIdx = 0;
  Object.keys(stageDone).forEach(k => delete stageDone[k]);
  document.getElementById("unit-select-view").classList.add("hidden");
  document.getElementById("path-view").classList.add("active");
  document.getElementById("path-title").textContent = `Unit ${currentUnit.number}: ${currentUnit.title}`;
  renderStepper();
  renderStage(0);
}

function backToUnits() {
  document.getElementById("unit-select-view").classList.remove("hidden");
  document.getElementById("path-view").classList.remove("active");
  renderUnitSelect(); // refresh progress bars
}

function renderStepper() {
  const el = document.getElementById("stage-stepper");
  el.innerHTML = STAGES.map((s, i) => `
    <button class="stage-pill ${i === currentStageIdx ? "active" : ""} ${stageDone[s.key] ? "done" : ""}" data-stage="${i}">
      <span class="stage-dot">${stageDone[s.key] ? "✓" : i + 1}</span>${s.title}
    </button>
  `).join("");
  el.querySelectorAll(".stage-pill").forEach(btn => {
    btn.addEventListener("click", () => renderStage(Number(btn.dataset.stage)));
  });
}

function renderStage(idx) {
  currentStageIdx = idx;
  renderStepper();
  const stage = STAGES[idx];
  const host = document.getElementById("runner-host");
  if (stage.key === "tap-pairs") {
    renderTapPairs(host, currentUnit, () => onStageComplete(stage.key));
  } else {
    const items = buildSequentialItems(stage.key, currentUnit);
    if (items.length === 0) {
      host.innerHTML = `<div class="runner-card"><p style="text-align:center;color:var(--ink-soft)">Chưa có dữ liệu phù hợp cho dạng bài này ở Unit này.</p></div>`;
      return;
    }
    runSequential(host, stage.key, items, () => onStageComplete(stage.key));
  }
}

function onStageComplete(stageKey) {
  stageDone[stageKey] = true;
  renderStepper();
  const host = document.getElementById("runner-host");
  const isLast = currentStageIdx === STAGES.length - 1;
  host.innerHTML = `
    <div class="runner-card">
      <div class="stage-complete">
        <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>Xong rồi!</h3>
        <p>${isLast ? "Chị đã hoàn thành hết các bài trong Unit này." : "Sẵn sàng cho dạng bài tiếp theo chưa?"}</p>
        <div class="runner-actions">
          ${isLast
            ? `<button class="btn btn-primary" id="btn-back-units">Quay lại danh sách Unit</button>`
            : `<button class="btn btn-primary" id="btn-next-stage">Dạng bài tiếp theo &rarr;</button>`}
        </div>
      </div>
    </div>`;
  const nextBtn = document.getElementById("btn-next-stage");
  if (nextBtn) nextBtn.addEventListener("click", () => renderStage(currentStageIdx + 1));
  const backBtn = document.getElementById("btn-back-units");
  if (backBtn) backBtn.addEventListener("click", backToUnits);
}

// ============================================================
// Build the item list for a sequential (one-at-a-time) stage
// ============================================================
function buildSequentialItems(stageKey, unit) {
  const words = unit.words;
  if (stageKey === "picture-matching") {
    return words.filter(w => w.icon).map(w => {
      const wIdx = words.indexOf(w);
      const distractorIdx = sample(words.filter(x => x.icon), 2, words.filter(x => x.icon).indexOf(w));
      const iconPool = words.filter(x => x.icon);
      const correctPos = Math.floor(Math.random() * 3);
      const opts = [];
      let di = 0;
      for (let i = 0; i < 3; i++) {
        if (i === correctPos) opts.push(w);
        else { opts.push(iconPool[distractorIdx[di] ?? 0]); di++; }
      }
      return { word: w, opts, correctIdx: correctPos };
    });
  }
  if (stageKey === "multiple-choice") {
    return words.map((w, i) => {
      const distractors = sample(words, 2, i).map(di => words[di]);
      const correctPos = Math.floor(Math.random() * 3);
      const opts = [];
      let di = 0;
      for (let p = 0; p < 3; p++) {
        if (p === correctPos) opts.push(w.vi);
        else { opts.push(distractors[di].vi); di++; }
      }
      return { word: w, opts, correctIdx: correctPos };
    });
  }
  if (stageKey === "missing-word") {
    return words.filter(w => {
      if (!w.example) return false;
      const target = w.en.replace(/[?.!]/g, "");
      if (!w.example.toLowerCase().includes(target.toLowerCase())) return false;
      // skip items where the blank would swallow the whole sentence (no context left)
      return tokenize(target).length < tokenize(w.example).length;
    }).map((w, i) => {
      const target = w.en.replace(/[?.!]/g, "");
      const blanked = w.example.replace(new RegExp(target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), "___");
      const distractors = sample(words, 2, words.indexOf(w)).map(di => words[di].en);
      const correctPos = Math.floor(Math.random() * 3);
      const opts = [];
      let di = 0;
      for (let p = 0; p < 3; p++) {
        if (p === correctPos) opts.push(w.en);
        else { opts.push(distractors[di]); di++; }
      }
      return { word: w, sentence: blanked, opts, correctIdx: correctPos };
    });
  }
  if (stageKey === "sentence-shuffle") {
    return words.filter(w => w.example).map(w => ({
      word: w,
      tokens: tokenize(w.example),
      answer: w.example,
    }));
  }
  return [];
}

// ============================================================
// Generic sequential runner (picture-matching / multiple-choice / missing-word / sentence-shuffle)
// ============================================================
function runSequential(host, stageKey, items, onDone) {
  let i = 0;
  let correctCount = 0;

  function renderDots() {
    return `<div class="runner-dots">${items.map((_, idx) => `<span class="runner-dot ${idx < i ? "done" : idx === i ? "current" : ""}"></span>`).join("")}</div>`;
  }

  function renderItem() {
    const item = items[i];
    let body = "";

    if (stageKey === "picture-matching") {
      body = `
        <div class="runner-prompt"><div class="prompt-label">Chọn hình đúng</div><div class="prompt-main">${item.word.en}</div></div>
        <div class="runner-pics">
          ${item.opts.map((o, oi) => `<div class="runner-pic-opt" data-idx="${oi}">${VOCAB_ICONS[o.icon] || ""}</div>`).join("")}
        </div>`;
    } else if (stageKey === "multiple-choice") {
      body = `
        <div class="runner-prompt"><div class="prompt-label">Chọn nghĩa đúng</div><div class="prompt-main">What does "${item.word.en}" mean?</div></div>
        <div class="runner-options">
          ${item.opts.map((o, oi) => `<div class="runner-opt" data-idx="${oi}"><span class="opt-letter">${String.fromCharCode(65 + oi)}</span>${o}</div>`).join("")}
        </div>`;
    } else if (stageKey === "missing-word") {
      body = `
        <div class="runner-prompt"><div class="prompt-label">Chọn từ còn thiếu</div><div class="prompt-main prompt-sentence">${item.sentence.replace("___", '<span class="blank">&nbsp;</span>')}</div></div>
        <div class="runner-options">
          ${item.opts.map((o, oi) => `<div class="runner-opt" data-idx="${oi}"><span class="opt-letter">${String.fromCharCode(65 + oi)}</span>${o}</div>`).join("")}
        </div>`;
    } else if (stageKey === "sentence-shuffle") {
      body = `
        <div class="runner-prompt"><div class="prompt-label">Sắp xếp thành câu đúng</div><div class="prompt-main">${item.word.vi}</div></div>
        <div class="runner-target" id="shuffle-target"></div>
        <div class="runner-pool" id="shuffle-pool">
          ${shuffle(item.tokens).map((w, wi) => `<span class="runner-chip" data-word="${w.replace(/"/g, "&quot;")}" data-pool-idx="${wi}">${w}</span>`).join("")}
        </div>`;
    }

    host.innerHTML = `
      <div class="runner-card">
        ${renderDots()}
        ${body}
        <div class="runner-feedback" id="runner-feedback"></div>
        <div class="runner-actions" id="runner-actions"></div>
      </div>`;

    wireItem(item);
  }

  function wireItem(item) {
    const feedback = document.getElementById("runner-feedback");
    const actions = document.getElementById("runner-actions");

    function finishAnswer(correct) {
      recordExposure(currentUnit.id, item.word.id, correct);
      if (correct) correctCount++;
      feedback.textContent = correct ? "✓ Correct!" : "✗ Try again.";
      feedback.className = "runner-feedback " + (correct ? "ok" : "no");
      actions.innerHTML = `<button class="btn btn-primary" id="runner-continue">${i === items.length - 1 ? "Hoàn thành" : "Tiếp tục"}</button>`;
      document.getElementById("runner-continue").addEventListener("click", () => {
        i++;
        if (i >= items.length) onDone();
        else renderItem();
      });
    }

    if (stageKey === "picture-matching" || stageKey === "multiple-choice" || stageKey === "missing-word") {
      const optSelector = stageKey === "picture-matching" ? ".runner-pic-opt" : ".runner-opt";
      host.querySelectorAll(optSelector).forEach(opt => {
        opt.addEventListener("click", () => {
          if (opt.dataset.locked) return;
          host.querySelectorAll(optSelector).forEach(o => o.dataset.locked = "1");
          const chosen = Number(opt.dataset.idx);
          const correct = chosen === item.correctIdx;
          opt.classList.add(correct ? "correct" : "incorrect");
          if (!correct) {
            const correctEl = host.querySelector(`${optSelector}[data-idx="${item.correctIdx}"]`);
            if (correctEl) correctEl.classList.add("correct");
          }
          finishAnswer(correct);
        });
      });
    } else if (stageKey === "sentence-shuffle") {
      const target = document.getElementById("shuffle-target");
      const pool = document.getElementById("shuffle-pool");
      pool.querySelectorAll(".runner-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          chip.classList.add("used");
          const clone = document.createElement("span");
          clone.className = "runner-chip";
          clone.textContent = chip.dataset.word;
          clone.addEventListener("click", () => { clone.remove(); chip.classList.remove("used"); });
          target.appendChild(clone);
          if (target.children.length === item.tokens.length) {
            const built = Array.from(target.children).map(c => c.textContent).join(" ");
            const norm = s => s.toLowerCase().replace(/[.?!]/g, "").replace(/\s+/g, " ").trim();
            const correct = norm(built) === norm(item.answer);
            setTimeout(() => finishAnswer(correct), 250);
          }
        });
      });
    }
  }

  renderItem();
}

// ============================================================
// Tap Pairs (whole board — all pairs on one screen)
// ============================================================
function renderTapPairs(host, unit, onDone) {
  const words = unit.words;
  const leftItems = words.map(w => ({ id: w.id, text: w.en }));
  const rightItems = shuffle(words.map(w => ({ id: w.id, text: w.vi })));
  const leftShuffled = shuffle(leftItems);

  host.innerHTML = `
    <div class="runner-card">
      <div class="runner-prompt"><div class="prompt-label">Chạm để ghép cặp đúng</div></div>
      <div class="pairs-board">
        <div class="pairs-col" id="pairs-left"></div>
        <div class="pairs-col" id="pairs-right"></div>
      </div>
      <div class="runner-feedback" id="pairs-feedback"></div>
      <div class="runner-actions" id="pairs-actions"></div>
    </div>`;

  const leftCol = document.getElementById("pairs-left");
  const rightCol = document.getElementById("pairs-right");
  leftCol.innerHTML = leftShuffled.map(x => `<div class="pair-tile" data-id="${x.id}" data-side="l">${x.text}</div>`).join("");
  rightCol.innerHTML = rightItems.map(x => `<div class="pair-tile" data-id="${x.id}" data-side="r">${x.text}</div>`).join("");

  let selectedLeft = null, selectedRight = null;
  let matched = 0;

  function tileClick(e) {
    const tile = e.currentTarget;
    if (tile.classList.contains("matched")) return;
    const side = tile.dataset.side;
    if (side === "l") {
      if (selectedLeft) selectedLeft.classList.remove("selected");
      selectedLeft = tile;
      tile.classList.add("selected");
    } else {
      if (selectedRight) selectedRight.classList.remove("selected");
      selectedRight = tile;
      tile.classList.add("selected");
    }
    if (selectedLeft && selectedRight) {
      const isMatch = selectedLeft.dataset.id === selectedRight.dataset.id;
      if (isMatch) {
        selectedLeft.classList.remove("selected");
        selectedRight.classList.remove("selected");
        selectedLeft.classList.add("matched");
        selectedRight.classList.add("matched");
        recordExposure(currentUnit.id, selectedLeft.dataset.id, true);
        matched++;
        selectedLeft = null; selectedRight = null;
        if (matched === leftShuffled.length) {
          document.getElementById("pairs-feedback").textContent = "✓ Ghép hết rồi!";
          document.getElementById("pairs-feedback").className = "runner-feedback ok";
          document.getElementById("pairs-actions").innerHTML = `<button class="btn btn-primary" id="pairs-continue">Tiếp tục</button>`;
          document.getElementById("pairs-continue").addEventListener("click", onDone);
        }
      } else {
        const l = selectedLeft, r = selectedRight;
        l.classList.add("shake"); r.classList.add("shake");
        setTimeout(() => {
          l.classList.remove("selected", "shake");
          r.classList.remove("selected", "shake");
        }, 350);
        selectedLeft = null; selectedRight = null;
      }
    }
  }

  host.querySelectorAll(".pair-tile").forEach(t => t.addEventListener("click", tileClick));
}

// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("unit-select-grid")) return; // not on vocabulary page
  renderUnitSelect();
  document.getElementById("btn-back-to-units")?.addEventListener("click", (e) => { e.preventDefault(); backToUnits(); });
});
