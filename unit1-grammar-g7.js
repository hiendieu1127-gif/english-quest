// ============================================================
// Grade 7 — Unit 1 (Hobbies) — Grammar data
// Source: teacher Hien's screenshot (present simple vs present continuous)
// Vietnamese translations: written by Claude, not in source — please review
// ============================================================

// ---- Multiple Choice (7 items) ----
const GRAMMAR_MC = [
  {
    en: "When water ___, it ___ from a liquid to a gas.",
    opts: ["boil; changes", "boils; change", "boils; changes"],
    answer: 2,
    viBlank: "Khi nước ......., nó ....... từ chất lỏng ra chất khí.",
    viFull: "Khi nước sôi, nó thay đổi từ chất lỏng ra chất khí.",
    optVi: ["sôi; thay đổi", "sôi; thay đổi", "sôi; thay đổi"],
  },
  {
    en: "My father ___ his hobby with me. He teaches me how to grow and take care of the flowers in our garden on Sundays.",
    opts: ["share", "shares", "sharing"],
    answer: 1,
    viBlank: "Bố tôi ....... sở thích này với tôi. Bố dạy tôi cách trồng và chăm sóc hoa trong vườn nhà vào Chủ nhật.",
    viFull: "Bố tôi chia sẻ sở thích này với tôi. Bố dạy tôi cách trồng và chăm sóc hoa trong vườn nhà vào Chủ nhật.",
    optVi: ["chia sẻ", "chia sẻ", "chia sẻ"],
  },
  {
    en: "___ your mother ___ doing yoga?",
    opts: ["Do; enjoy", "Does; enjoys", "Does; enjoy"],
    answer: 2,
    viBlank: "....... mẹ bạn ....... tập yoga không?",
    viFull: "Mẹ bạn có thích tập yoga không?",
    optVi: ["có; thích", "có; thích", "có; thích"],
  },
  {
    en: "My cooking lesson ___ at 9 a.m. every Saturday.",
    opts: ["starts", "start", "is starting"],
    answer: 0,
    viBlank: "Buổi học nấu ăn của tôi ....... lúc 9 giờ sáng mỗi thứ Bảy.",
    viFull: "Buổi học nấu ăn của tôi bắt đầu lúc 9 giờ sáng mỗi thứ Bảy.",
    optVi: ["bắt đầu", "bắt đầu", "bắt đầu"],
  },
  {
    en: "My parents ___ jogging every day. They only do it three times a week.",
    opts: ["go", "don't go", "doesn't go"],
    answer: 1,
    viBlank: "Bố mẹ tôi ....... chạy bộ mỗi ngày. Họ chỉ chạy ba lần một tuần.",
    viFull: "Bố mẹ tôi không đi chạy bộ mỗi ngày. Họ chỉ chạy ba lần một tuần.",
    optVi: ["đi", "không đi", "không đi"],
  },
  {
    en: "My sister likes ___ camping at the weekend.",
    opts: ["go", "goes", "going"],
    answer: 2,
    viBlank: "Chị tôi thích ....... cắm trại vào cuối tuần.",
    viFull: "Chị tôi thích đi cắm trại vào cuối tuần.",
    optVi: ["đi", "đi", "đi"],
  },
  {
    en: "My best friend hates ___ computer games.",
    opts: ["play", "plays", "playing"],
    answer: 2,
    viBlank: "Bạn thân của tôi ghét ....... trò chơi điện tử.",
    viFull: "Bạn thân của tôi ghét chơi trò chơi điện tử.",
    optVi: ["chơi", "chơi", "chơi"],
  },
];

// ---- Fill in the Blank — single passage, 8 blanks ----
// parts: array alternating plain text strings and blank objects { id, base, answer }
const FITB_PASSAGE_PARTS = [
  "My cousin, Mi, ",
  { id: 1, base: "love", answer: "loves" },
  " cooking. She ",
  { id: 2, base: "not go", answer: "doesn't go" },
  " to any cooking class. She ",
  { id: 3, base: "learn", answer: "learns" },
  " to cook from her mum, and sometimes she ",
  { id: 4, base: "get", answer: "gets" },
  " recipes from the Internet. She ",
  { id: 5, base: "share", answer: "shares" },
  " this hobby with her sister. I ",
  { id: 6, base: "enjoy", answer: "enjoy" },
  " cooking too, so Mi and I usually ",
  { id: 7, base: "make", answer: "make" },
  " pizza together when we ",
  { id: 8, base: "meet", answer: "meet" },
  " at the weekend.",
];

const FITB_VI_BLANK =
  "Chị họ của tôi, Mi, ....... nấu ăn. Chị ấy ....... đến lớp học nấu ăn nào. " +
  "Chị ấy ....... nấu ăn từ mẹ, và thỉnh thoảng chị ấy ....... công thức trên Internet. " +
  "Chị ấy ....... sở thích này với em gái. Tôi cũng ....... nấu ăn, vì vậy Mi và tôi thường ....... " +
  "pizza cùng nhau khi chúng tôi ....... vào cuối tuần.";

const FITB_VI_FULL =
  "Chị họ của tôi, Mi, thích nấu ăn. Chị ấy không đi đến lớp học nấu ăn nào. " +
  "Chị ấy học nấu ăn từ mẹ, và thỉnh thoảng chị ấy lấy công thức trên Internet. " +
  "Chị ấy chia sẻ sở thích này với em gái. Tôi cũng thích nấu ăn, vì vậy Mi và tôi thường làm " +
  "pizza cùng nhau khi chúng tôi gặp nhau vào cuối tuần.";

// ============================================================
// Results saving — same pattern as unit1-exercises.js (Grade 5):
// saveQueue serialization so rapid answers can't let an older write
// finish after a newer one and overwrite it.
// 15 scored items total: 7 MC + 8 FITB blanks.
// ============================================================
const UNIT_ID = "g7-unit1";
const UNIT_LABEL = "Unit 1: Hobbies";
let eqStudent = "";
let eqAnswers = {};
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return GRAMMAR_MC.length + FITB_PASSAGE_PARTS.filter(p => typeof p === "object").length;
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  // Only the FIRST attempt is scored. Retry rounds ("làm lại các câu sai") are
  // practice only, so they must never overwrite the first answer's result.
  if (eqAnswers[key]) return;
  eqAnswers[key] = { question, studentAnswer, correctAnswer, correct };
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
  };
  saveQueue = saveQueue.then(() => window.EQResults.saveResult(payload).catch(() => {}));
}

function normalize(s) {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.?!,]/g, "");
}
function sanitizeForSpeech(text) {
  return text.replace(/_+/g, "").replace(/\s+([.?!,])/g, "$1").replace(/\s+/g, " ").trim();
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
  runGrammarMC();
  renderFitbPassage();
  setupTabs();
});

// ---- Multiple Choice (round-based, one question at a time) ----
function runGrammarMC() {
  const host = document.getElementById("grammar-mc-list");
  if (!host) return;
  const items = GRAMMAR_MC;
  let i = 0;
  let wrongQueue = [];
  let round = 1;
  let queue = items;
  let translateOn = false;

  function renderDots() {
    return `<div class="runner-dots">${queue.map((_, idx) => `<span class="runner-dot ${idx < i ? "done" : idx === i ? "current" : ""}"></span>`).join("")}</div>`;
  }

  function next(wasCorrect, item) {
    if (!wasCorrect) wrongQueue.push(item);
    i++;
    if (i >= queue.length) {
      if (wrongQueue.length > 0) {
        queue = wrongQueue;
        wrongQueue = [];
        i = 0;
        round++;
        render();
      } else {
        window.EQMascot && window.EQMascot.show("mascot-box", "complete_unit");
        host.innerHTML = `
          <div class="runner-card">
            <div class="stage-complete">
              <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
              <h3>Xong rồi!</h3>
              <p>Em đã hoàn thành hết phần Multiple Choice.</p>
              <button type="button" class="btn btn-primary" id="grammar-mc-continue" style="margin-top:12px;">Tiếp tục sang Fill in the Blank →</button>
            </div>
          </div>`;
        const continueBtn = host.querySelector("#grammar-mc-continue");
        continueBtn.addEventListener("click", () => {
          const fitbTab = document.querySelector('.ex-tab[data-target="panel-fitb"]');
          fitbTab && fitbTab.click();
        });
      }
    } else {
      render();
    }
  }

  function render() {
    const item = queue[i];
    host.innerHTML = `
      <div class="runner-card">
        ${round > 1 ? `<div class="prompt-label" style="margin-bottom:6px;">🔁 Làm lại các câu sai — vòng ${round}</div>` : ""}
        ${renderDots()}
        <div class="quiz-item">
          <div class="quiz-q">${item.en}
            <button type="button" class="quiz-audio grammar-translate-btn">🌐 Dịch</button>
          </div>
          <div class="grammar-vi-question" style="display:none;"></div>
          <div class="quiz-opts">
            ${item.opts.map((o, oi) => `
              <div class="quiz-opt" data-opt="${oi}">
                <span class="opt-letter">${String.fromCharCode(97 + oi)}</span>${o}
                <span class="grammar-opt-vi" style="display:none;"></span>
                <div class="grammar-opt-full" style="display:none;"></div>
              </div>`).join("")}
          </div>
          <div class="fitb-feedback" id="grammar-mc-reveal"></div>
        </div>
      </div>`;

    const translateBtn = host.querySelector(".grammar-translate-btn");
    const viQuestionEl = host.querySelector(".grammar-vi-question");
    const optViEls = host.querySelectorAll(".grammar-opt-vi");
    translateBtn.addEventListener("click", () => {
      translateOn = !translateOn;
      viQuestionEl.style.display = translateOn ? "block" : "none";
      viQuestionEl.textContent = item.viBlank;
      optViEls.forEach((el, oi) => {
        el.style.display = translateOn ? "inline" : "none";
        el.textContent = translateOn ? ` (${item.optVi[oi]})` : "";
      });
    });

    let answered = false;
    host.querySelectorAll(".quiz-opt").forEach(opt => {
      opt.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = Number(opt.dataset.opt);
        const correct = chosen === item.answer;
        window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
        window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
        host.querySelectorAll(".quiz-opt").forEach(o => o.classList.add("quiz-opt-disabled"));
        const correctEl = host.querySelector(`.quiz-opt[data-opt="${item.answer}"]`);
        correctEl && correctEl.classList.add("correct");
        if (!correct) opt.classList.add("incorrect");
        const reveal = host.querySelector("#grammar-mc-reveal");
        if (!correct) {
          reveal.textContent = `Đáp án đúng: ${item.opts[item.answer]}`;
          reveal.className = "fitb-feedback no";
        }
        // full Vietnamese translation appears under the correct answer once revealed
        const fullEl = correctEl && correctEl.querySelector(".grammar-opt-full");
        if (fullEl) {
          fullEl.textContent = item.viFull;
          fullEl.style.display = "block";
        }
        eqRecordAndSave(`mc-${item.en}`, item.en, item.opts[chosen], item.opts[item.answer], correct);

        // Play the pronunciation audio, but always wait for a manual
        // "Tiếp theo →" tap before moving on — so students have time to
        // read the correct answer if they got it wrong (no auto-advance).
        const spokenText = sanitizeForSpeech(item.en.replace(/___/g, item.opts[item.answer].split("; ").join(" ")));
        window.EQSpeak && window.EQSpeak.speak(spokenText);

        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "btn btn-primary btn-sm";
        nextBtn.textContent = "Tiếp theo →";
        nextBtn.style.marginTop = "14px";
        reveal.insertAdjacentElement("afterend", nextBtn);
        nextBtn.addEventListener("click", () => next(correct, item));
      });
    });
  }
  render();
}

// ---- Fill in the Blank — whole passage, checked together ----
function renderFitbPassage() {
  const host = document.getElementById("grammar-fitb-passage");
  if (!host) return;
  const correctState = {};

  host.innerHTML = `
    <div class="runner-card">
      <div class="quiz-item">
        <div class="quiz-q">
          Điền dạng đúng của động từ trong ngoặc (hiện tại đơn hoặc tiếp diễn).
          <button type="button" class="quiz-audio grammar-translate-btn">🌐 Dịch</button>
        </div>
        <div class="grammar-vi-question" style="display:none;"></div>
        <p class="reading-card" id="fitb-passage-text" style="line-height:2.1;"></p>
        <div class="fitb-row">
          <button class="btn btn-secondary btn-sm" id="fitb-passage-check">Kiểm tra</button>
        </div>
        <div class="fitb-feedback" id="fitb-passage-feedback"></div>
      </div>
    </div>`;

  const textEl = host.querySelector("#fitb-passage-text");
  textEl.innerHTML = FITB_PASSAGE_PARTS.map(p => {
    if (typeof p === "string") return p;
    return `(${p.base}) <input type="text" class="fitb-input grammar-blank" style="width:110px; display:inline-block;" data-id="${p.id}" data-answer="${p.answer}">`;
  }).join("");

  const translateBtn = host.querySelector(".grammar-translate-btn");
  const viQuestionEl = host.querySelector(".grammar-vi-question");
  translateBtn.addEventListener("click", () => {
    const on = viQuestionEl.style.display === "none";
    const allCorrect = Object.keys(correctState).length === FITB_PASSAGE_PARTS.filter(p => typeof p === "object").length &&
      Object.values(correctState).every(Boolean);
    viQuestionEl.style.display = on ? "block" : "none";
    viQuestionEl.textContent = on ? (allCorrect ? FITB_VI_FULL : FITB_VI_BLANK) : "";
  });

  const feedback = host.querySelector("#fitb-passage-feedback");
  const checkBtn = host.querySelector("#fitb-passage-check");
  checkBtn.addEventListener("click", () => {
    const inputs = host.querySelectorAll(".grammar-blank:not(:disabled)");
    let allCorrectThisRound = true;
    inputs.forEach(input => {
      const id = input.dataset.id;
      const answer = input.dataset.answer;
      const correct = normalize(input.value) === normalize(answer);
      correctState[id] = correct || !!correctState[id];
      eqRecordAndSave(`fitb-${id}`, `Blank ${id}`, input.value, answer, correct);
      if (correct) {
        input.disabled = true;
        input.classList.add("fitb-correct");
        input.style.borderColor = "#3fae4f";
      } else {
        allCorrectThisRound = false;
        input.classList.add("fitb-wrong");
        input.style.borderColor = "#e05c5c";
      }
    });
    window.EQSound && (allCorrectThisRound ? window.EQSound.correct() : window.EQSound.wrong());
    const totalBlanks = FITB_PASSAGE_PARTS.filter(p => typeof p === "object").length;
    const doneCount = Object.values(correctState).filter(Boolean).length;
    if (doneCount >= totalBlanks) {
      feedback.textContent = "✓ Hoàn thành cả đoạn văn!";
      feedback.className = "fitb-feedback ok";
      window.EQMascot && window.EQMascot.show("mascot-box", "complete_exercise");
      checkBtn.disabled = true;
      // if translation panel is open, upgrade it to the full version automatically
      if (viQuestionEl.style.display !== "none") viQuestionEl.textContent = FITB_VI_FULL;
      // show the button to move on to Exercises (only once)
      if (!host.querySelector("#grammar-fitb-continue")) {
        const contWrap = document.createElement("div");
        contWrap.style.marginTop = "14px";
        contWrap.innerHTML = `<button type="button" class="btn btn-primary" id="grammar-fitb-continue" style="width:100%;white-space:normal;">Em đã hoàn thành hết phần Grammar. Tiếp tục sang phần Exercise &rarr;</button>`;
        feedback.insertAdjacentElement("afterend", contWrap);
        document.getElementById("grammar-fitb-continue").addEventListener("click", () => {
          window.location.href = "unit1-exercises-g7.html";
        });
      }
    } else {
      feedback.textContent = `Đã đúng ${doneCount}/${totalBlanks} — sửa lại các ô màu đỏ rồi kiểm tra lại nhé.`;
      feedback.className = "fitb-feedback no";
    }
  });
}

function setupTabs() {
  const tabs = document.querySelectorAll(".ex-tab");
  const panels = document.querySelectorAll(".ex-panel");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const panel = document.getElementById(tab.dataset.target);
      panel.classList.add("active");
      window.scrollTo({ top: document.querySelector(".ex-tabs").offsetTop - 90, behavior: "smooth" });
    });
  });
}
