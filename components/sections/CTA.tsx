import Image from "next/image";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className="flex flex-col md:flex-row md:items-center justify-center bg-[#27067f] px-10 py-20">
      <div className="logo ">
        <Image
          src="/Logos/icono quippos.svg"
          alt="Quippos Logo"
          width={100}
          height={100}
          className="max-w-max self-start"
        />
      </div>

      <div className="copy flex flex-col gap-6 mt-6 md:mt-0">
        <h3 className="text-left md:text-right text-white text-3xl font-medium">
          El futuro de la <br /> gestión del talento, <br />
          <span className="text-[#a780f5]">sin limites ni barreras.</span>
        </h3>

        <p className="text-white font-medium">
          Transforma la comunicacion interna en un dialogo mas simple, humano y
          cercano.
        </p>

        <Button className="rounded-full p-4 py-5 bg-[#6e42c8] text-white text-sm max-w-max">
          Agendá una demo ahora
        </Button>
      </div>
    </section>
  );
}
