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
    "Palabra",
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
    <section className="flex items-center justify-center px-11 py-8">
      <section className="w-full min-h-[90vh] bg-[#a282ef] text-white rounded-[64px] relative lg:px-36 flex items-center justify-between">
        <div className="copy">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <h2 className="text-7xl font-semibold">
            Gestiona tu talento <br /> como una gran <br /> corporación
          </h2>

          <div className="p-2 flex items-center w-full max-w-sm bg-purple-800 rounded-full my-11">
            <span className="bg-purple-200 rounded-full h-12 w-12 flex items-center justify-center">
              <Plus className="w-8 h-8 text-purple-800" />
            </span>

            <div className="ml-3 flex-1 overflow-hidden">
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
                    className="absolute inset-0 flex items-center text-sm font-medium text-purple-50 leading-6"
                  >
                    {phrases[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="text-2xl ">
            Impulsa el crecimiento de tu equipo con <br /> una plataforma HCM
            que integra la gestión <br /> de procesos y mejora la comunicación.
          </p>
        </div>

        <div className="formulario">
          <Card className="relative py-11 md:w-md px-8">
            <CardTitle className="bg-purple-200 absolute top-0 left-0 font-medium text-2xl">
              Solicitar demo gratuita
            </CardTitle>

            <div>
              <div>
                <Label>Nombre y Apellido</Label>

                <Input className="bg-gray-200 rounded-full py-4 px-2" />
              </div>
              <div>
                <Label>Email laboral</Label>

                <Input className="bg-gray-200 rounded-full py-4 px-2" />
              </div>
              <div>
                <Label>Industria</Label>

                <Input className="bg-gray-200 rounded-full py-4 px-2" />
              </div>
              <div>
                <Label>Pais</Label>

                <Input className="bg-gray-200 rounded-full py-4 px-2" />
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Label>Cantidad de Empleados</Label>

                  <Input className="bg-gray-200 rounded-full py-4 px-2" />
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

      <div className="absolute bottom-0 right-20 rounded-t-3xl bg-purple-800">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />

        <p>
          Calidad <br />
          World Class
        </p>
      </div>
    </section>
  );
}
