import { motion } from "framer-motion";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrap}`}>
        <div className={styles.brand}>
          <a className={styles.logo} href="#">INOV<span>C</span></a>
          <p>Centro de Inovacao em Saude</p>
        </div>
        <div className={styles.links}>
          <a href="#areas">Areas</a>
          <a href="#projetos">Projetos</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className={styles.contact}>
          <p>inovc@exemplo.pt</p>
          <p>+351 000 000 000</p>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>2026 INOVC. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
