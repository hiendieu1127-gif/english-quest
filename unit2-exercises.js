// ============================================================
// Grade 5 — Unit 2 (Our Homes) — Exercises
// Source: teacher Hien's 4 workbook images (Global Success 5 Sách bài tập, Unit 2)
//
// 5 sections, in this order:
//   1 Reading  2 Vocabulary  3 Fill in the Blank  4 Sentence Ordering  5 Quiz
// Quiz is made of up to 4 parts, one after another:
//   Listen and circle (waiting for audio + answer key) → Complete the words →
//   Match and read aloud → Choose the correct answers
//
// Vietnamese translations: written by Claude, not in the source — please review.
//   (only "best friend = bạn thân" and "address = địa chỉ" come from Hien's material)
// Answer keys marked "derived" were worked out from the reading passage / grammar
// of the unit — please double-check them against the workbook answer key.
// ============================================================

// ---- Which sections count toward the score on the Teacher Dashboard ----
// Reading + Vocabulary are practice-only. Everything else is scored, FIRST attempt only.
// Set to false if Sentence Ordering should be practice-only (as in Unit 1).
const SCORE_ORDERING = true;

// ============================================================
// 1) READING  (practice only) — the "Read and circle" passage
//    The 7 red-boxed words of the workbook are highlighted with <mark>.
// ============================================================
const READING_HTML =
  "I am Kim. I live in Thu Duc. I go to Sao Mai <mark>Primary School</mark>. " +
  "It is about <mark>seven kilometres</mark> from my home. The school <mark>has</mark> three buildings. " +
  "My <mark>classroom</mark> is in Building B. Hoa is my <mark>best friend</mark>. She lives near our school. " +
  "Her <mark>address</mark> is Flat 12, Lotus Building, 2 Nguyen Binh Khiem Street, <mark>District</mark> 1, " +
  "Ho Chi Minh City.";

// translated by Claude — please review
const READING_VI =
  "Tôi là Kim. Tôi sống ở Thủ Đức. Tôi học ở Trường Tiểu học Sao Mai. " +
  "Trường cách nhà tôi khoảng bảy ki-lô-mét. Trường có ba tòa nhà. " +
  "Lớp học của tôi ở Tòa B. Hoa là bạn thân của tôi. Bạn ấy sống gần trường của chúng tôi. " +
  "Địa chỉ của bạn ấy là Căn hộ 12, Tòa Lotus, 2 đường Nguyễn Bỉnh Khiêm, Quận 1, Thành phố Hồ Chí Minh.";

// ============================================================
// 2) VOCABULARY  (practice only) — the red-boxed words, tap to hear + flip for meaning
//    "best friend" and "address" are from Hien's material; the rest are translated by Claude.
// ============================================================
const VOCAB_ITEMS = [
  { en: "Primary School", vi: "trường tiểu học" },
  { en: "seven kilometres", vi: "bảy ki-lô-mét" },
  { en: "has", vi: "có" },
  { en: "classroom", vi: "lớp học" },
  { en: "best friend", vi: "bạn thân" },
  { en: "address", vi: "địa chỉ" },
  { en: "District", vi: "quận" },
];

// ============================================================
// 3) FILL IN THE BLANK  (scored: 4) — image 1, questions 1–4, about Kim
//    Answer keys derived from the passage. Q1: the school is about seven
//    kilometres away → "far from" — please confirm with the workbook key.
// ============================================================
const FITB_ITEMS = [
  {
    id: 1,
    stem: "Kim's home is ___ her school.",
    options: [{ key: "a", text: "near" }, { key: "b", text: "far from" }],
    answer: "b",
    vi: "Nhà của Kim ___ trường của bạn ấy.",
    optVi: ["a. gần", "b. xa"],
  },
  {
    id: 2,
    stem: "Her classroom is in ___.",
    options: [{ key: "a", text: "Building B" }, { key: "b", text: "Building C" }],
    answer: "a",
    vi: "Lớp học của bạn ấy ở ___.",
    optVi: ["a. Tòa B", "b. Tòa C"],
  },
  {
    id: 3,
    stem: "Her best friend lives near ___.",
    options: [{ key: "a", text: "the school" }, { key: "b", text: "her home" }],
    answer: "a",
    vi: "Bạn thân của bạn ấy sống gần ___.",
    optVi: ["a. trường học", "b. nhà của bạn ấy"],
  },
  {
    id: 4,
    stem: "Her best friend's address is ___.",
    options: [
      { key: "a", text: "Flat 2, Lotus Building, 12 Nguyen Binh Khiem Street" },
      { key: "b", text: "Flat 12, Lotus Building, 2 Nguyen Binh Khiem Street" },
    ],
    answer: "b",
    vi: "Địa chỉ của bạn thân bạn ấy là ___.",
    optVi: ["a. Căn hộ 2, Tòa Lotus, 12 đường Nguyễn Bỉnh Khiêm", "b. Căn hộ 12, Tòa Lotus, 2 đường Nguyễn Bỉnh Khiêm"],
  },
];

// ============================================================
// 4) SENTENCE ORDERING  (image 2 "Make sentences") — tap the chunks in order
//    Chunk text keeps the punctuation so the order is unambiguous.
// ============================================================
const ORDER_ITEMS = [
  {
    id: 1,
    chunks: [
      { en: "Do", vi: "(từ mở đầu câu hỏi)" },
      { en: "you", vi: "bạn" },
      { en: "live in", vi: "sống ở" },
      { en: "that house?", vi: "ngôi nhà kia?" },
    ],
    answer: "Do you live in that house?",
    answerVi: "Bạn có sống trong ngôi nhà kia không?",
  },
  {
    id: 2,
    chunks: [
      { en: "I", vi: "tôi" },
      { en: "live in", vi: "sống ở" },
      { en: "Flat 15,", vi: "căn hộ 15," },
      { en: "Lotus Tower.", vi: "tòa tháp Lotus." },
    ],
    answer: "I live in Flat 15, Lotus Tower.",
    answerVi: "Tôi sống ở căn hộ 15, tòa tháp Lotus.",
  },
  {
    id: 3,
    chunks: [
      { en: "What's", vi: "…là gì" },
      { en: "the address", vi: "địa chỉ" },
      { en: "of", vi: "của" },
      { en: "your best friend?", vi: "bạn thân của bạn?" },
    ],
    answer: "What's the address of your best friend?",
    answerVi: "Địa chỉ của bạn thân của bạn là gì?",
  },
  {
    id: 4,
    chunks: [
      { en: "It's", vi: "đó là" },
      { en: "53", vi: "số 53" },
      { en: "George Street,", vi: "đường George," },
      { en: "Sydney.", vi: "Sydney." },
    ],
    answer: "It's 53 George Street, Sydney.",
    answerVi: "Đó là số 53 đường George, Sydney.",
  },
];

// ============================================================
// 5) QUIZ
// ============================================================

// ---- 5a) Listen and circle ("Track 3") — recording + answers confirmed by Hien ----
// One recording (unit2-track3.mp3) holds both questions. The part only shows up (and is
// only counted in the total) while every item has an `answer` ("a" / "b" / "c").
const LISTEN_ITEMS = [
  {
    id: 1,
    stem: "My address is ___ Oxford Street.",
    options: [{ key: "a", text: "fifty" }, { key: "b", text: "sixteen" }, { key: "c", text: "ninety" }],
    answer: "b", // sixteen (confirmed by Hien)
    audio: "unit2-track3.mp3",
    listenFull: true,
    noTranslate: true,
  },
  {
    id: 2,
    stem: "He lives at ___ Green Street.",
    options: [{ key: "a", text: "fifteen" }, { key: "b", text: "sixty" }, { key: "c", text: "ninety" }],
    answer: "a", // fifteen (confirmed by Hien)
    audio: "unit2-track3.mp3",
    listenFull: true,
    noTranslate: true,
  },
];

// ---- 5b) Complete the words (image 3, ex. 2) — 4 pictures, NO audio ----
// Pictures: the vocabulary photos of the same 4 words are used for now — swap the
// `img` path when Hien sends the workbook pictures.
const COMPLETE_WORDS = [
  { id: 1, img: "img/vocab-g5-u2-house.jpg", before: "I live in a", letter: "h", answer: "house", after: ".", vi: "Tôi sống trong một ngôi nhà." },
  { id: 2, img: "img/vocab-g5-u2-flat.jpg", before: "Do you live in a", letter: "f", answer: "flat", after: "?", vi: "Bạn có sống trong một căn hộ không?" },
  { id: 3, img: "img/vocab-g5-u2-tower.jpg", before: "Bill lives in a", letter: "t", answer: "tower", after: ".", vi: "Bill sống trong một tòa tháp." },
  { id: 4, img: "img/vocab-g5-u2-building.jpg", before: "Does Lucy live in that", letter: "b", answer: "building", after: "?", vi: "Lucy có sống trong tòa nhà đó không?" },
];

// ---- 5c) Match and read aloud (image 4, ex. 1) — Tap Pairs with audio ----
const PAIR_ITEMS = [
  { id: 1, left: "Do you", right: "live in this building?" },
  { id: 2, left: "I live in a", right: "flat in Thong Nhat Building." },
  { id: 3, left: "What's your", right: "address?" },
  { id: 4, left: "It's", right: "55 Riverside Street." },
];

// ---- 5d) Choose the correct answers (image 4, ex. 2) — with audio ----
// Answer keys derived from the unit's grammar — please confirm with the workbook key.
const CHOOSE_ITEMS = [
  {
    id: 1,
    stem: "Do they live in this house? No, ___.",
    options: [{ key: "a", text: "they do" }, { key: "b", text: "they don't" }],
    answer: "b",
    speakBefore: "Do they live in this house? No,",
    vi: "Họ có sống trong ngôi nhà này không? Không, ___.",
    optVi: ["a. họ có", "b. họ không"],
  },
  {
    id: 2,
    stem: "Do you live in that building? ___",
    options: [{ key: "a", text: "No, I don't." }, { key: "b", text: "Yes, I am." }],
    answer: "a",
    speakBefore: "Do you live in that building?",
    vi: "Bạn có sống trong tòa nhà kia không? ___",
    optVi: ["a. Không, tôi không.", "b. Vâng, tôi là."],
  },
  {
    id: 3,
    stem: "What's your address? ___",
    options: [{ key: "a", text: "It's a tower in King Street." }, { key: "b", text: "It's 15 Queen Street." }],
    answer: "b",
    speakBefore: "What's your address?",
    vi: "Địa chỉ của bạn là gì? ___",
    optVi: ["a. Đó là một tòa tháp ở đường King.", "b. Đó là số 15 đường Queen."],
  },
  {
    id: 4,
    stem: "___? It's 23 Le Thanh Tong Street.",
    options: [{ key: "a", text: "What's his address" }, { key: "b", text: "Where does he live" }],
    answer: "a",
    speakBefore: "It's 23 Le Thanh Tong Street.",
    vi: "___? Đó là số 23 đường Lê Thánh Tông.",
    optVi: ["a. Địa chỉ của anh ấy là gì", "b. Anh ấy sống ở đâu"],
  },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as the other exercise pages.
// Score is based on the FIRST attempt only — retry rounds ("Vòng 2, 3...") are
// practice and never change the saved score.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================
const UNIT_ID = "unit2"; // Grade 5 keeps its historic un-prefixed unit ids (same as Vocabulary)
const UNIT_LABEL = "Unit 2: Our Homes";
let eqStudent = "";
let eqAnswers = {};
let saveQueue = Promise.resolve();

function listenEnabled() {
  return LISTEN_ITEMS.length > 0 && LISTEN_ITEMS.every(x => !!x.answer);
}

function eqTotalItems() {
  return (
    FITB_ITEMS.length +
    (SCORE_ORDERING ? ORDER_ITEMS.length : 0) +
    (listenEnabled() ? LISTEN_ITEMS.length : 0) +
    COMPLETE_WORDS.length +
    PAIR_ITEMS.length +
    CHOOSE_ITEMS.length
  );
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  // Only the FIRST attempt is scored. Retry rounds are practice only, so they must
  // never overwrite the first answer's result.
  if (eqAnswers[key]) return;
  eqAnswers[key] = { question, studentAnswer, correctAnswer, correct };
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
  return item.stem.replace("___", optionText(item, item.answer));
}

// ---- "Xong rồi!" screen shared by every scored section / quiz part ----
// onNext (optional) overrides what the button does; by default it jumps to the next section tab.
function showSectionComplete(host, message, hasNext, mascotType, onNext, nextLabel) {
  window.EQMascot && window.EQMascot.show("mascot-box", mascotType || "complete_exercise");
  host.innerHTML = `
    <div class="stage-complete">
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
        if (cfg.scored && round === 1) {
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
  const stemHtml = escapeHtml(item.stem).replace("___", `<span class="q-blank" id="q-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`);
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
    <div>
      ${item.audio
        ? `<audio class="q-audio" id="q-audio" controls preload="auto" src="${escapeHtml(item.audio)}"></audio><div class="q-vi" style="margin:0 0 6px;">Track 3 có cả câu 1 và câu 2. Nghe rồi chọn đáp án.</div>`
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
      say(fullSentence(item));
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

// ---- 5b) Complete the words (typed letters, picture clue, no audio) ----
function renderCompleteWord(host, item, ctx) {
  host.innerHTML = `
    ${ctx.top}
    <img class="q-pic" src="${item.img}" alt="">
    <div class="cw-row">
      <span>${ctx.i + 1}. ${escapeHtml(item.before)}</span>
      <span class="cw-word">
        <span class="cw-letter">${escapeHtml(item.letter)}</span>
        <input class="cw-input" id="cw-input" type="text" inputmode="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="…" aria-label="Các chữ cái còn thiếu">
        <span>${escapeHtml(item.after)}</span>
      </span>
    </div>
    <div style="text-align:center;">
      <button type="button" class="eq-translate-btn" id="cw-translate">🔤 Dịch</button>
      <div class="q-vi" id="cw-vi" style="display:none;">${escapeHtml(item.vi)}</div>
    </div>
    <div class="fitb-row" style="justify-content:center;margin-top:8px;">
      <button class="btn btn-primary btn-sm" id="cw-check">Kiểm tra</button>
    </div>
    <div class="fitb-feedback" id="cw-feedback" style="text-align:center;"></div>`;

  const input = host.querySelector("#cw-input");
  const checkBtn = host.querySelector("#cw-check");
  const feedback = host.querySelector("#cw-feedback");
  const transBtn = host.querySelector("#cw-translate");
  let answered = false;

  transBtn.addEventListener("click", () => {
    const viEl = host.querySelector("#cw-vi");
    const showing = viEl.style.display !== "none";
    viEl.style.display = showing ? "none" : "block";
    transBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });

  function check() {
    if (answered) return;
    const typed = input.value.trim().toLowerCase().replace(/\s+/g, "");
    if (!typed) return;
    answered = true;
    const word = item.answer.toLowerCase();
    const rest = word.slice(1);
    // accept just the missing letters ("ouse") or the whole word ("house")
    const correct = typed === rest || typed === word;
    input.disabled = true;
    checkBtn.disabled = true;
    input.classList.add(correct ? "ok" : "no");
    sfx(correct);
    feedback.textContent = correct ? `✓ Chính xác! ${item.answer}` : `Đáp án đúng: ${item.answer}`;
    feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
    ctx.done(correct, {
      key: `cw-${item.id}`,
      question: `${item.before} ${item.letter}___${item.after}`,
      studentAnswer: typed === word ? typed : item.letter + typed,
      correctAnswer: item.answer,
    }, feedback);
  }
  checkBtn.addEventListener("click", check);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
}

// ---- 5c) Match and read aloud — Tap Pairs ----
// Tap a left half (you hear it), then tap the right half that completes it. A wrong pair
// shakes and the student simply tries again, so every pair ends up matched (that is the
// "retry until all correct"). Score = each left half's FIRST pairing attempt only.
function runPairs(host, preHtml, onComplete) {
  const leftItems = shuffle(PAIR_ITEMS.map(p => ({ id: p.id, text: p.left })));
  const rightItems = shuffle(PAIR_ITEMS.map(p => ({ id: p.id, text: p.right })));

  host.innerHTML = `
    ${preHtml}
    <p style="color:#666;font-size:.9rem;margin:0 0 6px;">Chạm vế bên trái để nghe, rồi chạm vế bên phải để ghép thành câu đúng.</p>
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
        eqRecordAndSave(`pair-${pair.id}`, pair.left + " …", selR.textContent.trim(), pair.right, isMatch);
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
  }
  parts.push({
    title: "Complete the words",
    instruction: "Nhìn tranh rồi điền các chữ cái còn thiếu.",
    run(host, pre, done) {
      runSequence(host, COMPLETE_WORDS, 1, { scored: true, preHtml: pre, renderItem: renderCompleteWord, onComplete: done });
    },
  });
  parts.push({
    title: "Match and read aloud",
    instruction: "Ghép hai nửa thành câu đúng rồi nghe cả câu.",
    run(host, pre, done) { runPairs(host, pre, done); },
  });
  parts.push({
    title: "Choose the correct answers",
    instruction: "Chọn câu trả lời đúng.",
    run(host, pre, done) {
      runSequence(host, CHOOSE_ITEMS.map(x => ({ ...x, keyPrefix: "choose" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
    },
  });
  return parts;
}

function runQuiz() {
  const host = document.getElementById("quiz-wrap");
  if (!host) return;
  const parts = buildQuizParts();

  function startPart(n) {
    const p = parts[n];
    const pre = `<span class="q-part-tag">Quiz · Phần ${n + 1}/${parts.length} · ${p.title}</span><p class="eq-instruction">${p.instruction}</p>`;
    p.run(host, pre, () => {
      if (n < parts.length - 1) {
        showSectionComplete(host, `Em đã hoàn thành phần "${p.title}".`, true, "complete_exercise",
          () => startPart(n + 1), `Phần tiếp theo: ${parts[n + 1].title} →`);
      } else {
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 2.", false, "complete_unit");
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
  runFITB();
  runOrdering();
  runQuiz();
  setupCrumbNav();
});

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
