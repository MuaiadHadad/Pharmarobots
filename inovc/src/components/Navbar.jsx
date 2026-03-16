import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#equipa', label: 'Equipa' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.topbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={`container ${styles.nav}`}>
        <a className={styles.logo} href="#">INOV<span>C</span></a>

        <nav className={styles.desktopNav}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} className={styles.navLink}>{label}</a>
          ))}
        </nav>

        <div className={styles.navActions}>
          <button className="btn btn-outline">Entrar</button>
          <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
