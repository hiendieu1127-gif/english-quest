// ============================================================
// Vocabulary — interactive learning path
// Data-driven: adding a new unit = adding one object to VOCAB_UNITS_G5.
// Each word has a `stages` array saying which stage(s) it belongs to
// (tap-pairs / picture-matching / multiple-choice / missing-word /
// sentence-shuffle).
// Picture Matching also needs an `icon` (+ optional `note` shown after
// answering); Missing Word needs `example` + `blank` (+ optional
// `viFull` / `viBlanked` for the 🌐 Dịch button); Sentence Shuffle needs
// `example` (+ optional `chunks`, `viFull`).
// Optional `group` (e.g. "numbers", "this-that"): wrong answers are taken
// from the same group first.
// Optional unit flag `hasExercises: false` hides the "sang phần Exercise"
// button on the last screen until that unit's Exercises page exists.
// Deep link: vocabulary.html?unit=unit2 opens that unit directly.
//
// NOTE: uses `var` (not `const`) so this becomes a real `window`
// property — teacher-dashboard.js auto-discovers every grade's
// catalog this way, matching the VOCAB_UNITS_G<N> naming pattern.
// ============================================================

var VOCAB_UNITS_G5 = [
  {
    id: "unit1",
    number: 1,
    title: "All About Me",
    subtitle: "Global Success 5 · New Vocabulary",
    words: [
      // Tap Pairs — slide 1
      { id: "city", en: "city", vi: "thành phố", stages: ["tap-pairs"] },
      { id: "countryside", en: "countryside", vi: "vùng nông thôn", stages: ["tap-pairs"] },
      { id: "class", en: "class", vi: "lớp học", stages: ["tap-pairs"] },
      { id: "nice-to-meet-you", en: "Nice to meet you.", vi: "Rất vui được gặp bạn.", stages: ["tap-pairs"] },
      { id: "tell-about-yourself", en: "Can you tell me about yourself?", vi: "Bạn có thể kể cho tôi về bản thân của bạn được không?", stages: ["tap-pairs"] },

      // Picture Matching — slides 2 & 3
      { id: "dolphin", en: "dolphin", vi: "cá heo", icon: "img/vocab-dolphin.jpg", stages: ["picture-matching"] },
      { id: "basketball", en: "basketball", vi: "bóng rổ", icon: "img/vocab-basketball.jpg", stages: ["picture-matching"] },
      { id: "swimming", en: "swimming", vi: "bơi lội", icon: "img/vocab-swimming.jpg", stages: ["picture-matching"] },
      { id: "table-tennis", en: "table tennis", vi: "bóng bàn", icon: "img/vocab-table-tennis.jpg", stages: ["picture-matching"] },
      { id: "panda", en: "panda", vi: "gấu trúc", icon: "img/vocab-panda.jpg", stages: ["picture-matching"] },
      { id: "giraffe", en: "giraffe", vi: "hươu cao cổ", icon: "img/vocab-giraffe.jpg", stages: ["picture-matching"] },
      { id: "japan", en: "Japan", vi: "Nhật Bản", icon: "img/vocab-japan.jpg", stages: ["picture-matching"] },
      { id: "england", en: "England", vi: "nước Anh", icon: "img/vocab-england.jpg", stages: ["picture-matching"] },

      // Multiple Choice — slides 4 & 5 (selected words)
      { id: "fish", en: "fish", vi: "(món) cá", stages: ["multiple-choice"] },
      { id: "chips", en: "chips", vi: "khoai tây chiên", stages: ["multiple-choice"] },
      { id: "big-fan", en: "a big fan", vi: "một fan hâm mộ lớn", stages: ["multiple-choice"] },
      { id: "baseball", en: "baseball", vi: "bóng chày", stages: ["multiple-choice"] },
      { id: "rabbit", en: "rabbit", vi: "thỏ", stages: ["multiple-choice"] },
      { id: "food", en: "food", vi: "thức ăn", stages: ["multiple-choice"] },
      { id: "kitten", en: "kitten", vi: "mèo con", stages: ["multiple-choice"] },
      { id: "pets", en: "pets", vi: "thú cưng", stages: ["multiple-choice"] },

      // Missing Word — 4 set phrases (these same 4 sentences also feed Sentence Shuffle)
      { id: "tell-a-little-bit", en: "Let me tell you a little bit about myself.", vi: "Để tôi kể cho các bạn nghe một chút về bản thân tôi.", viFull: "Để tôi kể cho các bạn nghe một chút về bản thân tôi.", example: "Let me tell you a little bit about myself.", blank: "tell you", stages: ["missing-word", "sentence-shuffle"] },
      { id: "introduce-myself", en: "Let me introduce myself.", vi: "Để tôi giới thiệu về bản thân mình.", viFull: "Để tôi giới thiệu về bản thân mình.", example: "Let me introduce myself.", blank: "introduce", stages: ["missing-word", "sentence-shuffle"] },
      { id: "tell-about-yourself-q", en: "Can you tell me about yourself?", vi: "Bạn có thể kể cho tôi về bản thân của bạn được không?", viFull: "Bạn có thể kể cho tôi về bản thân của bạn được không?", example: "Can you tell me about yourself?", blank: "tell", stages: ["missing-word", "sentence-shuffle"] },
      { id: "whats-your-name", en: "What's your name?", vi: "Tên bạn là gì?", viFull: "Tên bạn là gì?", example: "What's your name?", blank: "name", stages: ["missing-word", "sentence-shuffle"] },
    ],
  },

  {
    id: "unit2",
    number: 2,
    title: "Our Homes",
    subtitle: "Global Success 5 · New Vocabulary",
    words: [
      // Tap Pairs — slides 1, 3 & 4
      { id: "u2-house", en: "house", vi: "nhà ở", icon: "img/vocab-g5-u2-house.jpg", stages: ["tap-pairs", "picture-matching"] },
      { id: "u2-building", en: "building", vi: "toà nhà", icon: "img/vocab-g5-u2-building.jpg", stages: ["tap-pairs", "picture-matching"] },
      { id: "u2-tower", en: "tower", vi: "toà tháp", icon: "img/vocab-g5-u2-tower.jpg", stages: ["tap-pairs", "picture-matching"] },
      { id: "u2-flat", en: "flat", vi: "căn hộ", icon: "img/vocab-g5-u2-flat.jpg", stages: ["tap-pairs", "picture-matching"] },
      { id: "u2-school", en: "school", vi: "trường học", icon: "img/vocab-g5-u2-school.jpg", stages: ["tap-pairs", "picture-matching"] },
      { id: "u2-street", en: "street", vi: "con đường", icon: "img/vocab-g5-u2-street.jpg", stages: ["tap-pairs", "picture-matching"] },
      { id: "u2-near", en: "near", vi: "gần", group: "words", stages: ["tap-pairs", "multiple-choice"] },
      { id: "u2-far", en: "far", vi: "xa", group: "words", stages: ["tap-pairs", "multiple-choice"] },
      { id: "u2-great", en: "great", vi: "tuyệt vời", group: "words", stages: ["tap-pairs", "multiple-choice"] },
      { id: "u2-best-friend", en: "best friend", vi: "bạn thân", group: "words", stages: ["tap-pairs", "multiple-choice"] },

      // Picture Matching — 6 photos (same words as Tap Pairs) + this = near, that = far (slide 2)
      { id: "u2-this", en: "this", vi: "chỉ vật ở gần", note: "chỉ vật ở gần", group: "this-that", icon: "img/vocab-g5-u2-this.jpg", stages: ["picture-matching"] },
      { id: "u2-that", en: "that", vi: "chỉ vật ở xa", note: "chỉ vật ở xa", group: "this-that", icon: "img/vocab-g5-u2-that.jpg", stages: ["picture-matching"] },

      // Multiple Choice — phrases (slides 3 & 4)
      { id: "u2-dear-lan", en: "Dear Lan,", vi: "Gửi Lan,", group: "phrases", stages: ["multiple-choice"] },
      { id: "u2-what-about-you", en: "What about you?", vi: "Còn bạn thì sao?", group: "phrases", stages: ["multiple-choice"] },
      { id: "u2-house-address", en: "What's your house address?", vi: "Địa chỉ nhà của bạn là gì?", group: "phrases", stages: ["multiple-choice"] },

      // Multiple Choice — numbers 11–20 (slide 5). Distractors come from the same group.
      { id: "u2-n11", en: "eleven", vi: "11", group: "numbers", stages: ["multiple-choice"] },
      { id: "u2-n12", en: "twelve", vi: "12", group: "numbers", stages: ["multiple-choice"] },
      { id: "u2-n13", en: "thirteen", vi: "13", group: "numbers", stages: ["multiple-choice"] },
      { id: "u2-n14", en: "fourteen", vi: "14", group: "numbers", stages: ["multiple-choice"] },
      { id: "u2-n15", en: "fifteen", vi: "15", group: "numbers", stages: ["multiple-choice"] },
      { id: "u2-n16", en: "sixteen", vi: "16", group: "numbers", stages: ["multiple-choice"] },
      { id: "u2-n17", en: "seventeen", vi: "17", group: "numbers", stages: ["multiple-choice"] },
      { id: "u2-n18", en: "eighteen", vi: "18", group: "numbers", stages: ["multiple-choice"] },
      { id: "u2-n19", en: "nineteen", vi: "19", group: "numbers", stages: ["multiple-choice"] },
      { id: "u2-n20", en: "twenty", vi: "20", group: "numbers", stages: ["multiple-choice"] },

      // Missing Word + Sentence Shuffle — set sentences (slides 1, 3 & 4)
      { id: "u2-s-live-flat", en: "Do you live in this flat?", vi: "Bạn có sống trong căn hộ này không?", example: "Do you live in this flat?", blank: "this", viFull: "Bạn có sống trong căn hộ này không?", viBlanked: "Bạn có sống trong căn hộ ___ không?", stages: ["missing-word", "sentence-shuffle"] },
      { id: "u2-s-address", en: "What's your house address?", vi: "Địa chỉ nhà của bạn là gì?", example: "What's your house address?", blank: "address", viFull: "Địa chỉ nhà của bạn là gì?", viBlanked: "___ nhà của bạn là gì?", stages: ["missing-word", "sentence-shuffle"] },
      { id: "u2-s-tran-phu", en: "It's Tran Phu street.", vi: "Trên đường Tran Phu.", example: "It's Tran Phu street.", blank: "street", viFull: "Trên đường Tran Phu.", viBlanked: "Trên ___ Tran Phu.", stages: ["missing-word", "sentence-shuffle"] },
      { id: "u2-s-great-city", en: "It's a great city.", vi: "Đó là một thành phố tuyệt vời.", example: "It's a great city.", blank: "great", viFull: "Đó là một thành phố tuyệt vời.", viBlanked: "Đó là một thành phố ___.", stages: ["missing-word", "sentence-shuffle"] },
      { id: "u2-s-what-about-you", en: "What about you?", vi: "Còn bạn thì sao?", example: "What about you?", blank: "about", viFull: "Còn bạn thì sao?", viBlanked: "___ bạn thì sao?", stages: ["missing-word", "sentence-shuffle"] },

      // Sentence Shuffle only
      { id: "u2-s-yes-i-do", en: "Yes, I do.", vi: "Yes, I do.", example: "Yes, I do.", stages: ["sentence-shuffle"] },
      { id: "u2-s-no-i-dont", en: "No, I don't.", vi: "No, I don't.", example: "No, I don't.", stages: ["sentence-shuffle"] },
      { id: "u2-s-this-house", en: "This is a house.", vi: "Đây là một ngôi nhà.", example: "This is a house.", viFull: "Đây là một ngôi nhà. (this: chỉ vật ở gần)", stages: ["sentence-shuffle"] },
      { id: "u2-s-that-tower", en: "That is a tower.", vi: "Kia là một toà tháp.", example: "That is a tower.", viFull: "Kia là một toà tháp. (that: chỉ vật ở xa)", stages: ["sentence-shuffle"] },
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

const PASS_LS_KEY = "eq_vocab_progress";

// ============================================================
// Pronunciation — tap any English word/sentence to hear it read aloud
// ============================================================
function speakWord(text) {
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

function eqUnitLabel(unit) {
  return `Unit ${unit.number}: ${unit.title}`;
}

function eqTotalItems(unit) {
  return ["picture-matching", "multiple-choice", "missing-word", "sentence-shuffle"]
    .reduce((sum, key) => sum + buildSequentialItems(key, unit).length, 0);
}

let saveQueue = Promise.resolve();

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  // Only the FIRST attempt is scored. Retry rounds ("làm lại các câu sai") are
  // practice only, so they must never overwrite the first answer's result.
  if (eqAnswers[key]) return;
  eqAnswers[key] = { question, studentAnswer, correctAnswer, correct };
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
  grid.innerHTML = VOCAB_UNITS_G5.map(unit => {
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
  currentUnit = VOCAB_UNITS_G5.find(u => u.id === unitId);
  if (!currentUnit) return;
  currentStageIdx = 0;
  Object.keys(stageDone).forEach(k => delete stageDone[k]);
  eqAnswers = {};
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
    window.location.href = `${currentUnit.id}-exercises.html`;
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
    const pool = wordsForStage.filter(w => w.icon);
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

    if (stageKey === "picture-matching") {
      body = `
        <div class="runner-prompt"><div class="prompt-label">Chọn hình đúng</div><div class="prompt-main prompt-speak" id="prompt-speak">🔊 ${item.word.en}</div></div>
        <div class="runner-pics">
          ${item.opts.map((o, oi) => `<div class="runner-pic-opt" data-idx="${oi}">${o.icon ? `<img src="${o.icon}" alt="${o.en}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">` : ""}</div>`).join("")}
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

    if (stageKey === "picture-matching" || stageKey === "multiple-choice") {
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
      const optSelector = stageKey === "picture-matching" ? ".runner-pic-opt" : ".runner-opt";
      host.querySelectorAll(optSelector).forEach(opt => {
        opt.addEventListener("click", () => {
          if (host.querySelector(`${optSelector}[data-locked="1"]`)) return;
          const chosen = Number(opt.dataset.idx);
          const correct = chosen === item.correctIdx;

          let question, chosenLabel, correctLabel;
          if (stageKey === "picture-matching") {
            question = `Picture for "${item.word.en}"`;
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
  if (wantedUnit && VOCAB_UNITS_G5.some(u => u.id === wantedUnit)) openUnit(wantedUnit);
  document.getElementById("btn-back-to-units")?.addEventListener("click", (e) => { e.preventDefault(); backToUnits(); });
});
