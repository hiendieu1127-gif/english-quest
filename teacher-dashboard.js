// ============================================================
// Teacher Dashboard — one grade at a time (tabs: Khối 4 / 5 / 7 ...).
//
// Fully automatic, works for any number of grades:
//   1) A grade's vocabulary-gN.js declares  var VOCAB_UNITS_G<N> = [...]
//      (must be `var` so it becomes a window property we can discover)
//   2) teacher-dashboard.html has a <script src="vocabulary-gN.js"> tag
// No edit needed here when a new grade/unit/section is added.
//
// "Vocabulary" column always shows per catalog unit; any other section
// (grammar, exercises, ...) appears the first time any student saves it.
// Grade 5's historic unitIds have no prefix ("unit1"); later grades use
// "g<N>-unit1". Unprefixed ids are treated as Khối 5.
// ============================================================

const SECTION_LABELS = { vocabulary: "Từ vựng", grammar: "Ngữ pháp", exercises: "Bài tập", review: "Ôn tập" };
const SECTION_LABELS_LONG = { vocabulary: "Vocabulary", grammar: "Grammar", exercises: "Exercises", review: "Review" };
const SECTION_ORDER = ["vocabulary", "grammar", "exercises", "review"];
const TAB_KEY = "eq_dashboard_grade";

function gradeNumFromUnitId(unitId) {
  const m = /^g(\d+)-/.exec(unitId || "");
  return m ? Number(m[1]) : 5;
}
function unitNumFromId(unitId) {
  const m = /unit(\d+)/.exec(unitId || "");
  return m ? Number(m[1]) : 99;
}
function band(p) { return p >= 80 ? "hi" : p >= 50 ? "mid" : "lo"; }

function whenResultsReady(cb) {
  if (window.EQResults) { cb(); return; }
  window.addEventListener("eq-results-ready", cb, { once: true });
}

whenResultsReady(async () => {
  const statusEl = document.getElementById("td-status");
  let results = [];
  try {
    results = await window.EQResults.getAllResults();
  } catch (e) {
    statusEl.textContent = "Không tải được dữ liệu — kiểm tra lại Firestore Rules hoặc kết nối mạng.";
    return;
  }

  // ---------- grades -> units -> sections ----------
  const grades = {}; // num -> Map(unitId -> {number, title, sections:Set})
  function ensureUnit(num, unitId, number, title) {
    grades[num] = grades[num] || new Map();
    if (!grades[num].has(unitId)) grades[num].set(unitId, { number, title: title || "", sections: new Set() });
    const u = grades[num].get(unitId);
    if (title && !u.title) u.title = title;
    return u;
  }
  Object.keys(window).filter(k => /^VOCAB_UNITS_G\d+$/.test(k)).forEach(key => {
    const num = Number(key.match(/\d+/)[0]);
    (window[key] || []).forEach(u => ensureUnit(num, u.id, u.number, u.title).sections.add("vocabulary"));
  });
  results.forEach(r => {
    const title = r.unitLabel && r.unitLabel.includes(":") ? r.unitLabel.split(":").slice(1).join(":").trim() : "";
    ensureUnit(gradeNumFromUnitId(r.unitId), r.unitId, unitNumFromId(r.unitId), title).sections.add(r.section);
  });

  const gradeNums = Object.keys(grades).map(Number).sort((a, b) => a - b);
  if (!gradeNums.length) { statusEl.textContent = "Chưa có Unit nào trong website."; return; }

  // ---------- students ----------
  const students = {};
  results.forEach(r => {
    const k = r.studentKey || r.student;
    if (!students[k]) students[k] = { name: r.student, rows: {} };
    students[k].rows[`${r.unitId}__${r.section}`] = r;
  });
  const studentList = Object.values(students).sort((a, b) => a.name.localeCompare(b.name, "vi"));
  if (!studentList.length) {
    statusEl.style.display = "none";
    document.getElementById("td-empty").style.display = "block";
    return;
  }

  function studentGradeRows(s, num) {
    return Object.values(s.rows).filter(r => gradeNumFromUnitId(r.unitId) === num);
  }
  function activeCount(num) {
    return studentList.filter(s => studentGradeRows(s, num).length).length;
  }

  // ---------- state ----------
  let current = null;
  try { current = Number(localStorage.getItem(TAB_KEY)); } catch (e) {}
  if (!gradeNums.includes(current)) {
    // default: the grade with the most active students
    current = gradeNums.slice().sort((a, b) => activeCount(b) - activeCount(a))[0];
  }
  const searchEl = document.getElementById("td-search");
  const onlyActiveEl = document.getElementById("td-only-active");
  // "Xoá học sinh" mode — remove test / junk names from the current grade only
  let deleteMode = false;
  const picked = new Set(); // student keys

  function renderTabs() {
    document.getElementById("td-tabs").innerHTML = gradeNums.map(n =>
      `<button type="button" class="td-tab ${n === current ? "active" : ""}" data-g="${n}">Khối ${n}<span class="n">${activeCount(n)} HS</span></button>`
    ).join("");
    document.querySelectorAll(".td-tab").forEach(b => b.addEventListener("click", () => {
      current = Number(b.dataset.g);
      try { localStorage.setItem(TAB_KEY, String(current)); } catch (e) {}
      render();
    }));
  }

  function columnsFor(num) {
    const cols = [];
    [...grades[num].entries()].sort((a, b) => a[1].number - b[1].number).forEach(([unitId, u], ui) => {
      const secs = [...u.sections].sort((a, b) => {
        const ia = SECTION_ORDER.indexOf(a), ib = SECTION_ORDER.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      });
      secs.forEach((section, si) => cols.push({ unitId, unit: u, section, first: si === 0, span: secs.length, alt: ui % 2 === 1 }));
    });
    return cols;
  }

  function render() {
    renderTabs();
    const cols = columnsFor(current);
    const q = (searchEl.value || "").trim().toLowerCase();
    const list = studentList.filter(s =>
      (!onlyActiveEl.checked || studentGradeRows(s, current).length) &&
      (!q || s.name.toLowerCase().includes(q)));

    // summary
    const done = studentList.flatMap(s => studentGradeRows(s, current)).filter(r => isFinished(r));
    const avg = done.length ? Math.round(done.reduce((t, r) => t + (r.percent || 0), 0) / done.length) : null;
    const needHelp = studentList.filter(s => {
      const d = studentGradeRows(s, current).filter(r => isFinished(r));
      return d.length && d.reduce((t, r) => t + (r.percent || 0), 0) / d.length < 50;
    }).length;
    document.getElementById("td-summary").innerHTML = `
      <div class="td-stat"><div class="v">${activeCount(current)}</div><div class="l">học sinh đã làm bài Khối ${current}</div></div>
      <div class="td-stat"><div class="v">${grades[current].size}</div><div class="l">Unit</div></div>
      <div class="td-stat"><div class="v">${avg === null ? "–" : avg + "%"}</div><div class="l">điểm trung bình</div></div>
      <div class="td-stat"><div class="v" style="color:${needHelp ? "#a8321e" : "inherit"}">${needHelp}</div><div class="l">học sinh dưới 50% (cần hỗ trợ)</div></div>`;

    // header: row 1 = units, row 2 = sections
    let r1 = `<th class="td-name-h" rowspan="2">Học sinh</th>`, r2 = "";
    cols.forEach(c => {
      const cls = `${c.alt ? "alt" : ""} ${c.first ? "ustart" : ""}`;
      if (c.first) r1 += `<th colspan="${c.span}" class="${cls}" title="${escapeHtml(c.unit.title)}">Unit ${c.unit.number}</th>`;
      r2 += `<th class="${cls}">${SECTION_LABELS[c.section] || c.section}</th>`;
    });
    r1 += `<th rowspan="2" class="ustart">Trung bình</th>`;
    document.getElementById("td-head").innerHTML = `<tr>${r1}</tr><tr>${r2}</tr>`;

    // body
    const body = document.getElementById("td-body");
    body.innerHTML = list.map(s => {
      const sk = Object.keys(students).find(k => students[k] === s);
      const pick = deleteMode ? `<input type="checkbox" class="td-pick" data-sk="${escapeHtml(sk)}" ${picked.has(sk) ? "checked" : ""}>` : "";
      let row = `<td class="td-name" title="${escapeHtml(s.name)}">${pick}${escapeHtml(s.name)}</td>`;
      cols.forEach(c => { row += cellHtml(s, c); });
      const d = studentGradeRows(s, current).filter(r => isFinished(r));
      const a = d.length ? Math.round(d.reduce((t, r) => t + (r.percent || 0), 0) / d.length) : null;
      row += `<td class="ustart td-avg">${a === null ? `<span class="td-cell todo">·</span>` : `<span class="td-cell ${band(a)}" style="cursor:default">${a}%</span>`}</td>`;
      return `<tr>${row}</tr>`;
    }).join("");
    document.getElementById("td-table").style.display = list.length ? "table" : "none";
    document.getElementById("td-none").style.display = list.length ? "none" : "block";

    body.querySelectorAll(".td-pick").forEach(cb => cb.addEventListener("change", () => {
      if (cb.checked) picked.add(cb.dataset.sk); else picked.delete(cb.dataset.sk);
      updateDeleteBar();
    }));
    updateDeleteBar();

    body.querySelectorAll(".td-cell[data-key]").forEach(cell => {
      cell.addEventListener("click", () => openDetail(cell.dataset.student, cell.dataset.key, students));
    });
  }

  // The first attempt (L1) counts only when every question has an answer (right or wrong).
  // Older results were saved as "completed" after the first answer, so check the count too.
  function isFinished(r) {
    if (r.status === "in_progress") return false;
    return !Array.isArray(r.answers) || r.answers.length >= r.total;
  }

  function cellHtml(s, c) {
    const cls = `${c.alt ? "alt" : ""} ${c.first ? "ustart" : ""}`;
    const key = `${c.unitId}__${c.section}`;
    const r = s.rows[key];
    if (!r) return `<td class="${cls}"><span class="td-cell todo">·</span></td>`;
    if (!isFinished(r)) {
      const n = Array.isArray(r.answers) ? r.answers.length : 0;
      return `<td class="${cls}"><span class="td-cell progress" title="Em chưa làm hết bài lần 1">đang làm${r.total ? ` ${n}/${r.total}` : ""}</span></td>`;
    }
    const sk = Object.keys(students).find(k => students[k] === s);
    const tip = `${r.correct} đúng · ${(Array.isArray(r.answers) ? r.answers.length : r.total) - r.correct} sai`;
    // Retry rounds (L2, L3…) are shown as a separate small score under the first-attempt (L1) score
    const fix = r.retryTotal ? `<span class="td-fix" title="Các vòng làm lại (L2, L3…): ${r.retryCorrect} đúng / ${r.retryTotal} lượt">Sửa ${r.retryCorrect}/${r.retryTotal}</span>` : "";
    return `<td class="${cls}"><span class="td-cell ${band(r.percent || 0)}" data-student="${escapeHtml(sk)}" data-key="${escapeHtml(key)}" title="${tip}">${r.percent}%</span>${fix}</td>`;
  }

  function updateDeleteBar() {
    document.getElementById("td-del-toggle").classList.toggle("on", deleteMode);
    document.getElementById("td-del-bar").classList.toggle("open", deleteMode);
    document.getElementById("td-del-count").textContent = picked.size
      ? `Đã chọn ${picked.size} học sinh — chỉ xoá bài của Khối ${current}.`
      : "Tích ô cạnh tên các em cần xoá.";
    document.getElementById("td-del-go").disabled = !picked.size;
  }
  document.getElementById("td-del-toggle").addEventListener("click", () => {
    deleteMode = !deleteMode; picked.clear(); render();
  });
  document.getElementById("td-del-cancel").addEventListener("click", () => {
    deleteMode = false; picked.clear(); render();
  });
  document.getElementById("td-del-go").addEventListener("click", async () => {
    const chosen = [...picked].map(k => students[k]).filter(Boolean);
    const names = chosen.map(s => "• " + s.name).join("\n");
    if (!window.confirm(`Xoá vĩnh viễn toàn bộ bài làm Khối ${current} của:\n\n${names}\n\nKhông khôi phục lại được. Tiếp tục?`)) return;
    const btn = document.getElementById("td-del-go");
    btn.disabled = true; btn.textContent = "Đang xoá...";
    try {
      for (const s of chosen) {
        for (const r of studentGradeRows(s, current)) {
          await window.EQResults.deleteResult(r);
          delete s.rows[`${r.unitId}__${r.section}`];
        }
      }
      // a student with no results left in any grade disappears from the table
      chosen.forEach(s => {
        if (!Object.keys(s.rows).length) {
          const k = Object.keys(students).find(x => students[x] === s);
          delete students[k];
          studentList.splice(studentList.indexOf(s), 1);
        }
      });
      deleteMode = false; picked.clear();
    } catch (e) {
      window.alert("Không xoá được: " + (e && e.code === "permission-denied"
        ? "Firestore Rules chưa cho phép xoá. Vào Firebase Console → Firestore Database → Rules và thêm quyền delete cho collection results."
        : (e && e.message) || e));
    }
    btn.textContent = "Xoá các tên đã chọn";
    render();
  });

  searchEl.addEventListener("input", render);
  onlyActiveEl.addEventListener("change", render);
  statusEl.style.display = "none";
  document.getElementById("td-app").style.display = "block";
  render();
});

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s == null ? "" : String(s);
  return d.innerHTML.replace(/"/g, "&quot;");
}

function openDetail(studentKey, key, students) {
  const student = students[studentKey];
  const r = student && student.rows[key];
  if (!r) return;
  const backdrop = document.getElementById("td-modal-backdrop");
  const content = document.getElementById("td-modal-content");
  const sectionLabel = SECTION_LABELS_LONG[r.section] || r.section;
  const answers = Array.isArray(r.answers) ? r.answers : [];
  const wrong = answers.filter(a => !a.correct).length;
  const retries = Array.isArray(r.retries) ? r.retries : [];

  function rows(onlyWrong, src) {
    const all = src || answers;
    const list = onlyWrong ? all.filter(a => !a.correct) : all;
    if (!list.length) return `<p style="color:var(--ink-soft)">${answers.length ? "Không có câu sai 🎉" : "Không có chi tiết từng câu cho lần làm bài này."}</p>`;
    return list.map(a => `
      <div class="td-qrow">
        <div class="q">${escapeHtml(a.question || "")}</div>
        <div class="${a.correct ? "a-right" : "a-wrong"}">
          ${a.correct ? "✓" : "✗"} Học sinh trả lời: ${escapeHtml(a.studentAnswer ?? "")}
          ${!a.correct ? ` — Đáp án đúng: ${escapeHtml(a.correctAnswer ?? "")}` : ""}
        </div>
      </div>`).join("");
  }

  content.innerHTML = `
    <h3>${escapeHtml(student.name)}</h3>
    <div class="td-modal-meta">Khối ${gradeNumFromUnitId(r.unitId)} · ${escapeHtml(r.unitLabel || r.unitId)} · ${sectionLabel}<br>
      Lần đầu (L1): <b>${r.percent}%</b> · <span class="a-right">${r.correct} câu đúng</span>${answers.length ? ` · <span class="a-wrong">${wrong} câu sai</span>` : ""}${answers.length && answers.length < r.total ? ` · <b>${r.total - answers.length} câu chưa làm</b> (em chưa làm hết bài)` : ""} <span style="opacity:.7">(tổng ${r.total} câu)</span></div>
    ${answers.length ? `<label class="td-toggle" style="margin-bottom:8px;"><input type="checkbox" id="td-only-wrong"> Chỉ xem câu sai</label>` : ""}
    <div id="td-qlist">${rows(false)}</div>
    ${retries.length ? `<h4 style="margin:18px 0 4px;">Sửa bài — các vòng làm lại (L2, L3…)</h4>
    <div class="td-modal-meta"><b>${r.retryCorrect}/${r.retryTotal}</b> lượt làm lại đúng (điểm này tính riêng, không cộng vào ${r.percent}% ở trên)</div>
    ${rows(false, retries)}` : ""}`;
  const ow = document.getElementById("td-only-wrong");
  ow && ow.addEventListener("change", () => { document.getElementById("td-qlist").innerHTML = rows(ow.checked); });
  backdrop.classList.add("open");
}

document.getElementById("td-modal-close")?.addEventListener("click", () => {
  document.getElementById("td-modal-backdrop").classList.remove("open");
});
document.getElementById("td-modal-backdrop")?.addEventListener("click", (e) => {
  if (e.target.id === "td-modal-backdrop") e.target.classList.remove("open");
});
