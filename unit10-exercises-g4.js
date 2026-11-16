// ============================================================
// Grade 4 — Unit 10 (Our Summer Holidays) — Exercises
// Source: reading passage "A Holiday in Sa Pa" + exercises from teacher Hien + Global Success 4 workbook, Unit 10.
//   1 Reading  2 Vocabulary  3 True or False  4 Sentence Ordering  5 Quiz
// Vietnamese translations: written by Claude, checked by teacher Hien.
//   True or False: "🔤 Dịch" translates the STATEMENT only; the answer + reason appear after the student answers.
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
  "My name is John. Last weekend, my family <mark>went</mark> on a holiday to Sa Pa, a beautiful mountain town in northern Vietnam." +
  "<br><br>" +
  "The streets were <mark>crowded</mark>, but the weather was cool and <mark>fresh</mark>. We <mark>visited</mark> a small market and <mark>bought</mark> some <mark>local</mark> food. " +
  "The houses were simple, and the people were kind and <mark>helpful</mark>." +
  "<br><br>" +
  "We <mark>tried</mark> some <mark>delicious</mark> dishes and took many photos. I really <mark>enjoyed</mark> the trip because it was exciting and <mark>memorable</mark>." +
  "<br><br>" +
  "How about you? Where did you go last weekend? What did you do there?";

const READING_VI = "";

// ============================================================
// 2) VOCABULARY (practice only) — flip cards with audio (teacher Hien's word list, meanings unchanged)
// ============================================================
const VOCAB_ITEMS = [
  { en: "crowded", vi: "Đông đúc" },
  { en: "fresh", vi: "Trong lành, tươi mát" },
  { en: "visit", vi: "Tham quan, ghé thăm" },
  { en: "local", vi: "Địa phương" },
  { en: "delicious", vi: "Ngon" },
  { en: "helpful", vi: "Hay giúp đỡ" },
  { en: "memorable", vi: "Đáng nhớ" },
  { en: "go – went", vi: "Đi – đã đi" },
  { en: "buy – bought", vi: "Mua – đã mua" },
  { en: "try – tried", vi: "Thử – đã thử" },
  { en: "enjoy – enjoyed", vi: "Thích, tận hưởng – đã thích, đã tận hưởng" },
];

// ============================================================
// 3) TRUE OR FALSE (scored: 5) — teacher Hien's Part 1.
//    "🔤 Dịch" = the statement only. The reason from the reading is shown after answering.
// ============================================================
const TF_OPTIONS = [{ key: "T", text: "True" }, { key: "F", text: "False" }];
const TF_ITEMS = [
  { id: 1, stem: "John's family went to Sa Pa last weekend.", answer: "T",
    vi: "Gia đình John đã đi Sa Pa vào cuối tuần trước.",
    why: "Bài đọc: \"Last weekend, my family went on a holiday to Sa Pa…\"" },
  { id: 2, stem: "Sa Pa is a beautiful town in southern Vietnam.", answer: "F",
    vi: "Sa Pa là một thị trấn xinh đẹp ở miền Nam Việt Nam.",
    why: "Bài đọc: \"…a beautiful mountain town in northern Vietnam.\" → miền Bắc, không phải miền Nam." },
  { id: 3, stem: "The weather was cool and fresh.", answer: "T",
    vi: "Thời tiết mát mẻ và trong lành.",
    why: "Bài đọc: \"…the weather was cool and fresh.\"" },
  { id: 4, stem: "John's family visited a small market.", answer: "T",
    vi: "Gia đình John đã tham quan một khu chợ nhỏ.",
    why: "Bài đọc: \"We visited a small market…\"" },
  { id: 5, stem: "John didn't enjoy his holiday because it was boring.", answer: "F",
    vi: "John không thích kỳ nghỉ vì nó chán.",
    why: "Bài đọc: \"I really enjoyed the trip because it was exciting and memorable.\" → John rất thích chuyến đi." },
].map(x => ({ ...x, fullVi: x.vi, options: TF_OPTIONS }));

// ============================================================
// 4) SENTENCE ORDERING (scored: 5) — teacher Hien's Part 2 (sentences from the reading).
//    Only about half of the chunks carry a Vietnamese meaning (vi: "" = no meaning shown).
// ============================================================
const ORDER_ITEMS = [
  { id: 1, chunks: [ { en: "My family", vi: "" }, { en: "went", vi: "đã đi" }, { en: "to Sa Pa", vi: "" }, { en: "last weekend", vi: "cuối tuần trước" } ],
    end: ".", answer: "My family went to Sa Pa last weekend.", answerVi: "Gia đình mình đã đi Sa Pa vào cuối tuần trước." },
  { id: 2, chunks: [ { en: "The weather", vi: "thời tiết" }, { en: "was", vi: "" }, { en: "cool and fresh", vi: "" } ],
    end: ".", answer: "The weather was cool and fresh.", answerVi: "Thời tiết mát mẻ và trong lành." },
  { id: 3, chunks: [ { en: "We", vi: "" }, { en: "visited", vi: "đã tham quan" }, { en: "a small market", vi: "" } ],
    end: ".", answer: "We visited a small market.", answerVi: "Chúng mình đã tham quan một khu chợ nhỏ." },
  { id: 4, chunks: [ { en: "We", vi: "" }, { en: "bought", vi: "" }, { en: "some local food", vi: "một ít đồ ăn địa phương" } ],
    end: ".", answer: "We bought some local food.", answerVi: "Chúng mình đã mua một ít đồ ăn địa phương." },
  { id: 5, chunks: [ { en: "I", vi: "" }, { en: "really enjoyed", vi: "rất thích" }, { en: "my holiday", vi: "" } ],
    end: ".", answer: "I really enjoyed my holiday.", answerVi: "Mình rất thích kỳ nghỉ của mình." },
];

// ============================================================
// 5) QUIZ — Sách bài tập Unit 10
// ============================================================

// 5a) Listen and number (scored: 4) — Track 21. Audio made by teacher Hien: g4-u10-number-1.wav … -4.wav.
//     Pictures (teacher Hien): a Bangkok, b beach + kite, c summer camp, d Tokyo.
//     Key: 1 → c, 2 → b, 3 → d, 4 → a.
const NUMBER_PICS = ["img/g4-u10-number-a.jpg", "img/g4-u10-number-b.jpg", "img/g4-u10-number-c.jpg", "img/g4-u10-number-d.jpg"];
const NUMBER_OPTIONS = [{ key: "a", text: "Hình a" }, { key: "b", text: "Hình b" }, { key: "c", text: "Hình c" }, { key: "d", text: "Hình d" }];
const NUMBER_ITEMS = [
  { id: 1, answer: "c" },
  { id: 2, answer: "b" },
  { id: 3, answer: "d" },
  { id: 4, answer: "a" },
].map(x => ({ ...x, stem: "Listen and choose the right picture.", options: NUMBER_OPTIONS, pics: NUMBER_PICS, noTranslate: true,
              audio: `g4-u10-number-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn hình đúng." }));

// 5b) Read and complete (scored: 4)
const COMPLETE_OPTIONS = [
  { key: "a", text: "in the countryside" }, { key: "b", text: "London last summer" },
  { key: "c", text: "last weekend" }, { key: "d", text: "you yesterday" },
];
const COMPLETE_ITEMS = [
  { id: 1, stem: "Where were ___?", answer: "d", vi: "___ đã ở đâu?", fullVi: "Hôm qua bạn đã ở đâu?" },
  { id: 2, stem: "I was ___ last Sunday.", answer: "a", vi: "Chủ nhật tuần trước mình đã ở ___.", fullVi: "Chủ nhật tuần trước mình đã ở vùng nông thôn." },
  { id: 3, stem: "Were you in ___?", answer: "b", vi: "Bạn đã ở ___ phải không?", fullVi: "Mùa hè năm ngoái bạn đã ở Luân Đôn phải không?" },
  { id: 4, stem: "She was in the mountains ___.", answer: "c", vi: "Bạn ấy đã ở vùng núi ___.", fullVi: "Cuối tuần trước bạn ấy đã ở vùng núi." },
].map(x => ({ ...x, options: COMPLETE_OPTIONS }));

// 5c) Read and match (scored: 4) — question → answer a–d. "Dịch" = the question only.
const MATCH_OPTIONS = [
  { key: "a", text: "Yes, I was. The beach was beautiful." },
  { key: "b", text: "No, I'm not." },
  { key: "c", text: "It was very good." },
  { key: "d", text: "I was in Sydney." },
];
const MATCH_ITEMS = [
  { id: 1, stem: "Are you on the beach now?", answer: "b", vi: "Bây giờ bạn đang ở bãi biển phải không?", fullVi: "Bây giờ bạn đang ở bãi biển phải không? – Không, mình không ở đó." },
  { id: 2, stem: "Where were you last summer?", answer: "d", vi: "Mùa hè năm ngoái bạn đã ở đâu?", fullVi: "Mùa hè năm ngoái bạn đã ở đâu? – Mình đã ở Sydney." },
  { id: 3, stem: "Were you on the beach?", answer: "a", vi: "Bạn đã ở bãi biển phải không?", fullVi: "Bạn đã ở bãi biển phải không? – Có, mình đã ở đó. Bãi biển rất đẹp." },
  { id: 4, stem: "What was the food like?", answer: "c", vi: "Đồ ăn thế nào?", fullVi: "Đồ ăn thế nào? – Rất ngon." },
].map(x => {
  const ans = MATCH_OPTIONS.find(o => o.key === x.answer).text;
  return { ...x, options: MATCH_OPTIONS, fullEn: `${x.stem} – ${ans}` };
});

// 5d) Look, complete and read (scored: 4) — one picture per sentence (teacher Hien's pictures)
const LOOK_OPTIONS = [
  { key: "a", text: "the beach" }, { key: "b", text: "the campsite" },
  { key: "c", text: "London" }, { key: "d", text: "Sydney" },
];
const LOOK_ITEMS = [
  { id: 1, stem: "I was on ___ yesterday.", answer: "a", image: "img/g4-u10-look-1.jpg", vi: "Hôm qua mình đã ở ___.", fullVi: "Hôm qua mình đã ở bãi biển." },
  { id: 2, stem: "He was at ___ last Sunday.", answer: "b", image: "img/g4-u10-look-2.jpg", vi: "Chủ nhật tuần trước bạn ấy đã ở ___.", fullVi: "Chủ nhật tuần trước bạn ấy đã ở khu cắm trại." },
  { id: 3, stem: "They were in ___ last summer.", answer: "c", image: "img/g4-u10-look-3.jpg", vi: "Mùa hè năm ngoái các bạn ấy đã ở ___.", fullVi: "Mùa hè năm ngoái các bạn ấy đã ở Luân Đôn." },
  { id: 4, stem: "She was in ___ last weekend.", answer: "d", image: "img/g4-u10-look-4.jpg", vi: "Cuối tuần trước bạn ấy đã ở ___.", fullVi: "Cuối tuần trước bạn ấy đã ở Sydney." },
].map(x => ({ ...x, options: LOOK_OPTIONS }));

// ============================================================
// Results saving — FIRST attempt only
// ============================================================
const UNIT_ID = "g4-unit10";
const UNIT_LABEL = "Unit 10: Our Summer Holidays";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return TF_ITEMS.length + ORDER_ITEMS.length +
    NUMBER_ITEMS.length + COMPLETE_ITEMS.length + MATCH_ITEMS.length + LOOK_ITEMS.length;
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
    { title: "Look, complete and read", instruction: "Nhìn hình rồi chọn đáp án đúng (a, b, c hoặc d) để hoàn thành câu.", run: seq(LOOK_ITEMS, "look") },
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
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 10. Giỏi lắm!", false, "complete_unit");
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
