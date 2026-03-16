import styles from './Footer.module.css';
import { Globe, Share2, Play, Mail } from 'lucide-react';

const cols = [
  { title: 'Projeto', links: ['Missão', 'Áreas de atuação', 'Parcerias', 'Impacto regional', 'Transferência de conhecimento'] },
  { title: 'Iniciativas', links: ['Capacitação', 'Empreendedorismo', 'Workshops', 'Eventos', 'Boas práticas'] },
  { title: 'Recursos', links: ['Notícias', 'Agenda', 'Documentos', 'FAQ', 'Contactos'] },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <a className={styles.logo} href="#">
            <span className={styles.dot} />
            IN<span>OVC</span>
          </a>
          <p>Ecossistema colaborativo para valorização do conhecimento, inovação e desenvolvimento regional.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Website"><Globe size={18} /></a>
            <a href="#" aria-label="Redes"><Share2 size={18} /></a>
            <a href="#" aria-label="Vídeos"><Play size={18} /></a>
            <a href="mailto:inovc@esenfc.pt" aria-label="Email"><Mail size={18} /></a>
          </div>
          <div className={styles.certs}>
            <span>Inovação</span>
            <span>Conhecimento</span>
            <span>Região Centro</span>
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
        <p>© 2026 INOVC. Todos os direitos reservados.</p>
        <div className={styles.legal}>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Utilização</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
