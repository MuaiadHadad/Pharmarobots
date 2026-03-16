import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import styles from "./CTA.module.css";
export default function CTA() {
  return (
    <section id="contacto" className={styles.section}>
      <motion.div
        className={styles.glow}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="container">
        <motion.div
          className={styles.wrap}
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.text}>
            <p className="tag" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>
              Vamos colaborar
            </p>
            <h2>Quer colaborar connosco?</h2>
            <p>
              Submeta uma proposta de projeto ou contacte a equipa para criar
              uma parceria institucional.
            </p>
          </div>
          <motion.button
            className={`btn ${styles.ctaBtn}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={16} /> Falar com a equipa
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
