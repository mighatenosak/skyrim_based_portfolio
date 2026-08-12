"use client";

import { useState } from "react";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    name: "Real Estate Modules — Riyadh",
    tag: "Odoo 19",
    weight: "Properties · Contracts · Maintenance",
    value: "bsoln Riyadh",
    effects: [
      "Built real estate modules for top companies in Riyadh, working with bsoln Riyadh",
      "Full property, contract & payment, and maintenance flow",
      "Documented Odoo 19 breaking changes: res.groups removals, kanban template renames, computed-field search limits",
    ],
  },
  {
    name: "ZK Biometric Integration",
    tag: "Odoo 19",
    weight: "Attendance Hardware",
    value: "zk_biometric",
    effects: [
      "Integrated ZK biometric devices directly into Odoo attendance",
      "Device punches synced into hr.attendance without manual entry",
      "Feeds into the same attendance/timeoff pipeline as the HR suite",
    ],
  },
  {
    name: "Social & CRM Lead Integrations",
    tag: "Odoo 19",
    weight: "WhatsApp · Instagram · Facebook · Snapchat",
    value: "Lead Capture",
    effects: [
      "WhatsApp, Instagram, and Facebook leads flowing straight into CRM",
      "Snapchat ad leads captured and routed the same way",
      "One consistent lead pipeline regardless of which platform it came from",
    ],
  },
  {
    name: "Salla Integration",
    tag: "Odoo 19",
    weight: "E-Commerce Sync",
    value: "Salla",
    effects: [
      "Connected a Salla storefront to Odoo",
      "Keeps orders and catalog data flowing between the store and the backend",
    ],
  },
  {
    name: "KSA Payroll Export",
    tag: "Odoo 19",
    weight: "Payroll Automation",
    value: "ksa_payroll_export",
    effects: [
      "Automated XLSX payroll export from Odoo's Pay Run (hr.payslip.run)",
      "Mapped salary rule codes: BASIC, HOUALLOW, TRAALLOW, OTALLOW, GOSI_EMP, GOSI_COMP, GROSS, NET",
      "GOSI employee contributions applied only to Saudi-national staff",
    ],
  },
  {
    name: "Saudi HR & Payroll Suite",
    tag: "Odoo 19",
    weight: "Localization",
    value: "l10n_sa_payroll_enhanced",
    effects: [
      "Fixed employees wrongly marked absent over Eid due to missing calendar entries",
      "Islamic holiday lookup table with a Meeus-algorithm / Julian Day Number fallback",
      "Iqama expiry notifications, ZATCA manual push, and SAR currency symbol fixes",
    ],
  },
  {
    name: "CRM & Sales Approvals",
    tag: "Odoo 19",
    weight: "Workflow & Security",
    value: "custom_approval_sale",
    effects: [
      "Dual-stage sales order approval: Sales Manager → CEO",
      "\"Not Qualified\" CRM lead stage with a mandatory reason wizard, enforced at ORM and view level",
      "Field-level security via view xpath groups on sensitive Sale Order fields",
    ],
  },
  {
    name: "Clokin Attendance App",
    tag: "Software Engineering",
    weight: "Attendance Tracking",
    value: "Standalone App",
    effects: [
      "A dedicated clock-in application integrated with biometric machine.",
      "Built around the same real-world constraint: punches have to be simple and hard to fake.",
    ],
  },
  {
    name: "PCF Software",
    tag: "In Progress",
    weight: "Product Carbon Footprint",
    value: "Currently Building",
    effects: [
      "Software for calculating and tracking product carbon footprint",
      "Actively in development",
    ],
  },
  {
    name: "NeuroScan",
    tag: "Applied ML",
    weight: "Brain Tumour Detection",
    value: "YOLOv8 + EfficientNet",
    effects: [
      "Two-stage detection-then-classification pipeline for brain tumour imaging",
      "Rebuilt the project report into a polished 40-page document with a full TOC and diagrams",
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
