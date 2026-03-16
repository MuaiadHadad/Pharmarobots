import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Target, Award } from "lucide-react";
import styles from "./Projetos.module.css";
const features = [
  "Precisão cirúrgica de 0.1mm com feedback háptico em tempo real",
  "Visão estereoscópica 4K com ampliação até 10x do campo operatório",
  "IA preditiva integrada para apoio à decisão clínica",
  "Compatível com todos os sistemas hospitalares HIS e PACS",
  "Certificação CE Classe IIb e aprovação FDA 510(k)",
  "Suporte técnico 24/7 e formação certificada para cirurgiões",
];
const awards = [
  { icon: Zap, label: "Inovação do Ano", sub: "Portugal Health Awards 2024" },
  { icon: Target, label: "Melhor MedTech", sub: "Web Summit Lisbon 2023" },
  { icon: Award, label: "Top 10 Robótica", sub: "European Robotics Forum" },
];
export default function Projetos() {
  return (
    <>
      {/* About / Technology section */}
      <section id="tecnologia" className={`section ${styles.section}`}>
        <div className="container">
          <div className={`grid-2 ${styles.grid}`}>
            <motion.div
              className={styles.left}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag">Tecnologia de Ponta</span>
              <h2 className="section-title">
                Robótica médica com
                <br />
                <span className={styles.grad}>inteligência real</span>
              </h2>
              <p className={styles.sub}>
                A nossa plataforma robótica integra inteligência artificial, sensores
                de alta precisão e conectividade em nuvem para oferecer ao cirurgião
                total controlo e visibilidade durante cada procedimento.
              </p>
              <ul className={styles.features}>
                {features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={16} className={styles.check} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={`btn btn-primary ${styles.cta}`}>
                Solicitar Demonstração <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              className={styles.right}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.panel}>
                {/* Simulated surgical dashboard */}
                <div className={styles.panelHeader}>
                  <div className={styles.dots}>
                    <span style={{ background: "#ef4444" }} />
                    <span style={{ background: "#f59e0b" }} />
                    <span style={{ background: "#06d6a0" }} />
                  </div>
                  <span className={styles.panelTitle}>MedRobots OS · Sala 3</span>
                  <motion.span
                    className={styles.live}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ● LIVE
                  </motion.span>
                </div>
                <div className={styles.panelBody}>
                  <div className={styles.metric}>
                    <span>Precisão</span>
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.fill}
                        style={{ background: "#06d6a0", "--w": "97%" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "97%" }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                      />
                    </div>
                    <strong>97%</strong>
                  </div>
                  <div className={styles.metric}>
                    <span>Latência</span>
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.fill}
                        style={{ background: "#0ea5e9", "--w": "99%" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "99%" }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                      />
                    </div>
                    <strong>2ms</strong>
                  </div>
                  <div className={styles.metric}>
                    <span>Estabilidade</span>
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.fill}
                        style={{ background: "#7c3aed", "--w": "100%" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                      />
                    </div>
                    <strong>100%</strong>
                  </div>
                  <div className={styles.vitals}>
                    {[
                      { l: "HR", v: "72 bpm", c: "#ef4444" },
                      { l: "SpO₂", v: "98%", c: "#0ea5e9" },
                      { l: "Temp", v: "36.7°C", c: "#f59e0b" },
                    ].map(({ l, v, c }) => (
                      <div key={l} className={styles.vital}>
                        <span>{l}</span>
                        <strong style={{ color: c }}>{v}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Award cards */}
              <div className={styles.awards}>
                {awards.map(({ icon: Icon, label, sub }) => (
                  <motion.div
                    key={label}
                    className={styles.award}
                    whileHover={{ scale: 1.04 }}
                  >
                    <Icon size={18} color="#0ea5e9" />
                    <div>
                      <strong>{label}</strong>
                      <span>{sub}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section id="parceiros" className={`${styles.partners}`}>
        <div className="container">
          <motion.p
            className={styles.partnersLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Confiado pelos principais hospitais e centros de investigação
          </motion.p>
          <div className={styles.logosRow}>
            {[
              "Hospital CUF",
              "Hospital da Luz",
              "IPO Lisboa",
              "Champalimaud",
              "SNS Portugal",
              "Universidade do Porto",
              "Instituto Gulbenkian",
            ].map((name, i) => (
              <motion.div
                key={name}
                className={styles.logo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
