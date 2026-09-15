// ============================================================
// Vocabulary — interactive learning path
// Data-driven: adding a new unit = adding one object to VOCAB_UNITS_G5.
// Each word has a `stages` array saying which stage(s) it belongs to
// (tap-pairs / picture-matching / multiple-choice / missing-word).
// Sentence Shuffle is the one exception: it still just uses any word
// that has an `example` sentence, regardless of stage tag.
// Picture Matching also needs an `icon`; Missing Word also needs an
// `example` containing the phrase to blank out.
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

      // Missing Word — 4 set phrases (also feed Sentence Shuffle, unchanged mechanism)
      { id: "tell-a-little-bit", en: "Let me tell you a little bit about myself.", vi: "Để tôi kể cho các bạn nghe một chút về bản thân tôi.", example: "Let me tell you a little bit about myself.", blank: "tell you", stages: ["missing-word"] },
      { id: "introduce-myself", en: "Let me introduce myself.", vi: "Để tôi giới thiệu về bản thân mình.", example: "Let me introduce myself.", blank: "introduce", stages: ["missing-word"] },
      { id: "tell-about-yourself-q", en: "Can you tell me about yourself?", vi: "Bạn có thể kể cho tôi về bản thân của bạn được không?", example: "Can you tell me about yourself?", blank: "tell", stages: ["missing-word"] },
      { id: "whats-your-name", en: "What's your name?", vi: "Tên bạn là gì?", example: "What's your name?", blank: "name", stages: ["missing-word"] },
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

// Picture Matching now uses real photos (see each word's `icon` path
// above) instead of hand-drawn icons.

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
  window.EQMascot && window.EQMascot.show("mascot-box", isLast ? "complete_unit" : "complete_exercise");
  host.innerHTML = `
    <div class="runner-card">
      <div class="stage-complete">
        <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>Xong rồi!</h3>
        <p>${isLast ? "Chị đã hoàn thành hết các bài trong Unit này." : "Sẵn sàng cho dạng bài tiếp theo chưa?"}</p>
        <div class="runner-actions" ${isLast ? 'style="flex-direction:column;align-items:stretch;"' : ""}>
          ${isLast
            ? `<button class="btn btn-primary" id="btn-go-exercises" style="width:100%;white-space:normal;">Tiếp tục sang phần Exercise &rarr;</button><button class="btn btn-secondary" id="btn-back-units" style="width:100%;white-space:normal;">Quay lại danh sách Unit</button>`
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

// ============================================================
// Build the item list for a sequential (one-at-a-time) stage
// ============================================================
function buildSequentialItems(stageKey, unit) {
  const wordsForStage = unit.words.filter(w => w.stages && w.stages.includes(stageKey));

  if (stageKey === "picture-matching") {
    const pool = wordsForStage.filter(w => w.icon);
    return pool.map(w => {
      const wIdx = pool.indexOf(w);
      const distractorIdx = sample(pool, 2, wIdx);
      const correctPos = Math.floor(Math.random() * 3);
      const opts = [];
      let di = 0;
      for (let i = 0; i < 3; i++) {
        if (i === correctPos) opts.push(w);
        else { opts.push(pool[distractorIdx[di] ?? 0]); di++; }
      }
      return { word: w, opts, correctIdx: correctPos };
    });
  }

  if (stageKey === "multiple-choice") {
    const pool = wordsForStage;
    return pool.map((w, i) => {
      const distractors = sample(pool, 2, i).map(di => pool[di]);
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
    const pool = wordsForStage.filter(w => w.example && w.blank && w.example.toLowerCase().includes(w.blank.toLowerCase()));
    return pool.map((w, i) => {
      const blanked =
