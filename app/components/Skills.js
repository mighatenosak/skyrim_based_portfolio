"use client";

import { useState } from "react";
import styles from "./Skills.module.css";

const SCHOOLS = [
  {
    name: "Destruction",
    level: 68,
    focus: "Odoo 19 Development",
    detail:
      "34+ custom Odoo modules shipped across CRM, sales, HR, payroll, and Saudi localization — real estate modules for top Riyadh companies among them.",
  },
  {
    name: "Alteration",
    level: 52,
    focus: "AI / Deep Learning",
    detail:
      "Deep learning and applied ML, including a two-stage YOLOv8 + EfficientNet pipeline for brain-tumour detection (NeuroScan).",
  },
  {
    name: "Enchanting",
    level: 58,
    focus: "Integrations",
    detail:
      "Wiring Odoo into the outside world: ZK biometric devices, WhatsApp/Instagram/Facebook lead capture into CRM, Snapchat ad leads, and Salla.",
  },
  {
    name: "Conjuration",
    level: 49,
    focus: "Databases",
    detail:
      "PostgreSQL, MongoDB, SQLAlchemy, and Alembic — modelling and migrating the data underneath both the Odoo and the ML side of the work.",
  },
  {
    name: "Restoration",
    level: 44,
    focus: "Backend & APIs",
    detail:
      "FastAPI and Pydantic for building and validating services — the layer that sits between the data and whatever's consuming it.",
  },
  {
    name: "Illusion",
    level: 38,
    focus: "Systems & Languages",
    detail:
      "Python, Java, C, C++, and Linux, plus computer architecture, DBMS, and software engineering fundamentals from the BCA Honours program.",
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
