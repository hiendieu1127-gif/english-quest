// ============================================================
// Grade 6 — Unit 3 (My Friends) — Exercises data
// Source: teacher Hien's screenshots (reading passage, word table, True/False,
// sentence ordering, Pronunciation p/b pictures, listening). Listening audio:
// g6-u3-listen.wav (uploaded by teacher Hien). Pictures: img/g6-u3-pron-*.jpg (from cô Hiền).
// Vietnamese translations of the T/F and ordering sentences: written by Claude — please review
// Scored sections: True/False (5) + Sentence Ordering (3) + Pronunciation (5) + Listening (4) = 17 total.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================

const READING_HTML =
  "My mother is <mark>a wonderful cook</mark>. Every morning, she <mark>gets up early</mark> and <mark>prepares breakfast</mark> " +
  "for my family. She <mark>usually</mark> makes bread, eggs, or noodles for us. She often buys <mark>fresh vegetables</mark> " +
  "and meat at the <mark>local market</mark>. She <mark>believes that</mark> eating fresh food is important because it helps us " +
  "<mark>stay healthy</mark>. My favourite dish is chicken soup because it is very <mark>delicious</mark>. I love my mother's " +
  "cooking because she always <mark>puts a lot of love into</mark> every meal.";

// ---- Vocabulary (practice only, tap to hear + flip for meaning) ----
const VOCAB_ITEMS = [
  { en: "a wonderful cook", vi: "người nấu ăn rất giỏi" },
  { en: "get up early", vi: "thức dậy sớm" },
  { en: "prepare breakfast", vi: "chuẩn bị bữa sáng" },
  { en: "usually", vi: "thường xuyên" },
  { en: "fresh vegetables", vi: "rau củ tươi" },
  { en: "local market", vi: "chợ địa phương" },
  { en: "believe that", vi: "tin rằng" },
  { en: "stay healthy", vi: "giữ gìn sức khỏe" },
  { en: "delicious", vi: "ngon" },
  { en: "put a lot of love into something", vi: "dành nhiều tình yêu, tâm huyết cho việc gì" },
];

// ---- True / False (5 items) ----
const TF_ITEMS = [
  {
    en: "My mother gets up late every morning.",
    vi: "Mẹ tớ dậy muộn mỗi sáng.",
    answer: "F",
    why: "She gets up early every morning.",
  },
  {
    en: "She usually makes bread, eggs, or noodles for breakfast.",
    vi: "Mẹ thường làm bánh mì, trứng hoặc mì cho bữa sáng.",
    answer: "T",
  },
  {
    en: "She buys fresh vegetables and meat at the local market.",
    vi: "Mẹ mua rau củ tươi và thịt ở chợ địa phương.",
    answer: "T",
  },
  {
    en: "My favourite dish is chicken soup.",
    vi: "Món ăn tớ thích nhất là súp gà.",
    answer: "T",
  },
  {
    en: "My mother puts a lot of love into every meal.",
    vi: "Mẹ tớ dành nhiều tình yêu thương vào mỗi bữa ăn.",
    answer: "T",
  },
];

// ---- Sentence Ordering (3 sentences, from the reading) — cue as in the book, chunks shuffled on screen ----
const ORDER_ITEMS = [
  {
    id: 1,
    cue: "mother / my / breakfast / prepares / every morning",
    chunks: [
      { en: "My", vi: "của tớ" },
      { en: "mother", vi: "mẹ" },
      { en: "prepares", vi: "chuẩn bị" },
      { en: "breakfast", vi: "bữa sáng" },
      { en: "every morning.", vi: "mỗi buổi sáng." },
    ],
    answer: "My mother prepares breakfast every morning.",
    answerVi: "Mẹ tớ chuẩn bị bữa sáng mỗi buổi sáng.",
  },
  {
    id: 2,
    cue: "usually / she / bread and eggs / makes",
    chunks: [
      { en: "She", vi: "mẹ (cô ấy)" },
      { en: "usually", vi: "thường" },
      { en: "makes", vi: "làm" },
      { en: "bread and eggs.", vi: "bánh mì và trứng." },
    ],
    answer: "She usually makes bread and eggs.",
    answerVi: "Mẹ thường làm bánh mì và trứng.",
  },
  {
    id: 3,
    cue: "vegetables / buys / fresh / she / at the local market",
    chunks: [
      { en: "She", vi: "mẹ (cô ấy)" },
      { en: "buys", vi: "mua" },
      { en: "fresh", vi: "tươi" },
      { en: "vegetables", vi: "rau củ" },
      { en: "at the local market.", vi: "ở chợ địa phương." },
    ],
    answer: "She buys fresh vegetables at the local market.",
    answerVi: "Mẹ mua rau củ tươi ở chợ địa phương.",
  },
];

// ---- Pronunciation: label the pictures (they all begin with p or b), one at a time ----
// answers[0] is shown as the key; "a pen" etc. is also accepted.
const PRON_ITEMS = [
  { id: 1, img: "img/g6-u3-pron-pen.jpg", answers: ["pen", "a pen"] },
  { id: 2, img: "img/g6-u3-pron-book.jpg", answers: ["book", "a book"] },
  { id: 3, img: "img/g6-u3-pron-baby.jpg", answers: ["baby", "a baby"] },
  { id: 4, img: "img/g6-u3-pron-pig.jpg", answers: ["pig", "a pig"] },
  { id: 5, img: "img/g6-u3-pron-bee.jpg", answers: ["bee", "a bee"] },
];

// ---- Listening: one recording, fill in each blank (blank 1 is the phrase "a round face", cô Hiền) ----
const LISTEN_AUDIO = "g6-u3-listen.wav";
const LISTEN_ITEMS = [
  { id: 1, before: "My grandma is my best friend. She is my father's mother. This year, she is 70 years old. She has", after: "with long, white hair.", answer: "a round face" },
  { id: 2, before: "She teaches me to wash the dishes and", after: ".", answer: "cook" },
  { id: 3, before: "She is", after: "to other people. She helps them when she can.", answer: "kind" },
  { id: 4, before: "She is", after: ", too. She makes me laugh all the time. I love her so much.", answer: "funny" },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit2-exercises-g6.js.
// 17 scored items total: 5 True/False + 3 Sentence Ordering + 5 Pronunciation + 4 Listening.
// Score is based on the FIRST attempt only — retry rounds are saved separately.
// ============================================================
const UNIT_ID = "g6-unit3";
const UNIT_LABEL = "Unit 3: My Friends";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return TF_ITEMS.length + ORDER_ITEMS.length + PRON_ITEMS.length + LISTEN_ITEMS.length;
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

function retryHeader(round) {
  return round > 1
    ? `<div style="background:#fff3cd;color:#8a6b00;font-weight:700;padding:10px 16px;border-radius:12px;margin-bottom:14px;text-align:center;">🔄 Làm lại câu sai — Vòng ${round}</div>`
    : "";
}

// Typed answers: ignore case, extra spaces, end punctuation and curly apostrophes.
function normalize(s) {
  return String(s).trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").replace(/[.?!,]/g, "");
}

// A bare "I" is read by some voices as "capital I" — "aye" sounds right. Display unchanged.
function speakChunk(text) {
  if (!window.EQSpeak) return;
  window.EQSpeak.speak(text.trim() === "I" ? "aye" : text);
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
  runTFRound(TF_ITEMS.map((t, idx) => ({ ...t, origIdx: idx })), 1);
  runOrderRound(ORDER_ITEMS, 1);
  runPronRound(PRON_ITEMS, 1);
  runListenRound(LISTEN_ITEMS, 1);
  setupCrumbNav();
});

// ---- 1. Reading (practice only) ----
function renderReading() {
  const el = document.getElementById("reading-text");
  if (el) el.innerHTML = READING_HTML;
  const toVocabBtn = document.getElementById("reading-to-vocab-btn");
  toVocabBtn && toVocabBtn.addEventListener("click", () => switchPanel("panel-vocab"));
}

// ---- 2. Vocabulary (practice only): 3-column flip-card grid, always with audio ----
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

// ---- 3. True / False (scored: 5) — meaning hidden behind "Dịch" ----
// Wrong answers automatically come back in a "Vòng 2" retry round (saved as retries, not re-scored).
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
      const viEl = document.getElementById(`tf-vi-${btn.dataset.idx}`);
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
        const why = t.why ? ` — ${t.why}` : "";
        feedback.textContent = correct ? `✓ Chính xác!${why}` : `Đáp án đúng: ${t.answer}${why}`;
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

// ---- 4. Sentence Ordering (scored: 3, one at a time) — tap chunks to build the sentence ----
function runOrderRound(items, round) {
  const host = document.getElementById("order-runner");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    const shuffled = shuffle(item.chunks.map((c, idx) => ({ ...c, origIdx: idx })));
    host.innerHTML = `
      <div class="runner-card">
        ${retryHeader(round)}
        ${renderDots(i, total)}
        <div class="quiz-item">
          <div class="sentence-cue"><span class="verb-num">${item.id}.</span> ${item.cue}</div>
          <button type="button" class="eq-translate-btn" id="order-translate">🔤 Dịch</button>
          <div class="sentence-answer-strip" id="order-strip"></div>
          <div class="sentence-chunks" id="order-pool">
            ${shuffled.map(c => `<div class="sentence-chunk" data-orig="${c.origIdx}">${c.en}<span class="chunk-vi">${c.vi}</span></div>`).join("")}
          </div>
          <div class="fitb-row" style="margin-top:14px;">
            <button class="btn btn-secondary btn-sm" id="order-reset">Làm lại</button>
            <button class="btn btn-primary btn-sm" id="order-check">Kiểm tra</button>
          </div>
          <div class="fitb-feedback" id="order-feedback"></div>
        </div>
      </div>`;

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
      if (checked) return;
      if (placed.length < item.chunks.length) {
        feedback.textContent = "Em xếp hết các cụm từ rồi bấm Kiểm tra nhé.";
        feedback.className = "fitb-feedback no";
        return;
      }
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
      speakChunk(item.answer);

      eqRecordAndSave(`order-${item.id}`, item.cue, built, item.answer, correct);
      if (!correct) wrongItems.push(item);
      resetBtn.disabled = true;
      checkBtn.disabled = true;

      addNextButton(feedback, () => {
        i++;
        if (i < total) { render(); return; }
        if (wrongItems.length) { runOrderRound(wrongItems, round + 1); return; }
        showSectionComplete(host, "Em đã hoàn thành phần Sentence Ordering.", true, "complete_exercise");
      });
    });
  }
  render();
}

// ---- 5. Pronunciation (scored: 5) — look at the picture, type the word (p or b) ----
// Wrong words come back in a "Vòng 2" retry round (saved as retries, not re-scored).
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
        <div class="quiz-item" style="text-align:center;">
          <div class="pron-pic"><img src="${item.img}" alt="Picture ${item.id}"></div>
          <div class="verb-sentence"><span class="verb-num">${item.id}.</span> <input type="text" class="fitb-input pron-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="p… / b…"></div>
          <div class="fitb-row" style="margin-top:12px;justify-content:center;">
            <button class="btn btn-primary btn-sm" id="pron-check">Kiểm tra</button>
          </div>
          <div class="fitb-feedback" id="pron-feedback"></div>
        </div>
      </div>`;

    const input = host.querySelector(".pron-input");
    const checkBtn = host.querySelector("#pron-check");
    const feedback = host.querySelector("#pron-feedback");
    input.addEventListener("keydown", e => { if (e.key === "Enter") checkBtn.click(); });

    checkBtn.addEventListener("click", () => {
      if (!input.value.trim()) {
        feedback.textContent = "Em gõ tên đồ vật / con vật trong hình rồi bấm Kiểm tra nhé.";
        feedback.className = "fitb-feedback no";
        return;
      }
      checkBtn.disabled = true;
      const word = item.answers[0];
      const ok = item.answers.some(a => normalize(a) === normalize(input.value));
      input.disabled = true;
      input.classList.add(ok ? "fitb-correct" : "fitb-wrong");
      input.style.borderColor = ok ? "#3fae4f" : "#e05c5c";
      window.EQSound && (ok ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", ok ? "correct" : "wrong");
      feedback.innerHTML =
        (ok ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
            : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng:</span>`) +
        ` <button type="button" class="pron-word" id="pron-say">🔊 ${word}</button>` +
        `<div style="color:#666;margin-top:2px;">Bấm 🔊 để nghe rồi đọc to từ này nhé.</div>`;
      feedback.className = "fitb-feedback";
      host.querySelector("#pron-say").addEventListener("click", () => speakChunk(word));
      speakChunk(word);

      eqRecordAndSave(`pron-${item.id}`, `Pronunciation ${item.id}: label the picture (p / b)`, input.value.trim(), word, ok);
      if (!ok) wrongItems.push(item);

      addNextButton(feedback, () => {
        i++;
        if (i < total) { render(); return; }
        if (wrongItems.length) { runPronRound(wrongItems, round + 1); return; }
        showSectionComplete(host, "Em đã hoàn thành phần Pronunciation.", true, "complete_exercise");
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
      else showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 3.", false, "complete_unit");
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
