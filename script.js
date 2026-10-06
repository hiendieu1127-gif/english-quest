// English Quest — if this browser has no text-to-speech at all (e.g. Zalo/Facebook in-app browser),
// cover the whole page with one big "open in Chrome" screen so students tap it straight away
(function () {
  if ("speechSynthesis" in window) return; // TTS already works here, nothing to do
  var isAndroid = /Android/i.test(navigator.userAgent);
  var overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:99999;background:#fff3cd;color:#664d03;" +
    "display:flex;flex-direction:column;align-items:center;justify-content:center;" +
    "gap:28px;padding:24px 16px;text-align:center;font-family:inherit;";
  overlay.innerHTML =
    '<div style="font-size:72px;line-height:1;">🔊</div>' +
    '<div style="font-size:24px;font-weight:700;line-height:1.4;max-width:420px;">' +
    "Để nghe giọng đọc,<br>mở bằng Chrome nhé</div>" +
    '<button id="open-chrome-btn" style="background:#4285F4;color:#fff;border:none;' +
    "padding:20px 40px;border-radius:16px;font-size:24px;font-weight:700;font-family:inherit;" +
    'box-shadow:0 6px 16px rgba(66,133,244,.4);cursor:pointer;">Mở Chrome</button>' +
    // Off Android the Chrome intent can't work, so leave a small way through to the page
    (isAndroid ? "" :
      '<button id="close-banner-btn" style="background:transparent;color:#664d03;border:none;' +
      'font-size:14px;text-decoration:underline;opacity:.7;cursor:pointer;">Ở lại trang này</button>');
  document.body.appendChild(overlay);
  var prevOverflow = document.documentElement.style.overflow;
  document.documentElement.style.overflow = "hidden";
  document.getElementById("open-chrome-btn").addEventListener("click", function () {
    // Always jump to the Units list page (not whatever page the student happened to be on)
    // so students land somewhere they can pick a Unit right away.
    var lessonsUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, "") + "lessons.html";
    var noScheme = lessonsUrl.replace(/^https?:\/\//, "");
    var intentUrl =
      "intent://" + noScheme +
      "#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=" +
      encodeURIComponent(lessonsUrl) + ";end";
    window.location.href = intentUrl;
  });
  var closeBtn = document.getElementById("close-banner-btn");
  if (closeBtn) closeBtn.addEventListener("click", function () {
    overlay.remove();
    document.documentElement.style.overflow = prevOverflow;
  });
})();
// English Quest — shared sound effects (plays uploaded mp3 files, falls back to a generated tone if a file fails to load)
window.EQSound = (function () {
  let ctx;
  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function tone(freq, start, duration, type, peak) {
    const c = getCtx();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, c.currentTime + start);
    gain.gain.linearRampToValueAtTime(peak, c.currentTime + start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + duration);
    osc.connect(gain).connect(c.destination);
    osc.start(c.currentTime + start);
    osc.stop(c.currentTime + start + duration + 0.03);
  }
  function toneCorrect() {
    try { tone(660, 0, 0.12, "sine", 0.18); tone(880, 0.09, 0.16, "sine", 0.18); } catch (e) {}
  }
  function toneWrong() {
    try { tone(180, 0, 0.2, "sawtooth", 0.12); } catch (e) {}
  }
  function playFile(src, fallback) {
    try {
      const audio = new Audio(src);
      audio.play().catch(() => fallback());
      audio.addEventListener("error", () => fallback());
    } catch (e) {
      fallback();
    }
  }
  return {
    correct() {
      playFile("dragon-studio-correct-472358.mp3", toneCorrect);
    },
    wrong() {
      playFile("sfx-wrong.mp3", toneWrong);
    },
  };
})();
// English Quest — text-to-speech for vocabulary words (browser built-in voice, no audio files needed)
// Generation-counter guard: every call to speak() bumps `gen`. Any earlier pending/just-started
// utterance checks against the latest `gen` and cancels itself if a newer speak() has since been
// requested — this stops old, queued utterances from firing late and overlapping the current one
// (a known issue on some Android WebViews where speechSynthesis.cancel() doesn't fully clear the queue).
// speak(text, onEnd) — onEnd (optional) fires once the utterance actually finishes speaking
// (or immediately, in a few fallback cases), so callers can wait for the real audio to end
// instead of guessing with a fixed setTimeout.
window.EQSpeak = (function () {
  let gen = 0;
  // Words the voice reads wrongly — only the SPOKEN text changes, the screen text stays the same.
  //   PE (môn Thể dục) → "P. E." so it is read letter by letter ("pi i"), not "pe"
  function fixPronunciation(text) {
    return String(text).replace(/\bPE\b/g, "P. E.");
  }
  function speak(text, onEnd) {
    try {
      if (!text || !("speechSynthesis" in window)) {
        onEnd && onEnd();
        return;
      }
      const myGen = ++gen;
      window.speechSynthesis.cancel();
      setTimeout(() => {
        if (myGen !== gen) { onEnd && onEnd(); return; }
        const utter = new SpeechSynthesisUtterance(fixPronunciation(text));
        utter.lang = "en-US";
        utter.rate = 0.9;
        utter.onstart = () => {
          if (myGen !== gen) {
            window.speechSynthesis.cancel();
          }
        };
        utter.onend = () => {
          if (myGen === gen) onEnd && onEnd();
        };
        utter.onerror = () => {
          if (myGen === gen) onEnd && onEnd();
        };
        window.speechSynthesis.speak(utter);
      }, 60);
    } catch (e) {
      onEnd && onEnd();
    }
  }
  return { speak };
})();
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

// English Quest — the "English Quest" logo/brand no longer navigates straight to
// index.html; tapping it opens a small "Khối 4 / 5 / 6 / 7" dropdown instead, on
// every page site-wide. Self-contained (inline styles), no CSS file edit needed.
document.addEventListener("DOMContentLoaded", () => {
  const brand = document.querySelector(".brand");
  if (!brand) return;

  // Wrap the brand link in a plain <span> so the dropdown menu (with its own
  // <a> links) sits as a SIBLING, not a child, of the "brand" <a> tag.
  // Nested <a> tags are invalid HTML — browsers swallow clicks on the inner
  // links and route them to the outer link instead, which was why tapping
  // "Khối 5"/"Khối 7" did nothing.
  const wrapper = document.createElement("span");
  wrapper.style.cssText = "position:relative;display:inline-flex;";
  brand.parentNode.insertBefore(wrapper, brand);
  wrapper.appendChild(brand);

  const menu = document.createElement("div");
  menu.className = "brand-menu";
  menu.style.cssText =
    "position:absolute;top:100%;left:0;margin-top:10px;background:#fff;border:1px solid #e2e2e2;" +
    "border-radius:14px;box-shadow:0 10px 28px rgba(0,0,0,.14);padding:8px;min-width:150px;" +
    "display:none;z-index:60;";
  menu.innerHTML =
    '<a href="lessons-g4.html" style="display:block;padding:10px 14px;border-radius:10px;' +
    'font-weight:800;color:#222;text-decoration:none;font-size:.95rem;">Khối 4</a>' +
    '<a href="lessons-g5.html" style="display:block;padding:10px 14px;border-radius:10px;' +
    'font-weight:800;color:#222;text-decoration:none;font-size:.95rem;">Khối 5</a>' +
    '<a href="lessons-g6.html" style="display:block;padding:10px 14px;border-radius:10px;' +
    'font-weight:800;color:#222;text-decoration:none;font-size:.95rem;">Khối 6</a>' +
    '<a href="lessons-g7.html" style="display:block;padding:10px 14px;border-radius:10px;' +
    'font-weight:800;color:#222;text-decoration:none;font-size:.95rem;">Khối 7</a>';
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("mouseenter", () => { a.style.background = "#f3f4ff"; });
    a.addEventListener("mouseleave", () => { a.style.background = "transparent"; });
  });
  wrapper.appendChild(menu);

  function closeBrandMenu() { menu.style.display = "none"; }
  function toggleBrandMenu() {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  brand.addEventListener("click", (e) => {
    e.preventDefault();
    toggleBrandMenu();
  });
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) closeBrandMenu();
  });
  window.addEventListener("resize", closeBrandMenu);
});
