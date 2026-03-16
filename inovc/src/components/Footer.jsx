import styles from './Footer.module.css';
import { Globe, Share2, Play, Mail } from 'lucide-react';

const cols = [
  { title: 'Soluções', links: ['Cirurgia Robótica', 'Diagnóstico por IA', 'Reabilitação', 'Cirurgia de Precisão', 'Plataforma de Dados'] },
  { title: 'Empresa', links: ['Sobre Nós', 'Equipa', 'Carreiras', 'Imprensa', 'Responsabilidade Social'] },
  { title: 'Recursos', links: ['Documentação Técnica', 'Estudos Clínicos', 'Formação', 'Blog', 'FAQ'] },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <a className={styles.logo} href="#">
            <span className={styles.dot} />
            Med<span>Robots</span>
          </a>
          <p>Pioneiros em robótica médica em Portugal. Tecnologia de precisão ao serviço da saúde.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn"><Globe size={18} /></a>
            <a href="#" aria-label="Twitter"><Share2 size={18} /></a>
            <a href="#" aria-label="YouTube"><Play size={18} /></a>
            <a href="mailto:info@medrobots.pt" aria-label="Email"><Mail size={18} /></a>
          </div>
          <div className={styles.certs}>
            <span>CE IIb</span>
            <span>ISO 13485</span>
            <span>FDA 510(k)</span>
          </div>
        </div>

        {cols.map(({ title, links }) => (
          <div key={title} className={styles.col}>
            <h4>{title}</h4>
            {links.map(l => <a key={l} href="#">{l}</a>)}
          </div>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© 2026 MedRobots, Lda. Todos os direitos reservados.</p>
        <div className={styles.legal}>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
