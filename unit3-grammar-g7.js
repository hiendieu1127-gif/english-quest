// ============================================================
// Grade 7 — Unit 3 (Community Service) — Grammar: the past simple
// Source: teacher Hien's slides + workbook (Global Success 7, Unit 3, ex. 4 & 5)
// Vietnamese translations: written by Claude, not in source — please review
// Same look & rules as unit2-grammar-g7.js (numbered pills, Vòng 2 retry,
// first-attempt-only scoring, manual "Tiếp theo →", Dịch on demand).
// ============================================================

// ---- 1. Verbs (ex. 4): right form of the verbs in brackets — 6 sentences, 7 blanks ----
const VERB_ITEMS = [
  { id: 1, parts: ["We often ", { base: "donate", answers: ["donate"] }, " vegetables to a nursery school in the village."],
    vi: "Chúng tôi thường quyên góp rau cho một trường mẫu giáo trong làng." },
  { id: 2, parts: ["Last summer, we ", { base: "start", answers: ["started"] }, " a Paper-Notebook Exchange programme. Now we have 20 members."],
    vi: "Mùa hè năm ngoái, chúng tôi đã bắt đầu chương trình Đổi giấy lấy vở. Bây giờ chúng tôi có 20 thành viên." },
  { id: 3, parts: ["I ", { base: "tutor", answers: ["tutor"] }, " a primary school student every Thursday. He really likes English now."],
    vi: "Tôi dạy kèm một học sinh tiểu học vào thứ Năm hằng tuần. Bây giờ em ấy rất thích tiếng Anh." },
  { id: 4, parts: ["Our club members ", { base: "give", answers: ["give"] }, " young people advice when they need it."],
    vi: "Các thành viên câu lạc bộ của chúng tôi cho các bạn trẻ lời khuyên khi họ cần." },
  { id: 5, parts: ["I ", { base: "become", answers: ["became"] }, " a member of Green School Club last year."],
    vi: "Tôi đã trở thành thành viên của câu lạc bộ Trường học Xanh vào năm ngoái." },
  { id: 6, parts: ["We often ", { base: "write", answers: ["write"] }, " letters to children in orphanages. Last Tet holiday, we ", { base: "give", answers: ["gave"] }, " them banh chung."],
    vi: "Chúng tôi thường viết thư cho trẻ em ở trại trẻ mồ côi. Tết năm ngoái, chúng tôi đã tặng các em bánh chưng." },
];

// ---- 2. Passage (ex. 5): 10 blanks, checked together ----
// parts: plain text strings and blank objects { id, base, answers }
const PASSAGE_PARTS = [
  "Last summer, our school started a community service project. Our teachers ",
  { id: 1, base: "make", answers: ["made"] },
  " a list of activities and ",
  { id: 2, base: "give", answers: ["gave"] },
  " it to each class. We could ",
  { id: 3, base: "choose", answers: ["choose"] },
  " the activities we wanted to join. I ",
  { id: 4, base: "choose", answers: ["chose"] },
  " to help the elderly in the village nursing home. We ",
  { id: 5, base: "see", answers: ["saw"] },
  " them once a week, ",
  { id: 6, base: "dance", answers: ["danced"] },
  " and ",
  { id: 7, base: "sing", answers: ["sang"] },
  " for them. My friends ",
  { id: 8, base: "join", answers: ["joined"] },
  " other activities like clean-up or gardening activities. We ",
  { id: 9, base: "be", answers: ["were"] },
  " very happy. We all ",
  { id: 10, base: "plan", answers: ["plan", "are planning", "'re planning"] },
  " to join other community activities this summer.",
];

const PASSAGE_VI =
  "Mùa hè năm ngoái, trường chúng tôi đã bắt đầu một dự án phục vụ cộng đồng. Thầy cô đã lập một danh sách " +
  "các hoạt động và đưa cho từng lớp. Chúng tôi có thể chọn những hoạt động mình muốn tham gia. Tôi đã chọn " +
  "giúp đỡ người già ở viện dưỡng lão trong làng. Chúng tôi đến thăm họ mỗi tuần một lần, nhảy múa và hát " +
  "cho họ nghe. Các bạn của tôi tham gia những hoạt động khác như dọn dẹp hoặc làm vườn. Chúng tôi đã rất vui. " +
  "Tất cả chúng tôi dự định tham gia các hoạt động cộng đồng khác vào mùa hè này.";

// ============================================================
// Results saving — 17 scored items: 7 Verbs blanks + 10 Passage blanks
// ============================================================
const UNIT_ID = "g7-unit3";
const UNIT_LABEL = "Unit 3: Community Service";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // retry-round answers (Vòng 2, 3…) — never change the first-attempt score
let saveQueue = Promise.resolve();

function verbBlanks(item) {
  return item.parts.map((p, pi) => ({ p, pi })).filter(x => typeof x.p === "object");
}

function eqTotalItems() {
  const verbCount = VERB_ITEMS.reduce((n, item) => n + verbBlanks(item).length, 0);
  return verbCount + PASSAGE_PARTS.filter(p => typeof p === "object").length;
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  // Review of a section that was already finished: practice only, the Dashboard keeps the first attempt.
  if (window.EQSectionLock && window.EQSectionLock.isReviewing()) return;
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
  runVerbRound(VERB_ITEMS, 1);
  runPassageRound(PASSAGE_PARTS.filter(p => typeof p === "object").map(p => p.id), 1);
  setupCrumbNav();
});

// ---- 1. Verbs — one sentence at a time, type the verb ----
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
      return `(${p.base}) <input type="text" class="fitb-input verb-blank" data-part="${pi}" autocomplete="off" autocapitalize="off" spellcheck="false">`;
    }).join("");
    const full = item.parts.map(p => (typeof p === "string" ? p : p.answers[0])).join("");

    host.innerHTML = `
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
      inputs.forEach((inp, bi) => {
        const pi = Number(inp.dataset.part);
        const blank = item.parts[pi];
        const ok = blank.answers.some(a => normalize(a) === normalize(inp.value));
        if (!ok) allCorrect = false;
        inp.disabled = true;
        inp.classList.add(ok ? "fitb-correct" : "fitb-wrong");
        inp.style.borderColor = ok ? "#3fae4f" : "#e05c5c";
        const label = inputs.length > 1 ? `Câu ${item.id} (ô ${bi + 1})` : `Câu ${item.id}`;
        eqRecordAndSave(`verb-${item.id}-${pi}`, `${label}: (${blank.base})`, inp.value.trim(), blank.answers[0], ok);
      });
      window.EQSound && (allCorrect ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", allCorrect ? "correct" : "wrong");

      const key = verbBlanks(item).map(x => x.p.answers[0]).join(" / ");
      feedback.innerHTML =
        (allCorrect
          ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
          : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng: ${key}</span>`) +
        `<div style="color:#222;font-weight:800;margin-top:6px;">${full}</div>` +
        `<div style="color:#666;margin-top:2px;">${item.vi}</div>`;
      feedback.className = "fitb-feedback";
      speakChunk(full);
      if (!allCorrect) wrongItems.push(item);

      addNextButton(feedback, () => {
        i++;
        if (i < total) render();
        else if (wrongItems.length) runVerbRound(wrongItems, round + 1);
        else showSectionComplete(host, "Em đã hoàn thành phần Verbs.", true, "complete_exercise");
      });
    });
  }
  render();
}

// ---- 2. Passage — whole passage on screen; blanks still wrong come back in Vòng 2 ----
// openIds: blanks to fill this round; blanks already right are shown filled in.
function runPassageRound(openIds, round) {
  const host = document.getElementById("passage-runner");
  if (!host) return;
  const blanks = PASSAGE_PARTS.filter(p => typeof p === "object");

  const passageHtml = PASSAGE_PARTS.map(p => {
    if (typeof p === "string") return p;
    if (!openIds.includes(p.id)) return `<b style="color:#3fae4f;">${p.answers[0]}</b>`;
    return `<span class="verb-num">(${p.id})</span> (${p.base}) <input type="text" class="fitb-input passage-blank" data-id="${p.id}" autocomplete="off" autocapitalize="off" spellcheck="false">`;
  }).join("");

  host.innerHTML = `
    ${retryHeader(round)}
    <div class="quiz-item">
      <p class="verb-sentence" style="line-height:2.4;">${passageHtml}</p>
      <button type="button" class="eq-translate-btn" id="passage-translate">🔤 Dịch</button>
      <div class="tf-vi" id="passage-vi" style="display:none;">${PASSAGE_VI}</div>
      <div class="fitb-row" style="margin-top:12px;">
        <button class="btn btn-primary btn-sm" id="passage-check">Kiểm tra</button>
      </div>
      <div class="fitb-feedback" id="passage-feedback"></div>
    </div>`;

  if (round > 1) host.scrollIntoView({ behavior: "smooth", block: "start" });

  const translateBtn = host.querySelector("#passage-translate");
  const viEl = host.querySelector("#passage-vi");
  translateBtn.addEventListener("click", () => {
    const showing = viEl.style.display !== "none";
    viEl.style.display = showing ? "none" : "block";
    translateBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });

  const inputs = Array.from(host.querySelectorAll(".passage-blank"));
  const checkBtn = host.querySelector("#passage-check");
  const feedback = host.querySelector("#passage-feedback");
  inputs.forEach(inp => inp.addEventListener("keydown", e => { if (e.key === "Enter") checkBtn.click(); }));

  checkBtn.addEventListener("click", () => {
    if (inputs.some(inp => !inp.value.trim())) {
      feedback.textContent = "Em điền hết các ô trống rồi bấm Kiểm tra nhé.";
      feedback.className = "fitb-feedback no";
      return;
    }
    checkBtn.disabled = true;
    const wrongIds = [];
    inputs.forEach(inp => {
      const blank = blanks.find(b => b.id === Number(inp.dataset.id));
      const ok = blank.answers.some(a => normalize(a) === normalize(inp.value));
      inp.disabled = true;
      inp.classList.add(ok ? "fitb-correct" : "fitb-wrong");
      inp.style.borderColor = ok ? "#3fae4f" : "#e05c5c";
      if (!ok) {
        wrongIds.push(blank.id);
        inp.insertAdjacentHTML("afterend", ` <b style="color:#3fae4f;">→ ${blank.answers[0]}</b>`);
      }
      eqRecordAndSave(`passage-${blank.id}`, `Đoạn văn, ô ${blank.id}: (${blank.base})`, inp.value.trim(), blank.answers[0], ok);
    });
    const allCorrect = wrongIds.length === 0;
    window.EQSound && (allCorrect ? window.EQSound.correct() : window.EQSound.wrong());
    window.EQMascot && window.EQMascot.show("mascot-box", allCorrect ? "correct" : "wrong");
    feedback.textContent = allCorrect
      ? "✓ Chính xác hết!"
      : `Đúng ${inputs.length - wrongIds.length}/${inputs.length}. Xem đáp án màu xanh, rồi bấm Tiếp theo để làm lại các ô sai.`;
    feedback.className = allCorrect ? "fitb-feedback ok" : "fitb-feedback no";

    addNextButton(feedback, () => {
      if (wrongIds.length) runPassageRound(wrongIds, round + 1);
      else showSectionComplete(host, "Em đã hoàn thành hết phần Grammar của Unit 3.", false, "complete_unit");
    });
  });
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
  switchPanel("panel-verbs");
}
