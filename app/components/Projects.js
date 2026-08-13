"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import { playHover } from "../lib/sound";
import styles from "./Projects.module.css";

export default function Projects() {
  const [active, setActive] = useState(0);
  const current = PROJECTS[active];

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <p className="eyebrow">Quests Completed</p>
        <h2 className={styles.heading}>Projects</h2>
        <hr className={`hairline ${styles.headHr}`} />

        <div className={styles.layout}>
          <ul className={styles.list} role="listbox" aria-label="Projects">
            {PROJECTS.map((p, i) => (
              <li key={p.slug}>
                <button
                  className={`${styles.listItem} ${i === active ? styles.listItemActive : ""}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={playHover}
                  role="option"
                  aria-selected={i === active}
                >
                  <span>{p.name}</span>
                  <span className={styles.listTag}>{p.tag}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.detail}>
            <div className={styles.detailHead}>
              <h3 className={styles.detailName}>{current.name}</h3>
              <span className={styles.detailTag}>{current.tag}</span>
            </div>
            <hr className="hairline" />
            <div className={styles.statsRow}>
              <div>
                <span className={styles.statLabel}>Scope</span>
                <span className={styles.statValue}>{current.weight}</span>
              </div>
              <div>
                <span className={styles.statLabel}>Reference</span>
                <span className={styles.statValue}>{current.value}</span>
              </div>
            </div>
            <ul className={styles.effects}>
              {current.effects.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <Link
              href={`/projects/${current.slug}`}
              className={styles.caseStudyLink}
              onMouseEnter={playHover}
            >
              View full case study →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
