"use client";

import { useEffect, useState } from "react";
import styles from "./CompassNav.module.css";

const POINTS = [
  { id: "about", label: "Character", angle: -90 },
  { id: "skills", label: "Skills", angle: 0 },
  { id: "projects", label: "Quests", angle: 90 },
  { id: "contact", label: "Send Word", angle: 180 },
];

export default function CompassNav() {
  const [active, setActive] = useState("about");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("header");
    const heroObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (hero) heroObserver.observe(hero);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    POINTS.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const activeIndex = POINTS.findIndex((p) => p.id === active);
  const needleAngle = activeIndex >= 0 ? POINTS[activeIndex].angle : -90;

  return (
    <div className={`${styles.wrap} ${visible ? styles.visible : ""}`}>
      <svg viewBox="0 0 100 100" className={styles.dial} aria-hidden="true">
        <line x1="50" y1="6" x2="50" y2="94" />
        <line x1="6" y1="50" x2="94" y2="50" />
        <g style={{ transform: `rotate(${needleAngle}deg)`, transformOrigin: "50px 50px" }}>
          <polygon points="50,20 54,50 50,80 46,50" className={styles.needle} />
        </g>
        <circle cx="50" cy="50" r="3.2" className={styles.hub} />
      </svg>

      <nav className={styles.labels} aria-label="Section compass">
        {POINTS.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className={`${styles.label} ${active === p.id ? styles.active : ""}`}
          >
            {p.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
