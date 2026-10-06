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
// Progress is kept for this page visit only: after a reload the answers
// start fresh, so the sections must be done again in order.
// ============================================================
(function () {
  const TAB_SELECTOR = ".ex-tab[data-target], .eq-crumb[data-target]";
  const PRACTICE_PANELS = ["panel-reading", "panel-vocab"];

  const style = document.createElement("style");
  style.textContent = `
    .ex-tab.locked, .eq-crumb.locked { opacity:.45; cursor:not-allowed; filter:grayscale(.6); }
    .ex-tab.locked::after, .eq-crumb.locked::after { content:" 🔒"; font-size:.85em; }
    .ex-tab.section-done::after, .eq-crumb.section-done::after { content:" ✓"; color:#3fae4f; font-weight:900; }
    .section-lock-shake { animation: section-lock-shake .35s ease; }
    @keyframes section-lock-shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
    .section-lock-toast {
      position:fixed; left:50%; bottom:24px; transform:translateX(-50%);
      background:#2b2a4c; color:#fff; padding:12px 18px; border-radius:14px;
      font-weight:700; font-size:.92rem; z-index:9999; max-width:calc(100% - 32px);
      text-align:center; box-shadow:0 8px 24px rgba(0,0,0,.18);
    }
    .section-lock-next { text-align:center; margin-top:22px; }
  `;
  document.head.appendChild(style);

  function init() {
    const tabs = Array.from(document.querySelectorAll(TAB_SELECTOR));
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
      const check = () => { if (panel.querySelector(".stage-complete")) markDone(id); };
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

    window.EQSectionLock = { markDone, isUnlocked };
    refresh();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
