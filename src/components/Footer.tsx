'use client';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from '@/styles/components/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Información del estudio */}
        <div className={styles.info}>
          <p className={styles.name}>Menicocci & Asociados</p>
          <div className={styles.contact}>
            <p>
              <MapPin size={16} /> España 728 · Rosario, Argentina
            </p>
            <p>
              <Phone size={16} /> +54 341 456-7890
            </p>
            <p>
              <Mail size={16} /> contacto@menicocciyasociados.com
            </p>
          </div>
        </div>

        {/* Derechos */}
        <div className={styles.rights}>
          <p>
            © {new Date().getFullYear()} Menicocci & Asociados. Todos los
            derechos reservados.
          </p>
          <p className={styles.credit}>Diseñado por Facundo Quinteros</p>
        </div>
      </div>
    </footer>
  );
}
