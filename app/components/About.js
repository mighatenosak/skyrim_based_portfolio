import styles from "./About.module.css";

const STATS = [
  { label: "Class", value: "AI/ML Engineer + Odoo Developer" },
  { label: "Origin", value: "BCA Honours (2022–2026)" },
  { label: "Specialty", value: "Odoo Integrations & ML Systems" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.sheet}>
          <div className={styles.sheetRow}>
            <div className={styles.sheetField}>
              <span className={styles.sheetLabel}>Name</span>
              <span className={styles.sheetValue} lang="ar" dir="rtl">
                سلمان علي خان
              </span>
            </div>
            <hr className={styles.vDivider} />
            {STATS.map((s) => (
              <div className={styles.sheetField} key={s.label}>
                <span className={styles.sheetLabel}>{s.label}</span>
                <span className={styles.sheetValue}>{s.value}</span>
              </div>
            ))}
          </div>

          <hr className="hairline" />

          <div className={styles.body}>
            <p className={styles.lede}>
              A BCA (Bachelor of Computer Applications) Honours graduate
              (2022–2026) working across two disciplines: Odoo 19 development
              and applied AI/ML. On the Odoo side, that&rsquo;s meant building
              real estate modules for top companies in Riyadh, working with
              bsoln Riyadh, and wiring Odoo into the systems a business
              actually runs on — ZK biometric devices, WhatsApp, Instagram,
              and Facebook lead capture into CRM, Snapchat ad leads, and a
              Salla storefront integration.
            </p>
            <p>
              On the ML side, that&rsquo;s meant building a brain tumour
              detection system end to end, and a habit of reaching for
              PostgreSQL, MongoDB, FastAPI, and Pydantic whenever a project
              needs a backend that holds up. The common thread is the same
              one from the Odoo work: get the integration right at the seam,
              because that&rsquo;s where everything actually breaks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
