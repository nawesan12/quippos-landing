"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // ms
  startFactor?: number; // e.g. 0.85 -> empieza en 85% del valor final
};

function StatCounter({
  end,
  prefix = "+",
  suffix = "",
  duration = 700,
  startFactor = 0.85,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(end);

  useEffect(() => {
    if (!inView) return;

    const startRaw = Math.floor(end * startFactor);
    const start = Math.max(0, Math.min(startRaw, end - 1)); // aseguramos < end
    const diff = end - start;

    if (diff <= 0) {
      setValue(end);
      return;
    }

    const frameDuration = 30; // ms
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    setValue(start);

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic suave
      const current = start + diff * eased;

      if (frame >= totalFrames) {
        setValue(end);
        clearInterval(interval);
      } else {
        setValue(Math.round(current));
      }
    }, frameDuration);

    return () => clearInterval(interval);
  }, [inView, end, duration, startFactor]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export default function AboutFinnegans() {
  return (
    <section className="bg-[#8492fd] px-10">
      <motion.section
        className="flex justify-between flex-col md:flex-row w-full md:items-center md:max-w-6xl  py-11 md:py-0 mx-auto md:h-[90vh] "
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.section
          className="flex flex-row md:flex-col items-center justify-between md:items-start md:h-2/3"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-7xl text-white font-semibold ">
            Acerca de <br /> Finnegans
          </h2>
          <Image
            src="/Isotipo Blanco.svg"
            alt="Logo de Finnegans"
            width={200}
            height={200}
            className="h-11 max-w-max md:hidden flex"
          />

          <Image
            src="/Isotipo Blanco.svg"
            alt="Logo de Finnegans"
            width={200}
            height={200}
            className="h-24 max-w-max hidden md:flex relative -left-3"
          />
        </motion.section>

        <motion.section
          className="flex flex-col items-start justify-between md:max-w-xl md:h-2/3"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <p className="font-medium text-white text-[17px] md:text-[22px] md:mt-0 mt-8">
            Somos una empresa de software <br className="md:hidden block" />{" "}
            enfocada en <br className="hidden md:block" /> ofrecer soluciones{" "}
            <br className="md:hidden block" /> tecnologicas integrales para la
            <br className="hidden md:block" />
            gestión empresarial. <br /> <br /> Nuestra misión es igualar{" "}
            <br className="md:hidden block" /> oportunidades,
            <br className="hidden md:block" /> haciendo accesible la innovación
            tecnológica a<br className="hidden md:block" /> todo tipo de
            empresas, para que puedan
            <br className="hidden md:block" /> gestionar con la misma
            eficiencia, inteligencia y<br className="hidden md:block" /> calidad
            que los líderes globales.
          </p>

          <motion.div
            className="flex items-center justify-center gap-4 md:gap-6 px-2 bg-[#798cf8] rounded-3xl w-full md:mt-0 mt-8 text-white py-4"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl md:text-5xl font-medium">
                <StatCounter end={70} suffix="k" />
              </p>
              <p className="text-center text-sm">usuarios</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl md:text-5xl font-medium">
                <StatCounter end={7} suffix="k" />
              </p>
              <p className="text-center text-sm">empresas</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl md:text-5xl font-medium">
                <StatCounter end={15} />
              </p>
              <p className="text-center text-sm">paises</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl md:text-5xl font-medium">
                <StatCounter end={33} />
              </p>
              <p className="text-center text-sm">años</p>
            </div>
          </motion.div>
        </motion.section>
      </motion.section>
    </section>
  );
}
