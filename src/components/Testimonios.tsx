'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/components/testimonios.module.css';

const testimonios = [
  {
    nombre: 'Francisco Iturraspe',
    texto:
      'Excelente estudio jurídico notarial. Muy profesionales y atentos en cada detalle.',
  },
  {
    nombre: 'Daniel Gomez',
    texto:
      'Uno de los mejores estudios jurídicos y notariales de Rosario. Seriedad y compromiso.',
  },
  {
    nombre: 'Ysabel Walczuk',
    texto:
      'Profesionales con ética, responsabilidad y calidez humana. Escuchan con respeto y siempre buscan la mejor solución.',
  },
  {
    nombre: 'Lucía Fernández',
    texto:
      'Excelente atención. Me asesoraron en un caso complejo y resolvieron todo con rapidez y transparencia.',
  },
  {
    nombre: 'Martín Rivas',
    texto:
      'Un equipo impecable. Desde la primera consulta me brindaron confianza y resultados concretos.',
  },
];

export default function Testimonios() {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [pausedX, setPausedX] = useState(0);

  const getDuration = () => {
    if (window.innerWidth <= 480) return 15;
    if (window.innerWidth <= 768) return 25;
    if (window.innerWidth <= 1024) return 35;
    return 40;
  };

  const startAnimation = async (fromX = 0) => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth;
    const targetX = -trackWidth / 2; // se mueve hasta la mitad del track (duplicado)

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
    startAnimation();
    const handleResize = () => startAnimation();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pausa: guarda posición actual y detiene
  const handlePause = () => {
    if (!trackRef.current) return;
    const transform = getComputedStyle(trackRef.current).transform;
    if (transform && transform !== 'none') {
      const matrix = new DOMMatrix(transform);
      setPausedX(matrix.m41); // desplazamiento actual (en px)
    }
    controls.stop();
  };

  // Reanuda desde donde quedó
  const handleResume = () => {
    startAnimation(pausedX);
  };

  return (
    <section className={styles.testimonios}>
      <h2 className={styles.title}>Opiniones de nuestros clientes</h2>

      <div
        className={styles.slider}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onTouchStart={handlePause}
        onTouchEnd={handleResume}
      >
        <motion.div ref={trackRef} className={styles.track} animate={controls}>
          {[...testimonios, ...testimonios].map((t, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.text}>"{t.texto}"</p>
              <span className={styles.nombre}>— {t.nombre}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
