// ============================================================
// Grade 6 — Unit 4 (My Neighbourhood) — Grammar data
// Source: teacher Hien's screenshots (comparative adjectives theory, examples,
// notes, book exercises 3, 4, 5 with the book's answer keys).
// Vietnamese translations: written by Claude, approved by cô Hiền.
// "Dịch" translates the QUESTION only (blank left as ___ / cue words only);
// the full translation appears after the student answers.
// No AI voice on this page (cô Hiền: AI voice for Vocabulary only).
// Scored: Bài 3 (5) + Bài 4 (5) + Bài 5 (5) = 15 total.
// The theory card at the top of the page is reading only, not scored.
// ============================================================

// ---- Bài 3: Complete the sentences with the correct comparative form (type) ----
const EX3_BOX = ["narrow", "cold", "important", "dangerous", "fast"];
const EX3_ITEMS = [
  { id: 1, before: "It's", after: "in the north of Viet Nam than in the south.", answers: ["colder"],
    vi: "Ở miền Bắc Việt Nam ___ hơn ở miền Nam.", viFull: "Ở miền Bắc Việt Nam lạnh hơn ở miền Nam." },
  { id: 2, before: "Is a snake", after: "than a dog?", answers: ["more dangerous"],
    vi: "Con rắn có ___ hơn con chó không?", viFull: "Con rắn có nguy hiểm hơn con chó không?" },
  { id: 3, before: "Doing homework is", after: "than playing video games.", answers: ["more important"],
    vi: "Làm bài tập về nhà ___ hơn chơi trò chơi điện tử.", viFull: "Làm bài tập về nhà quan trọng hơn chơi trò chơi điện tử." },
  { id: 4, before: "The streets in my neighbourhood are", after: "than in your neighbourhood.", answers: ["narrower"],
    vi: "Đường phố ở khu tớ ở ___ hơn ở khu của bạn.", viFull: "Đường phố ở khu tớ ở hẹp hơn ở khu của bạn." },
  { id: 5, before: "Travelling by air is", after: "than travelling by bus.", answers: ["faster"],
    vi: "Đi máy bay ___ hơn đi xe buýt.", viFull: "Đi máy bay nhanh hơn đi xe buýt." },
];

// ---- Bài 4: Complete the sentences with the phrases in the box (tap to choose) ----
const EX4_BOX = [
  "she was a child",
  "than it was when I bought it",
  "than he used to be",
  "than they were ten years ago",
  "than I was before",
];
const EX4_ITEMS = [
  { id: 1, before: "My brother is more confident", after: ".", answer: "than he used to be",
    vi: "Anh trai tớ tự tin hơn ___.", viFull: "Anh trai tớ tự tin hơn trước đây." },
  { id: 2, before: "My watch is much older", after: ".", answer: "than it was when I bought it",
    vi: "Đồng hồ của tớ cũ hơn nhiều ___.", viFull: "Đồng hồ của tớ cũ hơn nhiều so với lúc tớ mới mua." },
  { id: 3, before: "She is more attractive than when", after: ".", answer: "she was a child",
    vi: "Cô ấy xinh đẹp hơn so với khi ___.", viFull: "Cô ấy xinh đẹp hơn so với khi còn nhỏ." },
  { id: 4, before: "I'm happier in my new school", after: ".", answer: "than I was before",
    vi: "Ở trường mới tớ vui hơn ___.", viFull: "Ở trường mới tớ vui hơn trước đây." },
  { id: 5, before: "Today, houses in the city are much more expensive", after: ".", answer: "than they were ten years ago",
    vi: "Ngày nay nhà ở thành phố đắt hơn nhiều ___.", viFull: "Ngày nay nhà ở thành phố đắt hơn nhiều so với mười năm trước." },
];

// ---- Bài 5: Write sentences, using the comparative form (type the whole sentence) ----
// answers[0] = the book's key (shown); the rest are also accepted.
const EX5_ITEMS = [
  { id: 1, cue: "Mai / intelligent / Kien.",
    answers: ["Mai is more intelligent than Kien.", "Mai's more intelligent than Kien."],
    vi: "Mai / thông minh / Kiên", viFull: "Mai thông minh hơn Kiên." },
  { id: 2, cue: "My brother / strong / my sister.",
    answers: ["My brother is stronger than my sister.", "My brother's stronger than my sister."],
    vi: "Anh trai tớ / khỏe / chị gái tớ", viFull: "Anh trai tớ khỏe hơn chị gái tớ." },
  { id: 3, cue: "My school / big / my brother's school.",
    answers: ["My school is bigger than my brother's school.", "My school is bigger than my brother's.",
      "My school's bigger than my brother's school.", "My school's bigger than my brother's."],
    vi: "Trường tớ / to / trường của anh trai tớ", viFull: "Trường tớ to hơn trường của anh trai tớ." },
  { id: 4, cue: "Living in the city / exciting / living in the countryside.",
    answers: ["Living in the city is more exciting than living in the countryside."],
    vi: "Sống ở thành phố / thú vị / sống ở nông thôn", viFull: "Sống ở thành phố thú vị hơn sống ở nông thôn." },
  { id: 5, cue: "Peter's exam results / bad / Nick's exam results.",
    answers: ["Peter's exam results are worse than Nick's exam results.", "Peter's exam results are worse than Nick's."],
    vi: "Kết quả thi của Peter / tệ / kết quả thi của Nick", viFull: "Kết quả thi của Peter tệ hơn kết quả thi của Nick." },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit3-grammar-g6.js.
// 15 scored items total: 5 Bài 3 + 5 Bài 4 + 5 Bài 5.
// Score is based on the FIRST attempt only — retry rounds are saved separately.
// ============================================================
const UNIT_ID = "g6-unit4";
const UNIT_LABEL = "Unit 4: My Neighbourhood";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return EX3_ITEMS.length + EX4_ITEMS.length + EX5_ITEMS.length;
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

// ---- The three exercises share one runner; each defines its body, its wiring and its ending ----
const EXERCISES = {
  // Bài 3 — type the comparative form into the blank
  ex3: {
    hostId: "ex3-runner",
    keyPrefix: "comp",
    body: item => `
      <div class="verb-sentence"><span class="verb-num">${item.id}.</span> ${item.before}
        <input type="text" class="fitb-input verb-blank comp-blank" autocomplete="off" autocapitalize="off" spellcheck="false"> ${item.after}</div>`,
    typed: true,
    grade: (host, item) => {
      const inp = host.querySelector(".comp-blank");
      if (!inp.value.trim()) return null;
      const ok = item.answers.some(a => normalize(a) === normalize(inp.value));
      inp.disabled = true;
      inp.classList.add(ok ? "fitb-correct" : "fitb-wrong");
      inp.style.borderColor = ok ? "#3fae4f" : "#e05c5c";
      return { answer: inp.value.trim(), ok };
    },
    emptyMsg: "Em gõ dạng so sánh hơn vào chỗ trống rồi bấm Kiểm tra nhé.",
    key: item => item.answers[0],
    question: item => `${item.before} ___ ${item.after}`,
    full: item => `${item.before} ${item.answers[0]} ${item.after}`,
    done: host => showSectionComplete(host, "Em đã hoàn thành Bài 3.", "Tiếp tục sang Bài 4 →", () => goToTab("panel-ex4"), "complete_exercise"),
  },
  // Bài 4 — tap the right phrase from the box
  ex4: {
    hostId: "ex4-runner",
    keyPrefix: "phrase",
    body: item => `
      <div class="verb-sentence"><span class="verb-num">${item.id}.</span> ${item.before} <span class="blank-line">________</span>${item.after}</div>
      <div class="phrase-options">
        ${EX4_BOX.map((p, pi) => `<button type="button" class="mcq-option phrase-opt" data-idx="${pi}"><span class="mcq-letter">${String.fromCharCode(65 + pi)}</span>${p}</button>`).join("")}
      </div>`,
    typed: false,
    key: item => item.answer,
    question: item => `${item.before} ___${item.after}`,
    full: item => `${item.before} ${item.answer}${item.after}`,
    done: host => showSectionComplete(host, "Em đã hoàn thành Bài 4.", "Tiếp tục sang Bài 5 →", () => goToTab("panel-ex5"), "complete_exercise"),
  },
  // Bài 5 — type the whole sentence
  ex5: {
    hostId: "ex5-runner",
    keyPrefix: "write",
    body: item => `
      <div class="sentence-cue"><span class="verb-num">${item.id}.</span> ${item.cue}</div>
      <input type="text" class="fitb-input write-input" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Gõ cả câu vào đây…">`,
    typed: true,
    grade: (host, item) => {
      const inp = host.querySelector(".write-input");
      if (!inp.value.trim()) return null;
      const ok = item.answers.some(a => normalize(a) === normalize(inp.value));
      inp.disabled = true;
      inp.classList.add(ok ? "fitb-correct" : "fitb-wrong");
      inp.style.borderColor = ok ? "#3fae4f" : "#e05c5c";
      return { answer: inp.value.trim(), ok };
    },
    emptyMsg: "Em gõ cả câu rồi bấm Kiểm tra nhé.",
    key: item => item.answers[0],
    question: item => item.cue,
    full: item => item.answers[0],
    done: host => showSectionComplete(host, "Em đã hoàn thành hết phần Grammar.", "Tiếp tục sang phần Exercise →", () => {
      window.location.href = "unit4-exercises-g6.html";
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
  const boxEl = document.getElementById("ex3-box");
  if (boxEl) boxEl.innerHTML = EX3_BOX.map(w => `<span>${w}</span>`).join("");
  runRound("ex3", EX3_ITEMS, 1);
  runRound("ex4", EX4_ITEMS, 1);
  runRound("ex5", EX5_ITEMS, 1);
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
          const chosen = EX4_BOX[Number(opt.dataset.idx)];
          const ok = chosen === item.answer;
          host.querySelectorAll(".phrase-opt").forEach(o => {
            o.disabled = true;
            if (EX4_BOX[Number(o.dataset.idx)] === item.answer) o.classList.add("correct");
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
