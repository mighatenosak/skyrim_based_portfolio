"use client";

import { useEffect, useState } from "react";
import styles from "./LoadScreen.module.css";
import Vegvisir from "./Vegvisir";
import { playSelect } from "../lib/sound";

const TIPS = [
  "Loading tip: 34 custom Odoo modules, and counting.",
  "Loading tip: real estate, payroll, CRM, and biometric hardware — one ORM.",
  "Loading tip: a lead from WhatsApp and a lead from Snapchat land in the same place.",
  "Loading tip: YOLOv8 finds it, EfficientNet names it.",
  "Loading tip: press any key, click, or wait — this screen won't hold you long.",
];

const AUTO_DISMISS_MS = 3400;

export default function LoadScreen() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem("intro-shown") === "1";
    } catch (e) {
      alreadyShown = false;
    }

    if (reduced || alreadyShown) {
      try {
        window.sessionStorage.setItem("intro-shown", "1");
      } catch (e) {
        /* ignore */
      }
      return;
    }

    setVisible(true);
    document.body.style.overflow = "hidden";

    const tipTimer = setInterval(() => {
      setTipIndex((i) => (i + 1) % TIPS.length);
    }, 1300);

    const autoTimer = setTimeout(dismiss, AUTO_DISMISS_MS);

    function dismiss() {
      setClosing(true);
      try {
        window.sessionStorage.setItem("intro-shown", "1");
      } catch (e) {
        /* ignore */
      }
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, 500);
    }

    function onKey() {
      dismiss();
    }

    window.addEventListener("keydown", onKey);

    return () => {
      clearInterval(tipTimer);
      clearTimeout(autoTimer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSkip() {
    playSelect();
    setClosing(true);
    try {
      window.sessionStorage.setItem("intro-shown", "1");
    } catch (e) {
      /* ignore */
    }
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 500);
  }

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${closing ? styles.closing : ""}`}
      onClick={handleSkip}
      role="button"
      tabIndex={-1}
      aria-label="Loading — click to continue"
    >
      <Vegvisir className={styles.mark} />
      <p className={styles.tip}>{TIPS[tipIndex]}</p>
      <div className={styles.barTrack}>
        <div className={styles.barFill} />
      </div>
      <button type="button" className={styles.skip} onClick={handleSkip}>
        Skip
      </button>
    </div>
  );
}
