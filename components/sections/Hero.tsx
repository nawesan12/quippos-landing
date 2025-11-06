import { Card, CardTitle } from "../ui/card";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-11 py-8">
      <section className="w-full min-h-[90vh] bg-[#a282ef] text-white rounded-[64px] relative lg:px-32 flex items-center justify-between">
        <div className="copy">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <h2 className="text-7xl font-semibold">
            Gestiona tu talento <br /> como una gran <br /> corporacion
          </h2>
          <p className="my-11 text-2xl ">
            Potencia a los talentos de tu organizacion con <br /> una plataforma
            que evoluciona con vos. <br /> Totalmente integrable a cualquier
            sistema ERP.
          </p>

          <div className="relative top-20">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            Tecnologia a tu medida, a una fraccion del costo.
          </div>
        </div>

        <div className="formulario">
          <Card>
            <CardTitle>Solicitar demo gratutita</CardTitle>

            <div>
              <div>
                <Label>Nombre y Apellido</Label>

                <Input className="bg-gray-200 rounded-full py-4 px-2" />
              </div>
              <div>
                <Label>Email laboral</Label>

                <Input className="bg-gray-200 rounded-full py-4 px-2" />
              </div>
              <div>
                <Label>Industria</Label>

                <Input className="bg-gray-200 rounded-full py-4 px-2" />
              </div>
              <div>
                <Label>Pais</Label>

                <Input className="bg-gray-200 rounded-full py-4 px-2" />
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Label>Cantidad de Empleados</Label>

                  <Input className="bg-gray-200 rounded-full py-4 px-2" />
                </div>
                <Button>
                  Enviar{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </section>
  );
}
