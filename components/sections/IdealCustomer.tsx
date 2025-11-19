"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IdealCustomer() {
  return (
    <section className="flex md:flex-row flex-col items-center min-h-svh justify-center md:justify-evenly bg-[#01102f] px-8 md:py-20 pb-20 md:pb-0 md:pt-8">
      <section className="w-full md:max-w-sm md:scale-125">
        <h3 className="text-white my-8 text-5xl font-medium relative left-6 md:left-0">
          <span className="text-[#ad7efc] relative mr-3">
            Ideal
            <DotLottieReact
              className=" absolute top-0 left-0 scale-[170%]"
              src="/Animaciones/trazo.lottie"
              loop
              autoplay
            />
          </span>{" "}
          para:
        </h3>

        <div className="relative md:max-w-sm">
          <div className="pointer-events-none absolute left-6 md:left-7 top-6 bottom-6 z-10">
            <div className="w-[3px] h-full bg-[#ad7efc]" />
          </div>

          <ul className="text-white px-4 flex flex-col gap-4 md:max-w-sm relative z-20">
            {/* 1 */}
            <li className="relative rounded-full bg-[#27067f] p-4 px-2 text-[13px] md:text-base font-medium">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute size-10 md:size-12 top-3 md:top-4 -left-3 z-20"
              >
                <Image
                  src="/Iconos/SVG/+.svg"
                  alt="Punto destacado"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </motion.div>
              <p className="ml-8 leading-tight">
                <span className="text-[#ad7efc]">Grandes empresas</span> que
                buscan <br /> reducir costos sin perder calidad
              </p>
            </li>

            {/* 2 */}
            <li className="relative rounded-full bg-[#27067f] p-4 px-2 text-[13px] md:text-base font-medium">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="absolute size-10 md:size-12 top-3 md:top-5 -left-3 z-20"
              >
                <Image
                  src="/Iconos/SVG/+.svg"
                  alt="Punto destacado"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </motion.div>
              <p className="ml-8 leading-tight">
                <span className="text-[#ad7efc]">
                  Pequeñas y Medianas <br /> empresas{" "}
                </span>
                que buscan escalar
              </p>
            </li>

            {/* 3 */}
            <li className="relative rounded-full bg-[#27067f] p-4 px-2 text-[13px] md:text-base font-medium">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="absolute size-10 md:size-12 top-3 md:top-4 -left-3 z-20"
              >
                <Image
                  src="/Iconos/SVG/+.svg"
                  alt="Punto destacado"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </motion.div>
              <p className="ml-8 whitespace-nowrap leading-tight">
                <span className="text-[#ad7efc]">Talentos individuales </span>{" "}
                que buscan <br /> crecer profesionalmente
              </p>
            </li>

            {/* 4 */}
            <li className="relative rounded-full bg-[#27067f] p-4 px-2 text-[13px] md:text-base font-medium">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="absolute size-10 md:size-12 top-3 md:top-4 -left-3 z-20"
              >
                <Image
                  src="/Iconos/SVG/+.svg"
                  alt="Punto destacado"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </motion.div>
              <p className="ml-8 leading-tight">
                <span className="text-[#ad7efc]">Equipos de RR.HH. </span> que
                buscan <br /> autonomía y trazabilidad
              </p>
            </li>
          </ul>
        </div>
      </section>

      <DotLottieReact
        className="px-2 w-xl pt-8 md:py-0 md:max-w-xl md:scale-200"
        src="/Animaciones/Animacion mano.lottie"
        loop
        autoplay
      />
    </section>
  );
}
