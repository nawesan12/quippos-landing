import Image from "next/image";

export default function QuipposBanner() {
  return (
    <section className="flex items-center justify-center py-11">
      <Image
        src="/images/quippos-banner.png"
        alt="Quippos Banner"
        className="w-full md:max-w-7xl"
        width={1000}
        height={400}
      />
    </section>
  );
}
