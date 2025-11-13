import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section
      id="home"
      className="flex flex-col max-h-svh md:flex-row items-center justify-center px-4 md:px-11 py-8 relative bg-[#e8d8ff]"
    >
      <section className="w-full min-h-[80vh] md:min-h-[90vh] bg-[#27067f] text-white rounded-4xl md:rounded-[64px] relative px-10 md:py-0 md:px-40 flex items-center justify-center gap-20 flex-col  pt-32 md:pt-0">
        <Image
          src="/Logos/quippos.svg"
          alt="Gracias"
          width={500}
          height={500}
        />

        <div className="flex flex-col gap-10 items-center ">
          <h2 className="md:text-8xl text-4xl font-medium text-[#9a69f9]">
            ¡Felicitaciones!
          </h2>

          <p className="text-sm md:text-3xl text-center">
            Estás un paso más cerca de gestionar tu{" "}
            <br className="hidden md:block" /> talento como una gran corporación
          </p>

          <Link
            href="/"
            className="bg-[#a780f5] rounded-full p-4 text-sm md:text-lg"
          >
            volver a la home
          </Link>
        </div>
      </section>
    </section>
  );
}
