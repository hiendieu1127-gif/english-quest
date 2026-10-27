// ============================================================
// Grade 6 — Unit 1 (My New School) — Exercises data
// Source: teacher Hien's screenshots (reading passage, phrase table,
// True/False and Put the verbs, with answer keys)
// Vietnamese translations of the T/F and verb sentences: written by Claude — please review
// Scored sections: True/False (5) + Put the verbs (5 blanks) = 10 total.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================

const READING_HTML =
  "In England, when the schoolchildren <mark>come to school</mark>, they first " +
  "<mark>go to the cloakroom</mark>. They <mark>take off their coats</mark> and raincoats, their caps " +
  "and hats, and then <mark>go to their classroom</mark>. Some of the students " +
  "<mark>go to the laboratories</mark> and workshops where they <mark>learn physics</mark>, " +
  "<mark>chemistry</mark> and art. When a student is <mark>on duty</mark>, he comes to school " +
  "<mark>very early</mark>. He has to open all the windows, <mark>water the flowers</mark> and " +
  "<mark>clean the blackboard</mark>, so everything <mark>is ready for</mark> <mark>the first lesson</mark>. " +
  "At seven thirty the teacher <mark>comes into the room</mark> and <mark>the lesson begins</mark>.";

// ---- Vocabulary (practice only, tap to hear + flip for meaning) ----
const VOCAB_ITEMS = [
  { en: "come to school", vi: "đến trường" },
  { en: "go to the cloakroom", vi: "đi đến phòng gửi đồ" },
  { en: "take off", vi: "cởi ra" },
  { en: "take off their coats", vi: "cởi áo khoác của họ" },
  { en: "go to their classroom", vi: "đi đến lớp học của họ" },
  { en: "go to the laboratories", vi: "đi đến các phòng thí nghiệm" },
  { en: "learn physics", vi: "học môn Vật lý" },
  { en: "learn chemistry", vi: "học môn Hóa học" },
  { en: "be on duty", vi: "trực nhật, có nhiệm vụ trực" },
  { en: "come very early", vi: "đến rất sớm" },
  { en: "open the windows", vi: "mở các cửa sổ" },
  { en: "water the flowers", vi: "tưới hoa" },
  { en: "clean the blackboard", vi: "lau bảng" },
  { en: "be ready for", vi: "sẵn sàng cho" },
  { en: "the first lesson", vi: "tiết học đầu tiên" },
  { en: "come into the room", vi: "bước vào phòng" },
  { en: "the lesson begins", vi: "tiết học bắt đầu" },
];

// ---- True / False (5 items) ----
const TF_ITEMS = [
  {
    en: "The schoolchildren first go to the cloakroom when they come to school.",
    vi: "Khi đến trường, học sinh đi đến phòng gửi đồ trước tiên.",
    answer: "T",
  },
  {
    en: "The students put on their coats and raincoats in the cloakroom.",
    vi: "Học sinh mặc áo khoác và áo mưa vào ở phòng gửi đồ.",
    answer: "F",
    why: "They take off their coats and raincoats.",
  },
  {
    en: "Some students learn physics, chemistry and art in laboratories and workshops.",
    vi: "Một số học sinh học Vật lý, Hóa học và Mĩ thuật ở phòng thí nghiệm và xưởng thực hành.",
    answer: "T",
  },
  {
    en: "A student on duty comes to school late.",
    vi: "Học sinh trực nhật đến trường muộn.",
    answer: "F",
    why: "He comes to school very early.",
  },
  {
    en: "The student on duty opens the windows, waters the flowers and cleans the blackboard.",
    vi: "Học sinh trực nhật mở cửa sổ, tưới hoa và lau bảng.",
    answer: "T",
  },
];

// ---- Put the verbs in brackets in the correct form (4 sentences, 5 blanks) ----
// Each BLANK is one scored item (sentence 3 has two: Does / begin).
const VERB_ITEMS = [
  { id: 1, parts: ["The schoolchildren usually ", { base: "go", answers: ["go"] }, " to the cloakroom first."],
    vi: "Học sinh thường đi đến phòng gửi đồ trước tiên." },
  { id: 2, parts: ["A student on duty ", { base: "come", answers: ["comes"] }, " to school very early."],
    vi: "Học sinh trực nhật đến trường rất sớm." },
  { id: 3, parts: [{ base: "", answers: ["Does"] }, " the teacher ", { base: "begin", answers: ["begin"] }, " the first lesson at seven thirty?"],
    vi: "Giáo viên có bắt đầu tiết học đầu tiên lúc bảy giờ ba mươi không?" },
  { id: 4, parts: ["The students ", { base: "not study", answers: ["don't study", "do not study"] }, " physics every day."],
    vi: "Học sinh không học Vật lý mỗi ngày." },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit1-exercises-g7.js.
// 10 scored items total: 5 True/False + 5 Put the verbs blanks.
// Score is based on the FIRST attempt only — retry rounds are saved separately.
// ============================================================
const UNIT_ID = "g6-unit1";
const UNIT_LABEL = "Unit 1: My New School";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function verbBlanks(item) {
  return item.parts.map((p, pi) => ({ p, pi })).filter(x => typeof x.p === "object");
}

function eqTotalItems() {
  return TF_ITEMS.length + VERB_ITEMS.reduce((sum, item) => sum + verbBlanks(item).length, 0);
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
function speakVocab(text) {
  if (!window.EQSpeak) return;
  window.EQSpeak.speak(text.trim() === "I" ? "aye" : text);
}

// AI voice is off everywhere except the vocabulary cards after the reading.
function speakChunk() {}

// ---- Shared "section complete" screen (Xong rồi! + optional "next section" button) ----
// Each crumb is its own section (not parts of one Quiz), so no data-part-done marker is needed.
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
  runTFRound(TF_ITEMS.map((t, idx) => ({ ...t, origIdx: idx })), 1);
  runVerbRound(VERB_ITEMS, 1);
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
      speakVocab(VOCAB_ITEMS[Number(card.dataset.idx)].en);
      card.classList.toggle("flipped");
    });
  });
}

// ---- True / False (scored: 5) — meaning hidden behind "Dịch" ----
// Wrong answers automatically come back in a "Vòng 2" retry round (saved as retries, not re-scored).
function runTFRound(items, round) {
  const host = document.getElementById("tf-list");
  if (!host) return;
  const total = items.length;
  let answeredCount = 0;
  const wrongItems = [];

  host.innerHTML = retryHeader(round) + items.map((t, idx) => `
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

// ---- Put the verbs (scored: 5 blanks, one sentence at a time) ----
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
    const full = item.parts.map(p => (typeof p === "string" ? p : p.answers[0])).join("");

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
      inputs.forEach((inp, bi) => {
        const pi = Number(inp.dataset.part);
        const blank = item.parts[pi];
        const ok = blank.answers.some(a => normalize(a) === normalize(inp.value));
        if (!ok) allCorrect = false;
        inp.disabled = true;
        inp.classList.add(ok ? "fitb-correct" : "fitb-wrong");
        inp.style.borderColor = ok ? "#3fae4f" : "#e05c5c";
        const label = inputs.length > 1 ? `Câu ${item.id} (ô ${bi + 1})` : `Câu ${item.id}`;
        eqRecordAndSave(`verb-${item.id}-${pi}`, `${label}: ${blank.base ? `(${blank.base})` : "___"}`, inp.value.trim(), blank.answers[0], ok);
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

      const nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "btn btn-primary btn-sm";
      nextBtn.textContent = "Tiếp theo →";
      nextBtn.style.marginTop = "14px";
      feedback.insertAdjacentElement("afterend", nextBtn);
      nextBtn.addEventListener("click", () => {
        i++;
        if (i < total) { render(); return; }
        if (wrongItems.length) { runVerbRound(wrongItems, round + 1); return; }
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 1.", false, "complete_unit");
      });
    });
  }
  render();
}

// ---- Breadcrumb-style navigation between the 4 sections ----
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
