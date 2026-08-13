"use client";

import styles from "./MainMenu.module.css";
import Vegvisir from "./Vegvisir";
import { playHover, playSelect } from "../lib/sound";

const ITEMS = [
  { label: "Continue", target: "about", sub: "resume where the story starts" },
  { label: "Skills", target: "skills", sub: "schools of practice" },
  { label: "Quests Completed", target: "projects", sub: "flagship builds" },
  { label: "Arsenal", target: "arsenal", sub: "34 modules deployed" },
  { label: "Send Word", target: "contact", sub: "get in touch" },
];

function scrollTo(id) {
  playSelect();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function MainMenu() {
  return (
    <header className={styles.menu}>
      <div className={styles.fog} aria-hidden="true" />
      <div className={styles.crestWrap}>
        <Vegvisir className={styles.crest} />
      </div>

      <div className={styles.titleBlock}>
        <p className={styles.eyebrowLine}>A portfolio, of sorts</p>
        <h1 className={styles.wordmark} lang="ar" dir="rtl" aria-label="Salman Ali Khan">
          سلمان علي خان
        </h1>
        <p className={styles.translit}>Salman Ali Khan</p>
        <p className={styles.tagline}>
          AI/ML Engineer &nbsp;+&nbsp; Odoo 19 Developer
        </p>
        <p className={styles.tagline2}>BCA Honours Graduate &nbsp;·&nbsp; 2022–2026</p>
      </div>

      <nav className={styles.list} aria-label="Main menu">
        {ITEMS.map((item, i) => (
          <button
            key={item.target}
            className={styles.item}
            onClick={() => scrollTo(item.target)}
            onMouseEnter={playHover}
          >
            <span className={styles.marker} aria-hidden="true">
              ▸
            </span>
            <span className={styles.itemText}>
              <span className={styles.itemLabel}>{item.label}</span>
              <span className={styles.itemSub}>{item.sub}</span>
            </span>
          </button>
        ))}
      </nav>

      <div className={styles.footer}>
        <span className={styles.buildTag}>Built for the web · v1.0</span>
        <a
          href="/resume.pdf"
          download
          className={styles.resumeLink}
          onMouseEnter={playHover}
          onClick={playSelect}
        >
          Download Résumé ↓
        </a>
        <span className={styles.hint}>scroll, or choose above</span>
      </div>
    </header>
  );
}
