"use client";

import { useRef, useState, UIEvent } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    icon: "/Iconos/SVG/mouse1.svg",
    titulo: "100% \n Configurable",
    descripcion: "Hace que el sistema se \n adapte a tu forma de trabajar.",
  },
  {
    id: 2,
    icon: "/Iconos/SVG/destello1.svg",
    titulo: "IA+ \n No Code",
    descripcion:
      "Automatiza tus tareas y procesos con inteligencia artificial.",
  },
  {
    id: 3,
    icon: "/Iconos/SVG/flecha1.svg",
    titulo: "Portal de \n Autogestion",
    descripcion:
      "Centraliza la informacion y \n tramites de tus colaboradores.",
  },
  {
    id: 4,
    icon: "/Iconos/SVG/trueno1.svg",
    titulo: "Liquidacion \n Automatica",
    descripcion: "Genera y distribui recibos \n en segundos, sin errores.",
  },
  {
    id: 5,
    icon: "/Iconos/SVG/carpeta1.svg",
    titulo: "Integracion \n Total",
    descripcion:
      "Conecta el sistema \n con cualquier ERP o \n herramienta del mercado.",
  },
  {
    id: 6,
    icon: "/Iconos/SVG/reloj1.svg",
    titulo: "Implementación \n Express",
    descripcion: "Pasa del inicio \n al uso real en semanas.",
  },
];

export default function Descriptions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const { scrollLeft, offsetWidth } = container;

    if (!offsetWidth) return;

    const index = Math.round(scrollLeft / offsetWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const { offsetWidth } = container;

    container.scrollTo({
      left: index * offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#27067f] py-12 md:hidden block">
      <div className="mx-auto flex w-full  flex-col items-center gap-6 px-4">
        {/* Controllers */}
        <ul className="controllers w-full flex gap-px items-center bg-[#1e0560] rounded-2xl overflow-hidden">
          {cards.map((card, i) => (
            <li
              key={card.id}
              className={`
                flex-1 flex h-12 items-center justify-center cursor-pointer transition-colors
                ${activeIndex >= i ? "bg-[#a780f5]" : "bg-transparent"}
                ${i === 0 ? "rounded-l-2xl" : ""}
                ${i === cards.length - 1 ? "rounded-r-2xl" : ""}
              `}
              onClick={() => scrollToIndex(i)}
            >
              <Image src={card.icon} alt={card.titulo} width={20} height={20} />
            </li>
          ))}
        </ul>

        {/* Horizontal carousel */}
        <div
          ref={scrollRef}
          className="flex w-full max-w-svw snap-x overflow-x-auto overflow-y- snap-mandatory  scroll-smooth"
          onScroll={handleScroll}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-full snap-center p-1 relative mt-4"
            >
              <div className="solapa absolute  h-8 w-20 left-8 bg-[#a780f5] rounded-t-2xl -top-4 z-20"></div>
              <section className="bg-white rounded-3xl p-8 text-gray-800 shadow-lg flex flex-col justify-around gap-4 h-64 relative z-40">
                <h3 className="text-2xl font-semibold bg-[#e8d8ff] text-[#27067f] p-4 px-6 rounded-2xl whitespace-pre-line leading-tight">
                  {card.titulo}
                </h3>
                <p className="text-[#27067f] font-medium text-base px-6 whitespace-pre-line leading-tight">
                  {card.descripcion}
                </p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
