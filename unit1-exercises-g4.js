// ============================================================
// Grade 4 — Unit 1 (My Friends) — Exercises
// Source: teacher Hien's reading passage (Lan / Minh / Celia / David).
// Same 5-section skeleton as Grade 5, content made HARDER on purpose:
//   1 Reading  2 Vocabulary  3 Fill in the Blank  4 Sentence Ordering
//   5 Quiz = True / False / Not given → Complete the table → Write the missing word
// Vietnamese translations + answer keys: written by Claude from the passage — please review.
// Rules (same as every Exercises page): only the FIRST attempt is scored, wrong answers
// come back in "Vòng 2, 3...", no timer — the student taps "Tiếp theo →".
// ============================================================

// ============================================================
// 1) READING (practice only)
// ============================================================
const READING_HTML =
  "Hello! My name is Lan. I am <mark>nine years old</mark> and I am from Viet Nam. " +
  "I <mark>live in</mark> Ha Noi with my <mark>parents</mark> and my <mark>younger brother</mark>, Minh. He is seven years old.<br><br>" +
  "This is my <mark>best friend</mark>, Celia. She is nine years old, <mark>too</mark>. She is from Britain, <mark>but</mark> she lives in Viet Nam " +
  "with her <mark>family</mark> now. Celia likes <mark>drawing</mark> and <mark>playing badminton</mark>.<br><br>" +
  "David is my <mark>new friend</mark>. He is eight years old and he is from America. He is <mark>in my class</mark>. " +
  "David likes football, but he <mark>doesn't like</mark> badminton. We <mark>often</mark> play football <mark>together</mark> <mark>after school</mark>.";

const READING_VI =
  "Xin chào! Tên mình là Lan. Mình 9 tuổi và mình đến từ Việt Nam. " +
  "Mình sống ở Hà Nội với bố mẹ và em trai của mình, Minh. Em ấy 7 tuổi. " +
  "Đây là bạn thân của mình, Celia. Bạn ấy cũng 9 tuổi. Bạn ấy đến từ nước Anh, nhưng bây giờ bạn ấy sống ở Việt Nam " +
  "với gia đình. Celia thích vẽ và chơi cầu lông. " +
  "David là bạn mới của mình. Bạn ấy 8 tuổi và bạn ấy đến từ nước Mỹ. Bạn ấy học cùng lớp với mình. " +
  "David thích bóng đá, nhưng bạn ấy không thích cầu lông. Chúng mình thường chơi bóng đá cùng nhau sau giờ học.";

// ============================================================
// 2) VOCABULARY (practice only) — flip cards with audio
// ============================================================
const VOCAB_ITEMS = [
  { en: "nine years old", vi: "9 tuổi" },
  { en: "live in", vi: "sống ở" },
  { en: "parents", vi: "bố mẹ" },
  { en: "younger brother", vi: "em trai" },
  { en: "best friend", vi: "bạn thân" },
  { en: "too", vi: "cũng (vậy)" },
  { en: "but", vi: "nhưng" },
  { en: "family", vi: "gia đình" },
  { en: "drawing", vi: "vẽ" },
  { en: "playing badminton", vi: "chơi cầu lông" },
  { en: "new friend", vi: "bạn mới" },
  { en: "in my class", vi: "học cùng lớp với mình" },
  { en: "doesn't like", vi: "không thích" },
  { en: "often", vi: "thường thường" },
  { en: "together", vi: "cùng nhau" },
  { en: "after school", vi: "sau giờ học" },
];

// ============================================================
// 3) FILL IN THE BLANK (scored: 6) — 3 choices, some need thinking
// ============================================================
const FITB_ITEMS = [
  {
    id: 1, stem: "Lan lives in ___ with her family.",
    options: [{ key: "a", text: "Ha Noi" }, { key: "b", text: "Britain" }, { key: "c", text: "America" }],
    answer: "a", vi: "Lan sống ở ___ với gia đình.", optVi: ["a. Hà Nội", "b. nước Anh", "c. nước Mỹ"],
  },
  {
    id: 2, stem: "Minh is Lan's ___.",
    options: [{ key: "a", text: "best friend" }, { key: "b", text: "younger brother" }, { key: "c", text: "new friend" }],
    answer: "b", vi: "Minh là ___ của Lan.", optVi: ["a. bạn thân", "b. em trai", "c. bạn mới"],
  },
  {
    id: 3, stem: "Celia is from Britain, but now she lives in ___.",
    options: [{ key: "a", text: "Britain" }, { key: "b", text: "America" }, { key: "c", text: "Viet Nam" }],
    answer: "c", vi: "Celia đến từ nước Anh, nhưng bây giờ bạn ấy sống ở ___.", optVi: ["a. nước Anh", "b. nước Mỹ", "c. Việt Nam"],
  },
  {
    id: 4, stem: "David doesn't like ___.",
    options: [{ key: "a", text: "football" }, { key: "b", text: "badminton" }, { key: "c", text: "school" }],
    answer: "b", vi: "David không thích ___.", optVi: ["a. bóng đá", "b. cầu lông", "c. trường học"],
  },
  {
    id: 5, stem: "David is in Lan's ___.",
    options: [{ key: "a", text: "family" }, { key: "b", text: "house" }, { key: "c", text: "class" }],
    answer: "c", vi: "David ở trong ___ của Lan.", optVi: ["a. gia đình", "b. ngôi nhà", "c. lớp học"],
  },
  {
    id: 6, stem: "___ is the youngest.",
    options: [{ key: "a", text: "Minh" }, { key: "b", text: "David" }, { key: "c", text: "Lan" }],
    answer: "a", why: "Minh is seven. David is eight. Lan is nine.",
    vi: "___ là người nhỏ tuổi nhất.", optVi: ["a. Minh", "b. David", "c. Lan"],
  },
].map(x => ({ ...x, listenFull: true }));

// ============================================================
// 4) SENTENCE ORDERING (scored: 4) — sentences from the passage
// ============================================================
const ORDER_ITEMS = [
  {
    id: 1,
    chunks: [
      { en: "I", vi: "mình" }, { en: "live in", vi: "sống ở" }, { en: "Ha Noi", vi: "Hà Nội" },
      { en: "with", vi: "với" }, { en: "my parents.", vi: "bố mẹ mình." },
    ],
    answer: "I live in Ha Noi with my parents.",
    answerVi: "Mình sống ở Hà Nội với bố mẹ.",
  },
  {
    id: 2,
    chunks: [
      { en: "Celia", vi: "Celia" }, { en: "likes", vi: "thích" }, { en: "drawing", vi: "vẽ" },
      { en: "and", vi: "và" }, { en: "playing badminton.", vi: "chơi cầu lông." },
    ],
    answer: "Celia likes drawing and playing badminton.",
    answerVi: "Celia thích vẽ và chơi cầu lông.",
  },
  {
    id: 3,
    chunks: [
      { en: "David likes football,", vi: "David thích bóng đá," }, { en: "but", vi: "nhưng" },
      { en: "he", vi: "bạn ấy" }, { en: "doesn't like", vi: "không thích" }, { en: "badminton.", vi: "cầu lông." },
    ],
    answer: "David likes football, but he doesn't like badminton.",
    answerVi: "David thích bóng đá, nhưng bạn ấy không thích cầu lông.",
  },
  {
    id: 4,
    chunks: [
      { en: "We", vi: "chúng mình" }, { en: "often", vi: "thường" }, { en: "play football", vi: "chơi bóng đá" },
      { en: "together", vi: "cùng nhau" }, { en: "after school.", vi: "sau giờ học." },
    ],
    answer: "We often play football together after school.",
    answerVi: "Chúng mình thường chơi bóng đá cùng nhau sau giờ học.",
  },
];

// ============================================================
// 5a) QUIZ · True / False / Not given (scored: 6)
//     "Not given" = the passage does not say it.
// ============================================================
const TF_OPTIONS = [{ key: "a", text: "True" }, { key: "b", text: "False" }, { key: "c", text: "Not given" }];
const TF_OPT_VI = ["a. Đúng", "b. Sai", "c. Bài không nói tới"];
const TF_ITEMS = [
  { id: 1, stem: "Lan has a younger brother.", answer: "a", vi: "Lan có một em trai." },
  { id: 2, stem: "Celia lives in Britain now.", answer: "b", vi: "Bây giờ Celia sống ở nước Anh.", why: "She lives in Viet Nam now." },
  { id: 3, stem: "Lan and Celia are the same age.", answer: "a", vi: "Lan và Celia bằng tuổi nhau.", why: "They are both nine." },
  { id: 4, stem: "David likes badminton.", answer: "b", vi: "David thích cầu lông.", why: "He doesn't like badminton." },
  { id: 5, stem: "Minh likes football.", answer: "c", vi: "Minh thích bóng đá.", why: "The passage doesn't say it." },
  { id: 6, stem: "Lan and David are in the same class.", answer: "a", vi: "Lan và David học cùng lớp.", why: "He is in my class." },
].map(x => ({ ...x, options: TF_OPTIONS, optVi: TF_OPT_VI, listenFull: true }));

// ============================================================
// 5b) QUIZ · Complete the table (scored: 6) — tap a blank, then a word from the box
//     Lan's row is the example. The box has extra wrong words on purpose.
//     An answer can be a list when more than one word is right (Celia likes two things).
// ============================================================
const TABLE_FIELDS = [
  { key: "age", label: "Age" },
  { key: "country", label: "From" },
  { key: "likes", label: "Likes" },
];
const TABLE_ROWS = [
  { name: "Lan", age: "nine", country: "Viet Nam", likes: "—", example: true },
  { name: "Celia", age: "nine", country: "Britain", likes: ["drawing", "badminton"] },
  { name: "David", age: "eight", country: "America", likes: "football" },
];
const TABLE_BANK = ["seven", "eight", "nine", "Britain", "America", "Viet Nam", "football", "badminton", "drawing"];
const TABLE_DONE_SPEAK = "Celia is nine years old. She is from Britain. She likes drawing and badminton. David is eight years old. He is from America. He likes football.";

// ============================================================
// 5c) QUIZ · Write the missing word (scored: 6) — typed, no hints (hardest)
// ============================================================
const WRITE_ITEMS = [
  { id: 1, before: "I live in Ha Noi", after: "my parents.", answer: ["with"], full: "I live in Ha Noi with my parents.", vi: "Mình sống ở Hà Nội với bố mẹ." },
  { id: 2, before: "Minh is my younger", after: ".", answer: ["brother"], full: "Minh is my younger brother.", vi: "Minh là em trai của mình." },
  { id: 3, before: "Celia is nine years old,", after: ".", answer: ["too"], full: "Celia is nine years old, too.", vi: "Celia cũng 9 tuổi." },
  { id: 4, before: "She is from Britain,", after: "she lives in Viet Nam.", answer: ["but"], full: "She is from Britain, but she lives in Viet Nam.", vi: "Bạn ấy đến từ nước Anh, nhưng bạn ấy sống ở Việt Nam." },
  { id: 5, before: "David", after: "like badminton.", answer: ["doesn't", "does not", "doesnt"], full: "David doesn't like badminton.", vi: "David không thích cầu lông." },
  { id: 6, before: "We often play football together after", after: ".", answer: ["school"], full: "We often play football together after school.", vi: "Chúng mình thường chơi bóng đá cùng nhau sau giờ học." },
];

// ============================================================
// Results saving — FIRST attempt only
// ============================================================
const UNIT_ID = "g4-unit1";
const UNIT_LABEL = "Unit 1: My Friends";
let eqStudent = "";
let eqAnswers = {};
let saveQueue = Promise.resolve();

function eqTotalItems() {
  const blanks = TABLE_ROWS.filter(r => !r.example).length * TABLE_FIELDS.length;
  return FITB_ITEMS.length + ORDER_ITEMS.length + TF_ITEMS.length + blanks + WRITE_ITEMS.length;
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  if (eqAnswers[key]) return;
  eqAnswers[key] = { question, studentAnswer, correctAnswer, correct };
  if (!window.EQResults || !eqStudent) return;
  const values = Object.values(eqAnswers);
  const payload = {
    student: eqStudent,
    unitId: UNIT_ID,
    unitLabel: UNIT_LABEL,
    section: "exercises",
    correct: values.filter(a => a.correct).length,
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
      if (answered) say(item.answerSentence ? item.stem + " " + item.answerSentence : fullSentence(item)); // after answering, replay = the complete sentence
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
      if (blank) blank.textContent = optionText(item, item.answer);

      const audioEl = host.querySelector("#q-audio");
      audioEl && audioEl.pause(); // don't let the recording talk over the answer read-out
      sfx(correct);
      // Read the FULL sentence with the correct answer filled in (never "blank", never the options)
      say(item.answerSentence ? item.stem + " " + item.answerSentence : fullSentence(item));
      if (listenBtn) listenBtn.textContent = "🔊 Nghe lại";

      feedback.textContent = (correct ? "✓ Chính xác!" : `Đáp án đúng: ${item.answer}. ${optionText(item, item.answer)}`) + (item.why ? ` — ${item.why}` : "");
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
    scored: true,
    renderItem: renderOrderItem,
    onComplete: () => showSectionComplete(host, "Em đã hoàn thành phần Sentence Ordering.", true, "complete_exercise"),
  });
}

// ============================================================
// 3) Fill in the Blank
// ============================================================
function runFITB() {
  const host = document.getElementById("fitb-wrap");
  if (!host) return;
  runSequence(host, FITB_ITEMS.map(x => ({ ...x, keyPrefix: "fitb" })), 1, {
    scored: true,
    renderItem: renderChoiceItem,
    onComplete: () => showSectionComplete(host, "Em đã hoàn thành phần Fill in the Blank.", true, "complete_exercise"),
  });
}

// ============================================================
// 5b) Complete the table — tap a blank, then tap a word in the box.
//     Wrong cells show the right answer, then come back empty in "Vòng 2".
// ============================================================
function tableAnswers(c) { return Array.isArray(c.answer) ? c.answer : [c.answer]; }

function runTable(host, preHtml, onComplete) {
  const cells = [];
  TABLE_ROWS.forEach((r, ri) => {
    if (r.example) return;
    TABLE_FIELDS.forEach(f => {
      cells.push({ key: `table-${r.name}-${f.key}`, row: ri, field: f.key, answer: r[f.key], value: "", locked: false, label: `${r.name} — ${f.label}` });
    });
  });
  let round = 1;
  let selected = null;
  let checked = false;

  function cellFor(ri, field) { return cells.find(c => c.row === ri && c.field === field); }
  function firstEmpty() { return cells.find(c => !c.locked && !c.value) || null; }

  function cellHtml(ri, field) {
    const r = TABLE_ROWS[ri];
    const c = cellFor(ri, field);
    if (!c) return `<td class="tb-given">${escapeHtml(r[field])}</td>`;
    let cls = "tb-blank";
    if (c.locked) cls += " ok";
    else if (checked && c.value) cls += " no";
    if (c === selected && !checked) cls += " selected";
    const fix = checked && !c.locked ? `<div class="tb-fix">→ ${escapeHtml(tableAnswers(c).join(" / "))}</div>` : "";
    return `<td><button type="button" class="${cls}" data-key="${c.key}">${c.value ? escapeHtml(c.value) : "?"}</button>${fix}</td>`;
  }

  function render() {
    const allFilled = cells.every(c => c.locked || c.value);
    host.innerHTML = `
      ${preHtml}
      ${roundHeader(round)}
      <table class="tb-table">
        <thead><tr><th></th>${TABLE_FIELDS.map(f => `<th>${escapeHtml(f.label)}</th>`).join("")}</tr></thead>
        <tbody>
          ${TABLE_ROWS.map((r, ri) => `<tr${r.example ? ' class="tb-example"' : ""}><td class="tb-name">${escapeHtml(r.name)}${r.example ? '<span class="tb-ex-tag">ví dụ</span>' : ""}</td>${TABLE_FIELDS.map(f => cellHtml(ri, f.key)).join("")}</tr>`).join("")}
        </tbody>
      </table>
      <p class="q-vi" style="margin:12px 0 6px;">Chạm vào ô <b>?</b> rồi chạm vào từ đúng bên dưới. Chú ý: có từ thừa!</p>
      <div class="sentence-chunks" id="tb-bank">
        ${TABLE_BANK.map(w => `<div class="sentence-chunk" data-word="${escapeHtml(w)}">${escapeHtml(w)}</div>`).join("")}
      </div>
      <div class="fitb-row" style="margin-top:14px;">
        <button class="btn btn-primary btn-sm" id="tb-check" ${allFilled && !checked ? "" : "disabled"}>Kiểm tra</button>
      </div>
      <div class="fitb-feedback" id="tb-feedback"></div>
      <div id="tb-actions"></div>`;

    host.querySelectorAll(".tb-blank").forEach(btn => {
      btn.addEventListener("click", () => {
        if (checked) return;
        const c = cells.find(x => x.key === btn.dataset.key);
        if (!c || c.locked) return;
        selected = c;
        render();
      });
    });
    host.querySelectorAll("#tb-bank .sentence-chunk").forEach(chip => {
      chip.addEventListener("click", () => {
        if (checked) return;
        say(chip.dataset.word);
        if (!selected || selected.locked) selected = firstEmpty();
        if (!selected) return;
        selected.value = chip.dataset.word;
        selected = firstEmpty();
        render();
      });
    });
    const checkBtn = host.querySelector("#tb-check");
    checkBtn && checkBtn.addEventListener("click", check);
  }

  function check() {
    if (checked) return;
    checked = true;
    let wrong = 0;
    cells.forEach(c => {
      if (c.locked) return;
      const ok = tableAnswers(c).includes(c.value);
      if (round === 1) eqRecordAndSave(c.key, c.label, c.value, tableAnswers(c).join(" / "), ok);
      if (ok) c.locked = true; else wrong++;
    });
    sfx(wrong === 0);
    render();
    const fb = host.querySelector("#tb-feedback");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary btn-sm";
    btn.style.marginTop = "14px";
    if (wrong === 0) {
      fb.textContent = "✓ Chính xác hết rồi!";
      fb.className = "fitb-feedback ok";
      say(TABLE_DONE_SPEAK);
      btn.textContent = "Tiếp theo →";
      btn.addEventListener("click", onComplete);
    } else {
      fb.textContent = `Còn ${wrong} ô sai — xem đáp án đúng màu đỏ ở trên, rồi làm lại nhé.`;
      fb.className = "fitb-feedback no";
      btn.textContent = "Làm lại ô sai →";
      btn.addEventListener("click", () => {
        round++;
        checked = false;
        cells.forEach(c => { if (!c.locked) c.value = ""; });
        selected = firstEmpty();
        render();
        host.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    host.querySelector("#tb-actions").appendChild(btn);
  }

  selected = firstEmpty();
  render();
}

// ============================================================
// 5c) Write the missing word — typed, no hints
// ============================================================
function normalizeTyped(s) {
  return String(s).trim().toLowerCase().replace(/[’‘`]/g, "'").replace(/[.,!?]+$/g, "").replace(/\s+/g, " ");
}

function renderWriteItem(host, item, ctx) {
  host.innerHTML = `
    ${ctx.top}
    <div class="cw-row" style="justify-content:flex-start;">
      <span>${ctx.i + 1}.</span>
      ${item.before ? `<span>${escapeHtml(item.before)}</span>` : ""}
      <input class="cw-input" id="wr-input" type="text" inputmode="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="…" aria-label="Từ còn thiếu">
      <span>${escapeHtml(item.after)}</span>
    </div>
    <div>
      <button type="button" class="eq-translate-btn" id="wr-translate">🔤 Dịch</button>
      <div class="q-vi" id="wr-vi" style="display:none;">${escapeHtml(item.vi)}</div>
    </div>
    <div class="fitb-row" style="margin-top:8px;">
      <button class="btn btn-primary btn-sm" id="wr-check">Kiểm tra</button>
    </div>
    <div class="fitb-feedback" id="wr-feedback"></div>`;

  const input = host.querySelector("#wr-input");
  const checkBtn = host.querySelector("#wr-check");
  const feedback = host.querySelector("#wr-feedback");
  const transBtn = host.querySelector("#wr-translate");
  let answered = false;

  transBtn.addEventListener("click", () => {
    const viEl = host.querySelector("#wr-vi");
    const showing = viEl.style.display !== "none";
    viEl.style.display = showing ? "none" : "block";
    transBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });

  function check() {
    if (answered) return;
    const typed = normalizeTyped(input.value);
    if (!typed) return;
    answered = true;
    const correct = item.answer.includes(typed);
    input.disabled = true;
    checkBtn.disabled = true;
    input.classList.add(correct ? "ok" : "no");
    sfx(correct);
    say(item.full);
    feedback.innerHTML =
      (correct
        ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
        : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng:</span>`) +
      `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(item.full)}</div>`;
    feedback.className = "fitb-feedback";
    ctx.done(correct, {
      key: `write-${item.id}`,
      question: `${item.before} ___ ${item.after}`.trim(),
      studentAnswer: typed,
      correctAnswer: item.answer[0],
    }, feedback);
  }
  checkBtn.addEventListener("click", check);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
}

// ============================================================
// 5) Quiz — parts run one after another
// ============================================================
function buildQuizParts() {
  return [
    {
      title: "True / False / Not given",
      instruction: "Đọc câu rồi chọn True (đúng), False (sai) hoặc Not given (bài không nói tới).",
      run(host, pre, done) {
        runSequence(host, TF_ITEMS.map(x => ({ ...x, keyPrefix: "tf" })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
      },
    },
    {
      title: "Complete the table",
      instruction: "Hoàn thành bảng thông tin về Celia và David.",
      run(host, pre, done) { runTable(host, pre, done); },
    },
    {
      title: "Write the missing word",
      instruction: "Tự gõ từ còn thiếu vào ô trống (không có gợi ý nhé!).",
      run(host, pre, done) {
        runSequence(host, WRITE_ITEMS, 1, { scored: true, preHtml: pre, renderItem: renderWriteItem, onComplete: done });
      },
    },
  ];
}

function runQuiz() {
  const host = document.getElementById("quiz-wrap");
  if (!host) return;
  const parts = buildQuizParts();

  function startPart(n) {
    const p = parts[n];
    const pre = `<button type="button" class="eq-back-link" data-target="panel-reading">← Quay lại Reading để tìm ý</button><br><span class="q-part-tag">Quiz · Phần ${n + 1}/${parts.length} · ${p.title}</span><p class="eq-instruction">${p.instruction}</p>`;
    p.run(host, pre, () => {
      if (n < parts.length - 1) {
        showSectionComplete(host, `Em đã hoàn thành phần "${p.title}".`, true, "complete_exercise",
          () => startPart(n + 1), `Phần tiếp theo: ${parts[n + 1].title} →`);
      } else {
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 1. Giỏi lắm!", false, "complete_unit");
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
  const listenBtn = document.getElementById("reading-listen-btn");
  listenBtn && listenBtn.addEventListener("click", () => say(el.textContent));
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
  // delegated, so the back-link inside the Quiz (re-drawn every question) also works
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".eq-back-link");
    if (link) switchPanel(link.dataset.target);
  });
  switchPanel("panel-reading");
}
