"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS_STRIP = "/carrusel logos-clientes.svg"; // 👉 tu imagen ancha acá

export default function PartnetsCarousel() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full">
        <div className="relative overflow-hidden px-0 py-4">
          {/* Optional: fades en los costados */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30, // más grande = más lento
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Imagen 1 */}
            <div className="w-full flex-shrink-0">
              <Image
                src={PARTNERS_STRIP}
                alt="Nuestros partners"
                width={1920}
                height={200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Imagen 2 (misma imagen para loop infinito) */}
            <div className="w-full flex-shrink-0">
              <Image
                src={PARTNERS_STRIP}
                alt="Nuestros partners (loop)"
                width={1920}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
