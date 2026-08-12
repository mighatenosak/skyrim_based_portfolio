"use client";

import { useState } from "react";
import styles from "./ModuleArsenal.module.css";

const CATEGORIES = [
  {
    name: "CRM & Sales",
    modules: [
      "crm_inventory_delivery_gate",
      "crm_not_qualified",
      "crm_procurement_task_pool",
      "crm_proposals",
      "custom_approval_sale",
      "custom_sale",
      "sale_frame_agreement",
      "sale_order_delivery_link",
      "sale_procurement_pricing",
      "payment_confirmation_required",
    ],
  },
  {
    name: "HR & Attendance",
    modules: [
      "custom_attendance_approval",
      "hr_iqama_notification",
      "hr_requests",
      "recruitment_survey_assessment",
      "timeoff_attendance_sync",
      "travel_request",
      "wfh_balance_fix",
    ],
  },
  {
    name: "KSA Localization & Payroll",
    modules: [
      "arabic_address_module",
      "iwesabe_sar_currency_symbol",
      "ksa_payroll_export",
      "l10n_sa_payroll_enhanced",
      "zatca_manual_push",
    ],
  },
  {
    name: "Access & Visibility",
    modules: [
      "company_contact_visibility",
      "menu_access_control",
      "partner_visibility_control",
      "status_ribbon",
    ],
  },
  {
    name: "Reports & Documents",
    modules: [
      "bs_report_fix",
      "custom_invoice_template",
      "custom_notifications",
      "custom_stock_delivery_signature",
    ],
  },
  {
    name: "Integrations & Procurement",
    modules: [
      "procurement_system",
      "purchase_terms_knk",
      "zk_biometric",
      "zoho_migration_price_lock",
    ],
  },
];

export default function ModuleArsenal() {
  const [active, setActive] = useState(0);
  const current = CATEGORIES[active];
  const total = CATEGORIES.reduce((n, c) => n + c.modules.length, 0);

  return (
    <section id="arsenal" className={styles.section}>
      <div className="container">
        <p className="eyebrow">Crafted &amp; Deployed</p>
        <h2 className={styles.heading}>Module Arsenal</h2>
        <p className={styles.sub}>{total} custom Odoo 19 modules, shipped to production.</p>
        <hr className={`hairline ${styles.headHr}`} />

        <div className={styles.layout}>
          <ul className={styles.tabs} role="tablist" aria-label="Module categories">
            {CATEGORIES.map((c, i) => (
              <li key={c.name}>
                <button
                  className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                >
                  <span>{c.name}</span>
                  <span className={styles.tabCount}>{c.modules.length}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.pane} role="tabpanel">
            <div className={styles.pillGrid}>
              {current.modules.map((m) => (
                <span key={m} className={styles.pill}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
