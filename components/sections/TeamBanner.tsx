import Image from "next/image";

export default function TeamBanner() {
  return (
    <section className="flex items-center justify-center h-svh max-h-max relative">
      <Image
        src="/Fotos/foto-mobile.jpg"
        alt="Foto de equipo"
        width={1000}
        height={1000}
        className="object-cover flex md:hidden"
      />
      <Image
        src="/Fotos/foto-web.jpg"
        alt="Foto de equipo"
        width={1000}
        height={1000}
        className="object-contain md:flex hidden w-screen"
      />

      <section className="animations absolute w-screen h-svh"></section>
    </section>
  );
}
