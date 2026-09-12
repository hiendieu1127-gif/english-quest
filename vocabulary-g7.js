// ============================================================
// Vocabulary (Khối 7) — interactive learning path
// Same engine as vocabulary.js (Grade 5) — only VOCAB_UNITS data
// and the localStorage key differ, so Grade 7 progress never mixes
// with Grade 5 progress.
// ============================================================

const VOCAB_UNITS = [
  {
    id: "g7-unit1",
    number: 1,
    title: "Hobbies",
    subtitle: "Global Success 7 · New Vocabulary",
    words: [
      // Tap Pairs — from slides 2 & 3 (13 words)
      { id: "g7u1-go-upstairs", en: "go upstairs", vi: "đi lên lầu", stages: ["tap-pairs"] },
      { id: "g7u1-make-it-yourself", en: "make it yourself", vi: "tự làm lấy", stages: ["tap-pairs"] },
      { id: "g7u1-doll", en: "doll", vi: "búp bê", stages: ["tap-pairs"] },
      { id: "g7u1-dollhouse", en: "dollhouse", vi: "nhà búp bê", stages: ["tap-pairs"] },
      { id: "g7u1-build", en: "build", vi: "xây dựng", stages: ["tap-pairs"] },
      { id: "g7u1-cardboard", en: "cardboard", vi: "bìa giấy cứng", stages: ["tap-pairs"] },
      { id: "g7u1-glue", en: "glue", vi: "keo dán", stages: ["tap-pairs"] },
      { id: "g7u1-creativity", en: "creativity", vi: "sự sáng tạo", stages: ["tap-pairs"] },
      { id: "g7u1-horse-riding", en: "horse riding", vi: "cưỡi ngựa", stages: ["tap-pairs"] },
      { id: "g7u1-rather", en: "rather", vi: "khá", stages: ["tap-pairs"] },
      { id: "g7u1-unusual", en: "unusual", vi: "hiếm, lạ thường", stages: ["tap-pairs"] },
      { id: "g7u1-common", en: "common", vi: "phổ biến", stages: ["tap-pairs"] },
      { id: "g7u1-would-love-to", en: "would love to", vi: "yêu thích làm cái gì đó", stages: ["tap-pairs"] },

      // Picture Matching — from slides 4 & 5 (11 words)
      // NOTE for Hien: real photos not uploaded yet — replace each icon
      // path below with the matching file once you send the images.
      // Just keep the same file names and drop the images into /img/.
      { id: "g7u1-making-models", en: "making models", vi: "làm mô hình", icon: "img/vocab-g7-u1-making-models.jpg", stages: ["picture-matching"] },
      { id: "g7u1-riding-a-horse", en: "riding a horse", vi: "cưỡi ngựa", icon: "img/vocab-g7-u1-riding-a-horse.jpg", stages: ["picture-matching"] },
      { id: "g7u1-collecting-coins", en: "collecting coins", vi: "sưu tập đồng tiền xu", icon: "img/vocab-g7-u1-collecting-coins.jpg", stages: ["picture-matching"] },
      { id: "g7u1-gardening", en: "gardening", vi: "làm vườn", icon: "img/vocab-g7-u1-gardening.jpg", stages: ["picture-matching", "multiple-choice", "missing-word"], example: "My grandmother loves gardening every weekend.", blank: "gardening", viFull: "Bà tôi thích làm vườn vào mỗi cuối tuần.", viBlanked: "Bà tôi thích ___ vào mỗi cuối tuần." },
      { id: "g7u1-building-dollhouses", en: "building dollhouses", vi: "làm nhà búp bê", icon: "img/vocab-g7-u1-building-dollhouses.jpg", stages: ["picture-matching"] },
      { id: "g7u1-collecting-teddy-bears", en: "collecting teddy bears", vi: "sưu tập gấu bông", icon: "img/vocab-g7-u1-collecting-teddy-bears.jpg", stages: ["picture-matching"] },
      { id: "g7u1-go-jogging", en: "go jogging", vi: "đi chạy bộ", icon: "img/vocab-g7-u1-go-jogging.jpg", stages: ["picture-matching"] },
      { id: "g7u1-go-swimming", en: "go swimming", vi: "đi bơi", icon: "img/vocab-g7-u1-go-swimming.jpg", stages: ["picture-matching"] },
      { id: "g7u1-do-judo", en: "do judo", vi: "tập judo", icon: "img/vocab-g7-u1-do-judo.jpg", stages: ["picture-matching"] },
      { id: "g7u1-do-yoga", en: "do yoga", vi: "tập yoga", icon: "img/vocab-g7-u1-do-yoga.jpg", stages: ["picture-matching"] },
      { id: "g7u1-collect-dolls", en: "collect dolls", vi: "sưu tập búp bê", icon: "img/vocab-g7-u1-collect-dolls.jpg", stages: ["picture-matching"] },

      // Multiple Choice / Missing Word / Sentence Shuffle — from slides 6, 7 & 8
      // (17 words; example sentences written by Claude at a medium level,
      // themed around a family gardening story, per Hien's request)
      { id: "g7u1-divide-into", en: "divide something into something", vi: "phân chia cái gì thành...", example: "We divided the garden into four small parts.", blank: "divided", stages: ["multiple-choice", "missing-word"], viFull: "Chúng tôi chia khu vườn thành bốn phần nhỏ.", viBlanked: "Chúng tôi ___ khu vườn thành bốn phần nhỏ." },
      { id: "g7u1-belong-to", en: "belong to somebody or something", vi: "thuộc về cái gì/ai", example: "This part of the garden belongs to me.", blank: "belongs to", stages: ["multiple-choice", "missing-word"], viFull: "Phần vườn này thuộc về tôi.", viBlanked: "Phần vườn này ___ tôi." },
      { id: "g7u1-outdoor-activity", en: "outdoor activity", vi: "hoạt động ngoài trời", example: "Gardening is a fun outdoor activity.", blank: "outdoor activity", stages: ["multiple-choice", "missing-word"], viFull: "Làm vườn là một hoạt động ngoài trời thú vị.", viBlanked: "Làm vườn là một ___ thú vị." },
      { id: "g7u1-even-for", en: "even for", vi: "thậm chí đối với", example: "This job is hard, even for adults.", blank: "even for", stages: ["multiple-choice", "missing-word"], viFull: "Công việc này khó, thậm chí đối với người lớn.", viBlanked: "Công việc này khó, ___ người lớn." },
      { id: "g7u1-insect", en: "insect", vi: "côn trùng", example: "We found many insects in the garden.", blank: "insects", stages: ["multiple-choice", "missing-word"], viFull: "Chúng tôi tìm thấy nhiều côn trùng trong vườn.", viBlanked: "Chúng tôi tìm thấy nhiều ___ trong vườn." },
      { id: "g7u1-bug", en: "bug", vi: "bọ", example: "A small bug was sitting on a leaf.", blank: "bug", stages: ["multiple-choice", "missing-word"], viFull: "Một con bọ nhỏ đang đậu trên một chiếc lá.", viBlanked: "Một con ___ nhỏ đang đậu trên một chiếc lá." },
      { id: "g7u1-learn-to", en: "learn to", vi: "học cách làm...", example: "Gardening helps children learn to take care of plants.", blank: "learn to", stages: ["multiple-choice", "missing-word"], viFull: "Làm vườn giúp trẻ em học cách chăm sóc cây cối.", viBlanked: "Làm vườn giúp trẻ em ___ chăm sóc cây cối." },
      { id: "g7u1-patient", en: "patient", vi: "kiên nhẫn", example: "You need to be patient when you grow plants.", blank: "patient", stages: ["multiple-choice", "missing-word"], viFull: "Bạn cần kiên nhẫn khi trồng cây.", viBlanked: "Bạn cần ___ khi trồng cây." },
      { id: "g7u1-take-on-responsibility", en: "take on responsibility", vi: "đảm nhận trách nhiệm", example: "Each child had to take on responsibility for a small garden.", blank: "take on responsibility", stages: ["multiple-choice", "missing-word"], viFull: "Mỗi đứa trẻ phải đảm nhận trách nhiệm với một khu vườn nhỏ.", viBlanked: "Mỗi đứa trẻ phải ___ với một khu vườn nhỏ." },
      { id: "g7u1-grow-to", en: "grow to", vi: "phát triển thành", example: "A small seed can grow to become a big tree.", blank: "grow to", stages: ["multiple-choice", "missing-word"], viFull: "Một hạt giống nhỏ có thể phát triển thành một cây to.", viBlanked: "Một hạt giống nhỏ có thể ___ một cây to." },
      { id: "g7u1-maturity", en: "maturity", vi: "trưởng thành", example: "It takes months for a plant to reach maturity.", blank: "maturity", stages: ["multiple-choice", "missing-word"], viFull: "Phải mất nhiều tháng để một cái cây trưởng thành.", viBlanked: "Phải mất nhiều tháng để một cái cây đạt đến ___." },
      { id: "g7u1-water", en: "water", vi: "tưới nước", example: "We watered the plants every morning.", blank: "watered", stages: ["multiple-choice", "missing-word"], viFull: "Chúng tôi tưới cây mỗi sáng.", viBlanked: "Chúng tôi ___ cây mỗi sáng." },
      { id: "g7u1-die", en: "die", vi: "chết", example: "The plant died because nobody watered it.", blank: "died", stages: ["multiple-choice", "missing-word"], viFull: "Cái cây đã chết vì không ai tưới nó.", viBlanked: "Cái cây đã ___ vì không ai tưới nó." },
      { id: "g7u1-valuable-lesson", en: "valuable lesson", vi: "bài học giá trị", example: "Gardening taught me a valuable lesson.", blank: "valuable lesson", stages: ["multiple-choice", "missing-word"], viFull: "Làm vườn đã dạy tôi một bài học giá trị.", viBlanked: "Làm vườn đã dạy tôi một ___." },
      { id: "g7u1-responsibility", en: "responsibility", vi: "trách nhiệm", example: "Taking care of a garden is a big responsibility.", blank: "responsibility", stages: ["multiple-choice", "missing-word"], viFull: "Chăm sóc một khu vườn là một trách nhiệm lớn.", viBlanked: "Chăm sóc một khu vườn là một ___ lớn." },
      { id: "g7u1-join-in", en: "join in", vi: "tham gia vào", example: "Would you like to join in our garden club?", blank: "join in", stages: ["multiple-choice", "missing-word"], viFull: "Bạn có muốn tham gia câu lạc bộ làm vườn của chúng tôi không?", viBlanked: "Bạn có muốn ___ câu lạc bộ làm vườn của chúng tôi không?" },
      { id: "g7u1-love-ving", en: "love doing something", vi: "yêu thích làm cái gì", example: "I love gardening every weekend.", blank: "love gardening", stages: ["multiple-choice", "missing-word"], viFull: "Tôi thích làm vườn vào mỗi cuối tuần.", viBlanked: "Tôi ___ vào mỗi cuối tuần." },
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

const PASS_LS_KEY = "eq_vocab_progress_g7";

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
    return unit.words.filter(w => w.example).map(w => ({
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
        ${item.word.viBlanked ? `
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

    // Picture Matching / Multiple Choice: hearing the target word IS the
    // question, so auto-play it and let the student tap to hear it again.
    if (stageKey === "picture-matching" || stageKey === "multiple-choice") {
      speakWord(item.word.en);
      const promptEl = document.getElementById("prompt-speak");
      if (promptEl) {
        promptEl.style.cursor = "pointer";
        promptEl.addEventListener("click", () => speakWord(item.word.en));
      }
    }

    // Missing Word: stay silent until the student has answered — playing
    // the target word here would give the answer away before they pick.
    // (See finishAnswer() for the post-answer playback of the full sentence.)

    // Sentence Shuffle: play the full correct sentence once up front so
    // students can build the sentence by ear, with a button to replay it
    // as many times as they like.
    if (stageKey === "sentence-shuffle") {
      speakWord(item.answer);
      const hearBtn = document.getElementById("btn-hear-sentence");
      if (hearBtn) hearBtn.addEventListener("click", () => speakWord(item.answer));
    }

    // Translate button (Missing Word & Sentence Shuffle): shows the full
    // Vietnamese translation right away, any time it's tapped.
    const translateBtn = document.getElementById("btn-translate");
    if (translateBtn) {
      translateBtn.addEventListener("click", () => {
        const box = document.getElementById("translate-text");
        box.style.display = "block";
        box.textContent = item.word.viFull;
      });
    }

    wireItem(item);
  }

  function revealFullTranslation() {
    const box = document.getElementById("translate-text");
    if (!box) return;
    box.dataset.revealed = "1";
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
      window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
      revealFullTranslation();
      // Missing Word: only now (after the student has answered) do we
      // read the correct sentence aloud — and read the whole sentence,
      // not just the single missing word.
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
            // No audio here — finishAnswer() reads the full correct
            // sentence aloud once the student has answered.
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
  document.getElementById("btn-back-to-units")?.addEventListener("click", (e) => { e.preventDefault(); backToUnits(); });
});
