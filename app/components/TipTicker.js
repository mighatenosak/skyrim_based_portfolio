import styles from "./TipTicker.module.css";

const TIPS = [
  "Tip: security.xml has to be loaded before the view files that depend on it.",
  "Tip: a computed field can't always be searched on — check before you filter by it.",
  "Tip: the field was renamed, not removed. Check the changelog before the ORM.",
  "Tip: cron jobs are the quiet form of automation. Nobody notices them until they stop.",
  "Tip: this site has no dragons in it, only Odoo modules. Mostly.",
];

export default function TipTicker() {
  const line = TIPS.join("     ·     ");
  return (
    <footer className={styles.footer}>
      <div className={styles.track}>
        <span className={styles.text}>{line}</span>
        <span className={styles.text} aria-hidden="true">
          {line}
        </span>
      </div>
      <div className={styles.credit}>
        <span lang="ar" dir="rtl">
          سلمان علي خان — AI/ML Engineer &amp; Odoo Developer
        </span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
