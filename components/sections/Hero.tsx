"use client";
import { useEffect, useState, type FormEvent } from "react";
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

  // 🆕 estado para el bubble de éxito
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500); // cambia cada 2.5s
    return () => clearInterval(id);
  }, []);

  // 🆕 handler de submit (no cambia layout, solo lógica)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // acá podrías hacer tu lógica real (fetch, etc.)
    // por ahora solo mostramos el bubble
    setShowBubble(true);
    // opcional: resetear el form
    e.currentTarget.reset();

    // ocultar bubble después de unos segundos
    setTimeout(() => {
      setShowBubble(false);
    }, 3000);
  };

  return (
    <section
      id="home"
      className="flex flex-col min-h-svh md:flex-row items-center justify-center px-4 md:px-11 py-8 relative bg-[#e8d8ff]"
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
      <section className="w-full min-h-[90vh] bg-[#a780f5] text-white rounded-4xl md:rounded-[64px] relative px-10 md:py-0 md:px-40 flex items-center justify-between flex-col md:flex-row pt-32 md:pt-0">
        <div className="copy w-full">
          <Image
            src="/quippos1.png"
            alt="Logo"
            className="hidden md:block object-contain w-full md:max-w-xl xl:max-w-md 2xl:max-w-2xl relative aspect-auto"
            width={1000}
            height={1000}
          />
          <h2 className="text-[26px] md:text-5xl 2xl:text-7xl font-semibold md:mt-8 leading-none">
            <span className="text-[#27067f] md:text-white">
              Gestioná tu <i>talento</i>
            </span>{" "}
            <br /> como una gran <br /> corporación
          </h2>

          <div className="md:p-2 px-1 py-1 flex items-center w-full md:max-w-md bg-[#9a69f9] rounded-full my-6 md:my-11">
            <span className="bg-[#27067f] rounded-full md:h-9 md:w-9 h-8 w-8  flex items-center justify-center">
              <Plus
                className="md:w-7 md:h-7 h-5 w-5 text-[#f0f0f0]"
                strokeWidth={3}
              />
            </span>

            <div className="ml-3 flex-1 overflow-hidden ">
              {/* “Ventana” fija del elevador */}
              <div className="relative md:h-8 h-6 overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.p
                    key={index} // clave distinta para que AnimatePresence detecte el cambio
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center text-base md:text-3xl md:pl-2 whitespace-nowrap font-medium text-purple-50 leading-6"
                  >
                    {phrases[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="text-xs whitespace-nowrap md:text-2xl leading-tight font-medium">
            Impulsá el crecimiento de tu equipo con <br /> una plataforma HCM
            que integra la gestión <br /> de procesos y mejora la comunicación.
          </p>
        </div>

        <div className="formulario mt-6 pb-10">
          <Card className="relative py-11 md:w-md px-6 outline-none border-none pb-4 rounded-4xl">
            <CardTitle className="bg-[#27067f] absolute top-0 left-0 font-medium text-sm px-4 rounded-br-full pr-6 md:rounded-br-3xl py-2 md:text-2xl text-white ">
              Solicitar demo gratuita
            </CardTitle>

            {/* 🆕 Form wrapper (no cambia clases internas, solo semántica + onSubmit) */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-1 md:space-y-4 mt-1 md:mt-8">
                <div className="space-y-1 md:space-y-2">
                  <Label className="whitespace-nowrap text-xs md:text-base">
                    Nombre y Apellido
                  </Label>

                  <Input className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <Label className="whitespace-nowrap text-xs md:text-base">
                    Email laboral
                  </Label>

                  <Input className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <Label className="whitespace-nowrap text-xs md:text-base">
                    Industria
                  </Label>

                  <Input className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <Label className="whitespace-nowrap text-xs md:text-base">
                    País
                  </Label>

                  <Input className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2" />
                </div>
                <div className="grid grid-cols-10 gap-2 place-items-center">
                  <div className="space-y-1 md:space-y-2 col-span-6 w-full">
                    <Label className="whitespace-nowrap text-xs md:text-base">
                      Cantidad de Empleados
                    </Label>

                    <Input className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2" />
                  </div>
                  <button
                    type="submit"
                    className="col-span-4 rounded-full cursor-pointer bg-[#e8d8ff] text-[#27067f] md:py-1 py-1 font-semibold px-1 md:px-2 max-h-max w-full flex items-center justify-between text-xs md:text-2xl md:pl-6 pl-2 relative top-2 md:top-4"
                  >
                    Enviar{" "}
                    <span className="bg-[#f0f0f0] rounded-full  md:h-6 md:w-6 grid place-items-center">
                      <ArrowRight color="#27067f" />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <motion.div
        className="absolute bottom-0 right-48 rounded-t-3xl bg-[#27067f] md:flex hidden py-6 px-4 pr-8"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/Iconos/SVG/membrete world class.svg"
          alt="Logo"
          width={100}
          height={100}
          className="md:h-14 2xl:h-16"
        />

        <p className="text-[#a780f5] md:text-xl 2xl:text-2xl font-medium">
          Calidad <br />
          World Class
        </p>
      </motion.div>

      {/* 🆕 Bubble flotante de confirmación (no afecta layout, es fixed) */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-[9999] bg-[#27067f] text-white rounded-2xl shadow-lg px-4 py-3 text-sm md:text-base flex items-center gap-2"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#a780f5] text-xs font-bold">
              ✓
            </span>
            <span>
              ¡Gracias! Recibimos tu solicitud de demo.{" "}
              <br className="hidden md:block" />
              Nos contactamos pronto ✨
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
