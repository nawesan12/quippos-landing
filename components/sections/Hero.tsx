import { Card } from "../ui/card";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-11 py-8">
      <section className="w-full min-h-[90vh]">
        <div className="copy"></div>

        <div className="formulario">
          <Card></Card>
        </div>
      </section>
    </section>
  );
}
