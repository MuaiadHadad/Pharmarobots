import { motion } from "framer-motion";
import { FlaskConical, GraduationCap, Handshake } from "lucide-react";
import styles from "./Areas.module.css";
const areas = [
  {
    icon: FlaskConical,
    title: "Investigacao aplicada",
    desc: "Desenvolvimento de solucoes com base em evidencia cientifica e validacao em contexto real.",
    color: "#2563eb",
  },
  {
    icon: GraduationCap,
    title: "Capacitacao",
    desc: "Formacao continua para profissionais de saude com foco em metodologias inovadoras.",
    color: "#06b6d4",
  },
  {
    icon: Handshake,
    title: "Parcerias",
    desc: "Ligacao entre academia, hospitais e empresas para acelerar a transferencia de conhecimento.",
    color: "#8b5cf6",
  },
];
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};
export default function Areas() {
  return (
    <section id="areas" className={`section section-light ${styles.section}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className={styles.heading}
        >
          <p className="tag">O que fazemos</p>
          <h2>Areas de atuacao</h2>
          <p className={styles.sub}>
            Trabalhamos em tres pilares fundamentais para impulsionar a inovacao na saude.
          </p>
        </motion.div>
        <motion.div
          className="cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {areas.map(({ icon: Icon, title, desc, color }) => (
            <motion.article
              key={title}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(37,99,235,.14)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.iconWrap} style={{ background: color + "18", color }}>
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
