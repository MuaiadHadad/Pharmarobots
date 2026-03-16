import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import { Globe, Share2, Play, Mail } from 'lucide-react';

const cols = [
  { title: 'Projeto', links: [
    { label: 'Missão', to: '/projeto' },
    { label: 'Áreas de atuação', to: '/areas' },
    { label: 'Parcerias', to: '/parceiros' },
    { label: 'Impacto regional', to: '/projeto' },
    { label: 'Transferência de conhecimento', to: '/sobre' },
  ] },
  { title: 'Iniciativas', links: [
    { label: 'Capacitação', to: '/areas' },
    { label: 'Empreendedorismo', to: '/areas' },
    { label: 'Workshops', to: '/sobre' },
    { label: 'Eventos', to: '/sobre' },
    { label: 'Boas práticas', to: '/projeto' },
  ] },
  { title: 'Recursos', links: [
    { label: 'Notícias', to: '/sobre' },
    { label: 'Agenda', to: '/sobre' },
    { label: 'Documentos', to: '/projeto' },
    { label: 'FAQ', to: '/contacto' },
    { label: 'Contactos', to: '/contacto' },
  ] },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <NavLink className={styles.logo} to="/">
            <span className={styles.dot} />
            IN<span>OVC</span>
          </NavLink>
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
            {links.map(({ label, to }) => <NavLink key={label} to={to}>{label}</NavLink>)}
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
