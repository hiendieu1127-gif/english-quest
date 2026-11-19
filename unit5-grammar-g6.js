// ============================================================
// Grade 6 — Unit 5 (Natural Wonders of Viet Nam) — Grammar data
// Source: teacher Hien's screenshots (countable / uncountable nouns, quantifiers,
// must / mustn't theory; book exercises 5 and 7 with the book's answer keys).
// Vietnamese translations: written by Claude, approved by cô Hiền.
// "Dịch" translates the QUESTION only (blank left as ___ / cue words only, the
// options A/B are never translated); the full translation appears after answering.
// No AI voice on this page (cô Hiền: AI voice for Vocabulary only).
// Scored: Bài 5 (6) + Bài 7 (6) = 12 total.
// The theory card at the top of the page is reading only, not scored.
// ============================================================

// ---- Bài 5: Choose the correct option to complete each sentence (tap A / B) ----
const EX5_ITEMS = [
  { id: 1, before: "Her", after: "very curly.", opts: ["hair is", "hairs are"], answer: 0,
    vi: "___ của cô ấy rất xoăn.", viFull: "Tóc của cô ấy rất xoăn." },
  { id: 2, before: "Today I have got", after: "to do.", opts: ["much work", "many works"], answer: 0,
    vi: "Hôm nay tớ có ___ phải làm.", viFull: "Hôm nay tớ có nhiều việc phải làm." },
  { id: 3, before: "I think too", after: "taught in schools.", opts: ["many mathematics are", "much mathematics is"], answer: 1,
    vi: "Tớ nghĩ ___ được dạy ở trường quá nhiều.", viFull: "Tớ nghĩ môn Toán được dạy ở trường quá nhiều." },
  { id: 4, before: "We are all eager to increase our", after: ".", opts: ["knowledge", "knowledges"], answer: 0,
    vi: "Tất cả chúng tớ đều háo hức nâng cao ___ của mình.", viFull: "Tất cả chúng tớ đều háo hức nâng cao kiến thức của mình." },
  { id: 5, before: "Could you pass me", after: ", please?", opts: ["a salt", "some salt"], answer: 1,
    vi: "Bạn đưa giúp tớ ___ được không?", viFull: "Bạn đưa giúp tớ một ít muối được không?" },
  { id: 6, before: "", after: "cheese cubes have you got in the box?", opts: ["How much", "How many"], answer: 1,
    vi: "Bạn có ___ miếng phô mai trong hộp?", viFull: "Bạn có bao nhiêu miếng phô mai trong hộp?" },
];

// ---- Bài 7: Complete the sentences, using must / mustn't (type the part after the comma) ----
// The first part of the sentence is shown; the student types "you must / mustn't ...".
// answers[0] = the book's key (shown); "must not" is also accepted.
function mustAnswers(core) {
  const out = [core];
  if (core.includes("mustn't")) out.push(core.replace("mustn't", "must not"));
  return out;
}
const EX7_ITEMS = [
  { id: 1, lead: "If you are sick,", cue: "you / go to see the doctor.",
    answers: mustAnswers("you must go to see the doctor."),
    vi: "Nếu bạn bị ốm, bạn / đi khám bác sĩ.", viFull: "Nếu bạn bị ốm, bạn phải đi khám bác sĩ." },
  { id: 2, lead: "When you are on the airplane,", cue: "you / shout.",
    answers: mustAnswers("you mustn't shout."),
    vi: "Khi bạn ở trên máy bay, bạn / la hét.", viFull: "Khi bạn ở trên máy bay, bạn không được la hét." },
  { id: 3, lead: "Before you go to bed,", cue: "you / brush your teeth.",
    answers: mustAnswers("you must brush your teeth."),
    vi: "Trước khi đi ngủ, bạn / đánh răng.", viFull: "Trước khi đi ngủ, bạn phải đánh răng." },
  { id: 4, lead: "When you are in the library,", cue: "you / talk loudly.",
    answers: mustAnswers("you mustn't talk loudly."),
    vi: "Khi bạn ở trong thư viện, bạn / nói chuyện to.", viFull: "Khi bạn ở trong thư viện, bạn không được nói chuyện to." },
  { id: 5, lead: "When you are doing an English test,", cue: "you / use / a dictionary.",
    answers: mustAnswers("you mustn't use a dictionary."),
    vi: "Khi bạn đang làm bài kiểm tra tiếng Anh, bạn / dùng / từ điển.", viFull: "Khi bạn đang làm bài kiểm tra tiếng Anh, bạn không được dùng từ điển." },
  { id: 6, lead: "When you are in a car,", cue: "you / fasten / your seat belt.",
    answers: mustAnswers("you must fasten your seat belt."),
    vi: "Khi bạn ở trong ô tô, bạn / thắt / dây an toàn.", viFull: "Khi bạn ở trong ô tô, bạn phải thắt dây an toàn." },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit4-grammar-g6.js.
// 12 scored items total: 6 Bài 5 + 6 Bài 7.
// Score is based on the FIRST attempt only — retry rounds are saved separately.
// ============================================================
const UNIT_ID = "g6-unit5";
const UNIT_LABEL = "Unit 5: Natural Wonders of Viet Nam";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return EX5_ITEMS.length + EX7_ITEMS.length;
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

// Typed answers: ignore case, extra spaces, punctuation and curly apostrophes.
function normalize(s) {
  return String(s).trim().toLowerCase().replace(/[’‘`]/g, "'").replace(/[.?!,]/g, "").replace(/\s+/g, " ").trim();
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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
function showSectionComplete(host, message, nextLabel, onNext, mascotType) {
  window.EQMascot && window.EQMascot.show("mascot-box", mascotType);
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

function goToTab(panelId) {
  const tab = document.querySelector(`.ex-tab[data-target="${panelId}"]`);
  tab && tab.click();
}

// ---- The two exercises share one runner; each defines its body, its wiring and its ending ----
const EXERCISES = {
  // Bài 5 — tap A or B
  ex5: {
    hostId: "ex5-runner",
    keyPrefix: "choose",
    body: item => `
      <div class="verb-sentence"><span class="verb-num">${item.id}.</span> ${item.before} <span class="blank-line">________</span> ${item.after}</div>
      <div class="mcq-options" style="margin-top:12px;">
        ${item.opts.map((p, pi) => `<button type="button" class="mcq-option phrase-opt" data-idx="${pi}"><span class="mcq-letter">${String.fromCharCode(65 + pi)}</span>${p}</button>`).join("")}
      </div>`,
    typed: false,
    key: item => `${String.fromCharCode(65 + item.answer)}. ${item.opts[item.answer]}`,
    question: item => `${item.before} ___ ${item.after}`.trim(),
    full: item => {
      const s = `${item.before} ${item.opts[item.answer]} ${item.after}`.trim().replace(/\s+([.,?])/g, "$1");
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
    done: host => showSectionComplete(host, "Em đã hoàn thành Bài 5.", "Tiếp tục sang Bài 7 →", () => goToTab("panel-ex7"), "complete_exercise"),
  },
  // Bài 7 — the first part is shown, type "you must / mustn't ..."
  ex7: {
    hostId: "ex7-runner",
    keyPrefix: "must",
    body: item => `
      <div class="sentence-cue"><span class="verb-num">${item.id}.</span> ${item.lead} <b>${item.cue}</b></div>
      <div class="must-row"><span class="must-lead">${item.lead}</span>
        <input type="text" class="fitb-input write-input must-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="you must / mustn't …"></div>`,
    typed: true,
    grade: (host, item) => {
      const inp = host.querySelector(".must-input");
      if (!inp.value.trim()) return null;
      const ok = item.answers.some(a => normalize(a) === normalize(inp.value));
      inp.disabled = true;
      inp.classList.add(ok ? "fitb-correct" : "fitb-wrong");
      inp.style.borderColor = ok ? "#3fae4f" : "#e05c5c";
      return { answer: inp.value.trim(), ok };
    },
    emptyMsg: "Em gõ phần còn lại của câu (bắt đầu bằng you must / you mustn't) rồi bấm Kiểm tra nhé.",
    key: item => item.answers[0],
    question: item => `${item.lead} ${item.cue}`,
    full: item => `${item.lead} ${item.answers[0]}`,
    done: host => showSectionComplete(host, "Em đã hoàn thành hết phần Grammar.", "Tiếp tục sang phần Exercise →", () => {
      window.location.href = "unit5-exercises-g6.html";
    }, "complete_unit"),
  },
};

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
  runRound("ex5", EX5_ITEMS, 1);
  runRound("ex7", EX7_ITEMS, 1);
  setupTabs();
});

// One sentence at a time. Wrong sentences automatically come back in a "Vòng 2"
// retry round (saved as retries, not re-scored).
function runRound(exKey, items, round) {
  const ex = EXERCISES[exKey];
  const host = document.getElementById(ex.hostId);
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
          ${ex.body(item)}
          <div><button type="button" class="eq-translate-btn" id="${exKey}-translate">🔤 Dịch</button></div>
          <div class="tf-vi" id="${exKey}-vi" style="display:none;">${item.vi}</div>
          ${ex.typed ? `<div class="fitb-row" style="margin-top:12px;"><button class="btn btn-primary btn-sm" id="${exKey}-check">Kiểm tra</button></div>` : ""}
          <div class="fitb-feedback" id="${exKey}-feedback"></div>
        </div>
      </div>`;

    const translateBtn = host.querySelector(`#${exKey}-translate`);
    const viEl = host.querySelector(`#${exKey}-vi`);
    const feedback = host.querySelector(`#${exKey}-feedback`);
    let answered = false;

    translateBtn.addEventListener("click", () => {
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      translateBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });

    function finish(studentAnswer, ok) {
      answered = true;
      window.EQSound && (ok ? window.EQSound.correct() : window.EQSound.wrong());
      window.EQMascot && window.EQMascot.show("mascot-box", ok ? "correct" : "wrong");
      // The question-only translation is replaced by the full one in the feedback.
      viEl.style.display = "none";
      translateBtn.style.display = "none";
      feedback.innerHTML =
        (ok
          ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
          : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng: ${escapeHtml(ex.key(item))}</span>`) +
        `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(ex.full(item))}</div>` +
        `<div style="color:#666;margin-top:2px;">${item.viFull}</div>`;
      feedback.className = "fitb-feedback";

      eqRecordAndSave(`${ex.keyPrefix}-${item.id}`, ex.question(item), studentAnswer, ex.key(item), ok);
      if (!ok) wrongItems.push(item);

      nextButton(feedback, () => {
        i++;
        if (i < total) { render(); return; }
        if (wrongItems.length) { runRound(exKey, wrongItems, round + 1); return; }
        ex.done(host);
      });
    }

    if (ex.typed) {
      const checkBtn = host.querySelector(`#${exKey}-check`);
      host.querySelectorAll("input").forEach(inp => inp.addEventListener("keydown", e => { if (e.key === "Enter") checkBtn.click(); }));
      checkBtn.addEventListener("click", () => {
        if (answered) return;
        const res = ex.grade(host, item);
        if (!res) {
          feedback.textContent = ex.emptyMsg;
          feedback.className = "fitb-feedback no";
          return;
        }
        checkBtn.disabled = true;
        finish(res.answer, res.ok);
      });
    } else {
      host.querySelectorAll(".phrase-opt").forEach(opt => {
        opt.addEventListener("click", () => {
          if (answered) return;
          const idx = Number(opt.dataset.idx);
          const chosen = `${String.fromCharCode(65 + idx)}. ${item.opts[idx]}`;
          const ok = idx === item.answer;
          host.querySelectorAll(".phrase-opt").forEach(o => {
            o.disabled = true;
            if (Number(o.dataset.idx) === item.answer) o.classList.add("correct");
          });
          if (!ok) opt.classList.add("wrong");
          finish(chosen, ok);
        });
      });
    }
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
