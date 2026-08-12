import styles from "./About.module.css";

const STATS = [
  { label: "Class", value: "Odoo Developer" },
  { label: "Origin", value: "BCA Honours" },
  { label: "Specialty", value: "Custom Modules" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.sheet}>
          <div className={styles.sheetRow}>
            <div className={styles.sheetField}>
              <span className={styles.sheetLabel}>Name</span>
              <span className={styles.sheetValue}>Taasif</span>
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
              Currently reading for a BCA (Bachelor of Computer Applications) Honours
              degree, and working as an Odoo 19 developer — building the custom
              modules that sit underneath a business&rsquo;s day-to-day: the ones
              that touch payroll runs, sales approvals, property contracts, and the
              holiday calendar nobody notices until it&rsquo;s wrong.
            </p>
            <p>
              The work is less about flashy features and more about getting the
              detail right — the field that got renamed between versions, the
              approval that has to escalate to exactly the right person, the
              calendar date that has to land on the correct day of a lunar month
              every single year. It rewards patience, and a willingness to read
              the changelog twice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
