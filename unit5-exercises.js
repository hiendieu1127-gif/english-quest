// ============================================================
// Grade 5 — Unit 5 (My Future Job) — Exercises
// Source: teacher Hien's workbook images (Global Success 5, Unit 5)
//
// 5 sections, in this order:
//   1 Reading  2 Vocabulary  3 True / False  4 Sentence Ordering  5 Quiz
// Reading = the John passage ("Read and answer the questions"), no Vietnamese translation (Hien's choice).
// True / False and Sentence Ordering = 5 + 5 items made by Claude from the passage (approved by Hien).
// Quiz: Listen and circle (Track 9) → Listen and fill in the blank (typed) → Read and complete →
//   Choose the correct answers.
//   The two listening parts turn on by themselves once all 6 recordings are on the site
//   (g5-u5-circle-1/2.wav and g5-u5-fill-1..4.wav in the repo root) — see checkAudio().
//
// Vietnamese: vocab card meanings and question translations were written by Claude — Hien reviewed.
// ============================================================

const SCORE_ORDERING = true;

// Set at start-up by checkAudio(): true only when every recording below is reachable,
// so the listening parts (and their questions in eqTotalItems) appear together.
let AUDIO_READY = false;

// ============================================================
// 1) READING  (practice only)
// ============================================================
const READING_HTML =
  "My name is John. I'd like to be a <mark>pilot</mark> because I <mark>enjoy flying</mark>. As a pilot, " +
  "I can <mark>travel</mark> to many different places <mark>around the world</mark>. I would also like " +
  "to be a <mark>reporter</mark>. I hate <mark>sitting in an office all day</mark>. I like travelling and " +
  "<mark>seeing new things</mark>. Sometimes, I would like to be a <mark>firefighter</mark> because " +
  "I want to help people. But I would like to be a pilot the most.";

// ============================================================
// 2) VOCABULARY  (practice only) — the highlighted words, tap to hear + flip
// ============================================================
const VOCAB_ITEMS = [
  { en: "pilot", vi: "phi công" },
  { en: "enjoy flying", vi: "thích bay" },
  { en: "travel", vi: "đi du lịch" },
  { en: "around the world", vi: "khắp thế giới" },
  { en: "reporter", vi: "phóng viên" },
  { en: "sitting in an office all day", vi: "ngồi trong văn phòng cả ngày" },
  { en: "seeing new things", vi: "khám phá những điều mới" },
  { en: "firefighter", vi: "lính cứu hỏa" },
];

// ============================================================
// 3) TRUE / FALSE  (scored: 5) — answers from the passage
// ============================================================
const TF_ITEMS = [
  { id: 1, en: "John would like to be a pilot because he enjoys flying.", answer: "T",
    vi: "John muốn làm phi công vì bạn ấy thích bay." },
  { id: 2, en: "As a pilot, John can travel to many different places.", answer: "T",
    vi: "Là phi công, John có thể đi đến nhiều nơi khác nhau." },
  { id: 3, en: "John likes sitting in an office all day.", answer: "F",
    vi: "John thích ngồi trong văn phòng cả ngày." },
  { id: 4, en: "John would like to be a firefighter because he wants to help people.", answer: "T",
    vi: "John muốn làm lính cứu hỏa vì bạn ấy muốn giúp đỡ mọi người." },
  { id: 5, en: "John would like to be a reporter the most.", answer: "F",
    vi: "John muốn làm phóng viên nhất." },
];

// ============================================================
// 4) SENTENCE ORDERING  (scored: 5) — all sentences come from the passage
// ============================================================
const ORDER_ITEMS = [
  {
    id: 1,
    chunks: [
      { en: "I'd like", vi: "mình muốn" },
      { en: "to be a pilot", vi: "trở thành phi công" },
      { en: "because", vi: "vì" },
      { en: "I enjoy flying.", vi: "mình thích bay." },
    ],
    answer: "I'd like to be a pilot because I enjoy flying.",
    answerVi: "Mình muốn trở thành phi công vì mình thích bay.",
  },
  {
    id: 2,
    chunks: [
      { en: "I can travel", vi: "mình có thể đi" },
      { en: "to many different places", vi: "đến nhiều nơi khác nhau" },
      { en: "around the world.", vi: "trên khắp thế giới." },
    ],
    answer: "I can travel to many different places around the world.",
    answerVi: "Mình có thể đi đến nhiều nơi khác nhau trên khắp thế giới.",
  },
  {
    id: 3,
    chunks: [
      { en: "I would also like", vi: "mình cũng muốn" },
      { en: "to be", vi: "trở thành" },
      { en: "a reporter.", vi: "phóng viên." },
    ],
    answer: "I would also like to be a reporter.",
    answerVi: "Mình cũng muốn trở thành phóng viên.",
  },
  {
    id: 4,
    chunks: [
      { en: "I like travelling", vi: "mình thích đi du lịch" },
      { en: "and", vi: "và" },
      { en: "seeing new things.", vi: "khám phá những điều mới." },
    ],
    answer: "I like travelling and seeing new things.",
    answerVi: "Mình thích đi du lịch và khám phá những điều mới.",
  },
  {
    id: 5,
    chunks: [
      { en: "I would like", vi: "mình muốn" },
      { en: "to be a firefighter", vi: "trở thành lính cứu hỏa" },
      { en: "because", vi: "vì" },
      { en: "I want to help people.", vi: "mình muốn giúp đỡ mọi người." },
    ],
    answer: "I would like to be a firefighter because I want to help people.",
    answerVi: "Mình muốn trở thành lính cứu hỏa vì mình muốn giúp đỡ mọi người.",
  },
];

// ============================================================
// 5) QUIZ
// ============================================================

// ---- 5a) Listen and circle (Track 9) — answers from Hien: 1-b, 2-a ----
const LISTEN_ITEMS = [
  {
    id: 1,
    stem: "I'd like to be a ___ in the future.",
    options: [{ key: "a", text: "teacher" }, { key: "b", text: "dentist" }, { key: "c", text: "doctor" }],
    answer: "b",
    audio: "g5-u5-circle-1.wav",
    audioNote: "Bấm ▶ để nghe, rồi chọn đáp án.",
    noTranslate: true,
  },
  {
    id: 2,
    stem: "Why would you like to be a ___?",
    options: [{ key: "a", text: "writer" }, { key: "b", text: "teacher" }, { key: "c", text: "farmer" }],
    answer: "a",
    audio: "g5-u5-circle-2.wav",
    audioNote: "Bấm ▶ để nghe, rồi chọn đáp án.",
    noTranslate: true,
  },
];

// ---- 5b) Listen and fill in the blank (workbook "Read and complete" with pictures, turned into
//      a listening task without pictures) — one recording per sentence, the student TYPES the word ----
const FILL_WORDS = ["writer", "firefighter", "gardener", "reporter"];
const FILL_ITEMS = [
  { id: 1, stem: "I'd like to be a ___ in the future. I want to write a lot of stories for children.", answer: "writer",
    vi: "Mình muốn trở thành ___ trong tương lai. Mình muốn viết thật nhiều truyện cho trẻ em." },
  { id: 2, stem: "My brother is a ___. He's very tall and strong.", answer: "firefighter",
    vi: "Anh trai mình là ___. Anh ấy rất cao và khỏe." },
  { id: 3, stem: "A: Why would you like to be a ___? B: Because I love trees and flowers.", answer: "gardener",
    vi: "A: Tại sao bạn muốn trở thành ___? B: Bởi vì mình yêu cây và hoa." },
  { id: 4, stem: "A: Is your dream job a ___? B: Yes, it is. I like travelling to many places.", answer: "reporter",
    vi: "A: Công việc mơ ước của bạn là ___ phải không? B: Đúng vậy. Mình thích đi đến nhiều nơi." },
].map(x => ({ ...x, audio: `g5-u5-fill-${x.id}.wav` }));

// ---- 5c) Read and complete — a/b/c. Answers (workbook key): 1-b, 2-c, 3-a, 4-c ----
const CHOOSE_ITEMS = [
  { id: 1, stem: "What ___ to be in the future?",
    options: [{ key: "a", text: "you would like" }, { key: "b", text: "would you like" }, { key: "c", text: "you like" }], answer: "b",
    vi: "Bạn muốn trở thành gì trong tương lai?" },
  { id: 2, stem: "I ___ a teacher.",
    options: [{ key: "a", text: "would like" }, { key: "b", text: "like to work" }, { key: "c", text: "would like to be" }], answer: "c",
    vi: "Mình muốn trở thành giáo viên." },
  { id: 3, stem: "Why would you ___ a reporter?",
    options: [{ key: "a", text: "like to be" }, { key: "b", text: "to be" }, { key: "c", text: "would like" }], answer: "a",
    vi: "Tại sao bạn muốn trở thành phóng viên?" },
  { id: 4, stem: "I'd like to be a reporter because ___ report the news.",
    options: [{ key: "a", text: "I like" }, { key: "b", text: "I'd like" }, { key: "c", text: "I'd like to" }], answer: "c",
    vi: "Mình muốn trở thành phóng viên vì mình muốn đưa tin." },
];

// ---- 5d) Choose the correct answers — a/b. Answers (workbook key): 1-a, 2-b, 3-b, 4-a ----
// The question is spoken first; after answering, question + correct answer are read aloud.
const ANSWER_ITEMS = [
  { id: 1, stem: "A: What would you like to be in the future? B: ___",
    options: [{ key: "a", text: "I'd like to be a dentist." }, { key: "b", text: "I like a dentist." }], answer: "a",
    speakBefore: "What would you like to be in the future?",
    vi: "A: Bạn muốn làm gì trong tương lai? B: ___", optVi: ["a. Mình muốn làm nha sĩ.", "b. Mình thích một nha sĩ."] },
  { id: 2, stem: "A: Would you like to be a doctor in the future? B: ___",
    options: [{ key: "a", text: "No, thank you." }, { key: "b", text: "No. It's not my dream job." }], answer: "b",
    speakBefore: "Would you like to be a doctor in the future?",
    vi: "A: Bạn có muốn làm bác sĩ trong tương lai không? B: ___", optVi: ["a. Không, cảm ơn.", "b. Không. Đó không phải công việc mơ ước của mình."] },
  { id: 3, stem: "A: Why would you like to be a writer in the future? B: ___",
    options: [{ key: "a", text: "Yes, I would." }, { key: "b", text: "Because I'd like to write stories." }], answer: "b",
    speakBefore: "Why would you like to be a writer in the future?",
    vi: "A: Tại sao bạn muốn làm nhà văn trong tương lai? B: ___", optVi: ["a. Có, mình muốn.", "b. Bởi vì mình muốn viết truyện."] },
  { id: 4, stem: "A: Why would your sister like to be a firefighter? B: ___",
    options: [{ key: "a", text: "Because she'd like to help people." }, { key: "b", text: "Because she'd like to report the news." }], answer: "a",
    speakBefore: "Why would your sister like to be a firefighter?",
    vi: "A: Tại sao chị/em gái bạn muốn làm lính cứu hỏa? B: ___", optVi: ["a. Bởi vì chị/em ấy muốn giúp đỡ mọi người.", "b. Bởi vì chị/em ấy muốn đưa tin."] },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as the other exercise pages.
// Score is based on the FIRST attempt only — retry rounds ("Vòng 2, 3...") are
// practice and never change the saved score.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================
const UNIT_ID = "unit5"; // Grade 5 keeps its historic un-prefixed unit ids (same as Vocabulary)
const UNIT_LABEL = "Unit 5: My Future Job";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function listenEnabled() {
  return AUDIO_READY;
}

function eqTotalItems() {
  return (
    TF_ITEMS.length +
    (SCORE_ORDERING ? ORDER_ITEMS.length : 0) +
    (listenEnabled() ? LISTEN_ITEMS.length + FILL_ITEMS.length : 0) +
    CHOOSE_ITEMS.length +
    ANSWER_ITEMS.length
  );
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

// ============================================================
// Small helpers
// ============================================================
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Shuffle, but never hand the student the already-correct order.
function shuffleNotSame(arr) {
  if (arr.length < 2) return arr.slice();
  let out = shuffle(arr);
  let guard = 0;
  while (out.every((x, i) => x === arr[i]) && guard++ < 20) out = shuffle(arr);
  return out;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderDots(current, total) {
  let dots = "";
  for (let idx = 0; idx < total; idx++) {
    dots += `<span class="runner-dot ${idx < current ? "done" : idx === current ? "current" : ""}"></span>`;
  }
  return `<div class="runner-dots">${dots}</div>`;
}

function roundHeader(round) {
  return round > 1
    ? `<div style="background:#fff3cd;color:#8a6b00;font-weight:700;padding:10px 16px;border-radius:12px;margin-bottom:14px;text-align:center;">🔄 Làm lại câu sai — Vòng ${round}</div>`
    : "";
}

// A bare "I" (the whole chunk) is misread by some voices as the spelled-out letter
// ("capital I"). "aye" is a homophone that speaks correctly. Only the spoken text changes.
function say(text) {
  if (!window.EQSpeak || !text) return;
  const spoken = text.trim() === "I" ? "aye" : text;
  window.EQSpeak.speak(spoken);
}

function sfx(correct) {
  window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
  window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
}

function optionText(item, key) {
  const o = item.options.find(x => x.key === key);
  return o ? o.text : "";
}

function fullSentence(item) {
  if (item.fillText) return item.stem.replace(/a\(n\) ___/, item.fillText).replace("___", item.fillText);
  return item.stem.replace("___", optionText(item, item.answer));
}

// What the voice reads: the full sentence without the "A:" / "B:" speaker labels.
function spokenSentence(item) {
  return fullSentence(item).replace(/\b[AB]: /g, "");
}

// ---- "Xong rồi!" screen shared by every scored section / quiz part ----
// onNext (optional) overrides what the button does; by default it jumps to the next section tab.
function showSectionComplete(host, message, hasNext, mascotType, onNext, nextLabel) {
  window.EQMascot && window.EQMascot.show("mascot-box", mascotType || "complete_exercise");
  host.innerHTML = `
    <div class="stage-complete"${onNext ? ' data-part-done="1"' : ""}>
      <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h3>Xong rồi!</h3>
      <p>${message}</p>
      ${hasNext ? `<p style="color:#6b6b76;margin-top:4px;">Sẵn sàng cho dạng bài tiếp theo chưa?</p><button type="button" class="btn btn-primary section-next-btn" style="margin-top:14px;">${nextLabel || "Dạng bài tiếp theo →"}</button>` : ""}
    </div>`;
  if (hasNext) {
    const btn = host.querySelector(".section-next-btn");
    btn && btn.addEventListener("click", () => {
      if (onNext) { onNext(); return; }
      const activePanel = document.querySelector(".ex-panel.active");
      const crumbs = Array.from(document.querySelectorAll(".eq-crumb"));
      const idx = crumbs.findIndex(c => c.dataset.target === activePanel.id);
      if (idx >= 0 && idx < crumbs.length - 1) switchPanel(crumbs[idx + 1].dataset.target);
    });
  }
}

// ============================================================
// Generic one-question-at-a-time runner
//  - wrong answers come back automatically in "Vòng 2, 3..." until all are right
//  - only round 1 is saved to the Dashboard (and only when `scored` is true)
//  - after answering, NO timer: a manual "Tiếp theo →" button moves on
// renderItem(host, item, ctx) draws the question; when the student has answered it must
// call ctx.done(correct, {key, question, studentAnswer, correctAnswer}, anchorEl).
// ============================================================
function runSequence(host, items, round, cfg) {
  const total = items.length;
  let i = 0;
  const wrongItems = [];

  function show() {
    const item = items[i];
    const ctx = {
      i, total, round,
      top: (cfg.preHtml || "") + roundHeader(round) + renderDots(i, total),
      done(correct, rec, anchor) {
        if (cfg.scored) {
          eqRecordAndSave(rec.key, rec.question, rec.studentAnswer, rec.correctAnswer, correct);
        }
        if (!correct) wrongItems.push(item);
        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "btn btn-primary btn-sm";
        nextBtn.textContent = "Tiếp theo →";
        nextBtn.style.marginTop = "14px";
        anchor.insertAdjacentElement("afterend", nextBtn);
        nextBtn.addEventListener("click", () => {
          i++;
          if (i >= total) {
            if (wrongItems.length > 0) runSequence(host, wrongItems, round + 1, cfg);
            else cfg.onComplete();
          } else {
            show();
          }
        });
      },
    };
    cfg.renderItem(host, item, ctx);
  }
  if (round > 1) host.scrollIntoView({ behavior: "smooth", block: "start" });
  show();
}

// ============================================================
// Multiple-choice question (used by Listen and circle, Read and complete, Choose the correct answers)
// ============================================================
function renderChoiceItem(host, item, ctx) {
  const stemHtml = item.stem.includes("___")
    ? escapeHtml(item.stem).replace("___", `<span class="q-blank" id="q-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`)
    : escapeHtml(item.stem) + `<span id="q-blank" hidden></span>`; // no blank (Listen and number)
  const hasListen = !!(item.listenFull || item.speakBefore);
  const viHtml = item.noTranslate ? "" : `
    <button type="button" class="eq-translate-btn" id="q-translate">🔤 Dịch</button>
    <div class="q-vi" id="q-vi" style="display:none;">
      <div>${escapeHtml(item.vi || "")}</div>
      ${(item.optVi || []).map(t => `<div>${escapeHtml(t)}</div>`).join("")}
    </div>`;
  const letters = item.options.map(o => o.key);

  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${ctx.i + 1}. ${stemHtml}</p>
    ${item.pics ? `<div class="q-pic-grid">${item.pics.map((pic, idx) => `<div class="q-pic-cell"><img src="${escapeHtml(pic)}" alt="Hình ${item.options[idx].key}"><span>${item.options[idx].key}</span></div>`).join("")}</div>` : ""}
    <div>
      ${item.audio
        ? `<audio class="q-audio" id="q-audio" controls preload="auto" src="${escapeHtml(item.audio)}"></audio><div class="q-vi" style="margin:0 0 6px;">${escapeHtml(item.audioNote || "Nghe rồi chọn đáp án.")}</div>`
        : hasListen ? `<button type="button" class="q-listen-btn" id="q-listen">🔊 Nghe</button>` : ""}
      ${viHtml}
    </div>
    <div class="q-options">
      ${item.options.map((o, idx) => `<button type="button" class="mcq-option" data-key="${o.key}"><span class="mcq-letter">${letters[idx]}</span>${escapeHtml(o.text)}</button>`).join("")}
    </div>
    <div class="fitb-feedback" id="q-feedback"></div>`;

  const feedback = host.querySelector("#q-feedback");
  const blank = host.querySelector("#q-blank");
  const listenBtn = host.querySelector("#q-listen");
  const transBtn = host.querySelector("#q-translate");
  let answered = false;

  function playQuestion() {
    if (item.listenFull) {
      say(spokenSentence(item));
    } else if (item.speakBefore) {
      say(item.speakBefore);
    }
  }

  if (listenBtn) {
    listenBtn.addEventListener("click", () => {
      if (answered) say(spokenSentence(item)); // after answering, replay = the complete sentence
      else playQuestion();
    });
  }
  if (transBtn) {
    transBtn.addEventListener("click", () => {
      const viEl = host.querySelector("#q-vi");
      const showing = viEl.style.display !== "none";
      viEl.style.display = showing ? "none" : "block";
      transBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
    });
  }

  host.querySelectorAll(".mcq-option").forEach(btn => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const chosen = btn.dataset.key;
      const correct = chosen === item.answer;

      host.querySelectorAll(".mcq-option").forEach(b => {
        b.disabled = true;
        if (b.dataset.key === item.answer) b.classList.add("correct");
      });
      if (!correct) btn.classList.add("wrong");
      blank.textContent = optionText(item, item.answer);

      const audioEl = host.querySelector("#q-audio");
      audioEl && audioEl.pause(); // don't let the recording talk over the answer read-out
      sfx(correct);
      // Read the FULL sentence with the correct answer filled in (never "blank", never the options)
      if (!item.noSay) say(spokenSentence(item));
      if (listenBtn) listenBtn.textContent = "🔊 Nghe lại";

      feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${item.answer}. ${optionText(item, item.answer)}`;
      feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";

      ctx.done(correct, {
        key: `${ctx.partKey || item.keyPrefix}-${item.id}`,
        question: fullSentence(item).replace(/\s+/g, " "),
        studentAnswer: `${chosen}. ${optionText(item, chosen)}`,
        correctAnswer: `${item.answer}. ${optionText(item, item.answer)}`,
      }, feedback);
    });
  });
}

// ============================================================
// 3) True / False — one statement at a time, T or F
// ============================================================
function renderTFItem(host, item, ctx) {
  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${ctx.i + 1}. ${escapeHtml(item.en)}</p>
    <div>
      <button type="button" class="q-listen-btn" id="tf-listen">🔊 Nghe</button>
      <button type="button" class="eq-translate-btn" id="tf-translate">🔤 Dịch</button>
    </div>
    <div class="q-vi" id="tf-vi" style="display:none;">${escapeHtml(item.vi)}</div>
    <div class="tf-btn-row" style="margin-top:10px;">
      <button type="button" class="tf-btn" data-choice="T">True</button>
      <button type="button" class="tf-btn" data-choice="F">False</button>
    </div>
    <div class="fitb-feedback" id="tf-feedback"></div>`;

  const feedback = host.querySelector("#tf-feedback");
  const transBtn = host.querySelector("#tf-translate");
  let answered = false;

  host.querySelector("#tf-listen").addEventListener("click", () => say(item.en));
  transBtn.addEventListener("click", () => {
    const viEl = host.querySelector("#tf-vi");
    const showing = viEl.style.display !== "none";
    viEl.style.display = showing ? "none" : "block";
    transBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });

  host.querySelectorAll(".tf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const choice = btn.dataset.choice;
      const correct = choice === item.answer;
      host.querySelectorAll(".tf-btn").forEach(b => { b.disabled = true; });
      btn.classList.add(correct ? "selected-correct" : "selected-wrong");
      if (!correct) host.querySelector(`.tf-btn[data-choice="${item.answer}"]`).classList.add("selected-correct");
      sfx(correct);
      const word = item.answer === "T" ? "True" : "False";
      feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${word}`;
      feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
      ctx.done(correct, {
        key: `tf-${item.id}`,
        question: item.en,
        studentAnswer: choice === "T" ? "True" : "False",
        correctAnswer: word,
      }, feedback);
    });
  });
}

function runTF() {
  const host = document.getElementById("tf-wrap");
  if (!host) return;
  runSequence(host, TF_ITEMS, 1, {
    scored: true,
    renderItem: renderTFItem,
    onComplete: () => showSectionComplete(host, "Em đã hoàn thành phần True / False.", true, "complete_exercise"),
  });
}

// ============================================================
// 5b) Listen and fill in the blank — one shared recording, the student types the word
// ============================================================
function normalizeTyped(s) {
  return String(s).toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();
}

function renderTypeItem(host, item, ctx) {
  const stemHtml = escapeHtml(item.stem).replace("___",
    `<input type="text" class="cw-input" id="type-input" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Chỗ trống">`);
  host.innerHTML = `
    ${ctx.top}
    <audio class="q-audio" id="q-audio" controls preload="auto" src="${escapeHtml(item.audio)}"></audio>
    <div class="q-vi" style="margin:0 0 6px;">Bấm ▶ để nghe (nghe lại bao nhiêu lần cũng được), rồi gõ từ còn thiếu.</div>
    <p class="q-vi" style="margin:0 0 10px;">Gợi ý: <strong>${FILL_WORDS.map(escapeHtml).join(" · ")}</strong></p>
    <p class="q-stem" style="line-height:2;">${ctx.i + 1}. ${stemHtml}</p>
    <button type="button" class="eq-translate-btn" id="q-translate">🔤 Dịch</button>
    <div class="q-vi" id="q-vi" style="display:none;">${escapeHtml(item.vi)}</div>
    <div class="fitb-row" style="margin-top:10px;">
      <button class="btn btn-primary btn-sm" id="type-check">Kiểm tra</button>
    </div>
    <div class="fitb-feedback" id="q-feedback"></div>`;

  const input = host.querySelector("#type-input");
  const checkBtn = host.querySelector("#type-check");
  const feedback = host.querySelector("#q-feedback");
  const transBtn = host.querySelector("#q-translate");
  let answered = false;

  transBtn.addEventListener("click", () => {
    const viEl = host.querySelector("#q-vi");
    const showing = viEl.style.display !== "none";
    viEl.style.display = showing ? "none" : "block";
    transBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });

  function check() {
    if (answered) return;
    const typed = input.value.trim();
    if (!typed) { input.focus(); return; }
    answered = true;
    const correct = normalizeTyped(typed) === normalizeTyped(item.answer);
    input.disabled = true;
    checkBtn.disabled = true;
    input.classList.add(correct ? "ok" : "no");
    if (!correct) input.value = item.answer;
    const audioEl = host.querySelector("#q-audio");
    audioEl && audioEl.pause();
    sfx(correct);
    const full = item.stem.replace("___", item.answer);
    say(full.replace(/\b[AB]: /g, ""));
    feedback.textContent = correct ? "✓ Chính xác!" : `Em gõ: "${typed}". Đáp án đúng: ${item.answer}`;
    feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
    ctx.done(correct, {
      key: `fill-${item.id}`,
      question: full,
      studentAnswer: typed,
      correctAnswer: item.answer,
    }, feedback);
  }

  checkBtn.addEventListener("click", check);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
}

// ============================================================
// 4) Sentence Ordering — tap the chunks in order; tap a placed chunk to send just that one back
// ============================================================
function renderOrderItem(host, item, ctx) {
  const shuffled = shuffleNotSame(item.chunks.map((c, idx) => ({ ...c, origIdx: idx })));

  host.innerHTML = `
    ${ctx.top}
    <button type="button" class="eq-translate-btn" id="order-translate">🔤 Dịch</button>
    <div class="sentence-answer-strip" id="order-strip"></div>
    <div class="sentence-chunks" id="order-pool">
      ${shuffled.map(c => `<div class="sentence-chunk" data-orig="${c.origIdx}">${escapeHtml(c.en)}<span class="chunk-vi">${escapeHtml(c.vi)}</span></div>`).join("")}
    </div>
    <div class="fitb-row" style="margin-top:14px;">
      <button class="btn btn-secondary btn-sm" id="order-reset">Làm lại</button>
      <button class="btn btn-primary btn-sm" id="order-check">Kiểm tra</button>
    </div>
    <div class="fitb-feedback" id="order-feedback"></div>`;

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
    strip.innerHTML = placed.map(p => `<div class="sentence-chunk placed" data-orig="${p.origIdx}" title="Chạm để bỏ ra">${escapeHtml(p.en)}</div>`).join("");
    strip.querySelectorAll(".sentence-chunk.placed").forEach(el => {
      el.addEventListener("click", () => {
        if (checked) return;
        const origIdx = Number(el.dataset.orig);
        const idx = placed.findIndex(p => p.origIdx === origIdx);
        if (idx === -1) return;
        say(placed[idx].en);
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
      say(item.chunks[origIdx].en);
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
    if (placed.length === 0) return;
    checked = true;
    const built = placed.map(c => c.en).join(" ");
    const correct = built === item.answer;
    sfx(correct);

    feedback.innerHTML =
      (correct
        ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
        : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng:</span>`) +
      `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(item.answer)}</div>` +
      `<div style="color:#666;margin-top:2px;">${escapeHtml(item.answerVi)}</div>`;
    feedback.className = "fitb-feedback";
    say(item.answer); // read the whole correct sentence aloud

    resetBtn.disabled = true;
    checkBtn.disabled = true;

    ctx.done(correct, {
      key: `order-${item.id}`,
      question: "Sentence " + item.id,
      studentAnswer: built,
      correctAnswer: item.answer,
    }, feedback);
  });
}

function runOrdering() {
  const host = document.getElementById("order-wrap");
  if (!host) return;
  runSequence(host, ORDER_ITEMS, 1, {
    scored: SCORE_ORDERING,
    renderItem: renderOrderItem,
    onComplete: () => showSectionComplete(host, "Em đã hoàn thành phần Sentence Ordering.", true, "complete_exercise"),
  });
}

// ============================================================
// 5) Quiz — parts run one after another
// ============================================================

function buildQuizParts() {
  const parts = [];
  if (listenEnabled()) {
    parts.push({
      title: "Listen and circle",
      instruction: "Nghe rồi chọn đáp án đúng.",
      run(host, pre, done) {
        runSequence(host, LISTEN_ITEMS.map(x => ({ ...x, keyPrefix: "listen" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
      },
    });
    parts.push({
      title: "Listen and fill in the blank",
      instruction: "Nghe rồi gõ từ còn thiếu vào chỗ trống.",
      run(host, pre, done) {
        runSequence(host, FILL_ITEMS, 1, { scored: true, preHtml: pre, renderItem: renderTypeItem, onComplete: done });
      },
    });
  }
  parts.push({
    title: "Read and complete",
    instruction: "Chọn đáp án đúng (a, b hoặc c) để hoàn thành câu.",
    run(host, pre, done) {
      runSequence(host, CHOOSE_ITEMS.map(x => ({ ...x, keyPrefix: "choose" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
    },
  });
  parts.push({
    title: "Choose the correct answers",
    instruction: "Chọn câu trả lời đúng (a hoặc b).",
    run(host, pre, done) {
      runSequence(host, ANSWER_ITEMS.map(x => ({ ...x, keyPrefix: "answer" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
    },
  });
  return parts;
}

function runQuiz() {
  const host = document.getElementById("quiz-wrap");
  if (!host) return;
  const parts = buildQuizParts();
  if (parts.length === 0) {
    host.innerHTML = `<p style="text-align:center;color:#6b6b76;padding:20px 0;">Phần Quiz của Unit này đang được cập nhật. Em quay lại sau nhé!</p>`;
    return;
  }

  function startPart(n) {
    const p = parts[n];
    const pre = `<span class="q-part-tag">Quiz · Phần ${n + 1}/${parts.length} · ${p.title}</span><p class="eq-instruction">${p.instruction}</p>`;
    p.run(host, pre, () => {
      if (n < parts.length - 1) {
        showSectionComplete(host, `Em đã hoàn thành phần "${p.title}".`, true, "complete_exercise",
          () => startPart(n + 1), `Phần tiếp theo: ${parts[n + 1].title} →`);
      } else {
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 5.", false, "complete_unit");
      }
    });
  }
  startPart(0);
}

// ============================================================
// 1) Reading and 2) Vocabulary (practice only)
// ============================================================
function renderReading() {
  const el = document.getElementById("reading-text");
  if (el) el.innerHTML = READING_HTML;
  const toVocabBtn = document.getElementById("reading-to-vocab-btn");
  toVocabBtn && toVocabBtn.addEventListener("click", () => switchPanel("panel-vocab"));
}

function renderVocab() {
  const host = document.getElementById("vocab-grid");
  if (!host) return;
  host.innerHTML = VOCAB_ITEMS.map((v, idx) => `
    <div class="vocab-card" data-idx="${idx}">
      <div class="vocab-front">🔊 ${escapeHtml(v.en)}<span class="vocab-hint">chạm để nghe &amp; xem nghĩa</span></div>
      <div class="vocab-back">${escapeHtml(v.vi)}</div>
    </div>`).join("");
  host.querySelectorAll(".vocab-card").forEach((card) => {
    card.addEventListener("click", () => {
      say(VOCAB_ITEMS[Number(card.dataset.idx)].en);
      card.classList.toggle("flipped");
    });
  });
  const toTF = document.getElementById("vocab-to-tf-btn");
  toTF && toTF.addEventListener("click", () => switchPanel("panel-tf"));
}

// ============================================================
// Start-up + numbered-pill navigation between the 5 sections
// ============================================================
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
  setupCrumbNav();
  // Scored sections start only after the audio check, so the total (18, or 24 with audio)
  // is settled before the first answer is saved.
  checkAudio().then((ok) => {
    AUDIO_READY = ok;
    runTF();
    runOrdering();
    runQuiz();
  });
});

function checkAudio() {
  const urls = LISTEN_ITEMS.concat(FILL_ITEMS).map(x => x.audio);
  return Promise.all(urls.map(u => fetch(u, { method: "HEAD", cache: "no-store" }).then(r => r.ok).catch(() => false)))
    .then(res => res.every(Boolean));
}

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
