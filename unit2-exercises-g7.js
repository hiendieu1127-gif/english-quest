// ============================================================
// Grade 7 — Unit 2 (Healthy Living) — Exercises data
// Source: teacher Hien's screenshots (reading passage, choose A/B/C, vocabulary list,
// write complete sentences). The True/False items were written by Claude from the
// passage, and the Vietnamese translations are Claude's too — please review.
// Scored sections: Choose A, B or C (5) + True/False (5) + Make sentences (5) = 15 total.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================

const READING_HTML =
  "In 2019, Spain was the <mark>healthiest</mark> country in the world. The secret is their " +
  "<mark>Mediterranean diet</mark>. This diet <mark>focuses on</mark> healthy fats and proteins. This includes " +
  "cold tomato soup, <mark>plenty of</mark> <mark>seafood</mark> (especially fish), and veggies. Spanish " +
  "people say that they have some of the most delicious salads in the world. " +
  "<mark>Due to</mark> the Mediterranean diet, the Spanish <mark>suffer from</mark> fewer <mark>diseases</mark> than the " +
  "rest of the world.<br><br>" +
  "Physical health is important, but <mark>mental health</mark> is important too. Eight out of " +
  "ten Spanish people are happy. Why? A major reason is the <mark>weather</mark>. Spain has " +
  "beautiful weather <mark>all year round</mark>. Another reason is that Spain <mark>is home to</mark> a lively " +
  "and relaxing culture. The Spanish enjoy the <mark>simple pleasures of life</mark>.";

// ---- Vocabulary (practice only, tap to hear + flip for meaning) ----
const VOCAB_ITEMS = [
  { en: "healthy", vi: "khỏe mạnh, lành mạnh" },
  { en: "Mediterranean diet", vi: "chế độ ăn Địa Trung Hải" },
  { en: "focus on", vi: "tập trung vào" },
  { en: "plenty of", vi: "nhiều, dồi dào" },
  { en: "seafood", vi: "hải sản" },
  { en: "due to", vi: "bởi vì, do" },
  { en: "suffer from", vi: "mắc, chịu đựng (bệnh tật)" },
  { en: "mental health", vi: "sức khỏe tinh thần" },
  { en: "all year round", vi: "quanh năm" },
  { en: "be home to", vi: "là nơi có, là nơi sinh sống của" },
  { en: "disease", vi: "bệnh tật" },
  { en: "weather", vi: "thời tiết" },
  { en: "simple pleasures (of life)", vi: "những niềm vui giản dị (trong cuộc sống)" },
];

// ---- Choose A, B or C (5 items, from the book) — one at a time ----
const MCQ_ITEMS = [
  {
    id: 1,
    q: "In 2019, Spain was number ______ in health.",
    vi: "Năm 2019, Tây Ban Nha đứng thứ ______ về sức khỏe.",
    options: ["one", "two", "ten"],
    answer: "one",
  },
  {
    id: 2,
    q: "The Mediterranean diet includes ______.",
    vi: "Chế độ ăn Địa Trung Hải bao gồm ______.",
    options: ["lots of vegetables", "red meat", "potato soup"],
    answer: "lots of vegetables",
  },
  {
    id: 3,
    q: "Spanish people ______.",
    vi: "Người Tây Ban Nha ______.",
    options: [
      "have more diseases than the rest of the world",
      "have fewer diseases than the rest of the world",
      "do not have diseases",
    ],
    answer: "have fewer diseases than the rest of the world",
  },
  {
    id: 4,
    q: "Beautiful ______ makes the Spanish happy.",
    vi: "______ đẹp làm cho người Tây Ban Nha hạnh phúc.",
    options: ["beaches", "houses", "weather"],
    answer: "weather",
  },
  {
    id: 5,
    q: "The Spanish enjoy ______.",
    vi: "Người Tây Ban Nha tận hưởng ______.",
    options: ["good food", "simple pleasures", "good education"],
    answer: "simple pleasures",
  },
];

// ---- True / False (5 items, written from the passage) ----
const TF_ITEMS = [
  {
    en: "The Mediterranean diet focuses on healthy fats and proteins.",
    vi: "Chế độ ăn Địa Trung Hải tập trung vào chất béo lành mạnh và chất đạm.",
    answer: "T",
  },
  {
    en: "Spanish people say that their salads are not very delicious.",
    vi: "Người Tây Ban Nha nói rằng món salad của họ không ngon lắm.",
    answer: "F",
  },
  {
    en: "Cold tomato soup is part of the Mediterranean diet.",
    vi: "Súp cà chua lạnh là một phần của chế độ ăn Địa Trung Hải.",
    answer: "T",
  },
  {
    en: "Only half of Spanish people are happy.",
    vi: "Chỉ một nửa số người Tây Ban Nha cảm thấy hạnh phúc.",
    answer: "F",
  },
  {
    en: "Spain has beautiful weather only in summer.",
    vi: "Tây Ban Nha chỉ có thời tiết đẹp vào mùa hè.",
    answer: "F",
  },
];

// ---- Make sentences — sentence ordering, chunks shuffled, VN meaning hidden behind "Dịch" ----
const SENTENCES = [
  {
    id: 1,
    chunks: [
      { en: "Please", vi: "hãy, làm ơn" },
      { en: "do", vi: "làm, tập" },
      { en: "eye exercises", vi: "bài tập cho mắt" },
      { en: "to keep", vi: "để giữ cho" },
      { en: "your eyes", vi: "đôi mắt của bạn" },
      { en: "from", vi: "khỏi" },
      { en: "getting dry.", vi: "bị khô." },
    ],
    answer: "Please do eye exercises to keep your eyes from getting dry.",
    answerVi: "Hãy tập các bài tập cho mắt để giữ cho mắt bạn không bị khô.",
  },
  {
    id: 2,
    chunks: [
      { en: "People", vi: "người dân" },
      { en: "in", vi: "ở" },
      { en: "Iceland", vi: "Ai-xơ-len" },
      { en: "eat", vi: "ăn" },
      { en: "a lot of", vi: "nhiều" },
      { en: "fresh fish.", vi: "cá tươi." },
    ],
    answer: "People in Iceland eat a lot of fresh fish.",
    answerVi: "Người dân ở Ai-xơ-len ăn nhiều cá tươi.",
  },
  {
    id: 3,
    chunks: [
      { en: "Air pollution", vi: "ô nhiễm không khí" },
      { en: "is", vi: "thì, là" },
      { en: "really harmful", vi: "thật sự có hại" },
      { en: "to", vi: "cho, đối với" },
      { en: "our health.", vi: "sức khỏe của chúng ta." },
    ],
    answer: "Air pollution is really harmful to our health.",
    answerVi: "Ô nhiễm không khí thật sự có hại cho sức khỏe của chúng ta.",
  },
  {
    id: 4,
    chunks: [
      { en: "Going to bed", vi: "đi ngủ" },
      { en: "and", vi: "và" },
      { en: "getting up early", vi: "thức dậy sớm" },
      { en: "are", vi: "thì, là" },
      { en: "good", vi: "tốt" },
      { en: "for", vi: "cho" },
      { en: "your health.", vi: "sức khỏe của bạn." },
    ],
    answer: "Going to bed and getting up early are good for your health.",
    answerVi: "Đi ngủ sớm và thức dậy sớm thì tốt cho sức khỏe của bạn.",
  },
  {
    id: 5,
    chunks: [
      { en: "Healthy food,", vi: "đồ ăn lành mạnh," },
      { en: "love,", vi: "tình yêu thương," },
      { en: "and", vi: "và" },
      { en: "laughter", vi: "tiếng cười" },
      { en: "bring", vi: "mang lại" },
      { en: "a healthy life.", vi: "một cuộc sống khỏe mạnh." },
    ],
    answer: "Healthy food, love, and laughter bring a healthy life.",
    answerVi: "Đồ ăn lành mạnh, tình yêu thương và tiếng cười mang lại một cuộc sống khỏe mạnh.",
  },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit1-grammar-g7.js.
// 15 scored items total: 5 Choose A/B/C + 5 True/False + 5 Make sentences.
// Score is based on the FIRST attempt only — retry rounds (below) are for
// practice and do not change the saved score.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================
const UNIT_ID = "g7-unit2";
const UNIT_LABEL = "Unit 2: Healthy Living";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return MCQ_ITEMS.length + TF_ITEMS.length + SENTENCES.length;
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

function renderDots(current, total) {
  let dots = "";
  for (let idx = 0; idx < total; idx++) {
    dots += `<span class="runner-dot ${idx < current ? "done" : idx === current ? "current" : ""}"></span>`;
  }
  return `<div class="runner-dots">${dots}</div>`;
}

// Sanitize text before handing it to the browser's TTS: a bare "I" (the whole
// chunk, trimmed) gets misread as "capital I" (spelled-out letter) instead of
// the pronoun. "aye" is a homophone of "I" that speaks correctly. Only the
// spoken text changes — what's shown on screen is never touched.
function speakVocab(text) {
  if (!window.EQSpeak) return;
  const spoken = text.trim() === "I" ? "aye" : text;
  window.EQSpeak.speak(spoken);
}

// AI voice is off everywhere except the vocabulary cards after the reading.
function speakChunk() {}

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
  renderMCQ();
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
      speakVocab(VOCAB_ITEMS[idx].en);
      card.classList.toggle("flipped");
    });
  });
}

// ---- Choose A, B or C (scored: 5) — one question at a time, sentence meaning behind "Dịch" ----
// Wrong answers automatically come back in a "Vòng 2" retry round (practice only, not re-scored).
// Advancing to the next question requires a manual "Tiếp theo →" tap (no timer).
function renderMCQ() {
  const host = document.getElementById("mcq-wrap");
  if (!host) return;
  runMCQRound(MCQ_ITEMS, 1);
}

function runMCQRound(items, round) {
  const host = document.getElementById("mcq-wrap");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    const letters = ["A", "B", "C"];
    const header = round > 1
      ? `<div style="background:#fff3cd;color:#8a6b00;font-weight:700;padding:10px 16px;border-radius:12px;margin-bottom:14px;text-align:center;">🔄 Làm lại câu sai — Vòng ${round}</div>`
      : "";

    host.innerHTML = `
      <div class="runner-card">
        ${header}
        ${renderDots(i, total)}
        <div class="mcq-def">${item.id}. ${item.q}</div>
        <div style="text-align:center;"><button type="button" class="eq-translate-btn" id="mcq-translate">🔤 Dịch</button></div>
        <div class="mcq-def-vi" id="mcq-vi" style="display:none;">${item.vi}</div>
        <div class="mcq-options mcq-options-1col" id="mcq-options">
          ${item.options.map((opt, idx) => `<button type="button" class="mcq-option" data-idx="${idx}"><span class="mcq-letter">${letters[idx]}</span>${opt}</button>`).join("")}
        </div>
        <div class="fitb-feedback" id="mcq-feedback"></div>
      </div>`;

    const translateBtn = host.querySelector("#mcq-translate");
    const viEl = host.querySelector("#mcq-vi");
    translateBtn.addEventListener("click", () => {
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      translateBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });

    let answered = false;
    const optionButtons = host.querySelectorAll(".mcq-option");
    const feedback = host.querySelector("#mcq-feedback");
    const answerLetter = letters[item.options.indexOf(item.answer)];

    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = item.options[Number(btn.dataset.idx)];
        const correct = chosen === item.answer;

        optionButtons.forEach(b => {
          b.disabled = true;
          if (item.options[Number(b.dataset.idx)] === item.answer) b.classList.add("correct");
        });
        if (!correct) btn.classList.add("wrong");

        speakChunk(item.q.replace(/_+/, item.answer));
        window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
        window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");

        feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${answerLetter}. ${item.answer}`;
        feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";

        eqRecordAndSave(`mcq-${item.id}`, item.q, chosen, item.answer, correct);
        if (!correct) wrongItems.push(item);

        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "btn btn-primary btn-sm";
        nextBtn.textContent = "Tiếp theo →";
        nextBtn.style.marginTop = "14px";
        feedback.insertAdjacentElement("afterend", nextBtn);
        nextBtn.addEventListener("click", () => {
          i++;
          if (i >= total) {
            if (wrongItems.length > 0) {
              runMCQRound(wrongItems, round + 1);
            } else {
              showSectionComplete(host, "Em đã hoàn thành phần Choose A, B or C.", true, "complete_exercise");
            }
          } else {
            render();
          }
        });
      });
    });
  }
  render();
}

// ---- True / False (scored: 5) — meaning hidden behind "Dịch" ----
// Wrong answers automatically come back in a "Vòng 2" retry round (practice only, not re-scored).
function renderTrueFalse() {
  const host = document.getElementById("tf-list");
  if (!host) return;
  runTFRound(TF_ITEMS.map((t, idx) => ({ ...t, origIdx: idx })), 1);
}

function runTFRound(items, round) {
  const host = document.getElementById("tf-list");
  if (!host) return;
  const total = items.length;
  let answeredCount = 0;
  const wrongItems = [];
  const header = round > 1
    ? `<div style="background:#fff3cd;color:#8a6b00;font-weight:700;padding:10px 16px;border-radius:12px;margin-bottom:14px;text-align:center;">🔄 Làm lại câu sai — Vòng ${round}</div>`
    : "";

  host.innerHTML = header + items.map((t, idx) => `
    <div class="tf-item" data-idx="${idx}">
      <div>${idx + 1}. ${t.en}</div>
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
            if (wrongItems.length > 0) {
              runTFRound(wrongItems, round + 1);
            } else {
              showSectionComplete(host, "Em đã hoàn thành phần True/False.", true, "complete_exercise");
            }
          }, 900);
        }
      });
    });
  });
}

// ---- Make sentences (scored: 5, one at a time) — meaning hidden behind "Dịch"; tap a word chunk to hear it ----
// Wrong answers automatically come back in a "Vòng 2" retry round (practice only, not re-scored).
// Advancing to the next sentence requires a manual "Tiếp theo →" tap (no timer).
function runSentences() {
  const host = document.getElementById("sentence-runner");
  if (!host) return;
  runSentenceRound(SENTENCES, 1);
}

function runSentenceRound(items, round) {
  const host = document.getElementById("sentence-runner");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    const shuffled = shuffle(item.chunks.map((c, idx) => ({ ...c, origIdx: idx })));
    const header = round > 1
      ? `<div style="background:#fff3cd;color:#8a6b00;font-weight:700;padding:10px 16px;border-radius:12px;margin-bottom:14px;text-align:center;">🔄 Làm lại câu sai — Vòng ${round}</div>`
      : "";

    host.innerHTML = `
      <div class="runner-card">
        ${header}
        ${renderDots(i, total)}
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
          // Tapping a placed chunk sends it back to the pool (undo just that
          // one), instead of forcing a full "Làm lại" reset for one mistake.
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
        placed.push({ origIdx, en: item.chunks[origIdx].en, vi: item.chunks[origIdx].vi });
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
      checked = true;
      const built = placed.map(c => c.en).join(" ");
      const correct = built === item.answer;
      window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");

      // Answer sentence + its VN translation are always shown as plain dark
      // text on their own left-aligned lines, so they line up with each
      // other regardless of the "Chưa đúng."/"Đáp án đúng:" line above them.
      if (correct) {
        feedback.innerHTML =
          `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>` +
          `<div style="color:#222;font-weight:800;margin-top:6px;">${item.answer}</div>` +
          `<div style="color:#666;margin-top:2px;">${item.answerVi}</div>`;
      } else {
        feedback.innerHTML =
          `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng:</span>` +
          `<div style="color:#222;font-weight:800;margin-top:6px;">${item.answer}</div>` +
          `<div style="color:#666;margin-top:2px;">${item.answerVi}</div>`;
      }
      feedback.className = "fitb-feedback";

      eqRecordAndSave(`sentence-${item.id}`, "Sentence " + item.id, built, item.answer, correct);
      if (!correct) wrongItems.push(item);

      resetBtn.disabled = true;
      checkBtn.disabled = true;

      const nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "btn btn-primary btn-sm";
      nextBtn.textContent = "Tiếp theo →";
      nextBtn.style.marginTop = "14px";
      feedback.insertAdjacentElement("afterend", nextBtn);
      nextBtn.addEventListener("click", () => {
        i++;
        if (i >= total) {
          if (wrongItems.length > 0) {
            runSentenceRound(wrongItems, round + 1);
          } else {
            showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 2.", false, "complete_unit");
          }
        } else {
          render();
        }
      });
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
