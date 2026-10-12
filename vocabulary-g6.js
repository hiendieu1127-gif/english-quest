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
  {
    id: "g6-unit1",
    number: 1,
    title: "My New School",
    subtitle: "Global Success 6 · New Vocabulary",
    // 36 scored items: Picture Matching 8 + Multiple Choice 12 + Missing Word 8 + Sentence Shuffle 8.
    // Tap Pairs (12) is practice only. Words / sentences approved by cô Hiền.
    words: [
      // Tap Pairs (12 words, practice only)
      { id: "g6u1-textbook", en: "textbook", vi: "sách giáo khoa", stages: ["tap-pairs"] },
      { id: "g6u1-notebook", en: "notebook", vi: "vở, sổ ghi chép", stages: ["tap-pairs"] },
      { id: "g6u1-uniform", en: "uniform", vi: "đồng phục", stages: ["tap-pairs"] },
      { id: "g6u1-classroom", en: "classroom", vi: "lớp học", stages: ["tap-pairs"] },
      { id: "g6u1-library", en: "library", vi: "thư viện", stages: ["tap-pairs"] },
      { id: "g6u1-playground", en: "playground", vi: "sân chơi", stages: ["tap-pairs"] },
      { id: "g6u1-gym", en: "gym", vi: "phòng tập thể dục", stages: ["tap-pairs"] },
      { id: "g6u1-swimming-pool", en: "swimming pool", vi: "bể bơi", stages: ["tap-pairs"] },
      { id: "g6u1-computer-room", en: "computer room", vi: "phòng máy tính", stages: ["tap-pairs"] },
      { id: "g6u1-garden", en: "garden", vi: "khu vườn", stages: ["tap-pairs"] },
      { id: "g6u1-classmate-tp", en: "classmate", vi: "bạn cùng lớp", stages: ["tap-pairs"] },
      { id: "g6u1-lunch-break", en: "lunch break", vi: "giờ nghỉ trưa", stages: ["tap-pairs"] },

      // Picture Matching (8 words) — ảnh do cô Hiền gửi
      { id: "g6u1-school-bag", en: "school bag", vi: "cặp sách", icon: "img/vocab-g6-u1-school-bag.jpg", stages: ["picture-matching"] },
      { id: "g6u1-pencil-case", en: "pencil case", vi: "hộp bút", icon: "img/vocab-g6-u1-pencil-case.jpg", stages: ["picture-matching"] },
      { id: "g6u1-pencil-sharpener", en: "pencil sharpener", vi: "gọt bút chì", icon: "img/vocab-g6-u1-pencil-sharpener.jpg", stages: ["picture-matching"] },
      { id: "g6u1-rubber", en: "rubber", vi: "cục tẩy", icon: "img/vocab-g6-u1-rubber.jpg", stages: ["picture-matching"] },
      { id: "g6u1-ruler", en: "ruler", vi: "thước kẻ", icon: "img/vocab-g6-u1-ruler.jpg", stages: ["picture-matching"] },
      { id: "g6u1-compass", en: "compass", vi: "com-pa", icon: "img/vocab-g6-u1-compass.jpg", stages: ["picture-matching"] },
      { id: "g6u1-calculator", en: "calculator", vi: "máy tính cầm tay", icon: "img/vocab-g6-u1-calculator.jpg", stages: ["picture-matching"] },
      { id: "g6u1-bicycle", en: "bicycle", vi: "xe đạp", icon: "img/vocab-g6-u1-bicycle.jpg", stages: ["picture-matching"] },

      // Multiple Choice (12 words) — choose the Vietnamese meaning
      { id: "g6u1-maths", en: "maths", vi: "môn Toán", group: "subjects", stages: ["multiple-choice"] },
      { id: "g6u1-english", en: "English", vi: "môn Tiếng Anh", group: "subjects", stages: ["multiple-choice"] },
      { id: "g6u1-science", en: "science", vi: "môn Khoa học", group: "subjects", stages: ["multiple-choice"] },
      { id: "g6u1-history", en: "history", vi: "môn Lịch sử", group: "subjects", stages: ["multiple-choice"] },
      { id: "g6u1-geography", en: "geography", vi: "môn Địa lí", group: "subjects", stages: ["multiple-choice"] },
      { id: "g6u1-music", en: "music", vi: "môn Âm nhạc", group: "subjects", stages: ["multiple-choice"] },
      { id: "g6u1-art", en: "art", vi: "môn Mĩ thuật", group: "subjects", stages: ["multiple-choice"] },
      { id: "g6u1-pe", en: "PE", vi: "môn Thể dục", group: "subjects", stages: ["multiple-choice"] },
      { id: "g6u1-it", en: "IT", vi: "môn Tin học", group: "subjects", stages: ["multiple-choice"] },
      { id: "g6u1-boarding-school", en: "boarding school", vi: "trường nội trú", group: "school", stages: ["multiple-choice"] },
      { id: "g6u1-international-school", en: "international school", vi: "trường quốc tế", group: "school", stages: ["multiple-choice"] },
      { id: "g6u1-classmate", en: "classmate", vi: "bạn cùng lớp", group: "school", stages: ["multiple-choice"] },

      // Missing Word (8 sentences)
      { id: "g6u1-excited", en: "excited", vi: "hào hứng", example: "I'm very excited about my first day at my new school.", blank: "excited", stages: ["missing-word"], viFull: "Tớ rất hào hứng về ngày đầu tiên ở trường mới.", viBlanked: "Tớ rất ___ về ngày đầu tiên ở trường mới." },
      { id: "g6u1-smart", en: "smart", vi: "bảnh, gọn gàng", example: "You look smart in your new uniform.", blank: "smart", stages: ["missing-word"], viFull: "Trông bạn thật bảnh trong bộ đồng phục mới.", viBlanked: "Trông bạn thật ___ trong bộ đồng phục mới." },
      { id: "g6u1-share", en: "share", vi: "chia sẻ, dùng chung", example: "Can you share your book with me?", blank: "share", stages: ["missing-word"], viFull: "Bạn có thể dùng chung sách với tớ không?", viBlanked: "Bạn có thể ___ sách với tớ không?" },
      { id: "g6u1-knock", en: "knock", vi: "gõ (cửa)", example: "Please knock at the door before you come in.", blank: "knock", stages: ["missing-word"], viFull: "Hãy gõ cửa trước khi vào nhé.", viBlanked: "Hãy ___ cửa trước khi vào nhé." },
      { id: "g6u1-creative", en: "creative", vi: "sáng tạo", example: "Our art teacher is very creative.", blank: "creative", stages: ["missing-word"], viFull: "Cô giáo dạy Mĩ thuật của chúng tớ rất sáng tạo.", viBlanked: "Cô giáo dạy Mĩ thuật của chúng tớ rất ___." },
      { id: "g6u1-remember", en: "remember", vi: "nhớ", example: "Remember to bring your calculator tomorrow.", blank: "Remember", stages: ["missing-word"], viFull: "Nhớ mang máy tính cầm tay vào ngày mai nhé.", viBlanked: "___ mang máy tính cầm tay vào ngày mai nhé." },
      { id: "g6u1-do-judo", en: "do judo", vi: "tập judo", example: "We do judo after school.", blank: "do", stages: ["missing-word"], viFull: "Chúng tớ tập judo sau giờ học.", viBlanked: "Chúng tớ ___ judo sau giờ học." },
      { id: "g6u1-play-football", en: "play football", vi: "chơi bóng đá", example: "They play football at break time.", blank: "play", stages: ["missing-word"], viFull: "Họ chơi bóng đá vào giờ ra chơi.", viBlanked: "Họ ___ bóng đá vào giờ ra chơi." },

      // Sentence Shuffle (8 sentences)
      { id: "g6u1-ss-english-lessons", en: "have English lessons", vi: "có tiết Tiếng Anh", example: "We have English lessons on Monday.", viFull: "Chúng tớ có tiết Tiếng Anh vào thứ Hai.", chunks: ["We have", "English lessons", "on Monday."], stages: ["sentence-shuffle"] },
      { id: "g6u1-ss-study-vocabulary", en: "study vocabulary", vi: "học từ vựng", example: "She studies new vocabulary every day.", viFull: "Cô ấy học từ vựng mới mỗi ngày.", chunks: ["She studies", "new vocabulary", "every day."], stages: ["sentence-shuffle"] },
      { id: "g6u1-ss-do-homework", en: "do my homework", vi: "làm bài tập về nhà", example: "I always do my homework after dinner.", viFull: "Tớ luôn làm bài tập về nhà sau bữa tối.", chunks: ["I always", "do my homework", "after dinner."], stages: ["sentence-shuffle"] },
      { id: "g6u1-ss-doesnt-play", en: "doesn't play football", vi: "không chơi bóng đá", example: "My brother doesn't play football at school.", viFull: "Anh trai tớ không chơi bóng đá ở trường.", chunks: ["My brother", "doesn't play", "football at school."], stages: ["sentence-shuffle"] },
      { id: "g6u1-ss-new-calculator", en: "a new calculator", vi: "một chiếc máy tính cầm tay mới", example: "Do you have a new calculator?", viFull: "Bạn có máy tính cầm tay mới không?", chunks: ["Do you have", "a new calculator?"], stages: ["sentence-shuffle"] },
      { id: "g6u1-ss-never-late", en: "never late", vi: "không bao giờ muộn", example: "She is never late for school.", viFull: "Cô ấy không bao giờ đi học muộn.", chunks: ["She is never", "late", "for school."], stages: ["sentence-shuffle"] },
      { id: "g6u1-ss-school-like", en: "What's your school like?", vi: "Trường bạn thế nào?", example: "What's your school like?", viFull: "Trường của bạn như thế nào?", chunks: ["What's", "your school", "like?"], stages: ["sentence-shuffle"] },
      { id: "g6u1-ss-lunch-at-school", en: "have lunch at school", vi: "ăn trưa ở trường", example: "My classmates usually have lunch at school.", viFull: "Các bạn cùng lớp của tớ thường ăn trưa ở trường.", chunks: ["My classmates", "usually have lunch", "at school."], stages: ["sentence-shuffle"] },
    ],
  },
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
let reviewingStage = false; // current stage was already finished when opened → answers are not saved
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
  // Review of a stage that was already finished: practice only, the Dashboard keeps the first attempt.
  if (reviewingStage) return;
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
  reviewingStage = false;
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
  resumeOrStart(currentUnit);
}

// ---- Remembered progress (eq-progress.js): resume at the first unfinished stage ----
function progressId(unit) {
  return `vocabulary__${unit.id}`;
}

function persistProgress() {
  if (!window.EQProgress || !eqStudent || !currentUnit) return;
  window.EQProgress.save(progressId(currentUnit), eqStudent, {
    done: Object.keys(stageDone),
    answers: eqAnswers,
    retries: eqRetries,
  });
}

async function resumeOrStart(unit) {
  if (window.EQProgress && eqStudent) {
    const saved = window.EQProgress.load(progressId(unit), eqStudent);
    renderStepper();
    document.getElementById("runner-host").innerHTML = `<div class="runner-card"><p style="text-align:center;color:var(--ink-soft)">Đang tải bài em đã làm…</p></div>`;
    const dash = await window.EQProgress.checkDashboard(saved, { student: eqStudent, unitId: unit.id, section: "vocabulary" });
    if (currentUnit !== unit) return; // student already left this unit
    const progress = dash.progress;
    if (progress) {
      progress.done.forEach(k => { stageDone[k] = true; });
      eqAnswers = Object.assign({}, progress.answers || {});
      eqRetries = (progress.retries || []).slice();
    }
    if (saved && !dash.savedValid) {
      window.EQProgress.clear(progressId(unit), eqStudent);
    }
    // Already fully answered on the Dashboard (maybe on another device): everything is review.
    if (dash.finished) STAGES.forEach(s => { stageDone[s.key] = true; });
  }
  const next = STAGES.findIndex(s => !stageDone[s.key]);
  if (next === -1) {
    // Everything was already finished — show the "done" screen instead of restarting.
    currentStageIdx = STAGES.length - 1;
    onStageComplete(STAGES[currentStageIdx].key);
  } else {
    renderStage(next);
  }
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
  let note = document.getElementById("review-note");
  if (!note) {
    note = document.createElement("p");
    note.id = "review-note";
    note.className = "review-note";
    el.insertAdjacentElement("afterend", note);
  }
  note.textContent = "🔁 Em đã làm phần này rồi — ôn lại thoải mái, không tính điểm nhé!";
  note.style.display = reviewingStage ? "" : "none";
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
  reviewingStage = !!stageDone[STAGES[idx].key];
  renderStepper();
  const stage = STAGES[idx];
  const host = document.getElementById("runner-host");
  if (stage.key === "tap-pairs") {
    renderTapPairs(host, currentUnit, () => onStageComplete(stage.key));
  } else {
    const items = buildSequentialItems(stage.key, currentUnit);
    if (items.length === 0) {
      stageDone[stage.key] = true;
      persistProgress();
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
  persistProgress();
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
            ? `${currentUnit.hasGrammar === false ? "" : `<button class="btn btn-primary" id="btn-go-grammar" style="width:100%;white-space:normal;">Tiếp tục sang phần Grammar &rarr;</button>`}<button class="btn ${currentUnit.hasGrammar === false ? "btn-primary" : "btn-secondary"}" id="btn-back-units" style="width:100%;white-space:normal;">Quay lại danh sách Unit</button>`
            : `<button class="btn btn-primary" id="btn-next-stage">Dạng bài tiếp theo &rarr;</button>`}
        </div>
      </div>
    </div>`;
  const nextBtn = document.getElementById("btn-next-stage");
  if (nextBtn) nextBtn.addEventListener("click", () => renderStage(currentStageIdx + 1));
  const backBtn = document.getElementById("btn-back-units");
  if (backBtn) backBtn.addEventListener("click", backToUnits);
  const goGrammarBtn = document.getElementById("btn-go-grammar");
  if (goGrammarBtn) goGrammarBtn.addEventListener("click", () => {
    window.location.href = `unit${currentUnit.number}-grammar-g6.html`;
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
