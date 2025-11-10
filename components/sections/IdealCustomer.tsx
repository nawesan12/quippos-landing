import Image from "next/image";

export default function IdealCustomer() {
  return (
    <section className="flex md:flex-row flex-col items-center justify-center md:justify-evenly bg-[#01102f] px-8 md:py-20 md:pt-8">
      <section className="w-full md:max-w-sm md:scale-110">
        <h3 className="text-white my-8 text-5xl font-medium">
          <span className="text-[#ad7efc] relative mr-3">
            Ideal
            <Image
              src="/Animaciones/Animacion-trazo.gif"
              alt="Ideal Customer"
              width={200}
              height={200}
              className="absolute top-0 left-0 scale-150"
            />
          </span>{" "}
          para:
        </h3>

        {/* Contenedor relativo para línea + plus signs */}
        <div className="relative md:max-w-sm">
          {/* Línea violeta que conecta los plus */}
          <div className="pointer-events-none absolute left-3 top-6 bottom-6 z-10">
            <div className="w-[3px] h-full bg-[#ad7efc]" />
          </div>

          <ul className="text-white flex flex-col gap-4 md:max-w-sm relative z-20">
            {/* 1 */}
            <li className="relative rounded-full bg-[#27067f] p-4 px-4 text-[14px] md:text-lg font-medium">
              {/* Plus flotando */}
              <Image
                src="/Iconos/SVG/+.svg" // 👉 cambialo al path real de tu plus
                alt="Punto destacado"
                width={24}
                height={24}
                className="absolute size-12 top-3 md:top-4 -left-3 z-20"
              />
              <p className="ml-8">
                <span className="text-[#ad7efc]">Grandes empresas</span> que
                buscan reducir costos sin perder calidad
              </p>
            </li>

            {/* 2 */}
            <li className="relative rounded-full bg-[#27067f] p-4 px-4 text-[14px] md:text-lg font-medium">
              <Image
                src="/Iconos/SVG/+.svg"
                alt="Punto destacado"
                width={24}
                height={24}
                className="absolute size-12 top-3 md:top-5 -left-3 z-20"
              />
              <p className="ml-8">
                <span className="text-[#ad7efc]">
                  Pequeñas y Medianas <br /> empresas{" "}
                </span>
                que buscan escalar
              </p>
            </li>

            {/* 3 */}
            <li className="relative rounded-full bg-[#27067f] p-4 px-4 text-[14px] md:text-lg font-medium">
              <Image
                src="/Iconos/SVG/+.svg"
                alt="Punto destacado"
                width={24}
                height={24}
                className="absolute size-12 top-3 md:top-4 -left-3 z-20"
              />
              <p className="ml-8 whitespace-nowrap">
                <span className="text-[#ad7efc]">Talentos individuales </span>{" "}
                que buscan <br /> crecer profesionalmente
              </p>
            </li>

            {/* 4 */}
            <li className="relative rounded-full bg-[#27067f] p-4 px-4 text-[14px] md:text-lg font-medium">
              <Image
                src="/Iconos/SVG/+.svg"
                alt="Punto destacado"
                width={24}
                height={24}
                className="absolute size-12 top-3 md:top-4 -left-3 z-20"
              />
              <p className="ml-8">
                <span className="text-[#ad7efc]">Equipos de RR.HH. </span> que
                buscan autonomia y trazabilidad
              </p>
            </li>
          </ul>
        </div>
      </section>

      <Image
        src="/Animaciones/Animacion-mano.gif"
        alt="Ideal Customer"
        width={1000}
        height={1000}
        className="px-2 md:max-w-xl"
      />
    </section>
  );
}
