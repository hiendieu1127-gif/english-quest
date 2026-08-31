// ============================================================
// Teacher Dashboard
// Columns are derived automatically from two sources — never hard-coded:
//   1) VOCAB_UNITS (loaded from vocabulary.js, included on this page)
//   2) any unitId that shows up in saved results but isn't in VOCAB_UNITS
//      yet (covers an Exercises-only unit, just in case)
// Adding Unit 2-10 to vocabulary.js is all that's needed for a new
// column to appear here — this file does not change.
// ============================================================

function whenResultsReady(cb) {
  if (window.EQResults) { cb(); return; }
  window.addEventListener("eq-results-ready", cb, { once: true });
}

function statusFilename() {} // placeholder kept out of global namespace collisions

whenResultsReady(async () => {
  const statusEl = document.getElementById("td-status");
  let results = [];
  try {
    results = await window.EQResults.getAllResults();
  } catch (e) {
    statusEl.textContent = "Không tải được dữ liệu — kiểm tra lại Firestore Rules hoặc kết nối mạng.";
    return;
  }

  // ---------- build the unit catalog (auto) ----------
  const catalog = []; // [{ id, label, number }]
  const seen = new Set();
  if (typeof VOCAB_UNITS !== "undefined") {
    VOCAB_UNITS.forEach(u => {
      catalog.push({ id: u.id, label: `Unit ${u.number}`, number: u.number });
      seen.add(u.id);
    });
  }
  results.forEach(r => {
    if (!seen.has(r.unitId)) {
      seen.add(r.unitId);
      const num = parseInt((r.unitId.match(/\d+/) || ["99"])[0], 10);
      catalog.push({ id: r.unitId, label: r.unitLabel ? r.unitLabel.split(":")[0] : r.unitId, number: num });
    }
  });
  catalog.sort((a, b) => a.number - b.number);

  if (catalog.length === 0) {
    statusEl.textContent = "Chưa có Unit nào trong website.";
    return;
  }

  // ---------- build student list ----------
  const students = {}; // studentKey -> { name, rows: { "unitId__section": result } }
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

  // ---------- header ----------
  const head = document.getElementById("td-head");
  let headHtml = `<th class="td-name-h">Học sinh</th>`;
  catalog.forEach(u => {
    headHtml += `<th>${u.label}<br>Vocabulary</th><th>${u.label}<br>Exercises</th>`;
  });
  head.innerHTML = headHtml;

  // ---------- body ----------
  const body = document.getElementById("td-body");
  body.innerHTML = studentList.map(s => {
    let rowHtml = `<td class="td-name">${escapeHtml(s.name)}</td>`;
    catalog.forEach(u => {
      rowHtml += cellHtml(s, u.id, "vocabulary");
      rowHtml += cellHtml(s, u.id, "exercises");
    });
    return `<tr>${rowHtml}</tr>`;
  }).join("");

  statusEl.style.display = "none";
  document.getElementById("td-table").style.display = "table";

  // wire up drill-down clicks
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
  const sectionLabel = r.section === "vocabulary" ? "Vocabulary" : "Exercises";

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
