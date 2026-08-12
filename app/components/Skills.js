"use client";

import { useState } from "react";
import styles from "./Skills.module.css";

const SCHOOLS = [
  {
    name: "Destruction",
    level: 61,
    focus: "Odoo & Python",
    detail:
      "Server-side module development in Odoo 19 — models, views, security, and the ORM quirks that come with a new major version.",
  },
  {
    name: "Restoration",
    level: 47,
    focus: "Debugging",
    detail:
      "Tracing a miscalibrated constant through a holiday-calendar bug, or a field renamed between Odoo releases, back to a working fix.",
  },
  {
    name: "Conjuration",
    level: 44,
    focus: "Data & ORM",
    detail:
      "Modelling relations across sales, HR, and property records so approvals, payroll, and contracts pull from one consistent source.",
  },
  {
    name: "Enchanting",
    level: 39,
    focus: "Automation",
    detail:
      "Cron jobs, wizards, and scheduled exports — like turning a manual payroll spreadsheet into a one-click XLSX generation.",
  },
  {
    name: "Alteration",
    level: 33,
    focus: "Applied ML",
    detail:
      "A two-stage YOLOv8 + EfficientNet pipeline for brain-tumour detection, built and written up as a full technical report.",
  },
  {
    name: "Illusion",
    level: 29,
    focus: "Frontend",
    detail:
      "Interfaces that stay out of the way — including this one, styled after the very game that made a compass menu feel iconic.",
  },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <p className="eyebrow">Schools of Practice</p>
        <h2 className={styles.heading}>Skills</h2>
        <hr className={`hairline ${styles.headHr}`} />

        <div className={styles.grid}>
          {SCHOOLS.map((s, i) => {
            const open = openIndex === i;
            return (
              <button
                key={s.name}
                className={`${styles.node} ${open ? styles.open : ""}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
              >
                <span className={styles.star} aria-hidden="true" />
                <div className={styles.nodeHead}>
                  <h3 className={styles.nodeName}>{s.name}</h3>
                  <span className={styles.nodeLevel}>{s.level}</span>
                </div>
                <span className={styles.nodeFocus}>{s.focus}</span>
                <div className={styles.bar} aria-hidden="true">
                  <div className={styles.barFill} style={{ width: `${s.level}%` }} />
                </div>
                <p className={`${styles.detail} ${open ? styles.detailOpen : ""}`}>
                  {s.detail}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
