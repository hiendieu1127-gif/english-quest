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

// ---- Match A with B (scored: 5) — one definition at a time, pick the matching word ----
function renderMatch() {
  const host = document.getElementById("match-wrap");
  if (!host) return;
  const total = MATCH_ITEMS.length;
  let i = 0;

  function render() {
    const item = MATCH_ITEMS[i];
    const others = MATCH_ITEMS.filter(m => m.id !== item.id).map(m => m.a);
    const options = shuffle([item.a, ...shuffle(others).slice(0, 3)]);
    const letters = ["A", "B", "C", "D"];

    host.innerHTML = `
      <div class="runner-card">
        ${renderDots(i, total)}
        <div class="mcq-def">${item.b}</div>
        <div class="mcq-def-vi">${item.bVi}</div>
        <div class="mcq-options" id="mcq-options">
          ${options.map((opt, idx) => `<button type="button" class="mcq-option" data-word="${opt}"><span class="mcq-letter">${letters[idx]}</span>${opt}</button>`).join("")}
        </div>
        <div class="fitb-feedback" id="match-feedback"></div>
      </div>`;

    let answered = false;
    const optionButtons = host.querySelectorAll(".mcq-option");
    const feedback = document.getElementById("match-feedback");

    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = btn.dataset.word;
        const correct = chosen === item.a;

        optionButtons.forEach(b => {
          b.disabled = true;
          if (b.dataset.word === item.a) b.classList.add("correct");
        });
        if (!correct) btn.classList.add("wrong");

        window.EQSpeak && window.EQSpeak.speak(item.a);
        window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
        window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");

        feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${item.a}`;
        feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
        eqRecordAndSave(`match-${item.id}`, item.b, chosen, item.a, correct);

        setTimeout(() => {
          i++;
          if (i >= total) {
            window.EQMascot && window.EQMascot.show("mascot-box", "complete_exercise");
            host.innerHTML = `
              <div class="runner-card">
                <div class="stage-complete">
                  <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                  <h3>Xong rồi!</h3>
                  <p>Em đã hoàn thành phần Match A with B.</p>
                </div>
              </div>`;
          } else {
            render();
          }
        }, 1200);
      });
    });
  }
  render();
}

// ---- True / False / No Information (scored: 5) — meaning hidden behind "Dịch" ----
function renderTrueFalse() {
  const host = document.getElementById("tf-list");
  if (!host) return;
  host.innerHTML = TF_ITEMS.map((t, idx) => `
    <div class="tf-item" data-idx="${idx}">
      <div>${idx + 1}. ${t.en}</div>
      <button type="button" class="eq-translate-btn" data-idx="${idx}">🔤 Dịch</button>
      <div class="tf-vi" id="tf-vi-${idx}" style="display:none;">${t.vi}</div>
      <div class="tf-btn-row">
        <button type="button" class="tf-btn" data-choice="T">T</button>
        <button type="button" class="tf-btn" data-choice="F">F</button>
        <button type="button" class="tf-btn" data-choice="NI">NI</button>
      </div>
      <div class="fitb-feedback" id="tf-feedback-${idx}"></div>
    </div>`).join("");

  host.querySelectorAll(".eq-translate-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const viEl = document.getElementById(`tf-vi-${idx}`);
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      btn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });
  });

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

// ---- Make sentences (scored: 4, one at a time) — meaning hidden behind "Dịch" ----
function runSentences() {
  const host = document.getElementById("sentence-runner");
  if (!host) return;
  let i = 0;

  function render() {
    const item = SENTENCES[i];
    const shuffled = shuffle(item.chunks.map((c, idx) => ({ ...c, origIdx: idx })));

    host.innerHTML = `
      <div class="runner-card">
        ${renderDots(i, SENTENCES.length)}
        <div class="quiz-item">
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
        </div>
      </div>`;

    const strip = host.querySelector("#sentence-strip");
    const pool = host.querySelector("#sentence-pool");
    const feedback = host.querySelector("#sentence-feedback");
    const translateBtn = host.querySelector("#sentence-translate");
    let placed = [];
    let checked = false;

    translateBtn.addEventListener("click", () => {
      const showing = pool.classList.toggle("show-vi");
      translateBtn.textContent = showing ? "🔤 Ẩn nghĩa" : "🔤 Dịch";
    });

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
