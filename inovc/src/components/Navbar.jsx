import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Áreas', href: '/areas' },
  { label: 'Projeto', href: '/projeto' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Parceiros', href: '/parceiros' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={`container ${styles.inner}`}>
        <NavLink className={styles.logo} to="/">
          <span className={styles.logoDot} />
          IN<span>OVC</span>
        </NavLink>

        <nav className={styles.nav}>
          {navItems.map(({ label, href }) => (
            <NavLink key={href} to={href} className={styles.link}>{label}</NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <NavLink to="/contacto" className="btn btn-primary">Entrar em contacto</NavLink>
          <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map(({ label, href }) => (
              <NavLink key={href} to={href} className={styles.mobileLink} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <NavLink to="/contacto" className={`btn btn-primary ${styles.mobileBtn}`} onClick={() => setOpen(false)}>
              Entrar em contacto
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
