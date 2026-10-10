// ============================================================
// Grade 5 — Unit 4 (Our Free-time Activities) — Exercises
// Source: teacher Hien's workbook images (Global Success 5, Unit 4)
//
// 5 sections, in this order:
//   1 Reading  2 Vocabulary  3 Fill in the Blank  4 Sentence Ordering  5 Quiz
// Reading = the Peter & Linda passage ("Read and complete"). Fill in the Blank = the
// 4 "Read and complete" items + 4 more made from the passage (approved by Hien).
// Sentence Ordering = 4 sentences made by Claude from the passage (approved by Hien).
// Quiz: Listen and circle (Track 7) → Listen and number (Track 8) → Circle and write →
//   Match and read aloud → Read and match.
//   The two listening parts turn on by themselves once all 6 recordings are on the site
//   (g5-u4-circle-1/2.wav and g5-u4-number-1..4.wav in the repo root) — see checkAudio().
//
// Vietnamese: vocab meanings come from Hien's slides; the passage / sentence
// translations were written by Claude — please review.
// ============================================================

const SCORE_ORDERING = true;

// Set at start-up by checkAudio(): true only when every recording below is reachable,
// so the listening parts (and their questions in eqTotalItems) appear together.
let AUDIO_READY = false;

// ============================================================
// 1) READING  (practice only)
// ============================================================
const READING_HTML =
  "Peter and Linda are my <mark>friends</mark>. Peter likes <mark>watching films</mark> in his <mark>free time</mark>. " +
  "He usually watches <mark>cartoons</mark> <mark>at the weekend</mark>. He sometimes reads <mark>comic books</mark>. " +
  "Linda likes music a lot. She often <mark>plays the piano</mark> at the weekend. " +
  "She <mark>rarely</mark> <mark>plays the violin</mark> on Sundays. I love <mark>playing sports</mark> in my free time. " +
  "I always play <mark>volleyball</mark> at the weekend. Sometimes I go swimming at the <mark>swimming pool</mark>.";

// translated by Claude — please review
const READING_VI =
  "Peter và Linda là bạn của mình. Peter thích xem phim vào thời gian rảnh. " +
  "Bạn ấy thường xuyên xem phim hoạt hình vào cuối tuần. Thỉnh thoảng bạn ấy đọc truyện tranh. " +
  "Linda rất thích âm nhạc. Bạn ấy thường chơi đàn piano vào cuối tuần. " +
  "Bạn ấy hiếm khi chơi violin vào Chủ nhật. Mình rất thích chơi thể thao vào thời gian rảnh. " +
  "Mình luôn luôn chơi bóng chuyền vào cuối tuần. Thỉnh thoảng mình đi bơi ở bể bơi.";

// ============================================================
// 2) VOCABULARY  (practice only) — the highlighted words, tap to hear + flip
// ============================================================
const VOCAB_ITEMS = [
  { en: "friends", vi: "những người bạn" },
  { en: "watching films", vi: "xem phim" },
  { en: "free time", vi: "thời gian rảnh" },
  { en: "cartoons", vi: "phim hoạt hình" },
  { en: "at the weekend", vi: "vào cuối tuần" },
  { en: "comic books", vi: "truyện tranh" },
  { en: "plays the piano", vi: "chơi đàn piano" },
  { en: "plays the violin", vi: "chơi violin" },
  { en: "rarely", vi: "hiếm khi" },
  { en: "playing sports", vi: "chơi thể thao" },
  { en: "volleyball", vi: "bóng chuyền" },
  { en: "swimming pool", vi: "bể bơi" },
];

// ============================================================
// 3) FILL IN THE BLANK  (scored: 8) — answers from the passage
// ============================================================
const FITB_ITEMS = [
  { id: 1, stem: "Peter likes ___ in his free time.", options: [{ key: "a", text: "watching films" }, { key: "b", text: "playing sports" }], answer: "a",
    vi: "Peter thích ___ vào thời gian rảnh.", optVi: ["a. xem phim", "b. chơi thể thao"] },
  { id: 2, stem: "He usually watches ___ at the weekend.", options: [{ key: "a", text: "cartoons" }, { key: "b", text: "football" }], answer: "a",
    vi: "Bạn ấy thường xuyên xem ___ vào cuối tuần.", optVi: ["a. phim hoạt hình", "b. bóng đá"] },
  { id: 3, stem: "He sometimes reads ___.", options: [{ key: "a", text: "comic books" }, { key: "b", text: "stories" }], answer: "a",
    vi: "Thỉnh thoảng bạn ấy đọc ___.", optVi: ["a. truyện tranh", "b. truyện"] },
  { id: 4, stem: "Linda often ___ at the weekend.", options: [{ key: "a", text: "plays the violin" }, { key: "b", text: "plays the piano" }], answer: "b",
    vi: "Linda thường ___ vào cuối tuần.", optVi: ["a. chơi violin", "b. chơi đàn piano"] },
  { id: 5, stem: "She rarely ___ on Sundays.", options: [{ key: "a", text: "plays the violin" }, { key: "b", text: "goes shopping" }], answer: "a",
    vi: "Bạn ấy hiếm khi ___ vào Chủ nhật.", optVi: ["a. chơi violin", "b. đi mua sắm"] },
  { id: 6, stem: "Linda likes ___ a lot.", options: [{ key: "a", text: "music" }, { key: "b", text: "sports" }], answer: "a",
    vi: "Linda rất thích ___.", optVi: ["a. âm nhạc", "b. thể thao"] },
  { id: 7, stem: "Mary always plays ___ at the weekend.", options: [{ key: "a", text: "table tennis" }, { key: "b", text: "volleyball" }], answer: "b",
    vi: "Mary luôn luôn chơi ___ vào cuối tuần.", optVi: ["a. bóng bàn", "b. bóng chuyền"] },
  { id: 8, stem: "Mary sometimes ___ at the swimming pool.", options: [{ key: "a", text: "goes swimming" }, { key: "b", text: "goes roller skating" }], answer: "a",
    vi: "Thỉnh thoảng Mary ___ ở bể bơi.", optVi: ["a. đi bơi", "b. đi trượt pa-tanh"] },
];

// ============================================================
// 4) SENTENCE ORDERING  (scored: 4)
// ============================================================
const ORDER_ITEMS = [
  {
    id: 1,
    chunks: [
      { en: "Peter", vi: "Peter" },
      { en: "likes", vi: "thích" },
      { en: "watching films", vi: "xem phim" },
      { en: "in his free time.", vi: "vào thời gian rảnh của bạn ấy." },
    ],
    answer: "Peter likes watching films in his free time.",
    answerVi: "Peter thích xem phim vào thời gian rảnh.",
  },
  {
    id: 2,
    chunks: [
      { en: "Linda", vi: "Linda" },
      { en: "often", vi: "thường" },
      { en: "plays the piano", vi: "chơi đàn piano" },
      { en: "at the weekend.", vi: "vào cuối tuần." },
    ],
    answer: "Linda often plays the piano at the weekend.",
    answerVi: "Linda thường chơi đàn piano vào cuối tuần.",
  },
  {
    id: 3,
    chunks: [
      { en: "What do you", vi: "bạn … gì" },
      { en: "like doing", vi: "thích làm" },
      { en: "in your free time?", vi: "vào thời gian rảnh của bạn?" },
    ],
    answer: "What do you like doing in your free time?",
    answerVi: "Bạn thích làm gì vào thời gian rảnh?",
  },
  {
    id: 4,
    chunks: [
      { en: "I", vi: "mình" },
      { en: "always", vi: "luôn luôn" },
      { en: "play volleyball", vi: "chơi bóng chuyền" },
      { en: "at the weekend.", vi: "vào cuối tuần." },
    ],
    answer: "I always play volleyball at the weekend.",
    answerVi: "Mình luôn luôn chơi bóng chuyền vào cuối tuần.",
  },
];

// ============================================================
// 5) QUIZ
// ============================================================

// ---- 5a) Listen and circle (Track 7) — answers from Hien's key: 1-a, 2-c ----
const LISTEN_ITEMS = [
  {
    id: 1,
    stem: "She ___ plays the piano in her free time.",
    options: [{ key: "a", text: "often" }, { key: "b", text: "sometimes" }, { key: "c", text: "never" }],
    answer: "a",
    audio: "g5-u4-circle-1.wav",
    audioNote: "Bấm ▶ để nghe, rồi chọn đáp án.",
    noTranslate: true,
  },
  {
    id: 2,
    stem: "I ___ go roller skating on Sundays.",
    options: [{ key: "a", text: "always" }, { key: "b", text: "never" }, { key: "c", text: "sometimes" }],
    answer: "c",
    audio: "g5-u4-circle-2.wav",
    audioNote: "Bấm ▶ để nghe, rồi chọn đáp án.",
    noTranslate: true,
  },
];

// ---- 5b) Listen and number (Track 8) — pictures a–d; answers from Hien's key a-3, b-1, c-4, d-2 ----
const NUMBER_PICS = ["img/g5-u4-number-a.jpg", "img/g5-u4-number-b.jpg", "img/g5-u4-number-c.jpg", "img/g5-u4-number-d.jpg"];
const NUMBER_OPTIONS = [{ key: "a", text: "Hình a" }, { key: "b", text: "Hình b" }, { key: "c", text: "Hình c" }, { key: "d", text: "Hình d" }];
const NUMBER_ITEMS = [
  { id: 1, answer: "b" }, // read stories
  { id: 2, answer: "d" }, // play the violin
  { id: 3, answer: "a" }, // roller skating
  { id: 4, answer: "c" }, // swimming
].map(x => ({ ...x, stem: `Đoạn ${x.id}: chọn hình đúng.`, options: NUMBER_OPTIONS, pics: NUMBER_PICS, noTranslate: true, noSay: true,
              audio: `g5-u4-number-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn hình đúng." }));

// ---- 5c) Circle and write — 2 choices ----
const CIRCLE_ITEMS = [
  { id: 1, stem: "I like ___ the flowers in my free time.", options: [{ key: "a", text: "playing" }, { key: "b", text: "watering" }], answer: "b",
    vi: "Mình thích ___ cho hoa vào thời gian rảnh.", optVi: ["a. chơi", "b. tưới nước"] },
  { id: 2, stem: "He likes ___ the Internet on Sundays.", options: [{ key: "a", text: "surfing" }, { key: "b", text: "looking for" }], answer: "a",
    vi: "Bạn ấy thích ___ vào Chủ nhật.", optVi: ["a. lướt (mạng)", "b. tìm kiếm"] },
  { id: 3, stem: "She loves ___ her bike at the weekend.", options: [{ key: "a", text: "riding" }, { key: "b", text: "taking" }], answer: "a",
    vi: "Bạn ấy rất thích ___ xe đạp vào cuối tuần.", optVi: ["a. đạp", "b. mang theo"] },
  { id: 4, stem: "We ___ go to school from Monday to Friday.", options: [{ key: "a", text: "always" }, { key: "b", text: "sometimes" }], answer: "a",
    vi: "Chúng mình ___ đi học từ thứ Hai đến thứ Sáu.", optVi: ["a. luôn luôn", "b. thỉnh thoảng"] },
  { id: 5, stem: "She doesn't know anything about skating. She ___ goes skating.", options: [{ key: "a", text: "often" }, { key: "b", text: "never" }], answer: "b",
    speakBefore: "She doesn't know anything about skating.",
    vi: "Bạn ấy không biết gì về trượt pa-tanh. Bạn ấy ___ đi trượt pa-tanh.", optVi: ["a. thường", "b. không bao giờ"] },
];

// ---- 5d) Match and read aloud — sentence halves. Answers: 1-c, 2-d, 3-a, 4-b ----
const PAIR_ITEMS = [
  { id: 1, left: "What do you like", right: "doing in your free time?" },
  { id: 2, left: "What do you", right: "do at the weekend?" },
  { id: 3, left: "I like", right: "reading stories." },
  { id: 4, left: "I usually", right: "play table tennis." },
];

// ---- 5e) Read and match — question → answer. Answers: 1-b, 2-d, 3-a, 4-c ----
const MATCH_ITEMS = [
  { id: 1, left: "What do you like doing in your free time?", right: "I like listening to music." },
  { id: 2, left: "What do you do at the weekend?", right: "I usually ride my bike with my friends." },
  { id: 3, left: "What does David like doing in his free time?", right: "He likes watching cartoons on TV." },
  { id: 4, left: "What does he do at the weekend?", right: "He always plays the guitar." },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as the other exercise pages.
// Score is based on the FIRST attempt only — retry rounds ("Vòng 2, 3...") are
// practice and never change the saved score.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================
const UNIT_ID = "unit4"; // Grade 5 keeps its historic un-prefixed unit ids (same as Vocabulary)
const UNIT_LABEL = "Unit 4: Our Free-time Activities";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function listenEnabled() {
  return AUDIO_READY;
}

function eqTotalItems() {
  return (
    FITB_ITEMS.length +
    (SCORE_ORDERING ? ORDER_ITEMS.length : 0) +
    (listenEnabled() ? LISTEN_ITEMS.length + NUMBER_ITEMS.length : 0) +
    CIRCLE_ITEMS.length +
    PAIR_ITEMS.length +
    MATCH_ITEMS.length
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
// Multiple-choice question (used by Fill in the Blank, Listen and circle, Choose)
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
      say(fullSentence(item));
    } else if (item.speakBefore) {
      say(item.speakBefore);
    }
  }

  if (listenBtn) {
    listenBtn.addEventListener("click", () => {
      if (answered) say(fullSentence(item)); // after answering, replay = the complete sentence
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
      if (!item.noSay) say(fullSentence(item));
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
// 3) Fill in the Blank
// ============================================================
function runFITB() {
  const host = document.getElementById("fitb-wrap");
  if (!host) return;
  const items = FITB_ITEMS.map(x => ({ ...x, keyPrefix: "fitb" }));
  runSequence(host, items, 1, {
    scored: true,
    renderItem: renderChoiceItem,
    onComplete: () => showSectionComplete(host, "Em đã hoàn thành phần Fill in the Blank.", true, "complete_exercise"),
  });
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

// ---- 5c) Match and read aloud — Tap Pairs ----
// Tap a left half (you hear it), then tap the right half that completes it. A wrong pair
// shakes and the student simply tries again, so every pair ends up matched (that is the
// "retry until all correct"). Score = each left half's FIRST pairing attempt only.
function runPairs(host, preHtml, onComplete, PAIR_ITEMS, keyPrefix, hint) {
  const leftItems = shuffle(PAIR_ITEMS.map(p => ({ id: p.id, text: p.left })));
  const rightItems = shuffle(PAIR_ITEMS.map(p => ({ id: p.id, text: p.right })));

  host.innerHTML = `
    ${preHtml}
    <p style="color:#666;font-size:.9rem;margin:0 0 6px;">${hint}</p>
    <div class="pairs-board">
      <div class="pairs-col" id="pairs-left">${leftItems.map(x => `<div class="pair-tile" data-id="${x.id}" data-side="l">🔊 ${escapeHtml(x.text)}</div>`).join("")}</div>
      <div class="pairs-col" id="pairs-right">${rightItems.map(x => `<div class="pair-tile" data-id="${x.id}" data-side="r">${escapeHtml(x.text)}</div>`).join("")}</div>
    </div>
    <div class="fitb-feedback" id="pairs-feedback"></div>
    <div id="pairs-actions"></div>`;

  let selL = null, selR = null, matched = 0;
  const attempted = {};

  host.querySelectorAll(".pair-tile").forEach(tile => {
    tile.addEventListener("click", () => {
      if (tile.classList.contains("matched")) return;
      if (tile.dataset.side === "l") {
        say(PAIR_ITEMS.find(p => String(p.id) === tile.dataset.id).left);
        if (selL) selL.classList.remove("selected");
        selL = tile; tile.classList.add("selected");
      } else {
        if (selR) selR.classList.remove("selected");
        selR = tile; tile.classList.add("selected");
      }
      if (!(selL && selR)) return;

      const pair = PAIR_ITEMS.find(p => String(p.id) === selL.dataset.id);
      const isMatch = selL.dataset.id === selR.dataset.id;
      if (!attempted[pair.id]) {
        attempted[pair.id] = true;
        eqRecordAndSave(`${keyPrefix}-${pair.id}`, pair.left + " …", selR.textContent.trim(), pair.right, isMatch);
      }
      sfx(isMatch);
      if (isMatch) {
        say(pair.left + " " + pair.right); // read the whole finished sentence
        selL.classList.remove("selected"); selR.classList.remove("selected");
        selL.classList.add("matched"); selR.classList.add("matched");
        selL.textContent = "✓ " + pair.left; selR.textContent = pair.right;
        selL = null; selR = null; matched++;
        if (matched === PAIR_ITEMS.length) {
          const fb = host.querySelector("#pairs-feedback");
          fb.textContent = "✓ Ghép hết rồi!";
          fb.className = "fitb-feedback ok";
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "btn btn-primary btn-sm";
          btn.textContent = "Tiếp theo →";
          btn.style.marginTop = "14px";
          host.querySelector("#pairs-actions").appendChild(btn);
          btn.addEventListener("click", onComplete);
        }
      } else {
        const l = selL, r = selR;
        l.classList.add("shake"); r.classList.add("shake");
        setTimeout(() => { l.classList.remove("selected", "shake"); r.classList.remove("selected", "shake"); }, 400);
        selL = null; selR = null;
      }
    });
  });
}

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
      title: "Listen and number",
      instruction: "Nghe từng đoạn rồi chọn hình đúng (a, b, c hoặc d).",
      run(host, pre, done) {
        runSequence(host, NUMBER_ITEMS.map(x => ({ ...x, keyPrefix: "number" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
      },
    });
  }
  parts.push({
    title: "Circle and write",
    instruction: "Chọn từ đúng để hoàn thành câu.",
    run(host, pre, done) {
      runSequence(host, CIRCLE_ITEMS.map(x => ({ ...x, keyPrefix: "circle" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
    },
  });
  parts.push({
    title: "Match and read aloud",
    instruction: "Ghép hai nửa thành câu đúng rồi nghe cả câu.",
    run(host, pre, done) { runPairs(host, pre, done, PAIR_ITEMS, "pair", "Chạm nửa câu bên trái để nghe, rồi chạm nửa câu còn lại bên phải."); },
  });
  parts.push({
    title: "Read and match",
    instruction: "Ghép câu hỏi với câu trả lời đúng rồi nghe cả hai câu.",
    run(host, pre, done) { runPairs(host, pre, done, MATCH_ITEMS, "match", "Chạm câu hỏi bên trái để nghe, rồi chạm câu trả lời đúng bên phải."); },
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
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 4.", false, "complete_unit");
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
  const viEl = document.getElementById("reading-vi");
  if (viEl) viEl.textContent = READING_VI;
  const trBtn = document.getElementById("reading-translate-btn");
  trBtn && trBtn.addEventListener("click", () => {
    const showing = viEl.style.display !== "none";
    viEl.style.display = showing ? "none" : "block";
    trBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });
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
  const toFitb = document.getElementById("vocab-to-fitb-btn");
  toFitb && toFitb.addEventListener("click", () => switchPanel("panel-fitb"));
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
  // Scored sections start only after the audio check, so the total (25, or 31 with audio)
  // is settled before the first answer is saved.
  checkAudio().then((ok) => {
    AUDIO_READY = ok;
    runFITB();
    runOrdering();
    runQuiz();
  });
});

function checkAudio() {
  const urls = LISTEN_ITEMS.concat(NUMBER_ITEMS).map(x => x.audio);
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
