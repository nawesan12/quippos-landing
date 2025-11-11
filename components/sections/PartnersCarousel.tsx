"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS_STRIP = "/carrusel logos-clientes.png";

export default function PartnetsCarousel() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full">
        <div className="relative overflow-hidden px-0 py-6">
          {/* Optional fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Imagen 1 */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <Image
                src={PARTNERS_STRIP}
                alt="Nuestros partners"
                width={1920}
                height={200}
                className="h-auto object-cover
                  w-[400vw] md:w-screen" // 👈 clave: más ancho en mobile
                priority
              />
            </div>

            {/* Imagen 2 (loop) */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <Image
                src={PARTNERS_STRIP}
                alt="Nuestros partners (loop)"
                width={1920}
                height={200}
                className="h-auto object-cover
                  w-[400vw] md:w-screen"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
