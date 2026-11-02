// ============================================================
// Grade 5 — Đề kiểm tra giữa học kỳ 1 (Unit 1–5):  midterm-g5.html?de=1 / ?de=2 / ?de=3
//
// Đề 1 + Đề 2: chép đúng đề và đáp án cô Hiền gửi (Đề 2 = "Đề số 5" trong ảnh). Đề 1 có phần nghe (file audio).
// Đề 3: đề cô Hiền gửi sau (ảnh "Đề kiểm tra giữa học kỳ I", không ghi số đề).
//
// Mỗi phần (I, II, III…) là một tab đánh số; section-lock.js mở khoá lần lượt.
// Mỗi phần chỉ có MỘT thẻ "Xong rồi!" (không có phần nhỏ) nên không cần data-part-done.
// Lưu lên Dashboard: unitId "midterm1|2|3", section "exercises" (theo tên trang).
// Bài KIỂM TRA: không đọc to, không báo đúng/sai từng câu (tiếng "ting" kêu cho mọi lựa chọn), không làm lại. Nộp xong phần cuối → hiện số câu
// đúng/sai + điểm (tổng 10 điểm chia đều cho số câu của đề).
// ============================================================

const EXAMS = {
// Đề 1 (thay đề cũ ngày 2/11): đề cô Hiền gửi (Part I Listening · II · III Reading · IV Writing), đánh số câu liên tục 1–39 như trên giấy.
  // Listening: mỗi câu một file g5-mid1-listen-<số câu>.mp3 (hoặc .wav) ở thư mục gốc, nghe tối đa 2 lần.
  // Chưa có file → đọc LISTENING SCRIPT bằng giọng đọc trình duyệt (EQSpeak).
  // Bỏ Writing Task 2 (viết 4–5 câu về nghề tương lai) vì không chấm tự động được.
  // Câu 36: đề in "in / I / a flat / live / the city" (thiếu một "in") → ghép thành "in the city".
  1: {
    continuousNum: true,
    parts: [
      {
        key: "listen", roman: "I.1", name: "Listen and circle A, B or C", type: "mcq",
        instruction: "Bấm 🔊 để nghe (mỗi câu nghe được 2 lần), rồi chọn A, B hoặc C.",
        items: [
          { q: "What is Tom's favourite sport?", audio: "g5-mid1-listen-1", listen: ["What's your favourite sport, Tom?", "I like basketball. It's my favourite sport."], options: ["Football", "Basketball", "Table tennis"], answer: 1, explain: "Tom: I like basketball. It's my favourite sport." },
          { q: "Where does Mai live?", audio: "g5-mid1-listen-2", listen: ["Where do you live, Mai?", "I live in a flat in the city."], options: ["In a house", "In a flat", "In a tower"], answer: 1, explain: "Mai: I live in a flat in the city." },
          { q: "What nationality is Ken?", audio: "g5-mid1-listen-3", listen: ["What nationality is Ken?", "He's Malaysian. He's from Malaysia."], options: ["Australian", "Japanese", "Malaysian"], answer: 2, explain: "He's Malaysian. He's from Malaysia." },
          { q: "What does Linda like doing in her free time?", audio: "g5-mid1-listen-4", listen: ["What do you like doing in your free time, Linda?", "I like reading books."], options: ["Reading books", "Playing the violin", "Watering the flowers"], answer: 0, explain: "Linda: I like reading books." },
          { q: "What would Nam like to be in the future?", audio: "g5-mid1-listen-5", listen: ["What would you like to be in the future, Nam?", "I'd like to be a gardener because I like flowers."], options: ["A teacher", "A reporter", "A gardener"], answer: 2, explain: "Nam: I'd like to be a gardener because I like flowers." },
        ],
      },
      {
        key: "listenfill", roman: "I.2", name: "Listen and complete the sentences", type: "type",
        instruction: "Bấm 🔊 để nghe (mỗi câu nghe được 2 lần), rồi gõ từ còn thiếu.",
        items: [
          { q: "Lucy's address is 45 ___ Street.", audio: "g5-mid1-listen-6", listen: ["What's your address, Lucy?", "It's 45 Green Street."], accept: ["Green"], explain: "Lucy: It's 45 Green Street." },
          { q: "At the weekend, Peter usually ___ his bike.", audio: "g5-mid1-listen-7", listen: ["What do you do at the weekend, Peter?", "I usually ride my bike in the park."], accept: ["rides", "ride"], explain: "Đáp án: ride (nghe: I usually ride my bike). Viết đúng ngữ pháp với Peter là rides — cả hai đều được tính đúng." },
          { q: "Mai is ___ and helpful.", audio: "g5-mid1-listen-8", listen: ["What's Mai like?", "She's clever and helpful."], accept: ["clever"], explain: "She's clever and helpful." },
          { q: "Jack would like to be a ___ in the future.", audio: "g5-mid1-listen-9", listen: ["What would you like to be in the future, Jack?", "I'd like to be a reporter because I like talking to people."], accept: ["reporter"], explain: "Jack: I'd like to be a reporter." },
          { q: "Anna lives in the ___.", audio: "g5-mid1-listen-10", listen: ["Where does Anna live?", "She lives in the countryside."], accept: ["countryside"], explain: "She lives in the countryside." },
        ],
      },
      {
        key: "stress", roman: "II.1", name: "Choose the word with a different stress pattern", type: "odd",
        prompt: "Từ nào có trọng âm khác?",
        instruction: "Chọn từ có trọng âm khác với các từ còn lại.",
        items: [
          { options: ["dolphin", "tennis", "sandwich", "behind"], answer: 3, explain: "DOLphin, TENnis, SANDwich nhấn âm 1; beHIND nhấn âm 2." },
          { options: ["thirty", "fourteen", "fifteen", "sixteen"], answer: 0, explain: "THIRty nhấn âm 1; fourTEEN, fifTEEN, sixTEEN nhấn âm 2." },
          { options: ["active", "friendly", "helpful", "Japanese"], answer: 3, explain: "ACtive, FRIENDly, HELPful nhấn âm 1; JapaNESE nhấn âm 3." },
          { options: ["always", "sometimes", "never", "tonight"], answer: 3, explain: "ALways, SOMEtimes, NEver nhấn âm 1; toNIGHT nhấn âm 2." },
          { options: ["teacher", "dentist", "reporter", "farmer"], answer: 2, explain: "TEAcher, DENtist, FARmer nhấn âm 1; rePORter nhấn âm 2." },
        ],
      },
      {
        key: "choose", roman: "II.2", name: "Choose the correct answer", type: "mcq",
        instruction: "Chọn đáp án đúng A, B, C hoặc D.",
        items: [
          { q: "Can you tell me about yourself?", a: "– I'm ___ Class 5C.", options: ["on", "in", "at", "from"], answer: 1, explain: "Dùng in Class 5C khi nói mình học lớp nào." },
          { q: "What's your favourite animal?", a: "– ___ a dolphin.", options: ["I'm", "They're", "She's", "It's"], answer: 3, explain: "What's your favourite animal? – It's a dolphin." },
          { q: "Do you live in that tower?", a: "– No, I ___.", options: ["am not", "doesn't", "don't", "do"], answer: 2, explain: "Câu hỏi Do you...? → trả lời No, I don't." },
          { q: "What nationality is Mai?", a: "– She's ___.", options: ["Malaysian", "Malaysia", "friendly", "clever"], answer: 0, explain: "What nationality...? hỏi về quốc tịch. Malaysian là quốc tịch, Malaysia là tên nước." },
          { q: "What's your brother like?", a: "– He's very ___.", options: ["Japanese", "American", "Australia", "helpful"], answer: 3, explain: "What's ... like? hỏi về tính cách → helpful." },
          { q: "What do you like doing in your free time?", a: "– I like ___ stories.", options: ["read", "reading", "reads", "to read"], answer: 1, explain: "Mẫu câu Unit 4: like + V-ing → like reading stories." },
          { q: "___ do you do at the weekend?", a: "– I often ride my bike.", options: ["Why", "Where", "What", "Who"], answer: 2, explain: "Hỏi làm gì → What do you do at the weekend?" },
          { q: "Why would you like to be a gardener?", a: "– Because I'd like to ___ flowers.", options: ["grow", "grows", "growing", "grew"], answer: 0, explain: "Sau would like to dùng động từ nguyên mẫu → would like to grow." },
          { q: "I'd like to be ___ dentist in the future.", options: ["an", "a", "the", "some"], answer: 1, explain: "dentist bắt đầu bằng âm phụ âm → a dentist." },
          { q: "What's your address?", a: "– It's ___.", options: ["at the city", "in a flat", "Australian", "38 Oxford Street"], answer: 3, explain: "What's your address? hỏi về địa chỉ → 38 Oxford Street." },
        ],
      },
      {
        key: "read", roman: "III.1", name: "Read the passage and choose the correct answer", type: "passage",
        instruction: "Đọc đoạn văn rồi chọn đáp án đúng A, B, C hoặc D.",
        title: "Minh and Alex",
        passage: "Hi, I'm Minh. I live in a flat in the city. My address is 26 Le Loi Street. I have a foreign friend named Alex. He is Australian. He is active and helpful. In his free time, he likes surfing the Internet. At the weekend, he often rides his bike in the park.",
        items: [
          { q: "Where does Minh live?", options: ["In a house", "In a flat", "In a tower", "In the countryside"], answer: 1, explain: "I live in a flat in the city." },
          { q: "What is Minh's address?", options: ["62 Le Loi Street", "26 Oxford Street", "26 Le Loi Street", "62 Oxford Street"], answer: 2, explain: "My address is 26 Le Loi Street." },
          { q: "What nationality is Alex?", options: ["Malaysian", "Japanese", "Australian", "American"], answer: 2, explain: "He is Australian." },
          { q: "What is Alex like?", options: ["Active and helpful", "Friendly and clever", "Active and friendly", "Helpful and clever"], answer: 0, explain: "He is active and helpful." },
          { q: "What does Alex like doing in his free time?", options: ["Riding his bike", "Surfing the Internet", "Reading books", "Playing the violin"], answer: 1, explain: "In his free time, he likes surfing the Internet. (Riding his bike là việc cậu ấy làm vào cuối tuần.)" },
        ],
      },
      {
        key: "tf", roman: "III.2", name: "Read the passage and write True (T) or False (F)", type: "passage",
        instruction: "Đọc đoạn văn rồi chọn True (đúng) hoặc False (sai).",
        title: "Lan and Nam",
        passage: "My name is Lan. I'm in Class 5B. I live in a house near my school. My brother Nam is ten years old. He likes playing table tennis in his free time. On Sundays, we often visit our grandparents. Nam would like to be a teacher in the future because he'd like to teach children.",
        items: [
          { q: "Lan is in Class 5B.", options: ["True", "False"], answer: 0, explain: "I'm in Class 5B." },
          { q: "Lan lives in a flat.", options: ["True", "False"], answer: 1, explain: "I live in a house near my school — Lan sống trong một ngôi nhà, không phải căn hộ." },
          { q: "Nam likes playing table tennis in his free time.", options: ["True", "False"], answer: 0, explain: "He likes playing table tennis in his free time." },
          { q: "Lan and Nam often visit their grandparents on Saturdays.", options: ["True", "False"], answer: 1, explain: "On Sundays, we often visit our grandparents — Chủ nhật, không phải thứ Bảy." },
          { q: "Nam would like to be a teacher because he'd like to teach children.", options: ["True", "False"], answer: 0, explain: "Nam would like to be a teacher in the future because he'd like to teach children." },
        ],
      },
      {
        key: "order", roman: "IV", name: "Rearrange the words to make complete sentences", type: "order",
        instruction: "Chạm các từ theo đúng thứ tự để tạo thành câu hoàn chỉnh.",
        items: [
          { given: ["in", "I", "a flat", "live", "in the city"], answer: ["I", "live", "in", "a flat", "in the city"], end: "." },
          { given: ["nationality", "is", "What", "your", "friend"], answer: ["What", "nationality", "is", "your", "friend"], end: "?" },
          { given: ["doing", "do", "What", "you", "like", "in your free time"], answer: ["What", "do", "you", "like", "doing", "in your free time"], end: "?" },
          { given: ["would", "Why", "like", "you", "to be", "a reporter"], answer: ["Why", "would", "you", "like", "to be", "a reporter"], end: "?" },
        ],
      },
    ],
  },

  2: {
    parts: [
      {
        key: "fix", roman: "I", name: "Underline and correct the mistakes", type: "fix",
        instruction: "Chạm vào từ SAI trong câu để gạch chân, rồi gõ từ sửa đúng.",
        items: [
          { sentence: "Does you live in this flat?", wrong: 0, fixTo: "Do", correct: "Do you live in this flat?", explain: "Với chủ ngữ you, câu hỏi hiện tại đơn dùng Do, không dùng Does." },
          { sentence: "What nationality are she?", wrong: 2, fixTo: "is", correct: "What nationality is she?", explain: "Chủ ngữ she đi với is." },
          { sentence: "I like read books in my free time.", wrong: 2, fixTo: "reading", correct: "I like reading books in my free time.", explain: "Theo mẫu câu Unit 4: like + V-ing." },
          { sentence: "She usually play the violin at the weekend.", wrong: 2, fixTo: "plays", correct: "She usually plays the violin at the weekend.", explain: "Chủ ngữ she ở hiện tại đơn → động từ play thêm -s." },
          { sentence: "I'd like be a reporter in the future.", wrong: 2, fixTo: "to be", correct: "I'd like to be a reporter in the future.", explain: "Cấu trúc: would like + to + V." },
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
  return item.listen ? `<button type="button" class="q-listen-btn" id="q-listen">🔊 Nghe</button>` : "";
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
      const lines = item.listen.slice();
      (function next() {
        if (!lines.length) { label(); return; }
        window.EQSpeak.speak(lines.shift(), () => setTimeout(next, 500));
      })();
    };
    if (!item.audio) return speakScript();
    // try <name>.mp3, then <name>.wav, then fall back to the browser voice
    const exts = [".mp3", ".wav"];
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
    question: (item.part.prompt ? "Stress: " : "Odd one out: ") + item.options.join(" / "),
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
