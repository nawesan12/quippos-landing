"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const stampRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: stampRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <section className="bg-[#01102f] pt-20 md:pt-0 pb-20 md:pb-0">
      <section className="flex items-center justify-around md:flex-row  min-h-svh flex-col w-full  md:pt-28 md:max-w-7xl mx-auto">
        <section className="rounded-4xl border-2 border-white max-w-2xs  md:max-w-xs md:scale-125">
          <Image
            src="/Logos/logo finnni.svg"
            alt="Logo Finní"
            width={220}
            height={220}
            className="mx-auto py-8"
          />

          <motion.div
            ref={stampRef}
            className="estampilla bg-no-repeat bg-center relative bg-[url('/hojita-finni-derecha.png')] bg-contain py-8 flex flex-col gap-4 px-6 md:px-10 md:scale-[111%] md:relative  -left-1"
            style={{ rotate }}
          >
            <h3 className="bg-[#ff4131] text-[#faf5f2] rounded-full py-2 px-6 text-2xl font-semibold max-w-max relative -left-15">
              Nuestra IA
            </h3>

            <p className="font-medium text-sm md:text-base leading-tight pb-4 md:pb-0">
              Diseñada para liberar a tu equipo de lo operativo, <br />
              impulsando su evolución profesional y el desarrollo
              <br />
              de nuevas competencias que los llevan más lejos.
            </p>
          </motion.div>
        </section>

        <section className="list-of-features flex flex-col gap-4 text-white px-6 mt-12 md:mt-0 scale-95 md:scale-[140%]">
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
                Automatización{" "}
                <span className="italic text-[#ff4131]">sin código</span>
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
                <span className="italic text-[#ff4131]">conversacional</span>
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
                <span className="italic text-[#ff4131]">
                  Respuestas rápidas y guiadas
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
                <span className="italic text-[#ff4131]">procesos a medida</span>
              </p>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
}
