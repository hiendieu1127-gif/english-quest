// ============================================================
// Grade 4 — Unit 4 (My Birthday Party) — Exercises
// Source: Global Success 4 workbook, Unit 4 — "2. Read and complete" (Katie & Akiko).
//   1 Reading  2 Vocabulary  3 Fill in the Blank (the table)  4 Sentence Ordering  5 Quiz (coming next)
// Vietnamese translations: written by Claude — please review.
// Rules (same as every Exercises page): only the FIRST attempt is scored, wrong answers
// come back in "Vòng 2, 3...", no timer — the student taps "Tiếp theo →".
// ============================================================

// ============================================================
// 1) READING (practice only) — workbook "Read and complete" (Katie & Akiko)
// ============================================================
const READING_HTML =
  "<b>Katie:</b> Hi. I'm Katie. I'm from <mark>Britain</mark>. My <mark>hobby</mark> is <mark>cooking</mark>. My birthday is in February. " +
  "I want some <mark>chicken</mark> and <mark>milk</mark> at my <mark>birthday party</mark>.<br><br>" +
  "<b>Akiko:</b> Hi. I'm Akiko. I'm from <mark>Japan</mark>. I like <mark>drawing</mark>. My birthday is in May. " +
  "I want some <mark>chips</mark> and <mark>apple juice</mark> at my birthday party.";

const READING_VI = "";

// ============================================================
// 2) VOCABULARY (practice only) — flip cards with audio (VN written by Claude — please review)
// ============================================================
const VOCAB_ITEMS = [
  { en: "Britain", vi: "nước Anh" },
  { en: "hobby", vi: "sở thích" },
  { en: "cooking", vi: "nấu ăn" },
  { en: "chicken", vi: "thịt gà" },
  { en: "milk", vi: "sữa" },
  { en: "birthday party", vi: "bữa tiệc sinh nhật" },
  { en: "Japan", vi: "Nhật Bản" },
  { en: "drawing", vi: "vẽ" },
  { en: "chips", vi: "khoai tây chiên" },
  { en: "apple juice", vi: "nước ép táo" },
];

// ============================================================
// 3) FILL IN THE BLANK (scored: 5) — the workbook table (1)–(5), one blank at a time.
//    The table is shown above every question; the blank being asked is marked "?".
// ============================================================
const TABLE_ROWS = [
  { name: "Katie", country: "Britain", hobby: 1, birthday: 2, food: "chicken", drink: 3 },
  { name: "Akiko", country: "Japan", hobby: "drawing", birthday: 4, food: 5, drink: "apple juice" },
];
const TABLE_COLS = ["country", "hobby", "birthday", "food", "drink"];
const TABLE_HEAD = { country: "Country", hobby: "Hobby", birthday: "Birthday", food: "Food", drink: "Drink" };

const FITB_ITEMS = [
  { id: 1, stem: "Katie's hobby is ___.", options: [{ key: "a", text: "cooking" }, { key: "b", text: "drawing" }],
    answer: "a", vi: "Sở thích của Katie là ___.", optVi: ["a. nấu ăn", "b. vẽ"] },
  { id: 2, stem: "Katie's birthday is in ___.", options: [{ key: "a", text: "May" }, { key: "b", text: "February" }],
    answer: "b", vi: "Sinh nhật của Katie vào ___.", optVi: ["a. tháng Năm", "b. tháng Hai"] },
  { id: 3, stem: "Katie wants some chicken and ___.", options: [{ key: "a", text: "milk" }, { key: "b", text: "apple juice" }],
    answer: "a", vi: "Katie muốn một ít thịt gà và ___.", optVi: ["a. sữa", "b. nước ép táo"] },
  { id: 4, stem: "Akiko's birthday is in ___.", options: [{ key: "a", text: "May" }, { key: "b", text: "February" }],
    answer: "a", vi: "Sinh nhật của Akiko vào ___.", optVi: ["a. tháng Năm", "b. tháng Hai"] },
  { id: 5, stem: "Akiko wants some ___ and apple juice.", options: [{ key: "a", text: "chicken" }, { key: "b", text: "chips" }],
    answer: "b", vi: "Akiko muốn một ít ___ và nước ép táo.", optVi: ["a. thịt gà", "b. khoai tây chiên"] },
];
const TABLE_FILLED = {}; // blank id -> answer text, filled in once the student has answered it

function tableHtml(currentId) {
  const cell = (v) => {
    if (typeof v !== "number") return `<td class="tb-given" style="word-break:break-word;">${escapeHtml(v)}</td>`;
    const item = FITB_ITEMS.find(x => x.id === v);
    if (v === currentId) return `<td><div class="tb-blank selected" style="font-size:inherit;min-height:34px;padding:0 2px;display:flex;align-items:center;justify-content:center;">(${v}) ?</div></td>`;
    if (TABLE_FILLED[v]) return `<td><div class="tb-blank ok" style="font-size:inherit;min-height:34px;padding:0 2px;display:flex;align-items:center;justify-content:center;">${escapeHtml(TABLE_FILLED[v])}</div></td>`;
    return `<td><div class="tb-blank" style="font-size:inherit;min-height:34px;padding:0 2px;display:flex;align-items:center;justify-content:center;cursor:default;">(${v})</div></td>`;
  };
  return `<div style="overflow-x:auto;margin-bottom:14px;"><table class="tb-table" style="font-size:clamp(.68rem,2.7vw,.95rem);table-layout:fixed;">` +
    `<tr><th style="text-align:left;font-size:inherit;">Name</th>${TABLE_COLS.map(c => `<th style="font-size:inherit;">${TABLE_HEAD[c]}</th>`).join("")}</tr>` +
    TABLE_ROWS.map(r => `<tr><td class="tb-name tb-given">${escapeHtml(r.name)}</td>${TABLE_COLS.map(c => cell(r[c])).join("")}</tr>`).join("") +
    `</table></div>`;
}

function renderTableItem(host, item, ctx) {
  const wrapped = Object.assign({}, ctx, {
    top: ctx.top + tableHtml(item.id),
    done(correct, rec, anchor) {
      TABLE_FILLED[item.id] = optionText(item, item.answer);
      ctx.done(correct, rec, anchor);
    },
  });
  renderChoiceItem(host, item, wrapped);
}

// ============================================================
// 4) SENTENCE ORDERING (scored: 5) — sentences from the reading
// ============================================================
const ORDER_ITEMS = [
  { id: 1, chunks: [ { en: "My hobby", vi: "sở thích của mình" }, { en: "is", vi: "là" }, { en: "cooking", vi: "nấu ăn" } ],
    end: ".", answer: "My hobby is cooking.", answerVi: "Sở thích của mình là nấu ăn." },
  { id: 2, chunks: [ { en: "My birthday", vi: "sinh nhật của mình" }, { en: "is", vi: "là" }, { en: "in", vi: "vào" }, { en: "February", vi: "tháng Hai" } ],
    end: ".", answer: "My birthday is in February.", answerVi: "Sinh nhật của mình vào tháng Hai." },
  { id: 3, chunks: [ { en: "I", vi: "mình" }, { en: "want", vi: "muốn" }, { en: "some chicken and milk", vi: "một ít thịt gà và sữa" }, { en: "at my birthday party", vi: "ở bữa tiệc sinh nhật của mình" } ],
    end: ".", answer: "I want some chicken and milk at my birthday party.", answerVi: "Mình muốn một ít thịt gà và sữa ở bữa tiệc sinh nhật của mình." },
  { id: 4, chunks: [ { en: "I'm", vi: "mình" }, { en: "from", vi: "đến từ" }, { en: "Japan", vi: "Nhật Bản" } ],
    end: ".", answer: "I'm from Japan.", answerVi: "Mình đến từ Nhật Bản." },
  { id: 5, chunks: [ { en: "I", vi: "mình" }, { en: "want", vi: "muốn" }, { en: "some chips", vi: "một ít khoai tây chiên" }, { en: "and apple juice", vi: "và nước ép táo" } ],
    end: ".", answer: "I want some chips and apple juice.", answerVi: "Mình muốn một ít khoai tây chiên và nước ép táo." },
];

// ============================================================
// 5) QUIZ — Sách bài tập Unit 4 (5 bài)
//    Audio: teacher Hien makes it with Google AI Studio and uploads
//    g4-u4-circle-1.wav, g4-u4-circle-2.wav, g4-u4-tick-1.wav … g4-u4-tick-4.wav.
//    Until a file is uploaded, the page reads the same script aloud with the browser voice.
//    Pictures: calendars drawn in code + the Unit 4 vocabulary photos (not cut from the book).
// ============================================================

// 5a) Listen and circle (scored: 2) — Track 7
const CIRCLE_ITEMS = [
  { id: 1, stem: "My birthday is in ___.", options: [{ key: "a", text: "March" }, { key: "b", text: "April" }, { key: "c", text: "January" }],
    answer: "c", vi: "Sinh nhật của mình vào ___.", optVi: ["a. tháng Ba", "b. tháng Tư", "c. tháng Một"],
    ttsScript: "When's your birthday? My birthday is in January." },
  { id: 2, stem: "I want some ___.", options: [{ key: "a", text: "juice" }, { key: "b", text: "water" }, { key: "c", text: "jam" }],
    answer: "b", vi: "Mình muốn một ít ___.", optVi: ["a. nước trái cây", "b. nước", "c. mứt"],
    ttsScript: "What do you want to drink? I want some water." },
].map(x => ({ ...x, audio: `g4-u4-circle-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn đáp án đúng." }));

// 5b) Listen and tick or cross (scored: 4) — Track 8: is the picture what you hear?
const TICK_OPTIONS = [{ key: "✓", text: "Đúng với hình (tick)" }, { key: "✗", text: "Không đúng với hình (cross)" }];
// A small month grid (1 … last day) shown inside the calendar picture
const monthGrid = (days) => `<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px 6px;font-size:13px;font-weight:700;color:#555;padding:0 10px;">` +
  Array.from({ length: days }, (_, k) => `<span>${k + 1}</span>`).join("") + `</div>`;
const TICK_ITEMS = [
  { id: 1, cal: "February", date: monthGrid(28), answer: "✗", ttsScript: "When's your birthday? It's in January." },
  { id: 2, cal: "April", date: monthGrid(30), answer: "✓", ttsScript: "When's your birthday? It's in April." },
  { id: 3, image: "img/vocab-g4-u4-jam.jpg", answer: "✗", ttsScript: "What do you want to eat? I want some grapes." },
  { id: 4, image: "img/vocab-g4-u4-water.jpg", answer: "✓", ttsScript: "What do you want to drink? I want some water. Here you are. Thank you." },
].map(x => ({ ...x, stem: "Nghe rồi chọn: hình này đúng (✓) hay sai (✗)?", options: TICK_OPTIONS, noTranslate: true,
              sayAfter: x.ttsScript, audio: `g4-u4-tick-${x.id}.wav`, audioNote: "Bấm ▶ để nghe, rồi chọn ✓ hoặc ✗." }));

// 5c) Look, complete and read (scored: 4) — nhìn hình, TỰ GÕ
const LOOK_ITEMS = [
  { id: 1, before: "My birthday is in", after: ".", answer: ["march"], full: "My birthday is in March.", cal: "March", date: 20, vi: "Sinh nhật của mình vào tháng Ba." },
  { id: 2, before: "My birthday is in", after: ".", answer: ["april"], full: "My birthday is in April.", cal: "April", date: 5, vi: "Sinh nhật của mình vào tháng Tư." },
  { id: 3, before: "I want some", after: ".", answer: ["chips"], full: "I want some chips.", image: "img/vocab-g4-u4-chips.jpg", vi: "Mình muốn một ít khoai tây chiên." },
  { id: 4, before: "I want some", after: ".", answer: ["lemonade"], full: "I want some lemonade.", image: "img/vocab-g4-u4-lemonade.jpg", vi: "Mình muốn một ít nước chanh." },
];

// 5d) Read and complete (scored: 4) — cùng một hộp từ a–d cho cả 4 câu
const RC_OPTIONS = [{ key: "a", text: "your birthday" }, { key: "b", text: "chips" }, { key: "c", text: "May" }, { key: "d", text: "to drink" }];
const RC_ITEMS = [
  { id: 1, stem: "I want some ___.", answer: "b", vi: "Mình muốn một ít khoai tây chiên." },
  { id: 2, stem: "What do you want ___?", answer: "d", vi: "Bạn muốn uống gì?" },
  { id: 3, stem: "When's ___?", answer: "a", vi: "Sinh nhật của bạn là khi nào?" },
  { id: 4, stem: "My birthday is in ___.", answer: "c", vi: "Sinh nhật của mình vào tháng Năm." },
].map(x => ({ ...x, options: RC_OPTIONS }));

// 5e) Read and match (scored: 4) — đọc câu, chọn câu đáp a–d
const RM_OPTIONS = [
  { key: "a", text: "I want some grapes." },
  { key: "b", text: "I want some water." },
  { key: "c", text: "It's in February." },
  { key: "d", text: "Thank you." },
];
const RM_OPT_VI = ["a. Mình muốn một ít nho.", "b. Mình muốn một ít nước.", "c. Vào tháng Hai.", "d. Cảm ơn bạn."];
const RM_ITEMS = [
  { id: 1, stem: "When's your birthday?", answer: "c", vi: "Sinh nhật của bạn là khi nào?" },
  { id: 2, stem: "Happy birthday to you!", answer: "d", vi: "Chúc mừng sinh nhật bạn!" },
  { id: 3, stem: "What do you want to eat?", answer: "a", vi: "Bạn muốn ăn gì?" },
  { id: 4, stem: "What do you want to drink?", answer: "b", vi: "Bạn muốn uống gì?" },
].map(x => ({ ...x, options: RM_OPTIONS, optVi: RM_OPT_VI, speakBefore: x.stem,
              answerSentence: RM_OPTIONS.find(o => o.key === x.answer).text }));
// ============================================================
// Results saving — FIRST attempt only
// ============================================================
const UNIT_ID = "g4-unit4";
const UNIT_LABEL = "Unit 4: My Birthday Party";
let eqStudent = "";
let eqAnswers = {};
let eqRetries = []; // answers given in retry rounds (Vòng 2, 3…) — scored separately from the first attempt
let saveQueue = Promise.resolve();

function eqTotalItems() {
  return FITB_ITEMS.length + ORDER_ITEMS.length + CIRCLE_ITEMS.length + TICK_ITEMS.length + LOOK_ITEMS.length + RC_ITEMS.length + RM_ITEMS.length;
}

function eqRecordAndSave(key, question, studentAnswer, correctAnswer, correct) {
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
    renderItem: renderTableItem,
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
    { title: "Listen and circle", instruction: "Nghe rồi chọn đáp án đúng (a, b hoặc c).", run: seq(CIRCLE_ITEMS, "circle") },
    { title: "Listen and tick or cross", instruction: "Nghe rồi chọn ✓ nếu đúng với hình, ✗ nếu không đúng.", run: seq(TICK_ITEMS, "tick") },
    { title: "Look, complete and read", instruction: "Nhìn hình rồi tự gõ chữ còn thiếu.", run: seq(LOOK_ITEMS, "look", renderWriteItem) },
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
        showSectionComplete(host, "Em đã hoàn thành hết phần Exercises của Unit 4. Giỏi lắm!", false, "complete_unit");
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
