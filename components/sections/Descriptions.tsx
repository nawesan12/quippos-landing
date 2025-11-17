"use client";

import { useRef, useState, UIEvent } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    icon: "/Iconos/SVG/mouse1.svg",
    titulo: "100% \n Configurable",
    descripcion:
      "Definí las políticas, flujos y reglas de tu organización sin depender de desarrollo técnico.",
  },
  {
    id: 2,
    icon: "/Iconos/SVG/destello1.svg",
    titulo: "IA+ \n No Code",
    descripcion:
      "Modelá procesos con BModeler y Finni para automatizar tareas y conectar sistemas sin programar.",
  },
  {
    id: 3,
    icon: "/Iconos/SVG/flecha1.svg",
    titulo: "Portal de \n Autogestion",
    descripcion:
      "Centralizá la información de tus colaboradores en un portal único para licencias, recibos, documentos y comunicación interna.",
  },
  {
    id: 4,
    icon: "/Iconos/SVG/trueno1.svg",
    titulo: "Liquidación \n Automática",
    descripcion:
      "Liquidá con precisión según convenios e impuestos, y enviá recibos al instante.",
  },
  {
    id: 5,
    icon: "/Iconos/SVG/carpeta1.svg",
    titulo: "Integración \n Total",
    descripcion:
      "Conectá la plataforma \n con cualquier ERP o \n herramienta del mercado.",
  },
  {
    id: 6,
    icon: "/Iconos/SVG/reloj1.svg",
    titulo: "Implementación \n Express",
    descripcion:
      "Poné Quippos en marcha en semanas con una implementación ágil basada en MVP.",
  },
];

export default function Descriptions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const { scrollLeft } = container;

    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;

    // ancho real de cada card + gap
    const style = window.getComputedStyle(firstChild);
    const marginRight = parseFloat(style.marginRight || "0");
    const cardWidth = firstChild.offsetWidth + marginRight;

    if (!cardWidth) return;

    const index = Math.round(scrollLeft / cardWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;

    const style = window.getComputedStyle(firstChild);
    const marginRight = parseFloat(style.marginRight || "0");
    const cardWidth = firstChild.offsetWidth + marginRight;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#27067f] py-12 md:hidden block">
      <div className="mx-auto flex w-full flex-col items-center gap-6 px-4">
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
          className="flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth px-4 gap-4"
          onScroll={handleScroll}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="snap-center shrink-0 basis-[97%] relative mt-4"
            >
              <div className="solapa absolute h-8 w-20 left-8 bg-[#a780f5] rounded-t-2xl -top-4 z-20" />
              <section className="bg-white rounded-3xl p-8 text-gray-800 shadow-lg flex flex-col justify-around gap-4 h-72 relative z-40">
                <h3 className="text-2xl font-semibold bg-[#e8d8ff] text-[#27067f] p-4 px-6 rounded-2xl whitespace-pre-line leading-tight">
                  {card.titulo}
                </h3>
                <p className="text-[#27067f] font-medium text-base px-6 pb-10 whitespace-pre-line leading-tight">
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
