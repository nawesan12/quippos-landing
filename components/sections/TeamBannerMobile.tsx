"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamBannerMobile() {
  return (
    <section className="flex items-center justify-center max-h-svh  relative overflow-hidden md:hidden">
      {/* Background photos */}
      <Image
        src="/Fotos/foto-mobile.jpg"
        alt="Foto de equipo"
        width={1000}
        height={1000}
        className="object-cover flex md:hidden w-full h-full"
      />

      {/* Notification layers */}
      <section className="absolute top-0 left-0 w-screen h-full">
        {/* Vacas */}
        <motion.div
          className="absolute top-22 right-2"
          initial={{ opacity: 0, x: -40, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/Otros/items/vacas.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-contain max-w-max h-36"
          />
        </motion.div>

        {/* Equipo */}
        <motion.div
          className="absolute top-16 left-1"
          initial={{ opacity: 0, x: -40, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <Image
            src="/Otros/items/equipo.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-contain max-w-max h-40"
          />
        </motion.div>

        {/* Reaccionar + Comentar */}
        <motion.div
          className="flex gap-7 max-w-max absolute bottom-16 left-6"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <Image
            src="/Otros/items/reaccionar.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-contain aspect-auto max-w-max w-40 overflow-hidden"
          />
          <Image
            src="/Otros/items/comentar.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-contain aspect-auto max-w-max w-40 overflow-hidden"
          />
        </motion.div>

        {/* Cumple */}
        <motion.div
          className="absolute bottom-32 right-4"
          initial={{ opacity: 0, x: 40, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src="/Otros/items/cumple.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max w-44"
          />
        </motion.div>

        {/* Recibo / Firma / Docu */}
        <motion.section
          className="space-y-1 absolute bottom-32 left-6"
          initial={{ opacity: 0, x: 40, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <Image
            src="/Otros/items/recibo.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max w-40"
          />
          <Image
            src="/Otros/items/firma.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max w-40"
          />
          <Image
            src="/Otros/items/docu.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max w-40"
          />
        </motion.section>
      </section>
    </section>
  );
}
