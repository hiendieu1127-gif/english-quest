// ============================================================
// Teacher Dashboard — fully automatic, works for any number of grades.
//
// How a grade's Units show up here:
//   1) Its vocabulary-gN.js file declares  var VOCAB_UNITS_G<N> = [...]
//      (must be `var`, not `const` — that's what makes it a real
//      window property this file can auto-discover)
//   2) dashboard.html has a <script src="vocabulary-gN.js"> tag
// That's it — NO other edit needed in this file when a new
// grade/unit/section is added.
//
// "Vocabulary" column is guaranteed to show per catalog unit; any
// other section (grammar, exercises, ...) appears automatically the
// first time any student has a saved result for it.
//
// Grade 5's historic unitIds have no prefix (e.g. "unit1"). Every
// grade after that uses "g<N>-unit1" etc. Any unitId without a
// recognized "gN-" prefix is treated as Khối 5, for backward
// compatibility with already-saved Firestore data.
// ============================================================

const SECTION_LABELS = { vocabulary: "Vocabulary", grammar: "Grammar", exercises: "Exercises" };
const SECTION_ORDER = ["vocabulary", "grammar", "exercises"];

function gradeInfoFromUnitId(unitId) {
  const m = /^g(\d+)-/.exec(unitId);
  if (m) return { num: Number(m[1]), label: `Khối ${m[1]}` };
  return { num: 5, label: "Khối 5" };
}

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

  // ---------- discover every loaded VOCAB_UNITS_G<N> catalog ----------
  const catalogsByGrade = {}; // gradeNum -> [{id, label, number}]
  Object.keys(window).filter(k => /^VOCAB_UNITS_G\d+$/.test(k)).forEach(key => {
    const gradeNum = Number(key.match(/\d+/)[0]);
    catalogsByGrade[gradeNum] = window[key].map(u => ({ id: u.id, label: `Unit ${u.number}`, number: u.number }));
  });

  // ---------- build { gradeNum -> { label, units: Map(unitId -> {label, sections:Set}) } } ----------
  const grades = {};
  function ensureGrade(gradeNum, label) {
    if (!grades[gradeNum]) grades[gradeNum] = { label, units: new Map() };
    return grades[gradeNum];
  }
  function ensureUnit(g, unitId, label) {
    if (!g.units.has(unitId)) g.units.set(unitId, { label, sections: new Set() });
    return g.units.get(unitId);
  }

  // seed from catalogs (guarantees a "Vocabulary" column even with 0 results)
  Object.entries(catalogsByGrade).forEach(([gradeNum, units]) => {
    const g = ensureGrade(Number(gradeNum), Number(gradeNum) === 5 ? "Khối 5" : `Khối ${gradeNum}`);
    units.forEach(u => ensureUnit(g, u.id, u.label).sections.add("vocabulary"));
  });

  // add any section actually seen in results — covers exercises/grammar,
  // and any unit/grade with no catalog file loaded at all
  results.forEach(r => {
    const info = gradeInfoFromUnitId(r.unitId);
    const g = ensureGrade(info.num, info.label);
    const label = r.unitLabel ? r.unitLabel.split(":")[0].trim() : r.unitId;
    ensureUnit(g, r.unitId, label).sections.add(r.section);
  });

  const gradeNums = Object.keys(grades).map(Number).sort((a, b) => a - b);
  if (gradeNums.length === 0) {
    statusEl.textContent = "Chưa có Unit nào trong website.";
    return;
  }

  function sortSections(set) {
    return [...set].sort((a, b) => {
      const ia = SECTION_ORDER.indexOf(a), ib = SECTION_ORDER.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }

  // ---------- flatten into ordered column list ----------
  const columns = []; // {gradeLabel, unitId, unitLabel, section}
  gradeNums.forEach(gradeNum => {
    const g = grades[gradeNum];
    const unitEntries = [...g.units.entries()].sort((a, b) => {
      const na = parseInt((a[0].match(/\d+/) || ["99"])[0], 10);
      const nb = parseInt((b[0].match(/\d+/) || ["99"])[0], 10);
      return na - nb;
    });
    unitEntries.forEach(([unitId, info]) => {
      sortSections(info.sections).forEach(section => {
        columns.push({ gradeLabel: g.label, unitId, unitLabel: info.label, section });
      });
    });
  });

  // ---------- student list ----------
  const students = {};
  results.forEach(r => {
    if (!students[r.studentKey]) students[r.studentKey] = { name: r.student, rows: {} };
    students[r.studentKey].rows[`${r.unitId}__${r.section}`] = r;
  });
  const studentList = Object.values(students).sort((a, b) => a.name.localeCompare(b.name, "vi"));
  if (studentList.length === 0) {
    statusEl.style.display = "none";
    document.getElementById("td-empty").style.display = "block";
    return;
  }

  // ---------- header (2 rows: grade group row + unit/section row) ----------
  const head = document.getElementById("td-head");
  let gradeRowHtml = `<th class="td-name-h" rowspan="2">Học sinh</th>`;
  let unitRowHtml = "";
  let i = 0;
  while (i < columns.length) {
    const gradeLabel = columns[i].gradeLabel;
    let span = 0;
    while (i + span < columns.length && columns[i + span].gradeLabel === gradeLabel) span++;
    gradeRowHtml += `<th colspan="${span}" class="td-grade-h">${gradeLabel}</th>`;
    for (let j = 0; j < span; j++) {
      const c = columns[i + j];
      unitRowHtml += `<th>${c.unitLabel}<br>${SECTION_LABELS[c.section] || c.section}</th>`;
    }
    i += span;
  }
  head.innerHTML = `<tr>${gradeRowHtml}</tr><tr>${unitRowHtml}</tr>`;

  // ---------- body ----------
  const body = document.getElementById("td-body");
  body.innerHTML = studentList.map(s => {
    let rowHtml = `<td class="td-name">${escapeHtml(s.name)}</td>`;
    columns.forEach(c => { rowHtml += cellHtml(s, c.unitId, c.section); });
    return `<tr>${rowHtml}</tr>`;
  }).join("");

  statusEl.style.display = "none";
  document.getElementById("td-table").style.display = "table";

  body.querySelectorAll(".td-cell[data-key]").forEach(cell => {
    cell.addEventListener("click", () => openDetail(cell.dataset.key, students));
  });

  function cellHtml(student, unitId, section) {
    const key = `${unitId}__${section}`;
    const r = student.rows[key];
    if (!r) return `<td><span class="td-cell todo">Chưa làm</span></td>`;
    if (r.status === "in_progress") return `<td><span class="td-cell progress">Đang làm</span></td>`;
    return `<td><span class="td-cell done" data-key="${student.name}||${key}">${r.percent}%<br><span style="font-weight:600;font-size:.78em;">${r.correct}/${r.total}</span></span></td>`;
  }
});

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function openDetail(compositeKey, students) {
  const [studentName, key] = compositeKey.split("||");
  const student = Object.values(students).find(s => s.name === studentName);
  const r = student && student.rows[key];
  if (!r) return;

  const backdrop = document.getElementById("td-modal-backdrop");
  const content = document.getElementById("td-modal-content");
  const sectionLabel = SECTION_LABELS[r.section] || r.section;

  let answersHtml = "";
  if (Array.isArray(r.answers) && r.answers.length) {
    answersHtml = r.answers.map(a => `
      <div class="td-qrow">
        <div class="q">${escapeHtml(a.question || "")}</div>
        <div class="${a.correct ? "a-right" : "a-wrong"}">
          ${a.correct ? "✓" : "✗"} Học sinh trả lời: ${escapeHtml(String(a.studentAnswer ?? ""))}
          ${!a.correct ? ` — Đáp án đúng: ${escapeHtml(String(a.correctAnswer ?? ""))}` : ""}
        </div>
      </div>
    `).join("");
  } else {
    answersHtml = `<p style="color:var(--ink-soft)">Không có chi tiết từng câu cho lần làm bài này.</p>`;
  }

  content.innerHTML = `
    <h3>${escapeHtml(studentName)} — ${escapeHtml(r.unitLabel || r.unitId)}</h3>
    <div class="td-modal-meta">${sectionLabel} · ${r.correct}/${r.total} câu đúng · ${r.percent}%</div>
    ${answersHtml}
  `;
  backdrop.classList.add("open");
}

document.getElementById("td-modal-close")?.addEventListener("click", () => {
  document.getElementById("td-modal-backdrop").classList.remove("open");
});
document.getElementById("td-modal-backdrop")?.addEventListener("click", (e) => {
  if (e.target.id === "td-modal-backdrop") e.target.classList.remove("open");
});
