// ============================================================
// English Quest — Student name gate
// Plain script (not a module) so it works instantly, before the
// Firebase module has loaded. Shares the same localStorage key
// ("eq_student_name") that results-service.js reads.
// Include this on every page BEFORE vocabulary.js / unit1-exercises.js.
// ============================================================
(function () {
  const KEY = "eq_student_name";

  function getName() {
    try { return (localStorage.getItem(KEY) || "").trim(); } catch (e) { return ""; }
  }
  function setName(name) {
    try { localStorage.setItem(KEY, (name || "").trim()); } catch (e) {}
  }

  function renderBanner() {
    let bar = document.getElementById("eq-student-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "eq-student-bar";
      bar.style.cssText = "position:sticky;top:0;z-index:40;background:#232966;color:#fff;font-size:.82rem;font-weight:700;padding:7px 16px;display:flex;align-items:center;justify-content:center;gap:10px;font-family:var(--font-body, sans-serif);";
      document.body.prepend(bar);
    }
    const name = getName();
    bar.innerHTML = name
      ? `Xin chào, ${escapeHtml(name)} 👋 <button id="eq-change-name" style="background:none;border:1px solid rgba(255,255,255,.5);color:#fff;border-radius:999px;padding:3px 10px;font-size:.75rem;font-weight:700;cursor:pointer;">Đổi tên</button>`
      : "";
    const btn = document.getElementById("eq-change-name");
    if (btn) btn.addEventListener("click", promptForName);
  }

  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function promptForName() {
    let name = "";
    while (!name) {
      name = window.prompt("Em tên là gì? (Nhập tên để lưu kết quả học tập)", getName() || "");
      if (name === null) { name = getName(); break; } // cancelled — keep old name if any
      name = name.trim();
    }
    if (name) {
      setName(name);
      renderBanner();
      window.dispatchEvent(new CustomEvent("eq-student-changed", { detail: { name } }));
    }
  }

  // Public API used by vocabulary.js / unit1-exercises.js
  window.EQStudent = {
    getName,
    setName,
    // Ensures we have a name, prompting if needed. Call this before
    // starting a unit (not on every page load) so it doesn't nag.
    ensureName() {
      let name = getName();
      if (!name) promptForName();
      return getName();
    },
  };

  document.addEventListener("DOMContentLoaded", renderBanner);
})();
