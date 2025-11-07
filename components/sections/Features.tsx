import Image from "next/image";

export default function Features() {
  return (
    <section className="flex items-center justify-center md:max-w-7xl w-full">
      <section className="rounded-4xl border-2 border-white">
        <Image
          src="/logo-finni.png"
          alt="Logo Finní"
          width={200}
          height={200}
        />

        <div className="estampilla">
          <Image src="/estampilla.png" alt="" width={1000} height={1000} />
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
