// ============================================================
// Grade 5 — Unit 6 (Our School Rooms) — Exercises
// Source: teacher Hien's workbook images (Global Success 5, Unit 6)
//
// 5 sections, in this order:
//   1 Reading  2 Vocabulary  3 True / False  4 Sentence Ordering  5 Quiz
// Reading = the Quan passage ("Read and answer the questions"), no Vietnamese translation (Hien's choice).
// True / False and Sentence Ordering = 5 + 5 items sent by Hien (all from the passage).
// Quiz: Listen and circle (Track 14) → Match and read aloud → Complete the words → Choose the correct answers.
//   Listen and circle turns on by itself once all 4 recordings are on the site
//   (g5-u6-circle-1..4.wav in the repo root) — see checkAudio().
//
// AI voice: only the 8 Vocabulary cards (tap = hear the word). No voice anywhere else (Hien).
// "Dịch" translates the QUESTION only, never the answer choices. The correct answer and the
// translation of the whole sentence appear only after the student has answered.
// Sentence Ordering: only about half of the chunks have a Vietnamese meaning.
// Vietnamese written by Claude — Hien reviewed.
// ============================================================

const SCORE_ORDERING = true;

// Set at start-up by checkAudio(): true only when every recording below is reachable,
// so Listen and circle (and its questions in eqTotalItems) appear together.
let AUDIO_READY = false;

// ============================================================
// 1) READING  (practice only)
// ============================================================
const READING_HTML =
  "My name is Quan. This is my <mark>school</mark>. There are many rooms in the school. " +
  "The <mark>library</mark> and <mark>gym</mark> are on the <mark>ground floor</mark>. " +
  "The art room, music room and <mark>computer room</mark> are on the <mark>second floor</mark>. " +
  "My favourite room is the computer room. It is a nice big room. How can you get there? " +
  "Go along the <mark>corridor</mark> and <mark>turn left</mark>. The computer room is on your right.";

// ============================================================
// 2) VOCABULARY  (practice only) — the highlighted words, tap to flip
// ============================================================
const VOCAB_ITEMS = [
  { en: "school", vi: "trường học" },
  { en: "library", vi: "thư viện" },
  { en: "gym", vi: "phòng tập thể dục" },
  { en: "ground floor", vi: "tầng trệt" },
  { en: "second floor", vi: "tầng hai" },
  { en: "computer room", vi: "phòng máy tính" },
  { en: "corridor", vi: "hành lang" },
  { en: "turn left", vi: "rẽ trái" },
];

// ============================================================
// 3) TRUE / FALSE  (scored: 5) — answer key from Hien: T F T F T
// ============================================================
const TF_ITEMS = [
  { id: 1, en: "Quan's school has many rooms.", answer: "T", vi: "Trường của Quân có nhiều phòng." },
  { id: 2, en: "The library is on the second floor.", answer: "F", vi: "Thư viện ở tầng hai." },
  { id: 3, en: "The gym is on the ground floor.", answer: "T", vi: "Phòng tập thể dục ở tầng trệt." },
  { id: 4, en: "Quan's favourite room is the music room.", answer: "F", vi: "Phòng yêu thích của Quân là phòng âm nhạc." },
  { id: 5, en: "The computer room is on your right.", answer: "T", vi: "Phòng máy tính ở bên phải của bạn." },
];

// ============================================================
// 4) SENTENCE ORDERING  (scored: 5) — chunks exactly as Hien sent them.
// Only about half of the chunks carry a Vietnamese meaning (vi: "" = not translated).
// ============================================================
const ORDER_ITEMS = [
  {
    id: 1,
    chunks: [
      { en: "There", vi: "" }, { en: "are", vi: "" }, { en: "many", vi: "nhiều" }, { en: "rooms", vi: "phòng" },
      { en: "in", vi: "" }, { en: "the", vi: "" }, { en: "school", vi: "trường học" },
    ],
    answer: "There are many rooms in the school.",
    answerVi: "Có nhiều phòng trong trường.",
  },
  {
    id: 2,
    chunks: [
      { en: "The", vi: "" }, { en: "library", vi: "thư viện" }, { en: "is", vi: "" }, { en: "on", vi: "ở" },
      { en: "the", vi: "" }, { en: "ground floor", vi: "tầng trệt" },
    ],
    answer: "The library is on the ground floor.",
    answerVi: "Thư viện ở tầng trệt.",
  },
  {
    id: 3,
    chunks: [
      { en: "My", vi: "của mình" }, { en: "favourite", vi: "yêu thích" }, { en: "room", vi: "" }, { en: "is", vi: "" },
      { en: "the", vi: "" }, { en: "computer room", vi: "phòng máy tính" },
    ],
    answer: "My favourite room is the computer room.",
    answerVi: "Phòng yêu thích của mình là phòng máy tính.",
  },
  {
    id: 4,
    chunks: [
      { en: "Go", vi: "đi" }, { en: "along", vi: "" }, { en: "the", vi: "" }, { en: "corridor", vi: "hành lang" },
    ],
    answer: "Go along the corridor.",
    answerVi: "Đi dọc hành lang.",
  },
  {
    id: 5,
    chunks: [
      { en: "Go", vi: "" }, { en: "along", vi: "" }, { en: "the", vi: "" }, { en: "corridor", vi: "hành lang" },
      { en: "and", vi: "" }, { en: "turn", vi: "rẽ" }, { en: "left", vi: "trái" },
    ],
    answer: "Go along the corridor and turn left.",
    answerVi: "Đi dọc hành lang và rẽ trái.",
  },
];

// ============================================================
// 5) QUIZ
// Every item: `vi` = translation of the QUESTION only (shown by "Dịch"),
// `full` + `viFull` = the whole sentence with the right answer, shown only after answering.
// ============================================================

// ---- 5a) Listen and circle (Track 14) — a/b. Answers (workbook key): 1-b, 2-b, 3-a, 4-a ----
const LISTEN_ITEMS = [
  { id: 1, stem: "Where's the gym?",
    options: [{ key: "a", text: "It's on the first floor." }, { key: "b", text: "It's on the second floor." }], answer: "b",
    vi: "Phòng tập thể dục ở đâu?",
    full: "Where's the gym? – It's on the second floor.", viFull: "Phòng tập thể dục ở đâu? – Nó ở tầng 2." },
  { id: 2, stem: "Where's Class 5E?",
    options: [{ key: "a", text: "It's on the first floor." }, { key: "b", text: "It's on the third floor." }], answer: "b",
    vi: "Lớp 5E ở đâu?",
    full: "Where's Class 5E? – It's on the third floor.", viFull: "Lớp 5E ở đâu? – Nó ở tầng 3." },
  { id: 3, stem: "How can Minh get to the library?",
    options: [{ key: "a", text: "He can go upstairs." }, { key: "b", text: "He can go downstairs." }], answer: "a",
    vi: "Minh có thể đến thư viện bằng cách nào?",
    full: "How can Minh get to the library? – He can go upstairs.", viFull: "Minh có thể đến thư viện bằng cách nào? – Bạn ấy có thể đi lên lầu." },
  { id: 4, stem: "How can Mary get to the art room?",
    options: [{ key: "a", text: "She can go past Class 5C and turn left." }, { key: "b", text: "She can go along the corridor and turn right." }], answer: "a",
    vi: "Mary có thể đến phòng mỹ thuật bằng cách nào?",
    full: "How can Mary get to the art room? – She can go past Class 5C and turn left.", viFull: "Mary có thể đến phòng mỹ thuật bằng cách nào? – Bạn ấy có thể đi qua lớp 5C và rẽ trái." },
].map(x => ({ ...x, audio: `g5-u6-circle-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn đáp án." }));

// ---- 5b) Match and read aloud — each left half is one question, choose its right half a–d.
//      Answers (workbook key): 1-c, 2-d, 3-a, 4-b ----
const MATCH_OPTIONS = [
  { key: "a", text: "to the library?" },
  { key: "b", text: "the corridor." },
  { key: "c", text: "computer room?" },
  { key: "d", text: "on the third floor." },
];
const MATCH_ITEMS = [
  { id: 1, stem: "Where's the ___", answer: "c", vi: "… ở đâu?",
    full: "Where's the computer room?", viFull: "Phòng máy tính ở đâu?" },
  { id: 2, stem: "The art room is ___", answer: "d", vi: "Phòng mỹ thuật …",
    full: "The art room is on the third floor.", viFull: "Phòng mỹ thuật ở tầng 3." },
  { id: 3, stem: "Could you tell me the way ___", answer: "a", vi: "Bạn có thể chỉ cho mình đường …",
    full: "Could you tell me the way to the library?", viFull: "Bạn có thể chỉ cho mình đường đến thư viện không?" },
  { id: 4, stem: "Go along ___", answer: "b", vi: "Đi dọc …",
    full: "Go along the corridor.", viFull: "Đi dọc hành lang." },
].map(x => ({ ...x, options: MATCH_OPTIONS }));

// ---- 5c) Complete the words — picture + first letter given, the student TYPES the rest.
//      Answers: 1 second, 2 third (workbook key), 3 along, 4 past (confirmed by Hien).
//      Pictures drawn by Claude: img/g5-u6-complete-1..4.png ----
const COMPLETE_ITEMS = [
  { id: 1, before: "The music room is on the", word: "second", after: "floor.",
    vi: "Phòng âm nhạc ở tầng ___.", viFull: "Phòng âm nhạc ở tầng 2." },
  { id: 2, before: "The art room is on the", word: "third", after: "floor.",
    vi: "Phòng mỹ thuật ở tầng ___.", viFull: "Phòng mỹ thuật ở tầng 3." },
  { id: 3, before: "Go", word: "along", after: "the corridor and turn left.",
    vi: "Đi ___ hành lang và rẽ trái.", viFull: "Đi dọc hành lang và rẽ trái." },
  { id: 4, before: "Go", word: "past", after: "the computer room and turn right.",
    vi: "Đi ___ phòng máy tính và rẽ phải.", viFull: "Đi qua phòng máy tính và rẽ phải." },
].map(x => ({ ...x, pic: `img/g5-u6-complete-${x.id}.png` }));

// ---- 5d) Choose the correct answers — a/b. Answers (workbook key): 1-a, 2-b, 3-a, 4-b ----
const ANSWER_ITEMS = [
  { id: 1, stem: "A: Where's Class 5C? B: ___",
    options: [{ key: "a", text: "It's on the second floor." }, { key: "b", text: "I'm in Class 5C." }], answer: "a",
    vi: "A: Lớp 5C ở đâu? B: ___",
    viFull: "A: Lớp 5C ở đâu? B: Nó ở tầng 2." },
  { id: 2, stem: "A: Is the library on the second floor? B: ___",
    options: [{ key: "a", text: "That's our library." }, { key: "b", text: "No, it isn't. It's on the ground floor." }], answer: "b",
    vi: "A: Thư viện có ở tầng 2 không? B: ___",
    viFull: "A: Thư viện có ở tầng 2 không? B: Không. Nó ở tầng trệt." },
  { id: 3, stem: "A: Could you tell me the way to the music room? B: ___",
    options: [{ key: "a", text: "Go upstairs. It's on the third floor." }, { key: "b", text: "There's a music room in our school." }], answer: "a",
    vi: "A: Bạn có thể chỉ cho mình đường đến phòng âm nhạc không? B: ___",
    viFull: "A: Bạn có thể chỉ cho mình đường đến phòng âm nhạc không? B: Đi lên lầu. Nó ở tầng 3." },
  { id: 4, stem: "A: How can I get to the computer room, please? B: ___",
    options: [{ key: "a", text: "Thank you very much." }, { key: "b", text: "Go along the corridor and turn right." }], answer: "b",
    vi: "A: Làm sao để mình đến phòng máy tính? B: ___",
    viFull: "A: Làm sao để mình đến phòng máy tính? B: Đi dọc hành lang và rẽ phải." },
];

// ============================================================
// Results saving — same saveQueue-serialized pattern as the other exercise pages.
// Score is based on the FIRST attempt only — retry rounds ("Vòng 2, 3...") are
// practice and never change the saved score.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================
const UNIT_ID = "unit6"; // Grade 5 keeps its historic un-prefixed unit ids (same as Vocabulary)
const UNIT_LABEL = "Unit 6: Our School Rooms";
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
    (listenEnabled() ? LISTEN_ITEMS.length : 0) +
    MATCH_ITEMS.length +
    COMPLETE_ITEMS.length +
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

// AI voice on this page: ONLY the Vocabulary cards (Hien). Everything else stays silent — say() does nothing.
function say(text) {}
function sayVocab(text) {
  if (window.EQSpeak && text) window.EQSpeak.speak(text);
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
  if (item.full) return item.full;
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
  const hasListen = false; // no AI voice on this page
  // "Dịch" = the question only, never the answer choices
  const viHtml = item.noTranslate ? "" : `
    <button type="button" class="eq-translate-btn" id="q-translate">🔤 Dịch</button>
    <div class="q-vi" id="q-vi" style="display:none;">
      <div>${escapeHtml(item.vi || "")}</div>
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

      // Only now: the correct answer + the whole sentence and its translation
      feedback.innerHTML =
        (correct
          ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
          : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng: ${escapeHtml(item.answer)}. ${escapeHtml(optionText(item, item.answer))}</span>`) +
        `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(fullSentence(item).replace(/\s+/g, " "))}</div>` +
        (item.viFull ? `<div style="color:#666;margin-top:2px;">${escapeHtml(item.viFull)}</div>` : "");
      feedback.className = "fitb-feedback";

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
// 5c) Complete the words — picture + first letter, the student types the rest of the word
// ============================================================
function normalizeTyped(s) {
  return String(s).toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, "").trim();
}

function renderCompleteItem(host, item, ctx) {
  const first = item.word.charAt(0);
  const rest = item.word.slice(1);
  const dashes = rest.split("").map(() => "_").join(" ");
  host.innerHTML = `
    ${ctx.top}
    <img class="q-pic" src="${escapeHtml(item.pic)}" alt="Hình câu ${ctx.i + 1}" style="width:300px;max-width:100%;">
    <p class="q-stem" style="line-height:2.2;">${ctx.i + 1}. ${escapeHtml(item.before)}
      <span class="cw-word"><span class="cw-letter">${escapeHtml(first)}</span><input type="text" class="cw-input" id="cw-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${dashes}" aria-label="Gõ các chữ còn thiếu (${rest.length} chữ)"></span>
      ${escapeHtml(item.after)}</p>
    <div class="q-vi" style="margin:0 0 6px;">Gõ ${rest.length} chữ còn thiếu (chữ <strong>${escapeHtml(first)}</strong> đã có sẵn).</div>
    <button type="button" class="eq-translate-btn" id="q-translate">🔤 Dịch</button>
    <div class="q-vi" id="q-vi" style="display:none;">${escapeHtml(item.vi)}</div>
    <div class="fitb-row" style="margin-top:10px;">
      <button class="btn btn-primary btn-sm" id="cw-check">Kiểm tra</button>
    </div>
    <div class="fitb-feedback" id="q-feedback"></div>`;

  const input = host.querySelector("#cw-input");
  const checkBtn = host.querySelector("#cw-check");
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
    const t = normalizeTyped(typed);
    // accept the missing letters ("econd") or the whole word typed again ("second")
    const correct = t === normalizeTyped(rest) || t === normalizeTyped(item.word);
    input.disabled = true;
    checkBtn.disabled = true;
    input.classList.add(correct ? "ok" : "no");
    if (!correct) input.value = rest;
    sfx(correct);
    const full = `${item.before} ${item.word} ${item.after}`;
    feedback.innerHTML =
      (correct
        ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
        : `<span style="color:#e05c5c;font-weight:700;">Em gõ: "${escapeHtml(typed)}". Đáp án đúng: ${escapeHtml(item.word)}</span>`) +
      `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(full)}</div>` +
      `<div style="color:#666;margin-top:2px;">${escapeHtml(item.viFull)}</div>`;
    feedback.className = "fitb-feedback";
    ctx.done(correct, {
      key: `complete-${item.id}`,
      question: `${item.before} ${first}___ ${item.after}`,
      studentAnswer: t === normalizeTyped(item.word) ? typed : first + typed, // always the whole word as the student wrote it
      correctAnswer: item.word,
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
      ${shuffled.map(c => `<div class="sentence-chunk" data-orig="${c.origIdx}">${escapeHtml(c.en)}${c.vi ? `<span class="chunk-vi">${escapeHtml(c.vi)}</span>` : ""}</div>`).join("")}
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
    const correct = built === item.answer.replace(/[.?!]$/, "");
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
      instruction: "Nghe rồi chọn đáp án đúng (a hoặc b).",
      run(host, pre, done) {
        runSequence(host, LISTEN_ITEMS.map(x => ({ ...x, keyPrefix: "listen" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
      },
    });
  }
  parts.push({
    title: "Match and read aloud",
    instruction: "Chọn phần đúng (a, b, c hoặc d) để nối thành câu hoàn chỉnh.",
    run(host, pre, done) {
      runSequence(host, MATCH_ITEMS.map(x => ({ ...x, keyPrefix: "match" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
    },
  });
  parts.push({
    title: "Complete the words",
    instruction: "Nhìn hình rồi gõ các chữ còn thiếu để hoàn thành từ.",
    run(host, pre, done) {
      runSequence(host, COMPLETE_ITEMS, 1, { scored: true, preHtml: pre, renderItem: renderCompleteItem, onComplete: done });
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
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 6.", false, "complete_unit");
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
      sayVocab(VOCAB_ITEMS[Number(card.dataset.idx)].en);
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
  // Scored sections start only after the audio check, so the total (22, or 26 with audio)
  // is settled before the first answer is saved.
  checkAudio().then((ok) => {
    AUDIO_READY = ok;
    runTF();
    runOrdering();
    runQuiz();
  });
});

function checkAudio() {
  const urls = LISTEN_ITEMS.map(x => x.audio);
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
