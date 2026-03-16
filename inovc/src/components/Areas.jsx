import { motion } from "framer-motion";
import { Stethoscope, Brain, Activity, Microscope, Shield, Cpu } from "lucide-react";
import styles from "./Areas.module.css";
const solucoes = [
	{
		icon: Stethoscope,
		title: "Cirurgia Minimamente Invasiva",
		desc: "Sistemas robóticos de alta precisão para cirurgias laparoscópicas com controlo háptico e visão 3D estereoscópica.",
		color: "#0ea5e9",
		tag: "Cirurgia",
	},
	{
		icon: Brain,
		title: "Diagnóstico por IA",
		desc: "Algoritmos de deep learning treinados em milhões de casos clínicos para diagnóstico imagiológico assistido.",
		color: "#06d6a0",
		tag: "Inteligência Artificial",
	},
	{
		icon: Activity,
		title: "Reabilitação Robótica",
		desc: "Exoesqueletos e sistemas de reabilitação motora para recuperação pós-cirúrgica e neurológica.",
		color: "#7c3aed",
		tag: "Reabilitação",
	},
	{
		icon: Microscope,
		title: "Cirurgia de Precisão",
		desc: "Robótica de nano-escala para intervenções oncológicas e neurocirúrgicas com margem de erro inferior a 0.1mm.",
		color: "#f59e0b",
		tag: "Oncologia",
	},
	{
		icon: Shield,
		title: "Sistemas de Segurança",
		desc: "Monitorização em tempo real com IA para deteção precoce de complicações durante procedimentos cirúrgicos.",
		color: "#ef4444",
		tag: "Segurança",
	},
	{
		icon: Cpu,
		title: "Plataforma de Dados",
		desc: "Integração com sistemas hospitalares HIS/PACS para análise preditiva e gestão de dados clínicos em tempo real.",
		color: "#0ea5e9",
		tag: "Dados",
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
					<span className="tag">As Nossas Soluções</span>
					<h2 className="section-title">
						Tecnologia robótica
						<br />
						para cada especialidade
					</h2>
					<p className="section-sub">
						Do diagnóstico à reabilitação, as nossas plataformas integradas cobrem
						todo o espectro do cuidado clínico com precisão e segurança.
					</p>
				</motion.div>

				<motion.div
					className={`grid-3 ${styles.grid}`}
					variants={cVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
				>
					{solucoes.map(({ icon: Icon, title, desc, color, tag }) => (
						<motion.article
							key={title}
							className={styles.card}
							variants={cCard}
							whileHover={{ y: -8, borderColor: color }}
							transition={{ type: "spring", stiffness: 280 }}
							style={{ "--card-color": color }}
						>
							<div className={styles.cardTop}>
								<div
									className={styles.iconBox}
									style={{ background: color + "18", color }}
								>
									<Icon size={22} />
								</div>
								<span
									className={styles.cardTag}
									style={{
										color,
										background: color + "15",
										border: `1px solid ${color}30`,
									}}
								>
									{tag}
								</span>
							</div>
							<h3>{title}</h3>
							<p>{desc}</p>
							<div
								className={styles.cardLine}
								style={{ background: color }}
							/>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
}
