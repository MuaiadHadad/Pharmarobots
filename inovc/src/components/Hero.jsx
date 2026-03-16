import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";
import RobotIllustration from "./RobotIllustration";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.13, ease: [0.4, 0, 0.2, 1] },
  }),
};
export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background glows */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.13 } } }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="tag">Robótica Médica · Portugal</span>
          </motion.div>

          <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
            O Futuro da
            <br />
            <span className={styles.gradient}>Cirurgia Robótica</span>
            <br />
            começa aqui
          </motion.h1>

          <motion.p className={styles.sub} variants={fadeUp} custom={2}>
            A MedRobots é pioneira em soluções de robótica médica em Portugal,
            oferecendo tecnologia de ponta para cirurgia minimamente invasiva,
            reabilitação e diagnóstico assistido por inteligência artificial.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp} custom={3}>
            <a href="#solucoes" className="btn btn-primary">
              Descobrir Soluções <ArrowRight size={16} />
            </a>
            <a href="#sobre" className="btn btn-ghost">
              <Play size={15} fill="currentColor" /> Ver Demo
            </a>
          </motion.div>

          <motion.div className={styles.stats} variants={fadeUp} custom={4}>
            {[
              { v: "50+", l: "Hospitais Parceiros" },
              { v: "10K+", l: "Cirurgias Assistidas" },
              { v: "99.2%", l: "Taxa de Sucesso" },
              { v: "15+", l: "Anos de I&D" },
            ].map(({ v, l }) => (
              <div key={l} className={styles.stat}>
                <strong>{v}</strong>
                <span>{l}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.88, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.visualInner}>
            <RobotIllustration />
            {/* floating badge */}
            <motion.div
              className={styles.badge1}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={styles.badgeDot} style={{ background: "#06d6a0" }} />
              Cirurgia em tempo real
            </motion.div>
            <motion.div
              className={styles.badge2}
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={styles.badgeDot} style={{ background: "#0ea5e9" }} />
              IA integrada
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scroll}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
