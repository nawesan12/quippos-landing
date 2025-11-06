import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className="flex items-center justify-center">
      <div className="logo"></div>

      <div className="copy">
        <h3>
          El futuro de la gestión del talento, <br />
          sin limites ni barreras.
        </h3>

        <Button>Agendá una demo ahora</Button>
      </div>
    </section>
  );
}
