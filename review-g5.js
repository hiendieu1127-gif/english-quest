// ============================================================
// Grade 5 — Review (ôn tập) for one Unit:  review-g5.html?u=1 / ?u=2 / ?u=3
//
// Content comes ONLY from what the unit already has on the website:
//   - words/pictures/sentences in vocabulary.js (VOCAB_UNITS_G5)
//   - the extra words + sentences from that unit's Exercises page (copied below)
// No outside vocabulary is added.
//
// Sections (numbered pills):
//   1 Listen      — nghe từ, chọn từ đúng            (scored)
//   2 Pictures    — nhìn hình, chọn từ đúng          (scored, only if the unit has photos)
//   3 Meaning     — đọc nghĩa tiếng Việt, chọn từ    (scored)
//   4 Missing Word— chọn từ còn thiếu trong câu      (scored)
//   5 Sentence Ordering — sắp xếp từ thành câu       (scored)
//   6 Workbook    — bài ôn từ sách cô Hiền gửi       (only shows when BOOK_DIALOGUES[unit] has items)
//
// Questions are picked at random each time, so the review feels new every visit.
// Standing rules: first attempt only is saved; wrong answers come back in Vòng 2, 3…;
// no timer auto-advance ("Tiếp theo →"); every word/sentence has audio.
// Saved to the Dashboard as section "review" of that unit.
// ============================================================

const REVIEW_COUNTS = { listen: 8, picture: 8, meaning: 8, missing: 6, order: 5 };

// ---- Extra words/sentences from each unit's Exercises page (same text as there) ----
// VN marked (*) was written by Claude for the Exercises pages — cô Hiền đã/đang xem lại.
const REVIEW_EXTRA = {
  1: {
    words: [
      ["village", "làng"], ["Australia", "nước Úc"], ["big sister", "chị gái"], ["little brother", "em trai"],
      ["tall", "cao"], ["slim", "mảnh khảnh"], ["brown hair", "tóc nâu"], ["blue eyes", "mắt xanh"],
      ["sandwiches", "bánh sandwich"], ["favourite subject", "môn học yêu thích"], ["PE", "môn Thể dục"],
      ["favourite colour", "màu yêu thích"], ["green", "màu xanh lá"], ["favourite sport", "môn thể thao yêu thích"],
      ["football", "bóng đá"],
    ],
    sentences: [
      // (*) VN written by Claude — please review
      ["I live in the countryside.", "Tôi sống ở vùng nông thôn."],
      ["What's your favourite colour?", "Màu yêu thích của bạn là gì?"],
      ["I love playing table tennis.", "Tôi rất thích chơi bóng bàn."],
    ],
  },
  2: {
    words: [
      ["Primary School", "trường tiểu học"], ["classroom", "lớp học"], ["address", "địa chỉ"], ["District", "quận"],
    ],
    sentences: [
      ["Do you live in that house?", "Bạn có sống trong ngôi nhà kia không?"],
      ["I live in Flat 15, Lotus Tower.", "Tôi sống ở căn hộ 15, tòa tháp Lotus."],
      ["What's the address of your best friend?", "Địa chỉ của bạn thân của bạn là gì?"],
      ["It's 53 George Street, Sydney.", "Đó là số 53 đường George, Sydney."],
    ],
  },
  3: {
    words: [
      ["penfriend", "bạn qua thư"], ["parents", "bố mẹ"], ["younger sister", "em gái"], ["cooks meals", "nấu các bữa ăn"],
      ["library helper", "người phụ giúp thư viện"], ["playing sports", "chơi thể thao"], ["roller skating", "trượt pa-tanh"],
    ],
    sentences: [
      ["What nationality is your new English teacher?", "Giáo viên tiếng Anh mới của bạn thuộc quốc tịch nào?"],
      ["His friend is Japanese.", "Bạn của anh ấy là người Nhật."],
      ["She likes helping her classmates because she's helpful.", "Cô ấy thích giúp đỡ các bạn cùng lớp vì cô ấy hay giúp đỡ người khác."],
      ["My new friend is very friendly and active.", "Người bạn mới của tôi rất thân thiện và năng động."],
    ],
  },
};

// ---- Missing Word: the unit's own Missing Word sentences, with hand-picked wrong
//      options (words from the same unit) so only ONE answer fits. ----
const REVIEW_MISSING = {
  1: [
    { stem: "Let me ___ a little bit about myself.", answer: "tell you", wrong: ["name", "class"], vi: "Để tôi kể cho các bạn nghe một chút về bản thân tôi." },
    { stem: "Let me ___ myself.", answer: "introduce", wrong: ["city", "food"], vi: "Để tôi giới thiệu về bản thân mình." },
    { stem: "Can you ___ me about yourself?", answer: "tell", wrong: ["pets", "class"], vi: "Bạn có thể kể cho tôi về bản thân của bạn được không?" },
    { stem: "What's your ___?", answer: "name", wrong: ["chips", "kitten"], vi: "Tên bạn là gì?" },
  ],
  2: [
    { stem: "Do you live in ___ flat?", answer: "this", wrong: ["far", "great"], vi: "Bạn có sống trong căn hộ này không?" },
    { stem: "What's your house ___?", answer: "address", wrong: ["tower", "near"], vi: "Địa chỉ nhà của bạn là gì?" },
    { stem: "It's Tran Phu ___.", answer: "street", wrong: ["best friend", "far"], vi: "Trên đường Tran Phu." },
    { stem: "It's a ___ city.", answer: "great", wrong: ["street", "flat"], vi: "Đó là một thành phố tuyệt vời." },
    { stem: "What ___ you?", answer: "about", wrong: ["this", "far"], vi: "Còn bạn thì sao?" },
  ],
  3: [
    { stem: "What ___ is he?", answer: "nationality", wrong: ["friendly", "from"], vi: "Anh ấy thuộc quốc tịch nào?" },
    { stem: "He's ___.", answer: "Japanese", wrong: ["Japan", "his"], vi: "Anh ấy là người Nhật." },
    { stem: "Where's he ___?", answer: "from", wrong: ["old", "his"], vi: "Anh ấy đến từ đâu?" },
    { stem: "What's he ___?", answer: "like", wrong: ["his", "new"], vi: "Anh ấy là người như thế nào?" },
    { stem: "He's ___.", answer: "friendly", wrong: ["his", "she"], vi: "Anh ấy thân thiện." },
    { stem: "What's ___ like?", answer: "she", wrong: ["her", "his"], vi: "Cô ấy là người như thế nào?" },
    { stem: "She's ___.", answer: "clever", wrong: ["her", "he"], vi: "Cô ấy thông minh." },
  ],
};

// ---- 6) Workbook review (from cô Hiền's book pictures) ----
// Empty = section hidden. Each dialogue = picture + lines; a line with `blank` becomes one question
// (the whole dialogue is shown, the current blank is highlighted).
// Pictures: cô Hiền uploads them to img/ with the names below (hidden until the file exists).
// VN of the blank lines: written by Claude — please review.
const BOOK_DIALOGUES = {
  1: [
    {
      title: "Read and complete",
      img: "img/review1-ex5-1.jpg",
      lines: [
        { sp: "A", t: "Where were you yesterday?" },
        { sp: "B", t: "I was at the zoo." },
        { sp: "A", t: "What's your favourite animal?" },
        { sp: "B", t: "It's ___.", blank: { options: ["a dolphin", "a panda", "a giraffe"], answer: 0, vi: "Đó là con cá heo." } },
        { sp: "A", t: "___ do you like it?", blank: { options: ["Why", "What", "Where"], answer: 0, vi: "Tại sao bạn thích nó?" } },
        { sp: "B", t: "Because it jumps and dances beautifully." },
      ],
    },
    {
      title: "Read and complete",
      img: "img/review1-ex5-2.jpg",
      lines: [
        { sp: "A", t: "My favourite food is ___. Do you like pizza, too?", blank: { options: ["pizza", "chips", "fish"], answer: 0, vi: "Món ăn yêu thích của tôi là pizza. Bạn cũng thích pizza chứ?" } },
        { sp: "B", t: "No, I ___.", blank: { options: ["don't", "do", "am"], answer: 0, vi: "Không, tôi không thích." } },
        { sp: "A", t: "What's your favourite food?" },
        { sp: "B", t: "It's ___.", blank: { options: ["a sandwich", "pizza", "fish"], answer: 0, vi: "Đó là bánh sandwich." } },
        { sp: "A", t: "A sandwich?" },
        { sp: "B", t: "Yes. I love sandwiches." },
      ],
    },
  ],
  2: [
    {
      title: "Read and complete",
      img: "img/review2-ex5-1.jpg",
      lines: [
        { sp: "A", t: "What's your address?" },
        { sp: "B", t: "It's ___.", blank: { options: ["100 Tran Hung Dao Street", "231 Nguyen Van Cu Street", "53 George Street"], answer: 0, vi: "Đó là số 100 đường Trần Hưng Đạo." } },
        { sp: "A", t: "Is it far ___ here?", blank: { options: ["from", "near", "in"], answer: 0, vi: "Nó có xa đây không?" } },
        { sp: "B", t: "Yes, it is. It's about ten kilometres from here." },
      ],
    },
    {
      title: "Read and complete",
      img: "img/review2-ex5-2.jpg",
      lines: [
        { sp: "A", t: "I live in ___ building over there.", blank: { options: ["that", "this", "it"], answer: 0, vi: "Tôi sống ở toà nhà đằng kia." } },
        { sp: "B", t: "Oh, it's near the sports centre." },
        { sp: "A", t: "___ do you live?", blank: { options: ["Where", "What", "Why"], answer: 0, vi: "Bạn sống ở đâu?" } },
        { sp: "B", t: "I live far from here, in District 5." },
        { sp: "A", t: "___ your address?", blank: { options: ["What's", "Where's", "Who's"], answer: 0, vi: "Địa chỉ của bạn là gì?" } },
        { sp: "B", t: "It's ___.", blank: { options: ["231 Nguyen Van Cu Street", "100 Tran Hung Dao Street", "53 George Street"], answer: 0, vi: "Đó là số 231 đường Nguyễn Văn Cừ." } },
      ],
    },
  ],
  3: [
    {
      title: "Read and complete",
      img: "img/review3-ex5-1.jpg",
      lines: [
        { sp: "A", t: "I have a new friend at school. He's American." },
        { sp: "B", t: "Really? I also have a friend from ___. Is he from New York?", blank: { options: ["America", "American", "Japan"], answer: 0, vi: "Thật à? Mình cũng có một người bạn đến từ nước Mỹ. Bạn ấy có phải đến từ New York không?" } },
        { sp: "A", t: "Yes, he is." },
        { sp: "B", t: "What's he like?" },
        { sp: "A", t: "He's ___. He likes helping others.", blank: { options: ["helpful", "clever", "active"], answer: 0, vi: "Bạn ấy hay giúp đỡ người khác. Bạn ấy thích giúp đỡ mọi người." } },
      ],
    },
    {
      title: "Read and complete",
      img: "img/review3-ex5-2.jpg",
      lines: [
        { sp: "A", t: "Do you have a new English teacher?" },
        { sp: "B", t: "Yes, I do." },
        { sp: "A", t: "What nationality is she?" },
        { sp: "B", t: "She's ___.", blank: { options: ["American", "Australian", "Japanese"], answer: 0, vi: "Cô ấy là người Mỹ." } },
        { sp: "A", t: "What's she ___?", blank: { options: ["like", "from", "help"], answer: 0, vi: "Cô ấy là người như thế nào?" } },
        { sp: "B", t: "She's friendly." },
      ],
    },
  ],
};

// ============================================================
// Which unit + its data
// ============================================================
const REVIEW_UNIT_NUM = parseInt(new URLSearchParams(location.search).get("u"), 10) || 1;
const REVIEW_UNIT = (window.VOCAB_UNITS_G5 || []).find(u => u.number === REVIEW_UNIT_NUM) || (window.VOCAB_UNITS_G5 || [])[0];
const UNIT_ID = REVIEW_UNIT ? REVIEW_UNIT.id : "unit" + REVIEW_UNIT_NUM;
const UNIT_LABEL = REVIEW_UNIT ? `Unit ${REVIEW_UNIT.number}: ${REVIEW_UNIT.title}` : `Unit ${REVIEW_UNIT_NUM}`;

function isSentence(en) { return /[?.!,]/.test(en) || en.split(/\s+/).length > 3; }
function normKey(s) { return String(s).trim().toLowerCase(); }

// Word pool = short vocab words of the unit + the Exercises words, de-duplicated
function buildWordPool() {
  const seen = new Set();
  const pool = [];
  (REVIEW_UNIT ? REVIEW_UNIT.words : []).forEach(w => {
    if (!w.en || isSentence(w.en) || w.group === "this-that") return;
    const k = normKey(w.en);
    if (seen.has(k)) return;
    seen.add(k);
    pool.push({ en: w.en, vi: w.vi, icon: w.icon || null, group: w.group || "" });
  });
  ((REVIEW_EXTRA[REVIEW_UNIT_NUM] || {}).words || []).forEach(([en, vi]) => {
    const k = normKey(en);
    if (seen.has(k)) return;
    seen.add(k);
    pool.push({ en, vi, icon: null, group: "" });
  });
  return pool;
}

function buildSentencePool() {
  const seen = new Set();
  const pool = [];
  (REVIEW_UNIT ? REVIEW_UNIT.words : []).forEach(w => {
    if (!w.example || !(w.stages || []).includes("sentence-shuffle")) return;
    const k = normKey(w.example);
    if (seen.has(k)) return;
    seen.add(k);
    pool.push({ en: w.example, vi: (w.viFull || w.vi || "").replace(/\s*\(.*\)\s*$/, "") });
  });
  ((REVIEW_EXTRA[REVIEW_UNIT_NUM] || {}).sentences || []).forEach(([en, vi]) => {
    const k = normKey(en);
    if (seen.has(k)) return;
    seen.add(k);
    pool.push({ en, vi });
  });
  // 3+ words so the ordering is a real task; drop answers whose VN just repeats the English
  return pool.filter(s => s.en.split(/\s+/).length >= 3 && s.vi && normKey(s.vi) !== normKey(s.en));
}

const WORD_POOL = buildWordPool();

// 3 wrong options: same group first, then anything else from the unit
function pickDistractors(word, n, pool) {
  const others = (pool || WORD_POOL).filter(w => normKey(w.en) !== normKey(word.en) && w.vi !== word.vi);
  const same = shuffle(others.filter(w => word.group && w.group === word.group));
  const rest = shuffle(others.filter(w => !(word.group && w.group === word.group)));
  return same.concat(rest).slice(0, n);
}

function makeWordQuestions(source, count, prefix, distractorPool) {
  return shuffle(source).slice(0, count).map(w => {
    const opts = shuffle([w].concat(pickDistractors(w, 3, distractorPool)));
    return { id: prefix + "-" + w.en, word: w, options: opts.map(o => o.en), answer: w.en };
  });
}

const QUESTIONS = {
  listen: makeWordQuestions(WORD_POOL, REVIEW_COUNTS.listen, "listen"),
  // picture wrong options = other pictured words of the unit (never "eleven" under a photo of a flat)
  picture: makeWordQuestions(WORD_POOL.filter(w => w.icon), REVIEW_COUNTS.picture, "pic", WORD_POOL.filter(w => w.icon)),
  meaning: makeWordQuestions(WORD_POOL.filter(w => !/^\d+$/.test(w.vi) || Math.random() < 0.3), REVIEW_COUNTS.meaning, "mean"),
  missing: shuffle(REVIEW_MISSING[REVIEW_UNIT_NUM] || []).slice(0, REVIEW_COUNTS.missing).map((m, idx) => {
    const opts = shuffle([m.answer].concat(m.wrong));
    const keys = ["a", "b", "c", "d"];
    return {
      id: "miss-" + m.stem + "-" + m.answer,
      stem: m.stem,
      options: opts.map((t, i) => ({ key: keys[i], text: t })),
      answer: keys[opts.indexOf(m.answer)],
      vi: m.vi,
      listenFull: true,
    };
  }),
  order: shuffle(buildSentencePool()).slice(0, REVIEW_COUNTS.order).map(s => ({
    id: "order-" + s.en,
    chunks: s.en.split(/\s+/).map(t => ({ en: t })),
    answer: s.en,
    answerVi: s.vi,
  })),
  // options keep the book's order a/b/c? No — shuffled so the answer isn't always "a"
  book: (BOOK_DIALOGUES[REVIEW_UNIT_NUM] || []).flatMap((d, di) =>
    d.lines.map((ln, li) => ({ ln, li })).filter(x => x.ln.blank).map(({ ln, li }) => {
      const keys = ["a", "b", "c", "d"];
      const right = ln.blank.options[ln.blank.answer];
      const opts = shuffle(ln.blank.options);
      return {
        id: `book-${di + 1}-${li + 1}`,
        dialogue: d,
        dialogueIdx: di,
        lineIdx: li,
        stem: ln.t,
        options: opts.map((t, i) => ({ key: keys[i], text: t })),
        answer: keys[opts.indexOf(right)],
        vi: ln.blank.vi || "",
      };
    })
  ),
};

// ============================================================
// Results saving — first attempt only (retries kept separately), saveQueue-serialized
// ============================================================
let eqStudent = "";
let eqAnswers = {};
let eqRetries = [];
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return QUESTIONS.listen.length + QUESTIONS.picture.length + QUESTIONS.meaning.length +
    QUESTIONS.missing.length + QUESTIONS.order.length + QUESTIONS.book.length;
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  // Review of a section that was already finished: practice only, the Dashboard keeps the first attempt.
  if (window.EQSectionLock && window.EQSectionLock.isReviewing()) return;
  if (eqAnswers[key]) eqRetries.push({ question, studentAnswer, correctAnswer, correct });
  else eqAnswers[key] = { question, studentAnswer, correctAnswer, correct };
  if (!window.EQResults || !eqStudent) return;
  const values = Object.values(eqAnswers);
  const payload = {
    student: eqStudent,
    unitId: UNIT_ID,
    unitLabel: UNIT_LABEL,
    section: "review",
    correct: values.filter(a => a.correct).length,
    total: eqTotalItems(),
    answers: values,
    retries: eqRetries.slice(),
  };
  saveQueue = saveQueue.then(() => window.EQResults.saveResult(payload).catch(() => {}));
}

// ============================================================
// Helpers
// ============================================================
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function shuffleNotSame(arr) {
  if (arr.length < 2) return arr.slice();
  let out = shuffle(arr), guard = 0;
  while (out.every((x, i) => x === arr[i]) && guard++ < 20) out = shuffle(arr);
  return out;
}
function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function renderDots(current, total) {
  let dots = "";
  for (let i = 0; i < total; i++) dots += `<span class="runner-dot ${i < current ? "done" : i === current ? "current" : ""}"></span>`;
  return `<div class="runner-dots">${dots}</div>`;
}
function roundHeader(round) {
  return round > 1
    ? `<div style="background:#fff3cd;color:#8a6b00;font-weight:700;padding:10px 16px;border-radius:12px;margin-bottom:14px;text-align:center;">🔄 Làm lại câu sai — Vòng ${round}</div>`
    : "";
}
// a bare "I" is read as "capital I" by some voices — "aye" sounds right (spoken text only)
function say(text) {
  if (!window.EQSpeak || !text) return;
  window.EQSpeak.speak(text.trim() === "I" ? "aye" : text);
}
function sfx(correct) {
  window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
  window.EQMascot && window.EQMascot.show("mascot-box", correct ? "correct" : "wrong");
}
function addNextButton(anchor, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-primary btn-sm";
  btn.textContent = "Tiếp theo →";
  btn.style.marginTop = "14px";
  anchor.insertAdjacentElement("afterend", btn);
  btn.addEventListener("click", onClick);
}

// "Xong rồi!" screen after each section
function showSectionComplete(host, message, hasNext, mascotType) {
  window.EQMascot && window.EQMascot.show("mascot-box", mascotType || "complete_exercise");
  host.innerHTML = `
    <div class="stage-complete">
      <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h3>Xong rồi!</h3>
      <p>${message}</p>
      ${hasNext ? `<p style="color:#6b6b76;margin-top:4px;">Sẵn sàng cho dạng bài tiếp theo chưa?</p><button type="button" class="btn btn-primary section-next-btn" style="margin-top:14px;">Dạng bài tiếp theo →</button>` : ""}
    </div>`;
  const btn = host.querySelector(".section-next-btn");
  btn && btn.addEventListener("click", () => {
    const crumbs = visibleCrumbs();
    const active = document.querySelector(".ex-panel.active");
    const idx = crumbs.findIndex(c => c.dataset.target === active.id);
    if (idx >= 0 && idx < crumbs.length - 1) switchPanel(crumbs[idx + 1].dataset.target);
  });
}

// ============================================================
// One-question-at-a-time runner: Vòng 2, 3… for wrong answers, manual "Tiếp theo →"
// ============================================================
function runSequence(host, items, round, cfg) {
  const total = items.length;
  let i = 0;
  const wrongItems = [];
  function show() {
    const item = items[i];
    cfg.renderItem(host, item, {
      i, total, round,
      top: roundHeader(round) + renderDots(i, total),
      done(correct, rec, anchor) {
        eqRecordAndSave(rec.key, rec.question, rec.studentAnswer, rec.correctAnswer, correct);
        if (!correct) wrongItems.push(item);
        addNextButton(anchor, () => {
          i++;
          if (i < total) show();
          else if (wrongItems.length) runSequence(host, wrongItems, round + 1, cfg);
          else cfg.onComplete();
        });
      },
    });
  }
  if (round > 1) host.scrollIntoView({ behavior: "smooth", block: "start" });
  show();
}

// ============================================================
// Word questions (Listen / Pictures / Meaning) — 4 options A–D
// ============================================================
function renderWordItem(mode) {
  return function (host, item, ctx) {
    const w = item.word;
    let prompt = "";
    if (mode === "listen") {
      prompt = `<div style="text-align:center;"><button type="button" class="big-listen-btn" id="w-listen">🔊</button><div class="q-vi" style="margin-top:6px;">Chạm loa để nghe lại</div></div>`;
    } else if (mode === "picture") {
      prompt = `<img class="q-pic" src="${escapeHtml(w.icon)}" alt="" style="width:190px;">`;
    } else {
      prompt = `<p class="mcq-def">${escapeHtml(w.vi)}</p>`;
    }
    const letters = ["A", "B", "C", "D"];
    host.innerHTML = `
      ${ctx.top}
      ${prompt}
      <div class="mcq-options" style="margin-top:12px;">
        ${item.options.map((o, idx) => `<button type="button" class="mcq-option" data-val="${escapeHtml(o)}"><span class="mcq-letter">${letters[idx]}</span>${escapeHtml(o)}</button>`).join("")}
      </div>
      <div class="fitb-feedback" id="w-feedback"></div>`;

    const feedback = host.querySelector("#w-feedback");
    const listenBtn = host.querySelector("#w-listen");
    if (listenBtn) {
      listenBtn.addEventListener("click", () => say(w.en));
      say(w.en); // play once when the question appears
    }
    let answered = false;
    host.querySelectorAll(".mcq-option").forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = btn.dataset.val;
        const correct = chosen === item.answer;
        host.querySelectorAll(".mcq-option").forEach(b => {
          b.disabled = true;
          if (b.dataset.val === item.answer) b.classList.add("correct");
        });
        if (!correct) btn.classList.add("wrong");
        sfx(correct);
        say(item.answer);
        feedback.innerHTML = (correct ? "✓ Chính xác!" : `Đáp án đúng: ${escapeHtml(item.answer)}`) +
          (mode !== "meaning" ? ` <span style="color:#666;font-weight:600;">— ${escapeHtml(w.vi)}</span>` : "");
        feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
        const qLabel = mode === "listen" ? "Nghe: " + w.en : mode === "picture" ? "Hình: " + w.en : w.vi;
        ctx.done(correct, { key: item.id, question: qLabel, studentAnswer: chosen, correctAnswer: item.answer }, feedback);
      });
    });
  };
}

// ============================================================
// Sentence choice (Missing Word / Workbook) — reads the FULL sentence after answering
// ============================================================
function fullSentence(item) {
  const o = item.options.find(x => x.key === item.answer);
  return item.stem.replace("___", o ? o.text : "");
}
function renderChoiceItem(host, item, ctx) {
  const stemHtml = escapeHtml(item.stem).replace("___", `<span class="q-blank" id="q-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`);
  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${ctx.i + 1}. ${stemHtml}</p>
    ${item.noTranslate ? "" : `<button type="button" class="eq-translate-btn" id="q-translate">🔤 Dịch</button><div class="q-vi" id="q-vi" style="display:none;">${escapeHtml(item.vi)}</div>`}
    <div class="q-options">
      ${item.options.map(o => `<button type="button" class="mcq-option" data-key="${o.key}"><span class="mcq-letter">${o.key}</span>${escapeHtml(o.text)}</button>`).join("")}
    </div>
    <div class="fitb-feedback" id="q-feedback"></div>`;
  const feedback = host.querySelector("#q-feedback");
  const trBtn = host.querySelector("#q-translate");
  trBtn && trBtn.addEventListener("click", () => {
    const el = host.querySelector("#q-vi");
    const showing = el.style.display !== "none";
    el.style.display = showing ? "none" : "block";
    trBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });
  let answered = false;
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
      const ans = item.options.find(o => o.key === item.answer).text;
      host.querySelector("#q-blank").textContent = ans;
      sfx(correct);
      say(fullSentence(item)); // full sentence with the right word, never "blank"
      feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${item.answer}. ${ans}`;
      feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
      ctx.done(correct, {
        key: item.id,
        question: fullSentence(item),
        studentAnswer: `${chosen}. ${item.options.find(o => o.key === chosen).text}`,
        correctAnswer: `${item.answer}. ${ans}`,
      }, feedback);
    });
  });
}

// ============================================================
// Workbook "Read and complete" — whole dialogue + picture, current blank highlighted
// ============================================================
// blanks already answered correctly stay filled in on the next questions of the same dialogue
const bookFilled = {};
function renderBookItem(host, item, ctx) {
  const d = item.dialogue;
  const linesHtml = d.lines.map((ln, li) => {
    let text = escapeHtml(ln.t);
    const filled = bookFilled[item.dialogueIdx + "-" + li];
    if (li === item.lineIdx) {
      text = text.replace("___", `<span class="q-blank" id="q-blank">...</span>`);
    } else if (filled) {
      text = text.replace("___", `<span style="color:#3fae4f;font-weight:800;text-decoration:underline;">${escapeHtml(filled)}</span>`);
    } else {
      text = text.replace("___", `<span style="letter-spacing:1px;color:#aaa;">______</span>`);
    }
    const cur = li === item.lineIdx;
    return `<div class="book-line${cur ? " current" : ""}"><b style="color:${ln.sp === "A" ? "#5b7cfa" : "#e0703c"};">${ln.sp}:</b> ${text}</div>`;
  }).join("");
  host.innerHTML = `
    ${ctx.top}
    <span class="q-part-tag">${escapeHtml(d.title)}</span>
    <img class="q-pic" src="${escapeHtml(d.img)}" alt="" style="width:auto;max-width:100%;max-height:260px;" onerror="this.style.display='none'">
    <div class="book-dialogue">${linesHtml}</div>
    <button type="button" class="eq-translate-btn" id="q-translate">🔤 Dịch</button>
    <div class="q-vi" id="q-vi" style="display:none;">${escapeHtml(item.vi)}</div>
    <div class="q-options">
      ${item.options.map(o => `<button type="button" class="mcq-option" data-key="${o.key}"><span class="mcq-letter">${o.key}</span>${escapeHtml(o.text)}</button>`).join("")}
    </div>
    <div class="fitb-feedback" id="q-feedback"></div>`;
  const feedback = host.querySelector("#q-feedback");
  const trBtn = host.querySelector("#q-translate");
  trBtn.addEventListener("click", () => {
    const el = host.querySelector("#q-vi");
    const showing = el.style.display !== "none";
    el.style.display = showing ? "none" : "block";
    trBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
  });
  let answered = false;
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
      const ans = item.options.find(o => o.key === item.answer).text;
      const blankEl = host.querySelector("#q-blank");
      blankEl.textContent = ans;
      if (correct) bookFilled[item.dialogueIdx + "-" + item.lineIdx] = ans;
      sfx(correct);
      say(fullSentence(item)); // the whole line with the right word, never "blank"
      feedback.textContent = correct ? "✓ Chính xác!" : `Đáp án đúng: ${item.answer}. ${ans}`;
      feedback.className = correct ? "fitb-feedback ok" : "fitb-feedback no";
      ctx.done(correct, {
        key: item.id,
        question: fullSentence(item),
        studentAnswer: `${chosen}. ${item.options.find(o => o.key === chosen).text}`,
        correctAnswer: `${item.answer}. ${ans}`,
      }, feedback);
    });
  });
}

// ============================================================
// Sentence Ordering — tap words in order; tap a placed word to send just that one back
// ============================================================
function renderOrderItem(host, item, ctx) {
  const shuffled = shuffleNotSame(item.chunks.map((c, idx) => ({ ...c, origIdx: idx })));
  host.innerHTML = `
    ${ctx.top}
    <button type="button" class="eq-translate-btn" id="order-translate">🔤 Dịch</button>
    <div class="q-vi" id="order-vi" style="display:none;">${escapeHtml(item.answerVi)}</div>
    <div class="sentence-answer-strip" id="order-strip"></div>
    <div class="sentence-chunks" id="order-pool">
      ${shuffled.map(c => `<div class="sentence-chunk" data-orig="${c.origIdx}">${escapeHtml(c.en)}</div>`).join("")}
    </div>
    <div class="fitb-row" style="margin-top:14px;">
      <button class="btn btn-secondary btn-sm" id="order-reset">Làm lại</button>
      <button class="btn btn-primary btn-sm" id="order-check">Kiểm tra</button>
    </div>
    <div class="fitb-feedback" id="order-feedback"></div>`;

  const strip = host.querySelector("#order-strip");
  const pool = host.querySelector("#order-pool");
  const feedback = host.querySelector("#order-feedback");
  const trBtn = host.querySelector("#order-translate");
  const resetBtn = host.querySelector("#order-reset");
  const checkBtn = host.querySelector("#order-check");
  let placed = [];
  let checked = false;

  trBtn.addEventListener("click", () => {
    const el = host.querySelector("#order-vi");
    const showing = el.style.display !== "none";
    el.style.display = showing ? "none" : "block";
    trBtn.textContent = showing ? "🔤 Dịch" : "🔤 Ẩn nghĩa";
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
  pool.querySelectorAll(".sentence-chunk").forEach(el => {
    el.addEventListener("click", () => {
      if (checked || el.classList.contains("used")) return;
      const origIdx = Number(el.dataset.orig);
      say(item.chunks[origIdx].en);
      placed.push({ origIdx, en: item.chunks[origIdx].en });
      el.classList.add("used");
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
    if (checked || placed.length === 0) return;
    checked = true;
    const built = placed.map(c => c.en).join(" ");
    const correct = built === item.answer;
    sfx(correct);
    feedback.innerHTML =
      (correct ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
               : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng:</span>`) +
      `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(item.answer)}</div>` +
      `<div style="color:#666;margin-top:2px;">${escapeHtml(item.answerVi)}</div>`;
    feedback.className = "fitb-feedback";
    say(item.answer);
    resetBtn.disabled = true;
    checkBtn.disabled = true;
    ctx.done(correct, { key: item.id, question: item.answer, studentAnswer: built, correctAnswer: item.answer }, feedback);
  });
}

// ============================================================
// Sections
// ============================================================
const SECTIONS = [
  { key: "listen", panel: "panel-listen", name: "Listen", renderItem: renderWordItem("listen") },
  { key: "picture", panel: "panel-picture", name: "Pictures", renderItem: renderWordItem("picture") },
  { key: "meaning", panel: "panel-meaning", name: "Meaning", renderItem: renderWordItem("meaning") },
  { key: "missing", panel: "panel-missing", name: "Missing Word", renderItem: renderChoiceItem },
  { key: "order", panel: "panel-order", name: "Sentence Ordering", renderItem: renderOrderItem },
  { key: "book", panel: "panel-book", name: "Read and complete", renderItem: renderBookItem },
];

function activeSections() { return SECTIONS.filter(s => QUESTIONS[s.key].length > 0); }

function startSection(sec) {
  const host = document.getElementById(sec.key + "-wrap");
  const list = activeSections();
  const isLast = list[list.length - 1] === sec;
  runSequence(host, QUESTIONS[sec.key], 1, {
    renderItem: sec.renderItem,
    onComplete: () => showSectionComplete(host,
      isLast ? `Em đã hoàn thành hết phần Review ${REVIEW_UNIT_NUM}. Giỏi lắm!` : `Em đã hoàn thành phần ${sec.name}.`,
      !isLast, isLast ? "complete_unit" : "complete_exercise"),
  });
}

function visibleCrumbs() {
  return Array.from(document.querySelectorAll(".eq-crumb")).filter(c => c.style.display !== "none");
}

const startedPanels = new Set();
function switchPanel(targetId) {
  document.querySelectorAll(".ex-panel").forEach(p => p.classList.toggle("active", p.id === targetId));
  document.querySelectorAll(".eq-crumb").forEach(c => c.classList.toggle("active", c.dataset.target === targetId));
  // start a section the first time it is opened (so Listen's audio plays when the student is there)
  if (!startedPanels.has(targetId)) {
    startedPanels.add(targetId);
    const sec = SECTIONS.find(s => s.panel === targetId);
    sec && startSection(sec);
  }
  const row = document.getElementById("eq-crumb-row");
  window.scrollTo({ top: row.offsetTop - 90, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  // header texts + links back to the unit
  document.title = `Review ${REVIEW_UNIT_NUM} · English Quest`;
  document.getElementById("review-title").textContent = `Review ${REVIEW_UNIT_NUM}`;
  document.querySelectorAll(".unit-back-link").forEach(a => { a.href = "unit-g5.html?u=" + REVIEW_UNIT_NUM; });
  document.getElementById("unit-eyebrow").textContent = UNIT_LABEL;
  document.getElementById("nav-unit-label").textContent = "Unit " + REVIEW_UNIT_NUM;

  // hide sections with no questions, then number the visible pills 1, 2, 3…
  let n = 0;
  SECTIONS.forEach(sec => {
    const crumb = document.querySelector(`.eq-crumb[data-target="${sec.panel}"]`);
    if (!crumb) return;
    if (QUESTIONS[sec.key].length === 0) { crumb.style.display = "none"; return; }
    crumb.querySelector(".eq-crumb-num").textContent = ++n;
  });

  eqStudent = window.EQStudent ? window.EQStudent.confirmStudent() : "";
  if (window.EQResults && eqStudent) {
    window.EQResults.markInProgress({ student: eqStudent, unitId: UNIT_ID, unitLabel: UNIT_LABEL, section: "review" }).catch(() => {});
  }
  document.querySelectorAll(".eq-crumb").forEach(c => c.addEventListener("click", () => switchPanel(c.dataset.target)));
  const first = activeSections()[0];
  if (first) switchPanel(first.panel);
});
