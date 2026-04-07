'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/components/equipo.module.css';

// 1. Definimos la interfaz para evitar errores de tipo "any"
interface Miembro {
  nombre: string;
  area: string;
  descripcion: string;
  imagen: string | null;
}

const equipo: Miembro[] = [
  {
    nombre: 'Dr. Alejandro Menicocci',
    area: 'Derecho Internacional y Litigio Transfronterizo',
    descripcion:
      'Especialista en resolución de conflictos complejos y asesoría legal para empresas con operaciones globales.',
    imagen: '/abogado1.jpg',
  },
  {
    nombre: 'Dr. Leonardo Rossi',
    area: 'Derecho Societario y Corporativo',
    descripcion:
      'Experto en fusiones, adquisiciones y estructuración legal de PyMEs con proyección nacional.',
    imagen: '/abogado2.jpg',
  },
  {
    nombre: 'Dra. María González',
    area: 'Derecho Laboral e Industrial',
    descripcion:
      'Asesoría estratégica en prevención de riesgos laborales y gestión de recursos humanos a gran escala.',
    imagen: '/abogado3.jpg',
  },
  {
    nombre: 'Dr. Roberto López',
    area: 'Derecho Civil y Sucesiones',
    descripcion:
      'Dedicado a la protección del patrimonio familiar y la resolución eficiente de sucesiones complejas.',
    imagen: '/abogado4.jpg',
  },
  {
    nombre: 'Dr. Carlos Pérez',
    area: 'Derecho Penal Económico',
    descripcion:
      'Consultor en compliance y defensa técnica en causas de delitos financieros y tributarios.',
    imagen: '/abogado5.jpg',
  },
  {
    nombre: 'Dr. Federico Martínez',
    area: 'Nuevas Tecnologías y Derecho IT',
    descripcion:
      'El miembro más joven del equipo, enfocado en asesorar startups, contratos de software y propiedad intelectual.',
    imagen: '/abogado6.jpg',
  },
];

const getInitials = (nombre: string): string => {
  const sinTitulo = nombre.replace(/^(Dr\.|Dra\.|Lic\.)\s+/i, '');
  const partes = sinTitulo.split(' ');
  if (partes.length >= 2) {
    return `${partes[0][0]}${partes[1][0]}`.toUpperCase();
  }
  return partes[0][0].toUpperCase();
};

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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Nuestro Equipo
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                {miembro.imagen ? (
                  <Image
                    src={miembro.imagen}
                    alt={miembro.nombre}
                    width={400}
                    height={400}
                    className={styles.image}
                    priority={index < 3} // Prioridad de carga para la primera fila
                  />
                ) : (
                  <div className={styles.avatarPlaceholder}>
                    <span>{getInitials(miembro.nombre)}</span>
                  </div>
                )}
              </div>
              <h3 className={styles.nombre}>{miembro.nombre}</h3>
              <p className={styles.area}>{miembro.area}</p>
              <p className={styles.descripcion}>{miembro.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
