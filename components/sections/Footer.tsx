import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#04102d] py-12 pt-4 md:py-16 text-white relative z-40">
      <div className="mx-auto max-w-7xl px-4 lg:px-0 w-full">
        <div className="flex flex-col items-center justify-between gap-10 pt-12 md:flex-row md:gap-6">
          <img
            src="/finnegans-blanco.png"
            className="h-12 hidden md:flex"
            alt=""
          />

          <section className="flex items-center w-full justify-between md:justify-evenly">
            <div className="items-center text-sm md:text-xl font-medium gap-6 text-white flex">
              <a href="#soluciones" className="transition hover:text-[#ad7efc]">
                Que ofrecemos
              </a>
              <a href="#academia" className="transition hover:text-[#ad7efc]">
                Finni IA
              </a>
              <a href="#impacto" className="transition hover:text-[#ad7efc]">
                Contacto
              </a>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
              <a
                href="https://www.instagram.com/finnegans_sa/"
                target="_blank"
                aria-label="Instagram"
                className="text-white/70 transition hover:text-white"
              >
                <Image
                  src="/Instagram.svg"
                  className="md:size-8 size-4"
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
                  className="md:size-10 size-6"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  // onMouseEnter={() => (this.src = "/Linkedin Celeste.svg")}
                  // onMouseLeave={() => (this.src = "/Linkedin.svg")}
                />
              </a>
            </div>
          </section>

          <section className="flex items-center justify-between gap-2 w-full md:w-auto">
            <img
              src="/finnegans-blanco.png"
              alt=""
              className="flex md:hidden h-6 max-w-max"
            />
            <a href="#home" className="rounded-full  text-sm transition">
              <img
                src="/ultimo-boton.png"
                className="w-32 md:w-48 aspect-auto object-contain max-w-max overflow-hidden"
                alt="Finnegans"
                width={200}
                height={200}
              />
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
}
