import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className={styles.hero} style={{ minHeight: "56vh" }}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.inner}`} style={{ gridTemplateColumns: "1fr", gap: 24 }}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag">{eyebrow}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.sub} style={{ maxWidth: 760 }}>{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
