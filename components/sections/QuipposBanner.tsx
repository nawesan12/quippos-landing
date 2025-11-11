import Image from "next/image";

export default function QuipposBanner() {
  return (
    <section className="flex items-center justify-center md:py-11 py-6 bg-[#a780f5]">
      <Image
        src="/Logos/quippos1.svg"
        alt="Quippos Banner"
        className="w-full md:max-w-7xl md:flex hidden"
        width={1000}
        height={400}
      />
      <Image
        src="/Logos/quippos2.svg"
        alt="Quippos Banner"
        className="w-full md:max-w-7xl md:hidden flex"
        width={1000}
        height={400}
      />
    </section>
  );
}
