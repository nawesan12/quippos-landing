import Image from "next/image";

export default function IdealCustomer() {
  return (
    <section className="flex md:flex-row flex-col items-center justify-center md:justify-evenly bg-[#01102f] px-8 md:py-14 md:pt-8">
      <section className="w-full md:max-w-sm">
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

        <ul className="text-white flex flex-col gap-4 md:max-w-sm">
          <li className="rounded-full bg-[#27067f] p-4 px-6 text-md font-medium">
            <p className="ml-2">
              <span className="text-[#ad7efc]">Grandes empresas</span> que
              buscan reducir costos sin perder calidad
            </p>
          </li>
          <li className="rounded-full bg-[#27067f] p-4 px-6 text-md font-medium">
            <p className="ml-2">
              <span className="text-[#ad7efc]">
                Pequeñas y Medianas <br /> empresas{" "}
              </span>{" "}
              que buscan escalar
            </p>
          </li>
          <li className="rounded-full bg-[#27067f] p-4 px-6 text-md font-medium">
            <p className="ml-2">
              <span className="text-[#ad7efc]">Talentos individuales </span> que
              buscan crecer profesionalmente
            </p>
          </li>
          <li className="rounded-full bg-[#27067f] p-4 px-6 text-md font-medium">
            <p className="ml-2">
              <span className="text-[#ad7efc]">Equipos de RR.HH. </span> que
              buscan autonomia y trazabilidad
            </p>
          </li>
        </ul>
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
