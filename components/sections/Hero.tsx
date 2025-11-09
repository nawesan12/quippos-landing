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
  const phrases = [
    "A una fraccion del costo",
    "Idea brillante",
    "Proyecto nuevo",
    "Sueño grande",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500); // cambia cada 2.5s
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-11 py-8 relative bg-[#e8d8ff]">
      <section className="bg-white absolute rounded-b-4xl top-0 left-0 z-10">
        <Image
          src="/Logos/icono quippos.svg"
          alt="Logo"
          className="hidden md:flex"
          width={100}
          height={100}
        />
      </section>
      <section className="w-full min-h-[90vh] bg-[#a780f5] text-white rounded-3xl md:rounded-[64px] relative px-6 md:py-0 md:px-36 flex items-center justify-between flex-col md:flex-row">
        <div className="copy">
          <Image
            src="/logo.png"
            alt="Logo"
            className="hidden md:flex"
            width={100}
            height={100}
          />
          <h2 className="text-4xl lg:text-7xl font-semibold">
            <span className="text-[#27067f]">
              Gestioná tu <i>talento</i>
            </span>{" "}
            <br /> como una gran <br /> corporación
          </h2>

          <div className="p-2 flex items-center w-full  md:max-w-sm bg-[#9a69f9] rounded-full my-6 md:my-11">
            <span className="bg-[#27067f] rounded-full h-8 w-8 flex items-center justify-center">
              <Plus className="w-6 h-6 text-[#f0f0f0]" />
            </span>

            <div className="ml-3 flex-1 overflow-hidden ">
              {/* “Ventana” fija del elevador */}
              <div className="relative h-6 overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.p
                    key={index} // clave distinta para que AnimatePresence detecte el cambio
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center text-xl font-medium text-purple-50 leading-6"
                  >
                    {phrases[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="text-md whitespace-nowrap">
            Impulsa el crecimiento de tu equipo con <br /> una plataforma HCM
            que integra la gestión <br /> de procesos y mejora la comunicación.
          </p>
        </div>

        <div className="formulario mt-6 pb-10">
          <Card className="relative py-11 md:w-md px-6 outline-none border-none pb-4">
            <CardTitle className="bg-[#27067f] absolute top-0 left-0 font-medium text-xl px-4 rounded-br-3xl py-2 md:text-2xl text-white">
              Solicitar demo gratuita
            </CardTitle>

            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Nombre y Apellido</Label>

                <Input className="bg-gray-200 rounded-full py-2 px-2" />
              </div>
              <div className="space-y-2">
                <Label>Email laboral</Label>

                <Input className="bg-gray-200 rounded-full py-2 px-2" />
              </div>
              <div className="space-y-2">
                <Label>Industria</Label>

                <Input className="bg-gray-200 rounded-full py-2 px-2" />
              </div>
              <div className="space-y-2">
                <Label>Pais</Label>

                <Input className="bg-gray-200 rounded-full py-2 px-2" />
              </div>
              <div className="flex items-center gap-2">
                <div className="space-y-2">
                  <Label>Cantidad de Empleados</Label>

                  <Input className="bg-gray-200 rounded-full py-2 px-2" />
                </div>
                <Button>
                  Enviar{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <div className="absolute bottom-0 right-20 rounded-t-3xl bg-purple-800 md:flex hidden">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />

        <p>
          Calidad <br />
          World Class
        </p>
      </div>
    </section>
  );
}
