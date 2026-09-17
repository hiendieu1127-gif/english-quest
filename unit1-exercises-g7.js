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

// ---- Vocabulary (practice only, tap to hear + reveal meaning) ----
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

// ---- Match A with B (5 pairs) — column A has audio, column B always shows its VN translation ----
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

// ---- Make sentences — sentence ordering, chunks shuffled, VN translation shown per chunk ----
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

// ---- Vocabulary (practice only, tap word → audio + reveal meaning) ----
function renderVocab() {
  const host = document.getElementById("vocab-list");
  if (!host) return;
  host.innerHTML = VOCAB_ITEMS.map((v, idx) => `
    <div class="vocab-item" data-idx="${idx}">
      <span class="vocab-en">🔊 ${v.en}</span>
      <div class="vocab-vi">${v.vi}</div>
    </div>`).join("");
  host.querySelectorAll(".vocab-item").forEach((item) => {
    item.addEventListener("click", () => {
      const idx = Number(item.dataset.idx);
      const word = VOCAB_ITEMS[idx];
      window.EQSpeak && window.EQSpeak.speak(word.en);
      item.classList.toggle("open");
    });
  });
}

// ---- Match A with B (scored: 5) ----
function renderMatch() {
  const host = document.getElementById("match-wrap");
  if (!host) return;
  const bOrder = shuffle(MATCH_ITEMS);

  host.innerHTML = `
    <div class="match-col" id="match-col-a">
      ${MATCH_ITEMS.map(m => `<button type="button" class="match-btn" data-id="${m.id}">${m.a}</button>`).join("")}
    </div>
    <div class="match-col" id="match-col-b">
      ${bOrder.map(m => `<button type="button" class="match-btn" data-id="${m.id}">${m.b}<span class="match-b-vi">${m.bVi}</span></button>`).join("")}
    </div>`;

  const feedback = document.getElementById("match-feedback");
  let selectedA = null;
  const matched = new Set();
  const firstTryWrong = new Set(); // ids where the student got it wrong at least once before matching

  const aButtons = host.querySelectorAll("#match-col-a .match-btn");
  const bButtons = host.querySelectorAll("#match-col-b .match-btn");

  aButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      if (matched.has(id)) return;
      aButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedA = id;
      window.EQSpeak && window.EQSpeak.speak(MATCH_ITEMS.find(m => m.id === id).a);
    });
  });

  bButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const bId = Number(btn.dataset.id);
      if (selectedA === null) return;
      if (matched.has(bId)) return;
      const correct = selectedA === bId;
      if (correct) {
        matched.add(bId);
        const aBtn = host.querySelector(`#match-col-a .match-btn[data-id="${bId}"]`);
        aBtn && aBtn.classList.add("correct");
        aBtn && aBtn.classList.remove("selected");
        btn.classList.add("correct");
        window.EQSound && window.EQSound.correct();
        window.EQMascot && window.EQMascot.show("mascot-box", "correct");
        eqRecordAndSave(`match-${bId}`, MATCH_ITEMS.find(m => m.id === bId).a, "matched", MATCH_ITEMS.find(m => m.id === bId).b, !firstTryWrong.has(bId));
        selectedA = null;
        if (matched.size === MATCH_ITEMS.length) {
          feedback.textContent = "✓ Hoàn thành phần Match A with B!";
          feedback.className = "fitb-feedback ok";
          window.EQMascot && window.EQMascot.show("mascot-box", "complete_exercise");
        }
      } else {
        firstTryWrong.add(selectedA);
        btn.classList.add("wrong-flash");
        window.EQSound && window.EQSound.wrong();
        window.EQMascot && window.EQMascot.show("mascot-box", "wrong");
        setTimeout(() => btn.classList.remove("wrong-flash"), 500);
      }
    });
  });
}

// ---- True / False / No Information (scored: 5) ----
function renderTrueFalse() {
  const host = document.getElementById("tf-list");
  if (!host) return;
  host.innerHTML = TF_ITEMS.map((t, idx) => `
    <div class="tf-item" data-idx="${idx}">
      <div>${idx + 1}. ${t.en}</div>
      <div class="tf-vi">${t.vi}</div>
      <div class="tf-btn-row">
        <button type="button" class="tf-btn" data-choice="T">T</button>
        <button type="button" class="tf-btn" data-choice="F">F</button>
        <button type="button" class="tf-btn" data-choice="NI">NI</button>
      </div>
      <div class="fitb-feedback" id="tf-feedback-${idx}"></div>
    </div>`).join("");

  host.querySelectorAll(".tf-item").forEach((item) => {
    const idx = Number(item.dataset.idx);
    const t = TF_ITEMS[idx];
    let answered = false;
    item.querySelectorAll(".tf-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const choice = btn.dataset.choice;
        const correct = choice === t.answer;
        item.querySelectorAll(".tf-btn").forEach(b => {
          if (b.dataset.choice === t.answer) b.classList.add("selected-correct");
        });
        if (!correct) btn.classList.add("selected-wrong");
        window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
        window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
        const feedback = document.getElementById(`tf-feedback-${idx}`);
        feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${t.answer}`;
        feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
        eqRecordAndSave(`tf-${idx}`, t.en, choice, t.answer, correct);
      });
    });
  });
}

// ---- Make sentences (scored: 4, round-based one sentence at a time) ----
function runSentences() {
  const host = document.getElementById("sentence-runner");
  if (!host) return;
  let i = 0;

  function renderDots() {
    return `<div class="runner-dots">${SENTENCES.map((_, idx) => `<span class="runner-dot ${idx < i ? "done" : idx === i ? "current" : ""}"></span>`).join("")}</div>`;
  }

  function render() {
    const item = SENTENCES[i];
    const shuffled = shuffle(item.chunks.map((c, idx) => ({ ...c, origIdx: idx })));

    host.innerHTML = `
      <div class="runner-card">
        ${renderDots()}
        <div class="quiz-item">
          <div class="sentence-answer-strip" id="sentence-strip"></div>
          <div class="sentence-chunks" id="sentence-pool">
            ${shuffled.map(c => `<div class="sentence-chunk" data-orig="${c.origIdx}">${c.en}<span class="chunk-vi">${c.vi}</span></div>`).join("")}
          </div>
          <div class="fitb-row" style="margin-top:14px;">
            <button class="btn btn-secondary btn-sm" id="sentence-reset">Làm lại</button>
            <button class="btn btn-primary btn-sm" id="sentence-check">Kiểm tra</button>
          </div>
          <div class="fitb-feedback" id="sentence-feedback"></div>
        </div>
      </div>`;

    const strip = host.querySelector("#sentence-strip");
    const pool = host.querySelector("#sentence-pool");
    const feedback = host.querySelector("#sentence-feedback");
    let placed = [];
    let checked = false;

    function renderStrip() {
      strip.innerHTML = placed.map(c => `<div class="sentence-chunk placed">${c.en}</div>`).join("");
    }

    pool.querySelectorAll(".sentence-chunk").forEach(chunkEl => {
      chunkEl.addEventListener("click", () => {
        if (checked || chunkEl.classList.contains("used")) return;
        const origIdx = Number(chunkEl.dataset.orig);
        placed.push(item.chunks[origIdx]);
        chunkEl.classList.add("used");
        renderStrip();
      });
    });

    host.querySelector("#sentence-reset").addEventListener("click", () => {
      if (checked) return;
      placed = [];
      pool.querySelectorAll(".sentence-chunk").forEach(c => c.classList.remove("used"));
      renderStrip();
    });

    host.querySelector("#sentence-check").addEventListener("click", () => {
      if (checked) return;
      checked = true;
      const built = placed.map(c => c.en).join(" ");
      const correct = built === item.answer;
      window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
      feedback.innerHTML = correct
        ? `✓ Chính xác!<br><strong>${item.answer}</strong><br>${item.answerVi}`
        : `Chưa đúng.<br>Đáp án đúng: <strong>${item.answer}</strong><br>${item.answerVi}`;
      feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
      eqRecordAndSave(`sentence-${item.id}`, "Sentence " + item.id, built, item.answer, correct);

      setTimeout(() => {
        i++;
        if (i >= SENTENCES.length) {
          window.EQMascot && window.EQMascot.show("mascot-box", "complete_unit");
          host.innerHTML = `
            <div class="runner-card">
              <div class="stage-complete">
                <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                <h3>Xong rồi!</h3>
                <p>Em đã hoàn thành hết phần Exercises của Unit 1.</p>
              </div>
            </div>`;
        } else {
          render();
        }
      }, 1400);
    });
  }
  render();
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
