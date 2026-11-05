// ============================================================
// Grade 4 — Unit 8 (My Favourite Subjects) — Exercises
// Source: reading passage "My School Day" (Nick) + exercises from teacher Hien + Global Success 4 workbook, Unit 8.
//   1 Reading  2 Vocabulary  3 Fill in the Blank  4 Sentence Ordering  5 Quiz
// Vietnamese translations: written by Claude — please review.
//   "🔤 Dịch" translates the QUESTION only (the answer stays hidden as ___). After the student
//   answers, the correct answer + the translation of the whole sentence are shown.
//   Sentence Ordering: only about half of the chunks have a Vietnamese meaning.
// Rules (same as every Exercises page): only the FIRST attempt is scored, wrong answers
// come back in "Vòng 2, 3...", no timer — the student taps "Tiếp theo →".
// ============================================================

// ============================================================
// 1) READING (practice only) — My School Day. No translation, no read-aloud (teacher Hien).
// ============================================================
const READING_HTML =
  "My name is Nick. I go to school from Monday to Friday. Today is Wednesday, and I have four <mark>subjects</mark>: PE, IT, Music and English. " +
  "My favourite subject is Music because I <mark>enjoy singing</mark> and dancing. I want to <mark>become</mark> a famous dancer <mark>in the future</mark>." +
  "<br><br>" +
  "I usually have Music lessons in the morning. After school, I often <mark>practise dancing</mark> with my friends. " +
  "I also like English because it helps me <mark>communicate with</mark> people from different countries. I think learning new things is interesting and useful.";

const READING_VI = "";

// ============================================================
// 2) VOCABULARY (practice only) — flip cards with audio (teacher Hien's word list)
// ============================================================
const VOCAB_ITEMS = [
  { en: "subject", vi: "môn học" },
  { en: "enjoy doing something", vi: "thích làm việc gì" },
  { en: "become", vi: "trở thành" },
  { en: "in the future", vi: "trong tương lai" },
  { en: "practise dancing", vi: "luyện tập nhảy" },
  { en: "communicate with", vi: "giao tiếp với" },
];

// ============================================================
// 3) FILL IN THE BLANK (scored: 6) — teacher Hien's Exercise 3, the student TYPES the word
// ============================================================
const FITB_WORDS = ["communicate", "subject", "future", "practise", "enjoy", "become"];
const FITB_ITEMS = [
  { id: 1, before: "My favourite", after: "is English.", answer: ["subject"],
    full: "My favourite subject is English.", vi: "___ yêu thích của mình là môn Tiếng Anh.", fullVi: "Môn học yêu thích của mình là môn Tiếng Anh." },
  { id: 2, before: "I want to", after: "a doctor one day.", answer: ["become"],
    full: "I want to become a doctor one day.", vi: "Mình muốn ___ bác sĩ vào một ngày nào đó.", fullVi: "Mình muốn trở thành bác sĩ vào một ngày nào đó." },
  { id: 3, before: "We", after: "playing badminton after school.", answer: ["enjoy"],
    full: "We enjoy playing badminton after school.", vi: "Chúng mình ___ chơi cầu lông sau giờ học.", fullVi: "Chúng mình thích chơi cầu lông sau giờ học." },
  { id: 4, before: "She wants to be a singer in the", after: ".", answer: ["future"],
    full: "She wants to be a singer in the future.", vi: "Cô ấy muốn trở thành ca sĩ trong ___.", fullVi: "Cô ấy muốn trở thành ca sĩ trong tương lai." },
  { id: 5, before: "I", after: "speaking English with my friends every day.", answer: ["practise"],
    full: "I practise speaking English with my friends every day.", vi: "Mình ___ nói tiếng Anh với các bạn mỗi ngày.", fullVi: "Mình luyện tập nói tiếng Anh với các bạn mỗi ngày." },
  { id: 6, before: "English helps me", after: "with people around the world.", answer: ["communicate"],
    full: "English helps me communicate with people around the world.", vi: "Tiếng Anh giúp mình ___ với mọi người trên khắp thế giới.", fullVi: "Tiếng Anh giúp mình giao tiếp với mọi người trên khắp thế giới." },
];

// ============================================================
// 4) SENTENCE ORDERING (scored: 6) — teacher Hien's Exercise 4.
//    Only about half of the chunks carry a Vietnamese meaning (vi: "" = no meaning shown).
//    Sentence 1: the exercise had only one "to" — a second "to" is added so the sentence can be built.
// ============================================================
const ORDER_ITEMS = [
  { id: 1, chunks: [ { en: "I", vi: "" }, { en: "go", vi: "đi" }, { en: "to", vi: "" }, { en: "school", vi: "trường" }, { en: "from", vi: "từ" }, { en: "Monday", vi: "" }, { en: "to", vi: "" }, { en: "Friday", vi: "thứ Sáu" } ],
    end: ".", answer: "I go to school from Monday to Friday.", answerVi: "Mình đi học từ thứ Hai đến thứ Sáu." },
  { id: 2, chunks: [ { en: "My", vi: "" }, { en: "favourite", vi: "yêu thích" }, { en: "subject", vi: "môn học" }, { en: "is", vi: "" }, { en: "Music", vi: "" } ],
    end: ".", answer: "My favourite subject is Music.", answerVi: "Môn học yêu thích của mình là môn Âm nhạc." },
  { id: 3, chunks: [ { en: "She", vi: "" }, { en: "enjoys", vi: "thích" }, { en: "dancing", vi: "nhảy" }, { en: "with", vi: "" }, { en: "her", vi: "" }, { en: "friends", vi: "bạn bè" } ],
    end: ".", answer: "She enjoys dancing with her friends.", answerVi: "Cô ấy thích nhảy cùng các bạn của mình." },
  { id: 4, chunks: [ { en: "English", vi: "" }, { en: "helps", vi: "giúp" }, { en: "me", vi: "" }, { en: "to", vi: "" }, { en: "communicate", vi: "giao tiếp" } ],
    end: ".", answer: "English helps me to communicate.", answerVi: "Tiếng Anh giúp mình giao tiếp." },
  { id: 5, chunks: [ { en: "I", vi: "" }, { en: "want", vi: "muốn" }, { en: "to", vi: "" }, { en: "be", vi: "trở thành" }, { en: "a", vi: "" }, { en: "teacher", vi: "giáo viên" }, { en: "in", vi: "" }, { en: "the", vi: "" }, { en: "future", vi: "tương lai" } ],
    end: ".", answer: "I want to be a teacher in the future.", answerVi: "Mình muốn trở thành giáo viên trong tương lai." },
  { id: 6, chunks: [ { en: "We", vi: "" }, { en: "often", vi: "thường" }, { en: "practise", vi: "luyện tập" }, { en: "English", vi: "" }, { en: "after", vi: "sau" }, { en: "school", vi: "" } ],
    end: ".", answer: "We often practise English after school.", answerVi: "Chúng mình thường luyện tập tiếng Anh sau giờ học." },
];

// ============================================================
// 5) QUIZ — Sách bài tập Unit 8
// ============================================================

// 5a) Read and complete (scored: 4)
const COMPLETE_OPTIONS = [
  { key: "a", text: "PE" }, { key: "b", text: "favourite subject" },
  { key: "c", text: "singers" }, { key: "d", text: "like Vietnamese" },
];
const COMPLETE_ITEMS = [
  { id: 1, stem: "What's your ___?", answer: "b", vi: "___ của bạn là gì?", fullVi: "Môn học yêu thích của bạn là gì?" },
  { id: 2, stem: "My favourite subject is ___.", answer: "a", vi: "Môn học yêu thích của mình là ___.", fullVi: "Môn học yêu thích của mình là môn Giáo dục thể chất." },
  { id: 3, stem: "Why do you ___?", answer: "d", vi: "Tại sao bạn ___?", fullVi: "Tại sao bạn thích môn Tiếng Việt?" },
  { id: 4, stem: "They like music because they want to be ___.", answer: "c", vi: "Các bạn ấy thích môn Âm nhạc vì các bạn ấy muốn trở thành ___.", fullVi: "Các bạn ấy thích môn Âm nhạc vì các bạn ấy muốn trở thành ca sĩ." },
].map(x => ({ ...x, options: COMPLETE_OPTIONS }));

// 5b) Listen and circle (scored: 2) — Track 17. Audio made by teacher Hien: g4-u8-circle-1.wav, g4-u8-circle-2.wav.
//     Pictures = the Vocabulary photos. No read-aloud after answering (the recording is the listening).
const CIRCLE_OPTIONS = [{ key: "a", text: "Hình a" }, { key: "b", text: "Hình b" }];
const CIRCLE_ITEMS = [
  { id: 1, answer: "a", pics: ["img/vocab-g4-u8-pe.jpg", "img/vocab-g4-u8-it.jpg"] },
  { id: 2, answer: "b", pics: ["img/vocab-g4-u8-singer.jpg", "img/vocab-g4-u8-painter.jpg"] },
].map(x => ({ ...x, stem: "Listen and choose the right picture.", options: CIRCLE_OPTIONS, noTranslate: true, noSay: true,
              audio: `g4-u8-circle-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn hình đúng." }));

// 5c) Read and match (scored: 4) — question → answer a–d
const MATCH_OPTIONS = [
  { key: "a", text: "Yes, I can." },
  { key: "b", text: "Because I want to be an English teacher." },
  { key: "c", text: "Yes, I do." },
  { key: "d", text: "It's art." },
];
const MATCH_ITEMS = [
  { id: 1, stem: "Do you like IT?", answer: "c", vi: "Bạn có thích môn Tin học không?", fullVi: "Bạn có thích môn Tin học không? – Có, mình thích." },
  { id: 2, stem: "What's your favourite subject?", answer: "d", vi: "Môn học yêu thích của bạn là gì?", fullVi: "Môn học yêu thích của bạn là gì? – Đó là môn Mĩ thuật." },
  { id: 3, stem: "Can you sing a song?", answer: "a", vi: "Bạn có thể hát một bài hát không?", fullVi: "Bạn có thể hát một bài hát không? – Có, mình có thể." },
  { id: 4, stem: "Why do you like English?", answer: "b", vi: "Tại sao bạn thích môn Tiếng Anh?", fullVi: "Tại sao bạn thích môn Tiếng Anh? – Vì mình muốn trở thành giáo viên tiếng Anh." },
].map(x => {
  const ans = MATCH_OPTIONS.find(o => o.key === x.answer).text;
  return { ...x, options: MATCH_OPTIONS, fullEn: `${x.stem} – ${ans}`, sayAfter: `${x.stem} ${ans}` };
});

// 5d) Read and circle (scored: 4) — dialogue, choose a or b for each gap
const RCIRCLE_DIALOGUE = [
  "A: (1) ___ subjects do you have today?",
  "B: I have maths, English and IT.",
  "A: What's your (2) ___ subject?",
  "B: It's English.",
  "A: (3) ___ do you like it?",
  "B: Because I (4) ___ to be an English teacher.",
];
const RCIRCLE_ITEMS = [
  { id: 1, dlgLine: 0, stem: "___ subjects do you have today?", options: [{ key: "a", text: "When" }, { key: "b", text: "What" }], answer: "b",
    vi: "Hôm nay bạn có những môn học ___?", fullVi: "Hôm nay bạn có những môn học nào?" },
  { id: 2, dlgLine: 2, stem: "What's your ___ subject?", options: [{ key: "a", text: "good" }, { key: "b", text: "favourite" }], answer: "b",
    vi: "Môn học ___ của bạn là gì?", fullVi: "Môn học yêu thích của bạn là gì?" },
  { id: 3, dlgLine: 4, stem: "___ do you like it?", options: [{ key: "a", text: "Why" }, { key: "b", text: "Where" }], answer: "a",
    vi: "___ bạn thích môn đó?", fullVi: "Tại sao bạn thích môn đó?" },
  { id: 4, dlgLine: 5, stem: "Because I ___ to be an English teacher.", options: [{ key: "a", text: "like" }, { key: "b", text: "want" }], answer: "b",
    vi: "Vì mình ___ trở thành giáo viên tiếng Anh.", fullVi: "Vì mình muốn trở thành giáo viên tiếng Anh." },
].map(x => ({ ...x, dlg: RCIRCLE_DIALOGUE }));

// ============================================================
// Results saving — FIRST attempt only
// ============================================================
const UNIT_ID = "g4-unit8";
const UNIT_LABEL = "Unit 8: My Favourite Subjects";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return FITB_ITEMS.length + ORDER_ITEMS.length +
    COMPLETE_ITEMS.length + CIRCLE_ITEMS.length + MATCH_ITEMS.length + RCIRCLE_ITEMS.length;
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
    return (item.person ? `<img src="${escapeHtml(item.person)}" alt="" style="display:block;height:150px;width:auto;margin:0 auto 10px;border-radius:12px;">` : "") +
      `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:360px;margin:0 auto 14px;">` +
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

// Read and circle: the whole dialogue, with the line of the current gap highlighted
function dlgHtml(item) {
  if (!item.dlg) return "";
  return `<div class="dlg-box">` +
    item.dlg.map((line, idx) => `<div>${idx === item.dlgLine ? `<span class="dlg-cur">${escapeHtml(line)}</span>` : escapeHtml(line)}</div>`).join("") +
    `</div>`;
}

function renderChoiceItem(host, item, ctx) {
  const stemHtml = escapeHtml(item.stem).replace("___", `<span class="q-blank" id="q-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`);
  const hasListen = !!(item.listenFull || item.speakBefore);
  const viHtml = item.noTranslate ? "" : `
    <button type="button" class="eq-translate-btn" id="q-translate">🔤 Dịch</button>
    <div class="q-vi" id="q-vi" style="display:none;">
      <div>${escapeHtml(item.vi || "")}</div>
    </div>`;
  const letters = item.options.map(o => o.key);

  host.innerHTML = `
    ${ctx.top}
    ${picHtml(item)}
    ${dlgHtml(item)}
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
      if (!item.noSay) say(item.sayAfter || fullSentence(item));
      if (listenBtn) listenBtn.textContent = "🔊 Nghe lại";
      const viPanel = host.querySelector("#q-vi");
      viPanel && (viPanel.style.display = "none");
      transBtn && (transBtn.style.display = "none");

      // Only now: the correct answer + the whole sentence + its translation
      feedback.innerHTML =
        (correct
          ? `<span style="color:#3fae4f;font-weight:700;">✓ Chính xác!</span>`
          : `<span style="color:#e05c5c;font-weight:700;">Chưa đúng. Đáp án đúng: ${escapeHtml(item.answer)}. ${escapeHtml(optionText(item, item.answer))}</span>`) +
        (item.noTranslate ? "" :
          `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(item.fullEn || fullSentence(item))}</div>` +
          `<div class="ans-vi">${escapeHtml(item.fullVi || "")}</div>`);
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
    preHtml: `<div class="word-box">${FITB_WORDS.map(escapeHtml).join(" – ")}</div>`,
    renderItem: renderWriteItem,
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
      `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(item.full)}</div>` +
      `<div class="ans-vi">${escapeHtml(item.fullVi || "")}</div>`;
    feedback.className = "fitb-feedback";
    host.querySelector("#wr-vi").style.display = "none";
    transBtn.style.display = "none";
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
    { title: "Read and complete", instruction: "Đọc câu rồi chọn đáp án đúng (a, b, c hoặc d) để hoàn thành câu.", run: seq(COMPLETE_ITEMS, "complete") },
    { title: "Listen and circle", instruction: "Nghe rồi chọn hình đúng (a hoặc b).", run: seq(CIRCLE_ITEMS, "circle") },
    { title: "Read and match", instruction: "Đọc câu hỏi rồi chọn câu trả lời đúng (a, b, c hoặc d).", run: seq(MATCH_ITEMS, "match") },
    { title: "Read and circle", instruction: "Đọc đoạn hội thoại rồi chọn từ đúng (a hoặc b) cho mỗi chỗ trống.", run: seq(RCIRCLE_ITEMS, "rcircle") },
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
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 8. Giỏi lắm!", false, "complete_unit");
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
