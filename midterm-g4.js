// ============================================================
// Grade 4 — Đề kiểm tra giữa học kỳ 1:  midterm-g4.html?de=1 (Đề 2 thêm vào EXAMS khi cô Hiền gửi)
//
// Đề 1: chép đúng đề + đáp án cô Hiền gửi (I Odd one out · II Circle (tranh) · III Fill in · IV Yes/No · V Reorder) = 23 câu.
// Ảnh phần II cắt từ đề: img/g4-mid1-pic-1..5.jpg
//
// Mỗi phần (I, II, III…) là một tab đánh số; section-lock.js mở khoá lần lượt.
// Mỗi phần chỉ có MỘT thẻ "Xong rồi!" (không có phần nhỏ) nên không cần data-part-done.
// Lưu lên Dashboard: unitId "g4-midterm1|2" (tiền tố g4- để Dashboard xếp vào Khối 4), section "exercises".
// Bài KIỂM TRA: không có giọng đọc, không báo đúng/sai từng câu (tiếng "ting" kêu cho mọi lựa chọn), không làm lại.
// Nộp xong phần cuối → hiện số câu đúng/sai + điểm (tổng 10 điểm chia đều cho số câu của đề).
// Trong options của phần "odd": [chữ] = phần gạch chân.
// ============================================================

const EXAMS = {
  1: {
    parts: [
      {
        key: "odd", roman: "I", name: "Circle the odd one out", type: "odd",
        prompt: "Phần gạch chân của từ nào phát âm khác?",
        instruction: "Chọn từ có phần gạch chân phát âm khác với các từ còn lại.",
        items: [
          { options: ["[j]am", "[j]uice", "[y]es"], answer: 2, explain: "jam và juice có âm đầu /dʒ/, còn yes có âm đầu /j/." },
          { options: ["p[a]rty", "M[o]nday", "S[u]nday"], answer: 0, explain: "Phần gạch chân trong Monday và Sunday phát âm giống nhau /ʌ/, còn party đọc /ɑː/." },
          { options: ["Malays[ia]", "wh[ere]", "th[ere]"], answer: 0, explain: "Phần gạch chân trong where và there phát âm giống nhau /eə/, còn Malaysia khác." },
          { options: ["[tr]ain", "[tr]ee", "[j]uice"], answer: 2, explain: "train và tree có cùng cụm âm đầu /tr/, còn juice bắt đầu bằng /dʒ/." },
        ],
      },
      {
        key: "circle", roman: "II", name: "Circle the correct answers", type: "mcq",
        instruction: "Nhìn tranh và chọn câu trả lời đúng A, B hoặc C.",
        items: [
          { pic: "img/g4-mid1-pic-1.jpg", q: "Where is he from?", options: ["He's from Thailand.", "He's from Malaysia.", "He's from Japan."], answer: 2, explain: "Bạn trai cầm cờ Nhật Bản → He's from Japan." },
          { pic: "img/g4-mid1-pic-2.jpg", q: "What do you do on Mondays?", options: ["I listen to music.", "I do housework.", "I study at school."], answer: 0, explain: "Bạn đeo tai nghe nghe nhạc → I listen to music." },
          { pic: "img/g4-mid1-pic-3.jpg", q: "What time is it?", options: ["It's ten fifteen.", "It's ten o'clock.", "It's ten forty-five."], answer: 0, explain: "Kim ngắn gần số 10, kim dài chỉ số 3 → 10 giờ 15 phút: It's ten fifteen." },
          { pic: "img/g4-mid1-pic-4.jpg", q: "What do you want to drink?", options: ["I want some water.", "I want some juice.", "I want some grapes."], answer: 1, explain: "Bạn gái nghĩ tới cốc nước cam → I want some juice." },
          { pic: "img/g4-mid1-pic-5.jpg", q: "Can he cook?", options: ["Yes, I can.", "Yes, he can't.", "Yes, he can."], answer: 2, explain: "Hỏi về he → trả lời Yes, he can (Yes đi với can, không đi với can't)." },
        ],
      },
      {
        key: "fill", roman: "III", name: "Fill in the blanks", type: "passage",
        instruction: "Chọn từ trong khung điền vào mỗi chỗ trống.",
        title: "Mary's birthday",
        box: ["milk", "party", "America", "chips"],
        passage: "Hi. My name is Mary and I am from {1}. Today is the sixth of March. It is my birthday. I am having a great time. I have a big birthday {2} from my parents. Lots of friends come to my party. We eat some {3} and drink some {4}. They give me many beautiful presents.",
        items: [
          { blank: 1, options: ["milk", "party", "America", "chips"], answer: 2, explain: "I am from + tên nước → America." },
          { blank: 2, options: ["milk", "party", "America", "chips"], answer: 1, explain: "a big birthday party: một bữa tiệc sinh nhật lớn." },
          { blank: 3, options: ["milk", "party", "America", "chips"], answer: 3, explain: "eat some chips: ăn khoai tây chiên." },
          { blank: 4, options: ["milk", "party", "America", "chips"], answer: 0, explain: "drink some milk: uống sữa." },
        ],
      },
      {
        key: "yesno", roman: "IV", name: "Read and write YES or NO", type: "passage",
        instruction: "Đọc đoạn văn, chọn YES (đúng) hoặc NO (sai).",
        title: "Ha's school day",
        passage: "Hi, I'm Ha. I study at Hoa Sen Primary School. I usually get up at 7.00. After breakfast, I walk to school at 7.40. My school starts at 8.00. My friends and I play badminton at break time. We have three subjects in the afternoon. The school finishes at 4.30.",
        items: [
          { q: "She usually gets up at seven a.m.", options: ["YES", "NO"], answer: 0, explain: "I usually get up at 7.00." },
          { q: "She goes to school at seven fifteen.", options: ["YES", "NO"], answer: 1, explain: "Ha đi bộ đến trường lúc 7.40 (seven forty), không phải 7.15." },
          { q: "Ha and her friends play volleyball at break time.", options: ["YES", "NO"], answer: 1, explain: "Ha và các bạn chơi badminton (cầu lông), không phải volleyball." },
          { q: "She studies four subjects in the afternoon.", options: ["YES", "NO"], answer: 1, explain: "We have three subjects in the afternoon → ba môn, không phải bốn." },
          { q: "Her school day finishes at four thirty.", options: ["YES", "NO"], answer: 0, explain: "The school finishes at 4.30." },
        ],
      },
      {
        key: "order", roman: "V", name: "Reorder the words to make correct sentences", type: "order",
        instruction: "Chạm vào các từ theo đúng thứ tự để tạo thành câu.",
        items: [
          { given: ["What", "can", "you", "do", "Jim"], end: "?", answer: ["What", "can", "you", "do", "Jim"], full: "What can you do, Jim?" },
          { given: ["Can", "you", "ride", "a", "horse"], end: "?", answer: ["Can", "you", "ride", "a", "horse"] },
          { given: ["I", "can", "cook", "but", "I", "can't", "fly", "a", "kite"], end: ".", answer: ["I", "can", "cook", "but", "I", "can't", "fly", "a", "kite"], full: "I can cook, but I can't fly a kite." },
          { given: ["What", "can", "dogs", "do"], end: "?", answer: ["What", "can", "dogs", "do"] },
          { given: ["The", "monkey", "can", "climb", "the", "tree", "and", "eat", "bananas"], end: ".", answer: ["The", "monkey", "can", "climb", "the", "tree", "and", "eat", "bananas"] },
        ],
      },
    ],
  },
};

const EXAM_NUM = EXAMS[parseInt(new URLSearchParams(location.search).get("de"), 10)] ? parseInt(new URLSearchParams(location.search).get("de"), 10) : 1;
const EXAM = EXAMS[EXAM_NUM];
const UNIT_ID = "g4-midterm" + EXAM_NUM;
const UNIT_LABEL = `Khối 4 · Giữa HK1: Đề ${EXAM_NUM}`;

const POINT = 10 / EXAM.parts.reduce((t, p) => t + p.items.length, 0); // tổng 10 điểm chia đều cho các câu

// ============================================================
// Results saving — mỗi câu chỉ làm MỘT lần (bài kiểm tra, không có vòng làm lại)
// ============================================================
let eqStudent = "";
let eqAnswers = {};
let eqRetries = [];
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return EXAM.parts.reduce((t, p) => t + p.items.length, 0);
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  if (window.EQSectionLock && window.EQSectionLock.isReviewing()) return;
  if (eqAnswers[key]) return; // đã nộp câu này rồi — không sửa lại
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
    retries: [],
  };
  saveQueue = saveQueue.then(() => window.EQResults.saveResult(payload).catch(() => {}));
}

// ============================================================
// Helpers
// ============================================================
const LETTERS = ["A", "B", "C", "D", "E"];
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
// "[j]am" → j gạch chân + in đậm (phần Odd one out)
function underlined(s) {
  return escapeHtml(s).replace(/\[([^\]]+)\]/g, "<u><b>$1</b></u>");
}
function plain(s) {
  return String(s).replace(/[\[\]]/g, "");
}
function fmt(n) {
  return String(Math.round(n * 100) / 100).replace(".", ",");
}
// "0,5" / "0,625" when exact, otherwise "≈ 0,43"
function pointLabel() {
  const exact = Math.round(POINT * 1000) / 1000;
  return Math.abs(exact - POINT) < 1e-9 ? String(exact).replace(".", ",") : "≈ " + fmt(POINT);
}
function renderDots(current, total) {
  let dots = "";
  for (let i = 0; i < total; i++) dots += `<span class="runner-dot ${i < current ? "done" : i === current ? "current" : ""}"></span>`;
  return `<div class="runner-dots">${dots}</div>`;
}
function optionsHtml(options, oneCol) {
  return `<div class="${oneCol ? "q-options" : "mcq-options"}" style="margin-top:12px;">
    ${options.map((o, idx) => `<button type="button" class="mcq-option" data-idx="${idx}"><span class="mcq-letter">${LETTERS[idx]}</span>${underlined(o)}</button>`).join("")}
  </div>`;
}
// Tap an option = chọn (đổi được cho tới khi bấm "Câu tiếp theo"); no right/wrong shown during the test
// Tiếng "đúng rồi" quen thuộc — kêu cho MỌI lựa chọn (đúng lẫn sai), nên không lộ đáp án
function pickSound() {
  window.EQSound && window.EQSound.correct();
}
function bindPick(host, onPick) {
  host.querySelectorAll(".mcq-option").forEach(b => b.addEventListener("click", () => {
    pickSound();
    host.querySelectorAll(".mcq-option").forEach(x => x.classList.toggle("mt-picked", x === b));
    onPick(Number(b.dataset.idx));
  }));
}

// ============================================================
// Runner: one pass, each question answered once, "Câu tiếp theo →" commits the answer
// ============================================================
function runPart(host, part, onComplete) {
  const items = part.items;
  let i = 0;
  function show() {
    const item = items[i];
    let getRec = null;
    const last = i === items.length - 1;
    host.innerHTML = "";
    const body = document.createElement("div");
    host.appendChild(body);
    const nav = document.createElement("div");
    nav.style.marginTop = "16px";
    nav.innerHTML = `<button type="button" class="btn btn-primary btn-sm" disabled>${last ? "Nộp phần này ✓" : "Câu tiếp theo →"}</button>`;
    host.appendChild(nav);
    const nextBtn = nav.querySelector("button");
    RENDERERS[part.type](body, item, {
      top: renderDots(i, items.length),
      ready(fn) { getRec = fn; nextBtn.disabled = !fn; },
    });
    nextBtn.addEventListener("click", () => {
      if (!getRec) return;
      const rec = getRec();
      eqRecordAndSave(item.id, rec.question, rec.studentAnswer, rec.correctAnswer, rec.correct);
      i++;
      if (i < items.length) { show(); host.scrollIntoView({ behavior: "smooth", block: "start" }); }
      else onComplete();
    });
  }
  show();
}

// ============================================================
// Choose the correct answer (A–D / A–B): question line (q) + optional answer line (a), one has ___
// ============================================================
// Listening: play the uploaded file (item.audio); if it is missing, the browser voice reads the script. At most 2 times per question
const LISTEN_MAX = 2;
const listenUsed = {}; // item id -> times played
function listenHtml(item) {
  return item.listen || item.audio ? `<button type="button" class="q-listen-btn" id="q-listen">🔊 Nghe</button>` : "";
}
function bindListen(host, item) {
  const btn = host.querySelector("#q-listen");
  if (!btn) return;
  const label = () => {
    const left = LISTEN_MAX - (listenUsed[item.id] || 0);
    btn.textContent = left > 0 ? `🔊 Nghe (còn ${left} lượt)` : "🔇 Đã nghe đủ 2 lần";
    btn.disabled = left <= 0;
  };
  label();
  btn.addEventListener("click", () => {
    if ((listenUsed[item.id] || 0) >= LISTEN_MAX) return;
    listenUsed[item.id] = (listenUsed[item.id] || 0) + 1;
    btn.disabled = true;
    btn.textContent = "🔊 Đang đọc…";
    const speakScript = () => {
      if (!item.listen) { // no file and no script: don't use up a play
        listenUsed[item.id]--;
        btn.disabled = false;
        btn.textContent = "⚠️ Chưa có file nghe — báo cô nhé";
        return;
      }
      const lines = item.listen.slice();
      (function next() {
        if (!lines.length) { label(); return; }
        window.EQSpeak.speak(lines.shift(), () => setTimeout(next, 500));
      })();
    };
    if (!item.audio) return speakScript();
    // try <name>.wav, then <name>.mp3, then fall back to the browser voice
    const exts = [".wav", ".mp3"];
    (function tryFile() {
      if (!exts.length) return speakScript();
      const a = new Audio(item.audio + exts.shift());
      let failed = false;
      const fail = () => { if (!failed) { failed = true; tryFile(); } };
      a.addEventListener("ended", label);
      a.addEventListener("error", fail);
      a.play().catch(fail);
    })();
  });
}

function renderMcqItem(host, item, ctx) {
  const blank = `<span class="q-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
  const line = s => escapeHtml(s).replace("___", blank);
  host.innerHTML = `
    ${ctx.top}
    ${listenHtml(item)}
    ${item.pic ? `<img class="q-pic mt-pic" src="${item.pic}" alt="">` : ""}
    <p class="q-stem">${item.num}. ${line(item.q)}</p>
    ${item.a ? `<p class="q-stem mt-answer-line">${line(item.a)}</p>` : ""}
    ${optionsHtml(item.options)}`;
  const right = item.options[item.answer];
  const full = s => (s.includes("___") ? s.replace("___", right) : s);
  const question = (full(item.q) + (item.a ? " " + full(item.a) : "")).trim();
  bindListen(host, item);
  bindPick(host, chosen => ctx.ready(() => ({
    question,
    studentAnswer: `${LETTERS[chosen]}. ${item.options[chosen]}`,
    correctAnswer: `${LETTERS[item.answer]}. ${right}`,
    correct: chosen === item.answer,
  })));
}

// ============================================================
// Listen and complete — type the missing word (case, curly quotes and spaces ignored)
// ============================================================
function renderTypeItem(host, item, ctx) {
  const norm = t => String(t).toLowerCase().replace(/[‘’]/g, "'").replace(/[?.!,]+$/, "").replace(/\s+/g, " ").trim();
  const blank = `<span class="q-blank" id="q-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
  host.innerHTML = `
    ${ctx.top}
    ${listenHtml(item)}
    <p class="q-stem">${item.num}. ${escapeHtml(item.q).replace("___", blank)}</p>
    <input type="text" class="mt-fix-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ từ còn thiếu…">`;
  bindListen(host, item);
  const input = host.querySelector(".mt-fix-input");
  const blankEl = host.querySelector("#q-blank");
  input.addEventListener("input", () => {
    const typed = input.value.trim();
    blankEl.textContent = typed || "\u00a0\u00a0\u00a0\u00a0\u00a0";
    if (!typed) return ctx.ready(null);
    ctx.ready(() => ({
      question: item.q.replace("___", item.accept[0]),
      studentAnswer: typed,
      correctAnswer: item.accept[0],
      correct: item.accept.some(a => norm(a) === norm(typed)),
    }));
  });
}

// ============================================================
// Odd one out
// ============================================================
function renderOddItem(host, item, ctx) {
  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${item.num}. ${escapeHtml(item.part.prompt || "Từ nào khác loại?")}</p>
    ${optionsHtml(item.options)}`;
  bindPick(host, chosen => ctx.ready(() => ({
    question: "Odd one out: " + item.options.map(plain).join(" / "),
    studentAnswer: `${LETTERS[chosen]}. ${plain(item.options[chosen])}`,
    correctAnswer: `${LETTERS[item.answer]}. ${plain(item.options[item.answer])}`,
    correct: chosen === item.answer,
  })));
}

// ============================================================
// Read and match — question + the same answer list every time
// ============================================================
function renderMatchItem(host, item, ctx) {
  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${item.num}. ${escapeHtml(item.q)}</p>
    ${optionsHtml(item.options, true)}`;
  bindPick(host, chosen => ctx.ready(() => ({
    question: item.q,
    studentAnswer: `${LETTERS[chosen]}. ${item.options[chosen]}`,
    correctAnswer: `${LETTERS[item.answer]}. ${item.options[item.answer]}`,
    correct: chosen === item.answer,
  })));
}

// ============================================================
// Passage / dialogue — fill a blank from the box ({n} in the text) or True/False
// ============================================================
const passagePicked = {}; // "part-blank" -> the word the student chose (shown in later questions)
function renderPassageItem(host, item, ctx) {
  const part = item.part;
  const text = escapeHtml(part.passage).replace(/\{(\d+)\}/g, (m, n) => {
    n = Number(n);
    if (n === 0) return `<u><b>(0) ${escapeHtml(part.example)}</b></u>`;
    if (n === item.blank) return `<b>(${n})</b> <span class="q-blank" id="q-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
    const f = passagePicked[part.key + "-" + n];
    return f ? `<b>(${n})</b> <span style="color:#5b7cfa;font-weight:800;">${escapeHtml(f)}</span>`
             : `<b>(${n})</b> <span style="color:#aaa;letter-spacing:1px;">______</span>`;
  }).replace(/\n/g, "<br>");
  const boxHtml = part.box ? `<div class="mt-box">${part.box.map(w => `<span class="${part.example && w === part.example ? "used" : ""}">${escapeHtml(w)}</span>`).join("")}</div>` : "";
  const prompt = item.blank ? `Chỗ trống (${item.blank}) điền từ nào?` : `${item.num}. ${escapeHtml(item.q)}`;
  host.innerHTML = `
    ${ctx.top}
    ${boxHtml}
    <div class="book-dialogue"><div style="font-weight:800;text-align:center;margin-bottom:4px;">${escapeHtml(part.title)}</div>${text}</div>
    <p class="q-stem" style="margin-top:12px;">${prompt}</p>
    ${optionsHtml(item.options)}`;
  bindPick(host, chosen => {
    const blankEl = host.querySelector("#q-blank");
    if (blankEl) blankEl.textContent = item.options[chosen];
    ctx.ready(() => {
      if (item.blank) passagePicked[part.key + "-" + item.blank] = item.options[chosen];
      return {
        question: item.blank ? `${part.title} — chỗ trống (${item.blank})` : item.q,
        studentAnswer: item.options[chosen],
        correctAnswer: item.options[item.answer],
        correct: chosen === item.answer,
      };
    });
  });
}

// ============================================================
// Underline and correct the mistakes — tap the wrong word, then pick the correction
// ============================================================
function renderFixItem(host, item, ctx) {
  const words = item.sentence.split(/\s+/);
  const bare = w => w.replace(/[?.!,]$/, "");
  // so sánh không phân biệt hoa/thường, dấu nháy cong/thẳng, khoảng trắng thừa, dấu câu cuối
  const norm = t => String(t).toLowerCase().replace(/[‘’]/g, "'").replace(/[?.!,]+$/, "").replace(/\s+/g, " ").trim();
  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${item.num}.</p>
    <div class="mt-fix-sentence">
      ${words.map((w, i) => `<button type="button" class="mt-fix-word" data-i="${i}">${escapeHtml(w)}</button>`).join(" ")}
    </div>
    <p class="q-vi" style="margin-top:10px;">① Chạm vào từ sai &nbsp; ② Gõ từ sửa đúng vào ô dưới:</p>
    <input type="text" class="mt-fix-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ từ đúng…">`;
  const input = host.querySelector(".mt-fix-input");
  let pickedWord = -1;
  function update() {
    const typed = input.value.trim();
    if (pickedWord < 0 || !typed) return ctx.ready(null);
    ctx.ready(() => ({
      question: item.sentence,
      studentAnswer: `${bare(words[pickedWord])} → ${typed}`,
      correctAnswer: `${bare(words[item.wrong])} → ${item.fixTo}`,
      correct: pickedWord === item.wrong && (norm(typed) === norm(item.fixTo) || norm(typed) === norm(item.correct)),
    }));
  }
  host.querySelectorAll(".mt-fix-word").forEach(b => b.addEventListener("click", () => {
    pickSound();
    pickedWord = Number(b.dataset.i);
    host.querySelectorAll(".mt-fix-word").forEach(x => x.classList.toggle("picked", x === b));
    update();
    input.focus();
  }));
  input.addEventListener("input", update);
}

// ============================================================
// Reorder the words — tap words in order; the end mark (? / .) stays at the end
// ============================================================
function renderOrderItem(host, item, ctx) {
  const answerText = item.full || item.answer.join(" ") + item.end;
  const shuffled = shuffleNotSame(item.given.map((en, idx) => ({ en, origIdx: idx })));
  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${item.num}. ${escapeHtml(item.given.join(" / "))} / ${item.end}</p>
    <div class="sentence-answer-strip" id="order-strip"></div>
    <div class="sentence-chunks" id="order-pool">
      ${shuffled.map(c => `<div class="sentence-chunk" data-orig="${c.origIdx}">${escapeHtml(c.en)}</div>`).join("")}
    </div>
    <div class="fitb-row" style="margin-top:12px;">
      <button class="btn btn-secondary btn-sm" id="order-reset">Xếp lại từ đầu</button>
    </div>`;
  const strip = host.querySelector("#order-strip");
  const pool = host.querySelector("#order-pool");
  let placed = [];
  function update() {
    if (placed.length < item.given.length) return ctx.ready(null);
    const built = placed.map(c => c.en).join(" ") + item.end;
    const right = placed.map(c => c.en).join(" ") === item.answer.join(" ");
    ctx.ready(() => ({ question: answerText, studentAnswer: built, correctAnswer: answerText, correct: right }));
  }
  function renderStrip() {
    strip.innerHTML = placed.map(p => `<div class="sentence-chunk placed" data-orig="${p.origIdx}" title="Chạm để bỏ ra">${escapeHtml(p.en)}</div>`).join("") +
      `<span class="mt-endmark">${item.end}</span>`;
    strip.querySelectorAll(".sentence-chunk.placed").forEach(el => el.addEventListener("click", () => {
      const origIdx = Number(el.dataset.orig);
      placed = placed.filter(p => p.origIdx !== origIdx);
      const poolEl = pool.querySelector(`.sentence-chunk[data-orig="${origIdx}"]`);
      poolEl && poolEl.classList.remove("used");
      renderStrip();
    }));
    update();
  }
  renderStrip();
  pool.querySelectorAll(".sentence-chunk").forEach(el => el.addEventListener("click", () => {
    if (el.classList.contains("used")) return;
    const origIdx = Number(el.dataset.orig);
    pickSound();
    placed.push({ origIdx, en: item.given[origIdx] });
    el.classList.add("used");
    renderStrip();
  }));
  host.querySelector("#order-reset").addEventListener("click", () => {
    placed = [];
    pool.querySelectorAll(".sentence-chunk").forEach(c => c.classList.remove("used"));
    renderStrip();
  });
}

const RENDERERS = { type: renderTypeItem, mcq: renderMcqItem, odd: renderOddItem, match: renderMatchItem, passage: renderPassageItem, fix: renderFixItem, order: renderOrderItem };

// ============================================================
// Result: số câu đúng / sai, điểm /10, từng câu em chọn gì – đáp án đúng – giải thích
// ============================================================
function resultHtml() {
  const total = eqTotalItems();
  const answered = Object.keys(eqAnswers).length;
  const right = Object.values(eqAnswers).filter(a => a.correct).length;
  const wrong = answered - right;
  const score = right * POINT;
  const missing = total - answered;
  const rows = EXAM.parts.map(p => `
    <h4 class="mt-res-part">${p.roman}. ${escapeHtml(p.name)}</h4>
    ${p.items.map(it => {
      const a = eqAnswers[it.id];
      if (!a) return `<div class="mt-res-row miss"><b>${it.num}.</b> Chưa làm</div>`;
      return `<div class="mt-res-row ${a.correct ? "ok" : "no"}">
        <div><b>${it.num}.</b> ${a.correct ? "✓" : "✗"} ${escapeHtml(a.question)}</div>
        <div class="mt-res-ans">Em chọn: <b>${escapeHtml(a.studentAnswer)}</b>${a.correct ? "" : ` &nbsp;·&nbsp; Đáp án đúng: <b>${escapeHtml(a.correctAnswer)}</b>`}</div>
        ${it.explain && !a.correct ? `<div class="mt-res-ex">Giải thích: ${escapeHtml(it.explain)}</div>` : ""}
      </div>`;
    }).join("")}`).join("");
  return `
    <div class="mt-result">
      <div class="mt-score-big">${fmt(score)}<span>/10 điểm</span></div>
      <div class="mt-count"><span class="ok">✓ Đúng: ${right} câu</span><span class="no">✗ Sai: ${wrong} câu</span>${missing ? `<span>Chưa làm: ${missing}</span>` : ""}</div>
      <p style="color:#666;font-size:.9rem;margin:6px 0 0;">Tổng ${total} câu · mỗi câu ${pointLabel()} điểm</p>
    </div>
    ${writingHtml()}
    <div class="mt-res-list">${rows}</div>`;
}

// Writing Task 2 — không tính điểm: em tự viết, có thể xem bài tham khảo. Bản nháp chỉ giữ trên máy em.
const WRITING_DRAFT_KEY = "eq-g4-midterm" + EXAM_NUM + "-writing";
function writingHtml() {
  const w = EXAM.writing;
  if (!w) return "";
  let draft = "";
  try { draft = localStorage.getItem(WRITING_DRAFT_KEY) || ""; } catch (e) {}
  return `
    <div class="runner-card mt-writing" style="margin:0 0 16px;">
      <p class="eq-instruction">Writing · Task 2. ${escapeHtml(w.title)} <span style="font-weight:600;color:#555;">(Không tính điểm — em tự viết nhé.)</span></p>
      <p style="margin:0 0 4px;font-weight:700;">Use the questions below to help you:</p>
      <ul style="margin:0 0 10px 18px;">${w.questions.map(q => `<li>${escapeHtml(q)}</li>`).join("")}</ul>
      <textarea class="mt-fix-input mt-writing-input" rows="6" style="max-width:100%;resize:vertical;" placeholder="Viết 4–5 câu tiếng Anh…">${escapeHtml(draft)}</textarea>
      <button type="button" class="q-listen-btn mt-writing-sample-btn" style="margin-top:10px;">Xem bài viết tham khảo</button>
      <p class="mt-writing-sample book-dialogue" style="display:none;">${escapeHtml(w.sample)}</p>
    </div>`;
}
function bindWriting(host) {
  const ta = host.querySelector(".mt-writing-input");
  ta && ta.addEventListener("input", () => { try { localStorage.setItem(WRITING_DRAFT_KEY, ta.value); } catch (e) {} });
  const btn = host.querySelector(".mt-writing-sample-btn");
  btn && btn.addEventListener("click", () => {
    const box = host.querySelector(".mt-writing-sample");
    const open = box.style.display === "none";
    box.style.display = open ? "block" : "none";
    btn.textContent = open ? "Ẩn bài viết tham khảo" : "Xem bài viết tham khảo";
  });
}

function showPartDone(host, part, isLast) {
  window.EQMascot && window.EQMascot.show("mascot-box", isLast ? "complete_unit" : "complete_exercise");
  host.innerHTML = `
    <div class="stage-complete">
      <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h3>Xong rồi!</h3>
      <p>${isLast ? `Em đã làm xong Đề ${EXAM_NUM}. Đây là kết quả của em:` : `Em đã làm xong phần ${part.roman}.`}</p>
      ${isLast ? "" : `<button type="button" class="btn btn-primary section-next-btn" style="margin-top:14px;">Sang phần sau →</button>`}
    </div>
    ${isLast ? resultHtml() : ""}`;
  if (isLast) bindWriting(host);
  const btn = host.querySelector(".section-next-btn");
  btn && btn.addEventListener("click", () => {
    const idx = EXAM.parts.indexOf(part);
    switchPanel("panel-" + EXAM.parts[idx + 1].key);
  });
}

// A part already handed in: bài kiểm tra chỉ làm một lần — show the note (and the result once everything is done)
function showLocked(host) {
  const allDone = EXAM.parts.every(p => p.items.every(it => eqAnswers[it.id]));
  host.innerHTML = `<p class="mt-locked">🔒 Em đã nộp phần này rồi. Bài kiểm tra chỉ làm một lần.</p>` +
    (allDone ? resultHtml() : "");
  if (allDone) bindWriting(host);
}

// ============================================================
// Parts → tabs + panels (built right away, before section-lock.js runs)
// ============================================================
// Each question gets a key unique in the page: "<part key>-<n>" (choose-1, odd-1, order-1, fix-1…)
let runningNum = 0;
EXAM.parts.forEach(part => {
  part.items.forEach((it, idx) => {
    it.id = `${part.key}-${idx + 1}`;
    it.num = EXAM.continuousNum ? ++runningNum : idx + 1;
    it.part = part;
    if (part.type === "match") it.options = part.answersList;
  });
});

(function buildPage() {
  const row = document.getElementById("eq-crumb-row");
  const panels = document.getElementById("mt-panels");
  row.innerHTML = EXAM.parts.map((p, i) =>
    `<button class="eq-crumb" data-target="panel-${p.key}"><span class="eq-crumb-num">${i + 1}</span>${p.roman}. ${escapeHtml(p.name)}</button>`).join("");
  panels.innerHTML = EXAM.parts.map(p => `
    <div class="ex-panel" id="panel-${p.key}">
      <div class="runner-card">
        <p class="eq-instruction">${p.roman}. ${escapeHtml(p.name)}. <span style="font-weight:600;color:#555;">${escapeHtml(p.instruction)}</span></p>
        <div id="${p.key}-wrap"></div>
      </div>
    </div>`).join("");
  document.getElementById("exam-meta").textContent =
    `${eqTotalItems()} câu · mỗi câu ${pointLabel()} điểm · tổng 10 điểm`;
})();

const startedPanels = new Set();
function switchPanel(targetId) {
  document.querySelectorAll(".ex-panel").forEach(p => p.classList.toggle("active", p.id === targetId));
  document.querySelectorAll(".eq-crumb").forEach(c => c.classList.toggle("active", c.dataset.target === targetId));
  const part = EXAM.parts.find(p => "panel-" + p.key === targetId);
  const host = document.getElementById(part.key + "-wrap");
  const handedIn = part.items.every(it => eqAnswers[it.id]);
  if (handedIn || (window.EQSectionLock && window.EQSectionLock.isReviewing())) {
    // keep the result card the student has just reached; otherwise show the lock note
    if (!host.querySelector(".mt-result")) showLocked(host);
  } else if (!startedPanels.has(targetId)) {
    startedPanels.add(targetId);
    const isLast = EXAM.parts[EXAM.parts.length - 1] === part;
    runPart(host, part, () => showPartDone(host, part, isLast));
  }
  const row = document.getElementById("eq-crumb-row");
  window.scrollTo({ top: row.offsetTop - 90, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.title = `Đề ${EXAM_NUM} · Kiểm tra giữa HK1 · English Quest`;
  document.getElementById("exam-title").textContent = `Đề kiểm tra giữa học kỳ 1 (Đề ${EXAM_NUM})`;
  document.querySelectorAll(".mt-switch a").forEach(a => a.classList.toggle("active", a.dataset.de === String(EXAM_NUM)));

  eqStudent = window.EQStudent ? window.EQStudent.confirmStudent() : "";
  if (window.EQResults && eqStudent) {
    window.EQResults.markInProgress({ student: eqStudent, unitId: UNIT_ID, unitLabel: UNIT_LABEL, section: "exercises" }).catch(() => {});
  }
  document.querySelectorAll(".eq-crumb").forEach(c => c.addEventListener("click", () => switchPanel(c.dataset.target)));
  // Wait until section-lock.js knows what was already handed in (it opens the next unfinished part itself)
  (function startWhenReady() {
    if (document.body.classList.contains("section-lock-loading")) { setTimeout(startWhenReady, 100); return; }
    if (!document.querySelector(".ex-panel.active")) switchPanel("panel-" + EXAM.parts[0].key);
  })();
});
