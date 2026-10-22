// ============================================================
// Grade 6 — Unit 2 (My House) — Grammar data
// Source: teacher Hien's screenshots (possessive case + prepositions of place)
// Vietnamese translations: written by Claude, not in source — please review
// Scored: Possessive forms (6 sentences) + Prepositions dialogue (5 blanks) = 11 total.
// The theory card at the top of the page is reading only, not scored.
// ============================================================

// ---- Complete the sentences with the correct possessive forms (6 sentences) ----
// Same shape as unit1-grammar-g6.js VERB_ITEMS: base = the word in brackets,
// answers[0] is shown as the key. Curly apostrophes are accepted (see normalize).
const POSS_ITEMS = [
  { id: 1, parts: [{ base: "Mai", answers: ["Mai's"] }, " mother is my teacher of English."],
    vi: "Mẹ của Mai là cô giáo dạy Tiếng Anh của tớ." },
  { id: 2, parts: ["Is it ", { base: "Nam", answers: ["Nam's"] }, " study room?"],
    vi: "Đó có phải phòng học của Nam không?" },
  { id: 3, parts: ["My ", { base: "grandmother", answers: ["grandmother's"] }, " bedroom is my favourite room in our house."],
    vi: "Phòng ngủ của bà tớ là căn phòng tớ thích nhất trong nhà." },
  { id: 4, parts: ["My ", { base: "cousin", answers: ["cousin's"] }, " father is my uncle."],
    vi: "Bố của anh/chị/em họ tớ là chú/bác/cậu của tớ." },
  { id: 5, parts: ["Look! ", { base: "Tom", answers: ["Tom's"] }, " dog is running in the park."],
    vi: "Nhìn kìa! Con chó của Tom đang chạy trong công viên." },
  { id: 6, parts: ["There is a cat behind my ", { base: "sister", answers: ["sister's"] }, " computer."],
    vi: "Có một con mèo ở phía sau máy tính của chị/em gái tớ." },
];

// ---- Complete the dialogue with a suitable preposition of place (5 blanks) ----
// Read from the bedroom picture (img/g6-u2-grammar-bedroom.webp). Key from cô Hiền
// (blank 1 changed from "behind" to "next to" to match the picture).
const PREP_BOX = ["in", "on", "behind", "in front of", "between", "next to", "under"];
const PREP_ITEMS = [
  { id: 1, scene: "(Lan and her brother are in the bedroom.)",
    ask: { who: "Brother", text: "Where is my schoolbag?" },
    reply: { who: "Lan", before: "I think it's", after: "the desk." }, answer: "next to",
    vi: "– Cặp sách của anh đâu rồi? – Em nghĩ nó ở bên cạnh cái bàn." },
  { id: 2, scene: "(Lan and her brother are in the bedroom.)",
    ask: { who: "Brother", text: "And where's my pencil case?" },
    reply: { who: "Lan", before: "It's", after: "the desk. I saw it this morning." }, answer: "on",
    vi: "– Còn hộp bút của anh đâu? – Nó ở trên bàn. Sáng nay em thấy nó." },
  { id: 3, scene: "(Lan and her brother are in the bedroom.)",
    ask: { who: "Brother", text: "Oh, and where is my cat?" },
    reply: { who: "Lan", before: "Look! It's", after: "the chair." }, answer: "under",
    vi: "– Ồ, còn con mèo của anh đâu? – Nhìn kìa! Nó ở dưới ghế." },
  { id: 4, scene: "(Their mother comes into the room.)",
    ask: { who: "Mum", text: "Is this your book, Lan?" },
    reply: { who: "Lan", before: "Yes, Mum. It's", after: "the lamp." }, answer: "next to",
    vi: "– Đây có phải sách của con không, Lan? – Vâng ạ. Nó ở bên cạnh cái đèn." },
  { id: 5, scene: "(Their mother comes into the room.)",
    ask: { who: "Mum", text: "And why are these boxes here?" },
    reply: { who: "Brother", before: "The ball is", after: "the two boxes." }, answer: "between",
    vi: "– Sao mấy cái hộp này lại ở đây? – Quả bóng ở giữa hai cái hộp ạ." },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit1-grammar-g6.js.
// 11 scored items total: 6 Possessive forms + 5 Prepositions.
// ============================================================
const UNIT_ID = "g6-unit2";
const UNIT_LABEL = "Unit 2: My House";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return POSS_ITEMS.length + PREP_ITEMS.length;
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
  runPossRound(POSS_ITEMS, 1);
  runPrepRound(PREP_ITEMS, 1);
  setupTabs();
});

// ---- Possessive forms (scored: 6, one sentence at a time) ----
// Wrong sentences automatically come back in a "Vòng 2" retry round (saved as retries, not re-scored).
function runPossRound(items, round) {
  const host = document.getElementById("poss-runner");
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

      eqRecordAndSave(`poss-${item.id}`, questionText(item), inputs.map(inp => inp.value.trim()).join(" / "), key, allCorrect);
      if (!allCorrect) wrongItems.push(item);

      nextButton(feedback, () => {
        i++;
        if (i < total) { render(); return; }
        if (wrongItems.length) { runPossRound(wrongItems, round + 1); return; }
        showSectionComplete(host, "Em đã hoàn thành phần Possessive forms.", "Tiếp tục sang Prepositions →", () => {
          const tab = document.querySelector('.ex-tab[data-target="panel-prep"]');
          tab && tab.click();
        });
      });
    });
  }
  render();
}

// ---- Prepositions of place (scored: 5, one blank at a time) — pick from the box ----
function runPrepRound(items, round) {
  const host = document.getElementById("prep-runner");
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
          <div class="prep-scene">${item.scene}</div>
          <div class="prep-line"><b class="prep-who">${item.ask.who}:</b> ${item.ask.text}</div>
          <div class="prep-line"><b class="prep-who">${item.reply.who}:</b> ${item.reply.before} <span class="prep-blank">(${item.id}) ______</span> ${item.reply.after}</div>
          <button type="button" class="eq-translate-btn" id="prep-translate">🔤 Dịch</button>
          <div class="tf-vi" id="prep-vi" style="display:none;">${item.vi}</div>
          <div class="mcq-options prep-options">
            ${PREP_BOX.map(p => `<button type="button" class="mcq-option" data-val="${p}">${p}</button>`).join("")}
          </div>
          <div class="fitb-feedback" id="prep-feedback"></div>
        </div>
      </div>`;

    const translateBtn = host.querySelector("#prep-translate");
    const viEl = host.querySelector("#prep-vi");
    translateBtn.addEventListener("click", () => {
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      translateBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });

    const feedback = host.querySelector("#prep-feedback");
    const opts = Array.from(host.querySelectorAll(".prep-options .mcq-option"));
    opts.forEach(btn => btn.addEventListener("click", () => {
      if (host.querySelector(".prep-options .mcq-option[disabled]")) return;
      const chosen = btn.dataset.val;
      const correct = chosen === item.answer;
      opts.forEach(b => {
        b.disabled = true;
        if (b.dataset.val === item.answer) b.classList.add("correct");
      });
      if (!correct) btn.classList.add("wrong");
      window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");

      const full = `${item.reply.before} ${item.answer} ${item.reply.after}`;
      feedback.innerHTML =
        (correct
          ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
          : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng: ${item.answer}</span>`) +
        `<div style="color:#222;font-weight:800;margin-top:6px;">${full}</div>` +
        `<div style="color:#666;margin-top:2px;">${item.vi}</div>`;
      feedback.className = "fitb-feedback";
      speakChunk(full);

      eqRecordAndSave(`prep-${item.id}`, `${item.reply.before} ___ ${item.reply.after}`, chosen, item.answer, correct);
      if (!correct) wrongItems.push(item);

      nextButton(feedback, () => {
        i++;
        if (i < total) { render(); return; }
        if (wrongItems.length) { runPrepRound(wrongItems, round + 1); return; }
        showSectionComplete(host, "Em đã hoàn thành hết phần Grammar.", "Quay lại Unit 2 →", () => {
          window.location.href = "unit-g6.html?u=2";
        });
      });
    }));
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
