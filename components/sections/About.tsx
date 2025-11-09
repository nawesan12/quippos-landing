import Image from "next/image";

export default function AboutFinnegans() {
  return (
    <section className="bg-[#8492fd] px-10">
      <section className="flex justify-between flex-col md:flex-row w-full md:items-center md:max-w-6xl  py-11 md:py-0 mx-auto md:h-[70vh] ">
        <section className="flex flex-row md:flex-col items-center justify-between md:items-start md:h-2/3">
          <h2 className="text-4xl md:text-6xl text-white font-semibold ">
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
            className="h-20 max-w-max hidden md:flex"
          />
        </section>

        <section className="flex flex-col items-start justify-between md:max-w-xl md:h-2/3">
          <p className="font-medium text-white text-[17px] md:text-xl md:mt-0 mt-8">
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

          <div className="flex items-center justify-center gap-4 md:gap-6 px-2 bg-[#798cf8] rounded-3xl w-full md:mt-0 mt-8 text-white py-4">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl md:text-5xl font-medium">+70k</p>
              <p className="text-center text-sm">usuarios</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl md:text-5xl font-medium">+7k</p>
              <p className="text-center text-sm">empresas</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl md:text-5xl font-medium">+15</p>
              <p className="text-center text-sm">paises</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-3xl md:text-5xl font-medium">+33</p>
              <p className="text-center text-sm">años</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
