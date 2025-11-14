'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/components/equipo.module.css';

const equipo = [
  {
    nombre: 'Dr. Alejandro Menicocci',
    area: 'Derecho Internacional y Litigio Transfronterizo',
    imagen: '/abogado.jpg',
  },
  {
    nombre: 'Dr. Leonardo Menicocci',
    area: 'Derecho Empresarial',
    imagen: '/abogado.jpg',
  },
  {
    nombre: 'Lic. Juan López',
    area: 'Derecho Laboral Internacional',
    imagen: '/abogado.jpg',
  },
  {
    nombre: 'Dra. María González',
    area: 'Derecho Civil y Familia',
    imagen: '/abogado.jpg',
  },
  {
    nombre: 'Dr. Carlos Pérez',
    area: 'Derecho Penal Económico',
    imagen: '/abogado.jpg',
  },
  {
    nombre: 'Lic. Ana Torres',
    area: 'Derecho Ambiental',
    imagen: '/abogado.jpg',
  },
];

export default function Equipo() {
  return (
    <section className={styles.equipo}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Nuestro Equipo
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Profesionales altamente calificados que combinan experiencia práctica
          con conocimiento académico.
        </motion.p>

        <div className={styles.cards}>
          {equipo.map((miembro, index) => (
            <motion.div
              className={styles.card}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  width={400}
                  height={400}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.nombre}>{miembro.nombre}</h3>
              <p className={styles.area}>{miembro.area}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
