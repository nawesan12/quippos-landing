"use client";
import { useEffect, useState } from "react";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: {
    y: "100%",
    opacity: 0,
  },
  center: {
    y: "0%",
    opacity: 1,
  },
  exit: {
    y: "-100%",
    opacity: 0,
  },
};

export default function Hero() {
  const phrases = ["Con tu cultura", "A tu escala", "A una fracción del costo"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500); // cambia cada 2.5s
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-11 py-8 relative bg-[#e8d8ff]"
    >
      <section className="bg-white absolute rounded-b-4xl top-0 left-10 z-40 md:hidden block p-4 pt-14">
        <Image
          src="/Logos/quippos2.svg"
          alt="Logo"
          className="flex md:hidden max-w-40"
          width={1000}
          height={1000}
        />
      </section>
      <section className="w-full min-h-[90vh] bg-[#a780f5] text-white rounded-4xl md:rounded-[64px] relative px-6 md:py-0 md:px-40 flex items-center justify-between flex-col md:flex-row pt-32 md:pt-0">
        <div className="copy">
          <Image
            src="/quippos1.png"
            alt="Logo"
            className="hidden md:block object-contain w-full max-w-2xl relative aspect-auto"
            width={1000}
            height={1000}
          />
          <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold mt-8">
            <span className="text-[#27067f] md:text-white">
              Gestioná tu <i>talento</i>
            </span>{" "}
            <br /> como una gran <br /> corporación
          </h2>

          <div className="p-2 flex items-center w-full md:max-w-md bg-[#9a69f9] rounded-full my-6 md:my-11">
            <span className="bg-[#27067f] rounded-full h-9 w-9 flex items-center justify-center">
              <Plus className="w-7 h-7 text-[#f0f0f0]" strokeWidth={3} />
            </span>

            <div className="ml-3 flex-1 overflow-hidden ">
              {/* “Ventana” fija del elevador */}
              <div className="relative h-8 overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.p
                    key={index} // clave distinta para que AnimatePresence detecte el cambio
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center text-xl md:text-3xl md:pl-2 whitespace-nowrap font-medium text-purple-50 leading-6"
                  >
                    {phrases[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="text-sm whitespace-nowrap md:text-2xl md:leading-tight font-medium">
            Impulsa el crecimiento de tu equipo con <br /> una plataforma HCM
            que integra la gestión <br /> de procesos y mejora la comunicación.
          </p>
        </div>

        <div className="formulario mt-6 pb-10">
          <Card className="relative py-11 md:w-md px-6 outline-none border-none pb-4 rounded-4xl">
            <CardTitle className="bg-[#27067f] absolute top-0 left-0 font-medium text-xl px-4 rounded-br-3xl py-2 md:text-2xl text-white ">
              Solicitar demo gratuita
            </CardTitle>

            <div className="space-y-4 mt-8">
              <div className="space-y-2">
                <Label className="whitespace-nowrap text-xs md:text-base">
                  Nombre y Apellido
                </Label>

                <Input className="bg-[#f0f0f0] rounded-full py-2 px-2" />
              </div>
              <div className="space-y-2">
                <Label className="whitespace-nowrap text-xs md:text-base">
                  Email laboral
                </Label>

                <Input className="bg-[#f0f0f0] rounded-full py-2 px-2" />
              </div>
              <div className="space-y-2">
                <Label className="whitespace-nowrap text-xs md:text-base">
                  Industria
                </Label>

                <Input className="bg-[#f0f0f0] rounded-full py-2 px-2" />
              </div>
              <div className="space-y-2">
                <Label className="whitespace-nowrap text-xs md:text-base">
                  Pais
                </Label>

                <Input className="bg-[#f0f0f0] rounded-full py-2 px-2" />
              </div>
              <div className="grid grid-cols-10 gap-2 place-items-center">
                <div className="space-y-2 col-span-6 w-full">
                  <Label className="whitespace-nowrap text-xs md:text-base">
                    Cantidad de Empleados
                  </Label>

                  <Input className="bg-[#f0f0f0] rounded-full py-2 px-2" />
                </div>
                <button className="col-span-4 rounded-full bg-[#e8d8ff] text-[#27067f] md:py-1 py-2 font-semibold px-2 max-h-max w-full flex items-center justify-between text-base md:text-2xl md:pl-6 pl-2 relative top-2 md:top-4">
                  Enviar{" "}
                  <span className="bg-[#f0f0f0] rounded-full h-6 w-6 grid place-items-center">
                    <ArrowRight color="#27067f" />
                  </span>
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <div className="absolute bottom-0 right-48 rounded-t-3xl bg-[#27067f] md:flex hidden py-6 px-4 pr-8">
        <Image
          src="/Iconos/SVG/membrete world class.svg"
          alt="Logo"
          width={100}
          height={100}
          className="h-16"
        />

        <p className="text-[#a780f5] text-2xl font-medium">
          Calidad <br />
          World Class
        </p>
      </div>
    </section>
  );
}
