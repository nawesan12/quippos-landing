import { section } from "framer-motion/m";
import Image from "next/image";

export default function AboutFinnegans() {
  return (
    <section className="bg-[#8492fd] md:h-[80vh] ">
      <section className="flex justify-between flex-col md:flex-row w-full md:max-w-7xl px-10 md:px-0 py-11 md:py-0 mx-auto">
        <section className="flex flex-row md:flex-col items-center justify-between">
          <h2 className="text-4xl text-white font-semibold">
            Acerca de <br /> Finnegans
          </h2>
          <Image
            src="/Logos/isologo finnegans.svg"
            alt="Logo de Finnegans"
            width={200}
            height={200}
            className="h-11 max-w-max md:hidden flex"
          />

          <Image
            src="/Logos/isologo finnegans.svg"
            alt="Logo de Finnegans"
            width={200}
            height={200}
            className="h-11 max-w-max hidden md:flex"
          />
        </section>

        <section className="flex flex-col items-start justify-between">
          <p className="font-medium text-white text-[17px] md:mt-0 mt-8">
            Somos una empresa de software <br /> enfocada en ofrecer soluciones{" "}
            <br />
            tecnologicas integrales para la gestión empresarial. <br /> <br />{" "}
            Nuestra misión es igualar <br /> oportunidades, haciendo accesible
            la innovación tecnológica a todo tipo de empresas, para que puedan
            gestionar con la misma eficiencia, inteligencia y calidad que los
            líderes globales.
          </p>

          <div className="flex items-center gap-4 px-2 bg-[#798cf8] rounded-3xl w-full md:mt-0 mt-8 text-white py-4">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl font-medium">+70k</p>
              <p className="text-center text-sm">usuarios</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl font-medium">+7k</p>
              <p className="text-center text-sm">empresas</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl font-medium">+15</p>
              <p className="text-center text-sm">paises</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl font-medium">+33</p>
              <p className="text-center text-sm">años</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
