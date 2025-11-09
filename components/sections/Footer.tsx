import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#04102d] py-12 md:py-16 text-white relative z-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="flex flex-col items-center justify-between gap-10 pt-12 md:flex-row md:gap-6">
          <img src="/finnegans-blanco.png" className="h-12" alt="" />

          <div className="items-center text-lg font-medium gap-6 text-white md:flex">
            <a href="#soluciones" className="transition hover:text-[#4bc3fe]">
              Que ofrecemos
            </a>
            <a href="#academia" className="transition hover:text-[#4bc3fe]">
              Finni IA
            </a>
            <a href="#impacto" className="transition hover:text-[#4bc3fe]">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/finnegans_sa/"
              target="_blank"
              aria-label="Instagram"
              className="text-white/70 transition hover:text-white"
            >
              <Image
                src="/Instagram.svg"
                className="size-6"
                alt="Instagram"
                width={32}
                height={32}
                // onMouseEnter={() => (this.src = "/Instagram celeste.svg")}
                // onMouseLeave={() => (this.src = "/Instagram.svg")}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/finnegans-s-a/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-white/70 transition hover:text-white"
            >
              <Image
                src="/Linkedin.svg"
                className="size-8"
                alt="LinkedIn"
                width={32}
                height={32}
                // onMouseEnter={() => (this.src = "/Linkedin Celeste.svg")}
                // onMouseLeave={() => (this.src = "/Linkedin.svg")}
              />
            </a>
          </div>

          <a
            href="#home"
            className="flex items-center gap-2 rounded-full px-4 text-sm transition"
          >
            <Image
              src="/ultimo-boton.png"
              className="h-12 aspect-auto object-contain"
              alt="Finnegans"
              width={200}
              height={200}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
