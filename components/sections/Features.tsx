import Image from "next/image";

export default function Features() {
  return (
    <section className="flex items-center justify-center md:flex-row flex-col md:max-w-7xl w-full bg-[#01102f] py-11">
      <section className="rounded-4xl border-2 border-white max-w-2xs">
        <Image
          src="/Logos/logo finnni.svg"
          alt="Logo Finní"
          width={200}
          height={200}
          className="mx-auto py-8"
        />

        <div className="estampilla  bg-cover bg-no-repeat bg-center relative bg-white py-8  flex flex-col gap-4 px-8">
          <h3 className="bg-[#ff4131] text-[#faf5f2] rounded-full py-2 px-6 text-2xl font-semibold max-w-max relative -left-15">
            Nuestra IA
          </h3>

          <p className="font-medium">
            Diseñada para liberar a tu equipo de lo operativo, <br />
            impulsando su evolucion profesional y el desarrollo
            <br />
            de nuevas competencias que los llevan mas lejos .
          </p>
        </div>
      </section>

      <section className="list-of-features flex flex-col gap-4 ">
        <article className="rounded-2xl">
          <Image
            src="/images/feature1.png"
            alt="Feature 1"
            width={100}
            height={100}
          />

          <p className="font-medium">
            Auomatizacion{" "}
            <span className="italic text-red-600">sin codigo</span> de procesos
            repetitivos.
          </p>
        </article>
        <article>
          <Image
            src="/images/feature1.png"
            alt="Feature 1"
            width={100}
            height={100}
          />

          <p className="font-medium">
            Asistente{" "}
            <span className="italic text-red-600">conversacional</span> para
            RRHH y colaboradores
          </p>
        </article>
        <article>
          <Image
            src="/images/feature1.png"
            alt="Feature 1"
            width={100}
            height={100}
          />

          <p className="font-medium">
            Mejora la experiencia digital:{" "}
            <span className="italic text-red-600">
              Respuestas rapidas y guiadas
            </span>
          </p>
        </article>
        <article>
          <Image
            src="/images/feature1.png"
            alt="Feature 1"
            width={100}
            height={100}
          />

          <p className="font-medium">
            Diseño de{" "}
            <span className="italic text-red-600">procesos a medida</span>
          </p>
        </article>
      </section>
    </section>
  );
}
