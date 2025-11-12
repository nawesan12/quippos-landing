import Image from "next/image";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className="bg-[#27067f]">
      <section className="flex flex-col md:flex-row md:items-center md:max-w-7xl w-full mx-auto justify-center md:justify-between  px-10 py-20 md:py-11">
        <div className="logo ">
          <Image
            src="/Animaciones/Animacion-logo-q.gif"
            alt="Quippos Logo"
            width={100}
            height={100}
            className="max-w-max self-start relative -left-6 md:size-96 md:object-contain"
          />
        </div>

        <div className="copy flex flex-col gap-6 mt-6 md:mt-0">
          <h3 className="text-left md:text-right text-white text-[28px] md:text-4xl font-medium leading-tight">
            El futuro de la <br className="md:hidden block" /> gestión del
            talento, <br />
            <span className="text-[#a780f5] whitespace-nowrap">
              sin límites ni barreras.
            </span>
          </h3>

          <p className="text-white font-medium whitespace-nowrap text-sm md:text-right md:text-xl leading-tight">
            Transformá la comunicación interna en <br /> un diálogo más simple,
            humano y cercano.
          </p>

          <Button className="cursor-pointer rounded-full p-4 py-5 md:py-6 md:px-8 bg-[#6e42c8] text-white text-sm max-w-max md:self-end md:text-lg">
            Agendá una demo ahora
          </Button>
        </div>
      </section>
    </section>
  );
}
