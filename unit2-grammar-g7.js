// ============================================================
// Grade 7 — Unit 2 (Healthy Living) — Grammar
// Source: teacher Hien's workbook screenshot (Global Success 7, Unit 2, ex. 4 & 5)
// Vietnamese translations: written by Claude, not in source — please review
// Same look & rules as unit1-exercises-g7.js (numbered pills, Vòng 2 retry,
// first-attempt-only scoring, manual "Tiếp theo →", Dịch on demand).
// ============================================================

// ---- 1. Key words (ex. 4): pick the word/phrase that describes each group ----
const KEYWORD_BANK = ["taking a bath", "soft drinks", "house cleaning", "cycling", "fast food", "acne"];
const KEYWORD_ITEMS = [
  { id: 1, keys: "fried chicken and chips, chain restaurants, popular", keysVi: "gà rán và khoai tây chiên, chuỗi nhà hàng, phổ biến", answer: "fast food", answerVi: "đồ ăn nhanh" },
  { id: 2, keys: "bike, helmet, shoes, path", keysVi: "xe đạp, mũ bảo hiểm, giày, đường đi", answer: "cycling", answerVi: "đạp xe đạp" },
  { id: 3, keys: "sweetened drinks with a lot of gas", keysVi: "đồ uống có đường và nhiều ga", answer: "soft drinks", answerVi: "nước ngọt có ga" },
  { id: 4, keys: "black and white pimples on your body, especially on your face", keysVi: "mụn đầu đen và đầu trắng trên cơ thể, đặc biệt là trên mặt", answer: "acne", answerVi: "mụn trứng cá" },
  { id: 5, keys: "dustpan, broom, water, floor cleaner", keysVi: "đồ hốt rác, chổi, nước, nước lau sàn", answer: "house cleaning", answerVi: "dọn dẹp nhà cửa" },
];

// ---- 2. Make simple sentences (ex. 5): chunks exactly as in the workbook ----
const SENTENCES = [
  {
    id: 1,
    chunks: [
      { en: "a lot of", vi: "nhiều" },
      { en: "We", vi: "chúng ta" },
      { en: "to prevent", vi: "để phòng ngừa" },
      { en: "garlic", vi: "tỏi" },
      { en: "eat", vi: "ăn" },
      { en: "the flu", vi: "bệnh cúm" },
    ],
    answer: "We eat a lot of garlic to prevent the flu.",
    answerVi: "Chúng ta ăn nhiều tỏi để phòng ngừa bệnh cúm.",
  },
  {
    id: 2,
    chunks: [
      { en: "do not", vi: "không" },
      { en: "have much stress", vi: "có nhiều căng thẳng" },
      { en: "in the countryside", vi: "ở vùng nông thôn" },
      { en: "People", vi: "người dân" },
    ],
    answer: "People in the countryside do not have much stress.",
    also: ["People do not have much stress in the countryside."],
    answerVi: "Người dân ở vùng nông thôn không có nhiều căng thẳng.",
  },
  {
    id: 3,
    chunks: [
      { en: "your", vi: "của bạn" },
      { en: "eyedrops", vi: "thuốc nhỏ mắt" },
      { en: "tired eyes", vi: "đôi mắt mệt mỏi" },
      { en: "You", vi: "bạn" },
      { en: "for", vi: "cho" },
      { en: "can use", vi: "có thể dùng" },
    ],
    answer: "You can use eyedrops for your tired eyes.",
    answerVi: "Bạn có thể dùng thuốc nhỏ mắt cho đôi mắt mệt mỏi của bạn.",
  },
  {
    id: 4,
    chunks: [
      { en: "my country", vi: "đất nước tôi" },
      { en: "Green tea", vi: "trà xanh" },
      { en: "in", vi: "ở" },
      { en: "a popular drink", vi: "một thức uống phổ biến" },
      { en: "is", vi: "là" },
    ],
    answer: "Green tea is a popular drink in my country.",
    answerVi: "Trà xanh là một thức uống phổ biến ở đất nước tôi.",
  },
  {
    id: 5,
    chunks: [
      { en: "keep you", vi: "giữ cho bạn" },
      { en: "and active", vi: "và năng động" },
      { en: "Physical activities", vi: "các hoạt động thể chất" },
      { en: "strong", vi: "khỏe mạnh" },
      { en: "help", vi: "giúp" },
    ],
    answer: "Physical activities help keep you strong and active.",
    answerVi: "Các hoạt động thể chất giúp giữ cho bạn khỏe mạnh và năng động.",
  },
];

// ============================================================
// Results saving — 10 scored items: 5 Key words + 5 Make sentences
// ============================================================
const UNIT_ID = "g7-unit2";
const UNIT_LABEL = "Unit 2: Healthy Living";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // retry-round answers (Vòng 2, 3…) — never change the first-attempt score
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return KEYWORD_ITEMS.length + SENTENCES.length;
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  if (eqAnswers[key]) eqRetries.push({ question, studentAnswer, correctAnswer, correct });
  else eqAnswers[key] = { question, studentAnswer, correctAnswer, correct };
  if (!window.EQResults || !eqStudent) return;
  const values = Object.values(eqAnswers);
  const payload = {
    student: eqStudent,
    unitId: UNIT_ID,
    unitLabel: UNIT_LABEL,
    section: "grammar",
    correct: values.filter(a => a.correct).length,
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

// A bare "I" chunk is read as "capital I" by some voices — speak "aye" instead.
function speakChunk(text) {
  if (!window.EQSpeak) return;
  window.EQSpeak.speak(text.trim() === "I" ? "aye" : text);
}

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
    window.EQResults.markInProgress({ student: eqStudent, unitId: UNIT_ID, unitLabel: UNIT_LABEL, section: "grammar" }).catch(() => {});
  }
  runKeywordRound(KEYWORD_ITEMS, 1);
  runSentenceRound(SENTENCES, 1);
  setupCrumbNav();
});

// ---- 1. Key words — one group at a time, 4 choices (A–D) ----
function runKeywordRound(items, round) {
  const host = document.getElementById("keyword-wrap");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    const others = shuffle(KEYWORD_BANK.filter(w => w !== item.answer)).slice(0, 3);
    const options = shuffle([item.answer, ...others]);
    const letters = ["A", "B", "C", "D"];

    host.innerHTML = `
      ${retryHeader(round)}
      ${renderDots(i, total)}
      <div class="mcq-def">${item.keys}</div>
      <div style="text-align:center;"><button type="button" class="eq-translate-btn" id="kw-translate">🔤 Dịch</button></div>
      <div class="mcq-def-vi" id="kw-vi" style="display:none;">${item.keysVi}</div>
      <div class="mcq-options">
        ${options.map((opt, idx) => `<button type="button" class="mcq-option" data-word="${opt}"><span class="mcq-letter">${letters[idx]}</span>${opt}</button>`).join("")}
      </div>
      <div class="fitb-feedback" id="kw-feedback"></div>`;

    const viEl = host.querySelector("#kw-vi");
    const trBtn = host.querySelector("#kw-translate");
    trBtn.addEventListener("click", () => {
      const on = viEl.style.display === "none";
      viEl.style.display = on ? "block" : "none";
      trBtn.textContent = on ? "🔤 Ẩn nghĩa" : "🔤 Dịch";
    });

    let answered = false;
    const optionButtons = host.querySelectorAll(".mcq-option");
    const feedback = host.querySelector("#kw-feedback");
    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = btn.dataset.word;
        const correct = chosen === item.answer;
        optionButtons.forEach(b => {
          b.disabled = true;
          if (b.dataset.word === item.answer) b.classList.add("correct");
        });
        if (!correct) btn.classList.add("wrong");
        speakChunk(item.answer);
        window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
        window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
        feedback.innerHTML = correct
          ? `✓ Chính xác! <b>${item.answer}</b> = ${item.answerVi}`
          : `Đáp án đúng: <b>${item.answer}</b> = ${item.answerVi}`;
        feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
        eqRecordAndSave(`keyword-${item.id}`, item.keys, chosen, item.answer, correct);
        if (!correct) wrongItems.push(item);
        addNextButton(feedback, () => {
          i++;
          if (i < total) render();
          else if (wrongItems.length) runKeywordRound(wrongItems, round + 1);
          else showSectionComplete(host, "Em đã hoàn thành phần Key words.", true, "complete_exercise");
        });
      });
    });
  }
  render();
}

// ---- 2. Make simple sentences — tap chunks in order ----
function sameSentence(a, b) {
  const clean = s => s.trim().replace(/\s+/g, " ").replace(/\s*\.$/, "");
  return clean(a) === clean(b);
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
    host.innerHTML = `
      ${retryHeader(round)}
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
      const correct = [item.answer, ...(item.also || [])].some(a => sameSentence(built, a));
      window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
      window.EQSpeak && window.EQSpeak.speak(item.answer);
      feedback.innerHTML =
        (correct
          ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
          : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng:</span>`) +
        `<div style="color:#222;font-weight:800;margin-top:6px;">${item.answer}</div>` +
        `<div style="color:#666;margin-top:2px;">${item.answerVi}</div>`;
      feedback.className = "fitb-feedback";
      eqRecordAndSave(`sentence-${item.id}`, "Sentence " + item.id, built, item.answer, correct);
      if (!correct) wrongItems.push(item);
      resetBtn.disabled = true;
      checkBtn.disabled = true;
      addNextButton(feedback, () => {
        i++;
        if (i < total) render();
        else if (wrongItems.length) runSentenceRound(wrongItems, round + 1);
        else showSectionComplete(host, "Em đã hoàn thành hết phần Grammar của Unit 2.", false, "complete_unit");
      });
    });
  }
  render();
}

// ---- Numbered-pill navigation ----
function switchPanel(targetId) {
  document.querySelectorAll(".ex-panel").forEach(p => p.classList.remove("active"));
  document.getElementById(targetId).classList.add("active");
  document.querySelectorAll(".eq-crumb").forEach(c => c.classList.toggle("active", c.dataset.target === targetId));
  window.scrollTo({ top: document.getElementById("eq-crumb-row").offsetTop - 90, behavior: "smooth" });
}

function setupCrumbNav() {
  document.querySelectorAll(".eq-crumb").forEach(c => c.addEventListener("click", () => switchPanel(c.dataset.target)));
  switchPanel("panel-keywords");
}
