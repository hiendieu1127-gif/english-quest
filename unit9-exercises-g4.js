// ============================================================
// Grade 4 — Unit 9 (Our Sports Day) — Exercises
// Source: reading passage "Tony's sports day" + exercises from teacher Hien + Global Success 4 workbook, Unit 9.
//   1 Reading  2 Vocabulary  3 True or False  4 Sentence Ordering  5 Quiz
// Vietnamese translations: written by Claude — please review.
//   True or False: NO "Dịch" button — the translation appears only after the student has chosen T/F.
//   Quiz "🔤 Dịch" translates the QUESTION only (the answer stays hidden as ___). After the student
//   answers, the correct answer + the translation of the whole sentence are shown.
//   Sentence Ordering: only about half of the chunks have a Vietnamese meaning.
// AI voice: only the Vocabulary flip cards (teacher Hien) — no read-aloud anywhere else on this page.
// Rules (same as every Exercises page): only the FIRST attempt is scored, wrong answers
// come back in "Vòng 2, 3...", no timer — the student taps "Tiếp theo →".
// ============================================================

// ============================================================
// 1) READING (practice only) — no translation, no read-aloud (teacher Hien).
// ============================================================
const READING_HTML =
  "My name is Tony. I am a student at Little Bear Primary School. Every year, our school <mark>organizes</mark> a sports day in May. It is one of my favourite school events." +
  "<br><br>" +
  "On this special day, my friends and I <mark>take part in</mark> different sports and games. Katie and Tom enjoy roller skating because it is <mark>exciting</mark>. " +
  "Ann and Bill are <mark>good at</mark> playing basketball. They often <mark>practise</mark> together after school. Andy and I love playing football because it is fun and <mark>keeps us healthy</mark>." +
  "<br><br>" +
  "We always have a wonderful time on sports day. I can't wait for the next one!";

const READING_VI = "";

// ============================================================
// 2) VOCABULARY (practice only) — flip cards with audio (teacher Hien's word list)
// ============================================================
const VOCAB_ITEMS = [
  { en: "organize", vi: "tổ chức" },
  { en: "take part in", vi: "tham gia" },
  { en: "exciting", vi: "thú vị, hào hứng" },
  { en: "be good at", vi: "giỏi về" },
  { en: "practise", vi: "luyện tập" },
  { en: "keep healthy", vi: "giữ sức khỏe" },
];

// ============================================================
// 3) TRUE OR FALSE (scored: 5) — teacher Hien's Part 3.
//    No "Dịch" button: the translation + the reason are shown only after the student answers.
// ============================================================
const TF_OPTIONS = [{ key: "T", text: "True" }, { key: "F", text: "False" }];
const TF_ITEMS = [
  { id: 1, stem: "Tony's school organizes a sports day every June.", answer: "F",
    fullVi: "Trường của Tony tổ chức ngày hội thể thao vào tháng Sáu hằng năm.",
    why: "Bài đọc: \"Every year, our school organizes a sports day in May.\" → tháng Năm, không phải tháng Sáu." },
  { id: 2, stem: "Tony thinks sports day is one of his favourite school events.", answer: "T",
    fullVi: "Tony nghĩ ngày hội thể thao là một trong những sự kiện yêu thích của bạn ấy ở trường.",
    why: "Bài đọc: \"It is one of my favourite school events.\"" },
  { id: 3, stem: "Katie and Tom enjoy roller skating because it is exciting.", answer: "T",
    fullVi: "Katie và Tom thích trượt patin vì nó rất thú vị.",
    why: "Bài đọc: \"Katie and Tom enjoy roller skating because it is exciting.\"" },
  { id: 4, stem: "Ann and Bill practise basketball before school.", answer: "F",
    fullVi: "Ann và Bill luyện tập bóng rổ trước giờ học.",
    why: "Bài đọc: \"They often practise together after school.\" → sau giờ học, không phải trước giờ học." },
  { id: 5, stem: "Tony and Andy think playing football is fun and healthy.", answer: "T",
    fullVi: "Tony và Andy nghĩ chơi bóng đá vừa vui vừa tốt cho sức khỏe.",
    why: "Bài đọc: \"Andy and I love playing football because it is fun and keeps us healthy.\"" },
].map(x => ({ ...x, options: TF_OPTIONS, noTranslate: true, viAfter: true }));

// ============================================================
// 4) SENTENCE ORDERING (scored: 5) — teacher Hien's Part 4 (sentences from the reading).
//    Only about half of the chunks carry a Vietnamese meaning (vi: "" = no meaning shown).
// ============================================================
const ORDER_ITEMS = [
  { id: 1, chunks: [ { en: "Our school", vi: "" }, { en: "organizes", vi: "tổ chức" }, { en: "a", vi: "" }, { en: "sports day", vi: "ngày hội thể thao" }, { en: "in May", vi: "" } ],
    end: ".", answer: "Our school organizes a sports day in May.", answerVi: "Trường mình tổ chức ngày hội thể thao vào tháng Năm." },
  { id: 2, chunks: [ { en: "We", vi: "" }, { en: "take part in", vi: "tham gia" }, { en: "different", vi: "khác nhau" }, { en: "sports and games", vi: "" } ],
    end: ".", answer: "We take part in different sports and games.", answerVi: "Chúng mình tham gia nhiều môn thể thao và trò chơi khác nhau." },
  { id: 3, chunks: [ { en: "They", vi: "" }, { en: "enjoy", vi: "" }, { en: "roller skating", vi: "trượt patin" }, { en: "because", vi: "vì" }, { en: "it", vi: "" }, { en: "is", vi: "" }, { en: "exciting", vi: "thú vị" } ],
    end: ".", answer: "They enjoy roller skating because it is exciting.", answerVi: "Các bạn ấy thích trượt patin vì nó rất thú vị." },
  { id: 4, chunks: [ { en: "Ann and Bill", vi: "" }, { en: "are", vi: "" }, { en: "good at", vi: "giỏi" }, { en: "playing", vi: "" }, { en: "basketball", vi: "bóng rổ" } ],
    end: ".", answer: "Ann and Bill are good at playing basketball.", answerVi: "Ann và Bill chơi bóng rổ giỏi." },
  { id: 5, chunks: [ { en: "Playing", vi: "" }, { en: "football", vi: "bóng đá" }, { en: "keeps", vi: "" }, { en: "us", vi: "" }, { en: "healthy", vi: "khỏe mạnh" } ],
    end: ".", answer: "Playing football keeps us healthy.", answerVi: "Chơi bóng đá giúp chúng mình khỏe mạnh." },
];

// ============================================================
// 5) QUIZ — Sách bài tập Unit 9
// ============================================================

// 5a) Listen and number (scored: 4) — Track 19. Audio made by teacher Hien: g4-u9-number-1.wav … -4.wav.
//     Pictures a–d = calendar cards drawn in code ("SCHOOL SPORTS DAY" + month), like the workbook.
//     Key: 1 → d (November), 2 → a (September), 3 → b (December), 4 → c (June).
const NUMBER_PICS = [{ month: "SEPTEMBER" }, { month: "DECEMBER" }, { month: "JUNE" }, { month: "NOVEMBER" }];
const NUMBER_OPTIONS = [{ key: "a", text: "Hình a" }, { key: "b", text: "Hình b" }, { key: "c", text: "Hình c" }, { key: "d", text: "Hình d" }];
const NUMBER_ITEMS = [
  { id: 1, answer: "d" },
  { id: 2, answer: "a" },
  { id: 3, answer: "b" },
  { id: 4, answer: "c" },
].map(x => ({ ...x, stem: "Listen and choose the right picture.", options: NUMBER_OPTIONS, pics: NUMBER_PICS, noTranslate: true,
              audio: `g4-u9-number-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn hình đúng." }));

// 5b) Read and complete (scored: 4)
const COMPLETE_OPTIONS = [
  { key: "a", text: "play football on sports day" }, { key: "b", text: "your sports day" },
  { key: "c", text: "July" }, { key: "d", text: "in the playground" },
];
const COMPLETE_ITEMS = [
  { id: 1, stem: "Is your sports day in ___?", answer: "c", vi: "Ngày hội thể thao của bạn vào ___ phải không?", fullVi: "Ngày hội thể thao của bạn vào tháng Bảy phải không?" },
  { id: 2, stem: "When's ___?", answer: "b", vi: "___ vào khi nào?", fullVi: "Ngày hội thể thao của bạn vào khi nào?" },
  { id: 3, stem: "We ___.", answer: "a", vi: "Chúng mình ___.", fullVi: "Chúng mình chơi bóng đá vào ngày hội thể thao." },
  { id: 4, stem: "They roller skate ___.", answer: "d", vi: "Các bạn ấy trượt patin ___.", fullVi: "Các bạn ấy trượt patin ở sân chơi." },
].map(x => ({ ...x, options: COMPLETE_OPTIONS }));

// 5c) Read and match (scored: 4) — question → answer a–d
const MATCH_OPTIONS = [
  { key: "a", text: "It's in the school playground." },
  { key: "b", text: "Yes, it is." },
  { key: "c", text: "We play sports and games." },
  { key: "d", text: "It's in May." },
];
const MATCH_ITEMS = [
  { id: 1, stem: "Is your sports day in October?", answer: "b", vi: "Ngày hội thể thao của bạn vào tháng Mười phải không?", fullVi: "Ngày hội thể thao của bạn vào tháng Mười phải không? – Đúng vậy." },
  { id: 2, stem: "When's your sports day?", answer: "d", vi: "Ngày hội thể thao của bạn vào khi nào?", fullVi: "Ngày hội thể thao của bạn vào khi nào? – Vào tháng Năm." },
  { id: 3, stem: "Where's your sports day?", answer: "a", vi: "Ngày hội thể thao của bạn ở đâu?", fullVi: "Ngày hội thể thao của bạn ở đâu? – Ở sân chơi của trường." },
  { id: 4, stem: "What do you do on sports day?", answer: "c", vi: "Bạn làm gì vào ngày hội thể thao?", fullVi: "Bạn làm gì vào ngày hội thể thao? – Chúng mình chơi các môn thể thao và trò chơi." },
].map(x => {
  const ans = MATCH_OPTIONS.find(o => o.key === x.answer).text;
  return { ...x, options: MATCH_OPTIONS, fullEn: `${x.stem} – ${ans}` };
});

// 5d) Read and circle (scored: 4) — dialogue, choose a or b for each gap.
//     Gap (1): "it isn't" is NOT translated in the hint ("không phải" would give away "No").
const RCIRCLE_DIALOGUE = [
  "A: Is your sports day in August?",
  "B: (1) ___, it isn't.",
  "A: (2) ___ your sports day?",
  "B: It's in June.",
  "A: (3) ___ do you do on sports day?",
  "B: We (4) ___ football, basketball and volleyball.",
];
const RCIRCLE_ITEMS = [
  { id: 1, dlgLine: 1, stem: "___, it isn't.", options: [{ key: "a", text: "Yes" }, { key: "b", text: "No" }], answer: "b",
    vi: "(Ngày hội thể thao của bạn vào tháng Tám phải không?) ___, ___.", fullVi: "Không, không phải." },
  { id: 2, dlgLine: 2, stem: "___ your sports day?", options: [{ key: "a", text: "Where's" }, { key: "b", text: "When's" }], answer: "b",
    vi: "Ngày hội thể thao của bạn ___? (Bạn kia trả lời: Vào tháng Sáu.)", fullVi: "Ngày hội thể thao của bạn vào khi nào?" },
  { id: 3, dlgLine: 4, stem: "___ do you do on sports day?", options: [{ key: "a", text: "What" }, { key: "b", text: "When" }], answer: "a",
    vi: "Bạn làm ___ vào ngày hội thể thao?", fullVi: "Bạn làm gì vào ngày hội thể thao?" },
  { id: 4, dlgLine: 5, stem: "We ___ football, basketball and volleyball.", options: [{ key: "a", text: "do" }, { key: "b", text: "play" }], answer: "b",
    vi: "Chúng mình ___ bóng đá, bóng rổ và bóng chuyền.", fullVi: "Chúng mình chơi bóng đá, bóng rổ và bóng chuyền." },
].map(x => ({ ...x, dlg: RCIRCLE_DIALOGUE }));

// ============================================================
// Results saving — FIRST attempt only
// ============================================================
const UNIT_ID = "g4-unit9";
const UNIT_LABEL = "Unit 9: Our Sports Day";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return TF_ITEMS.length + ORDER_ITEMS.length +
    NUMBER_ITEMS.length + COMPLETE_ITEMS.length + MATCH_ITEMS.length + RCIRCLE_ITEMS.length;
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

// AI voice: teacher Hien wants it ONLY on the Vocabulary flip cards. Every other read-aloud
// call on this page (say) is switched off; the flip cards use sayVocab.
function say(text) { /* no AI voice outside Vocabulary */ }

// A bare "I" (the whole chunk) is misread by some voices as the spelled-out letter
// ("capital I"). "aye" is a homophone that speaks correctly. Only the spoken text changes.
function sayVocab(text) {
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
// Multiple-choice question (used by True or False and every Quiz part)
// ============================================================
// Picture for a quiz item: a photo (from the Vocabulary images) with a digital clock
// badge drawn in code, or just a big clock when there is no photo.
function clockHtml(t, ampm, big) {
  return `<span style="display:inline-flex;align-items:baseline;gap:4px;background:#1f2a44;color:#7CFFB2;border:3px solid #fff;` +
    `border-radius:12px;padding:${big ? "14px 26px" : "4px 10px"};font-family:'Courier New',monospace;font-weight:800;` +
    `font-size:${big ? "48px" : "22px"};box-shadow:0 2px 8px rgba(0,0,0,.25);">${escapeHtml(t)}<small style="font-size:.45em;">${escapeHtml(ampm || "")}</small></span>`;
}
// "SCHOOL SPORTS DAY" calendar card drawn in code (month name), like the workbook pictures
function monthCardHtml(month, height) {
  return `<div style="height:${height}px;display:flex;flex-direction:column;background:#fff;border:2px solid #d9dbe3;border-radius:12px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.08);">` +
    `<div style="background:#2b2b33;color:#fff;font-weight:800;text-align:center;padding:7px 6px 7px 36px;font-size:clamp(11px,3.2vw,14px);line-height:1.25;letter-spacing:.5px;">SCHOOL SPORTS DAY</div>` +
    `<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#1f2a44;font-weight:900;font-size:clamp(16px,5vw,24px);padding:0 4px;text-align:center;word-break:break-word;">${escapeHtml(month)}</div></div>`;
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
      item.pics.map((pic, idx) => `<div style="position:relative;">${pic.month ? monthCardHtml(pic.month, 140) : pic.cal ? calHtml(pic.cal, pic.date, 140) : `<img src="${escapeHtml(pic)}" alt="" style="display:block;width:100%;height:140px;object-fit:cover;border-radius:12px;background:#f1f1f4;">`}` +
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
        (item.noTranslate && !item.viAfter ? "" :
          `<div style="color:#222;font-weight:800;margin-top:6px;">${escapeHtml(item.fullEn || fullSentence(item))}</div>` +
          `<div class="ans-vi">${escapeHtml(item.fullVi || "")}</div>` +
          (item.why ? `<div class="ans-vi" style="margin-top:4px;">${escapeHtml(item.why)}</div>` : ""));
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
// 3) True or False — one statement at a time, choose True or False
// ============================================================
function runTF() {
  const host = document.getElementById("tf-wrap");
  if (!host) return;
  runSequence(host, TF_ITEMS.map(x => ({ ...x, keyPrefix: "tf" })), 1, {
    scored: true,
    renderItem: renderChoiceItem,
    onComplete: () => showSectionComplete(host, "Em đã hoàn thành phần True or False.", true, "complete_exercise"),
  });
}

// ============================================================
// 5) Quiz — parts run one after another
// ============================================================
function buildQuizParts() {
  const seq = (items, prefix, renderItem) => (host, pre, done) =>
    runSequence(host, items.map(x => ({ ...x, keyPrefix: prefix })), 1, { scored: true, preHtml: pre, renderItem: renderItem || renderChoiceItem, onComplete: done });
  return [
    { title: "Listen and number", instruction: "Nghe rồi chọn hình đúng (a, b, c hoặc d).", run: seq(NUMBER_ITEMS, "number") },
    { title: "Read and complete", instruction: "Đọc câu rồi chọn đáp án đúng (a, b, c hoặc d) để hoàn thành câu.", run: seq(COMPLETE_ITEMS, "complete") },
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
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 9. Giỏi lắm!", false, "complete_unit");
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
      sayVocab(VOCAB_ITEMS[Number(card.dataset.idx)].en);
      card.classList.toggle("flipped");
    });
  });
  const toTf = document.getElementById("vocab-to-tf-btn");
  toTf && toTf.addEventListener("click", () => switchPanel("panel-tf"));
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
  runTF();
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
