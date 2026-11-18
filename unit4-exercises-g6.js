// ============================================================
// Grade 6 — Unit 4 (My Neighbourhood) — Exercises data
// Source: teacher Hien's screenshots (letter "Dear Ha," + word table + Part 1 / Part 2
// with answer key, Pronunciation exercise 1). Pronunciation key, Part 1 chunks,
// Listening passage + Vietnamese translations: written by Claude, approved by cô Hiền.
// Listening audio: g6-u4-listen.wav (recorded and uploaded by cô Hiền).
// AI voice: Vocabulary cards + Pronunciation words (only when the student taps 🔊).
// Scored sections: Answer the questions (4) + Sentence Ordering (4) +
// Pronunciation (4) + Listening (4) = 16 total.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================

const READING_HTML =
  "<p>Dear Ha,</p>" +
  "<p>Let's <mark>meet</mark> on Sunday evening at Quynh Café on Tran Quang Dieu Street. There's a <mark>post office</mark> " +
  "<mark>on the corner of the street</mark>. The café is next to the post office. There's a cinema opposite the café, " +
  "so we can see a film after we have coffee.</p>" +
  "<p>To <mark>get to the café</mark>, <mark>take bus number 8</mark> to Truong Thi Street. <mark>Get off at the bus stop</mark> " +
  "in front of a park. <mark>Go along the street</mark> until you <mark>get to the traffic lights</mark> and then <mark>turn right</mark>. " +
  "<mark>Take the first turning on your right</mark>. <mark>Go straight ahead</mark> – just about 500 <mark>metres</mark> " +
  "and it's on your left.</p>" +
  "<p><mark>See you there!</mark></p>" +
  "<p>Khang</p>";

// ---- Vocabulary (practice only, tap to hear + flip for meaning) — word table from cô Hiền ----
const VOCAB_ITEMS = [
  { en: "meet", vi: "gặp mặt" },
  { en: "post office", vi: "bưu điện" },
  { en: "corner", vi: "góc, góc đường" },
  { en: "bus stop", vi: "trạm xe buýt" },
  { en: "traffic lights", vi: "đèn giao thông" },
  { en: "turning", vi: "chỗ rẽ, ngã rẽ" },
  { en: "metre", vi: "mét" },
  { en: "on the corner of the street", vi: "ở góc phố" },
  { en: "take bus number 8", vi: "đi xe buýt số 8" },
  { en: "get to the café", vi: "đến quán cà phê" },
  { en: "get off the bus", vi: "xuống xe buýt" },
  { en: "go along the street", vi: "đi dọc theo con phố" },
  { en: "get to the traffic lights", vi: "đi đến chỗ đèn giao thông" },
  { en: "take the first turning on your right", vi: "rẽ ở ngã rẽ đầu tiên bên phải" },
  { en: "See you there!", vi: "Hẹn gặp bạn ở đó!" },
  { en: "go straight ahead", vi: "đi thẳng về phía trước" },
  { en: "turn right", vi: "rẽ phải" },
  { en: "turn left", vi: "rẽ trái" },
  { en: "get off at the bus stop", vi: "xuống xe tại trạm xe buýt" },
  { en: "go about 500 metres", vi: "đi khoảng 500 mét" },
];

// ---- Part 1: Answer the questions (4) — first two words given, tap the chunks for the rest ----
// "Dịch" translates the question only; the chunks are never translated.
const ANSWER_ITEMS = [
  { id: 1, q: "Where will Khang and Ha meet?", qVi: "Khang và Hà sẽ gặp nhau ở đâu?",
    prefix: "They will", chunks: ["meet", "at", "Quynh Café", "on", "Tran Quang Dieu Street."],
    answer: "They will meet at Quynh Café on Tran Quang Dieu Street.",
    answerVi: "Họ sẽ gặp nhau ở quán cà phê Quỳnh trên phố Trần Quang Diệu." },
  { id: 2, q: "What is opposite the café?", qVi: "Cái gì ở đối diện quán cà phê?",
    prefix: "There is", chunks: ["a", "cinema", "opposite", "the café."],
    answer: "There is a cinema opposite the café.",
    answerVi: "Có một rạp chiếu phim đối diện quán cà phê." },
  { id: 3, q: "What bus should Ha take?", qVi: "Hà nên đi xe buýt số mấy?",
    prefix: "She should", chunks: ["take", "bus", "number 8."],
    answer: "She should take bus number 8.",
    answerVi: "Bạn ấy nên đi xe buýt số 8." },
  { id: 4, q: "What should Ha do after getting off the bus?", qVi: "Hà nên làm gì sau khi xuống xe buýt?",
    prefix: "She should", chunks: ["go", "along", "the street."],
    answer: "She should go along the street.",
    answerVi: "Bạn ấy nên đi dọc theo con phố." },
];

// ---- Part 2: Put the words in the correct order (4, from the letter) ----
// Chunks exactly as in the book; "Dịch" shows the meaning of only about HALF of them (vi set).
const ORDER_ITEMS = [
  {
    id: 1,
    cue: "the / café / next / is / to / the / post office",
    chunks: [
      { en: "the" }, { en: "café", vi: "quán cà phê" }, { en: "next", vi: "bên cạnh" }, { en: "is" },
      { en: "to" }, { en: "the" }, { en: "post office", vi: "bưu điện" },
    ],
    answer: "The café is next to the post office.",
    answerVi: "Quán cà phê ở bên cạnh bưu điện.",
  },
  {
    id: 2,
    cue: "there / a / cinema / opposite / the / café / is",
    chunks: [
      { en: "there" }, { en: "a" }, { en: "cinema", vi: "rạp chiếu phim" }, { en: "opposite", vi: "đối diện" },
      { en: "the" }, { en: "café", vi: "quán cà phê" }, { en: "is" },
    ],
    answer: "There is a cinema opposite the café.",
    answerVi: "Có một rạp chiếu phim đối diện quán cà phê.",
  },
  {
    id: 3,
    cue: "along / the / go / street / until / you / get / to / the / traffic lights",
    chunks: [
      { en: "along", vi: "dọc theo" }, { en: "the" }, { en: "go", vi: "đi" }, { en: "street", vi: "con phố" },
      { en: "until", vi: "cho đến khi" }, { en: "you" }, { en: "get" }, { en: "to" }, { en: "the" },
      { en: "traffic lights", vi: "đèn giao thông" },
    ],
    answer: "Go along the street until you get to the traffic lights.",
    answerVi: "Đi dọc theo con phố cho đến khi bạn đến chỗ đèn giao thông.",
  },
  {
    id: 4,
    cue: "first / take / the / turning / on / your / right",
    chunks: [
      { en: "first", vi: "đầu tiên" }, { en: "take" }, { en: "the" }, { en: "turning", vi: "ngã rẽ" },
      { en: "on" }, { en: "your" }, { en: "right", vi: "bên phải" },
    ],
    answer: "Take the first turning on your right.",
    answerVi: "Rẽ vào ngã rẽ đầu tiên bên phải.",
  },
];

// ---- Pronunciation: find the word with a different sound in the underlined part (4) ----
// html: the word with the underlined part in <u>; say: what the AI voice reads.
const PRON_ITEMS = [
  { id: 1, opts: [
      { html: "adv<u>i</u>ce", say: "advice" }, { html: "pr<u>i</u>ce", say: "price" },
      { html: "n<u>i</u>ce", say: "nice" }, { html: "pol<u>i</u>ce", say: "police" }],
    answer: 3, why: "police đọc /iː/, 3 từ còn lại đọc /aɪ/." },
  { id: 2, opts: [
      { html: "<u>e</u>xpress", say: "express" }, { html: "<u>e</u>xciting", say: "exciting" },
      { html: "<u>e</u>xpensive", say: "expensive" }, { html: "<u>e</u>xcellent", say: "excellent" }],
    answer: 3, why: "excellent đọc /e/, 3 từ còn lại đọc /ɪ/." },
  { id: 3, opts: [
      { html: "coff<u>ee</u>", say: "coffee" }, { html: "s<u>ee</u>", say: "see" },
      { html: "agr<u>ee</u>", say: "agree" }, { html: "fr<u>ee</u>", say: "free" }],
    answer: 0, why: "coffee đọc /i/ (ngắn, không nhấn), 3 từ còn lại đọc /iː/." },
  { id: 4, opts: [
      { html: "<u>c</u>ity", say: "city" }, { html: "<u>c</u>athedral", say: "cathedral" },
      { html: "<u>c</u>entral", say: "central" }, { html: "<u>c</u>inema", say: "cinema" }],
    answer: 1, why: "cathedral đọc /k/, 3 từ còn lại đọc /s/." },
];

// ---- Listening: one recording, fill in each blank (passage by Claude, approved by cô Hiền) ----
const LISTEN_AUDIO = "g6-u4-listen.wav";
const LISTEN_ITEMS = [
  { id: 1, before: "Hello! My name is Lan. I live in the old town of Hoi An. My street is narrow, but it is", after: "than the streets in the city centre.", answer: "quieter" },
  { id: 2, before: "There is a beautiful", after: "at the end of my street.", answer: "temple" },
  { id: 3, before: "To get to my school, I go straight and turn", after: "at the traffic lights.", answer: "left" },
  { id: 4, before: "My school is next to the", after: ". I love my neighbourhood because the people here are very friendly.", answer: "post office" },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit3-exercises-g6.js.
// 16 scored items total: 4 Answer + 4 Sentence Ordering + 4 Pronunciation + 4 Listening.
// Score is based on the FIRST attempt only — retry rounds are saved separately.
// ============================================================
const UNIT_ID = "g6-unit4";
const UNIT_LABEL = "Unit 4: My Neighbourhood";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return ANSWER_ITEMS.length + ORDER_ITEMS.length + PRON_ITEMS.length + LISTEN_ITEMS.length;
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

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Shuffle, but never leave the chunks already in the right order.
function shuffleNotSolved(items) {
  if (items.length < 2) return items.slice();
  let s;
  do { s = shuffle(items); } while (s.every((c, idx) => c.origIdx === idx));
  return s;
}

function renderDots(current, total) {
  let dots = "";
  for (let idx = 0; idx < total; idx++) {
    dots += `<span class="runner-dot ${idx < current ? "done" : idx === current ? "current" : ""}"></span>`;
  }
  return `<div class="runner-dots">${dots}</div>`;
}

function retryHeader(round) {
  return round > 1
    ? `<div style="background:#fff3cd;color:#8a6b00;font-weight:700;padding:10px 16px;border-radius:12px;margin-bottom:14px;text-align:center;">🔄 Làm lại câu sai — Vòng ${round}</div>`
    : "";
}

// Answers: ignore case, extra spaces, punctuation and curly apostrophes.
function normalize(s) {
  return String(s).trim().toLowerCase().replace(/[’‘]/g, "'").replace(/[.?!,]/g, "").replace(/\s+/g, " ").trim();
}

function speakChunk(text) {
  if (!window.EQSpeak) return;
  window.EQSpeak.speak(text);
}

function addNextButton(afterEl, onClick) {
  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "btn btn-primary btn-sm";
  nextBtn.textContent = "Tiếp theo →";
  nextBtn.style.marginTop = "14px";
  afterEl.insertAdjacentElement("afterend", nextBtn);
  nextBtn.addEventListener("click", onClick);
}

// ---- Shared "section complete" screen (Xong rồi! + optional "next section" button) ----
// Each crumb is its own one-part section, so no data-part-done marker is needed.
function showSectionComplete(host, message, hasNext, mascotType) {
  window.EQMascot && window.EQMascot.show("mascot-box", mascotType || "complete_exercise");
  host.innerHTML = `
    <div class="runner-card">
      <div class="stage-complete">
        <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>Xong rồi!</h3>
        <p>${message}</p>
        ${hasNext ? `<p style="color:#6b6b76;margin-top:4px;">Sẵn sàng cho dạng bài tiếp theo chưa?</p><button type="button" class="btn btn-primary section-next-btn" style="margin-top:14px;">Dạng bài tiếp theo →</button>` : ""}
      </div>
    </div>`;
  if (hasNext) {
    host.querySelector(".section-next-btn").addEventListener("click", () => {
      const activePanel = document.querySelector(".ex-panel.active");
      const crumbs = Array.from(document.querySelectorAll(".eq-crumb"));
      const idx = crumbs.findIndex(c => c.dataset.target === activePanel.id);
      if (idx >= 0 && idx < crumbs.length - 1) switchPanel(crumbs[idx + 1].dataset.target);
    });
  }
}

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
  runAnswerRound(ANSWER_ITEMS, 1);
  runOrderRound(ORDER_ITEMS, 1);
  setupPronTranslate();
  runPronRound(PRON_ITEMS, 1);
  runListenRound(LISTEN_ITEMS, 1);
  setupCrumbNav();
});

// ---- 1. Reading (practice only, no translation) ----
function renderReading() {
  const el = document.getElementById("reading-text");
  if (el) el.innerHTML = READING_HTML;
  const toVocabBtn = document.getElementById("reading-to-vocab-btn");
  toVocabBtn && toVocabBtn.addEventListener("click", () => switchPanel("panel-vocab"));
}

// ---- 2. Vocabulary (practice only): flip-card grid with AI voice ----
function renderVocab() {
  const host = document.getElementById("vocab-grid");
  if (!host) return;
  host.innerHTML = VOCAB_ITEMS.map((v, idx) => `
    <div class="vocab-card" data-idx="${idx}">
      <div class="vocab-front">🔊 ${v.en}<span class="vocab-hint">chạm để nghe &amp; xem nghĩa</span></div>
      <div class="vocab-back">${v.vi}</div>
    </div>`).join("");
  host.querySelectorAll(".vocab-card").forEach((card) => {
    card.addEventListener("click", () => {
      speakChunk(VOCAB_ITEMS[Number(card.dataset.idx)].en);
      card.classList.toggle("flipped");
    });
  });
}

// ---- Shared tap-to-build board (Part 1 and Part 2) ----
// opts: { host, round, idx, total, headHtml, prefix, chunks:[{en, vi?}], answer, answerVi,
//         translateLabel, onTranslate(poolEl, headEl), onChecked(built, correct) }
function buildBoard(opts) {
  const { host, item } = opts;
  const shuffled = shuffleNotSolved(opts.chunks.map((c, idx) => ({ ...c, origIdx: idx })));
  host.innerHTML = `
    <div class="runner-card">
      ${retryHeader(opts.round)}
      ${renderDots(opts.idx, opts.total)}
      <div class="quiz-item">
        ${opts.headHtml}
        <button type="button" class="eq-translate-btn board-translate">🔤 Dịch</button>
        ${opts.afterTranslateHtml || ""}
        <div class="sentence-answer-strip board-strip"></div>
        <div class="sentence-chunks board-pool">
          ${shuffled.map(c => `<div class="sentence-chunk" data-orig="${c.origIdx}">${c.en}${c.vi ? `<span class="chunk-vi">${c.vi}</span>` : ""}</div>`).join("")}
        </div>
        <div class="fitb-row" style="margin-top:14px;">
          <button class="btn btn-secondary btn-sm board-reset">Làm lại</button>
          <button class="btn btn-primary btn-sm board-check">Kiểm tra</button>
        </div>
        <div class="fitb-feedback board-feedback"></div>
      </div>
    </div>`;

  const strip = host.querySelector(".board-strip");
  const pool = host.querySelector(".board-pool");
  const feedback = host.querySelector(".board-feedback");
  const translateBtn = host.querySelector(".board-translate");
  const resetBtn = host.querySelector(".board-reset");
  const checkBtn = host.querySelector(".board-check");
  let placed = [];
  let checked = false;

  translateBtn.addEventListener("click", () => {
    const showing = opts.onTranslate(host);
    translateBtn.textContent = showing ? "🔤 Ẩn nghĩa" : "🔤 Dịch";
  });

  function renderStrip() {
    const prefixHtml = opts.prefix ? `<div class="sentence-chunk given-chunk">${opts.prefix}</div>` : "";
    strip.innerHTML = prefixHtml + placed.map(p => `<div class="sentence-chunk placed" data-orig="${p.origIdx}" title="Chạm để bỏ ra">${p.en}</div>`).join("");
    strip.querySelectorAll(".sentence-chunk.placed").forEach(el => {
      el.addEventListener("click", () => {
        // Tapping a placed chunk sends just that one back to the pool.
        if (checked) return;
        const origIdx = Number(el.dataset.orig);
        const idx = placed.findIndex(p => p.origIdx === origIdx);
        if (idx === -1) return;
        placed.splice(idx, 1);
        const poolEl = pool.querySelector(`.sentence-chunk[data-orig="${origIdx}"]`);
        poolEl && poolEl.classList.remove("used");
        renderStrip();
      });
    });
  }
  renderStrip();

  pool.querySelectorAll(".sentence-chunk").forEach(chunkEl => {
    chunkEl.addEventListener("click", () => {
      if (checked || chunkEl.classList.contains("used")) return;
      const origIdx = Number(chunkEl.dataset.orig);
      placed.push({ origIdx, en: opts.chunks[origIdx].en });
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
    if (placed.length < opts.chunks.length) {
      feedback.textContent = "Em xếp hết các cụm từ rồi bấm Kiểm tra nhé.";
      feedback.className = "fitb-feedback board-feedback no";
      return;
    }
    checked = true;
    const built = [opts.prefix, ...placed.map(c => c.en)].filter(Boolean).join(" ");
    const correct = normalize(built) === normalize(opts.answer);
    window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
    window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
    feedback.innerHTML =
      (correct
        ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
        : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng:</span>`) +
      `<div style="color:#222;font-weight:800;margin-top:6px;">${opts.answer}</div>` +
      `<div style="color:#666;margin-top:2px;">${opts.answerVi}</div>`;
    feedback.className = "fitb-feedback board-feedback";
    resetBtn.disabled = true;
    checkBtn.disabled = true;
    opts.onChecked(built, correct, feedback);
  });
}

// ---- 3. Answer the questions (scored: 4) — "Dịch" translates the question only ----
function runAnswerRound(items, round) {
  const host = document.getElementById("answer-runner");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    buildBoard({
      host, round, idx: i, total,
      headHtml: `<div class="sentence-cue"><span class="verb-num">${item.id}.</span> ${item.q}</div>`,
      afterTranslateHtml: `<div class="tf-vi answer-q-vi" style="display:none;">${item.qVi}</div>`,
      prefix: item.prefix,
      chunks: item.chunks.map(en => ({ en })),
      answer: item.answer,
      answerVi: item.answerVi,
      onTranslate: h => {
        const viEl = h.querySelector(".answer-q-vi");
        const show = viEl.style.display === "none";
        viEl.style.display = show ? "block" : "none";
        return show;
      },
      onChecked: (built, correct, feedback) => {
        eqRecordAndSave(`answer-${item.id}`, item.q, built, item.answer, correct);
        if (!correct) wrongItems.push(item);
        addNextButton(feedback, () => {
          i++;
          if (i < total) { render(); return; }
          if (wrongItems.length) { runAnswerRound(wrongItems, round + 1); return; }
          showSectionComplete(host, "Em đã hoàn thành phần Answer the questions.", true, "complete_exercise");
        });
      },
    });
  }
  render();
}

// ---- 4. Sentence Ordering (scored: 4) — "Dịch" shows about half of the chunk meanings ----
function runOrderRound(items, round) {
  const host = document.getElementById("order-runner");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    buildBoard({
      host, round, idx: i, total,
      headHtml: `<div class="sentence-cue"><span class="verb-num">${item.id}.</span> ${item.cue}</div>`,
      prefix: "",
      chunks: item.chunks,
      answer: item.answer,
      answerVi: item.answerVi,
      onTranslate: h => h.querySelector(".board-pool").classList.toggle("show-vi"),
      onChecked: (built, correct, feedback) => {
        eqRecordAndSave(`order-${item.id}`, item.cue, built, item.answer, correct);
        if (!correct) wrongItems.push(item);
        addNextButton(feedback, () => {
          i++;
          if (i < total) { render(); return; }
          if (wrongItems.length) { runOrderRound(wrongItems, round + 1); return; }
          showSectionComplete(host, "Em đã hoàn thành phần Sentence Ordering.", true, "complete_exercise");
        });
      },
    });
  }
  render();
}

// ---- 5. Pronunciation (scored: 4) — AI reads a word ONLY when the student taps its 🔊 ----
// The instruction-only "Dịch" buttons of Pronunciation and Listening.
function setupPronTranslate() {
  [["pron-translate", "pron-vi"], ["listen-translate", "listen-vi"]].forEach(([btnId, viId]) => {
    const btn = document.getElementById(btnId);
    const viEl = document.getElementById(viId);
    if (!btn || !viEl) return;
    btn.addEventListener("click", () => {
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      btn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });
  });
}

function runPronRound(items, round) {
  const host = document.getElementById("pron-runner");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    host.innerHTML = `
      <div class="runner-card">
        ${retryHeader(round)}
        ${renderDots(i, total)}
        <div class="quiz-item">
          <div class="sentence-cue"><span class="verb-num">${item.id}.</span></div>
          <div class="pron-options">
            ${item.opts.map((o, oi) => `
              <div class="pron-row">
                <button type="button" class="mcq-option pron-opt" data-idx="${oi}"><span class="mcq-letter">${String.fromCharCode(65 + oi)}</span><span class="pron-word-text">${o.html}</span></button>
                <button type="button" class="pron-say" data-idx="${oi}" aria-label="Nghe ${o.say}">🔊</button>
              </div>`).join("")}
          </div>
          <div class="fitb-feedback" id="pron-feedback"></div>
        </div>
      </div>`;

    const feedback = host.querySelector("#pron-feedback");
    let answered = false;

    host.querySelectorAll(".pron-say").forEach(btn => {
      btn.addEventListener("click", () => speakChunk(item.opts[Number(btn.dataset.idx)].say));
    });

    host.querySelectorAll(".pron-opt").forEach(opt => {
      opt.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = Number(opt.dataset.idx);
        const ok = chosen === item.answer;
        host.querySelectorAll(".pron-opt").forEach(o => {
          o.disabled = true;
          if (Number(o.dataset.idx) === item.answer) o.classList.add("correct");
        });
        if (!ok) opt.classList.add("wrong");
        window.EQSound && (ok ? window.EQSound.correct() : window.EQSound.wrong());
        window.EQMascot && window.EQMascot.show("mascot-box", ok ? "correct" : "wrong");
        const letter = String.fromCharCode(65 + item.answer);
        feedback.innerHTML =
          (ok ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
              : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng: ${letter}. ${item.opts[item.answer].say}</span>`) +
          `<div style="color:#444;margin-top:4px;">${item.why}</div>` +
          `<div style="color:#666;margin-top:2px;">Bấm 🔊 để nghe lại từng từ rồi đọc to nhé.</div>`;
        feedback.className = "fitb-feedback";

        const plainOpts = item.opts.map((o, oi) => `${String.fromCharCode(65 + oi)}. ${o.say}`).join("  ");
        eqRecordAndSave(`pron-${item.id}`, `Pronunciation ${item.id}: ${plainOpts}`,
          `${String.fromCharCode(65 + chosen)}. ${item.opts[chosen].say}`, `${letter}. ${item.opts[item.answer].say}`, ok);
        if (!ok) wrongItems.push(item);

        addNextButton(feedback, () => {
          i++;
          if (i < total) { render(); return; }
          if (wrongItems.length) { runPronRound(wrongItems, round + 1); return; }
          showSectionComplete(host, "Em đã hoàn thành phần Pronunciation.", true, "complete_exercise");
        });
      });
    });
  }
  render();
}

// ---- 6. Listening (scored: 4) — one recording, all 4 blanks on screen, checked together ----
// Blanks still wrong come back in a "Vòng 2" retry round (saved as retries, not re-scored).
function runListenRound(items, round) {
  const host = document.getElementById("listen-wrap");
  if (!host) return;

  host.innerHTML = `
    ${retryHeader(round)}
    <audio class="q-audio" controls preload="auto" src="${LISTEN_AUDIO}"></audio>
    <p class="tf-vi" style="margin:0 0 12px;">Bấm ▶ để nghe (nghe lại bao nhiêu lần cũng được), rồi điền từ / cụm từ còn thiếu vào mỗi chỗ trống.</p>
    ${items.map(item => `
      <div class="tf-item listen-item">
        <span class="verb-num">(${item.id})</span> ${item.before}
        <input type="text" class="fitb-input listen-blank" data-id="${item.id}" autocomplete="off" autocapitalize="off" spellcheck="false">
        ${item.after}
        <div class="fitb-feedback" id="listen-feedback-${item.id}"></div>
      </div>`).join("")}
    <div class="fitb-row" style="margin-top:12px;">
      <button class="btn btn-primary btn-sm" id="listen-check">Kiểm tra</button>
    </div>
    <div class="fitb-feedback" id="listen-feedback"></div>`;

  if (round > 1) host.scrollIntoView({ behavior: "smooth", block: "start" });

  const inputs = Array.from(host.querySelectorAll(".listen-blank"));
  const checkBtn = host.querySelector("#listen-check");
  const feedback = host.querySelector("#listen-feedback");
  inputs.forEach(inp => inp.addEventListener("keydown", e => { if (e.key === "Enter") checkBtn.click(); }));

  checkBtn.addEventListener("click", () => {
    if (inputs.some(inp => !inp.value.trim())) {
      feedback.textContent = "Em điền hết các ô trống rồi bấm Kiểm tra nhé.";
      feedback.className = "fitb-feedback no";
      return;
    }
    checkBtn.disabled = true;
    const audioEl = host.querySelector("audio");
    audioEl && audioEl.pause();
    const wrongItems = [];
    inputs.forEach(inp => {
      const item = items.find(x => x.id === Number(inp.dataset.id));
      const ok = normalize(inp.value) === normalize(item.answer);
      inp.disabled = true;
      inp.classList.add(ok ? "fitb-correct" : "fitb-wrong");
      inp.style.borderColor = ok ? "#3fae4f" : "#e05c5c";
      const fb = document.getElementById(`listen-feedback-${item.id}`);
      fb.textContent = ok ? "✓ Chính xác!" : `Đáp án đúng: ${item.answer}`;
      fb.className = ok ? "fitb-feedback ok" : "fitb-feedback no";
      eqRecordAndSave(`listen-${item.id}`, `Listening ${item.id}: ${item.before} ___ ${item.after}`, inp.value.trim(), item.answer, ok);
      if (!ok) wrongItems.push(item);
    });
    const allCorrect = wrongItems.length === 0;
    window.EQSound && (allCorrect ? window.EQSound.correct() : window.EQSound.wrong());
    window.EQMascot && window.EQMascot.show("mascot-box", allCorrect ? "correct" : "wrong");
    feedback.textContent = allCorrect
      ? "✓ Chính xác hết!"
      : `Đúng ${items.length - wrongItems.length}/${items.length}. Bấm Tiếp theo để nghe lại và làm lại các câu sai.`;
    feedback.className = allCorrect ? "fitb-feedback ok" : "fitb-feedback no";
    addNextButton(feedback, () => {
      if (wrongItems.length) runListenRound(wrongItems, round + 1);
      else showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 4.", false, "complete_unit");
    });
  });
}

// ---- Breadcrumb-style navigation between the 6 sections ----
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
