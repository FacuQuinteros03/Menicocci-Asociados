'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* //arreglo de logotipo */}
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setMenuOpen(false)}
        >
          <div className={styles.logoImg}>
            <Image
              src="/logotipo.png"
              alt="Menicocci & Asociados"
              width={55}
              height={50}
              priority
            />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoPrimary}>MENICOCCI</span>
            <span className={styles.logoSecondary}>& ASOCIADOS</span>
          </div>
        </Link>

        {/* BOTÓN MENÚ (MÓVIL) */}
        <button
          className={styles.menuButton}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LINKS ESCRITORIO */}
        <ul className={styles.linksDesktop}>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/equipo">Equipo</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>

        {/* OVERLAY MENÚ MÓVIL */}
        <div className={`${styles.overlay} ${menuOpen ? styles.show : ''}`}>
          <ul className={styles.overlayLinks}>
            <li>
              <Link href="/nosotros" onClick={() => setMenuOpen(false)}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" onClick={() => setMenuOpen(false)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/equipo" onClick={() => setMenuOpen(false)}>
                Equipo
              </Link>
            </li>
            <li>
              <Link href="/contacto" onClick={() => setMenuOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
