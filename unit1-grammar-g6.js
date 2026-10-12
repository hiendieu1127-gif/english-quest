// ============================================================
// Grade 6 — Unit 1 (My New School) — Grammar data
// Source: teacher Hien's screenshots (present simple + adverbs of frequency)
// Vietnamese translations: written by Claude, not in source — please review
// Scored: Put the verbs (10 sentences) + Correct order (5 sentences) = 15 total.
// The theory card at the top of the page is reading only, not scored.
// ============================================================

// ---- Put the verbs in brackets in the correct form (10 sentences) ----
// parts: plain text strings and blanks { base, answers } — base is the verb in
// brackets ("" when the book gives none); answers[0] is shown as the key, the
// rest are also accepted (full forms of "doesn't" …).
// A sentence counts as ONE scored item: correct only when every blank is right.
const VERB_ITEMS = [
  { id: 1, parts: ["My school ", { base: "have", answers: ["has"] }, " a big library and a modern computer room."],
    vi: "Trường tớ có một thư viện lớn và một phòng máy tính hiện đại." },
  { id: 2, parts: [{ base: "", answers: ["Do"] }, " your classmates usually ", { base: "play", answers: ["play"] }, " games at break time?"],
    vi: "Các bạn cùng lớp của bạn có thường chơi trò chơi vào giờ ra chơi không?" },
  { id: 3, parts: ["My best friend ", { base: "not like", answers: ["doesn't like", "does not like"] }, " Physics because it is difficult for him."],
    vi: "Bạn thân của tớ không thích môn Vật lí vì nó khó đối với cậu ấy." },
  { id: 4, parts: ["The students often ", { base: "play", answers: ["play"] }, " football in the playground after school."],
    vi: "Các học sinh thường chơi bóng đá ở sân chơi sau giờ học." },
  { id: 5, parts: ["My sister enjoys ", { base: "play", answers: ["playing"] }, " the piano in her free time."],
    vi: "Chị tớ thích chơi đàn piano vào thời gian rảnh." },
  { id: 6, parts: ["We usually ", { base: "study", answers: ["study"] }, " English on Monday, and our teacher ", { base: "teach", answers: ["teaches"] }, " us new words."],
    vi: "Chúng tớ thường học Tiếng Anh vào thứ Hai, và cô giáo dạy chúng tớ từ mới." },
  { id: 7, parts: ["My brother ", { base: "not do", answers: ["doesn't do", "does not do"] }, " his homework in the classroom."],
    vi: "Anh trai tớ không làm bài tập về nhà trong lớp học." },
  { id: 8, parts: ["What time ", { base: "", answers: ["does"] }, " your school usually ", { base: "finish", answers: ["finish"] }, " every day?"],
    vi: "Trường của bạn thường tan học lúc mấy giờ mỗi ngày?" },
  { id: 9, parts: ["Our teacher always ", { base: "teach", answers: ["teaches"] }, " us English in the morning."],
    vi: "Cô giáo của chúng tớ luôn dạy Tiếng Anh vào buổi sáng." },
  { id: 10, parts: ["My family often ", { base: "go", answers: ["go"] }, " to the swimming pool, and we ", { base: "have", answers: ["have"] }, " a great time there."],
    vi: "Gia đình tớ thường đi bể bơi, và chúng tớ có khoảng thời gian rất vui ở đó." },
];

// ---- Correct order (5 sentences) — chunks exactly as in the book, shuffled on screen ----
const ORDER_ITEMS = [
  {
    id: 1,
    chunks: [
      { en: "I", vi: "tớ" },
      { en: "usually", vi: "thường" },
      { en: "prepare", vi: "chuẩn bị" },
      { en: "my school bag", vi: "cặp sách của tớ" },
      { en: "in the evening.", vi: "vào buổi tối." },
    ],
    answer: "I usually prepare my school bag in the evening.",
    answerVi: "Tớ thường chuẩn bị cặp sách vào buổi tối.",
  },
  {
    id: 2,
    chunks: [
      { en: "We", vi: "chúng tớ" },
      { en: "have", vi: "có (tiết)" },
      { en: "English", vi: "Tiếng Anh" },
      { en: "on Monday", vi: "vào thứ Hai" },
      { en: "and Friday.", vi: "và thứ Sáu." },
    ],
    answer: "We have English on Monday and Friday.",
    answerVi: "Chúng tớ có tiết Tiếng Anh vào thứ Hai và thứ Sáu.",
  },
  {
    id: 3,
    chunks: [
      { en: "Do", vi: "có … không" },
      { en: "your classmates", vi: "các bạn cùng lớp của bạn" },
      { en: "play football", vi: "chơi bóng đá" },
      { en: "with", vi: "với" },
      { en: "you", vi: "bạn" },
      { en: "after school?", vi: "sau giờ học?" },
    ],
    answer: "Do your classmates play football with you after school?",
    answerVi: "Các bạn cùng lớp có chơi bóng đá với bạn sau giờ học không?",
  },
  {
    id: 4,
    chunks: [
      { en: "My friends and I", vi: "các bạn tớ và tớ" },
      { en: "often", vi: "thường" },
      { en: "play games", vi: "chơi trò chơi" },
      { en: "at break time.", vi: "vào giờ ra chơi." },
    ],
    answer: "My friends and I often play games at break time.",
    answerVi: "Các bạn tớ và tớ thường chơi trò chơi vào giờ ra chơi.",
  },
  {
    id: 5,
    chunks: [
      { en: "My school", vi: "trường tớ" },
      { en: "has", vi: "có" },
      { en: "a library", vi: "một thư viện" },
      { en: "and", vi: "và" },
      { en: "a playground.", vi: "một sân chơi." },
    ],
    answer: "My school has a library and a playground.",
    answerVi: "Trường tớ có một thư viện và một sân chơi.",
  },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit1-grammar-g7.js.
// 15 scored items total: 10 Put the verbs + 5 Correct order.
// ============================================================
const UNIT_ID = "g6-unit1";
const UNIT_LABEL = "Unit 1: My New School";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return VERB_ITEMS.length + ORDER_ITEMS.length;
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
    section: "grammar",
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

function blanksOf(item) {
  return item.parts.filter(p => typeof p === "object");
}
function fullSentence(item) {
  return item.parts.map(p => (typeof p === "string" ? p : p.answers[0])).join("");
}
function questionText(item) {
  return item.parts.map(p => (typeof p === "string" ? p : `___${p.base ? ` (${p.base})` : ""}`)).join("");
}

function nextButton(after, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-primary btn-sm";
  btn.textContent = "Tiếp theo →";
  btn.style.marginTop = "14px";
  after.insertAdjacentElement("afterend", btn);
  btn.addEventListener("click", onClick);
}

// "Xong rồi!" card. Each tab here is its own section (not parts of one Quiz),
// so no data-part-done marker is needed.
function showSectionComplete(host, message, nextLabel, onNext) {
  window.EQMascot && window.EQMascot.show("mascot-box", onNext ? "complete_exercise" : "complete_unit");
  host.innerHTML = `
    <div class="runner-card">
      <div class="stage-complete">
        <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>Xong rồi!</h3>
        <p>${message}</p>
        <button type="button" class="btn btn-primary section-next-btn" style="margin-top:14px;width:100%;white-space:normal;">${nextLabel}</button>
      </div>
    </div>`;
  host.querySelector(".section-next-btn").addEventListener("click", onNext);
}

document.addEventListener("DOMContentLoaded", () => {
  eqStudent = window.EQStudent ? window.EQStudent.confirmStudent() : "";
  if (window.EQResults && eqStudent) {
    window.EQResults.markInProgress({
      student: eqStudent,
      unitId: UNIT_ID,
      unitLabel: UNIT_LABEL,
      section: "grammar",
    }).catch(() => {});
  }
  runVerbRound(VERB_ITEMS, 1);
  runOrderRound(ORDER_ITEMS, 1);
  setupTabs();
});

// ---- Put the verbs (scored: 10, one sentence at a time) ----
// Wrong sentences automatically come back in a "Vòng 2" retry round (saved as retries, not re-scored).
function runVerbRound(items, round) {
  const host = document.getElementById("verb-runner");
  if (!host) return;
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function render() {
    const item = items[i];
    const sentenceHtml = item.parts.map((p, pi) => {
      if (typeof p === "string") return p;
      return `${p.base ? `(${p.base}) ` : ""}<input type="text" class="fitb-input verb-blank" data-part="${pi}" autocomplete="off" autocapitalize="off" spellcheck="false">`;
    }).join("");

    host.innerHTML = `
      <div class="runner-card">
        ${retryHeader(round)}
        ${renderDots(i, total)}
        <div class="quiz-item">
          <div class="verb-sentence"><span class="verb-num">${item.id}.</span> ${sentenceHtml}</div>
          <button type="button" class="eq-translate-btn" id="verb-translate">🔤 Dịch</button>
          <div class="tf-vi" id="verb-vi" style="display:none;">${item.vi}</div>
          <div class="fitb-row" style="margin-top:12px;">
            <button class="btn btn-primary btn-sm" id="verb-check">Kiểm tra</button>
          </div>
          <div class="fitb-feedback" id="verb-feedback"></div>
        </div>
      </div>`;

    const inputs = Array.from(host.querySelectorAll(".verb-blank"));
    const translateBtn = host.querySelector("#verb-translate");
    const viEl = host.querySelector("#verb-vi");
    translateBtn.addEventListener("click", () => {
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      translateBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });

    const checkBtn = host.querySelector("#verb-check");
    const feedback = host.querySelector("#verb-feedback");
    inputs.forEach(inp => inp.addEventListener("keydown", e => { if (e.key === "Enter") checkBtn.click(); }));

    checkBtn.addEventListener("click", () => {
      if (inputs.some(inp => !inp.value.trim())) {
        feedback.textContent = "Em điền hết các ô trống rồi bấm Kiểm tra nhé.";
        feedback.className = "fitb-feedback no";
        return;
      }
      checkBtn.disabled = true;
      let allCorrect = true;
      inputs.forEach(inp => {
        const blank = item.parts[Number(inp.dataset.part)];
        const ok = blank.answers.some(a => normalize(a) === normalize(inp.value));
        if (!ok) allCorrect = false;
        inp.disabled = true;
        inp.classList.add(ok ? "fitb-correct" : "fitb-wrong");
        inp.style.borderColor = ok ? "#3fae4f" : "#e05c5c";
      });
      window.EQSound && (allCorrect ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", allCorrect ? "correct" : "wrong");

      const key = blanksOf(item).map(b => b.answers[0]).join(" / ");
      feedback.innerHTML =
        (allCorrect
          ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
          : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng: ${key}</span>`) +
        `<div style="color:#222;font-weight:800;margin-top:6px;">${fullSentence(item)}</div>` +
        `<div style="color:#666;margin-top:2px;">${item.vi}</div>`;
      feedback.className = "fitb-feedback";
      speakChunk(fullSentence(item));

      eqRecordAndSave(`verb-${item.id}`, questionText(item), inputs.map(inp => inp.value.trim()).join(" / "), key, allCorrect);
      if (!allCorrect) wrongItems.push(item);

      nextButton(feedback, () => {
        i++;
        if (i < total) { render(); return; }
        if (wrongItems.length) { runVerbRound(wrongItems, round + 1); return; }
        showSectionComplete(host, "Em đã hoàn thành phần Put the verbs.", "Tiếp tục sang Correct order →", () => {
          const tab = document.querySelector('.ex-tab[data-target="panel-order"]');
          tab && tab.click();
        });
      });
    });
  }
  render();
}

// ---- Correct order (scored: 5, one at a time) — tap chunks to build the sentence ----
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

      eqRecordAndSave(`order-${item.id}`, item.chunks.map(c => c.en).join(" / "), built, item.answer, correct);
      if (!correct) wrongItems.push(item);
      resetBtn.disabled = true;
      checkBtn.disabled = true;

      nextButton(feedback, () => {
        i++;
        if (i < total) { render(); return; }
        if (wrongItems.length) { runOrderRound(wrongItems, round + 1); return; }
        showSectionComplete(host, "Em đã hoàn thành hết phần Grammar.", "Tiếp tục sang phần Exercise →", () => {
          window.location.href = "unit1-exercises-g6.html";
        });
      });
    });
  }
  render();
}

function setupTabs() {
  const tabs = document.querySelectorAll(".ex-tab");
  const panels = document.querySelectorAll(".ex-panel");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
      window.scrollTo({ top: document.querySelector(".ex-tabs").offsetTop - 90, behavior: "smooth" });
    });
  });
}
