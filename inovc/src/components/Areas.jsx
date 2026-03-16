import { motion } from "framer-motion";
import { Lightbulb, GraduationCap, Handshake, Briefcase, Network, Rocket } from "lucide-react";
import styles from "./Areas.module.css";

const solucoes = [
	{
		icon: Lightbulb,
		title: "Valorização do Conhecimento",
		desc: "Apoio à transformação de resultados científicos e tecnológicos em soluções com potencial de aplicação, mercado e impacto.",
		color: "#0ea5e9",
		tag: "Conhecimento",
	},
	{
		icon: GraduationCap,
		title: "Capacitação e Formação",
		desc: "Programas, workshops e iniciativas práticas para reforçar competências em inovação, propriedade intelectual e empreendedorismo.",
		color: "#06d6a0",
		tag: "Capacitação",
	},
	{
		icon: Handshake,
		title: "Ligação ao Tecido Empresarial",
		desc: "Promoção de pontes entre academia, centros de investigação e empresas para gerar colaboração, cocriação e transferência efetiva.",
		color: "#7c3aed",
		tag: "Colaboração",
	},
	{
		icon: Briefcase,
		title: "Empreendedorismo de Base Científica",
		desc: "Acompanhamento de ideias e equipas na preparação de modelos de negócio, validação e aproximação ao investimento.",
		color: "#f59e0b",
		tag: "Startups",
	},
	{
		icon: Network,
		title: "Rede Regional de Inovação",
		desc: "Articulação entre instituições e agentes regionais para criar massa crítica e dinamizar um ecossistema de inovação mais integrado.",
		color: "#ef4444",
		tag: "Ecossistema",
	},
	{
		icon: Rocket,
		title: "Projetos com Impacto",
		desc: "Dinamização de iniciativas orientadas para resultados, com foco em competitividade, inovação aberta e desenvolvimento territorial.",
		color: "#e11d48",
		tag: "Impacto",
	},
];

const cVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.1 } },
};

const cCard = {
	hidden: { opacity: 0, y: 36 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
	},
};

export default function Areas() {
	return (
		<section id="solucoes" className={`section section-dark ${styles.section}`}>
			<div className="container">
				<motion.div
					className={styles.head}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
				>
					<span className="tag">Áreas de atuação</span>
					<h2 className="section-title">
						Um programa para aproximar
						<br />
						ciência, inovação e mercado
					</h2>
					<p className="section-sub">
						O INOVC promove uma abordagem integrada à inovação, apoiando a
						transferência de conhecimento, a colaboração institucional e a criação
						de novas oportunidades para a região.
					</p>
				</motion.div>

				<motion.div
					className={`grid-3 ${styles.grid}`}
					variants={cVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
				>
					{solucoes.map((item) => {
            const IconComponent = item.icon;

            return (
            <motion.article
              key={item.title}
              className={styles.card}
              variants={cCard}
              whileHover={{ y: -8, borderColor: item.color }}
              transition={{ type: "spring", stiffness: 280 }}
              style={{ "--card-color": item.color }}
            >
              <div className={styles.cardTop}>
                <div
                  className={styles.iconBox}
                  style={{ background: item.color + "18", color: item.color }}
                >
                  <IconComponent size={22} />
                </div>
                <span
                  className={styles.cardTag}
                  style={{
                    color: item.color,
                    background: item.color + "15",
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div
                className={styles.cardLine}
                style={{ background: item.color }}
              />
            </motion.article>
            );
          })}
				</motion.div>
			</div>
		</section>
	);
}
