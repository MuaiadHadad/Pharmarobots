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
            <span className="tag">INOVC · Ecossistema de Inovação</span>
          </motion.div>

          <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
            Inovação, conhecimento
            <br />
            e <span className={styles.gradient}>transferência de valor</span>
            <br />
            para a região centro
          </motion.h1>

          <motion.p className={styles.sub} variants={fadeUp} custom={2}>
            O INOVC liga instituições de ensino superior, unidades de investigação,
            empresas e entidades do território para acelerar a valorização do
            conhecimento, apoiar o empreendedorismo e transformar ideias em impacto
            económico e social.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp} custom={3}>
            <a href="#solucoes" className="btn btn-primary">
              Explorar áreas <ArrowRight size={16} />
            </a>
            <a href="#sobre" className="btn btn-ghost">
              <Play size={15} fill="currentColor" /> Saber mais
            </a>
          </motion.div>

          <motion.div className={styles.stats} variants={fadeUp} custom={4}>
            {[
              { v: "+20", l: "Parceiros do ecossistema" },
              { v: "I&D", l: "Conhecimento aplicado" },
              { v: "Startups", l: "Apoio à inovação" },
              { v: "Centro", l: "Foco territorial" },
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
            <motion.div
              className={styles.badge1}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={styles.badgeDot} style={{ background: "#06d6a0" }} />
              Capacitação e empreendedorismo
            </motion.div>
            <motion.div
              className={styles.badge2}
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={styles.badgeDot} style={{ background: "#0ea5e9" }} />
              Transferência de tecnologia
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
