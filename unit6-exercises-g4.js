// ============================================================
// Grade 4 — Unit 6 (Our School Facilities) — Exercises
// Source: reading passage "My School" from teacher Hien + Global Success 4 workbook, Unit 6.
//   1 Reading  2 Vocabulary  3 Fill in the Blank  4 Sentence Ordering  5 Quiz
// Vietnamese translations: written by Claude — please review.
// Rules (same as every Exercises page): only the FIRST attempt is scored, wrong answers
// come back in "Vòng 2, 3...", no timer — the student taps "Tiếp theo →".
// ============================================================

// ============================================================
// 1) READING (practice only) — My School
// ============================================================
const READING_HTML =
  "My school <mark>is located in</mark> a small village. It is not very big, but it is beautiful and <mark>peaceful</mark>. " +
  "There are many green trees <mark>around the school</mark>, so the air is fresh. My school has a computer room with many computers, " +
  "and students can <mark>use them to</mark> <mark>learn new things</mark>. There is also a <mark>lovely</mark> garden with many <mark>colourful flowers</mark>. " +
  "<mark>In addition</mark>, there are two large playgrounds where we often play football, badminton and other fun games <mark>during break time</mark>. " +
  "I love my school because it is a great place to learn and <mark>make friends</mark>.";

const READING_VI = "";

// ============================================================
// 2) VOCABULARY (practice only) — flip cards with audio (from teacher Hien's list)
// ============================================================
const VOCAB_ITEMS = [
  { en: "be located in", vi: "nằm ở" },
  { en: "peaceful", vi: "yên bình" },
  { en: "around the school", vi: "xung quanh trường" },
  { en: "fresh air", vi: "không khí trong lành" },
  { en: "use something to do something", vi: "sử dụng thứ gì để làm gì" },
  { en: "learn new things", vi: "học những điều mới" },
  { en: "lovely", vi: "đáng yêu" },
  { en: "colourful flowers", vi: "những bông hoa đầy màu sắc" },
  { en: "in addition", vi: "ngoài ra" },
  { en: "during break time", vi: "trong giờ ra chơi" },
  { en: "make friends", vi: "kết bạn" },
];

// ============================================================
// 3) FILL IN THE BLANK (scored: 6) — teacher Hien's Exercise 1, sentences 5–10
// ============================================================
const FITB_ITEMS = [
  { id: 5, stem: "There is a beautiful ___ with colourful flowers at my school.", options: [{ key: "a", text: "garden" }, { key: "b", text: "friends" }],
    answer: "a", vi: "Có một ___ đẹp với những bông hoa đầy màu sắc ở trường mình.", optVi: ["a. khu vườn", "b. những người bạn"] },
  { id: 6, stem: "My school has two large ___ where students can play football.", options: [{ key: "a", text: "computers" }, { key: "b", text: "playgrounds" }],
    answer: "b", vi: "Trường mình có hai ___ lớn, nơi học sinh có thể chơi bóng đá.", optVi: ["a. máy tính", "b. sân chơi"] },
  { id: 7, stem: "We often play badminton ___ break time.", options: [{ key: "a", text: "during" }, { key: "b", text: "but" }],
    answer: "a", vi: "Chúng mình thường chơi cầu lông ___ giờ ra chơi.", optVi: ["a. trong (suốt)", "b. nhưng"] },
  { id: 8, stem: "Students use computers to ___ new things.", options: [{ key: "a", text: "fresh" }, { key: "b", text: "learn" }],
    answer: "b", vi: "Học sinh sử dụng máy tính để ___ những điều mới.", optVi: ["a. trong lành", "b. học"] },
  { id: 9, stem: "My school is not very big, ___ it is beautiful and peaceful.", options: [{ key: "a", text: "during" }, { key: "b", text: "but" }],
    answer: "b", vi: "Trường mình không lớn lắm, ___ trường rất đẹp và yên bình.", optVi: ["a. trong (suốt)", "b. nhưng"] },
  { id: 10, stem: "I love my school because I can learn new things and make ___.", options: [{ key: "a", text: "friends" }, { key: "b", text: "trees" }],
    answer: "a", vi: "Mình yêu trường vì mình có thể học những điều mới và kết ___.", optVi: ["a. bạn", "b. cây"] },
];

// ============================================================
// 4) SENTENCE ORDERING (scored: 5) — teacher Hien's chunks
// ============================================================
const ORDER_ITEMS = [
  { id: 1, chunks: [ { en: "My", vi: "của mình" }, { en: "school", vi: "trường" }, { en: "is", vi: "thì" }, { en: "located", vi: "nằm" }, { en: "in", vi: "ở" }, { en: "a small village", vi: "một ngôi làng nhỏ" } ],
    end: ".", answer: "My school is located in a small village.", answerVi: "Trường mình nằm ở một ngôi làng nhỏ." },
  { id: 2, chunks: [ { en: "There", vi: "có" }, { en: "are", vi: "(là)" }, { en: "many", vi: "nhiều" }, { en: "trees", vi: "cây" }, { en: "around", vi: "xung quanh" }, { en: "the school", vi: "trường" } ],
    end: ".", answer: "There are many trees around the school.", answerVi: "Có nhiều cây xung quanh trường." },
  { id: 3, chunks: [ { en: "My school", vi: "trường mình" }, { en: "has", vi: "có" }, { en: "a computer room", vi: "một phòng máy tính" }, { en: "with", vi: "với" }, { en: "many computers", vi: "nhiều máy tính" } ],
    end: ".", answer: "My school has a computer room with many computers.", answerVi: "Trường mình có một phòng máy tính với nhiều máy tính." },
  { id: 4, chunks: [ { en: "The garden", vi: "khu vườn" }, { en: "has", vi: "có" }, { en: "many", vi: "nhiều" }, { en: "colourful", vi: "đầy màu sắc" }, { en: "flowers", vi: "những bông hoa" } ],
    end: ".", answer: "The garden has many colourful flowers.", answerVi: "Khu vườn có nhiều bông hoa đầy màu sắc." },
  { id: 5, chunks: [ { en: "We", vi: "chúng mình" }, { en: "often", vi: "thường" }, { en: "play", vi: "chơi" }, { en: "football", vi: "bóng đá" }, { en: "during", vi: "trong (suốt)" }, { en: "break time", vi: "giờ ra chơi" } ],
    end: ".", answer: "We often play football during break time.", answerVi: "Chúng mình thường chơi bóng đá trong giờ ra chơi." },
];

// ============================================================
// 5) QUIZ — Sách bài tập Unit 6 (4 bài)
//    Audio: teacher Hien makes it and uploads
//    g4-u6-circle-1.wav, g4-u6-circle-2.wav (Track 12) and g4-u6-pic-1.wav, g4-u6-pic-2.wav (Track 13).
//    Until a file is uploaded, the page reads the same script aloud with the browser voice.
// ============================================================

// 5a) Listen and circle (scored: 2) — Track 12: listen, then pick the word a–c
const CIRCLE_ITEMS = [
  { id: 1, stem: "There are two ___ near my school.", options: [{ key: "a", text: "towns" }, { key: "b", text: "villages" }, { key: "c", text: "mountains" }],
    answer: "b", vi: "Có hai ___ gần trường mình.", optVi: ["a. thị trấn", "b. ngôi làng", "c. vùng núi"] },
  { id: 2, stem: "My school is in the ___.", options: [{ key: "a", text: "mountains" }, { key: "b", text: "towns" }, { key: "c", text: "villages" }],
    answer: "a", vi: "Trường mình ở ___.", optVi: ["a. vùng núi", "b. thị trấn", "c. ngôi làng"] },
].map(x => ({ ...x, ttsScript: x.stem.replace("___", x.options.find(o => o.key === x.answer).text),
              audio: `g4-u6-circle-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn từ đúng." }));

// 5b) Listen and circle (scored: 2) — Track 13: listen, then pick picture a or b
const PIC_OPTIONS = [{ key: "a", text: "Hình a" }, { key: "b", text: "Hình b" }];
const PIC_ITEMS = [
  { id: 1, answer: "b", ttsScript: "Where's your school? It's in the city." },
  { id: 2, answer: "b", ttsScript: "There is a big garden at my school." },
].map(x => ({ ...x, stem: "Listen and choose the right picture.", options: PIC_OPTIONS, noTranslate: true,
              pics: [`img/g4-u6-pic-${x.id}a.jpg`, `img/g4-u6-pic-${x.id}b.jpg`],
              sayAfter: x.ttsScript, audio: `g4-u6-pic-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn hình đúng." }));

// 5c) Read and complete (scored: 4) — cùng một hộp từ a–d cho cả 4 câu
const RC_OPTIONS = [{ key: "a", text: "two buildings at my school" }, { key: "b", text: "your school" }, { key: "c", text: "one playground at his school" }, { key: "d", text: "computer rooms are there at your school" }];
const RC_ITEMS = [
  { id: 1, stem: "Where is ___?", answer: "b", vi: "Trường của bạn ở đâu?" },
  { id: 2, stem: "How many ___?", answer: "d", vi: "Trường bạn có bao nhiêu phòng máy tính?" },
  { id: 3, stem: "There is ___.", answer: "c", vi: "Trường của cậu ấy có một sân chơi." },
  { id: 4, stem: "There are ___.", answer: "a", vi: "Trường mình có hai tòa nhà." },
].map(x => ({ ...x, options: RC_OPTIONS }));

// 5d) Read and match (scored: 4) — đọc câu hỏi, chọn câu trả lời a–d
const RM_OPTIONS = [
  { key: "a", text: "There is one computer room at my school." },
  { key: "b", text: "There are two playgrounds at his school." },
  { key: "c", text: "It's in the town." },
  { key: "d", text: "There are four buildings at her school." },
];
const RM_OPT_VI = ["a. Trường mình có một phòng máy tính.", "b. Trường cậu ấy có hai sân chơi.", "c. Trường ở thị trấn.", "d. Trường cô ấy có bốn tòa nhà."];
const RM_ITEMS = [
  { id: 1, stem: "Where's your school?", answer: "c", vi: "Trường của bạn ở đâu?" },
  { id: 2, stem: "How many buildings are there at her school?", answer: "d", vi: "Trường cô ấy có bao nhiêu tòa nhà?" },
  { id: 3, stem: "How many computer rooms are there at your school?", answer: "a", vi: "Trường bạn có bao nhiêu phòng máy tính?" },
  { id: 4, stem: "How many playgrounds are there at his school?", answer: "b", vi: "Trường cậu ấy có bao nhiêu sân chơi?" },
].map(x => ({ ...x, options: RM_OPTIONS, optVi: RM_OPT_VI, speakBefore: x.stem,
              answerSentence: RM_OPTIONS.find(o => o.key === x.answer).text }));
// ============================================================
// Results saving — FIRST attempt only
// ============================================================
const UNIT_ID = "g4-unit6";
const UNIT_LABEL = "Unit 6: Our School Facilities";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return FITB_ITEMS.length + ORDER_ITEMS.length + CIRCLE_ITEMS.length + PIC_ITEMS.length + RC_ITEMS.length + RM_ITEMS.length;
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
// Picture for a quiz item: a photo (from the Vocabulary images) with a digital clock
// badge drawn in code, or just a big clock when there is no photo.
function clockHtml(t, ampm, big) {
  return `<span style="display:inline-flex;align-items:baseline;gap:4px;background:#1f2a44;color:#7CFFB2;border:3px solid #fff;` +
    `border-radius:12px;padding:${big ? "14px 26px" : "4px 10px"};font-family:'Courier New',monospace;font-weight:800;` +
    `font-size:${big ? "48px" : "22px"};box-shadow:0 2px 8px rgba(0,0,0,.25);">${escapeHtml(t)}<small style="font-size:.45em;">${escapeHtml(ampm || "")}</small></span>`;
}
// Calendar page drawn in code (day name + date), like the workbook pictures
function calHtml(day, date, height) {
  return `<div style="height:${height}px;display:flex;flex-direction:column;background:#fff;border:2px solid #d9dbe3;border-radius:12px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.08);">` +
    `<div style="background:#e5484d;color:#fff;font-weight:800;text-align:center;padding:8px 4px;font-size:clamp(15px,4.5vw,20px);">${escapeHtml(day)}</div>` +
    `<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#1f2a44;font-weight:900;font-size:${Math.round(height * 0.38)}px;">${date}</div></div>`;
}

function picHtml(item) {
  if (item.cal) return `<div style="max-width:220px;margin:0 auto 14px;">${calHtml(item.cal, item.date, 190)}</div>`;
  if (item.pics) {
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:360px;margin:0 auto 14px;">` +
      item.pics.map((pic, idx) => `<div style="position:relative;">${pic.cal ? calHtml(pic.cal, pic.date, 140) : `<img src="${escapeHtml(pic)}" alt="" style="display:block;width:100%;height:140px;object-fit:cover;border-radius:12px;background:#f1f1f4;">`}` +
        `<span style="position:absolute;left:6px;top:6px;background:#232966;border:2px solid #fff;color:#fff;font-weight:800;border-radius:999px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;">${item.options[idx].key}</span></div>`).join("") +
      `</div>`;
  }
  if (!item.image && !item.clock) return "";
  if (!item.image) return `<div style="text-align:center;margin:0 auto 14px;">${clockHtml(item.clock, item.ampm, true)}</div>`;
  return `<div style="position:relative;max-width:360px;margin:0 auto 14px;">` +
    `<img src="${escapeHtml(item.image)}" alt="" onerror="this.parentNode.style.display='none'" style="display:block;width:100%;height:210px;object-fit:cover;border-radius:14px;">` +
    (item.tag ? `<span style="position:absolute;right:8px;top:8px;background:#e5484d;color:#fff;font-weight:800;border-radius:10px;padding:4px 12px;">${escapeHtml(item.tag)}</span>` : "") +
    (item.clock ? `<div style="position:absolute;right:8px;bottom:8px;">${clockHtml(item.clock, item.ampm, false)}</div>` : "") +
    `</div>`;
}

// Audio file not uploaded yet (or fails to load)? Swap the player for a "🔊 Nghe" button that
// reads the same script with the browser voice, so the listening question still works.
function audioFallback(host, item) {
  const au = host.querySelector("#q-audio");
  if (!au || !item.ttsScript) return;
  au.addEventListener("error", () => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "q-listen-btn";
    btn.textContent = "🔊 Nghe";
    btn.addEventListener("click", () => say(item.ttsScript));
    const note = au.nextElementSibling;
    if (note && note.classList.contains("q-vi")) note.textContent = note.textContent.replace("▶", "🔊 Nghe");
    au.replaceWith(btn);
  });
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

  audioFallback(host, item);
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
      <input class="cw-input" id="wr-input" type="text" inputmode="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${escapeHtml(item.hint || "gõ vào đây…")}" style="min-width:140px;" aria-label="Từ còn thiếu">
      <span>${escapeHtml(item.after)}</span>
    </div>
    ${item.audio ? `<audio class="q-audio" id="q-audio" controls preload="auto" src="${escapeHtml(item.audio)}"></audio><div class="q-vi" style="margin:0 0 6px;">${escapeHtml(item.audioNote || "")}</div>` : ""}
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
    const audioEl = host.querySelector("#q-audio");
    audioEl && audioEl.pause(); // don't let the recording talk over the answer read-out
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
    { title: "Listen and circle", instruction: "Nghe rồi chọn từ đúng (a, b hoặc c).", run: seq(CIRCLE_ITEMS, "circle") },
    { title: "Listen and circle the picture", instruction: "Nghe rồi chọn hình đúng (a hoặc b).", run: seq(PIC_ITEMS, "pic") },
    { title: "Read and complete", instruction: "Chọn cụm từ trong hộp (a, b, c, d) để hoàn thành câu.", run: seq(RC_ITEMS, "rc") },
    { title: "Read and match", instruction: "Đọc câu rồi chọn câu đáp đúng.", run: seq(RM_ITEMS, "match") },
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
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 6. Giỏi lắm!", false, "complete_unit");
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
