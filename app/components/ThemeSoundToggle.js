"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeSoundToggle.module.css";
import { initSoundFromStorage, setSoundEnabled, playHover, playSelect } from "../lib/sound";

function getStoredTheme() {
  if (typeof window === "undefined") return "frost";
  try {
    return window.localStorage.getItem("theme") || "frost";
  } catch (e) {
    return "frost";
  }
}

export default function ThemeSoundToggle() {
  const [theme, setTheme] = useState("frost");
  const [soundOn, setSoundOn] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(getStoredTheme());
    setSoundOn(initSoundFromStorage());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch (e) {
      /* ignore */
    }
  }, [theme, mounted]);

  function toggleTheme() {
    playSelect();
    setTheme((t) => (t === "frost" ? "journal" : "frost"));
  }

  function toggleSound() {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playSelect();
  }

  if (!mounted) return null;

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.btn}
        onClick={toggleTheme}
        onMouseEnter={playHover}
        aria-label={theme === "frost" ? "Switch to Journal mode" : "Switch to Frost mode"}
        title={theme === "frost" ? "Journal mode" : "Frost mode"}
      >
        {theme === "frost" ? "❄" : "☙"}
      </button>
      <button
        type="button"
        className={styles.btn}
        onClick={toggleSound}
        onMouseEnter={playHover}
        aria-label={soundOn ? "Mute menu sounds" : "Unmute menu sounds"}
        title={soundOn ? "Sound on" : "Sound off"}
      >
        {soundOn ? "♪" : "✕"}
      </button>
    </div>
  );
}
