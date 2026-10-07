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

  // Saved on this device AND on the Dashboard doc, so the student can carry on
  // from another device (phone → computer) at the right section.
  function save(id, student, data) {
    if (!student) return;
    try { localStorage.setItem(storageKey(id, student), JSON.stringify(data)); } catch (e) {}
    const sep = id.indexOf("__");
    if (sep < 0 || !window.EQResults || !window.EQResults.saveProgress) return;
    window.EQResults.saveProgress({
      student, section: id.slice(0, sep), unitId: id.slice(sep + 2), progress: data,
    }).catch(() => {});
  }

  function clear(id, student) {
    try { localStorage.removeItem(storageKey(id, student)); } catch (e) {}
  }

  // Every answer remembered in `progress` is also on the Dashboard (same question,
  // same answer). Fails for progress left over from an older attempt — e.g. this
  // device was used before, then the teacher removed the result and the student
  // started again on another device — so it must not mark sections as done.
  function matchesDashboard(progress, dashAnswers) {
    const answers = Object.values((progress && progress.answers) || {});
    return answers.every(a => a && dashAnswers.some(d =>
      d && d.question === a.question && d.studentAnswer === a.studentAnswer));
  }

  // Reads this student's Dashboard result once and answers:
  //  - finished:   every question already has a first answer on the Dashboard
  //                (even if it was done on another device) → the whole lesson is review
  //  - progress:   where to resume — the progress saved on this device or the one
  //                saved on the Dashboard by another device, whichever has more
  //                sections done AND agrees with the answers on the Dashboard
  //                (null → start from the beginning)
  //  - savedValid: false when this device's progress is stale (teacher removed the
  //                result, or the Dashboard holds a different attempt) → clear it
  // Offline / Firebase not reachable → keep whatever is on this device.
  async function checkDashboard(saved, { student, unitId, section }) {
    const unknown = { finished: false, savedValid: true, progress: saved };
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
    const dashAnswers = r && Array.isArray(r.answers) ? r.answers : [];
    const cloud = r && r.progress && Array.isArray(r.progress.done) ? r.progress : null;
    const savedValid = !saved || matchesDashboard(saved, dashAnswers);
    const candidates = [savedValid ? saved : null, cloud && matchesDashboard(cloud, dashAnswers) ? cloud : null]
      .filter(Boolean);
    const progress = candidates.reduce((best, p) => (!best || p.done.length > best.done.length ? p : best), null);
    return {
      finished: dashAnswers.length > 0 && r.total > 0 && dashAnswers.length >= r.total,
      savedValid,
      progress,
    };
  }

  window.EQProgress = { load, save, clear, checkDashboard };
})();
