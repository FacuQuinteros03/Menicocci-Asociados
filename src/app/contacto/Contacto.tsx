'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/components/contacto.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contacto() {
  return (
    <section className={styles.contacto} id="contacto">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Título */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contáctenos
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Estamos a su disposición para consultas y asesoramiento legal.
        </motion.p>

        <div className={styles.grid}>
          {/* Información y formulario */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Envía tu consulta</h2>

            <form className={styles.form}>
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="tel" placeholder="Teléfono" required />
              <textarea placeholder="Consulta" required />
              <button type="submit">Enviar mensaje</button>
            </form>
          </motion.div>

          {/* Mapa */}
          <motion.div
            className={styles.mapa}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.757982032094!2d-60.64290502360706!3d-32.944661973454946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1b0a52e747%3A0x38e8a587b8b9a4a4!2sEspaña%20728%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1731520000000!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
