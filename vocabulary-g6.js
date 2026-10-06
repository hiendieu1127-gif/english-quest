// ============================================================
// Vocabulary (Khối 6) — interactive learning path
// Same engine as vocabulary.js (Grade 5) — only VOCAB_UNITS_G6 data
// and the localStorage key differ, so Grade 6 progress never mixes
// with other grades.
// Deep link: vocabulary-g6.html?unit=g6-unit1 opens that unit directly.
//
// NOTE: VOCAB_UNITS_G6 uses `var` (not `const`) so it becomes a real
// `window` property — teacher-dashboard.js auto-discovers every grade's
// catalog this way. The engine below is wrapped in (function(){ ... })()
// so it never clashes with the other grades' vocabulary files when the
// Dashboard loads all grades on one page.
// ============================================================

// Units are added here one by one (id "g6-unit1", "g6-unit2", ...).
var VOCAB_UNITS_G6 = [
];

(function () {
const STAGES = [
  { key: "tap-pairs", title: "Tap Pairs", subtitle: "Ghép từ với nghĩa" },
  { key: "picture-matching", title: "Picture Matching", subtitle: "Chọn hình đúng" },
  { key: "multiple-choice", title: "Multiple Choice", subtitle: "Chọn nghĩa đúng" },
  { key: "missing-word", title: "Missing Word", subtitle: "Chọn từ còn thiếu" },
  { key: "sentence-shuffle", title: "Sentence Shuffle", subtitle: "Sắp xếp câu" },
];

const PASS_LS_KEY = "eq_vocab_progress_g6";

// ============================================================
// Pronunciation — tap any English word/sentence to hear it read aloud
// ============================================================
function speakWord(text) {
  // A bare "I" is read by some voices as "capital I" — "aye" sounds right. Display unchanged.
  if (text && text.trim() === "I") text = "aye";
  if (window.EQSpeak) window.EQSpeak.speak(text);
}

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
let eqStudent = "";
let eqAnswers = {}; // key -> {question, studentAnswer, correctAnswer, correct}
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt

function eqUnitLabel(unit) {
  return `Unit ${unit.number}: ${unit.title}`;
}

function eqTotalItems(unit) {
  return ["picture-matching", "multiple-choice", "missing-word", "sentence-shuffle"]
    .reduce((sum, key) => sum + buildSequentialItems(key, unit).length, 0);
}

let saveQueue = Promise.resolve();

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  // The FIRST attempt is the main score (L1). Answers in retry rounds ("làm lại các câu sai",
  // Vòng 2, 3…) never change it — they are saved separately as the retry score (L2/L3).
  if (eqAnswers[key]) eqRetries.push({ question, studentAnswer, correctAnswer, correct });
  else eqAnswers[key] = { question, studentAnswer, correctAnswer, correct };
  if (!window.EQResults || !eqStudent || !currentUnit) return;
  const values = Object.values(eqAnswers);
  const correctCount = values.filter(a => a.correct).length;
  const payload = {
    student: eqStudent,
    unitId: currentUnit.id,
    unitLabel: eqUnitLabel(currentUnit),
    section: "vocabulary",
    correct: correctCount,
    total: eqTotalItems(currentUnit),
    answers: values,
    retries: eqRetries.slice(),
  };
  saveQueue = saveQueue.then(() => window.EQResults.saveResult(payload).catch(() => {}));
}

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
  grid.innerHTML = VOCAB_UNITS_G6.map(unit => {
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
  currentUnit = VOCAB_UNITS_G6.find(u => u.id === unitId);
  if (!currentUnit) return;
  currentStageIdx = 0;
  Object.keys(stageDone).forEach(k => delete stageDone[k]);
  eqAnswers = {};
  eqRetries = [];
  eqStudent = window.EQStudent ? window.EQStudent.ensureName() : "";
  if (window.EQResults && eqStudent) {
    window.EQResults.markInProgress({
      student: eqStudent,
      unitId: currentUnit.id,
      unitLabel: eqUnitLabel(currentUnit),
      section: "vocabulary",
    }).catch(() => {});
  }
  // (the CSS rule for .hidden targets a class that the element doesn't have,
  // so hide the unit cards directly — otherwise they stay visible above the lesson)
  document.getElementById("unit-select-view").style.display = "none";
  document.getElementById("path-view").classList.add("active");
  window.scrollTo(0, 0);
  document.getElementById("path-title").textContent = `Unit ${currentUnit.number}: ${currentUnit.title}`;
  renderStepper();
  renderStage(0);
}

function backToUnits() {
  document.getElementById("unit-select-view").style.display = "";
  document.getElementById("path-view").classList.remove("active");
  renderUnitSelect();
}

function renderStepper() {
  const el = document.getElementById("stage-stepper");
  el.innerHTML = STAGES.map((s, i) => {
    const locked = !isStageUnlocked(i);
    return `
    <button class="stage-pill ${i === currentStageIdx ? "active" : ""} ${stageDone[s.key] ? "done" : ""} ${locked ? "locked" : ""}" data-stage="${i}" ${locked ? 'aria-disabled="true" title="Hoàn thành dạng bài trước để mở khoá"' : ""}>
      <span class="stage-dot">${stageDone[s.key] ? "✓" : locked ? "🔒" : i + 1}</span>${s.title}
    </button>
  `;
  }).join("");
  el.querySelectorAll(".stage-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.stage);
      if (!isStageUnlocked(idx)) {
        btn.classList.remove("shake");
        void btn.offsetWidth;
        btn.classList.add("shake");
        return;
      }
      renderStage(idx);
    });
  });
}

// Stages unlock in order: a student must finish stage N before opening stage N+1.
function isStageUnlocked(idx) {
  return STAGES.slice(0, idx).every(s => stageDone[s.key]);
}

function renderStage(idx) {
  if (!isStageUnlocked(idx)) return;
  currentStageIdx = idx;
  renderStepper();
  const stage = STAGES[idx];
  const host = document.getElementById("runner-host");
  if (stage.key === "tap-pairs") {
    renderTapPairs(host, currentUnit, () => onStageComplete(stage.key));
  } else {
    const items = buildSequentialItems(stage.key, currentUnit);
    if (items.length === 0) {
      stageDone[stage.key] = true;
      renderStepper();
      const hasNext = idx < STAGES.length - 1;
      host.innerHTML = `<div class="runner-card"><p style="text-align:center;color:var(--ink-soft)">Chưa có dữ liệu phù hợp cho dạng bài này ở Unit này.</p>${hasNext ? `<div class="runner-actions"><button class="btn btn-primary" id="btn-skip-stage">Dạng bài tiếp theo &rarr;</button></div>` : ""}</div>`;
      const skipBtn = document.getElementById("btn-skip-stage");
      if (skipBtn) skipBtn.addEventListener("click", () => renderStage(idx + 1));
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
  window.EQMascot && window.EQMascot.show("mascot-box", isLast ? "complete_unit" : "complete_exercise");
  host.innerHTML = `
    <div class="runner-card">
      <div class="stage-complete">
        <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>Xong rồi!</h3>
        <p>${isLast ? "Em đã hoàn thành hết các bài trong Unit này." : "Sẵn sàng cho dạng bài tiếp theo chưa?"}</p>
        <div class="runner-actions" ${isLast ? 'style="flex-direction:column;align-items:stretch;"' : ""}>
          ${isLast
            ? `${currentUnit.hasExercises === false ? "" : `<button class="btn btn-primary" id="btn-go-exercises" style="width:100%;white-space:normal;">Tiếp tục sang phần Exercise &rarr;</button>`}<button class="btn ${currentUnit.hasExercises === false ? "btn-primary" : "btn-secondary"}" id="btn-back-units" style="width:100%;white-space:normal;">Quay lại danh sách Unit</button>`
            : `<button class="btn btn-primary" id="btn-next-stage">Dạng bài tiếp theo &rarr;</button>`}
        </div>
      </div>
    </div>`;
  const nextBtn = document.getElementById("btn-next-stage");
  if (nextBtn) nextBtn.addEventListener("click", () => renderStage(currentStageIdx + 1));
  const backBtn = document.getElementById("btn-back-units");
  if (backBtn) backBtn.addEventListener("click", backToUnits);
  const goExercisesBtn = document.getElementById("btn-go-exercises");
  if (goExercisesBtn) goExercisesBtn.addEventListener("click", () => {
    window.location.href = `unit${currentUnit.number}-exercises-g6.html`;
  });
}

// Distractors for an item: words from the SAME `group` first (e.g. numbers
// with numbers, this with that), then any other word in the stage pool.
function pickDistractors(pool, idx, n) {
  const g = pool[idx].group || "default";
  const others = pool.map((_, i) => i).filter(i => i !== idx);
  const same = shuffle(others.filter(i => (pool[i].group || "default") === g));
  const rest = shuffle(others.filter(i => (pool[i].group || "default") !== g));
  return same.concat(rest).slice(0, n);
}

// ============================================================
// Build the item list for a sequential (one-at-a-time) stage
// ============================================================
function buildSequentialItems(stageKey, unit) {
  const wordsForStage = unit.words.filter(w => w.stages && w.stages.includes(stageKey));

  if (stageKey === "picture-matching") {
    const pool = wordsForStage.filter(w => w.icon || w.clock || w.textMatch);
    if (pool.length < 2) return [];
    const optCount = Math.min(3, pool.length);
    return pool.map((w, wIdx) => {
      const distractors = pickDistractors(pool, wIdx, optCount - 1).map(di => pool[di]);
      const correctPos = Math.floor(Math.random() * optCount);
      const opts = [];
      let di = 0;
      for (let i = 0; i < optCount; i++) {
        if (i === correctPos) opts.push(w);
        else { opts.push(distractors[di]); di++; }
      }
      return { word: w, opts, correctIdx: correctPos };
    });
  }

  if (stageKey === "multiple-choice") {
    const pool = wordsForStage;
    return shuffle(pool.map((w, i) => {
      const distractors = pickDistractors(pool, i, 2).map(di => pool[di]);
      const correctPos = Math.floor(Math.random() * 3);
      const opts = [];
      let di = 0;
      for (let p = 0; p < 3; p++) {
        if (p === correctPos) opts.push(w.vi);
        else { opts.push(distractors[di].vi); di++; }
      }
      return { word: w, opts, correctIdx: correctPos };
    }));
  }

  if (stageKey === "missing-word") {
    const pool = wordsForStage.filter(w => w.example && w.blank && w.example.toLowerCase().includes(w.blank.toLowerCase()));
    return pool.map((w, i) => {
      const blanked = w.example.replace(new RegExp(w.blank.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), "___");
      const distractors = sample(pool, 2, i).map(di => pool[di].blank);
      const correctPos = Math.floor(Math.random() * 3);
      const opts = [];
      let di = 0;
      for (let p = 0; p < 3; p++) {
        if (p === correctPos) opts.push(w.blank);
        else { opts.push(distractors[di]); di++; }
      }
      return { word: w, sentence: blanked, opts, correctIdx: correctPos };
    });
  }

  if (stageKey === "sentence-shuffle") {
    return wordsForStage.filter(w => w.example).map(w => ({
      word: w,
      tokens: w.chunks && w.chunks.length ? w.chunks.slice() : tokenize(w.example),
      answer: w.example,
    }));
  }

  return [];
}

// ============================================================
// Generic sequential runner (picture-matching / multiple-choice / missing-word / sentence-shuffle)
// ============================================================
function runSequential(host, stageKey, items, onDone) {
  let queue = items;
  let i = 0;
  let wrongQueue = [];
  let round = 1;

  function renderDots() {
    return `<div class="runner-dots">${queue.map((_, idx) => `<span class="runner-dot ${idx < i ? "done" : idx === i ? "current" : ""}"></span>`).join("")}</div>`;
  }

  function renderItem() {
    const item = queue[i];
    let body = "";

    if (stageKey === "picture-matching" && item.word.textMatch) {
      body = `
        <div class="runner-prompt"><div class="prompt-label">Chọn từ đúng</div><div class="prompt-main">${item.word.vi}</div></div>
        <div class="runner-options">
          ${item.opts.map((o, oi) => `<div class="runner-opt" data-idx="${oi}"><span class="opt-letter">${String.fromCharCode(65 + oi)}</span>${o.en}</div>`).join("")}
        </div>`;
    } else if (stageKey === "picture-matching") {
      body = `
        <div class="runner-prompt"><div class="prompt-label">Chọn hình đúng</div><div class="prompt-main prompt-speak" id="prompt-speak">🔊 ${item.word.en}</div></div>
        <div class="runner-pics">
          ${item.opts.map((o, oi) => `<div class="runner-pic-opt" data-idx="${oi}">${o.icon ? `<img src="${o.icon}" alt="${o.en}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">` : o.clock ? `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1f2a44;border-radius:12px;color:#7CFFB2;font-family:'Courier New',monospace;font-weight:800;font-size:clamp(20px,6vw,34px);letter-spacing:1px;">${o.clock}<span style="font-size:0.5em;margin-left:3px;">${o.ampm || ""}</span></div>` : ""}</div>`).join("")}
        </div>`;
    } else if (stageKey === "multiple-choice") {
      body = `
        <div class="runner-prompt"><div class="prompt-label">Chọn nghĩa đúng</div><div class="prompt-main prompt-speak" id="prompt-speak">🔊 What does "${item.word.en}" mean?</div></div>
        <div class="runner-options">
          ${item.opts.map((o, oi) => `<div class="runner-opt" data-idx="${oi}"><span class="opt-letter">${String.fromCharCode(65 + oi)}</span>${o}</div>`).join("")}
        </div>`;
    } else if (stageKey === "missing-word") {
      body = `
        <div class="runner-prompt"><div class="prompt-label">Chọn từ còn thiếu</div><div class="prompt-main prompt-sentence prompt-speak" id="prompt-speak">🔊 ${item.sentence.replace("___", '<span class="blank">&nbsp;</span>')}</div></div>
        <div class="runner-options">
          ${item.opts.map((o, oi) => `<div class="runner-opt" data-idx="${oi}"><span class="opt-letter">${String.fromCharCode(65 + oi)}</span>${o}</div>`).join("")}
        </div>
        ${item.word.viBlanked ? `
        <div class="runner-translate">
          <button class="btn btn-ghost btn-sm" id="btn-translate" type="button">🌐 Dịch</button>
          <div class="translate-text" id="translate-text" style="display:none;margin-top:8px;color:var(--ink-soft);"></div>
        </div>` : ""}`;
    } else if (stageKey === "sentence-shuffle") {
      body = `
        <div class="runner-prompt">
          <div class="prompt-label">Sắp xếp thành câu đúng</div>
          <button class="btn btn-ghost btn-sm" id="btn-hear-sentence" type="button">🔊 Nghe câu</button>
        </div>
        <div class="runner-target" id="shuffle-target"></div>
        <div class="runner-pool" id="shuffle-pool">
          ${shuffle(item.tokens).map((w, wi) => `<span class="runner-chip" data-word="${w.replace(/"/g, "&quot;")}" data-pool-idx="${wi}">${w}</span>`).join("")}
        </div>
        ${item.word.viFull ? `
        <div class="runner-translate">
          <button class="btn btn-ghost btn-sm" id="btn-translate" type="button">🌐 Dịch</button>
          <div class="translate-text" id="translate-text" style="display:none;margin-top:8px;color:var(--ink-soft);"></div>
        </div>` : ""}`;
    }

    host.innerHTML = `
      <div class="runner-card">
        ${round > 1 ? `<div class="prompt-label" style="margin-bottom:6px;">🔁 Làm lại các câu sai — vòng ${round}</div>` : ""}
        ${renderDots()}
        ${body}
        <div class="runner-feedback" id="runner-feedback"></div>
        <div class="runner-actions" id="runner-actions"></div>
      </div>`;

    if (stageKey === "missing-word") {
      // read the FULL sentence, answer included (e.g. "Do you live in this flat?")
      const spoken = item.word.example;
      speakWord(spoken);
      const promptEl = document.getElementById("prompt-speak");
      if (promptEl) {
        promptEl.style.cursor = "pointer";
        promptEl.addEventListener("click", () => speakWord(spoken));
      }
    }

    if ((stageKey === "picture-matching" && !item.word.textMatch) || stageKey === "multiple-choice") {
      speakWord(item.word.en);
      const promptEl = document.getElementById("prompt-speak");
      if (promptEl) {
        promptEl.style.cursor = "pointer";
        promptEl.addEventListener("click", () => speakWord(item.word.en));
      }
    }

    if (stageKey === "sentence-shuffle") {
      speakWord(item.answer);
      const hearBtn = document.getElementById("btn-hear-sentence");
      if (hearBtn) hearBtn.addEventListener("click", () => speakWord(item.answer));
    }

    const translateBtn = document.getElementById("btn-translate");
    if (translateBtn) {
      translateBtn.addEventListener("click", () => {
        const box = document.getElementById("translate-text");
        box.style.display = "block";
        if (stageKey === "sentence-shuffle") {
          box.textContent = item.word.viFull;
        } else {
          const answered = !!host.querySelector('.runner-opt[data-locked="1"]');
          box.textContent = answered ? item.word.viFull : item.word.viBlanked;
        }
      });
    }

    wireItem(item);
  }

  function revealFullTranslation() {
    const box = document.getElementById("translate-text");
    if (!box) return;
    box.style.display = "block";
    box.textContent = box.dataset.viFull || box.textContent;
  }

  function wireItem(item) {
    const feedback = document.getElementById("runner-feedback");
    const actions = document.getElementById("runner-actions");
    const translateBox = document.getElementById("translate-text");
    if (translateBox && item.word.viFull) translateBox.dataset.viFull = item.word.viFull;

    function finishAnswer(correct) {
      recordExposure(currentUnit.id, item.word.id, correct);
      if (!correct) wrongQueue.push(item);
      feedback.textContent = correct ? "✓ Correct!" : "✗ Chưa đúng — đáp án đúng đã hiện phía trên.";
      feedback.className = "runner-feedback " + (correct ? "ok" : "no");
      if (stageKey === "picture-matching" && item.word.note) {
        const noteEl = document.createElement("div");
        noteEl.style.cssText = "margin-top:6px;font-weight:800;color:var(--ink);";
        noteEl.textContent = `${item.word.en} = ${item.word.note}`;
        feedback.appendChild(noteEl);
      }
      window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
      revealFullTranslation();
      if (stageKey === "missing-word" && item.word.example) speakWord(item.word.example);
      const isLastOfQueue = i === queue.length - 1;
      actions.innerHTML = `<button class="btn btn-primary" id="runner-continue">${isLastOfQueue ? "Tiếp tục" : "Câu tiếp theo"}</button>`;
      document.getElementById("runner-continue").addEventListener("click", () => {
        i++;
        if (i >= queue.length) {
          if (wrongQueue.length > 0) {
            queue = wrongQueue;
            wrongQueue = [];
            i = 0;
            round++;
            renderItem();
          } else {
            onDone();
          }
        } else {
          renderItem();
        }
      });
    }

    if (stageKey === "picture-matching" || stageKey === "multiple-choice" || stageKey === "missing-word") {
      const optSelector = stageKey === "picture-matching" && !item.word.textMatch ? ".runner-pic-opt" : ".runner-opt";
      host.querySelectorAll(optSelector).forEach(opt => {
        opt.addEventListener("click", () => {
          if (host.querySelector(`${optSelector}[data-locked="1"]`)) return;
          const chosen = Number(opt.dataset.idx);
          const correct = chosen === item.correctIdx;

          let question, chosenLabel, correctLabel;
          if (stageKey === "picture-matching") {
            question = item.word.textMatch ? `"${item.word.vi}" in English?` : `Picture for "${item.word.en}"`;
            chosenLabel = item.opts[chosen].en;
            correctLabel = item.word.en;
            speakWord(item.opts[chosen].en);
          } else if (stageKey === "multiple-choice") {
            question = `What does "${item.word.en}" mean?`;
            chosenLabel = item.opts[chosen];
            correctLabel = item.opts[item.correctIdx];
          } else {
            question = item.sentence;
            chosenLabel = item.opts[chosen];
            correctLabel = item.opts[item.correctIdx];
          }

          eqRecordAndSave(`${stageKey}-${item.word.id}`, question, chosenLabel, correctLabel, correct);
          window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());

          host.querySelectorAll(optSelector).forEach(o => o.dataset.locked = "1");
          host.querySelector(`${optSelector}[data-idx="${item.correctIdx}"]`)?.classList.add("correct");
          if (!correct) opt.classList.add("incorrect");

          finishAnswer(correct);
        });
      });
    } else if (stageKey === "sentence-shuffle") {
      const target = document.getElementById("shuffle-target");
      const pool = document.getElementById("shuffle-pool");
      pool.querySelectorAll(".runner-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          if (pool.dataset.locked === "1") return;
          speakWord(chip.dataset.word);
          chip.classList.add("used");
          const clone = document.createElement("span");
          clone.className = "runner-chip";
          clone.textContent = chip.dataset.word;
          clone.addEventListener("click", () => {
            if (pool.dataset.locked === "1") return;
            clone.remove();
            chip.classList.remove("used");
          });
          target.appendChild(clone);
          if (target.children.length === item.tokens.length) {
            pool.dataset.locked = "1";
            const built = Array.from(target.children).map(c => c.textContent).join(" ");
            const norm = s => s.toLowerCase().replace(/[.?!]/g, "").replace(/\s+/g, " ").trim();
            const correct = norm(built) === norm(item.answer);
            eqRecordAndSave(`sentence-shuffle-${item.word.id}`, item.word.vi, built, item.answer, correct);
            window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
            if (!correct) {
              const reveal = document.createElement("div");
              reveal.className = "prompt-label";
              reveal.style.marginTop = "8px";
              reveal.textContent = `Đáp án đúng: ${item.answer}`;
              target.insertAdjacentElement("afterend", reveal);
            }
            setTimeout(() => finishAnswer(correct), 400);
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
  const words = unit.words.filter(w => w.stages && w.stages.includes("tap-pairs"));
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
      speakWord(tile.textContent);
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
      window.EQSound && (isMatch ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", isMatch ? "correct" : "wrong");
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
  const wantedUnit = new URLSearchParams(window.location.search).get("unit");
  if (wantedUnit && VOCAB_UNITS_G6.some(u => u.id === wantedUnit)) openUnit(wantedUnit);
  document.getElementById("btn-back-to-units")?.addEventListener("click", (e) => { e.preventDefault(); backToUnits(); });
});
})();
