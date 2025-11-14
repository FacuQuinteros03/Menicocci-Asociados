'use client';
import { Globe, Briefcase, Users, FileText, Check, File } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '@/styles/components/servicios.module.css';

const servicios = [
  // Internacionales
  {
    area: 'Derecho Internacional Privado',
    icon: <Globe size={28} />,
    type: 'internacional',
    items: [
      'Contratos internacionales',
      'Inversiones extranjeras',
      'Legislación aplicable a operaciones transnacionales',
      'Reconocimiento y ejecución de sentencias extranjeras',
      'Regulación de comercio internacional',
    ],
  },
  {
    area: 'Litigio Internacional',
    icon: <Briefcase size={28} />,
    type: 'internacional',
    items: [
      'Representación en disputas transfronterizas',
      'Arbitraje comercial internacional',
      'Mediación en conflictos internacionales',
      'Jurisdicción y competencia internacional',
      'Cooperación jurídica internacional',
    ],
  },
  {
    area: 'Derecho Empresarial',
    icon: <Users size={28} />,
    type: 'internacional',
    items: [
      'Constitución y desarrollo de empresas con proyección internacional',
      'Fusiones y adquisiciones transfronterizas',
      'Compliance internacional',
      'Protección de inversiones extranjeras',
      'Regulación de comercio exterior',
    ],
  },
  // Nacionales
  {
    area: 'Derecho Laboral',
    icon: <FileText size={28} />,
    type: 'nacional',
    items: [
      'Contratos de trabajo nacionales',
      'Traslados y movilidad laboral',
      'Seguridad social y beneficios',
      'Resolución de conflictos laborales',
      'Normas laborales locales',
    ],
  },
  // Notariales
  {
    area: 'Servicios Notariales',
    icon: <File size={28} />,
    type: 'notarial',
    items: [
      'Escritura de contratos y sociedades',
      'Certificaciones notariales',
      'Testamentos y sucesiones',
      'Asesoramiento patrimonial',
      'Trámites notariales varios',
    ],
  },
  // Diferenciales
  {
    area: 'Servicios Diferenciales',
    icon: <Check size={28} />,
    type: 'diferencial',
    items: [
      'Experiencia en arbitraje internacional',
      'Conocimiento académico de vanguardia',
      'Red de contactos internacionales',
      'Enfoque personalizado',
    ],
  },
];

export default function Servicios() {
  return (
    <section className={styles.servicios}>
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
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Servicios
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Brindamos soluciones legales integrales, adaptadas a cada cliente y
          con experiencia nacional e internacional.
        </motion.p>

        <div className={styles.cards}>
          {servicios.map((serv, index) => (
            <motion.div
              className={`${styles.card} ${styles[serv.type]}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.icon}>{serv.icon}</div>
              <h3>{serv.area}</h3>
              <ul>
                {serv.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a href="/equipo" className={styles.buttonPrimary}>
            Consulte con nuestros especialistas
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
