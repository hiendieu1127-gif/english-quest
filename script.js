// English Quest — shared behaviour
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const scrim = document.querySelector(".nav-scrim");

  function closeNav() {
    links?.classList.remove("open");
    scrim?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  }
  function openNav() {
    links?.classList.add("open");
    scrim?.classList.add("open");
    toggle?.setAttribute("aria-expanded", "true");
  }

  toggle?.addEventListener("click", () => {
    const isOpen = links.classList.contains("open");
    isOpen ? closeNav() : openNav();
  });
  scrim?.addEventListener("click", closeNav);
  links?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeNav();
  });

  // Highlight the current page's nav link (also sets its accent color via CSS var)
  const current = document.body.dataset.page;
  document.querySelectorAll(".navlink").forEach((link) => {
    if (link.dataset.page === current) {
      link.classList.add("active");
    }
  });

  // Animate progress bars into view (placeholder data already in markup)
  document.querySelectorAll(".progress-bar > span").forEach((bar) => {
    const target = bar.style.width;
    bar.style.width = "0%";
    requestAnimationFrame(() => {
      setTimeout(() => { bar.style.transition = "width .8s ease"; bar.style.width = target; }, 120);
    });
  });

  // Simple chip filter demo (visual only — no real filtering logic yet)
  document.querySelectorAll(".filter-row .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      chip.parentElement.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
    });
  });
});
