"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const leftNotifications = [
  "/Otros/Items de la foto final/Items foto 1 vacas.svg",
  "/Otros/Items de la foto final/Items foto 3 crear equipo.svg",
  "/Otros/Items de la foto final/Items foto 7 Reaccionar.svg",
  "/Otros/Items de la foto final/Items foto 8 Comentar.svg",
];

const rightNotifications = [
  "/Fotos/bubble4.jpg",
  "/Fotos/bubble5.jpg",
  "/Fotos/bubble6.jpg",
  "/Fotos/bubble7.jpg",
];

const notificationVariants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -40 : 40,
    y: 16,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
  exit: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -40 : 40,
    y: -8,
    scale: 0.98,
    transition: {
      duration: 0.35,
      ease: "easeIn",
    },
  }),
};

export default function TeamBanner() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const leftTimer = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftNotifications.length);
    }, 2600);

    const rightTimer = setInterval(() => {
      setRightIndex((prev) => (prev + 1) % rightNotifications.length);
    }, 3000);

    return () => {
      clearInterval(leftTimer);
      clearInterval(rightTimer);
    };
  }, []);

  return (
    <section className="flex items-center justify-center max-h-svh relative overflow-hidden">
      {/* Background photos */}
      <Image
        src="/Fotos/foto-mobile.jpg"
        alt="Foto de equipo"
        width={1000}
        height={1000}
        className="object-cover flex md:hidden w-full h-full"
      />
      <Image
        src="/Fotos/foto-web.jpg"
        alt="Foto de equipo"
        width={1000}
        height={1000}
        className="object-cover md:flex hidden w-screen h-full"
      />

      {/* Notification layers */}
      <section className="absolute z-40 top-0 left-0 w-screen h-full">
        <Image
          src="/Otros/items/vacas.svg"
          alt="Quippos Finnegans"
          width={700}
          height={700}
          className="object-cover max-w-max md:flex hidden h-40 absolute top-40 left-60"
        />

        <Image
          src="/Otros/items/equipo.svg"
          alt="Quippos Finnegans"
          width={700}
          height={700}
          className="object-cover max-w-max  md:flex hidden h-14 absolute top-96 left-24"
        />

        <div className="flex gap-4 max-w-max absolute bottom-32 left-[440px]">
          <Image
            src="/Otros/items/reaccionar.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex hidden h-10"
          />

          <Image
            src="/Otros/items/comentar.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex hidden h-10"
          />
        </div>

        <Image
          src="/Otros/items/cumple.svg"
          alt="Quippos Finnegans"
          width={700}
          height={700}
          className="object-cover aspect-auto max-w-max md:flex hidden h-14 absolute right-96 top-44 "
        />

        <section className="space-y-2 absolute right-60 top-80">
          <Image
            src="/Otros/items/recibo.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex hidden h-16"
          />
          <Image
            src="/Otros/items/firma.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex hidden h-16"
          />
          <Image
            src="/Otros/items/docu.svg"
            alt="Quippos Finnegans"
            width={700}
            height={700}
            className="object-cover aspect-auto max-w-max md:flex hidden h-16"
          />
        </section>
      </section>
    </section>
  );
}
