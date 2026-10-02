// ============================================================
// Grade 4 — Unit 3 (My Week) — Exercises
// Source: teacher Hien's "My Week" passage (Mai & Linh) + Global Success 4 workbook (Quiz, coming next).
//   1 Reading  2 Vocabulary  3 Fill in the Blank  4 Sentence Ordering  5 Quiz
// Vietnamese translations + answer keys: written by Claude from the passage — please review.
// Rules (same as every Exercises page): only the FIRST attempt is scored, wrong answers
// come back in "Vòng 2, 3...", no timer — the student taps "Tiếp theo →".
// ============================================================

// ============================================================
// 1) READING (practice only) — teacher Hien's "My Week" passage (Mai & Linh)
// ============================================================
const READING_HTML =
  "Hello. My name is Mai. Today is Tuesday, and it is a <mark>school day</mark>. My friend Linh and I go to school <mark>from Monday to Friday</mark>. " +
  "We usually have <mark>a lot of things to do</mark> at school.<br><br>" +
  "At the weekend, we don't go to school. We stay at home and <mark>help our parents</mark>. On Saturday, we do our homework <mark>in the morning</mark>. " +
  "<mark>In the afternoon</mark>, we <mark>sometimes</mark> read books or <mark>play games</mark>.<br><br>" +
  "On Sunday, we help our parents with the <mark>housework</mark>. Then, we listen to music and <mark>relax</mark>. " +
  "<mark>In the evening</mark>, we <mark>prepare our schoolbags</mark> for Monday.<br><br>" +
  "I like Sundays <mark>because</mark> I can <mark>spend time with my family</mark>. Linh likes Saturdays because she has more time to play.";

const READING_VI = "";

// ============================================================
// 2) VOCABULARY (practice only) — flip cards with audio (VN written by Claude — please review)
// ============================================================
const VOCAB_ITEMS = [
  { en: "school day", vi: "ngày đi học" },
  { en: "from Monday to Friday", vi: "từ thứ Hai đến thứ Sáu" },
  { en: "a lot of things to do", vi: "rất nhiều việc để làm" },
  { en: "help our parents", vi: "giúp đỡ bố mẹ" },
  { en: "in the morning", vi: "vào buổi sáng" },
  { en: "in the afternoon", vi: "vào buổi chiều" },
  { en: "in the evening", vi: "vào buổi tối" },
  { en: "sometimes", vi: "thỉnh thoảng" },
  { en: "play games", vi: "chơi trò chơi" },
  { en: "housework", vi: "việc nhà" },
  { en: "relax", vi: "thư giãn" },
  { en: "prepare our schoolbags", vi: "chuẩn bị cặp sách" },
  { en: "because", vi: "bởi vì" },
  { en: "spend time with my family", vi: "dành thời gian với gia đình" },
];

// ============================================================
// 3) FILL IN THE BLANK (scored: 6) — a/b about Mai & Linh; full sentence is read AFTER answering
// ============================================================
const FITB_ITEMS = [
  { id: 1, stem: "Today is ___.", options: [{ key: "a", text: "Monday" }, { key: "b", text: "Tuesday" }],
    answer: "b", vi: "Hôm nay là ___.", optVi: ["a. thứ Hai", "b. thứ Ba"] },
  { id: 2, stem: "Mai and Linh go to school from Monday to ___.", options: [{ key: "a", text: "Friday" }, { key: "b", text: "Saturday" }],
    answer: "a", vi: "Mai và Linh đi học từ thứ Hai đến ___.", optVi: ["a. thứ Sáu", "b. thứ Bảy"] },
  { id: 3, stem: "At the weekend, they ___.", options: [{ key: "a", text: "go to school" }, { key: "b", text: "stay at home" }],
    answer: "b", vi: "Vào cuối tuần, các bạn ấy ___.", optVi: ["a. đi học", "b. ở nhà"] },
  { id: 4, stem: "On Saturday morning, they do their ___.", options: [{ key: "a", text: "homework" }, { key: "b", text: "housework" }],
    answer: "a", vi: "Vào sáng thứ Bảy, các bạn ấy làm ___.", optVi: ["a. bài tập về nhà", "b. việc nhà"] },
  { id: 5, stem: "On Sunday evening, they prepare their ___.", options: [{ key: "a", text: "schoolbags" }, { key: "b", text: "lunch" }],
    answer: "a", vi: "Vào tối Chủ nhật, các bạn ấy chuẩn bị ___.", optVi: ["a. cặp sách", "b. bữa trưa"] },
  { id: 6, stem: "Linh likes ___.", options: [{ key: "a", text: "Saturdays" }, { key: "b", text: "Sundays" }],
    answer: "a", vi: "Linh thích ___.", optVi: ["a. các ngày thứ Bảy", "b. các ngày Chủ nhật"] },
];

// ============================================================
// 4) SENTENCE ORDERING (scored: 4) — sentences from the passage
// ============================================================
const ORDER_ITEMS = [
  { id: 1, chunks: [ { en: "I", vi: "mình" }, { en: "go to school", vi: "đi học" }, { en: "from Monday", vi: "từ thứ Hai" }, { en: "to Friday", vi: "đến thứ Sáu" } ],
    end: ".", answer: "I go to school from Monday to Friday.", answerVi: "Mình đi học từ thứ Hai đến thứ Sáu." },
  { id: 2, chunks: [ { en: "At the weekend,", vi: "vào cuối tuần," }, { en: "we", vi: "chúng mình" }, { en: "stay", vi: "ở" }, { en: "at home", vi: "nhà" } ],
    end: ".", answer: "At the weekend, we stay at home.", answerVi: "Vào cuối tuần, chúng mình ở nhà." },
  { id: 3, chunks: [ { en: "On Sunday,", vi: "vào Chủ nhật," }, { en: "we", vi: "chúng mình" }, { en: "help our parents", vi: "giúp đỡ bố mẹ" }, { en: "with the housework", vi: "làm việc nhà" } ],
    end: ".", answer: "On Sunday, we help our parents with the housework.", answerVi: "Vào Chủ nhật, chúng mình giúp bố mẹ làm việc nhà." },
  { id: 4, chunks: [ { en: "I", vi: "mình" }, { en: "like Sundays", vi: "thích Chủ nhật" }, { en: "because", vi: "bởi vì" }, { en: "I can", vi: "mình có thể" }, { en: "spend time with my family", vi: "dành thời gian với gia đình" } ],
    end: ".", answer: "I like Sundays because I can spend time with my family.", answerVi: "Mình thích Chủ nhật vì mình có thể dành thời gian với gia đình." },
];

// ============================================================
// 5) QUIZ — Sách bài tập Unit 3 (5 bài)
//    Audio: made by teacher Hien with Google AI Studio (g4-u3-listen-N.wav, g4-u3-circle-N.wav).
//    Pictures: teacher's own photos (img/g4-u3-*.jpg) — NOT cut from the book.
//    A missing picture is simply hidden, so the quiz still works before the files are uploaded.
// ============================================================

// 5a) Listen and complete (scored: 2) — nghe rồi TỰ GÕ cụm từ còn thiếu
const LISTEN_ITEMS = [
  { id: 1, before: "We", after: "on Saturdays.", answer: ["listen to music"], full: "We listen to music on Saturdays.", vi: "Chúng mình nghe nhạc vào các ngày thứ Bảy." },
  { id: 2, before: "I", after: "on Sundays.", answer: ["do housework", "do the housework"], full: "I do housework on Sundays.", vi: "Mình làm việc nhà vào các ngày Chủ nhật." },
].map(x => ({ ...x, audio: `g4-u3-listen-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi gõ phần còn thiếu." }));

// 5b) Listen and circle (scored: 2) — nghe rồi chọn hình a hoặc b
//     Pictures: calendar pages drawn in code (1) + photos reused from 5c (2: listen to music / boy with the TV remote)
const CIRCLE_PICS = {
  1: [{ cal: "Thursday", date: 8 }, { cal: "Friday", date: 9 }],
  2: ["img/g4-u3-look-4.jpg", "img/g4-u3-look-3.jpg"],
};
const CIRCLE_ITEMS = [
  { id: 1, options: [{ key: "a", text: "Thursday" }, { key: "b", text: "Friday" }], answer: "b",
    sayAfter: "What day is it today? It's Friday." },
  { id: 2, options: [{ key: "a", text: "listen to music" }, { key: "b", text: "watch TV" }], answer: "a",
    sayAfter: "What do you do on Saturdays? I listen to music." },
].map(x => ({ ...x, stem: "Listen and choose a or b.", noTranslate: true,
              pics: CIRCLE_PICS[x.id],
              audio: `g4-u3-circle-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn a hoặc b." }));

// 5c) Look, complete and read (scored: 4) — nhìn hình, TỰ GÕ (không hiện đáp án sẵn)
const LOOK_ITEMS = [
  { id: 1, before: "It's", after: ".", answer: ["monday"], full: "It's Monday.", cal: "Monday", date: 16, vi: "Hôm nay là thứ Hai." },
  { id: 2, before: "I", after: "at school on Thursdays.", answer: ["study"], full: "I study at school on Thursdays.", tag: "Thursdays", vi: "Mình học ở trường vào các ngày thứ Năm." },
  { id: 3, before: "I stay at home on", after: ".", answer: ["saturdays", "saturday"], full: "I stay at home on Saturdays.", tag: "Saturdays", vi: "Mình ở nhà vào các ngày thứ Bảy." },
  { id: 4, before: "I", after: "on Sundays.", answer: ["listen to music"], full: "I listen to music on Sundays.", tag: "Sundays", vi: "Mình nghe nhạc vào các ngày Chủ nhật." },
].map(x => x.cal ? x : ({ ...x, image: `img/g4-u3-look-${x.id}.jpg` }));

// 5d) Read and complete (scored: 4) — cùng một hộp từ a–d cho cả 4 câu
const RC_OPTIONS = [{ key: "a", text: "housework" }, { key: "b", text: "on Saturdays" }, { key: "c", text: "What day" }, { key: "d", text: "Friday" }];
const RC_ITEMS = [
  { id: 1, stem: "___ is it today?", answer: "c", vi: "Hôm nay là thứ mấy?" },
  { id: 2, stem: "It's ___.", answer: "d", vi: "Hôm nay là thứ Sáu." },
  { id: 3, stem: "What do you do ___?", answer: "b", vi: "Bạn làm gì vào các ngày thứ Bảy?" },
  { id: 4, stem: "I do ___.", answer: "a", vi: "Mình làm việc nhà." },
].map(x => ({ ...x, options: RC_OPTIONS }));

// 5e) Read and match (scored: 4) — đọc câu hỏi, chọn câu trả lời a–d
const RM_OPTIONS = [
  { key: "a", text: "I stay at home." },
  { key: "b", text: "I go to school at seven o'clock." },
  { key: "c", text: "It's Tuesday." },
  { key: "d", text: "I study at school." },
];
const RM_OPT_VI = ["a. Mình ở nhà.", "b. Mình đi học lúc 7 giờ.", "c. Hôm nay là thứ Ba.", "d. Mình học ở trường."];
const RM_ITEMS = [
  { id: 1, stem: "What day is it today?", answer: "c", vi: "Hôm nay là thứ mấy?" },
  { id: 2, stem: "What do you do on Tuesdays?", answer: "d", vi: "Bạn làm gì vào các ngày thứ Ba?" },
  { id: 3, stem: "What time do you go to school?", answer: "b", vi: "Bạn đi học lúc mấy giờ?" },
  { id: 4, stem: "What do you do on Sundays?", answer: "a", vi: "Bạn làm gì vào các ngày Chủ nhật?" },
].map(x => ({ ...x, options: RM_OPTIONS, optVi: RM_OPT_VI, speakBefore: x.stem,
              answerSentence: RM_OPTIONS.find(o => o.key === x.answer).text }));
// ============================================================
// Results saving — FIRST attempt only
// ============================================================
const UNIT_ID = "g4-unit3";
const UNIT_LABEL = "Unit 3: My Week";
let eqStudent = "";
let eqAnswers = {};
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return FITB_ITEMS.length + ORDER_ITEMS.length + LISTEN_ITEMS.length + CIRCLE_ITEMS.length + LOOK_ITEMS.length + RC_ITEMS.length + RM_ITEMS.length;
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
  if (eqAnswers[key]) return;
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
        if (cfg.scored && round === 1) {
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
    { title: "Listen and complete", instruction: "Nghe rồi tự gõ phần còn thiếu.", run: seq(LISTEN_ITEMS, "listen", renderWriteItem) },
    { title: "Listen and circle", instruction: "Nghe rồi chọn hình a hoặc b.", run: seq(CIRCLE_ITEMS, "circle") },
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
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 3. Giỏi lắm!", false, "complete_unit");
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
