// ============================================================
// Section progress, remembered on this device (localStorage).
// Saved each time a student FINISHES a section (Tap Pairs, Fill in the Blank, …):
// which sections are done + the answers recorded so far. If the page is
// closed (flat battery, reload…), the student resumes at the first
// unfinished section and the earlier answers are kept, so the Dashboard
// score is not overwritten by a half-empty attempt.
// A section left half-way is started again from its first question.
//
// Sections that are already done can be opened again as REVIEW: nothing
// answered there is saved, so the Dashboard keeps the first attempt (L1)
// and "Sửa x/y" only counts the retry rounds of that first attempt.
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

  // Reads this student's Dashboard result once and answers:
  //  - finished:   every question already has a first answer on the Dashboard
  //                (even if it was done on another device) → the whole lesson is review
  //  - savedValid: false when the teacher removed the result ("Xoá học sinh"),
  //                so the remembered progress is stale and the student starts over
  // Offline / Firebase not reachable → keep whatever is on this device.
  async function checkDashboard(saved, { student, unitId, section }) {
    const unknown = { finished: false, savedValid: true };
    if (!window.EQResults || !window.EQResults.getResult || !student) return unknown;
    let r;
    try {
      r = await Promise.race([
        window.EQResults.getResult({ student, unitId, section }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 5000)),
      ]);
    } catch (e) {
      return unknown;
    }
    const hasAnswers = !!(r && Array.isArray(r.answers));
    const savedHasAnswers = !!(saved && saved.answers && Object.keys(saved.answers).length);
    return {
      finished: hasAnswers && r.total > 0 && r.answers.length >= r.total,
      savedValid: !savedHasAnswers || hasAnswers,
    };
  }

  window.EQProgress = { load, save, clear, checkDashboard };
})();
