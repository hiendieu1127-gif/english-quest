// ============================================================
// Section lock for Exercise / Grammar pages.
// The numbered section tabs (.ex-tab / .eq-crumb) unlock in order: a student
// must finish section N before section N+1 can be opened, so nobody jumps
// around and leaves scored questions unanswered on the Dashboard.
//
// A section counts as finished when:
//  - a scored section shows its "Xong rồi!" card (.stage-complete), or
//  - a practice section (Reading / Vocabulary) — the student taps its
//    "next" button (existing #…-to-…-btn, or the one added here), or
//  - the page script calls window.EQSectionLock.markDone(panelId).
// Finished sections + their answers are remembered on this device
// (eq-progress.js), so after a flat battery / reload the student resumes
// at the first unfinished section instead of starting over.
// ============================================================
(function () {
  const TAB_SELECTOR = ".ex-tab[data-target], .eq-crumb[data-target]";
  const PRACTICE_PANELS = ["panel-reading", "panel-vocab"];
  const SECTION = /grammar/.test(location.pathname) ? "grammar" : /review/.test(location.pathname) ? "review" : "exercises";

  // The page script's own score state (top-level `let`/`const` in its classic script).
  function hasPageState() {
    return typeof eqAnswers !== "undefined" && typeof eqRetries !== "undefined"
      && typeof eqStudent !== "undefined" && typeof UNIT_ID !== "undefined" && !!eqStudent;
  }
  function progressId() {
    return `${SECTION}__${UNIT_ID}`;
  }

  const style = document.createElement("style");
  style.textContent = `
    /* Same look as the Vocabulary stepper: greyed pill, 🔒 in place of the number, ✓ when done */
    .ex-tab.locked, .eq-crumb.locked { opacity:.5; cursor:not-allowed; background:#f6f3ec !important; }
    .ex-tab.locked .tab-num, .eq-crumb.locked .eq-crumb-num { background:transparent !important; font-size:.8rem; }
    .ex-tab.section-done:not(.active) .tab-num, .eq-crumb.section-done:not(.active) .eq-crumb-num { background:#3fae4f; color:#fff; }
    /* tabs without a number circle: show the lock / tick after the label */
    .ex-tab.locked:not(.has-num)::after, .eq-crumb.locked:not(.has-num)::after { content:" 🔒"; font-size:.85em; }
    .ex-tab.section-done:not(.has-num)::after, .eq-crumb.section-done:not(.has-num)::after { content:" ✓"; color:#3fae4f; font-weight:900; }
    .section-lock-shake { animation: section-lock-shake .35s ease; }
    @keyframes section-lock-shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
    .section-lock-toast {
      position:fixed; left:50%; bottom:24px; transform:translateX(-50%);
      background:#2b2a4c; color:#fff; padding:12px 18px; border-radius:14px;
      font-weight:700; font-size:.92rem; z-index:9999; width:max-content; max-width:calc(100% - 32px); box-sizing:border-box;
      text-align:center; box-shadow:0 8px 24px rgba(0,0,0,.18);
    }
    .section-lock-next { text-align:center; margin-top:22px; }
    .section-lock-loading .ex-panel { opacity:.5; pointer-events:none; }
    .review-note {
      margin:0 0 14px; padding:10px 14px; border-radius:12px;
      background:#fff7e6; color:#7a5b00; font-weight:700; font-size:.9rem; text-align:center;
    }
  `;
  document.head.appendChild(style);

  function init() {
    // Tabs the page hid (e.g. a Review section with no questions for this unit) are not part of the order.
    const tabs = Array.from(document.querySelectorAll(TAB_SELECTOR)).filter(t => t.style.display !== "none");
    const order = [...new Set(tabs.map(t => t.dataset.target))].filter(id => document.getElementById(id));
    if (order.length < 2) return;
    const done = new Set();

    function isUnlocked(id) {
      const idx = order.indexOf(id);
      return idx <= 0 || order.slice(0, idx).every(p => done.has(p));
    }

    function refresh() {
      tabs.forEach(t => {
        const id = t.dataset.target;
        const locked = !isUnlocked(id);
        t.classList.toggle("locked", locked);
        t.classList.toggle("section-done", done.has(id));
        const num = t.querySelector(".tab-num, .eq-crumb-num");
        if (num) {
          t.classList.add("has-num");
          if (num.dataset.num === undefined) num.dataset.num = num.textContent;
          num.textContent = locked ? "🔒" : done.has(id) ? "✓" : num.dataset.num;
        }
        if (locked) {
          t.setAttribute("aria-disabled", "true");
          t.title = "Hoàn thành phần trước để mở khoá";
        } else {
          t.removeAttribute("aria-disabled");
          t.removeAttribute("title");
        }
      });
    }

    function markDone(id) {
      if (!order.includes(id) || done.has(id)) return;
      done.add(id);
      refresh();
      if (window.EQProgress && hasPageState()) {
        window.EQProgress.save(progressId(), eqStudent, { done: [...done], answers: eqAnswers, retries: eqRetries });
      }
    }

    let toastTimer = null;
    function toast(msg) {
      let el = document.querySelector(".section-lock-toast");
      if (!el) {
        el = document.createElement("div");
        el.className = "section-lock-toast";
        document.body.appendChild(el);
      }
      el.textContent = msg;
      el.style.display = "block";
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => { el.style.display = "none"; }, 2200);
    }

    // Capture phase: runs before the page's own tab handlers, so a locked tab never opens.
    document.addEventListener("click", e => {
      const tab = e.target.closest(TAB_SELECTOR);
      if (!tab || isUnlocked(tab.dataset.target)) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      tab.classList.remove("section-lock-shake");
      void tab.offsetWidth;
      tab.classList.add("section-lock-shake");
      toast("Em cần làm xong phần trước thì mới mở được phần này nhé! 🔒");
    }, true);

    order.forEach((id, idx) => {
      const panel = document.getElementById(id);

      // Scored sections: finished when their "Xong rồi!" card appears.
      // A Quiz made of several parts (Listen and circle → Tick or cross → …) shows a "Xong rồi!"
      // card after EACH part, with a "Phần tiếp theo: …" button. That is NOT the end of the section,
      // so it must not lock the section — otherwise the answers of the later parts are never saved.
      const isPartCard = card => card.hasAttribute("data-part-done")
        || Array.from(card.querySelectorAll("button")).some(b => /^\s*Phần tiếp theo/.test(b.textContent));
      const check = () => {
        const card = panel.querySelector(".stage-complete");
        if (card && !isPartCard(card)) markDone(id);
      };
      new MutationObserver(check).observe(panel, { childList: true, subtree: true });
      check();

      // Practice sections: finished when the student taps "next".
      if (PRACTICE_PANELS.includes(id) && idx < order.length - 1) {
        let nextBtn = Array.from(panel.querySelectorAll("button[id]")).find(b => /-to-.*-btn$/.test(b.id));
        if (!nextBtn) {
          const wrap = document.createElement("div");
          wrap.className = "section-lock-next";
          wrap.innerHTML = `<button type="button" class="btn btn-primary">Em đã xong — sang phần tiếp theo →</button>`;
          panel.appendChild(wrap);
          nextBtn = wrap.querySelector("button");
          nextBtn.addEventListener("click", () => {
            markDone(id);
            const nextTab = tabs.find(t => t.dataset.target === order[idx + 1]);
            nextTab && nextTab.click();
          });
        }
        nextBtn.addEventListener("click", () => markDone(id), true);
      }
    });

    // True while the student is in a section that is already finished → the page must not save answers.
    function isReviewing() {
      const active = document.querySelector(".ex-panel.active");
      return !!active && done.has(active.id);
    }

    window.EQSectionLock = { markDone, isUnlocked, isReviewing };
    refresh();
    resume();

    async function resume() {
      if (!window.EQProgress || !hasPageState()) return;
      const saved = window.EQProgress.load(progressId(), eqStudent);
      // Hold the questions until we know what is already on the Dashboard,
      // so nothing answered in this moment can overwrite the first attempt.
      document.body.classList.add("section-lock-loading");
      const dash = await window.EQProgress.checkDashboard(saved, { student: eqStudent, unitId: UNIT_ID, section: SECTION });
      document.body.classList.remove("section-lock-loading");
      const progress = dash.progress;
      if (progress) {
        progress.done.forEach(id => { if (order.includes(id)) done.add(id); });
        eqAnswers = Object.assign({}, progress.answers || {});
        eqRetries = (progress.retries || []).slice();
      }
      if (saved && !dash.savedValid) {
        window.EQProgress.clear(progressId(), eqStudent);
      }
      // Already fully answered on the Dashboard (maybe on another device): everything is review.
      if (dash.finished) order.forEach(id => done.add(id));
      // Repair for the old multi-part Quiz bug: every section is marked done but the Dashboard
      // still says "đang làm" (questions missing) → reopen the last section so the student can
      // finish the parts that were never saved. Answers already on the Dashboard stay as they are.
      else if (order.every(id => done.has(id))) done.delete(order[order.length - 1]);
      if (!done.size) return;
      refresh();
      // Sections finished before this visit are review only: answers there are not saved.
      done.forEach(id => {
        const panel = document.getElementById(id);
        if (PRACTICE_PANELS.includes(id) || panel.querySelector(":scope > .review-note")) return;
        const note = document.createElement("p");
        note.className = "review-note";
        note.textContent = "🔁 Em đã làm phần này rồi — ôn lại thoải mái, không tính điểm nhé!";
        panel.prepend(note);
      });
      const next = order.find(id => !done.has(id));
      if (next) {
        const tab = tabs.find(t => t.dataset.target === next);
        tab && tab.click();
        toast("Em làm tiếp từ phần đang dở nhé! 💪");
      } else {
        toast("Em đã làm xong bài này rồi 🎉 Ôn lại thoải mái, không tính điểm nhé!");
      }
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
