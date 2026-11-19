// ============================================================
// Grade 6 — Unit 5 (Natural Wonders of Viet Nam) — Exercises data
// Source: teacher Hien's screenshots (reading "Trang An" + phrase table + Part A /
// Part B with answer key, Listening fill-in-the-blanks + teacher's script).
// Part A chunks + Vietnamese translations: written by Claude, approved by cô Hiền.
// Listening audio: g6-u5-listen.wav (recorded and uploaded by cô Hiền).
// AI voice: Vocabulary cards only (when the student taps a card).
// No Pronunciation section in this unit (cô Hiền: not needed).
// Scored sections: Answer the questions (4) + Sentence Ordering (4) + Listening (5) = 13 total.
// Listening is scored per SENTENCE: a sentence with 2 blanks is correct only if both are right.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================

const READING_HTML =
  "<p>Trang An in Ninh Binh is <mark>a charming and fantastic site</mark> in Viet Nam. " +
  "The whole picture of Trang An has <mark>limestone mountains</mark>, forests and <mark>golden rice fields</mark>. " +
  "The valleys here are <mark>amazingly beautiful</mark> like <mark>colourful carpets</mark>. " +
  "There are rivers <mark>running along</mark> these valleys, <mark>reflecting the blue sky</mark> above. " +
  "<mark>Making boat trips</mark> is a perfect way to fully <mark>enjoy the scenery</mark> here. " +
  "There are also tens of wonderful <mark>natural caves</mark> that you should <mark>explore on foot</mark>. " +
  "Many <mark>world travellers</mark> call Trang An “<mark>Ha Long Bay on the land</mark>”.</p>";

// ---- Vocabulary (practice only, tap to hear + flip for meaning) — phrase table from cô Hiền ----
const VOCAB_ITEMS = [
  { en: "a charming and fantastic site", vi: "một địa điểm quyến rũ và tuyệt vời" },
  { en: "limestone mountains", vi: "những ngọn núi đá vôi" },
  { en: "golden rice fields", vi: "những cánh đồng lúa vàng óng" },
  { en: "amazingly beautiful", vi: "đẹp một cách đáng kinh ngạc" },
  { en: "colourful carpets", vi: "những tấm thảm đầy màu sắc" },
  { en: "run along", vi: "chảy dọc theo" },
  { en: "reflect the blue sky", vi: "phản chiếu bầu trời xanh" },
  { en: "make boat trips", vi: "thực hiện những chuyến đi thuyền" },
  { en: "enjoy the scenery", vi: "thưởng ngoạn phong cảnh" },
  { en: "natural caves", vi: "những hang động tự nhiên" },
  { en: "explore on foot", vi: "khám phá bằng cách đi bộ" },
  { en: "world travellers", vi: "du khách trên khắp thế giới" },
  { en: "Ha Long Bay on the land", vi: "Vịnh Hạ Long trên cạn" },
];

// ---- Part A: Answer the questions (4) — first words given, tap the chunks for the rest ----
// "Dịch" translates the question only; the chunks are never translated.
const ANSWER_ITEMS = [
  { id: 1, q: "Where is Trang An located?", qVi: "Tràng An nằm ở đâu?",
    prefix: "Trang An is", chunks: ["located", "in", "Ninh Binh,", "Viet Nam."],
    answer: "Trang An is located in Ninh Binh, Viet Nam.",
    answerVi: "Tràng An nằm ở Ninh Bình, Việt Nam." },
  { id: 2, q: "What does the whole picture of Trang An include?", qVi: "Toàn cảnh Tràng An gồm những gì?",
    prefix: "It includes", chunks: ["limestone mountains,", "forests", "and", "golden rice fields."],
    answer: "It includes limestone mountains, forests and golden rice fields.",
    answerVi: "Nó gồm những ngọn núi đá vôi, rừng và những cánh đồng lúa vàng óng." },
  { id: 3, q: "What runs along the valleys?", qVi: "Cái gì chảy dọc theo các thung lũng?",
    prefix: "Rivers", chunks: ["run", "along", "the valleys."],
    answer: "Rivers run along the valleys.",
    answerVi: "Những dòng sông chảy dọc theo các thung lũng." },
  { id: 4, q: "What is a perfect way to enjoy the scenery in Trang An?", qVi: "Cách hoàn hảo để thưởng ngoạn phong cảnh ở Tràng An là gì?",
    prefix: "Making boat trips", chunks: ["is", "a perfect way", "to enjoy", "the scenery."],
    answer: "Making boat trips is a perfect way to enjoy the scenery.",
    answerVi: "Đi thuyền là cách hoàn hảo để thưởng ngoạn phong cảnh." },
];

// ---- Part B: Put the words in the correct order (4, from the reading) ----
// Chunks exactly as in cô Hiền's worksheet; "Dịch" shows the meaning of only about HALF of them (vi set).
const ORDER_ITEMS = [
  {
    id: 1,
    cue: "charming / Trang An / is / a / and / fantastic / site",
    chunks: [
      { en: "charming", vi: "quyến rũ" }, { en: "Trang An" }, { en: "is" }, { en: "a" },
      { en: "and" }, { en: "fantastic", vi: "tuyệt vời" }, { en: "site", vi: "địa điểm" },
    ],
    answer: "Trang An is a charming and fantastic site.",
    answerVi: "Tràng An là một địa điểm quyến rũ và tuyệt vời.",
  },
  {
    id: 2,
    cue: "limestone mountains / has / forests / Trang An / and / golden rice fields",
    chunks: [
      { en: "limestone mountains", vi: "núi đá vôi" }, { en: "has" }, { en: "forests", vi: "rừng" },
      { en: "Trang An" }, { en: "and" }, { en: "golden rice fields", vi: "cánh đồng lúa vàng óng" },
    ],
    answer: "Trang An has limestone mountains, forests and golden rice fields.",
    answerVi: "Tràng An có những ngọn núi đá vôi, rừng và những cánh đồng lúa vàng óng.",
  },
  {
    id: 3,
    cue: "along / rivers / the valleys / are / running",
    chunks: [
      { en: "along", vi: "dọc theo" }, { en: "rivers" }, { en: "the valleys", vi: "các thung lũng" },
      { en: "are" }, { en: "running" },
    ],
    answer: "Rivers are running along the valleys.",
    answerVi: "Những dòng sông đang chảy dọc theo các thung lũng.",
  },
  {
    id: 4,
    cue: "on foot / should / natural caves / explore / you / the",
    chunks: [
      { en: "on foot", vi: "đi bộ" }, { en: "should" }, { en: "natural caves", vi: "hang động tự nhiên" },
      { en: "explore", vi: "khám phá" }, { en: "you" }, { en: "the" },
    ],
    answer: "You should explore the natural caves on foot.",
    answerVi: "Bạn nên khám phá các hang động tự nhiên bằng cách đi bộ.",
  },
];

// ---- Listening: one recording, 5 sentences (some with 2 blanks) — script from cô Hiền ----
// parts[] are the text pieces around the blanks: parts.length === answers.length + 1.
// Sentence 2 changed to "go down to the town" (cô Hiền approved).
const LISTEN_AUDIO = "g6-u5-listen.wav";
const LISTEN_ITEMS = [
  { id: 1, parts: ["The island is too", "to go round by", "."], answers: ["large", "motorbike"] },
  { id: 2, parts: ["I want to go down to the", "to buy some", "."], answers: ["town", "food"] },
  { id: 3, parts: ["David doesn't do the", "often."], answers: ["dishes"] },
  { id: 4, parts: ["Are you ready for the", "", "around the bay?"], answers: ["boat", "trip"] },
  { id: 5, parts: ["Tam didn't", "last night. She talked to her friend for two", "."], answers: ["study", "hours"] },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit4-exercises-g6.js.
// 13 scored items total: 4 Answer + 4 Sentence Ordering + 5 Listening sentences.
// Score is based on the FIRST attempt only — retry rounds are saved separately.
// ============================================================
const UNIT_ID = "g6-unit5";
const UNIT_LABEL = "Unit 5: Natural Wonders of Viet Nam";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return ANSWER_ITEMS.length + ORDER_ITEMS.length + LISTEN_ITEMS.length;
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
  setupListenTranslate();
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

// The instruction-only "Dịch" button of Listening.
function setupListenTranslate() {
  const btn = document.getElementById("listen-translate");
  const viEl = document.getElementById("listen-vi");
  if (!btn || !viEl) return;
  btn.addEventListener("click", () => {
    const showing = viEl.style.display !== "none";
    viEl.style.display = showing ? "none" : "block";
    btn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });
}

function listenQuestion(item) {
  return item.parts.reduce((s, p, idx) => s + (idx ? " ___ " : "") + p, "").replace(/\s+/g, " ").replace(/ \./g, ".").trim();
}
function listenFull(item) {
  return item.parts.reduce((s, p, idx) => s + (idx ? ` ${item.answers[idx - 1]} ` : "") + p, "").replace(/\s+/g, " ").replace(/ \./g, ".").trim();
}

// ---- 5. Listening (scored: 5, one point per SENTENCE) — one recording, all sentences on screen ----
// A sentence counts as correct only if every blank in it is right.
// Sentences still wrong come back in a "Vòng 2" retry round (saved as retries, not re-scored).
function runListenRound(items, round) {
  const host = document.getElementById("listen-wrap");
  if (!host) return;

  host.innerHTML = `
    ${retryHeader(round)}
    <audio class="q-audio" controls preload="auto" src="${LISTEN_AUDIO}"></audio>
    <p class="tf-vi" style="margin:0 0 12px;">Bấm ▶ để nghe (nghe lại bao nhiêu lần cũng được), rồi điền từ còn thiếu vào mỗi chỗ trống.</p>
    ${items.map(item => `
      <div class="tf-item listen-item" data-id="${item.id}">
        <span class="verb-num">${item.id}.</span>
        ${item.parts.map((p, idx) => (idx ? `<input type="text" class="fitb-input listen-blank" data-id="${item.id}" data-b="${idx - 1}" autocomplete="off" autocapitalize="off" spellcheck="false"> ` : "") + p).join(" ")}
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
    items.forEach(item => {
      const boxes = inputs.filter(inp => Number(inp.dataset.id) === item.id);
      const typed = boxes.map(inp => inp.value.trim());
      let ok = true;
      boxes.forEach(inp => {
        const good = normalize(inp.value) === normalize(item.answers[Number(inp.dataset.b)]);
        if (!good) ok = false;
        inp.disabled = true;
        inp.classList.add(good ? "fitb-correct" : "fitb-wrong");
        inp.style.borderColor = good ? "#3fae4f" : "#e05c5c";
      });
      const fb = document.getElementById(`listen-feedback-${item.id}`);
      fb.textContent = ok ? "✓ Chính xác!" : `Đáp án đúng: ${item.answers.join(" · ")}`;
      fb.className = ok ? "fitb-feedback ok" : "fitb-feedback no";
      eqRecordAndSave(`listen-${item.id}`, `Listening ${item.id}: ${listenQuestion(item)}`,
        typed.join(" / "), item.answers.join(" / "), ok);
      if (!ok) wrongItems.push(item);
    });
    const allCorrect = wrongItems.length === 0;
    window.EQSound && (allCorrect ? window.EQSound.correct() : window.EQSound.wrong());
    window.EQMascot && window.EQMascot.show("mascot-box", allCorrect ? "correct" : "wrong");
    feedback.textContent = allCorrect
      ? "✓ Chính xác hết!"
      : `Đúng ${items.length - wrongItems.length}/${items.length} câu. Bấm Tiếp theo để nghe lại và làm lại các câu sai.`;
    feedback.className = allCorrect ? "fitb-feedback ok" : "fitb-feedback no";
    addNextButton(feedback, () => {
      if (wrongItems.length) runListenRound(wrongItems, round + 1);
      else showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 5.", false, "complete_unit");
    });
  });
}

// ---- Breadcrumb-style navigation between the 5 sections ----
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
