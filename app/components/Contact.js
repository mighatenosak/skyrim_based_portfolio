import styles from "./Contact.module.css";

const LINKS = [
  {
    label: "Email",
    value: "khanalisak1113@gmail.com",
    href: "mailto:khanalisak1113@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/mighatenosak",
    href: "https://github.com/mighatenosak",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/salman-ali-khan-95157b353",
    href: "https://linkedin.com/in/salman-ali-khan-95157b353",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <p className="eyebrow">Send Word</p>
        <h2 className={styles.heading}>Get in touch</h2>
        <hr className={`hairline ${styles.headHr}`} />

        <p className={styles.lede}>
          Open for AI/ML, software, and Odoo development work — freelance
          module builds, integrations, or a full system built from scratch.
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
