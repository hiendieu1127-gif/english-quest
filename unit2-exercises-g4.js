// ============================================================
// Grade 4 — Unit 2 (Time And Daily Routines) — Exercises
// Source: teacher Hien's "Daily Routine" passage (Linh) + Global Success 4 (Quiz, coming next).
//   1 Reading  2 Vocabulary  3 Fill in the Blank  4 Sentence Ordering  5 Quiz
// Vietnamese translations + answer keys: written by Claude from the passage — please review.
// Rules (same as every Exercises page): only the FIRST attempt is scored, wrong answers
// come back in "Vòng 2, 3...", no timer — the student taps "Tiếp theo →".
// ============================================================

// ============================================================
// 1) READING (practice only) — teacher Hien's "Daily Routine" passage (Linh)
// ============================================================
const READING_HTML =
  "My name is Linh. Let me tell you about my <mark>daily routine</mark>. I <mark>usually</mark> get up at six o'clock in the morning. " +
  "<mark>First</mark>, I <mark>brush my teeth</mark> and <mark>wash my face</mark>. <mark>Then</mark>, I have breakfast at six fifteen. " +
  "I go to school at six forty-five. My classes <mark>start</mark> at seven o'clock and <mark>finish</mark> at eleven thirty.<br><br>" +
  "<mark>After school</mark>, I go home and have lunch with my family. In the afternoon, I usually do my homework and " +
  "<mark>play badminton</mark> with my brother. I have dinner at seven thirty. After dinner, I <mark>sometimes</mark> read a book or watch TV. " +
  "<mark>Finally</mark>, I brush my teeth and go to bed at eight forty-five.<br><br>" +
  "What time do you get up? What do you usually do after school?";

const READING_VI = "";

// ============================================================
// 2) VOCABULARY (practice only) — flip cards with audio (VN written by Claude — please review)
// ============================================================
const VOCAB_ITEMS = [
  { en: "daily routine", vi: "thói quen hằng ngày" },
  { en: "usually", vi: "thường" },
  { en: "first", vi: "đầu tiên" },
  { en: "brush my teeth", vi: "đánh răng" },
  { en: "wash my face", vi: "rửa mặt" },
  { en: "then", vi: "sau đó" },
  { en: "start", vi: "bắt đầu" },
  { en: "finish", vi: "kết thúc" },
  { en: "after school", vi: "sau giờ học" },
  { en: "play badminton", vi: "chơi cầu lông" },
  { en: "sometimes", vi: "thỉnh thoảng" },
  { en: "finally", vi: "cuối cùng" },
];

// ============================================================
// 3) FILL IN THE BLANK (scored: 6) — a/b about Linh; full sentence is read AFTER answering
// ============================================================
const FITB_ITEMS = [
  { id: 1, stem: "Linh gets up at ___.", options: [{ key: "a", text: "six o'clock" }, { key: "b", text: "six fifteen" }],
    answer: "a", vi: "Linh thức dậy lúc ___.", optVi: ["a. 6 giờ", "b. 6 giờ 15"] },
  { id: 2, stem: "She has breakfast at ___.", options: [{ key: "a", text: "six o'clock" }, { key: "b", text: "six fifteen" }],
    answer: "b", vi: "Bạn ấy ăn sáng lúc ___.", optVi: ["a. 6 giờ", "b. 6 giờ 15"] },
  { id: 3, stem: "Her classes finish at ___.", options: [{ key: "a", text: "seven o'clock" }, { key: "b", text: "eleven thirty" }],
    answer: "b", vi: "Các tiết học của bạn ấy kết thúc lúc ___.", optVi: ["a. 7 giờ", "b. 11 giờ 30"] },
  { id: 4, stem: "She has lunch ___.", options: [{ key: "a", text: "at school" }, { key: "b", text: "with her family" }],
    answer: "b", vi: "Bạn ấy ăn trưa ___.", optVi: ["a. ở trường", "b. với gia đình"] },
  { id: 5, stem: "She plays badminton with her ___.", options: [{ key: "a", text: "brother" }, { key: "b", text: "friends" }],
    answer: "a", vi: "Bạn ấy chơi cầu lông với ___ của bạn ấy.", optVi: ["a. anh/em trai", "b. các bạn"] },
  { id: 6, stem: "She goes to bed at ___.", options: [{ key: "a", text: "eight forty-five" }, { key: "b", text: "nine forty-five" }],
    answer: "a", vi: "Bạn ấy đi ngủ lúc ___.", optVi: ["a. 8 giờ 45", "b. 9 giờ 45"] },
];

// ============================================================
// 4) SENTENCE ORDERING (scored: 4) — sentences from the passage
// ============================================================
const ORDER_ITEMS = [
  { id: 1, chunks: [ { en: "I", vi: "mình" }, { en: "usually", vi: "thường" }, { en: "get up", vi: "thức dậy" }, { en: "at", vi: "lúc" }, { en: "six o'clock", vi: "6 giờ" } ],
    end: ".", answer: "I usually get up at six o'clock.", answerVi: "Mình thường thức dậy lúc 6 giờ." },
  { id: 2, chunks: [ { en: "I", vi: "mình" }, { en: "go to school", vi: "đi học" }, { en: "at", vi: "lúc" }, { en: "six forty-five", vi: "6 giờ 45" } ],
    end: ".", answer: "I go to school at six forty-five.", answerVi: "Mình đi học lúc 6 giờ 45." },
  { id: 3, chunks: [ { en: "I", vi: "mình" }, { en: "have dinner", vi: "ăn tối" }, { en: "at", vi: "lúc" }, { en: "seven thirty", vi: "7 giờ 30" } ],
    end: ".", answer: "I have dinner at seven thirty.", answerVi: "Mình ăn tối lúc 7 giờ 30." },
  { id: 4, chunks: [ { en: "After dinner,", vi: "sau bữa tối," }, { en: "I", vi: "mình" }, { en: "sometimes", vi: "thỉnh thoảng" }, { en: "read", vi: "đọc" }, { en: "a book", vi: "một cuốn sách" } ],
    end: ".", answer: "After dinner, I sometimes read a book.", answerVi: "Sau bữa tối, mình thỉnh thoảng đọc sách." },
];

// ============================================================
// 5) QUIZ — Sách bài tập Unit 2 (4 bài)
// ============================================================

// 5a) Listen and tick or cross (scored: 4) — audio made with Google AI Studio (g4-u2-tick-N.wav)
//     Pictures reuse the Unit 2 vocab photos + a clock drawn in code (book pic 4 = watching TV → here have dinner; still ✗)
const TICK_OPTIONS = [{ key: "a", text: "✓ Tick (đúng)" }, { key: "b", text: "✗ Cross (sai)" }];
const TICK_ITEMS = [
  { id: 1, clock: "5:15", ampm: "AM", answer: "a", sayAfter: "What time is it? It's five fifteen." },
  { id: 2, image: "img/vocab-g4-u2-go-to-school.jpg", clock: "6:15", ampm: "AM", answer: "b", sayAfter: "What time do you go to school? At six forty-five." },
  { id: 3, image: "img/vocab-g4-u2-get-up.jpg", clock: "6:00", ampm: "AM", answer: "a", sayAfter: "What time do you get up? I get up at six o'clock." },
  { id: 4, image: "img/vocab-g4-u2-have-dinner.jpg", clock: "9:45", ampm: "PM", answer: "b", sayAfter: "What time do you go to bed? I go to bed at nine forty-five." },
].map(x => ({ ...x, stem: "Tick (✓) or cross (✗)?", options: TICK_OPTIONS, noTranslate: true,
              audio: `g4-u2-tick-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi so với hình." }));

// 5b) Look, complete and read (scored: 4) — nhìn hình, TỰ GÕ (không hiện đáp án sẵn)
const LOOK_ITEMS = [
  { id: 1, before: "It's", after: "o'clock.", answer: ["six", "6"], full: "It's six o'clock.", clock: "6:00", ampm: "AM", vi: "Bây giờ là 6 giờ." },
  { id: 2, before: "I get up at", after: ".", answer: ["five fifteen", "5:15"], full: "I get up at five fifteen.", image: "img/vocab-g4-u2-get-up.jpg", clock: "5:15", ampm: "AM", vi: "Mình thức dậy lúc 5 giờ 15." },
  { id: 3, before: "I", after: "at seven o'clock.", answer: ["go to school"], full: "I go to school at seven o'clock.", image: "img/vocab-g4-u2-go-to-school.jpg", clock: "7:00", ampm: "AM", vi: "Mình đi học lúc 7 giờ." },
  { id: 4, before: "What time do you", after: "?", answer: ["have dinner"], full: "What time do you have dinner?", image: "img/vocab-g4-u2-have-dinner.jpg", clock: "7:30", ampm: "PM", vi: "Bạn ăn tối lúc mấy giờ?" },
];

// 5c) Read and complete (scored: 4) — cùng một hộp từ a–d cho cả 4 câu
const RC_OPTIONS = [{ key: "a", text: "at nine fifteen" }, { key: "b", text: "go to school" }, { key: "c", text: "is it" }, { key: "d", text: "six forty-five" }];
const RC_ITEMS = [
  { id: 1, stem: "What time ___?", answer: "c", vi: "Mấy giờ rồi?" },
  { id: 2, stem: "It's ___.", answer: "d", vi: "Bây giờ là 6 giờ 45." },
  { id: 3, stem: "What time do you ___?", answer: "b", vi: "Bạn đi học lúc mấy giờ?" },
  { id: 4, stem: "I go to bed ___.", answer: "a", vi: "Mình đi ngủ lúc 9 giờ 15." },
].map(x => ({ ...x, options: RC_OPTIONS }));

// 5d) Read and match (scored: 5) — đọc câu hỏi, chọn câu trả lời a–e
const RM_OPTIONS = [
  { key: "a", text: "I have dinner at seven thirty." },
  { key: "b", text: "I go to bed at nine fifteen." },
  { key: "c", text: "I get up at six o'clock." },
  { key: "d", text: "It's five forty-five." },
  { key: "e", text: "I go to school at seven o'clock." },
];
const RM_OPT_VI = ["a. Mình ăn tối lúc 7 giờ 30.", "b. Mình đi ngủ lúc 9 giờ 15.", "c. Mình thức dậy lúc 6 giờ.", "d. Bây giờ là 5 giờ 45.", "e. Mình đi học lúc 7 giờ."];
const RM_ITEMS = [
  { id: 1, stem: "What time is it?", answer: "d", vi: "Mấy giờ rồi?" },
  { id: 2, stem: "What time do you get up?", answer: "c", vi: "Bạn thức dậy lúc mấy giờ?" },
  { id: 3, stem: "What time do you go to school?", answer: "e", vi: "Bạn đi học lúc mấy giờ?" },
  { id: 4, stem: "What time do you have dinner?", answer: "a", vi: "Bạn ăn tối lúc mấy giờ?" },
  { id: 5, stem: "What time do you go to bed?", answer: "b", vi: "Bạn đi ngủ lúc mấy giờ?" },
].map(x => ({ ...x, options: RM_OPTIONS, optVi: RM_OPT_VI, speakBefore: x.stem,
              answerSentence: RM_OPTIONS.find(o => o.key === x.answer).text }));

// ============================================================
// Results saving — FIRST attempt only
// ============================================================
const UNIT_ID = "g4-unit2";
const UNIT_LABEL = "Unit 2: Time And Daily Routines";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return FITB_ITEMS.length + ORDER_ITEMS.length + TICK_ITEMS.length + LOOK_ITEMS.length + RC_ITEMS.length + RM_ITEMS.length;
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
// Picture for a quiz item: a photo (reused from Unit 2 Vocabulary) with a digital clock
// badge drawn in code, or just a big clock when there is no photo.
function clockHtml(t, ampm, big) {
  return `<span style="display:inline-flex;align-items:baseline;gap:4px;background:#1f2a44;color:#7CFFB2;border:3px solid #fff;` +
    `border-radius:12px;padding:${big ? "14px 26px" : "4px 10px"};font-family:'Courier New',monospace;font-weight:800;` +
    `font-size:${big ? "48px" : "22px"};box-shadow:0 2px 8px rgba(0,0,0,.25);">${escapeHtml(t)}<small style="font-size:.45em;">${escapeHtml(ampm || "")}</small></span>`;
}
function picHtml(item) {
  if (!item.image && !item.clock) return "";
  if (!item.image) return `<div style="text-align:center;margin:0 auto 14px;">${clockHtml(item.clock, item.ampm, true)}</div>`;
  return `<div style="position:relative;max-width:360px;margin:0 auto 14px;">` +
    `<img src="${escapeHtml(item.image)}" alt="" style="display:block;width:100%;height:210px;object-fit:cover;border-radius:14px;">` +
    (item.clock ? `<div style="position:absolute;right:8px;bottom:8px;">${clockHtml(item.clock, item.ampm, false)}</div>` : "") +
    `</div>`;
}

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
    ${picHtml(item)}
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
      if (answered) say(item.sayAfter || (item.answerSentence ? item.stem + " " + item.answerSentence : fullSentence(item))); // after answering, replay = the complete sentence
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
      say(item.sayAfter || (item.answerSentence ? item.stem + " " + item.answerSentence : fullSentence(item)));
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
    ${picHtml(item)}
    <div class="cw-row" style="justify-content:flex-start;">
      <span>${ctx.i + 1}.</span>
      ${item.before ? `<span>${escapeHtml(item.before)}</span>` : ""}
      <input class="cw-input" id="wr-input" type="text" inputmode="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="gõ vào đây…" style="min-width:140px;" aria-label="Từ còn thiếu">
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
  const seq = (items, prefix, renderItem) => (host, pre, done) =>
    runSequence(host, items.map(x => ({ ...x, keyPrefix: prefix })), 1, { scored: true, preHtml: pre, renderItem: renderItem || renderChoiceItem, onComplete: done });
  return [
    { title: "Listen and tick or cross", instruction: "Nghe rồi chọn ✓ nếu hình ĐÚNG với bài nghe, ✗ nếu SAI.", run: seq(TICK_ITEMS, "tick") },
    { title: "Look, complete and read", instruction: "Nhìn hình rồi tự gõ chữ còn thiếu.", run: seq(LOOK_ITEMS, "look", renderWriteItem) },
    { title: "Read and complete", instruction: "Chọn cụm từ trong hộp (a, b, c, d) để hoàn thành câu.", run: seq(RC_ITEMS, "rc") },
    { title: "Read and match", instruction: "Đọc câu hỏi rồi chọn câu trả lời đúng.", run: seq(RM_ITEMS, "match") },
  ];
}

function runQuiz() {
  const host = document.getElementById("quiz-wrap");
  if (!host) return;
  const parts = buildQuizParts();
  if (!parts.length) {
    host.innerHTML = `<p class="eq-instruction" style="text-align:center;">Phần Quiz đang được soạn — sắp có nhé!</p>`;
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
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 2. Giỏi lắm!", false, "complete_unit");
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
