import styles from "./Contact.module.css";

const LINKS = [
  { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { label: "GitHub", value: "github.com/yourusername", href: "https://github.com/yourusername" },
  { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <p className="eyebrow">Send Word</p>
        <h2 className={styles.heading}>Get in touch</h2>
        <hr className={`hairline ${styles.headHr}`} />

        <p className={styles.lede}>
          Open to Odoo development work, freelance module builds, or just a
          conversation about a system that&rsquo;s currently held together with
          scheduled actions and hope.
        </p>

        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={styles.link} target="_blank" rel="noreferrer">
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkValue}>{l.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
