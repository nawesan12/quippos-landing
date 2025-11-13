import Image from "next/image";

export default function Page() {
  return (
    <section
      id="home"
      className="flex flex-col min-h-svh md:flex-row items-center justify-center px-4 md:px-11 py-8 relative bg-[#e8d8ff]"
    >
      <section className="w-full min-h-[90vh] bg-[#27067f] text-white rounded-4xl md:rounded-[64px] relative px-10 md:py-0 md:px-40 flex items-center justify-between flex-col md:flex-row pt-32 md:pt-0">
        <Image
          src="/Logos/quippos1.svg"
          alt="Gracias"
          width={500}
          height={500}
        />
      </section>
    </section>
  );
}
