// ============================================================
// Grade 5 — Đề kiểm tra giữa học kỳ 1 (Unit 1–5):  midterm-g5.html?de=1 / ?de=2 / ?de=3
//
// Đề 1 + Đề 2: chép đúng đề và đáp án cô Hiền gửi (Đề 2 = "Đề số 5" trong ảnh).
// Đề 3: đề cô Hiền gửi sau (ảnh "Đề kiểm tra giữa học kỳ I", không ghi số đề).
//
// Mỗi phần (I, II, III…) là một tab đánh số; section-lock.js mở khoá lần lượt.
// Mỗi phần chỉ có MỘT thẻ "Xong rồi!" (không có phần nhỏ) nên không cần data-part-done.
// Lưu lên Dashboard: unitId "midterm1|2|3", section "exercises" (theo tên trang).
// Bài KIỂM TRA: không đọc to, không báo đúng/sai từng câu, không làm lại. Nộp xong phần cuối → hiện số câu
// đúng/sai + điểm (tổng 10 điểm chia đều cho số câu của đề).
// ============================================================

const EXAMS = {
  1: {
    parts: [
      {
        key: "choose", roman: "I", name: "Choose the correct answer", type: "mcq",
        instruction: "Chọn đáp án đúng A, B, C hoặc D.",
        items: [
          { q: "Can you tell me about yourself?", a: "– I'm ___ Class 5A.", options: ["on", "in", "at", "from"], answer: 1, explain: "Dùng in Class 5A khi nói mình học lớp nào." },
          { q: "What's your favourite food?", a: "– ___ noodles.", options: ["I'm", "They're", "It's", "He's"], answer: 2, explain: "What's your favourite food? – It's noodles." },
          { q: "Do you live in this flat?", a: "– Yes, ___.", options: ["I am", "I do", "I live", "I'm"], answer: 1, explain: "Câu hỏi bắt đầu bằng Do you...? → trả lời Yes, I do. / No, I don't." },
          { q: "What's your address?", a: "– It's ___.", options: ["Australian", "in a flat", "25 Green Street", "friendly"], answer: 2, explain: "What's your address? hỏi về địa chỉ." },
          { q: "What nationality is Linda?", a: "– She's ___.", options: ["friendly", "Australian", "helpful", "active"], answer: 1, explain: "What nationality...? hỏi về quốc tịch." },
          { q: "What's your foreign friend like?", a: "– He's clever ___ helpful.", options: ["but", "or", "and", "because"], answer: 2, explain: "clever và helpful là hai đặc điểm được nối bằng and." },
          { q: "What do you like doing in your free time?", a: "– I like ___ books.", options: ["read", "reading", "reads", "to reading"], answer: 1, explain: "Mẫu câu Unit 4: like + V-ing → like reading books." },
          { q: "What do you do at the weekend?", a: "– I ___ go for a walk with my family.", options: ["am", "do", "usually", "is"], answer: 2, explain: "usually là trạng từ chỉ tần suất, phù hợp với hoạt động cuối tuần." },
          { q: "What would you like to be in the future?", a: "– I'd like to be ___ reporter.", options: ["a", "an", "the", "some"], answer: 0, explain: "reporter bắt đầu bằng âm phụ âm → a reporter." },
          { q: "Why would you like to be a gardener?", a: "– Because I'd like to ___ flowers.", options: ["grows", "growing", "grow", "grew"], answer: 2, explain: "Sau would like to dùng động từ nguyên mẫu → would like to grow." },
        ],
      },
      {
        key: "odd", roman: "II", name: "Choose the odd one out", type: "odd",
        instruction: "Chọn từ khác loại với các từ còn lại.",
        items: [
          { options: ["city", "countryside", "flat", "sandwich"], answer: 3, explain: "city, countryside, flat liên quan đến nơi ở; sandwich là món ăn." },
          { options: ["Japanese", "Australian", "Malaysian", "helpful"], answer: 3, explain: "Japanese, Australian, Malaysian là từ chỉ quốc tịch; helpful chỉ tính cách." },
          { options: ["always", "usually", "often", "teacher"], answer: 3, explain: "always, usually, often là trạng từ chỉ tần suất; teacher là nghề nghiệp." },
          { options: ["firefighter", "gardener", "reporter", "Sunday"], answer: 3, explain: "firefighter, gardener, reporter là nghề nghiệp; Sunday là ngày trong tuần." },
          { options: ["read books", "play the violin", "surf the Internet", "dentist"], answer: 3, explain: "read books, play the violin, surf the Internet là hoạt động; dentist là nghề nghiệp." },
        ],
      },
      {
        key: "order", roman: "III", name: "Reorder the words", type: "order",
        instruction: "Chạm các từ theo đúng thứ tự để tạo thành câu hoàn chỉnh.",
        items: [
          { given: ["favourite", "What's", "sport", "your"], answer: ["What's", "your", "favourite", "sport"], end: "?" },
          { given: ["address", "What's", "your"], answer: ["What's", "your", "address"], end: "?" },
          { given: ["nationality", "What", "is", "your", "friend"], answer: ["What", "nationality", "is", "your", "friend"], end: "?" },
          { given: ["free time", "What", "do", "you", "like", "doing", "in your"], answer: ["What", "do", "you", "like", "doing", "in your", "free time"], end: "?" },
          { given: ["future", "What", "would", "you", "like", "to be", "in the"], answer: ["What", "would", "you", "like", "to be", "in the", "future"], end: "?" },
        ],
      },
      {
        key: "fill", roman: "IV", name: "Complete the passage", type: "passage",
        instruction: "Đọc đoạn văn, chọn từ trong khung để điền vào chỗ trống.",
        box: ["friendly", "address", "reading", "teacher"],
        title: "My friend",
        // {0} is the example (already filled), {1}… are the blanks
        passage: "Hello. My name is Minh. I'm in Class 5B. I live in a flat in the city. My {0} is 18 Green Street. I have a foreign friend named Lucy. She is Australian. She is very {1} and helpful. In her free time, she likes {2} books. In the future, she would like to be a {3} because she would like to teach children.",
        example: "address",
        items: [
          { blank: 1, options: ["friendly", "reading", "teacher"], answer: 0, explain: "very + tính từ: very friendly and helpful." },
          { blank: 2, options: ["friendly", "reading", "teacher"], answer: 1, explain: "like + V-ing → likes reading books." },
          { blank: 3, options: ["friendly", "reading", "teacher"], answer: 2, explain: "be a + nghề nghiệp; teach children → teacher." },
        ],
      },
    ],
  },

  2: {
    parts: [
      {
        key: "fix", roman: "I", name: "Underline and correct the mistakes", type: "fix",
        instruction: "Chạm vào từ SAI trong câu để gạch chân, rồi chọn cách sửa đúng.",
        items: [
          { sentence: "Does you live in this flat?", wrong: 0, options: ["Do", "Is", "Are"], answer: 0, correct: "Do you live in this flat?", explain: "Với chủ ngữ you, câu hỏi hiện tại đơn dùng Do, không dùng Does." },
          { sentence: "What nationality are she?", wrong: 2, options: ["is", "am", "do"], answer: 0, correct: "What nationality is she?", explain: "Chủ ngữ she đi với is." },
          { sentence: "I like read books in my free time.", wrong: 2, options: ["reading", "reads", "is read"], answer: 0, correct: "I like reading books in my free time.", explain: "Theo mẫu câu Unit 4: like + V-ing." },
          { sentence: "She usually play the violin at the weekend.", wrong: 2, options: ["plays", "playing", "to play"], answer: 0, correct: "She usually plays the violin at the weekend.", explain: "Chủ ngữ she ở hiện tại đơn → động từ play thêm -s." },
          { sentence: "I'd like be a reporter in the future.", wrong: 2, options: ["to be", "being", "is"], answer: 0, correct: "I'd like to be a reporter in the future.", explain: "Cấu trúc: would like + to + V." },
        ],
      },
      {
        key: "order", roman: "II", name: "Put the words in order", type: "order",
        instruction: "Chạm các từ theo đúng thứ tự để tạo thành câu hoàn chỉnh.",
        items: [
          { given: ["Where", "do", "you", "live"], answer: ["Where", "do", "you", "live"], end: "?" },
          { given: ["What's", "your", "address"], answer: ["What's", "your", "address"], end: "?" },
          { given: ["What", "nationality", "is", "he"], answer: ["What", "nationality", "is", "he"], end: "?" },
          { given: ["I", "often", "read", "books", "at", "the weekend"], answer: ["I", "often", "read", "books", "at", "the weekend"], end: "." },
          { given: ["Why", "would", "you", "like", "to", "be", "a", "teacher"], answer: ["Why", "would", "you", "like", "to", "be", "a", "teacher"], end: "?" },
        ],
      },
      {
        key: "match", roman: "III", name: "Read and match", type: "match",
        instruction: "Đọc câu hỏi rồi chọn câu trả lời phù hợp (A–E).",
        answersList: ["She's friendly and helpful.", "I like reading books.", "It's 26 Green Street.", "My favourite food is noodles.", "I'd like to be a gardener."],
        items: [
          { q: "What's your favourite food?", answer: 3 },
          { q: "What's your address?", answer: 2 },
          { q: "What's your foreign friend like?", answer: 0 },
          { q: "What do you like doing in your free time?", answer: 1 },
          { q: "What would you like to be in the future?", answer: 4 },
        ],
      },
      {
        key: "mcq", roman: "IV", name: "Read and choose the correct answer", type: "mcq",
        instruction: "Đọc và chọn đáp án đúng A hoặc B.",
        items: [
          { q: "What nationality ___ your foreign friend?", a: "→ She's Australian.", options: ["is", "does"], answer: 0, explain: "What nationality is your foreign friend?" },
          { q: "What do you ___ doing in your free time?", a: "→ I like reading books.", options: ["like", "likes"], answer: 0, explain: "Chủ ngữ you → like: What do you like doing in your free time?" },
          { q: "Mai ___ plays the violin at the weekend.", options: ["often", "is"], answer: 0, explain: "often là trạng từ tần suất: Mai often plays the violin at the weekend." },
          { q: "What would you like ___ in the future?", a: "→ I'd like to be a reporter.", options: ["be", "to be"], answer: 1, explain: "would like + to + V: What would you like to be in the future?" },
          { q: "Why would you like to be a gardener?", a: "– Because I'd like to ___ flowers.", options: ["grow", "grows"], answer: 0, explain: "Sau would like to dùng động từ nguyên mẫu: Because I'd like to grow flowers." },
        ],
      },
    ],
  },

  // Đề 3: đề cô Hiền gửi (ảnh "Đề kiểm tra giữa học kỳ I", 4 phần, 16 câu)
  3: {
    parts: [
      {
        key: "match", roman: "I", name: "Match the sentences with the correct answers", type: "match",
        instruction: "Đọc câu hỏi rồi chọn câu trả lời phù hợp (A–D).",
        answersList: ["I like reading books.", "I'd like to be a teacher.", "She's friendly and helpful.", "It's 81 Tran Hung Dao Street."],
        items: [
          { q: "What's your address?", answer: 3, explain: "What's your address? hỏi về địa chỉ, nên câu trả lời cần cung cấp tên đường và số nhà." },
          { q: "What's your foreign friend like?", answer: 2, explain: "What's your foreign friend like? hỏi về đặc điểm hoặc tính cách, nên friendly and helpful là đáp án phù hợp." },
          { q: "What do you like doing in your free time?", answer: 0, explain: "What do you like doing in your free time? hỏi về hoạt động yêu thích trong thời gian rảnh." },
          { q: "What would you like to be in the future?", answer: 1, explain: "What would you like to be in the future? hỏi về nghề nghiệp mong muốn trong tương lai." },
        ],
      },
      {
        key: "order", roman: "II", name: "Put the words in order", type: "order",
        instruction: "Chạm các từ theo đúng thứ tự để tạo thành câu hoàn chỉnh.",
        items: [
          { given: ["live", "I", "a flat", "in"], answer: ["I", "live", "in", "a flat"], end: "." },
          { given: ["nationality", "What", "is", "your friend"], answer: ["What", "nationality", "is", "your friend"], end: "?" },
          { given: ["usually", "I", "go", "for a walk", "at the weekend"], answer: ["I", "usually", "go", "for a walk", "at the weekend"], end: "." },
          { given: ["would", "What", "like", "you", "to be", "in the future"], answer: ["What", "would", "you", "like", "to be", "in the future"], end: "?" },
        ],
      },
      {
        key: "fill", roman: "III", name: "Read and complete", type: "passage",
        instruction: "Đọc đoạn hội thoại, chọn từ trong khung để điền vào chỗ trống.",
        box: ["address", "Australian", "reading", "teacher"],
        title: "Mai and Phong",
        passage: "Mai: What's your {1}?\nPhong: It's 25 Green Street.\nMai: What nationality is your foreign friend?\nPhong: She's {2}.\nMai: What does she like doing in her free time?\nPhong: She likes {3} books.\nMai: What would she like to be in the future?\nPhong: She'd like to be a {4}.",
        items: [
          { blank: 1, options: ["address", "Australian", "reading", "teacher"], answer: 0, explain: "What's your address? — Phong trả lời bằng địa chỉ." },
          { blank: 2, options: ["address", "Australian", "reading", "teacher"], answer: 1, explain: "She's Australian. — câu hỏi về quốc tịch." },
          { blank: 3, options: ["address", "Australian", "reading", "teacher"], answer: 2, explain: "She likes reading books. — like + V-ing." },
          { blank: 4, options: ["address", "Australian", "reading", "teacher"], answer: 3, explain: "She'd like to be a teacher. — nghề nghiệp." },
        ],
      },
      {
        key: "choose", roman: "IV", name: "Choose the correct answer", type: "mcq",
        instruction: "Chọn đáp án đúng A, B, C hoặc D.",
        items: [
          { q: "Where do you live?", a: "– I ___ in a flat.", options: ["live", "lives", "living", "am"], answer: 0, explain: "Chủ ngữ I dùng động từ nguyên mẫu live ở hiện tại đơn." },
          { q: "What nationality is your friend?", a: "– She's ___.", options: ["friendly", "Australia", "Australian", "helpfully"], answer: 2, explain: "What nationality...? hỏi về quốc tịch. Australian là tính từ chỉ quốc tịch, còn Australia là tên quốc gia." },
          { q: "What do you do at the weekend?", a: "– I ___ go for a walk with my family.", options: ["am", "usually", "do", "is"], answer: 1, explain: "usually là trạng từ chỉ tần suất, phù hợp với câu hỏi về hoạt động thường làm vào cuối tuần." },
          { q: "Why would you like to be a gardener?", a: "– Because I'd like to ___ flowers.", options: ["grows", "growing", "grow", "grew"], answer: 2, explain: "Sau would like to dùng động từ nguyên mẫu → would like to grow." },
        ],
      },
    ],
  },
};

const EXAM_NUM = EXAMS[parseInt(new URLSearchParams(location.search).get("de"), 10)] ? parseInt(new URLSearchParams(location.search).get("de"), 10) : 1;
const EXAM = EXAMS[EXAM_NUM];
const UNIT_ID = "midterm" + EXAM_NUM;
const UNIT_LABEL = `Giữa HK1: Đề ${EXAM_NUM}`;

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
    ${options.map((o, idx) => `<button type="button" class="mcq-option" data-idx="${idx}"><span class="mcq-letter">${LETTERS[idx]}</span>${escapeHtml(o)}</button>`).join("")}
  </div>`;
}
// Tap an option = chọn (đổi được cho tới khi bấm "Câu tiếp theo"); no right/wrong shown during the test
function bindPick(host, onPick) {
  host.querySelectorAll(".mcq-option").forEach(b => b.addEventListener("click", () => {
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
function renderMcqItem(host, item, ctx) {
  const blank = `<span class="q-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
  const line = s => escapeHtml(s).replace("___", blank);
  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${item.num}. ${line(item.q)}</p>
    ${item.a ? `<p class="q-stem mt-answer-line">${line(item.a)}</p>` : ""}
    ${optionsHtml(item.options)}`;
  const right = item.options[item.answer];
  const full = s => (s.includes("___") ? s.replace("___", right) : s);
  const question = (full(item.q) + (item.a ? " " + full(item.a) : "")).trim();
  bindPick(host, chosen => ctx.ready(() => ({
    question,
    studentAnswer: `${LETTERS[chosen]}. ${item.options[chosen]}`,
    correctAnswer: `${LETTERS[item.answer]}. ${right}`,
    correct: chosen === item.answer,
  })));
}

// ============================================================
// Odd one out
// ============================================================
function renderOddItem(host, item, ctx) {
  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${item.num}. Từ nào khác loại?</p>
    ${optionsHtml(item.options)}`;
  bindPick(host, chosen => ctx.ready(() => ({
    question: "Odd one out: " + item.options.join(" / "),
    studentAnswer: `${LETTERS[chosen]}. ${item.options[chosen]}`,
    correctAnswer: `${LETTERS[item.answer]}. ${item.options[item.answer]}`,
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
  const boxHtml = part.box ? `<div class="mt-box">${part.box.map(w => `<span class="${w === part.example ? "used" : ""}">${escapeHtml(w)}</span>`).join("")}</div>` : "";
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
  host.innerHTML = `
    ${ctx.top}
    <p class="q-stem">${item.num}.</p>
    <div class="mt-fix-sentence">
      ${words.map((w, i) => `<button type="button" class="mt-fix-word" data-i="${i}">${escapeHtml(w)}</button>`).join(" ")}
    </div>
    <p class="q-vi" style="margin-top:10px;">① Chạm vào từ sai &nbsp; ② Chọn từ sửa đúng:</p>
    ${optionsHtml(item.options)}`;
  let pickedWord = -1, pickedOpt = -1;
  function update() {
    if (pickedWord < 0 || pickedOpt < 0) return ctx.ready(null);
    ctx.ready(() => ({
      question: item.sentence,
      studentAnswer: `${bare(words[pickedWord])} → ${item.options[pickedOpt]}`,
      correctAnswer: `${bare(words[item.wrong])} → ${item.options[item.answer]}`,
      correct: pickedWord === item.wrong && pickedOpt === item.answer,
    }));
  }
  host.querySelectorAll(".mt-fix-word").forEach(b => b.addEventListener("click", () => {
    pickedWord = Number(b.dataset.i);
    host.querySelectorAll(".mt-fix-word").forEach(x => x.classList.toggle("picked", x === b));
    update();
  }));
  bindPick(host, idx => { pickedOpt = idx; update(); });
}

// ============================================================
// Reorder the words — tap words in order; the end mark (? / .) stays at the end
// ============================================================
function renderOrderItem(host, item, ctx) {
  const answerText = item.answer.join(" ") + item.end;
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
    ctx.ready(() => ({ question: answerText, studentAnswer: built, correctAnswer: answerText, correct: built === answerText }));
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

const RENDERERS = { mcq: renderMcqItem, odd: renderOddItem, match: renderMatchItem, passage: renderPassageItem, fix: renderFixItem, order: renderOrderItem };

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
    <div class="mt-res-list">${rows}</div>`;
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
}

// ============================================================
// Parts → tabs + panels (built right away, before section-lock.js runs)
// ============================================================
// Each question gets a key unique in the page: "<part key>-<n>" (choose-1, odd-1, order-1, fix-1…)
EXAM.parts.forEach(part => {
  part.items.forEach((it, idx) => {
    it.id = `${part.key}-${idx + 1}`;
    it.num = idx + 1;
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
