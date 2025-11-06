import Image from "next/image";
export default function Footer() {
  return (
    <section className="flex items-center justify-center bg-[#01042D]">
      <section className="md:max-w-7xl w-full flex items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />

        <div className="links"></div>

        <div className="go-up"></div>
      </section>
    </section>
  );
}
