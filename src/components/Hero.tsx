'use client';
import Image from 'next/image';
import styles from '@/styles/components/hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className={styles.title}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Servicios Juridicos<span> y Notariales</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Menicocci & Asociados ofrece asesoramiento legal de alto nivel,
          combinando experiencia práctica con un profundo conocimiento
          académico.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="/nosotros" className={styles.buttonPrimary}>
            Conózcanos
          </a>
          <a href="/contacto" className={styles.buttonSecondary}>
            Contáctenos
          </a>
        </motion.div>
      </motion.div>

      <div className={styles.imageWrapper}>
        <Image
          src="/hero-office.jpg"
          alt="Estudio jurídico Menicocci & Asociados"
          fill
          priority
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
