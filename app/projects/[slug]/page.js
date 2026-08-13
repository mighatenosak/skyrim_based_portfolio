import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "../../data/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Salman Ali Khan`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === params.slug);
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <main className={styles.page}>
      <div className="container">
        <Link href="/#projects" className={styles.back}>
          ← Back to the compass
        </Link>

        <div className={styles.head}>
          <p className="eyebrow">{project.tag}</p>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.summary}>{project.summary}</p>
        </div>

        <div className={styles.statsRow}>
          <div>
            <span className={styles.statLabel}>Scope</span>
            <span className={styles.statValue}>{project.weight}</span>
          </div>
          <div>
            <span className={styles.statLabel}>Reference</span>
            <span className={styles.statValue}>{project.value}</span>
          </div>
        </div>

        {project.stack && (
          <div className={styles.stackRow}>
            {project.stack.map((s) => (
              <span key={s} className={styles.stackPill}>
                {s}
              </span>
            ))}
          </div>
        )}

        <hr className="hairline" />

        <article className={styles.body}>
          {project.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        <div className={styles.effectsBlock}>
          <p className="eyebrow">Effects</p>
          <ul className={styles.effects}>
            {project.effects.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>

        <nav className={styles.pager} aria-label="Other projects">
          <Link href={`/projects/${prev.slug}`} className={styles.pagerLink}>
            <span className={styles.pagerDir}>← Previous</span>
            <span className={styles.pagerName}>{prev.name}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerRight}`}>
            <span className={styles.pagerDir}>Next →</span>
            <span className={styles.pagerName}>{next.name}</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
