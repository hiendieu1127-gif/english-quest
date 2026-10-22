// ============================================================
// Grade 6 — Unit 2 (My House) — Exercises data
// Source: teacher Hien's screenshots (conversation, phrase table, True/False,
// verbs in brackets, Pronunciation /s/ /z/)
// Vietnamese translations of the T/F and verb sentences: written by Claude — please review
// Scored sections: True/False (5) + Verbs (5) + Pronunciation (6 + 6) = 22 total.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================

const READING_HTML =
  "<b>Mum:</b> We're <mark>moving to the new flat</mark> <mark>next month</mark>. Do you want to have a new bed?<br>" +
  "<b>Mi:</b> No, I don't, Mum. I love my <mark>old bed</mark>. It's so <mark>comfortable</mark>. But can I <mark>buy a new poster</mark>?<br>" +
  "<b>Mum:</b> You have three posters <mark>already</mark>. You can <mark>put them on the wall</mark> in your new room.<br>" +
  "<b>Mi:</b> Yes, Mum. I <mark>want to have</mark> a <mark>family photo</mark> <mark>on my desk</mark>. There is only <mark>a lamp</mark> on it now.<br>" +
  "<b>Mum:</b> That's <mark>a good idea</mark>. Oh, where do you want to put your desk?<br>" +
  "<b>Mi:</b> <mark>Next to</mark> my bed, Mum. I also want <mark>a small plant</mark> in my room.<br>" +
  "<b>Mum:</b> That's fine. It can go <mark>between</mark> the <mark>bookshelf</mark> and the desk.";

// ---- Vocabulary (practice only, tap to hear + flip for meaning) ----
const VOCAB_ITEMS = [
  { en: "move to a new flat", vi: "chuyển đến căn hộ mới" },
  { en: "next month", vi: "tháng tới" },
  { en: "comfortable", vi: "thoải mái" },
  { en: "an old bed", vi: "một chiếc giường cũ" },
  { en: "buy a new poster", vi: "mua một bức tranh treo tường mới" },
  { en: "put something on the wall", vi: "đặt / treo thứ gì lên tường" },
  { en: "family photo", vi: "ảnh gia đình" },
  { en: "on my desk", vi: "trên bàn học của tôi" },
  { en: "a lamp", vi: "một chiếc đèn" },
  { en: "have a good idea", vi: "có một ý tưởng hay" },
  { en: "next to", vi: "bên cạnh" },
  { en: "between A and B", vi: "ở giữa A và B" },
  { en: "bookshelf", vi: "giá sách" },
  { en: "a small plant", vi: "một cây cảnh nhỏ" },
  { en: "want to do something", vi: "muốn làm gì" },
  { en: "already", vi: "đã, rồi" },
];

// ---- True / False (5 items) ----
const TF_ITEMS = [
  {
    en: "Mi and her family are moving to a new flat next month.",
    vi: "Mi và gia đình sẽ chuyển đến một căn hộ mới vào tháng tới.",
    answer: "T",
  },
  {
    en: "Mi wants to have a new bed.",
    vi: "Mi muốn có một chiếc giường mới.",
    answer: "F",
    why: "No, I don't, Mum. I love my old bed.",
  },
  {
    en: "Mi has three posters already.",
    vi: "Mi đã có ba bức tranh treo tường rồi.",
    answer: "T",
  },
  {
    en: "There is only a lamp on Mi's desk now.",
    vi: "Bây giờ trên bàn của Mi chỉ có một chiếc đèn.",
    answer: "T",
  },
  {
    en: "Mi wants to put a small plant next to her bed.",
    vi: "Mi muốn đặt một cây cảnh nhỏ bên cạnh giường.",
    answer: "F",
    why: "The plant can go between the bookshelf and the desk.",
  },
];

// ---- Give the correct form of the verbs in brackets (5 sentences, 5 blanks) ----
const VERB_ITEMS = [
  { id: 1, parts: ["Mi ", { base: "love", answers: ["loves"] }, " her old bed because it is comfortable."],
    vi: "Mi yêu chiếc giường cũ của mình vì nó rất thoải mái." },
  { id: 2, parts: ["They ", { base: "move", answers: ["are moving", "'re moving"] }, " to a new flat next month."],
    vi: "Họ sẽ chuyển đến một căn hộ mới vào tháng tới." },
  { id: 3, parts: ["Mi ", { base: "want", answers: ["wants"] }, " to buy a new poster."],
    vi: "Mi muốn mua một bức tranh treo tường mới." },
  { id: 4, parts: ["There ", { base: "be", answers: ["is"] }, " only a lamp on her desk."],
    vi: "Trên bàn của cô ấy chỉ có một chiếc đèn." },
  { id: 5, parts: ["Her mother ", { base: "have", answers: ["has"] }, " a good idea."],
    vi: "Mẹ cô ấy có một ý tưởng hay." },
];

// ---- Pronunciation: final s → /s/ or /z/ (2 parts, 6 + 6 words) ----
// Part 1 = the book's 6 words. Part 2 replaces the book's open "write three words" task
// with 6 Unit 2 words to sort (written by Claude — please review).
// Every word has a 🔊 button (AI voice) so students can hear it before choosing.
const PRON_PARTS = [
  {
    key: "pron1",
    title: "Part 1 — Match the words which have the final s with /s/ or /z/.",
    items: [
      { word: "beds", answer: "/z/" },
      { word: "caps", answer: "/s/" },
      { word: "posters", answer: "/z/" },
      { word: "clocks", answer: "/s/" },
      { word: "villas", answer: "/z/" },
      { word: "lights", answer: "/s/" },
    ],
  },
  {
    key: "pron2",
    title: "Part 2 — Put the words into the right column: /s/ or /z/.",
    items: [
      { word: "lamps", answer: "/s/" },
      { word: "rooms", answer: "/z/" },
      { word: "books", answer: "/s/" },
      { word: "sofas", answer: "/z/" },
      { word: "desks", answer: "/s/" },
      { word: "tables", answer: "/z/" },
    ],
  },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as unit1-exercises-g6.js.
// 22 scored items total: 5 True/False + 5 verbs + 12 Pronunciation.
// Score is based on the FIRST attempt only — retry rounds are saved separately.
// ============================================================
const UNIT_ID = "g6-unit2";
const UNIT_LABEL = "Unit 2: My House";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function verbBlanks(item) {
  return item.parts.map((p, pi) => ({ p, pi })).filter(x => typeof x.p === "object");
}

function eqTotalItems() {
  return TF_ITEMS.length + VERB_ITEMS.reduce((sum, item) => sum + verbBlanks(item).length, 0)
    + PRON_PARTS.reduce((sum, part) => sum + part.items.length, 0);
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
function speakChunk(text) {
  if (!window.EQSpeak) return;
  window.EQSpeak.speak(text.trim() === "I" ? "aye" : text);
}

// ---- Shared "section complete" screen (Xong rồi! + optional "next section" button) ----
// Each crumb is its own section. Pronunciation has 2 parts: the card BETWEEN them passes
// onNextPart and gets data-part-done="1", so section-lock.js does not lock the section early.
function showSectionComplete(host, message, hasNext, mascotType, onNextPart) {
  window.EQMascot && window.EQMascot.show("mascot-box", mascotType || "complete_exercise");
  host.innerHTML = `
    <div class="runner-card">
      <div class="stage-complete"${onNextPart ? ' data-part-done="1"' : ""}>
        <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>Xong rồi!</h3>
        <p>${message}</p>
        ${onNextPart ? `<button type="button" class="btn btn-primary part-next-btn" style="margin-top:14px;">Sang Part 2 →</button>` : ""}
        ${hasNext ? `<p style="color:#6b6b76;margin-top:4px;">Sẵn sàng cho dạng bài tiếp theo chưa?</p><button type="button" class="btn btn-primary section-next-btn" style="margin-top:14px;">Dạng bài tiếp theo →</button>` : ""}
      </div>
    </div>`;
  if (onNextPart) host.querySelector(".part-next-btn").addEventListener("click", onNextPart);
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
  runPronRound(0, PRON_PARTS[0].items.map((t, idx) => ({ ...t, origIdx: idx })), 1);
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
      speakChunk(VOCAB_ITEMS[Number(card.dataset.idx)].en);
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
        showSectionComplete(host, "Em đã hoàn thành phần Verbs.", true, "complete_exercise");
      });
    });
  }
  render();
}

// ---- Pronunciation (scored: 6 + 6) — tap 🔊 to hear the word, then choose /s/ or /z/ ----
// Same flow as True/False: wrong words come back in a "Vòng 2" retry round.
function runPronRound(partIdx, items, round) {
  const host = document.getElementById("pron-list");
  if (!host) return;
  const part = PRON_PARTS[partIdx];
  const total = items.length;
  let answeredCount = 0;
  const wrongItems = [];

  host.innerHTML = `<div class="quiz-q" style="margin-bottom:10px;">${part.title}</div>` + retryHeader(round) + items.map((t, idx) => `
    <div class="tf-item pron-item" data-idx="${idx}">
      <button type="button" class="pron-word" data-idx="${idx}">🔊 ${t.word}</button>
      <div class="tf-btn-row">
        <button type="button" class="tf-btn" data-choice="/s/">/s/</button>
        <button type="button" class="tf-btn" data-choice="/z/">/z/</button>
      </div>
      <div class="fitb-feedback" id="pron-feedback-${idx}"></div>
    </div>`).join("");

  if (round > 1 || partIdx > 0) host.scrollIntoView({ behavior: "smooth", block: "start" });

  host.querySelectorAll(".pron-word").forEach(btn => {
    btn.addEventListener("click", () => speakChunk(items[Number(btn.dataset.idx)].word));
  });

  host.querySelectorAll(".pron-item").forEach((itemEl) => {
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
        const feedback = document.getElementById(`pron-feedback-${idx}`);
        feedback.textContent = correct ? `✓ Chính xác! ${t.word} → ${t.answer}` : `Đáp án đúng: ${t.word} → ${t.answer}`;
        feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
        speakChunk(t.word);

        eqRecordAndSave(`${part.key}-${t.origIdx}`, `${t.word} (final s)`, choice, t.answer, correct);
        if (!correct) wrongItems.push(t);

        answeredCount++;
        if (answeredCount === total) {
          setTimeout(() => {
            if (wrongItems.length > 0) { runPronRound(partIdx, wrongItems, round + 1); return; }
            const nextIdx = partIdx + 1;
            if (nextIdx < PRON_PARTS.length) {
              showSectionComplete(host, `Em đã hoàn thành Part ${nextIdx}.`, false, "complete_exercise", () => {
                runPronRound(nextIdx, PRON_PARTS[nextIdx].items.map((x, i) => ({ ...x, origIdx: i })), 1);
              });
            } else {
              showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 2.", false, "complete_unit");
            }
          }, 900);
        }
      });
    });
  });
}

// ---- Breadcrumb-style navigation between the 5 sections ----
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
