// ============================================================
// Grade 6 — Unit 3 (My Friends) — Grammar data
// Source: teacher Hien's screenshots (present continuous theory, book exercises 4 & 5)
// Exercise 4 key from the book; exercise 5 key written by Claude, approved by cô Hiền.
// Vietnamese translations: written by Claude, not in source — please review
// Scored: Present continuous (6 sentences) + Simple or continuous (6 sentences) = 12 total.
// The theory card at the top of the page is reading only, not scored.
// ============================================================

// parts: plain text strings and blanks { base, answers } — base is the verb in
// brackets ("" when the book gives none); answers[0] is shown as the key, the
// rest are also accepted. "<br>" starts the second speaker's line.
// A sentence counts as ONE scored item: correct only when every blank is right.

// ---- Exercise 4: Put the verbs in brackets into the present continuous (6 sentences) ----
const PC_ITEMS = [
  { id: 1, parts: ["Could you call back? She ", { base: "take", answers: ["is taking"] }, " her dog out for a walk."],
    vi: "Bạn gọi lại sau được không? Cô ấy đang dắt chó đi dạo." },
  { id: 2, parts: ["– Where's Lisa?<br>– She ", { base: "help", answers: ["is helping"] }, " Mum in the kitchen."],
    vi: "– Lisa đâu rồi? – Bạn ấy đang giúp mẹ trong bếp." },
  { id: 3, parts: ["Listen! Someone ", { base: "knock", answers: ["is knocking"] }, " at the door."],
    vi: "Nghe kìa! Có ai đó đang gõ cửa." },
  { id: 4, parts: ["– ", { base: "", answers: ["Are"] }, " you ", { base: "do", answers: ["doing"] }, " your homework?<br>– No, I'm not. I ", { base: "write", answers: ["am writing", "'m writing"] }, " a letter to my parents."],
    vi: "– Bạn đang làm bài tập về nhà à? – Không. Tớ đang viết thư cho bố mẹ." },
  { id: 5, parts: ["– Who ", { base: "", answers: ["is"] }, " he ", { base: "talk", answers: ["talking"] }, " about?<br>– His best friend."],
    vi: "– Cậu ấy đang nói về ai vậy? – Về bạn thân của cậu ấy." },
  { id: 6, parts: ["– ", { base: "", answers: ["Are"] }, " they ", { base: "read", answers: ["reading"] }, " books in the library?<br>– Yes, they are."],
    vi: "– Họ đang đọc sách trong thư viện à? – Đúng vậy." },
];

// ---- Exercise 5: Put the verbs in brackets into the present simple or present continuous (6 sentences) ----
const PS_ITEMS = [
  { id: 1, parts: ["This ", { base: "be", answers: ["is"] }, " my best friend, Nam."],
    vi: "Đây là bạn thân của tớ, Nam." },
  { id: 2, parts: ["He ", { base: "wear", answers: ["is wearing"] }, " a T-shirt and shorts today."],
    vi: "Hôm nay cậu ấy mặc áo phông và quần soóc." },
  { id: 3, parts: ["Look! He ", { base: "play", answers: ["is playing"] }, " football now."],
    vi: "Nhìn kìa! Bây giờ cậu ấy đang chơi bóng đá." },
  { id: 4, parts: ["He ", { base: "like", answers: ["likes"] }, " eating apples."],
    vi: "Cậu ấy thích ăn táo." },
  { id: 5, parts: ["Apples ", { base: "be", answers: ["are"] }, " good for our health."],
    vi: "Táo tốt cho sức khoẻ của chúng ta." },
  { id: 6, parts: ["Now he ", { base: "look", answers: ["is looking"] }, " at me and ", { base: "smile", answers: ["smiling", "is smiling"] }, " at me."],
    vi: "Bây giờ cậu ấy đang nhìn tớ và mỉm cười với tớ." },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit1-grammar-g6.js.
// 12 scored items total: 6 Present continuous + 6 Simple or continuous.
// ============================================================
const UNIT_ID = "g6-unit3";
const UNIT_LABEL = "Unit 3: My Friends";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return PC_ITEMS.length + PS_ITEMS.length;
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

// Typed answers: ignore case, extra spaces, end punctuation and curly apostrophes.
function normalize(s) {
  return String(s).trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").replace(/[.?!,]/g, "");
}

// AI voice is off on the grammar page — only the vocabulary cards on the Exercises page speak.
function speakChunk() {}

// "<br>" between the two speakers → a space in plain text (Dashboard, speech).
function plain(html) {
  return html.replace(/<br>/g, " ");
}
function blanksOf(item) {
  return item.parts.filter(p => typeof p === "object");
}
function fullSentence(item) {
  return item.parts.map(p => (typeof p === "string" ? p : p.answers[0])).join("");
}
function questionText(item) {
  return plain(item.parts.map(p => (typeof p === "string" ? p : `___${p.base ? ` (${p.base})` : ""}`)).join(""));
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

// The two exercises share one runner; each has its own host, key prefix and ending.
const EXERCISES = {
  pc: {
    hostId: "pc-runner",
    done: host => showSectionComplete(host, "Em đã hoàn thành phần Present continuous.", "Tiếp tục sang Simple or continuous →", () => {
      const tab = document.querySelector('.ex-tab[data-target="panel-ps"]');
      tab && tab.click();
    }, "complete_exercise"),
  },
  ps: {
    hostId: "ps-runner",
    done: host => showSectionComplete(host, "Em đã hoàn thành hết phần Grammar.", "Tiếp tục sang phần Exercise →", () => {
      window.location.href = "unit3-exercises-g6.html";
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
  runVerbRound("pc", PC_ITEMS, 1);
  runVerbRound("ps", PS_ITEMS, 1);
  setupTabs();
});

// ---- Put the verbs (one sentence at a time) ----
// Wrong sentences automatically come back in a "Vòng 2" retry round (saved as retries, not re-scored).
function runVerbRound(exKey, items, round) {
  const ex = EXERCISES[exKey];
  const host = document.getElementById(ex.hostId);
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
          <button type="button" class="eq-translate-btn" id="${exKey}-translate">🔤 Dịch</button>
          <div class="tf-vi" id="${exKey}-vi" style="display:none;">${item.vi}</div>
          <div class="fitb-row" style="margin-top:12px;">
            <button class="btn btn-primary btn-sm" id="${exKey}-check">Kiểm tra</button>
          </div>
          <div class="fitb-feedback" id="${exKey}-feedback"></div>
        </div>
      </div>`;

    const inputs = Array.from(host.querySelectorAll(".verb-blank"));
    const translateBtn = host.querySelector(`#${exKey}-translate`);
    const viEl = host.querySelector(`#${exKey}-vi`);
    translateBtn.addEventListener("click", () => {
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      translateBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });

    const checkBtn = host.querySelector(`#${exKey}-check`);
    const feedback = host.querySelector(`#${exKey}-feedback`);
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
      speakChunk(plain(fullSentence(item)));

      eqRecordAndSave(`${exKey}-${item.id}`, questionText(item), inputs.map(inp => inp.value.trim()).join(" / "), key, allCorrect);
      if (!allCorrect) wrongItems.push(item);

      nextButton(feedback, () => {
        i++;
        if (i < total) { render(); return; }
        if (wrongItems.length) { runVerbRound(exKey, wrongItems, round + 1); return; }
        ex.done(host);
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
