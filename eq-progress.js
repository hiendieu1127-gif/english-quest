// ============================================================
// Section progress, remembered on this device (localStorage).
// Saved each time a student FINISHES a section (Tap Pairs, Fill in the Blank, …):
// which sections are done + the answers recorded so far. If the page is
// closed (flat battery, reload…), the student resumes at the first
// unfinished section and the earlier answers are kept, so the Dashboard
// score is not overwritten by a half-empty attempt.
// A section left half-way is started again from its first question.
// ============================================================
(function () {
  function storageKey(id, student) {
    return `eq_progress__${id}__${(student || "").trim().toLowerCase()}`;
  }

  function load(id, student) {
    if (!student) return null;
    try {
      const data = JSON.parse(localStorage.getItem(storageKey(id, student)) || "null");
      return data && Array.isArray(data.done) ? data : null;
    } catch (e) { return null; }
  }

  function save(id, student, data) {
    if (!student) return;
    try { localStorage.setItem(storageKey(id, student), JSON.stringify(data)); } catch (e) {}
  }

  function clear(id, student) {
    try { localStorage.removeItem(storageKey(id, student)); } catch (e) {}
  }

  // False when the teacher removed this result on the Dashboard ("Xoá học sinh"):
  // the saved progress is then stale and the student starts over.
  async function stillOnDashboard(data, { student, unitId, section }) {
    if (!data.answers || Object.keys(data.answers).length === 0) return true;
    if (!window.EQResults || !window.EQResults.getResult) return true;
    try {
      const r = await window.EQResults.getResult({ student, unitId, section });
      return !!(r && Array.isArray(r.answers));
    } catch (e) {
      return true; // offline — keep the progress
    }
  }

  window.EQProgress = { load, save, clear, stillOnDashboard };
})();
