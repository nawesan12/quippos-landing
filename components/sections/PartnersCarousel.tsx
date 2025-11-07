"use client";

import { motion } from "framer-motion";

// Podés cambiar estas rutas por tus logos reales
const brands = [
  { name: "Brand 1", logo: "/logos/brand1.svg" },
  { name: "Brand 2", logo: "/logos/brand2.svg" },
  { name: "Brand 3", logo: "/logos/brand3.svg" },
  { name: "Brand 4", logo: "/logos/brand4.svg" },
  { name: "Brand 5", logo: "/logos/brand5.svg" },
];

export default function PartnetsCarousel() {
  // Duplicamos el array para lograr el efecto infinito
  const loopBrands = [...brands, ...brands];

  return (
    <section className="w-full py-8">
      <div className="mx-auto w-full">
        <div className="relative overflow-hidden px-4 py-4">
          {/* Fades en los costados para efecto más prolijo */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent" />

          <motion.div
            className="flex items-center gap-12"
            // Recorré de 0 a -50% porque tenemos el array duplicado
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20, // más grande = más lento
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopBrands.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex min-w-[120px] items-center justify-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                {/* Si usás Next/Image podés reemplazar por <Image .../> */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
