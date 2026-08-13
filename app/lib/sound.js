let ctx = null;
let enabled = true;

function getContext() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    ctx = new AudioCtx();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function tone({ freq = 640, duration = 0.06, type = "sine", gain = 0.05, glideTo = null }) {
  if (!enabled) return;
  const c = getContext();
  if (!c) return;
  const osc = c.createOscillator();
  const amp = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, c.currentTime);
  if (glideTo) {
    osc.frequency.exponentialRampToValueAtTime(glideTo, c.currentTime + duration);
  }
  amp.gain.setValueAtTime(gain, c.currentTime);
  amp.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + duration);
  osc.connect(amp);
  amp.connect(c.destination);
  osc.start();
  osc.stop(c.currentTime + duration);
}

/** Light hover tick — used on nav items, list rows, tabs. */
export function playHover() {
  tone({ freq: 720, duration: 0.045, type: "sine", gain: 0.035 });
}

/** Slightly heavier confirm tone — used on click/select. */
export function playSelect() {
  tone({ freq: 480, duration: 0.09, type: "triangle", gain: 0.06, glideTo: 620 });
}

export function isSoundEnabled() {
  return enabled;
}

export function setSoundEnabled(value) {
  enabled = value;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem("sound-enabled", value ? "1" : "0");
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }
}

export function initSoundFromStorage() {
  if (typeof window === "undefined") return enabled;
  try {
    const stored = window.localStorage.getItem("sound-enabled");
    enabled = stored === null ? true : stored === "1";
  } catch (e) {
    enabled = true;
  }
  return enabled;
}
