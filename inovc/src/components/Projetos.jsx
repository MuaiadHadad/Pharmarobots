import { motion } from "framer-motion";
import { ArrowRight, Activity, Microscope, Heart } from "lucide-react";
import styles from "./Projetos.module.css";
const projetos = [
  {
    icon: Activity,
    tag: "Tecnologia",
    title: "SmartCare 360",
    desc: "Monitorizacao remota de doentes cronicos com dashboards para equipas multidisciplinares.",
    tagColor: "#2563eb",
  },
  {
    icon: Microscope,
    tag: "Simulacao",
    title: "SimLab Nursing",
    desc: "Simulacao clinica com realidade aumentada para treino de competencias avancadas.",
    tagColor: "#06b6d4",
  },
  {
    icon: Heart,
    tag: "Experiencia",
    title: "Humaniza+",
    desc: "Programa de redesign de processos centrados na experiencia do utente e familia.",
    tagColor: "#f43f5e",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
};
export default function Projetos() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Projetos em destaque</h2>
          <a href="#">Ver todos <ArrowRight size={14} style={{ verticalAlign: "middle" }} /></a>
        </motion.div>
        <div className="projects">
          {projetos.map(({ icon: Icon, tag, title, desc, tagColor }, i) => (
            <motion.article
              key={title}
              className={styles.card}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 20px 56px rgba(37,99,235,.15)" }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              <div className={styles.iconBox} style={{ background: tagColor + "15", color: tagColor }}>
                <Icon size={22} />
              </div>
              <span className={styles.tag} style={{ background: tagColor + "18", color: tagColor }}>
                {tag}
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#" className={styles.link} style={{ color: tagColor }}>
                Saber mais <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
