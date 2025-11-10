"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="bg-[#01102f] ">
      <section className="flex items-center justify-around md:flex-row flex-col w-full py-20 md:pt-28 md:max-w-7xl mx-auto">
        <section className="rounded-4xl border-2 border-white max-w-xs md:scale-125">
          <Image
            src="/Logos/logo finnni.svg"
            alt="Logo Finní"
            width={200}
            height={200}
            className="mx-auto py-8"
          />

          <motion.div
            className="estampilla bg-cover bg-no-repeat bg-center relative bg-white py-8 flex flex-col gap-4 px-8"
            initial={{ rotate: 0 }}
            whileInView={{ rotate: -6 }}
            transition={{
              delay: 1, // wait 1 second after appearing in viewport
              duration: 0.6, // smooth, short tilt
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.5 }} // trigger once when 50% visible
          >
            <h3 className="bg-[#ff4131] text-[#faf5f2] rounded-full py-2 px-6 text-2xl font-semibold max-w-max relative -left-15">
              Nuestra IA
            </h3>

            <p className="font-medium">
              Diseñada para liberar a tu equipo de lo operativo, <br />
              impulsando su evolución profesional y el desarrollo
              <br />
              de nuevas competencias que los llevan más lejos.
            </p>
          </motion.div>
        </section>

        <section className="list-of-features flex flex-col gap-4 text-white px-6 mt-12 md:mt-0 md:scale-[140%]">
          <article className="p-px rounded-2xl bg-gradient-to-r from-[#ff4131] to-transparent">
            <div className="rounded-2xl bg-[#551b30] hover:brightness-125  transition  flex items-center gap-4 p-4 px-6">
              <Image
                src="/Iconos/SVG/flecha2.svg"
                alt="Feature 1"
                width={100}
                height={100}
                className="h-10 w-10 object-contain"
              />

              <p className="font-medium whitespace-nowrap text-sm">
                Automatizacion{" "}
                <span className="italic text-red-600">sin codigo</span>
                <br /> de procesos repetitivos.
              </p>
            </div>
          </article>

          <article className="p-px rounded-2xl bg-gradient-to-r from-[#ff4131] to-transparent">
            <div className="rounded-2xl bg-[#551b30] hover:brightness-125  transition  flex items-center gap-4 p-4 px-6">
              <Image
                src="/Iconos/SVG/chat2.svg"
                alt="Feature 1"
                width={100}
                height={100}
                className="h-10 w-10 object-contain"
              />

              <p className="font-medium whitespace-nowrap text-sm">
                Asistente{" "}
                <span className="italic text-red-600">conversacional</span>
                <br /> para RRHH y colaboradores
              </p>
            </div>
          </article>

          <article className="p-px rounded-2xl bg-gradient-to-r from-[#ff4131] to-transparent">
            <div className="rounded-2xl bg-[#551b30] hover:brightness-125  transition  flex items-center gap-4 p-4 px-6">
              <Image
                src="/Iconos/SVG/destello2.svg"
                alt="Feature 1"
                width={100}
                height={100}
                className="h-10 w-10 object-contain"
              />

              <p className="font-medium whitespace-nowrap text-sm">
                Mejora la experiencia digital: <br />
                <span className="italic text-red-600">
                  Respuestas rapidas y guiadas
                </span>
              </p>
            </div>
          </article>

          <article className="p-px rounded-2xl bg-gradient-to-r from-[#ff4131] to-transparent">
            <div className="rounded-2xl bg-[#551b30] hover:brightness-125  transition  flex items-center gap-4 p-4 px-6">
              <Image
                src="/Iconos/SVG/lapiz2.svg"
                alt="Feature 1"
                width={100}
                height={100}
                className="h-10 w-10 object-contain"
              />

              <p className="font-medium whitespace-nowrap text-sm">
                Diseño de{" "}
                <span className="italic text-red-600">procesos a medida</span>
              </p>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
}
