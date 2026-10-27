// ============================================================
// Grade 7 — Unit 3 (Community Service) — Exercises data
// Source: teacher Hien's screenshots (pronunciation -ed, listening, reading passage,
// match the words, True/False, write sentences). Listening audio: g7-u3-listen.wav
// (uploaded by teacher Hien). The Vietnamese translations are Claude's — please review.
// Scored sections: Pronunciation (5) + Listening (5) + Match (5) + True/False (5)
// + Make sentences (3) = 23 total. Reading and Vocabulary are practice-only.
// ============================================================

// ---- Pronunciation: choose the word whose -ed is pronounced differently ----
// "stem" + "ed" so the -ed part can be underlined like in the book.
const PRON_ITEMS = [
  { id: 1, words: [["start", "ed"], ["wash", "ed"], ["want", "ed"], ["visit", "ed"]], answer: 1,
    why: "washed đọc /t/, các từ còn lại đọc /ɪd/." },
  { id: 2, words: [["play", "ed"], ["stopp", "ed"], ["book", "ed"], ["pass", "ed"]], answer: 0,
    why: "played đọc /d/, các từ còn lại đọc /t/." },
  { id: 3, words: [["need", "ed"], ["decid", "ed"], ["start", "ed"], ["cook", "ed"]], answer: 3,
    why: "cooked đọc /t/, các từ còn lại đọc /ɪd/." },
  { id: 4, words: [["enjoy", "ed"], ["call", "ed"], ["laugh", "ed"], ["water", "ed"]], answer: 2,
    why: "laughed đọc /t/, các từ còn lại đọc /d/." },
  { id: 5, words: [["watch", "ed"], ["look", "ed"], ["listen", "ed"], ["talk", "ed"]], answer: 2,
    why: "listened đọc /d/, các từ còn lại đọc /t/." },
];

// ---- Listening: one recording, write ONE word in each blank ----
const LISTEN_AUDIO = "g7-u3-listen.wav";
const LISTEN_ITEMS = [
  { id: 1, before: "My school has a number of volunteer", after: "every summer.", answer: "activities" },
  { id: 2, before: "The activities include donating books to village children,", after: "kids in the neighbourhood, and teaching English to primary students.", answer: "tutoring" },
  { id: 3, before: "We thought about why we should", after: "in these activities.", answer: "join" },
  { id: 4, before: "Those who like reading could choose to collect and donate", after: ".", answer: "books" },
  { id: 5, before: "Our teachers often encourage us to stay", after: ".", answer: "committed" },
];

const READING_HTML =
  "People first used the word ‘volunteer’ in 1795, but in England there were at least 500 volunteer " +
  "hospitals long before that. The YMCA in London became the first volunteering organisation in 1844. " +
  "It provided help to <mark>needy people</mark> and held classes to help people develop skills. The Red Cross " +
  "became the first international <mark>charity organisation</mark> in 1863. Volunteer work is becoming more and " +
  "more <mark>popular</mark> in the world. For example, in the USA, about one-fifth of the population does volunteer " +
  "work. In Europe, thousands of volunteer programmes are run in different countries.<br><br>" +
  "Everyone can do volunteer work to help their <mark>community</mark>. Volunteer activities include donating food " +
  "and clothes, joining clean-up projects, tutoring children, protecting wild animals, etc. Volunteers work " +
  "not for money but to help people in need and to <mark>connect</mark> with others.";

// ---- Vocabulary (practice only, tap to hear + flip for meaning) ----
const VOCAB_ITEMS = [
  { en: "volunteer work", vi: "công việc tình nguyện" },
  { en: "needy people", vi: "những người có hoàn cảnh khó khăn" },
  { en: "develop skills", vi: "phát triển kỹ năng" },
  { en: "charity organisation", vi: "tổ chức từ thiện" },
  { en: "become more popular", vi: "trở nên phổ biến hơn" },
  { en: "help the community", vi: "giúp đỡ cộng đồng" },
  { en: "donate food and clothes", vi: "quyên góp thức ăn và quần áo" },
  { en: "join clean-up projects", vi: "tham gia các dự án dọn dẹp vệ sinh" },
  { en: "protect wild animals", vi: "bảo vệ động vật hoang dã" },
  { en: "connect with others", vi: "kết nối với những người khác" },
];

// ---- Match each highlighted word with its meaning (5 items, from the book) ----
const MATCH_MEANINGS = [
  { letter: "a", en: "to link, join things or people together", vi: "liên kết, nối các vật hoặc mọi người lại với nhau" },
  { letter: "b", en: "an organisation for helping people in need", vi: "một tổ chức giúp đỡ những người gặp khó khăn" },
  { letter: "c", en: "people who need help, poor people", vi: "những người cần giúp đỡ, người nghèo" },
  { letter: "d", en: "a group of people living in a place", vi: "một nhóm người sống ở cùng một nơi" },
  { letter: "e", en: "liked or enjoyed by a large number of people", vi: "được nhiều người yêu thích" },
];
const MATCH_ITEMS = [
  { id: 1, word: "needy people", answer: "c" },
  { id: 2, word: "charity organisation", answer: "b" },
  { id: 3, word: "popular", answer: "e" },
  { id: 4, word: "community", answer: "d" },
  { id: 5, word: "connect", answer: "a" },
];

// ---- True / False (5 items, from the book) ----
const TF_ITEMS = [
  {
    en: "People first used the word ‘volunteer’ in the 18th century.",
    vi: "Người ta dùng từ ‘volunteer’ lần đầu tiên vào thế kỷ 18.",
    answer: "T",
  },
  {
    en: "The YMCA held classes that taught people skills.",
    vi: "Tổ chức YMCA đã mở các lớp học dạy kỹ năng cho mọi người.",
    answer: "T",
  },
  {
    en: "The Red Cross is an American charity organisation.",
    vi: "Hội Chữ thập đỏ là một tổ chức từ thiện của Mỹ.",
    answer: "F",
  },
  {
    en: "Volunteers work to help and connect with others.",
    vi: "Tình nguyện viên làm việc để giúp đỡ và kết nối với người khác.",
    answer: "T",
  },
  {
    en: "One example of volunteer work is donating clothes.",
    vi: "Một ví dụ về công việc tình nguyện là quyên góp quần áo.",
    answer: "T",
  },
];

// ---- Make sentences — the book's cue words on top, chunks already in the right form ----
const SENTENCES = [
  {
    id: 1,
    cue: "Minh / find / volunteer activities / interesting / can meet / new people.",
    chunks: [
      { en: "Minh", vi: "Minh" },
      { en: "finds", vi: "thấy" },
      { en: "volunteer activities", vi: "các hoạt động tình nguyện" },
      { en: "interesting", vi: "thú vị" },
      { en: "because", vi: "bởi vì" },
      { en: "he", vi: "cậu ấy" },
      { en: "can meet", vi: "có thể gặp" },
      { en: "new people.", vi: "những người mới." },
    ],
    answer: "Minh finds volunteer activities interesting because he can meet new people.",
    answerVi: "Minh thấy các hoạt động tình nguyện thú vị vì cậu ấy có thể gặp gỡ những người mới.",
  },
  {
    id: 2,
    cue: "We / join / community activities / help / needy / last summer.",
    chunks: [
      { en: "We", vi: "chúng tôi" },
      { en: "joined", vi: "đã tham gia" },
      { en: "community activities", vi: "các hoạt động cộng đồng" },
      { en: "to help", vi: "để giúp đỡ" },
      { en: "the needy", vi: "những người khó khăn" },
      { en: "last summer.", vi: "mùa hè năm ngoái." },
    ],
    answer: "We joined community activities to help the needy last summer.",
    answerVi: "Mùa hè năm ngoái, chúng tôi đã tham gia các hoạt động cộng đồng để giúp đỡ những người khó khăn.",
  },
  {
    id: 3,
    cue: "We / learn / teamwork skills / when / join / some / clean-up activity / last summer.",
    chunks: [
      { en: "We", vi: "chúng tôi" },
      { en: "learnt", vi: "đã học được" },
      { en: "teamwork skills", vi: "kỹ năng làm việc nhóm" },
      { en: "when", vi: "khi" },
      { en: "we", vi: "chúng tôi" },
      { en: "joined", vi: "đã tham gia" },
      { en: "some", vi: "một vài" },
      { en: "clean-up activities", vi: "hoạt động dọn dẹp" },
      { en: "last summer.", vi: "mùa hè năm ngoái." },
    ],
    answer: "We learnt teamwork skills when we joined some clean-up activities last summer.",
    answerVi: "Chúng tôi đã học được kỹ năng làm việc nhóm khi tham gia một vài hoạt động dọn dẹp vào mùa hè năm ngoái.",
  },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit2-exercises-g7.js.
// 23 scored items total: 5 Pronunciation + 5 Listening + 5 Match + 5 True/False + 3 Make sentences.
// Score is based on the FIRST attempt only — retry rounds are saved separately.
// ============================================================
const UNIT_ID = "g7-unit3";
const UNIT_LABEL = "Unit 3: Community Service";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return PRON_ITEMS.length + LISTEN_ITEMS.length + MATCH_ITEMS.length + TF_ITEMS.length + SENTENCES.length;
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

// Curly apostrophes from phone keyboards count as straight ones.
function normalize(s) {
  return s.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").replace(/[.?!,]/g, "");
}

function renderDots(current, total) {
  let dots = "";
  for (let idx = 0; idx < total; idx++) {
    dots += `<span class="runner-dot ${idx < current ? "done" : idx === current ? "current" : ""}"></span>`;
  }
  return `<div class="runner-dots">${dots}</div>`;
}

// A bare "I" chunk is read as "capital I" by some voices — speak "aye" instead.
function speakVocab(text) {
  if (!window.EQSpeak) return;
  window.EQSpeak.speak(text.trim() === "I" ? "aye" : text);
}

// AI voice is off everywhere except the vocabulary cards after the reading.
function speakChunk() {}

function retryHeader(round) {
  return round > 1
    ? `<div style="background:#fff3cd;color:#8a6b00;font-weight:700;padding:10px 16px;border-radius:12px;margin-bottom:14px;text-align:center;">🔄 Làm lại câu sai — Vòng ${round}</div>`
    : "";
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
function showSectionComplete(host, message, hasNext, mascotType) {
  window.EQMascot && window.EQMascot.show("mascot-box", mascotType || "complete_exercise");
  host.innerHTML = `
    <div class="stage-complete">
      <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h3>Xong rồi!</h3>
      <p>${message}</p>
      ${hasNext ? `<p style="color:#6b6b76;margin-top:4px;">Sẵn sàng cho dạng bài tiếp theo chưa?</p><button type="button" class="btn btn-primary section-next-btn" style="margin-top:14px;">Dạng bài tiếp theo →</button>` : ""}
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
  runPronRound(PRON_ITEMS, 1);
  runListenRound(LISTEN_ITEMS, 1);
  renderReading();
  renderVocab();
  runMatchRound(MATCH_ITEMS, 1);
  runTFRound(TF_ITEMS.map((t, idx) => ({ ...t, origIdx: idx })), 1);
  runSentenceRound(SENTENCES, 1);
  setupCrumbNav();
});

// ---- 1. Pronunciation (scored: 5) — one question at a time, 4 words, -ed underlined ----
function runPronRound(items, round) {
  const host = document.getElementById("pron-wrap");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];
  const letters = ["A", "B", "C", "D"];

  function render() {
    const item = items[i];
    const plain = item.words.map(w => w.join(""));
    host.innerHTML = `
      ${retryHeader(round)}
      ${renderDots(i, total)}
      <div class="mcq-def">Câu ${item.id}</div>
      <div class="mcq-options" id="pron-options">
        ${item.words.map((w, idx) => `<button type="button" class="mcq-option" data-idx="${idx}"><span class="mcq-letter">${letters[idx]}</span><span>${w[0]}<u class="pron-ed">${w[1]}</u></span></button>`).join("")}
      </div>
      <div class="fitb-feedback" id="pron-feedback"></div>`;

    let answered = false;
    const optionButtons = host.querySelectorAll(".mcq-option");
    const feedback = host.querySelector("#pron-feedback");
    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = Number(btn.dataset.idx);
        const correct = chosen === item.answer;
        optionButtons.forEach(b => {
          b.disabled = true;
          if (Number(b.dataset.idx) === item.answer) b.classList.add("correct");
        });
        if (!correct) btn.classList.add("wrong");
        speakChunk(plain[item.answer]);
        window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
        window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
        feedback.innerHTML = (correct ? "✓ Chính xác! " : `Đáp án đúng: ${letters[item.answer]}. `) + item.why;
        feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
        eqRecordAndSave(`pron-${item.id}`, `Pronunciation ${item.id}: ${plain.join(", ")}`, plain[chosen], plain[item.answer], correct);
        if (!correct) wrongItems.push(item);
        addNextButton(feedback, () => {
          i++;
          if (i < total) render();
          else if (wrongItems.length) runPronRound(wrongItems, round + 1);
          else showSectionComplete(host, "Em đã hoàn thành phần Pronunciation.", true, "complete_exercise");
        });
      });
    });
  }
  render();
}

// ---- 2. Listening (scored: 5) — one recording, all 5 blanks on screen, checked together ----
// Blanks still wrong come back in a "Vòng 2" retry round (saved as retries, not re-scored).
function runListenRound(items, round) {
  const host = document.getElementById("listen-wrap");
  if (!host) return;

  host.innerHTML = `
    ${retryHeader(round)}
    <audio class="q-audio" controls preload="auto" src="${LISTEN_AUDIO}"></audio>
    <p class="tf-vi" style="margin:0 0 12px;">Bấm ▶ để nghe (nghe lại bao nhiêu lần cũng được), rồi điền MỘT từ vào mỗi chỗ trống.</p>
    ${items.map(item => `
      <div class="tf-item listen-item">
        <span class="verb-num">${item.id}.</span> ${item.before}
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
      else showSectionComplete(host, "Em đã hoàn thành phần Listening.", true, "complete_exercise");
    });
  });
}

// ---- 3. Reading (practice only) ----
function renderReading() {
  const el = document.getElementById("reading-text");
  if (el) el.innerHTML = READING_HTML;
  const toVocabBtn = document.getElementById("reading-to-vocab-btn");
  toVocabBtn && toVocabBtn.addEventListener("click", () => switchPanel("panel-vocab"));
}

// ---- 4. Vocabulary (practice only): 3-column flip-card grid, always with audio ----
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
      const idx = Number(card.dataset.idx);
      speakVocab(VOCAB_ITEMS[idx].en);
      card.classList.toggle("flipped");
    });
  });
}

// ---- 5. Match (scored: 5) — one word at a time, choose its meaning a–e ----
function runMatchRound(items, round) {
  const host = document.getElementById("match-wrap");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    const right = MATCH_MEANINGS.find(m => m.letter === item.answer);
    host.innerHTML = `
      ${retryHeader(round)}
      ${renderDots(i, total)}
      <div class="mcq-def">${item.id}. ${item.word}</div>
      <div style="text-align:center;"><button type="button" class="eq-translate-btn" id="match-translate">🔤 Dịch</button></div>
      <div class="mcq-options mcq-options-1col">
        ${MATCH_MEANINGS.map(m => `<button type="button" class="mcq-option" data-letter="${m.letter}"><span class="mcq-letter">${m.letter}</span><span>${m.en}<span class="match-vi" style="display:none;"><br><span style="color:#666;font-weight:600;font-size:.88rem;">${m.vi}</span></span></span></button>`).join("")}
      </div>
      <div class="fitb-feedback" id="match-feedback"></div>`;

    const trBtn = host.querySelector("#match-translate");
    trBtn.addEventListener("click", () => {
      const els = host.querySelectorAll(".match-vi");
      const on = els[0].style.display === "none";
      els.forEach(el => { el.style.display = on ? "inline" : "none"; });
      trBtn.textContent = on ? "🔤 Ẩn nghĩa" : "🔤 Dịch";
    });

    let answered = false;
    const optionButtons = host.querySelectorAll(".mcq-option");
    const feedback = host.querySelector("#match-feedback");
    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = btn.dataset.letter;
        const correct = chosen === item.answer;
        optionButtons.forEach(b => {
          b.disabled = true;
          if (b.dataset.letter === item.answer) b.classList.add("correct");
        });
        if (!correct) btn.classList.add("wrong");
        speakChunk(item.word);
        window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
        window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
        feedback.innerHTML = (correct ? "✓ Chính xác! " : `Đáp án đúng: ${item.answer}. `) + `<b>${item.word}</b> = ${right.en}`;
        feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
        eqRecordAndSave(`match-${item.id}`, item.word, chosen, item.answer, correct);
        if (!correct) wrongItems.push(item);
        addNextButton(feedback, () => {
          i++;
          if (i < total) render();
          else if (wrongItems.length) runMatchRound(wrongItems, round + 1);
          else showSectionComplete(host, "Em đã hoàn thành phần Match.", true, "complete_exercise");
        });
      });
    });
  }
  render();
}

// ---- 6. True / False (scored: 5) — meaning hidden behind "Dịch" ----
function runTFRound(items, round) {
  const host = document.getElementById("tf-list");
  if (!host) return;
  const total = items.length;
  let answeredCount = 0;
  const wrongItems = [];

  host.innerHTML = retryHeader(round) + items.map((t, idx) => `
    <div class="tf-item" data-idx="${idx}">
      <div>${t.origIdx + 1}. ${t.en}</div>
      <button type="button" class="eq-translate-btn" data-idx="${idx}">🔤 Dịch</button>
      <div class="tf-vi" id="tf-vi-${idx}" style="display:none;">${t.vi}</div>
      <div class="tf-btn-row">
        <button type="button" class="tf-btn" data-choice="T">T</button>
        <button type="button" class="tf-btn" data-choice="F">F</button>
      </div>
      <div class="fitb-feedback" id="tf-feedback-${idx}"></div>
    </div>`).join("");

  if (round > 1) host.scrollIntoView({ behavior: "smooth", block: "start" });

  host.querySelectorAll(".eq-translate-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const viEl = document.getElementById(`tf-vi-${idx}`);
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      btn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });
  });

  host.querySelectorAll(".tf-item").forEach((itemEl) => {
    const idx = Number(itemEl.dataset.idx);
    const t = items[idx];
    let answered = false;
    itemEl.querySelectorAll(".tf-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const choice = btn.dataset.choice;
        const correct = choice === t.answer;
        itemEl.querySelectorAll(".tf-btn").forEach(b => {
          if (b.dataset.choice === t.answer) b.classList.add("selected-correct");
        });
        if (!correct) btn.classList.add("selected-wrong");
        window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
        window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
        const feedback = document.getElementById(`tf-feedback-${idx}`);
        feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${t.answer}`;
        feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";

        eqRecordAndSave(`tf-${t.origIdx}`, t.en, choice, t.answer, correct);
        if (!correct) wrongItems.push(t);

        answeredCount++;
        if (answeredCount === total) {
          setTimeout(() => {
            if (wrongItems.length > 0) runTFRound(wrongItems, round + 1);
            else showSectionComplete(host, "Em đã hoàn thành phần True/False.", true, "complete_exercise");
          }, 900);
        }
      });
    });
  });
}

// ---- 7. Make sentences (scored: 3, one at a time) — tap chunks in order ----
function runSentenceRound(items, round) {
  const host = document.getElementById("sentence-runner");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    const shuffled = shuffle(item.chunks.map((c, idx) => ({ ...c, origIdx: idx })));
    host.innerHTML = `
      ${retryHeader(round)}
      ${renderDots(i, total)}
      <div class="quiz-item">
        <div class="sentence-cue"><span class="verb-num">${item.id}.</span> ${item.cue}</div>
        <button type="button" class="eq-translate-btn" id="sentence-translate">🔤 Dịch</button>
        <div class="sentence-answer-strip" id="sentence-strip"></div>
        <div class="sentence-chunks" id="sentence-pool">
          ${shuffled.map(c => `<div class="sentence-chunk" data-orig="${c.origIdx}">${c.en}<span class="chunk-vi">${c.vi}</span></div>`).join("")}
        </div>
        <div class="fitb-row" style="margin-top:14px;">
          <button class="btn btn-secondary btn-sm" id="sentence-reset">Làm lại</button>
          <button class="btn btn-primary btn-sm" id="sentence-check">Kiểm tra</button>
        </div>
        <div class="fitb-feedback" id="sentence-feedback"></div>
      </div>`;

    const strip = host.querySelector("#sentence-strip");
    const pool = host.querySelector("#sentence-pool");
    const feedback = host.querySelector("#sentence-feedback");
    const translateBtn = host.querySelector("#sentence-translate");
    const resetBtn = host.querySelector("#sentence-reset");
    const checkBtn = host.querySelector("#sentence-check");
    let placed = [];
    let checked = false;

    translateBtn.addEventListener("click", () => {
      const showing = pool.classList.toggle("show-vi");
      translateBtn.textContent = showing ? "🔤 Ẩn nghĩa" : "🔤 Dịch";
    });

    function renderStrip() {
      strip.innerHTML = placed.map(p => `<div class="sentence-chunk placed" data-orig="${p.origIdx}" title="Chạm để bỏ ra">${p.en}</div>`).join("");
      strip.querySelectorAll(".sentence-chunk.placed").forEach(el => {
        el.addEventListener("click", () => {
          // Tapping a placed chunk sends just that one back to the pool.
          if (checked) return;
          const origIdx = Number(el.dataset.orig);
          const idx = placed.findIndex(p => p.origIdx === origIdx);
          if (idx === -1) return;
          speakChunk(placed[idx].en);
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
        speakChunk(item.chunks[origIdx].en);
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
      if (checked || placed.length === 0) return;
      checked = true;
      const built = placed.map(c => c.en).join(" ");
      const correct = built === item.answer;
      window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
      feedback.innerHTML =
        (correct
          ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
          : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng:</span>`) +
        `<div style="color:#222;font-weight:800;margin-top:6px;">${item.answer}</div>` +
        `<div style="color:#666;margin-top:2px;">${item.answerVi}</div>`;
      feedback.className = "fitb-feedback";
      eqRecordAndSave(`sentence-${item.id}`, "Sentence " + item.id + ": " + item.cue, built, item.answer, correct);
      if (!correct) wrongItems.push(item);
      resetBtn.disabled = true;
      checkBtn.disabled = true;
      addNextButton(feedback, () => {
        i++;
        if (i < total) render();
        else if (wrongItems.length) runSentenceRound(wrongItems, round + 1);
        else showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 3.", false, "complete_unit");
      });
    });
  }
  render();
}

// ---- Breadcrumb-style navigation between the 7 sections ----
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
  switchPanel("panel-pron");
}
