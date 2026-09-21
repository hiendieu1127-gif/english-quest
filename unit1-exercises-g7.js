// ============================================================
// Grade 7 — Unit 1 (Hobbies) — Exercises data
// Source: teacher Hien's screenshots (reading passage + workbook exercises)
// Vietnamese translations: written by Claude, not in source — please review
// Scored sections: Match A-B (5) + True/False (5) + Make sentences (4) = 14 total.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================

const READING_HTML =
  "Do you have any hobbies? If you don't, please start one because having a " +
  "<mark>hobby</mark> is very <mark>beneficial</mark>. Firstly, a hobby gives you something fun to do " +
  "during your leisure time, especially during <mark>pandemics</mark>. During the Covid-19 " +
  "<mark>lockdown</mark>, my family <mark>reads books</mark> and <mark>watches films together</mark>. This makes " +
  "us feel better when we have to stay at home. Secondly, a hobby makes you " +
  "a more interesting person. If you have a lot of experience and skills, you can " +
  "share them with others. I love <mark>travelling</mark>, and I usually share my <mark>experiences</mark> " +
  "with my classmates. This way, I have more friends. Now we have a travel " +
  "group in our class. <mark>Last but not least</mark>, a hobby can help you <mark>develop</mark> new skills. " +
  "If you spend a lot of time on your hobby, your skills will <mark>improve</mark>. My sister " +
  "loves sewing. After sewing for two years, she can now <mark>sew</mark> beautiful doll " +
  "clothes. Those are the reasons why you should have hobbies.";

// ---- Vocabulary (practice only, tap to hear + flip for meaning) ----
const VOCAB_ITEMS = [
  { en: "hobby", vi: "sở thích" },
  { en: "beneficial", vi: "có ích, hữu ích" },
  { en: "pandemics", vi: "đại dịch" },
  { en: "lockdown", vi: "phong tỏa, giãn cách" },
  { en: "reads books", vi: "đọc sách" },
  { en: "watches films together", vi: "cùng nhau xem phim" },
  { en: "travelling", vi: "du lịch" },
  { en: "experiences", vi: "kinh nghiệm, trải nghiệm" },
  { en: "Last but not least", vi: "cuối cùng nhưng không kém phần quan trọng" },
  { en: "develop", vi: "phát triển" },
  { en: "improve", vi: "cải thiện, trở nên tốt hơn" },
  { en: "sew", vi: "may, khâu" },
];

// ---- Match A with B (5 items) — shown one at a time as multiple choice ----
const MATCH_ITEMS = [
  { id: 1, a: "beneficial", b: "helpful or useful", bVi: "có ích hoặc hữu ích" },
  { id: 2, a: "pandemics", b: "diseases throughout the whole country or the whole world", bVi: "dịch bệnh lan rộng khắp một quốc gia hoặc toàn thế giới" },
  { id: 3, a: "lockdown", b: "an emergency situation when people have to stay at home", bVi: "tình huống khẩn cấp khi mọi người phải ở nhà" },
  { id: 4, a: "experiences", b: "things that happen to you and affect your life", bVi: "những điều xảy ra với bạn và ảnh hưởng đến cuộc sống của bạn" },
  { id: 5, a: "improve", b: "become better", bVi: "trở nên tốt hơn" },
];

// ---- True / False / No Information (5 items) ----
const TF_ITEMS = [
  {
    en: "During the lockdown, the author's family reads books and watches the news together.",
    vi: "Trong thời gian phong tỏa, gia đình tác giả đọc sách và xem tin tức cùng nhau.",
    answer: "F",
  },
  {
    en: "Travelling helps the author have more friends.",
    vi: "Du lịch giúp tác giả có thêm nhiều bạn hơn.",
    answer: "T",
  },
  {
    en: "There is a dancing club in the author's school.",
    vi: "Có một câu lạc bộ khiêu vũ trong trường của tác giả.",
    answer: "NI",
  },
  {
    en: "Hobbies can help a person develop new skills.",
    vi: "Sở thích có thể giúp một người phát triển kỹ năng mới.",
    answer: "T",
  },
  {
    en: "The author's sister sews clothes for her family members.",
    vi: "Chị gái của tác giả may quần áo cho các thành viên trong gia đình.",
    answer: "F",
  },
];

// ---- Make sentences — sentence ordering, chunks shuffled, VN meaning hidden behind "Dịch" ----
const SENTENCES = [
  {
    id: 1,
    chunks: [
      { en: "I", vi: "tôi" },
      { en: "like", vi: "thích" },
      { en: "gardening", vi: "làm vườn" },
      { en: "because", vi: "bởi vì" },
      { en: "I", vi: "tôi" },
      { en: "love", vi: "yêu thích" },
      { en: "plants", vi: "cây" },
      { en: "and", vi: "và" },
      { en: "flowers.", vi: "hoa." },
    ],
    answer: "I like gardening because I love plants and flowers.",
    answerVi: "Tôi thích làm vườn bởi vì tôi yêu thích cây và hoa.",
  },
  {
    id: 2,
    chunks: [
      { en: "My sister", vi: "chị/em gái tôi" },
      { en: "doesn't like", vi: "không thích" },
      { en: "horse riding", vi: "cưỡi ngựa" },
      { en: "because", vi: "bởi vì" },
      { en: "she's", vi: "cô ấy" },
      { en: "afraid of", vi: "sợ" },
      { en: "horses.", vi: "những con ngựa." },
    ],
    answer: "My sister doesn't like horse riding because she's afraid of horses.",
    answerVi: "Chị/em gái tôi không thích cưỡi ngựa bởi vì cô ấy sợ những con ngựa.",
  },
  {
    id: 3,
    chunks: [
      { en: "Making models", vi: "làm mô hình" },
      { en: "develops", vi: "phát triển" },
      { en: "your", vi: "của bạn" },
      { en: "creativity.", vi: "sự sáng tạo." },
    ],
    answer: "Making models develops your creativity.",
    answerVi: "Làm mô hình phát triển sự sáng tạo của bạn.",
  },
  {
    id: 4,
    chunks: [
      { en: "Collecting stamps", vi: "sưu tầm tem" },
      { en: "helps", vi: "giúp" },
      { en: "you", vi: "bạn" },
      { en: "be more patient.", vi: "kiên nhẫn hơn." },
    ],
    answer: "Collecting stamps helps you be more patient.",
    answerVi: "Sưu tầm tem giúp bạn kiên nhẫn hơn.",
  },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit1-grammar-g7.js.
// 14 scored items total: 5 Match + 5 True/False + 4 Make sentences.
// Score is based on the FIRST attempt only — retry rounds (below) are for
// practice and do not change the saved score.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================
const UNIT_ID = "g7-unit1";
const UNIT_LABEL = "Unit 1: Hobbies";
let eqStudent = "";
let eqAnswers = {};
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return MATCH_ITEMS.length + TF_ITEMS.length + SENTENCES.length;
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  eqAnswers[key] = { question, studentAnswer, correctAnswer, correct };
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

function renderDots(current, total) {
  let dots = "";
  for (let idx = 0; idx < total; idx++) {
    dots += `<span class="runner-dot ${idx < current ? "done" : idx === current ? "current" : ""}"></span>`;
  }
  return `<div class="runner-dots">${dots}</div>`;
}

// ---- Shared "section complete" screen (Xong rồi! + optional "next section" button) ----
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
    const btn = host.querySelector(".section-next-btn");
    btn && btn.addEventListener("click", () => {
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
  renderMatch();
  renderTrueFalse();
  runSentences();
  setupCrumbNav();
});

// ---- Reading (practice only) ----
function renderReading() {
  const el = document.getElementById("reading-text");
  if (el) el.innerHTML = READING_HTML;
  const toVocabBtn = document.getElementById("reading-to-vocab-btn");
  toVocabBtn && toVocabBtn.addEventListener("click", () => switchPanel("panel-vocab"));
}

// ---- Vocabulary (practice only): 3-column flip-card grid, always with audio ----
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
      window.EQSpeak && window.EQSpeak.speak(VOCAB_ITEMS[idx].en);
      card.classList.toggle("flipped");
    });
  });
}

// ---- Match A with B (scored: 5) — one definition at a time, pick the
