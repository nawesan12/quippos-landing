"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS_STRIP = "/carrusel logos-clientes.png";

export default function PartnetsCarousel() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden py-6">
        {/* Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {/* Strip 1 */}
          <Image
            src={PARTNERS_STRIP}
            alt="Nuestros partners"
            width={1920}
            height={200}
            className="h-16 md:h-20 w-auto object-contain"
            priority
          />

          {/* Strip 2 (loop) */}
          <Image
            src={PARTNERS_STRIP}
            alt="Nuestros partners (loop)"
            width={1920}
            height={200}
            className="h-16 md:h-20 w-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
