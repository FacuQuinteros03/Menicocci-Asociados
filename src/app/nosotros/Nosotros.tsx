'use client';
import styles from '@/styles/components/nosotros.module.css';
import { Globe, Search, Shield, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: <Globe size={32} />,
    title: 'Visión global con impacto local',
    description:
      'Aplicamos estándares internacionales adaptados a las necesidades específicas del contexto regional.',
  },
  {
    icon: <Search size={32} />,
    title: 'Análisis interdisciplinario',
    description:
      'Abordamos cada caso desde múltiples perspectivas jurídicas para desarrollar estrategias integrales.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Anticipación de escenarios',
    description:
      'Nuestra experiencia nos permite prever posibles desarrollos y preparar respuestas adecuadas.',
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Actualización constante',
    description:
      'Mantenemos un compromiso permanente con la evolución del derecho internacional y sus aplicaciones prácticas.',
  },
];

export default function NosotrosPremium() {
  return (
    <section className={styles.nosotros}>
      {/* Contenedor principal */}
      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Título y subtítulos */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Menicocci & Asociados
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Prestigioso estudio jurídico con sede en Rosario, reconocido por su
          destacada trayectoria de más de 30 años. Brindamos asesoramiento legal
          de alto nivel a empresas y particulares, ofreciendo soluciones
          estratégicas y un enfoque integral en cada caso.
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Combinamos el rigor académico con la eficacia práctica para ofrecer
          soluciones jurídicas precisas y efectivas.
        </motion.p>

        {/* Cards con animación en cascada */}
        <div className={styles.highlights}>
          {cards.map((card, index) => (
            <motion.div
              className={styles.card}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className={styles.iconWrapper}
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 10,
                  delay: index * 0.2,
                }}
              >
                {card.icon}
              </motion.div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
