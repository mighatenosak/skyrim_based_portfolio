"use client";

import styles from "./MainMenu.module.css";

const ITEMS = [
  { label: "Continue", target: "about", sub: "resume where the story starts" },
  { label: "Skills", target: "skills", sub: "schools of practice" },
  { label: "Quests Completed", target: "projects", sub: "shipped modules" },
  { label: "Send Word", target: "contact", sub: "get in touch" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function MainMenu() {
  return (
    <header className={styles.menu}>
      <div className={styles.fog} aria-hidden="true" />
      <div className={styles.crestWrap} aria-hidden="true">
        <svg viewBox="0 0 120 140" className={styles.crest}>
          <polygon
            points="60,6 96,30 108,74 82,132 60,110 38,132 12,74 24,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M60 30 C 74 46, 74 66, 60 92 C 46 66, 46 46, 60 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <text x="60" y="76" textAnchor="middle" className={styles.crestMark}>
            TS
          </text>
        </svg>
      </div>

      <div className={styles.titleBlock}>
        <p className={styles.eyebrowLine}>A portfolio, of sorts</p>
        <h1 className={styles.wordmark}>TAASIF</h1>
        <p className={styles.tagline}>Odoo 19 Developer &nbsp;·&nbsp; BCA Honours Student</p>
      </div>

      <nav className={styles.list} aria-label="Main menu">
        {ITEMS.map((item, i) => (
          <button
            key={item.target}
            className={styles.item}
            onClick={() => scrollTo(item.target)}
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
        <span className={styles.hint}>scroll, or choose above</span>
      </div>
    </header>
  );
}
