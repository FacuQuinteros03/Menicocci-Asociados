'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ChevronsLeftRight } from 'lucide-react'; // Icono sutil de scroll horizontal
import styles from '@/styles/components/testimonios.module.css';

const testimonios = [
  {
    nombre: 'Francisco Iturraspe',
    texto:
      'Excelente estudio jurídico notarial. Muy profesionales y atentos...',
  },
  {
    nombre: 'Daniel Gomez',
    texto:
      'Uno de los mejores estudios jurídicos y notariales de Rosario. Seriedad...',
  },
  {
    nombre: 'Ysabel Walczuk',
    texto: 'Profesionales con ética, responsabilidad y calidez humana...',
  },
  {
    nombre: 'Lucía Fernández',
    texto: 'Excelente atención. Me asesoraron en un caso complejo...',
  },
  {
    nombre: 'Martín Rivas',
    texto: 'Un equipo impecable. Desde la primera consulta...',
  },
];

export default function Testimonios() {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [pausedX, setPausedX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const getDuration = () => {
    if (window.innerWidth <= 1024) return 30;
    return 40;
  };

  const startAnimation = async (fromX = 0) => {
    if (!trackRef.current || window.innerWidth <= 768) return;

    const trackWidth = trackRef.current.scrollWidth;
    const targetX = -trackWidth / 2;

    await controls.start({
      x: [fromX, targetX],
      transition: {
        repeat: Infinity,
        duration: getDuration(),
        ease: 'linear',
      },
    });
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        controls.stop();
      } else {
        startAnimation();
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [controls]);

  const handlePause = () => {
    if (!trackRef.current || isMobile) return;
    const transform = getComputedStyle(trackRef.current).transform;
    if (transform && transform !== 'none') {
      const matrix = new DOMMatrix(transform);
      setPausedX(matrix.m41);
    }
    controls.stop();
  };

  const handleResume = () => {
    if (isMobile) return;
    startAnimation(pausedX);
  };

  return (
    <section className={styles.testimonios}>
      <h2 className={styles.title}>Opiniones de nuestros clientes</h2>

      <div
        className={`${styles.slider} ${isMobile ? styles.mobileScroll : ''}`}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        <motion.div
          ref={trackRef}
          className={styles.track}
          animate={isMobile ? { x: 0 } : controls}
        >
          {/* Duplicamos los testimonios solo para el loop de desktop */}
          {(isMobile ? testimonios : [...testimonios, ...testimonios]).map(
            (t, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.text}>"{t.texto}"</p>
                <span className={styles.nombre}>— {t.nombre}</span>
              </div>
            ),
          )}
        </motion.div>
      </div>

      {/* ICONO DE SCROLL SUTIL (Solo en móviles) */}
      {isMobile && (
        <div className={styles.scrollIconWrapper}>
          <ChevronsLeftRight size={20} className={styles.scrollIcon} />
          <span>Deslizá para ver más</span>
        </div>
      )}
    </section>
  );
}
