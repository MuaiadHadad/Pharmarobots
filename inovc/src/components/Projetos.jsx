import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  University,
  Building2,
} from "lucide-react";
import styles from "./Projetos.module.css";

const features = [
  "Promoção da transferência de conhecimento entre instituições de ensino superior, centros de I&D e empresas",
  "Dinamização de programas de capacitação em inovação, empreendedorismo e valorização da investigação",
  "Apoio à identificação de oportunidades de colaboração e desenvolvimento de projetos conjuntos",
  "Estimulação da criação de novas iniciativas empresariais de base científica e tecnológica",
  "Consolidação de uma rede regional orientada para inovação, competitividade e impacto territorial",
  "Disseminação de resultados, boas práticas e casos de sucesso do ecossistema de inovação",
];

const consortium = [
  {
    icon: Building2,
    label: "Empresas & entidades",
    sub: "Ligação ao mercado, validação de soluções e aproximação a desafios reais",
  },
  {
    icon: University,
    label: "Ensino superior",
    sub: "Produção de conhecimento, formação avançada e articulação institucional",
  },
  {
    icon: FlaskConical,
    label: "I&D & inovação",
    sub: "Valorização científica, transferência de tecnologia e apoio ao empreendedorismo",
  },
];

export default function Projetos() {
  return (
    <>
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
              <span className="tag">Projeto INOVC</span>
              <h2 className="section-title">
                Uma plataforma de
                <br />
                <span className={styles.grad}>articulação para a inovação</span>
              </h2>
              <p className={styles.sub}>
                O INOVC afirma-se como uma iniciativa de cooperação e dinamização do
                ecossistema regional, promovendo a ligação entre conhecimento,
                empreendedorismo, transferência de tecnologia e desenvolvimento económico.
                O objetivo é acelerar a valorização dos ativos científicos e reforçar a
                capacidade de inovação das organizações.
              </p>
              <ul className={styles.features}>
                {features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={16} className={styles.check} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <NavLink to="/contacto" className={`btn btn-primary ${styles.cta}`}>
                Pedir mais informação <ArrowRight size={16} />
              </NavLink>
            </motion.div>

            <motion.div
              className={styles.right}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <div className={styles.dots}>
                    <span style={{ background: "#ef4444" }} />
                    <span style={{ background: "#f59e0b" }} />
                    <span style={{ background: "#22c55e" }} />
                  </div>
                  <span className={styles.panelTitle}>INOVC Dashboard · Região Centro</span>
                  <motion.span
                    className={styles.live}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ● ATIVO
                  </motion.span>
                </div>
                <div className={styles.panelBody}>
                  <div className={styles.metric}>
                    <span>Parcerias</span>
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.fill}
                        style={{ background: "#e11d48" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                      />
                    </div>
                    <strong>92%</strong>
                  </div>
                  <div className={styles.metric}>
                    <span>Capacitação</span>
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.fill}
                        style={{ background: "#f97316" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "88%" }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                      />
                    </div>
                    <strong>88%</strong>
                  </div>
                  <div className={styles.metric}>
                    <span>Transferência</span>
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.fill}
                        style={{ background: "#be123c" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                      />
                    </div>
                    <strong>95%</strong>
                  </div>
                  <div className={styles.vitals}>
                    {[
                      { l: "Rede", v: "+20", c: "#e11d48" },
                      { l: "Programas", v: "Workshops", c: "#f97316" },
                      { l: "Foco", v: "Impacto", c: "#be123c" },
                    ].map(({ l, v, c }) => (
                      <div key={l} className={styles.vital}>
                        <span>{l}</span>
                        <strong style={{ color: c }}>{v}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.awards}>
                {consortium.map((item) => {
                  const IconComponent = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      className={styles.award}
                      whileHover={{ scale: 1.04 }}
                    >
                      <IconComponent size={18} color="#e11d48" />
                      <div>
                        <strong>{item.label}</strong>
                        <span>{item.sub}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="parceiros" className={`${styles.partners}`}>
        <div className="container">
          <motion.p
            className={styles.partnersLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Rede colaborativa com instituições de ensino, investigação, inovação e tecido empresarial
          </motion.p>
          <div className={styles.logosRow}>
            {[
              "INOVC",
              "ESEnfC",
              "Universidades",
              "Politécnicos",
              "Centros de I&D",
              "Empresas",
              "Entidades regionais",
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
