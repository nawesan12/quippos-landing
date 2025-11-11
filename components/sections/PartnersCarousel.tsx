"use client";

import { useRef, useState, UIEvent } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    icon: "/Iconos/SVG/mouse1.svg",
    titulo: "100% \n Configurable",
    descripcion: "Hace que el sistema se adapte a tu forma de trabajar.",
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
    descripcion: "Centraliza la informacion y tramites de tus colaboradores.",
  },
  {
    id: 4,
    icon: "/Iconos/SVG/trueno1.svg",
    titulo: "Liquidacion \n Automatica",
    descripcion: "Genera y distribui recibos en segundos, sin errores.",
  },
  {
    id: 5,
    icon: "/Iconos/SVG/carpeta1.svg",
    titulo: "Integracion \n Total",
    descripcion:
      "Conecta el sistema con cualquier ERP o herramienta del mercado.",
  },
  {
    id: 6,
    icon: "/Iconos/SVG/reloj1.svg",
    titulo: "Implementación \n Express",
    descripcion: "Pasa del inicio al uso real en semanas.",
  },
];

export default function DescriptionsDesktop() {
  // 👇 Arranca con TODAS prendidas (último índice)
  const [activeIndex, setActiveIndex] = useState(cards.length - 1);
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
    if (!offsetWidth) return;

    container.scrollTo({
      left: index * offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#27067f] py-12 md:block hidden md:h-svh ">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-8 px-4 lg:flex-row lg:items-stretch">
        {/* MOBILE (dentro de este componente): controllers horizontales + carrusel */}
        <div className="w-full flex flex-col items-center gap-6 lg:hidden">
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
                onClick={() => {
                  setActiveIndex(i);
                  scrollToIndex(i);
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.titulo}
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>

          {/* Horizontal carousel */}
          <div
            ref={scrollRef}
            className="flex w-full snap-x overflow-x-auto overflow-y-hidden snap-mandatory scroll-smooth"
            onScroll={handleScroll}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-full snap-center p-1 relative mt-4"
              >
                <div className="solapa absolute h-8 w-20 left-8 bg-[#a780f5] rounded-t-2xl -top-4 z-20" />
                <section className="bg-white rounded-3xl p-8 text-gray-800 shadow-lg flex flex-col justify-around gap-4 h-64 relative z-40">
                  <h3 className="text-3xl leading-tight font-semibold bg-[#e8d8ff] text-[#27067f] p-4 px-6 rounded-2xl whitespace-pre-line">
                    {card.titulo}
                  </h3>
                  <p className="text-[#27067f] font-medium text-lg">
                    {card.descripcion}
                  </p>
                </section>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: controllers verticales + 6 cards lado a lado */}
        <div className="hidden w-full lg:flex gap-8 py-11">
          {/* Controllers verticales */}
          <ul className="controllers flex flex-col gap-px bg-[#1e0560] rounded-2xl overflow-hidden w-20 h-full">
            {cards.map((card, i) => (
              <li
                key={card.id}
                className={`
                   flex flex-1 min-h-[4rem] items-center justify-center cursor-pointer transition-colors
                   ${activeIndex >= i ? "bg-[#a780f5]" : "bg-transparent"}
                   ${i === 0 ? "rounded-t-2xl" : ""}
                   ${i === cards.length - 1 ? "rounded-b-2xl" : ""}
                 `}
                onClick={() => setActiveIndex(i)}
              >
                <Image
                  src={card.icon}
                  alt={card.titulo}
                  width={40}
                  height={40}
                />
              </li>
            ))}
          </ul>

          {/* 6 cards una al lado de la otra (grid) */}
          <div className="grid grid-cols-3 gap-6 flex-1">
            {cards.map((card, i) => {
              const isActive = activeIndex >= i;
              return (
                <div key={card.id} className="relative mt-4">
                  <div
                    className={`solapa absolute h-8 w-20 left-6 bg-[#a780f5] rounded-t-2xl -top-4 z-20 ${
                      !isActive ? "hidden" : ""
                    }`}
                  />
                  <section
                    className={`
                      rounded-3xl p-6 h-64 shadow-lg flex flex-col justify-around gap-4 relative z-40 transition-colors
                      ${
                        !isActive
                          ? "bg-[#3123a0] text-[#a69ad1]"
                          : "bg-white text-[#27067f]"
                      }
                    `}
                  >
                    <h3
                      className={`
                        text-2xl font-semibold p-4 px-6 rounded-2xl whitespace-pre-line
                        ${
                          !isActive
                            ? "bg-[#27067f] text-[#a69ad1]"
                            : "bg-[#e8d8ff] text-[#27067f]"
                        }
                      `}
                    >
                      {card.titulo}
                    </h3>
                    <p
                      className={`
                        font-medium text-lg
                        ${!isActive ? "text-[#a69ad1]" : "text-[#27067f]"}
                      `}
                    >
                      {card.descripcion}
                    </p>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
