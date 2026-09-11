window.EQMascot = (function () {
  const BASE = 'assets/mascot/';

  const SETS = {
    correct: ['correct-1.png', 'correct-2.png', 'correct-3.png'],
    wrong: ['wrong-1.png', 'wrong-2.png', 'wrong-3.png'],
    thinking: ['thinking-1.png', 'thinking-2.png', 'thinking-3.png'],
    complete_unit: ['complete-unit.png'],
    complete_exercise: ['complete-exercise.png'],
    complete_welldone: ['complete-welldone.png']
  };

  const ANIMATIONS = {
    correct: 'eq-mascot-pop',
    wrong: 'eq-mascot-shake',
    thinking: 'eq-mascot-wiggle',
    complete_unit: 'eq-mascot-bounce',
    complete_exercise: 'eq-mascot-bounce',
    complete_welldone: 'eq-mascot-bounce'
  };

  function injectStyles() {
    if (document.getElementById('eq-mascot-styles')) return;
    const style = document.createElement('style');
    style.id = 'eq-mascot-styles';
    style.textContent = `
      .eq-mascot-img {
        display: block;
        margin: 0 auto;
        max-width: 140px;
        height: auto;
      }
      @keyframes eqMascotPop {
        0% { transform: scale(0.3); opacity: 0; }
        60% { transform: scale(1.15); opacity: 1; }
        100% { transform: scale(1); }
      }
      @keyframes eqMascotShake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-8px) rotate(-4deg); }
        40% { transform: translateX(8px) rotate(4deg); }
        60% { transform: translateX(-6px) rotate(-3deg); }
        80% { transform: translateX(6px) rotate(3deg); }
      }
      @keyframes eqMascotWiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-6deg); }
        75% { transform: rotate(6deg); }
      }
      @keyframes eqMascotBounce {
        0% { transform: translateY(30px) scale(0.6); opacity: 0; }
        50% { transform: translateY(-14px) scale(1.05); opacity: 1; }
        70% { transform: translateY(4px) scale(1); }
        100% { transform: translateY(0) scale(1); }
      }
      .eq-mascot-pop { animation: eqMascotPop 0.5s ease-out; }
      .eq-mascot-shake { animation: eqMascotShake 0.5s ease-in-out; }
      .eq-mascot-wiggle { animation: eqMascotWiggle 1.2s ease-in-out infinite; }
      .eq-mascot-bounce { animation: eqMascotBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1); }
    `;
    document.head.appendChild(style);
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // container: a DOM element (or element id string) where the mascot image renders
  function show(containerOrId, type) {
    injectStyles();
    const container = typeof containerOrId === 'string'
      ? document.getElementById(containerOrId)
      : containerOrId;
    if (!container) return;

    const files = SETS[type];
    if (!files) return;
    const file = pickRandom(files);
    const animClass = ANIMATIONS[type] || 'eq-mascot-pop';

    const img = document.createElement('img');
    img.src = BASE + file;
    img.alt = 'mascot';
    img.className = 'eq-mascot-img ' + animClass;

    container.innerHTML = '';
    container.appendChild(img);
  }

  function clear(containerOrId) {
    const container = typeof containerOrId === 'string'
      ? document.getElementById(containerOrId)
      : containerOrId;
    if (container) container.innerHTML = '';
  }

  return { show, clear };
})();
