import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import styles from "./Hero.module.css";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
};
const stats = [
  { value: "12+", label: "Projetos ativos" },
  { value: "40", label: "Parceiros" },
  { value: "3", label: "Prémios" },
  { value: "200+", label: "Profissionais formados" },
];
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.text}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p className="tag" variants={fadeUp} custom={0}>
            Inovação em cuidados de saúde
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1}>
            Transformar ideias em soluções para a prática clínica
          </motion.h1>
          <motion.p className={styles.sub} variants={fadeUp} custom={2}>
            Plataforma dedicada ao desenvolvimento de projetos, investigação
            aplicada e capacitação profissional no ecossistema da saúde.
          </motion.p>
          <motion.div className={styles.actions} variants={fadeUp} custom={3}>
            <button className="btn btn-primary">
              Conhecer iniciativas <ArrowRight size={16} />
            </button>
            <button className="btn btn-light">
              <Calendar size={16} /> Ver agenda
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="tag">Próximo evento</span>
          <h3>Seminário de Inovação em Enfermagem</h3>
          <p className={styles.meta}>18 de Novembro · Auditório Principal · 14h30</p>
          <ul className={styles.list}>
            <li>Casos de sucesso com tecnologia clínica</li>
            <li>Oficinas práticas e demonstrações</li>
            <li>Networking entre instituições</li>
          </ul>
          <button className="btn btn-primary" style={{ marginTop: "auto" }}>
            Inscrever-se
          </button>
        </motion.div>
      </div>
      <motion.div
        className={`container ${styles.stats}`}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {stats.map(({ value, label }) => (
          <div key={label} className={styles.stat}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
