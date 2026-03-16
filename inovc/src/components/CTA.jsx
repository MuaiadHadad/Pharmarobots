import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import styles from "./CTA.module.css";
export default function CTA() {
  return (
    <>
      {/* Sobre Nós section */}
      <section id="sobre" className={`section ${styles.about}`}>
        <div className="container">
          <motion.div
            className={styles.aboutInner}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.aboutText}>
              <span className="tag">Sobre a MedRobots</span>
              <h2 className="section-title">
                Fundada em Portugal,
                <br />
                <span className={styles.grad}>pensada para o mundo</span>
              </h2>
              <p>
                Somos uma empresa portuguesa de biotecnologia e robótica médica,
                fundada em 2009 por uma equipa multidisciplinar de engenheiros,
                cirurgiões e investigadores. A nossa missão é democratizar o acesso
                a cirurgia robótica de alta precisão em todo o sistema de saúde
                português e ibérico.
              </p>
              <p>
                Trabalhamos em parceria com os principais hospitais, universidades
                e centros de investigação para desenvolver e implementar soluções
                que melhoram a qualidade de vida dos doentes e a eficiência
                clínica.
              </p>
            </div>
            <div className={styles.aboutGrid}>
              {[
                { v: "2009", l: "Ano de fundação", c: "#0ea5e9" },
                { v: "120+", l: "Colaboradores", c: "#06d6a0" },
                { v: "8", l: "Países com presença", c: "#7c3aed" },
                { v: "€40M", l: "Investimento em I&D", c: "#f59e0b" },
              ].map(({ v, l, c }) => (
                <motion.div
                  key={l}
                  className={styles.aboutStat}
                  whileHover={{ scale: 1.04 }}
                >
                  <strong style={{ color: c }}>{v}</strong>
                  <span>{l}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA banner */}
      <section id="contacto" className={styles.ctaBanner}>
        <motion.div
          className={styles.glow}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container">
          <motion.div
            className={styles.ctaInner}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.ctaText}>
              <span
                className="tag"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                Vamos Trabalhar Juntos
              </span>
              <h2>Pronto para transformar a cirurgia no seu hospital?</h2>
              <p>
                Agende uma demonstração gratuita e descubra como a MedRobots pode
                elevar os seus resultados clínicos com robótica de precisão.
              </p>
              <div className={styles.contacts}>
                <a
                  href="mailto:info@medrobots.pt"
                  className={styles.contact}
                >
                  <Mail size={16} /> info@medrobots.pt
                </a>
                <a
                  href="tel:+351210000000"
                  className={styles.contact}
                >
                  <Phone size={16} /> +351 210 000 000
                </a>
                <span className={styles.contact}>
                  <MapPin size={16} /> Lisboa, Portugal
                </span>
              </div>
            </div>
            <div className={styles.ctaForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Email institucional"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Hospital / Instituição"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  placeholder="Mensagem (opcional)"
                  className={styles.textarea}
                  rows={3}
                />
              </div>
              <motion.button
                className="btn btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Demonstração <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
