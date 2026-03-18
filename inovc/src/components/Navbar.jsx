import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'UltraBot', href: '/#ultrabot' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'The Company', href: '/#company' },
  { label: 'Contacts', href: '/#contacts' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="/" aria-label="Ir para a página inicial">
          <img src="/logo.png" alt="INOVC" className={styles.logoImage} />
        </a>

        <nav className={styles.nav}>
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className={styles.link}>{label}</a>
          ))}
        </nav>

        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
