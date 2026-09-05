// TẠM THỜI — kiểm tra giọng đọc có khả dụng không
(function () {
  var box = document.createElement("div");
  box.style.cssText = "position:fixed;top:0;left:0;right:0;z-index:99999;background:#000;color:#0f0;font-size:12px;padding:8px;word-break:break-all;";
  function report() {
    var supported = "speechSynthesis" in window;
    var voices = supported ? window.speechSynthesis.getVoices() : [];
    box.textContent = "TTS supported: " + supported + " | voices found: " + voices.length +
      (voices.length ? " | first: " + voices[0].name : "");
  }
  document.body.prepend(box);
  report();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = report;
  }
  setTimeout(report, 1000);
})();// English Quest — shared sound effects (plays uploaded mp3 files, falls back to a generated tone if a file fails to load)
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
window.EQSpeak = (function () {
  function speak(text) {
    try {
      if (!text || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      setTimeout(() => {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "en-US";
        utter.rate = 0.9;
        window.speechSynthesis.speak(utter);
      }, 60);
    } catch (e) {}
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
