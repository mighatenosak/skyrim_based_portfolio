"use client";

import { useState } from "react";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    name: "Real Estate Module",
    tag: "Odoo 19",
    weight: "Properties · Contracts · Maintenance",
    value: "Prototype",
    effects: [
      "Full property, contract & payment, and maintenance flow built from scratch",
      "Worked through iterative install-debug cycles against a real client brief",
      "Documented Odoo 19 breaking changes: res.groups removals, kanban template renames, computed-field search limits",
    ],
  },
  {
    name: "KSA Payroll Export",
    tag: "Odoo 19",
    weight: "Payroll Automation",
    value: "In Progress",
    effects: [
      "Automated XLSX payroll export from Odoo's Pay Run (hr.payslip.run) for a Saudi client",
      "Mapped salary rule codes: BASIC, HOUALLOW, TRAALLOW, OTALLOW, GOSI_EMP, GOSI_COMP, GROSS, NET",
      "Handled GOSI employee contributions applying only to Saudi-national staff",
    ],
  },
  {
    name: "Saudi HR Holidays",
    tag: "Odoo 19",
    weight: "Attendance & Calendar",
    value: "l10n_sa_hr_holidays",
    effects: [
      "Fixed employees being wrongly marked absent over Eid due to missing calendar entries",
      "Islamic holiday lookup table (2020–2026) with a Meeus-algorithm fallback",
      "Confirmation wizard, cron jobs, and email alerts; rebuilt the date math on a Julian Day Number approach",
    ],
  },
  {
    name: "CRM & Sales Approvals",
    tag: "Odoo 19",
    weight: "Workflow & Security",
    value: "custom_approval_sale",
    effects: [
      "Dual-stage sales order approval: Sales Manager → CEO",
      "\"Not Qualified\" CRM lead stage replicating Lost, with a mandatory reason wizard at ORM and view level",
      "PRC / SRC user groups restricting sensitive Sale Order fields via view-level xpath security",
    ],
  },
  {
    name: "NeuroScan",
    tag: "Applied ML",
    weight: "Brain Tumour Detection",
    value: "YOLOv8 + EfficientNet",
    effects: [
      "Two-stage detection-then-classification pipeline for brain tumour imaging",
      "Rebuilt the project report into a polished 40-page document",
      "Proper pagination, a manual table of contents, and correctly placed diagrams throughout",
    ],
  },
];

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
              <li key={p.name}>
                <button
                  className={`${styles.listItem} ${i === active ? styles.listItemActive : ""}`}
                  onClick={() => setActive(i)}
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
          </div>
        </div>
      </div>
    </section>
  );
}
