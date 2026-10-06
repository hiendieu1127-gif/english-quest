// ============================================================
// Grade 5 — Unit 3 (My Foreign Friends) — Exercises
// Source: teacher Hien's workbook images (Global Success 5 Sách bài tập, Unit 3)
//
// 5 sections, in this order:
//   1 Reading  2 Vocabulary  3 Fill in the Blank  4 Sentence Ordering  5 Quiz
// Reading = the Annie passage. Fill in the Blank = 8 a/b questions made from the
// passage (turned from the workbook's True/False items, as Hien asked).
// Sentence Ordering = Writing ex. 1 "Make sentences".
// Quiz = workbook pages 12–13 (p.12 ex. 2 "Label the pictures" dropped, as Hien asked):
//   Listen and circle (Track 5) → Circle and write → Read and complete →
//   Read and match → Listen and tick or cross (Track 6).
//   The two listening parts stay hidden until their audio + answers are filled in.
//
// Vietnamese: Australian / helpful / pupil / active come from Hien's vocab slides;
// everything else was translated by Claude — please review.
// ============================================================

const SCORE_ORDERING = true;

// ============================================================
// 1) READING  (practice only)
// ============================================================
const READING_HTML =
  "This is my new <mark>penfriend</mark>, Annie. She is <mark>Australian</mark>. " +
  "She lives with her <mark>parents</mark> and her <mark>younger sister</mark> in Sydney. " +
  "Annie is <mark>helpful</mark>. At home, she plays with her sister. She also <mark>cooks meals</mark> with her parents. " +
  "At school, she is a <mark>library helper</mark>. She helps <mark>pupils</mark> in Grade 1 and Grade 2 find books. " +
  "Annie is also an <mark>active</mark> girl. She likes <mark>playing sports</mark>. " +
  "She is really good at <mark>basketball</mark> and <mark>roller skating</mark>.";

// translated by Claude — please review
const READING_VI =
  "Đây là bạn qua thư mới của tôi, Annie. Bạn ấy là người Úc. " +
  "Bạn ấy sống với bố mẹ và em gái ở Sydney. " +
  "Annie hay giúp đỡ người khác. Ở nhà, bạn ấy chơi với em gái. Bạn ấy cũng nấu các bữa ăn cùng bố mẹ. " +
  "Ở trường, bạn ấy là người phụ giúp thư viện. Bạn ấy giúp các học sinh lớp 1 và lớp 2 tìm sách. " +
  "Annie cũng là một cô bé năng động. Bạn ấy thích chơi thể thao. " +
  "Bạn ấy chơi bóng rổ và trượt pa-tanh rất giỏi.";

// ============================================================
// 2) VOCABULARY  (practice only) — the highlighted words, tap to hear + flip
// ============================================================
const VOCAB_ITEMS = [
  { en: "penfriend", vi: "bạn qua thư" },
  { en: "Australian", vi: "thuộc về nước Úc, người Úc" },
  { en: "parents", vi: "bố mẹ" },
  { en: "younger sister", vi: "em gái" },
  { en: "helpful", vi: "hay giúp đỡ, sẵn lòng hỗ trợ người khác" },
  { en: "cooks meals", vi: "nấu các bữa ăn" },
  { en: "library helper", vi: "người phụ giúp thư viện" },
  { en: "pupils", vi: "học sinh" },
  { en: "active", vi: "năng động, tích cực tham gia" },
  { en: "playing sports", vi: "chơi thể thao" },
  { en: "basketball", vi: "bóng rổ" },
  { en: "roller skating", vi: "trượt pa-tanh" },
];

// ============================================================
// 3) FILL IN THE BLANK  (scored: 8) — about Annie, answers from the passage
// ============================================================
const FITB_ITEMS = [
  { id: 1, stem: "Annie is ___.", options: [{ key: "a", text: "American" }, { key: "b", text: "Australian" }], answer: "b",
    vi: "Annie là ___.", optVi: ["a. người Mỹ", "b. người Úc"] },
  { id: 2, stem: "She lives in ___.", options: [{ key: "a", text: "Sydney" }, { key: "b", text: "Tokyo" }], answer: "a",
    vi: "Bạn ấy sống ở ___.", optVi: ["a. Sydney", "b. Tokyo"] },
  { id: 3, stem: "She lives with her parents and her ___.", options: [{ key: "a", text: "younger sister" }, { key: "b", text: "older brother" }], answer: "a",
    vi: "Bạn ấy sống với bố mẹ và ___ của bạn ấy.", optVi: ["a. em gái", "b. anh trai"] },
  { id: 4, stem: "At home, she ___ with her sister.", options: [{ key: "a", text: "plays" }, { key: "b", text: "cooks" }], answer: "a",
    vi: "Ở nhà, bạn ấy ___ với em gái.", optVi: ["a. chơi", "b. nấu ăn"] },
  { id: 5, stem: "She cooks meals with her ___.", options: [{ key: "a", text: "sister" }, { key: "b", text: "parents" }], answer: "b",
    vi: "Bạn ấy nấu các bữa ăn cùng ___.", optVi: ["a. em gái", "b. bố mẹ"] },
  { id: 6, stem: "At school, she is a ___ helper.", options: [{ key: "a", text: "library" }, { key: "b", text: "classroom" }], answer: "a",
    vi: "Ở trường, bạn ấy là người phụ giúp ___.", optVi: ["a. thư viện", "b. lớp học"] },
  { id: 7, stem: "She helps ___ in Grade 1 and Grade 2 find books.", options: [{ key: "a", text: "teachers" }, { key: "b", text: "pupils" }], answer: "b",
    vi: "Bạn ấy giúp ___ lớp 1 và lớp 2 tìm sách.", optVi: ["a. các thầy cô giáo", "b. các học sinh"] },
  { id: 8, stem: "She is really good at basketball and ___.", options: [{ key: "a", text: "swimming" }, { key: "b", text: "roller skating" }], answer: "b",
    vi: "Bạn ấy chơi bóng rổ và ___ rất giỏi.", optVi: ["a. bơi lội", "b. trượt pa-tanh"] },
];

// ============================================================
// 4) SENTENCE ORDERING  (Writing ex. 1 "Make sentences") — same chunks as the workbook
// ============================================================
const ORDER_ITEMS = [
  {
    id: 1,
    chunks: [
      { en: "What", vi: "gì / nào" },
      { en: "nationality", vi: "quốc tịch" },
      { en: "is", vi: "là" },
      { en: "your new English teacher?", vi: "giáo viên tiếng Anh mới của bạn?" },
    ],
    answer: "What nationality is your new English teacher?",
    answerVi: "Giáo viên tiếng Anh mới của bạn thuộc quốc tịch nào?",
  },
  {
    id: 2,
    chunks: [
      { en: "His", vi: "của anh ấy" },
      { en: "friend", vi: "bạn" },
      { en: "is", vi: "là" },
      { en: "Japanese.", vi: "người Nhật." },
    ],
    answer: "His friend is Japanese.",
    answerVi: "Bạn của anh ấy là người Nhật.",
  },
  {
    id: 3,
    chunks: [
      { en: "She likes", vi: "cô ấy thích" },
      { en: "helping", vi: "giúp đỡ" },
      { en: "her classmates", vi: "các bạn cùng lớp của cô ấy" },
      { en: "because", vi: "bởi vì" },
      { en: "she's helpful.", vi: "cô ấy hay giúp đỡ người khác." },
    ],
    answer: "She likes helping her classmates because she's helpful.",
    answerVi: "Cô ấy thích giúp đỡ các bạn cùng lớp vì cô ấy hay giúp đỡ người khác.",
  },
  {
    id: 4,
    chunks: [
      { en: "My", vi: "của tôi" },
      { en: "new friend", vi: "người bạn mới" },
      { en: "is", vi: "thì / là" },
      { en: "very friendly", vi: "rất thân thiện" },
      { en: "and active.", vi: "và năng động." },
    ],
    answer: "My new friend is very friendly and active.",
    answerVi: "Người bạn mới của tôi rất thân thiện và năng động.",
  },
];

// ============================================================
// 5) QUIZ
// ============================================================

// ---- 5a) Listen and circle (p.12 ex. 1, Track 5) ----
// WAITING for Hien: upload the recording as track-5.mp3 (repo root) and fill in each
// `answer` ("a" / "b" / "c"). Until every answer is filled in, this part is hidden.
const LISTEN_ITEMS = [
  {
    id: 1,
    stem: "He's ___.",
    options: [{ key: "a", text: "polite" }, { key: "b", text: "alone" }, { key: "c", text: "clever" }],
    answer: null,
    audio: "track-5.mp3",
    audioNote: "Track 5 có cả câu 1 và câu 2. Nghe rồi chọn đáp án.",
    listenFull: true,
    noTranslate: true,
  },
  {
    id: 2,
    stem: "Their new English teachers are ___.",
    options: [{ key: "a", text: "helpful" }, { key: "b", text: "creative" }, { key: "c", text: "fantastic" }],
    answer: null,
    audio: "track-5.mp3",
    audioNote: "Track 5 có cả câu 1 và câu 2. Nghe rồi chọn đáp án.",
    listenFull: true,
    noTranslate: true,
  },
];

// ---- 5b) Circle and write (p.12 ex. 3) — 2 choices, with audio ----
const CIRCLE_ITEMS = [
  {
    id: 1,
    stem: "His teachers are from America. They're ___.",
    options: [{ key: "a", text: "American" }, { key: "b", text: "Australian" }],
    answer: "a",
    speakBefore: "His teachers are from America.",
    vi: "Các thầy cô của anh ấy đến từ nước Mỹ. Họ là ___.",
    optVi: ["a. người Mỹ", "b. người Úc"],
  },
  {
    id: 2,
    stem: "This is my friend Akiko from Japan. She's ___.",
    options: [{ key: "a", text: "Chinese" }, { key: "b", text: "Japanese" }],
    answer: "b",
    speakBefore: "This is my friend Akiko from Japan.",
    vi: "Đây là bạn tôi, Akiko, đến từ Nhật Bản. Bạn ấy là ___.",
    optVi: ["a. người Trung Quốc", "b. người Nhật"],
  },
  {
    id: 3,
    stem: "Her new classmates are very ___.",
    options: [{ key: "a", text: "clever" }, { key: "b", text: "favourite" }],
    answer: "a",
    vi: "Các bạn cùng lớp mới của cô ấy rất ___.",
    optVi: ["a. thông minh", "b. yêu thích"],
  },
  {
    id: 4,
    stem: "The shopkeeper is very ___ and always smiles.",
    options: [{ key: "a", text: "friendly" }, { key: "b", text: "sad" }],
    answer: "a",
    vi: "Cô bán hàng rất ___ và luôn mỉm cười.",
    optVi: ["a. thân thiện", "b. buồn"],
  },
];

// ---- 5c) Read and complete (p.13 B ex. 1) — a/b/c ----
const CHOOSE_ITEMS = [
  {
    id: 1,
    stem: "My new teacher is ___.",
    options: [{ key: "a", text: "American" }, { key: "b", text: "America" }, { key: "c", text: "Australia" }],
    answer: "a",
    vi: "Giáo viên mới của tôi là ___.",
    optVi: ["a. người Mỹ", "b. nước Mỹ", "c. nước Úc"],
  },
  {
    id: 2,
    stem: "Some of his friends live in Australia, but they are not ___.",
    options: [{ key: "a", text: "Japan" }, { key: "b", text: "Malaysia" }, { key: "c", text: "Australian" }],
    answer: "c",
    vi: "Một vài người bạn của anh ấy sống ở Úc, nhưng họ không phải là ___.",
    optVi: ["a. nước Nhật", "b. nước Malaysia", "c. người Úc"],
  },
  {
    id: 3,
    stem: "My dog is ___.",
    options: [{ key: "a", text: "help" }, { key: "b", text: "helpful" }, { key: "c", text: "helper" }],
    answer: "b",
    vi: "Con chó của tôi ___.",
    optVi: ["a. giúp đỡ", "b. hay giúp đỡ", "c. người giúp đỡ"],
  },
  {
    id: 4,
    stem: "I think she is a(n) ___ person because she enjoys playing sports.",
    options: [{ key: "a", text: "friendly" }, { key: "b", text: "actor" }, { key: "c", text: "active" }],
    answer: "c",
    fillText: "an active", // the full sentence reads "an active person"
    vi: "Tôi nghĩ cô ấy là một người ___ vì cô ấy thích chơi thể thao.",
    optVi: ["a. thân thiện", "b. diễn viên", "c. năng động"],
  },
];

// ---- 5d) Read and match (p.13 B ex. 2) — Tap Pairs with audio ----
// Answers: 1-c, 2-d, 3-a, 4-b
const PAIR_ITEMS = [
  { id: 1, left: "What nationality is he?", right: "He's Malaysian." },
  { id: 2, left: "Where's he from?", right: "He's from America." },
  { id: 3, left: "What's she like?", right: "She's clever." },
  { id: 4, left: "What does she look like?", right: "She's tall and slim." },
];

// ---- 5e) Listen and tick or cross (p.13 C, Track 6) ----
// WAITING for Hien: upload the recording as track-6.mp3 (repo root) and fill in each
// `answer` (true = ✓ tick, false = ✗ cross). Until every answer is filled in, this part is hidden.
const TICK_ITEMS = [
  { id: 1, img: "img/g5-u3-tick-1.jpg", answer: null },
  { id: 2, img: "img/g5-u3-tick-2.jpg", answer: null },
  { id: 3, img: "img/g5-u3-tick-3.jpg", answer: null },
  { id: 4, img: "img/g5-u3-tick-4.jpg", answer: null },
];
const TICK_AUDIO = "track-6.mp3";

// not used in this unit
const COMPLETE_WORDS = [];

// ============================================================
// Results saving — same saveQueue-serialized pattern as the other exercise pages.
// Score is based on the FIRST attempt only — retry rounds ("Vòng 2, 3...") are
// practice and never change the saved score.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================
const UNIT_ID = "unit3"; // Grade 5 keeps its historic un-prefixed unit ids (same as Vocabulary)
const UNIT_LABEL = "Unit 3: My Foreign Friends";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function listenEnabled() {
  return LISTEN_ITEMS.length > 0 && LISTEN_ITEMS.every(x => !!x.answer);
}

function tickEnabled() {
  return TICK_ITEMS.length > 0 && TICK_ITEMS.every(x => x.answer === true || x.answer === false);
}

function eqTotalItems() {
  return (
    FITB_ITEMS.length +
    (SCORE_ORDERING ? ORDER_ITEMS.length : 0) +
    (listenEnabled() ? LISTEN_ITEMS.length : 0) +
    CIRCLE_ITEMS.length +
    COMPLETE_WORDS.length +
    PAIR_ITEMS.length +
    CHOOSE_ITEMS.length +
    (tickEnabled() ? TICK_ITEMS.length : 0)
  );
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  // Review of a section that was already finished: practice only, the Dashboard keeps the first attempt.
  if (window.EQSectionLock && window.EQSectionLock.isReviewing()) return;
  // The FIRST attempt is the main score (L1). Answers in retry rounds ("làm lại các câu sai",
  // Vòng 2, 3…) never change it — they are saved separately as the retry score (L2/L3).
  if (eqAnswers[key]) eqRetries.push({ question, studentAnswer, correctAnswer, correct });
  else eqAnswers[key] = { question, studentAnswer, correctAnswer, correct };
  if (!window.EQResults || !eqStudent) return;
  const values = Object.values(eqAnswers);
  const correctCount = values.filter(a => a.correct).length;
  const payload = {
    student: eqStudent,
    unitId: UNIT_ID,
    unitLabel: UNIT_LABEL,
    section: "exercises",
    correct: correctCount,
    total: eqTotalItems(),
    answers: values,
    retries: eqRetries.slice(),
  };
  saveQueue = saveQueue.then(() => window.EQResults.saveResult(payload).catch(() => {}));
}

// ============================================================
// Small helpers
// ============================================================
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Shuffle, but never hand the student the already-correct order.
function shuffleNotSame(arr) {
  if (arr.length < 2) return arr.slice();
  let out = shuffle(arr);
  let guard = 0;
  while (out.every((x, i) => x === arr[i]) && guard++ < 20) out = shuffle(arr);
  return out;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderDots(current, total) {
  let dots = "";
  for (let idx = 0; idx < total; idx++) {
    dots += `<span class="runner-dot ${idx < current ? "done" : idx === current ? "current" : ""}"></span>`;
  }
  return `<div class="runner-dots">${dots}</div>`;
}

function roundHeader(round) {
  return round > 1
    ? `<div style="background:#fff3cd;color:#8a6b00;font-weight:700;padding:10px 16px;border-radius:12px;margin-bottom:14px;text-align:center;">🔄 Làm lại câu sai — Vòng ${round}</div>`
    : "";
}

// A bare "I" (the whole chunk) is misread by some voices as the spelled-out letter
// ("capital I"). "aye" is a homophone that speaks correctly. Only the spoken text changes.
function say(text) {
  if (!window.EQSpeak || !text) return;
  const spoken = text.trim() === "I" ? "aye" : text;
  window.EQSpeak.speak(spoken);
}

function sfx(correct) {
  window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
  window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
}

function optionText(item, key) {
  const o = item.options.find(x => x.key === key);
  return o ? o.text : "";
}

function fullSentence(item) {
  if (item.fillText) return item.stem.replace(/a\(n\) ___/, item.fillText).replace("___", item.fillText);
  return item.stem.replace("___", optionText(item, item.answer));
}

// ---- "Xong rồi!" screen shared by every scored section / quiz part ----
// onNext (optional) overrides what the button does; by default it jumps to the next section tab.
function showSectionComplete(host, message, hasNext, mascotType, onNext, nextLabel) {
  window.EQMascot && window.EQMascot.show("mascot-box", mascotType || "complete_exercise");
  host.innerHTML = `
    <div class="stage-complete">
      <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h3>Xong rồi!</h3>
      <p>${message}</p>
      ${hasNext ? `<p style="color:#6b6b76;margin-top:4px;">Sẵn sàng cho dạng bài tiếp theo chưa?</p><button type="button" class="btn btn-primary section-next-btn" style="margin-top:14px;">${nextLabel || "Dạng bài tiếp theo →"}</button>` : ""}
    </div>`;
  if (hasNext) {
    const btn = host.querySelector(".section-next-btn");
    btn && btn.addEventListener("click", () => {
      if (onNext) { onNext(); return; }
      const activePanel = document.querySelector(".ex-panel.active");
      const crumbs = Array.from(document.querySelectorAll(".eq-crumb"));
      const idx = crumbs.findIndex(c => c.dataset.target === activePanel.id);
      if (idx >= 0 && idx < crumbs.length - 1) switchPanel(crumbs[idx + 1].dataset.target);
    });
  }
}

// ============================================================
// Generic one-question-at-a-time runner
//  - wrong answers come back automatically in "Vòng 2, 3..." until all are right
//  - only round 1 is saved to the Dashboard (and only when `scored` is true)
//  - after answering, NO timer: a manual "Tiếp theo →" button moves on
// renderItem(host, item, ctx) draws the question; when the student has answered it must
// call ctx.done(correct, {key, question, studentAnswer, correctAnswer}, anchorEl).
// ============================================================
function runSequence(host, items, round, cfg) {
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function show() {
    const item = items[i];
    const ctx = {
      i, total, round,
      top: (cfg.preHtml || "") + roundHeader(round) + renderDots(i, total),
      done(correct, rec, anchor) {
        if (cfg.scored) {
          eqRecordAndSave(rec.key, rec.question, rec.studentAnswer, rec.correctAnswer, correct);
        }
        if (!correct) wrongItems.push(item);
        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "btn btn-primary btn-sm";
        nextBtn.textContent = "Tiếp theo →";
        nextBtn.style.marginTop = "14px";
        anchor.insertAdjacentElement("afterend", nextBtn);
        nextBtn.addEventListener("click", () => {
          i++;
          if (i >= total) {
            if (wrongItems.length > 0) runSequence(host, wrongItems, round + 1, cfg);
            else cfg.onComplete();
          } else {
            show();
          }
        });
      },
    };
    cfg.renderItem(host, item, ctx);
  }
  if (round > 1) host.scrollIntoView({ behavior: "smooth", block: "start" });
  show();
}

// ============================================================
// Multiple-choice question (used by Fill in the Blank, Listen and circle, Choose)
// ============================================================
function renderChoiceItem(host, item, ctx) {
  const stemHtml = escapeHtml(item.stem).replace("___", `<span class="q-blank" id="q-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`);
  const hasListen = !!(item.listenFull || item.speakBefore);
  const viHtml = item.noTranslate ? "" : `
    <button type="button" class="eq-translate-btn" id="q-translate">🔤 Dịch</button>
    <div class="q-vi" id="q-vi" style="display:none;">
      <div>${escapeHtml(item.vi || "")}</div>
      ${(item.optVi || []).map(t => `<div>${escapeHtml(t)}</div>`).join("")}
    </div>`;
  const letters = item.options.map(o => o.key);

  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${ctx.i + 1}. ${stemHtml}</p>
    <div>
      ${item.audio
        ? `<audio class="q-audio" id="q-audio" controls preload="auto" src="${escapeHtml(item.audio)}"></audio><div class="q-vi" style="margin:0 0 6px;">${escapeHtml(item.audioNote || "Nghe rồi chọn đáp án.")}</div>`
        : hasListen ? `<button type="button" class="q-listen-btn" id="q-listen">🔊 Nghe</button>` : ""}
      ${viHtml}
    </div>
    <div class="q-options">
      ${item.options.map((o, idx) => `<button type="button" class="mcq-option" data-key="${o.key}"><span class="mcq-letter">${letters[idx]}</span>${escapeHtml(o.text)}</button>`).join("")}
    </div>
    <div class="fitb-feedback" id="q-feedback"></div>`;

  const feedback = host.querySelector("#q-feedback");
  const blank = host.querySelector("#q-blank");
  const listenBtn = host.querySelector("#q-listen");
  const transBtn = host.querySelector("#q-translate");
  let answered = false;

  function playQuestion() {
    if (item.listenFull) {
      say(fullSentence(item));
    } else if (item.speakBefore) {
      say(item.speakBefore);
    }
  }

  if (listenBtn) {
    listenBtn.addEventListener("click", () => {
      if (answered) say(fullSentence(item)); // after answering, replay = the complete sentence
      else playQuestion();
    });
  }
  if (transBtn) {
    transBtn.addEventListener("click", () => {
      const viEl = host.querySelector("#q-vi");
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      transBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });
  }

  host.querySelectorAll(".mcq-option").forEach(btn => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const chosen = btn.dataset.key;
      const correct = chosen === item.answer;

      host.querySelectorAll(".mcq-option").forEach(b => {
        b.disabled = true;
        if (b.dataset.key === item.answer) b.classList.add("correct");
      });
      if (!correct) btn.classList.add("wrong");
      blank.textContent = optionText(item, item.answer);

      const audioEl = host.querySelector("#q-audio");
      audioEl && audioEl.pause(); // don't let the recording talk over the answer read-out
      sfx(correct);
      // Read the FULL sentence with the correct answer filled in (never "blank", never the options)
      say(fullSentence(item));
      if (listenBtn) listenBtn.textContent = "🔊 Nghe lại";

      feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${item.answer}. ${optionText(item, item.answer)}`;
      feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";

      ctx.done(correct, {
        key: `${ctx.partKey || item.keyPrefix}-${item.id}`,
        question: fullSentence(item).replace(/\s+/g, " "),
        studentAnswer: `${chosen}. ${optionText(item, chosen)}`,
        correctAnswer: `${item.answer}. ${optionText(item, item.answer)}`,
      }, feedback);
    });
  });
}

// ============================================================
// 3) Fill in the Blank
// ============================================================
function runFITB() {
  const host = document.getElementById("fitb-wrap");
  if (!host) return;
  const items = FITB_ITEMS.map(x => ({ ...x, keyPrefix: "fitb" }));
  runSequence(host, items, 1, {
    scored: true,
    renderItem: renderChoiceItem,
    onComplete: () => showSectionComplete(host, "Em đã hoàn thành phần Fill in the Blank.", true, "complete_exercise"),
  });
}

// ============================================================
// 4) Sentence Ordering — tap the chunks in order; tap a placed chunk to send just that one back
// ============================================================
function renderOrderItem(host, item, ctx) {
  const shuffled = shuffleNotSame(item.chunks.map((c, idx) => ({ ...c, origIdx: idx })));

  host.innerHTML = `
    ${ctx.top}
    <button type="button" class="eq-translate-btn" id="order-translate">🔤 Dịch</button>
    <div class="sentence-answer-strip" id="order-strip"></div>
    <div class="sentence-chunks" id="order-pool">
      ${shuffled.map(c => `<div class="sentence-chunk" data-orig="${c.origIdx}">${escapeHtml(c.en)}<span class="chunk-vi">${escapeHtml(c.vi)}</span></div>`).join("")}
    </div>
    <div class="fitb-row" style="margin-top:14px;">
      <button class="btn btn-secondary btn-sm" id="order-reset">Làm lại</button>
      <button class="btn btn-primary btn-sm" id="order-check">Kiểm tra</button>
    </div>
    <div class="fitb-feedback" id="order-feedback"></div>`;

  const strip = host.querySelector("#order-strip");
  const pool = host.querySelector("#order-pool");
  const feedback = host.querySelector("#order-feedback");
  const translateBtn = host.querySelector("#order-translate");
  const resetBtn = host.querySelector("#order-reset");
  const checkBtn = host.querySelector("#order-check");
  let placed = [];
  let checked = false;

  translateBtn.addEventListener("click", () => {
    const showing = pool.classList.toggle("show-vi");
    translateBtn.textContent = showing ? "🔤 Ẩn nghĩa" : "🔤 Dịch";
  });

  function renderStrip() {
    strip.innerHTML = placed.map(p => `<div class="sentence-chunk placed" data-orig="${p.origIdx}" title="Chạm để bỏ ra">${escapeHtml(p.en)}</div>`).join("");
    strip.querySelectorAll(".sentence-chunk.placed").forEach(el => {
      el.addEventListener("click", () => {
        if (checked) return;
        const origIdx = Number(el.dataset.orig);
        const idx = placed.findIndex(p => p.origIdx === origIdx);
        if (idx === -1) return;
        say(placed[idx].en);
        placed.splice(idx, 1);
        const poolEl = pool.querySelector(`.sentence-chunk[data-orig="${origIdx}"]`);
        poolEl && poolEl.classList.remove("used");
        renderStrip();
      });
    });
  }

  pool.querySelectorAll(".sentence-chunk").forEach(chunkEl => {
    chunkEl.addEventListener("click", () => {
      if (checked || chunkEl.classList.contains("used")) return;
      const origIdx = Number(chunkEl.dataset.orig);
      say(item.chunks[origIdx].en);
      placed.push({ origIdx, en: item.chunks[origIdx].en });
      chunkEl.classList.add("used");
      renderStrip();
    });
  });

  resetBtn.addEventListener("click", () => {
    if (checked) return;
    placed = [];
    pool.querySelectorAll(".sentence-chunk").forEach(c => c.classList.remove("used"));
    renderStrip();
  });

  checkBtn.addEventListener("click", () => {
    if (checked) return;
    if (placed.length === 0) return;
    checked = true;
    const built = placed.map(c => c.en).join(" ");
    const correct = built === item.answer;
    sfx(correct);

    feedback.innerHTML =
      (correct
        ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
        : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng:</span>`) +
      `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(item.answer)}</div>` +
      `<div style="color:#666;margin-top:2px;">${escapeHtml(item.answerVi)}</div>`;
    feedback.className = "fitb-feedback";
    say(item.answer); // read the whole correct sentence aloud

    resetBtn.disabled = true;
    checkBtn.disabled = true;

    ctx.done(correct, {
      key: `order-${item.id}`,
      question: "Sentence " + item.id,
      studentAnswer: built,
      correctAnswer: item.answer,
    }, feedback);
  });
}

function runOrdering() {
  const host = document.getElementById("order-wrap");
  if (!host) return;
  runSequence(host, ORDER_ITEMS, 1, {
    scored: SCORE_ORDERING,
    renderItem: renderOrderItem,
    onComplete: () => showSectionComplete(host, "Em đã hoàn thành phần Sentence Ordering.", true, "complete_exercise"),
  });
}

// ============================================================
// 5) Quiz — parts run one after another
// ============================================================

// ---- 5b) Complete the words (typed letters, picture clue, no audio) ----
function renderCompleteWord(host, item, ctx) {
  host.innerHTML = `
    ${ctx.top}
    <img class="q-pic" src="${item.img}" alt="">
    <div class="cw-row">
      <span>${ctx.i + 1}. ${escapeHtml(item.before)}</span>
      <span class="cw-word">
        <span class="cw-letter">${escapeHtml(item.letter)}</span>
        <input class="cw-input" id="cw-input" type="text" inputmode="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="…" aria-label="Các chữ cái còn thiếu">
        <span>${escapeHtml(item.after)}</span>
      </span>
    </div>
    <div style="text-align:center;">
      <button type="button" class="eq-translate-btn" id="cw-translate">🔤 Dịch</button>
      <div class="q-vi" id="cw-vi" style="display:none;">${escapeHtml(item.vi)}</div>
    </div>
    <div class="fitb-row" style="justify-content:center;margin-top:8px;">
      <button class="btn btn-primary btn-sm" id="cw-check">Kiểm tra</button>
    </div>
    <div class="fitb-feedback" id="cw-feedback" style="text-align:center;"></div>`;

  const input = host.querySelector("#cw-input");
  const checkBtn = host.querySelector("#cw-check");
  const feedback = host.querySelector("#cw-feedback");
  const transBtn = host.querySelector("#cw-translate");
  let answered = false;

  transBtn.addEventListener("click", () => {
    const viEl = host.querySelector("#cw-vi");
    const showing = viEl.style.display !== "none";
    viEl.style.display = showing ? "none" : "block";
    transBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });

  function check() {
    if (answered) return;
    const typed = input.value.trim().toLowerCase().replace(/\s+/g, "");
    if (!typed) return;
    answered = true;
    const word = item.answer.toLowerCase();
    const rest = word.slice(1);
    // accept just the missing letters ("ouse") or the whole word ("house")
    const correct = typed === rest || typed === word;
    input.disabled = true;
    checkBtn.disabled = true;
    input.classList.add(correct ? "ok" : "no");
    sfx(correct);
    feedback.textContent = correct ? `✓ Chính xác! ${item.answer}` : `Đáp án đúng: ${item.answer}`;
    feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
    ctx.done(correct, {
      key: `cw-${item.id}`,
      question: `${item.before} ${item.letter}___${item.after}`,
      studentAnswer: typed === word ? typed : item.letter + typed,
      correctAnswer: item.answer,
    }, feedback);
  }
  checkBtn.addEventListener("click", check);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
}

// ---- 5c) Match and read aloud — Tap Pairs ----
// Tap a left half (you hear it), then tap the right half that completes it. A wrong pair
// shakes and the student simply tries again, so every pair ends up matched (that is the
// "retry until all correct"). Score = each left half's FIRST pairing attempt only.
function runPairs(host, preHtml, onComplete) {
  const leftItems = shuffle(PAIR_ITEMS.map(p => ({ id: p.id, text: p.left })));
  const rightItems = shuffle(PAIR_ITEMS.map(p => ({ id: p.id, text: p.right })));

  host.innerHTML = `
    ${preHtml}
    <p style="color:#666;font-size:.9rem;margin:0 0 6px;">Chạm câu hỏi bên trái để nghe, rồi chạm câu trả lời đúng bên phải.</p>
    <div class="pairs-board">
      <div class="pairs-col" id="pairs-left">${leftItems.map(x => `<div class="pair-tile" data-id="${x.id}" data-side="l">🔊 ${escapeHtml(x.text)}</div>`).join("")}</div>
      <div class="pairs-col" id="pairs-right">${rightItems.map(x => `<div class="pair-tile" data-id="${x.id}" data-side="r">${escapeHtml(x.text)}</div>`).join("")}</div>
    </div>
    <div class="fitb-feedback" id="pairs-feedback"></div>
    <div id="pairs-actions"></div>`;

  let selL = null, selR = null, matched = 0;
  const attempted = {};

  host.querySelectorAll(".pair-tile").forEach(tile => {
    tile.addEventListener("click", () => {
      if (tile.classList.contains("matched")) return;
      if (tile.dataset.side === "l") {
        say(PAIR_ITEMS.find(p => String(p.id) === tile.dataset.id).left);
        if (selL) selL.classList.remove("selected");
        selL = tile; tile.classList.add("selected");
      } else {
        if (selR) selR.classList.remove("selected");
        selR = tile; tile.classList.add("selected");
      }
      if (!(selL && selR)) return;

      const pair = PAIR_ITEMS.find(p => String(p.id) === selL.dataset.id);
      const isMatch = selL.dataset.id === selR.dataset.id;
      if (!attempted[pair.id]) {
        attempted[pair.id] = true;
        eqRecordAndSave(`pair-${pair.id}`, pair.left + " …", selR.textContent.trim(), pair.right, isMatch);
      }
      sfx(isMatch);
      if (isMatch) {
        say(pair.left + " " + pair.right); // read the whole finished sentence
        selL.classList.remove("selected"); selR.classList.remove("selected");
        selL.classList.add("matched"); selR.classList.add("matched");
        selL.textContent = "✓ " + pair.left; selR.textContent = pair.right;
        selL = null; selR = null; matched++;
        if (matched === PAIR_ITEMS.length) {
          const fb = host.querySelector("#pairs-feedback");
          fb.textContent = "✓ Ghép hết rồi!";
          fb.className = "fitb-feedback ok";
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "btn btn-primary btn-sm";
          btn.textContent = "Tiếp theo →";
          btn.style.marginTop = "14px";
          host.querySelector("#pairs-actions").appendChild(btn);
          btn.addEventListener("click", onComplete);
        }
      } else {
        const l = selL, r = selR;
        l.classList.add("shake"); r.classList.add("shake");
        setTimeout(() => { l.classList.remove("selected", "shake"); r.classList.remove("selected", "shake"); }, 400);
        selL = null; selR = null;
      }
    });
  });
}

// ---- 5e) Listen and tick or cross — picture + recording, ✓ or ✗ ----
function renderTickItem(host, item, ctx) {
  host.innerHTML = `
    ${ctx.top}
    <audio class="q-audio" id="q-audio" controls preload="auto" src="${escapeHtml(TICK_AUDIO)}"></audio>
    <div class="q-vi" style="margin:0 0 6px;">Track 6 có cả 4 tranh. Nghe rồi chọn ✓ (đúng) hoặc ✗ (sai) cho tranh ${ctx.i + 1}.</div>
    <img class="q-pic" src="${item.img}" alt="Tranh ${item.id}" style="width:260px;max-width:90%;">
    <div class="tf-btn-row" style="justify-content:center;">
      <button type="button" class="tf-btn" data-val="1" style="font-size:1.3rem;padding:8px 26px;">✓</button>
      <button type="button" class="tf-btn" data-val="0" style="font-size:1.3rem;padding:8px 26px;">✗</button>
    </div>
    <div class="fitb-feedback" id="tick-feedback" style="text-align:center;"></div>`;
  const feedback = host.querySelector("#tick-feedback");
  let answered = false;
  host.querySelectorAll(".tf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const chosen = btn.dataset.val === "1";
      const correct = chosen === item.answer;
      host.querySelectorAll(".tf-btn").forEach(b => { b.disabled = true; });
      btn.classList.add(correct ? "selected-correct" : "selected-wrong");
      if (!correct) host.querySelector(`.tf-btn[data-val="${item.answer ? 1 : 0}"]`).classList.add("selected-correct");
      const audioEl = host.querySelector("#q-audio");
      audioEl && audioEl.pause();
      sfx(correct);
      feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${item.answer ? "✓" : "✗"}`;
      feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
      ctx.done(correct, {
        key: `tick-${item.id}`,
        question: `Listen and tick or cross — picture ${item.id}`,
        studentAnswer: chosen ? "✓" : "✗",
        correctAnswer: item.answer ? "✓" : "✗",
      }, feedback);
    });
  });
}

function buildQuizParts() {
  const parts = [];
  if (listenEnabled()) {
    parts.push({
      title: "Listen and circle",
      instruction: "Nghe rồi chọn đáp án đúng.",
      run(host, pre, done) {
        runSequence(host, LISTEN_ITEMS.map(x => ({ ...x, keyPrefix: "listen" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
      },
    });
  }
  if (CIRCLE_ITEMS.length) parts.push({
    title: "Circle and write",
    instruction: "Chọn từ đúng để hoàn thành câu.",
    run(host, pre, done) {
      runSequence(host, CIRCLE_ITEMS.map(x => ({ ...x, keyPrefix: "circle" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
    },
  });
  if (CHOOSE_ITEMS.length) parts.push({
    title: "Read and complete",
    instruction: "Đọc rồi chọn đáp án đúng.",
    run(host, pre, done) {
      runSequence(host, CHOOSE_ITEMS.map(x => ({ ...x, keyPrefix: "choose" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
    },
  });
  if (PAIR_ITEMS.length) parts.push({
    title: "Read and match",
    instruction: "Ghép câu hỏi với câu trả lời đúng rồi nghe cả hai câu.",
    run(host, pre, done) { runPairs(host, pre, done); },
  });
  if (tickEnabled()) parts.push({
    title: "Listen and tick or cross",
    instruction: "Nghe rồi chọn ✓ hoặc ✗ cho mỗi tranh.",
    run(host, pre, done) {
      runSequence(host, TICK_ITEMS, 1, { scored: true, preHtml: pre, renderItem: renderTickItem, onComplete: done });
    },
  });
  return parts;
}

function runQuiz() {
  const host = document.getElementById("quiz-wrap");
  if (!host) return;
  const parts = buildQuizParts();
  if (parts.length === 0) {
    host.innerHTML = `<p style="text-align:center;color:#6b6b76;padding:20px 0;">Phần Quiz của Unit này đang được cập nhật. Em quay lại sau nhé!</p>`;
    return;
  }

  function startPart(n) {
    const p = parts[n];
    const pre = `<span class="q-part-tag">Quiz · Phần ${n + 1}/${parts.length} · ${p.title}</span><p class="eq-instruction">${p.instruction}</p>`;
    p.run(host, pre, () => {
      if (n < parts.length - 1) {
        showSectionComplete(host, `Em đã hoàn thành phần "${p.title}".`, true, "complete_exercise",
          () => startPart(n + 1), `Phần tiếp theo: ${parts[n + 1].title} →`);
      } else {
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 3.", false, "complete_unit");
      }
    });
  }
  startPart(0);
}

// ============================================================
// 1) Reading and 2) Vocabulary (practice only)
// ============================================================
function renderReading() {
  const el = document.getElementById("reading-text");
  if (el) el.innerHTML = READING_HTML;
  const viEl = document.getElementById("reading-vi");
  if (viEl) viEl.textContent = READING_VI;
  const trBtn = document.getElementById("reading-translate-btn");
  trBtn && trBtn.addEventListener("click", () => {
    const showing = viEl.style.display !== "none";
    viEl.style.display = showing ? "none" : "block";
    trBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });
  const toVocabBtn = document.getElementById("reading-to-vocab-btn");
  toVocabBtn && toVocabBtn.addEventListener("click", () => switchPanel("panel-vocab"));
}

function renderVocab() {
  const host = document.getElementById("vocab-grid");
  if (!host) return;
  host.innerHTML = VOCAB_ITEMS.map((v, idx) => `
    <div class="vocab-card" data-idx="${idx}">
      <div class="vocab-front">🔊 ${escapeHtml(v.en)}<span class="vocab-hint">chạm để nghe &amp; xem nghĩa</span></div>
      <div class="vocab-back">${escapeHtml(v.vi)}</div>
    </div>`).join("");
  host.querySelectorAll(".vocab-card").forEach((card) => {
    card.addEventListener("click", () => {
      say(VOCAB_ITEMS[Number(card.dataset.idx)].en);
      card.classList.toggle("flipped");
    });
  });
  const toFitb = document.getElementById("vocab-to-fitb-btn");
  toFitb && toFitb.addEventListener("click", () => switchPanel("panel-fitb"));
}

// ============================================================
// Start-up + numbered-pill navigation between the 5 sections
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  eqStudent = window.EQStudent ? window.EQStudent.confirmStudent() : "";
  if (window.EQResults && eqStudent) {
    window.EQResults.markInProgress({
      student: eqStudent,
      unitId: UNIT_ID,
      unitLabel: UNIT_LABEL,
      section: "exercises",
    }).catch(() => {});
  }
  renderReading();
  renderVocab();
  runFITB();
  runOrdering();
  runQuiz();
  setupCrumbNav();
});

function switchPanel(targetId) {
  document.querySelectorAll(".ex-panel").forEach(p => p.classList.remove("active"));
  document.getElementById(targetId).classList.add("active");
  document.querySelectorAll(".eq-crumb").forEach(c => c.classList.toggle("active", c.dataset.target === targetId));
  window.scrollTo({ top: document.getElementById("eq-crumb-row").offsetTop - 90, behavior: "smooth" });
}

function setupCrumbNav() {
  document.querySelectorAll(".eq-crumb").forEach(c => {
    c.addEventListener("click", () => switchPanel(c.dataset.target));
  });
  document.querySelectorAll(".eq-back-link").forEach(link => {
    link.addEventListener("click", () => switchPanel(link.dataset.target));
  });
  switchPanel("panel-reading");
}
