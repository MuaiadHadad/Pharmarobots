import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <>
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
              <span className="tag">Sobre o INOVC</span>
              <h2 className="section-title">
                Cooperação regional
                <br />
                com{" "}
                <span className={styles.grad}>foco em inovação aplicada</span>
              </h2>
              <p>
                O INOVC é uma iniciativa orientada para a valorização do
                conhecimento, para a criação de sinergias entre instituições e
                para o reforço da capacidade de inovação do território. A sua
                atuação cruza investigação, formação, empreendedorismo e
                colaboração com o tecido empresarial.
              </p>
              <p>
                Através de uma lógica de rede, o projeto contribui para
                aproximar atores, dinamizar oportunidades, apoiar novas ideias e
                promover resultados com impacto económico, científico e social na
                região centro.
              </p>
            </div>
            <div className={styles.aboutGrid}>
              {[
                { v: "+20", l: "Entidades na rede", c: "#0ea5e9" },
                { v: "Workshops", l: "Capacitação e eventos", c: "#06d6a0" },
                { v: "Startups", l: "Ideias com potencial", c: "#7c3aed" },
                { v: "Centro", l: "Âmbito territorial", c: "#f59e0b" },
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
                Contacto
              </span>
              <h2>Quer saber mais sobre o projeto ou integrar a rede?</h2>
              <p>
                Entre em contacto para obter informação sobre iniciativas,
                parcerias, ações de capacitação e oportunidades de colaboração no
                âmbito do INOVC.
              </p>
              <div className={styles.contacts}>
                <a
                  href="mailto:inovc@esenfc.pt"
                  className={styles.contact}
                >
                  <Mail size={16} /> inovc@esenfc.pt
                </a>
                <a
                  href="tel:+351239487200"
                  className={styles.contact}
                >
                  <Phone size={16} /> +351 239 487 200
                </a>
                <span className={styles.contact}>
                  <MapPin size={16} /> Coimbra, Portugal
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
                  placeholder="Email"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Instituição / Empresa"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  placeholder="Como podemos ajudar?"
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
                type="button"
              >
                Enviar pedido <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
