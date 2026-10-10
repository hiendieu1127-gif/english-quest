// ============================================================
// Grade 4 — Unit 1 (My Friends) — Exercises
// Source: teacher Hien's reading passage (Lan / Minh / Celia / David).
// Same 5-section skeleton as Grade 5, content made HARDER on purpose:
//   1 Reading  2 Vocabulary  3 Fill in the Blank  4 Sentence Ordering
//   5 Quiz = workbook: Listen and circle → Look, complete and read → Read and complete → Read and match
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
// 4) SENTENCE ORDERING (scored: 8) — 1–4 from the passage, 5–8 from the workbook "Make sentences"
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
  // --- Sách bài tập: "Make sentences" (chunks giữ đúng như sách, dấu câu tự thêm ở cuối) ---
  {
    id: 5,
    chunks: [ { en: "America", vi: "nước Mỹ" }, { en: "She is", vi: "cô ấy" }, { en: "from", vi: "đến từ" } ],
    end: ".",
    answer: "She is from America.",
    answerVi: "Cô ấy đến từ nước Mỹ.",
  },
  {
    id: 6,
    chunks: [ { en: "He", vi: "cậu ấy" }, { en: "from Thailand", vi: "đến từ Thái Lan" }, { en: "is", vi: "là / thì" } ],
    end: ".",
    answer: "He is from Thailand.",
    answerVi: "Cậu ấy đến từ Thái Lan.",
  },
  {
    id: 7,
    chunks: [ { en: "from", vi: "đến từ" }, { en: "Where is", vi: "ở đâu" }, { en: "she", vi: "cô ấy" } ],
    end: "?",
    answer: "Where is she from?",
    answerVi: "Cô ấy đến từ đâu?",
  },
  {
    id: 8,
    chunks: [ { en: "are", vi: "là / thì" }, { en: "from", vi: "đến từ" }, { en: "Where", vi: "ở đâu" }, { en: "you", vi: "bạn" } ],
    end: "?",
    answer: "Where are you from?",
    answerVi: "Bạn đến từ đâu?",
  },
];

// ============================================================
// 5) QUIZ — 4 bài từ Sách bài tập (thay 3 phần cũ)
// ============================================================

// 5a) Listen and circle (scored: 2) — mỗi câu có file audio riêng (g4-u1-listen-1/2.mp3 ở thư mục gốc repo)
const LISTEN_ITEMS = [
  { id: 1, stem: "She's from ___.", answer: "c", vi: "Cô ấy đến từ ___.",
    options: [{ key: "a", text: "Australia" }, { key: "b", text: "Malaysia" }, { key: "c", text: "America" }] },
  { id: 2, stem: "He's from ___.", answer: "c", vi: "Cậu ấy đến từ ___.",
    options: [{ key: "a", text: "Malaysia" }, { key: "b", text: "America" }, { key: "c", text: "Australia" }] },
].map(x => ({ ...x, audio: `g4-u1-listen-${x.id}.mp3`, audioNote: "Bấm ▶ để nghe, rồi chọn đáp án." }));

// 5b) Look, complete and read (scored: 4) — nhìn hình, TỰ GÕ tên nước (không hiện đáp án sẵn)
//     answer = các cách viết được chấp nhận (viết thường)
const LOOK_ITEMS = [
  { id: 1, before: "I'm from", after: ".", answer: ["australia"], full: "I'm from Australia.", image: "img/g4-u1-look-1.jpg", vi: "Mình đến từ nước Úc." },
  { id: 2, before: "Laura is from", after: ".", answer: ["britain"], full: "Laura is from Britain.", image: "img/g4-u1-look-2.jpg", vi: "Laura đến từ nước Anh." },
  { id: 3, before: "My friend is from", after: ".", answer: ["malaysia"], full: "My friend is from Malaysia.", image: "img/g4-u1-look-3.jpg", vi: "Bạn của mình đến từ Malaysia." },
  { id: 4, before: "They're from", after: ".", answer: ["thailand"], full: "They're from Thailand.", image: "img/g4-u1-look-4.jpg", vi: "Họ đến từ Thái Lan." },
];

// 5c) Read and complete (scored: 4) — cùng một hộp từ a–d cho cả 4 câu
const RC_OPTIONS = [{ key: "a", text: "he from" }, { key: "b", text: "from Britain" }, { key: "c", text: "from" }, { key: "d", text: "Australia" }];
const RC_ITEMS = [
  { id: 1, stem: "Where are you ___?", answer: "c", vi: "Bạn đến từ đâu?" },
  { id: 2, stem: "Where's ___?", answer: "a", vi: "Cậu ấy đến từ đâu?" },
  { id: 3, stem: "I'm from ___.", answer: "d", vi: "Mình đến từ nước Úc." },
  { id: 4, stem: "She's ___.", answer: "b", vi: "Cô ấy đến từ nước Anh." },
].map(x => ({ ...x, options: RC_OPTIONS }));

// 5d) Read and match (scored: 5) — đọc câu hỏi, chọn câu trả lời a–e
const RM_OPTIONS = [
  { key: "a", text: "He's from Singapore." },
  { key: "b", text: "I'm eight years old." },
  { key: "c", text: "I'm from Viet Nam." },
  { key: "d", text: "My name's Long." },
  { key: "e", text: "She's from Thailand." },
];
const RM_OPT_VI = ["a. Cậu ấy đến từ Singapore.", "b. Mình 8 tuổi.", "c. Mình đến từ Việt Nam.", "d. Mình tên là Long.", "e. Cô ấy đến từ Thái Lan."];
const RM_ITEMS = [
  { id: 1, stem: "What's your name?", answer: "d", vi: "Bạn tên là gì?" },
  { id: 2, stem: "Where are you from?", answer: "c", vi: "Bạn đến từ đâu?" },
  { id: 3, stem: "How old are you?", answer: "b", vi: "Bạn bao nhiêu tuổi?" },
  { id: 4, stem: "Where's she from?", answer: "e", vi: "Cô ấy đến từ đâu?" },
  { id: 5, stem: "Where's he from?", answer: "a", vi: "Cậu ấy đến từ đâu?" },
].map(x => ({ ...x, options: RM_OPTIONS, optVi: RM_OPT_VI, speakBefore: x.stem,
              answerSentence: RM_OPTIONS.find(o => o.key === x.answer).text }));

// ============================================================
// Results saving — FIRST attempt only
// ============================================================
const UNIT_ID = "g4-unit1";
const UNIT_LABEL = "Unit 1: My Friends";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return FITB_ITEMS.length + ORDER_ITEMS.length + LISTEN_ITEMS.length + LOOK_ITEMS.length + RC_ITEMS.length + RM_ITEMS.length;
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
  const payload = {
    student: eqStudent,
    unitId: UNIT_ID,
    unitLabel: UNIT_LABEL,
    section: "exercises",
    correct: values.filter(a => a.correct).length,
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
    ${item.image ? `<img src="${escapeHtml(item.image)}" alt="" style="display:block;max-width:100%;max-height:230px;margin:0 auto 12px;border-radius:14px;">` : ""}
    <p class="q-stem">${ctx.i + 1}. ${stemHtml}</p>
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
    const built = placed.map(c => c.en).join(" ") + (item.end || "");
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
// Typed answer (no options shown) — used by Quiz "Look, complete and read"
// ============================================================
function normalizeTyped(s) {
  return String(s).trim().toLowerCase().replace(/[’‘`]/g, "'").replace(/[.,!?]+$/g, "").replace(/\s+/g, " ");
}

function renderWriteItem(host, item, ctx) {
  host.innerHTML = `
    ${ctx.top}
    ${item.image ? `<img src="${escapeHtml(item.image)}" alt="" style="display:block;max-width:100%;max-height:230px;margin:0 auto 12px;border-radius:14px;">` : ""}
    <div class="cw-row" style="justify-content:flex-start;">
      <span>${ctx.i + 1}.</span>
      ${item.before ? `<span>${escapeHtml(item.before)}</span>` : ""}
      <input class="cw-input" id="wr-input" type="text" inputmode="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="gõ tên nước…" style="min-width:140px;" aria-label="Từ còn thiếu">
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
      key: `${item.keyPrefix || "write"}-${item.id}`,
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
  const seq = (items, prefix) => (host, pre, done) =>
    runSequence(host, items.map(x => ({ ...x, keyPrefix: prefix })), 1, { scored: true, preHtml: pre, renderItem: renderChoiceItem, onComplete: done });
  return [
    { title: "Listen and circle", instruction: "Nghe rồi chọn đáp án đúng.", run: seq(LISTEN_ITEMS, "listen") },
    { title: "Look, complete and read", instruction: "Nhìn hình rồi tự gõ tên nước để hoàn thành câu.",
      run: (host, pre, done) => runSequence(host, LOOK_ITEMS.map(x => ({ ...x, keyPrefix: "look" })), 1, { scored: true, preHtml: pre, renderItem: renderWriteItem, onComplete: done }) },
    { title: "Read and complete", instruction: "Chọn từ trong hộp (a, b, c, d) để hoàn thành câu.", run: seq(RC_ITEMS, "rc") },
    { title: "Read and match", instruction: "Đọc câu hỏi rồi chọn câu trả lời đúng.", run: seq(RM_ITEMS, "match") },
  ];
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
