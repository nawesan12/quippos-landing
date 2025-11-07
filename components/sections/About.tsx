import Image from "next/image";

export default function AboutFinnegans() {
  return (
    <section className="flex justify-between w-full md:max-w-7xl md:h-[80vh]">
      <section className="flex flex-col items-start justify-between">
        <h2>Acerca de Finnegans</h2>
        <Image
          src="/images/finnegans-logo.png"
          alt="Logo de Finnegans"
          width={200}
          height={200}
        />
      </section>

      <section className="flex flex-col items-start justify-between">
        <p className="font-medium">
          Somos una empresa de software enfocada en ofrecer soluciones
          tecnologicas integrales para la gestion empresarial. <br /> <br />{" "}
          Nuestra mision es igualar oportunidades, haciendo accesible la
          innovacion tecnologica a todo tipo de empresas, para que puedan
          gestionar con la misma eficiencia, inteligencia y calidad que los
          lideres globales.
        </p>

        <div className="flex items-center gap-8 px-4">
          <div className="flex flex-col gap-2 items-center">
            <p>+70k</p>
            <span>usuarios</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p>+7k</p>
            <span>empresas</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p>+15</p>
            <span>paises</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p>+33</p>
            <span>años</span>
          </div>
        </div>
      </section>
    </section>
  );
}
