// ============================================================
// Unit 1 — All About Me — Exercise data
// Source: teacher Hien's slides + "Tiếng Anh 5 – Sách bài tập" (Unit 1, p.4-7)
// Lines marked "translated by Claude" were not in the source material
// and were translated to fill a gap — flagged for the teacher to review.
// ============================================================

const READING_PASSAGE = [
  { en: "My name's Jack.", vi: "Tên tôi là Jack." },
  { en: "I live in a small village in Australia.", vi: "Tôi sống ở một ngôi làng nhỏ ở Úc." },
  { en: "I have two big sisters and one little brother.", vi: "Tôi có hai chị gái và một em trai." },
  { en: "I'm tall and slim.", vi: "Tôi cao và mảnh khảnh." },
  { en: "I have brown hair and blue eyes.", vi: "Tôi có tóc nâu và mắt xanh." },
  { en: "I don't like pizza, but I like sandwiches.", vi: "Tôi không thích pizza, nhưng tôi thích bánh sandwich." },
  { en: "My favourite subject is PE.", vi: "Môn học yêu thích của tôi là Thể dục." },
  { en: "My favourite colour is green.", vi: "Màu yêu thích của tôi là màu xanh lá." },
  { en: "My favourite sport is football.", vi: "Môn thể thao yêu thích của tôi là bóng đá." },
];
// all 9 Vietnamese lines above: translated by Claude, not in source — please review

const VOCAB = [
  ["village", "làng"],
  ["Australia", "nước Úc"],
  ["big sister", "chị gái"],
  ["little brother", "em trai"],
  ["tall", "cao"],
  ["slim", "mảnh khảnh"],
  ["brown hair", "tóc nâu"],
  ["blue eyes", "mắt xanh"],
  ["pizza", "pizza"],
  ["sandwiches", "bánh sandwich"],
  ["favourite subject", "môn học yêu thích"],
  ["PE", "môn Thể dục"],
  ["favourite colour", "màu yêu thích"],
  ["green", "màu xanh lá"],
  ["favourite sport", "môn thể thao yêu thích"],
  ["football", "bóng đá"],
];
// all 16 items above and their meanings come directly from the Reading passage about Jack — no outside vocabulary added

const FITB = [
  { pic: "village", sentence: "Jack lives in a small ______ in Australia.", answer: "village" },
  { pic: "family", sentence: "Jack has two big ______ and one little brother.", answer: "sisters" },
  { pic: "person", sentence: "Jack is tall and ______.", answer: "slim" },
  { pic: "person", sentence: "Jack has brown ______ and blue eyes.", answer: "hair" },
  { pic: "pizza", sentence: "Jack doesn't like ______.", answer: "pizza" },
  { pic: "sandwich", sentence: "Jack likes ______.", answer: "sandwiches" },
  { pic: "subject", sentence: "Jack's favourite subject is ______.", answer: "PE" },
  { pic: "colour", sentence: "Jack's favourite colour is ______.", answer: "green" },
  { pic: "football", sentence: "Jack's favourite sport is ______.", answer: "football" },
];
// all 9 items above (sentences + answers) come directly from the Reading passage about Jack

const ORDER_SENTENCES = [
  { words: ["tell", "me", "Can", "you", "about", "yourself"], answer: "Can you tell me about yourself?" },
  { words: ["the", "countryside", "in", "live", "I"], answer: "I live in the countryside." },
  { words: ["your", "colour", "What's", "favourite"], answer: "What's your favourite colour?" },
  { words: ["love", "table", "tennis", "I", "playing"], answer: "I love playing table tennis." },
];

const ORDER_DIALOGUE = {
  words: [
    "Can you tell me about yourself?",
    "I'm An. I'm in Grade 4. My hobby is playing sports.",
    "What's your favourite sport?",
    "It's table tennis.",
    "Table tennis? Oh, I like table tennis too.",
  ],
  // correct order is the array above, already in order b-a-d-c-e — shuffled for the student below
};

// Quiz type A: English question, multiple choice (kept in English, as in the workbook)
// Questions 1-6 = Listening — audio provided by teacher Hien (audio/listening-1.wav ... 6.wav, in the order she sent).
// Questions 7-14 = Grammar/Sentence Patterns — unchanged, from "Tiếng Anh 5 – Sách bài tập"
const QUIZ_MC = [
  { q: "My favourite animal is a ___.", audio: "listening-1.wav", opts: ["tiger", "dolphin", "hippo"], answer: 1 },
  { q: "I want to visit my grandparents in the ___.", audio: "listening-2.wav", opts: ["village", "mountains", "city"], answer: 0 },
  { q: "Where does Kate live?", audio: "listening-3.wav", opts: ["She lives in the city.", "She lives in the countryside."], answer: 1 },
  { q: "What class is Long in?", audio: "listening-4.wav", opts: ["He's in Class 3A.", "He's in Class 5A."], answer: 1 },
  { q: "What's Tom's favourite animal?", audio: "listening-5.wav", opts: ["It's a hippo.", "It's a dolphin."], answer: 0 },
  { q: "What's Lisa's favourite sport?", audio: "listening-6.wav", opts: ["She likes badminton.", "She likes table tennis."], answer: 1 },
  { q: "My friend lives ___ the city.", opts: ["on", "at", "in"], answer: 2 },
  { q: "Can you tell me about ___?", opts: ["yourself", "your", "you"], answer: 0 },
  { q: "___ your favourite sport?", opts: ["What", "What's", "How"], answer: 1 },
  { q: "I ___ playing table tennis. I play it every day.", opts: ["like", "likes", "liked"], answer: 0 },
  { q: "A: Where do you live? B: ___", opts: ["It's in the city.", "I live in the city."], answer: 1 },
  { q: "A: What's your favourite food? B: ___", opts: ["It's a sandwich.", "I eat a sandwich in the morning."], answer: 0 },
  { q: "A: What's your favourite colour? B: ___", opts: ["I like lemonade.", "I like pink."], answer: 1 },
  { q: "A: Can you tell me about yourself? B: ___", opts: ["Thank you very much.", "Well, I'm Mary. I live in a town."], answer: 1 },
];

// Quiz type B: translate the new word into Vietnamese (typed answer)
const QUIZ_TRANSLATE = [
  { q: "tiger", answer: "hổ" },
  { q: "hippo", answer: "hà mã" },
  { q: "village", answer: "làng" },
  { q: "mountains", answer: "núi" },
  { q: "sandwich", answer: "bánh sandwich" },
];

// simple inline-icon set reused from the site's icon style
const PIC_ICONS = {
  "sandwich": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M4 12c0-3 3.5-5 8-5s8 2 8 5M4 14h16l-1.5 5h-13L4 14Z" stroke-linejoin="round" stroke-linecap="round"/></svg>',
  "village": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 18l5-8 4 5 2-3 7 6H3Z" stroke-linejoin="round" stroke-linecap="round"/><circle cx="17" cy="6" r="2"/></svg>',
  "family": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="2.4"/><circle cx="16" cy="8" r="2.4"/><path d="M4 20c0-3 2-5 4-5s4 2 4 5M12 20c0-3 2-5 4-5s4 2 4 5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "person": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "pizza": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4 4 18h16L12 4Z" stroke-linejoin="round" stroke-linecap="round"/><circle cx="11" cy="12.5" r="1" fill="currentColor" stroke="none"/><circle cx="14.2" cy="15" r="1" fill="currentColor" stroke="none"/></svg>',
  "subject": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" stroke-linejoin="round"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" stroke-linejoin="round"/></svg>',
  "colour": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4a8 8 0 1 0 0 16c1.4 0 2-.9 2-1.8 0-.5-.2-.9-.5-1.3-.3-.4-.3-1 .2-1.3.4-.3 1-.3 1.6-.3A4 4 0 0 0 19.5 12 8 8 0 0 0 12 4Z" stroke-linejoin="round"/><circle cx="8.2" cy="11" r="1.1" fill="currentColor" stroke="none"/><circle cx="11" cy="8" r="1.1" fill="currentColor" stroke="none"/></svg>',
  "football": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.3l3 2.2-1.2 3.6h-3.6L9 9.5l3-2.2ZM12 3.5v3.8M12 20.5v-3.7M5 8.3l3 1M19 8.3l-3 1M6.3 17l2.4-2.6M17.7 17l-2.4-2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

function normalize(s) {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.?!,]/g, "");
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================================
// Rendering
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderReading();
  renderSentenceBySentence();
  renderFlashcards();
  runFITBSequential();
  renderOrdering();
  runQuizSequential();
  setupTabs();
});

function renderReading() {
  const el = document.getElementById("reading-panel-body");
  if (!el) return;
  el.innerHTML = `<div class="reading-card"><p>${READING_PASSAGE.map(s => s.en).join(" ")}</p></div>`;
}

function renderSentenceBySentence() {
  const el = document.getElementById("sbs-list");
  if (!el) return;
  el.innerHTML = READING_PASSAGE.map((s, i) => `
    <div class="sbs-item" data-idx="${i}">
      <div class="sbs-en"><span class="sbs-num">${i + 1}</span>${s.en}<span class="sbs-hint">Chạm để xem nghĩa</span></div>
      <div class="sbs-vi">${s.vi}</div>
    </div>
  `).join("");
  el.querySelectorAll(".sbs-item").forEach(item => {
    item.addEventListener("click", () => item.classList.toggle("revealed"));
  });
}

function renderFlashcards() {
  const el = document.getElementById("flash-grid");
  if (!el) return;
  el.innerHTML = VOCAB.map(([word, meaning], i) => `
    <div class="flashcard" data-idx="${i}">
      <div class="flashcard-inner">
        <div class="flashcard-face flashcard-front">${word}<small>chạm để xem nghĩa</small></div>
        <div class="flashcard-face flashcard-back">${meaning}</div>
      </div>
    </div>
  `).join("");
  el.querySelectorAll(".flashcard").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
  });
}

// ============================================================
// Round-based one-at-a-time runner, shared shape for FITB and Quiz.
// A wrong answer reveals the correct answer and moves to the next
// question. Whatever was answered wrong is collected and re-asked in
// a new round once the current pass finishes — repeating until a
// round is completed with zero mistakes.
// ============================================================
function runRoundBased(host, items, renderQuestion) {
  let queue = items;
  let i = 0;
  let wrongQueue = [];
  let round = 1;

  function renderDots() {
    return `<div class="runner-dots">${queue.map((_, idx) => `<span class="runner-dot ${idx < i ? "done" : idx === i ? "current" : ""}"></span>`).join("")}</div>`;
  }

  function next(wasCorrect, item) {
    if (!wasCorrect) wrongQueue.push(item);
    i++;
    if (i >= queue.length) {
      if (wrongQueue.length > 0) {
        queue = wrongQueue;
        wrongQueue = [];
        i = 0;
        round++;
        render();
      } else {
        host.innerHTML = `
          <div class="runner-card">
            <div class="stage-complete">
              <div class="badge-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
              <h3>Xong rồi!</h3>
              <p>Chị đã hoàn thành hết các câu trong phần này.</p>
            </div>
          </div>`;
      }
    } else {
      render();
    }
  }

  function render() {
    const item = queue[i];
    host.innerHTML = `
      <div class="runner-card">
        ${round > 1 ? `<div class="prompt-label" style="margin-bottom:6px;">🔁 Làm lại các câu sai — vòng ${round}</div>` : ""}
        ${renderDots()}
        <div id="rb-question"></div>
        <div class="runner-feedback" id="rb-feedback"></div>
        <div class="runner-actions" id="rb-actions"></div>
      </div>`;
    renderQuestion(document.getElementById("rb-question"), item, (correct) => {
      const fb = document.getElementById("rb-feedback");
      fb.textContent = correct ? "✓ Chính xác!" : "✗ Chưa đúng — đáp án đúng đã hiện phía trên.";
      fb.className = "runner-feedback " + (correct ? "ok" : "no");
      const actions = document.getElementById("rb-actions");
      actions.innerHTML = `<button class="btn btn-primary" id="rb-continue">Câu tiếp theo</button>`;
      document.getElementById("rb-continue").addEventListener("click", () => next(correct, item));
    });
  }

  render();
}

// ============================================================
// Fill in the Blank — one at a time, typed answer
// ============================================================
function runFITBSequential() {
  const host = document.getElementById("fitb-grid");
  if (!host) return;
  runRoundBased(host, FITB, (mount, item, onAnswered) => {
    mount.innerHTML = `
      <div class="fitb-card">
        <div class="fitb-pic">${PIC_ICONS[item.pic] || ""}</div>
        <div class="fitb-body">
          <div class="fitb-sentence">${item.sentence}</div>
          <div class="fitb-row">
            <input class="fitb-input" type="text" placeholder="Gõ câu trả lời...">
            <button class="btn btn-secondary btn-sm" id="fitb-check">Kiểm tra</button>
          </div>
          <div class="fitb-feedback" id="fitb-reveal"></div>
        </div>
      </div>`;
    const input = mount.querySelector(".fitb-input");
    const btn = mount.querySelector("#fitb-check");
    const reveal = mount.querySelector("#fitb-reveal");

    function check() {
      if (btn.disabled) return;
      const correct = normalize(input.value) === normalize(item.answer);
      window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
      input.disabled = true;
      btn.disabled = true;
      if (!correct) {
        reveal.textContent = `Đáp án đúng: ${item.answer}`;
        reveal.className = "fitb-feedback no";
      } else {
        reveal.textContent = "";
      }
      onAnswered(correct);
    }
    btn.addEventListener("click", check);
    input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    input.focus();
  });
}

// ============================================================
// Ordering (unchanged)
// ============================================================
function buildOrderItem(container, words, answerText) {
  const wrap = document.createElement("div");
  wrap.className = "order-item";
  const shuffled = shuffle(words);
  wrap.innerHTML = `
    <div class="order-target" data-answer="${answerText.replace(/"/g, '&quot;')}"></div>
    <div class="order-pool">
      ${shuffled.map((w, i) => `<span class="order-chip" data-word="${w.replace(/"/g, '&quot;')}" data-pool-idx="${i}">${w}</span>`).join("")}
    </div>
    <div class="order-actions">
      <button class="btn btn-secondary btn-sm order-check">Kiểm tra</button>
      <button class="btn btn-ghost btn-sm order-reset">Làm lại</button>
      <span class="order-feedback"></span>
    </div>
  `;
  container.appendChild(wrap);

  const target = wrap.querySelector(".order-target");
  const pool = wrap.querySelector(".order-pool");
  const feedback = wrap.querySelector(".order-feedback");

  pool.querySelectorAll(".order-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.add("used");
      const clone = document.createElement("span");
      clone.className = "order-chip";
      clone.textContent = chip.dataset.word;
      clone.addEventListener("click", () => {
        clone.remove();
        chip.classList.remove("used");
        feedback.textContent = "";
      });
      target.appendChild(clone);
    });
  });

  wrap.querySelector(".order-check").addEventListener("click", () => {
    const built = Array.from(target.children).map(c => c.textContent).join(" ");
    const correct = normalize(built) === normalize(answerText);
    window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
    feedback.textContent = correct ? "✓ Đúng rồi!" : "✗ Chưa đúng, thử lại nhé";
    feedback.className = "order-feedback " + (correct ? "ok" : "no");
  });

  wrap.querySelector(".order-reset").addEventListener("click", () => {
    target.innerHTML = "";
    pool.querySelectorAll(".order-chip").forEach(c => c.classList.remove("used"));
    feedback.textContent = "";
  });
}

function renderOrdering() {
  const groupA = document.getElementById("order-group-a");
  const groupB = document.getElementById("order-group-b");
  if (groupA) {
    ORDER_SENTENCES.forEach(item => buildOrderItem(groupA, item.words, item.answer));
  }
  if (groupB) {
    buildOrderItem(groupB, ORDER_DIALOGUE.words, ORDER_DIALOGUE.words.join(" "));
  }
}

// ============================================================
// Quiz — one at a time, combines multiple-choice + translate items
// ============================================================
function runQuizSequential() {
  const host = document.getElementById("quiz-list");
  if (!host) return;

  const items = [
    ...QUIZ_MC.map(q => ({ kind: "mc", ...q })),
    ...QUIZ_TRANSLATE.map(q => ({ kind: "tr", ...q })),
  ];

  runRoundBased(host, items, (mount, item, onAnswered) => {
    if (item.kind === "mc") {
      mount.innerHTML = `
        <div class="quiz-item">
          <div class="quiz-q">${item.q}${item.audio ? `<button type="button" class="quiz-audio quiz-play" data-src="${item.audio}">🔊 Nghe</button>` : ""}</div>
          <div class="quiz-opts">
            ${item.opts.map((o, oi) => `<div class="quiz-opt" data-opt="${oi}"><span class="opt-letter">${String.fromCharCode(97 + oi)}</span>${o}</div>`).join("")}
          </div>
        </div>`;
      const playBtn = mount.querySelector(".quiz-play");
      if (playBtn) playBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const audio = new Audio(playBtn.dataset.src);
        audio.play().catch(() => {});
      });
      let answered = false;
      mount.querySelectorAll(".quiz-opt").forEach(opt => {
        opt.addEventListener("click", () => {
          if (answered) return;
          answered = true;
          const chosen = Number(opt.dataset.opt);
          const correct = chosen === item.answer;
          window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
          mount.querySelectorAll(".quiz-opt").forEach(o => o.classList.add("quiz-opt-disabled"));
          mount.querySelector(`.quiz-opt[data-opt="${item.answer}"]`)?.classList.add("correct");
          if (!correct) opt.classList.add("incorrect");
          onAnswered(correct);
        });
      });
    } else {
      mount.innerHTML = `
        <div class="quiz-item">
          <div class="quiz-q">Dịch nghĩa từ: <em>${item.q}</em></div>
          <div class="fitb-row">
            <input class="fitb-input" type="text" placeholder="Gõ nghĩa tiếng Việt...">
            <button class="btn btn-secondary btn-sm" id="quiz-tr-check">Kiểm tra</button>
          </div>
          <div class="fitb-feedback" id="quiz-tr-reveal"></div>
        </div>`;
      const input = mount.querySelector(".fitb-input");
      const btn = mount.querySelector("#quiz-tr-check");
      const reveal = mount.querySelector("#quiz-tr-reveal");
      function check() {
        if (btn.disabled) return;
        const correct = normalize(input.value) === normalize(item.answer);
        window.EQSound && (correct ? window.EQSound.correct() : window.EQSound.wrong());
        input.disabled = true;
        btn.disabled = true;
        if (!correct) {
          reveal.textContent = `Đáp án đúng: ${item.answer}`;
          reveal.className = "fitb-feedback no";
        } else {
          reveal.textContent = "";
        }
        onAnswered(correct);
      }
      btn.addEventListener("click", check);
      input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
      input.focus();
    }
  });
}

function setupTabs() {
  const tabs = document.querySelectorAll(".ex-tab");
  const panels = document.querySelectorAll(".ex-panel");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
      window.scrollTo({ top: document.querySelector(".ex-tabs").offsetTop - 90, behavior: "smooth" });
    });
  });
}
