import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className="flex items-center justify-center">
      <div className="logo"></div>

      <div className="copy">
        <h3 className="text-right">
          El futuro de la gestión del talento, <br />
          <span>sin limites ni barreras.</span>
        </h3>

        <p>
          Transforma la comunicacion interna en un dialogo mas simple, humano y
          cercano.
        </p>

        <Button className="rounded-full p-4">Agendá una demo ahora</Button>
      </div>
    </section>
  );
}
