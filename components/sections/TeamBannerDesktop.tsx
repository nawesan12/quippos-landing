"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamBanner() {
  return (
    <section className="flex items-center justify-center max-h-svh relative overflow-hidden">
      {/* Background photos */}
      <Image
        src="/Fotos/foto-mobile.jpg"
        alt="Foto de equipo"
        width={1000}
        height={1000}
        className="object-cover flex md:hidden w-full h-full"
      />
      <Image
        src="/Fotos/foto-web.jpg"
        alt="Foto de equipo"
        width={1000}
        height={1000}
        className="object-contain md:flex hidden w-screen h-full"
      />
      {/* Notification layers */}
      <section className="absolute top-0 left-0 w-screen h-full">
        {/* Vacas */}
        <motion.div
          className="absolute md:top-36 md:left-48 2xl:top-40 2xl:left-60"
          initial={{ opacity: 0, x: -40, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/Otros/items/vacas.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover max-w-max md:flex md:h-32 2xl:h-40"
          />
        </motion.div>

        {/* Equipo */}
        <motion.div
          className="absolute md:top-80 md:left-20 2xl:top-96 2xl:left-24"
          initial={{ opacity: 0, x: -40, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <Image
            src="/Otros/items/equipo.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover max-w-max md:flex md:h-12 2xl:h-14"
          />
        </motion.div>

        {/* Reaccionar + Comentar */}
        <motion.div
          className="flex gap-4 max-w-max absolute md:bottom-28 md:left-96 2xl:bottom-32 2xl:left-[440px]"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <Image
            src="/Otros/items/reaccionar.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex md:h-8 2xl:h-10"
          />
          <Image
            src="/Otros/items/comentar.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex md:h-8 2xl:h-10"
          />
        </motion.div>

        {/* Cumple */}
        <motion.div
          className="absolute md:right-80 md:top-36 2xl:right-96 2xl:top-44"
          initial={{ opacity: 0, x: 40, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src="/Otros/items/cumple.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex  h-14"
          />
        </motion.div>

        {/* Recibo / Firma / Docu */}
        <motion.section
          className="space-y-2 absolute md:right-44 md:top-72 2xl:right-60 2xl:top-80"
          initial={{ opacity: 0, x: 40, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <Image
            src="/Otros/items/recibo.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex  h-16"
          />
          <Image
            src="/Otros/items/firma.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex  h-16"
          />
          <Image
            src="/Otros/items/docu.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex  h-16"
          />
        </motion.section>
      </section>
    </section>
  );
}
