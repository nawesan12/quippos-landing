import { Card } from "../ui/card";

export default function Descriptions() {
  const cards = [
    {
      id: 1,
      icon: "/descriptions/1.png",
      titulo: "100% Configurable",
      descripcion: "Hace que el sistema se adapte a tu forma de trabajar.",
    },
    {
      id: 2,
      icon: "/descriptions/2.png",
      titulo: "IA+ No Code",
      descripcion:
        "Automatiza tus tareas y procesos con inteligencia artificial.",
    },
    {
      id: 3,
      icon: "/descriptions/3.png",
      titulo: "Portal de Autogestion",
      descripcion: "Centraliza la informacion y tramites de tus colaboradores.",
    },
    {
      id: 4,
      icon: "/descriptions/4.png",
      titulo: "Liquidacion Automatica",
      descripcion: "Genera y distribui recibos en segundos, sin errores.",
    },
    {
      id: 5,
      icon: "/descriptions/5.png",
      titulo: "Integracion Total",
      descripcion:
        "Conecta el sistema con cualquier ERP o herramienta del mercado.",
    },
    {
      id: 6,
      icon: "/descriptions/6.png",
      titulo: "Implementación Express",
      descripcion: "Pasa del inicio al uso real en semanas.",
    },
  ];

  return (
    <section className="flex items-center justify-center gap-11 w-full md:max-w-7xl">
      <div className="controllers"></div>
      <section className="cards">
        {cards.map((card) => (
          <Card key={card.id} className="card">
            {/*<img src={card.icon} alt={card.titulo} />*/}
            <h3>{card.titulo}</h3>
            <p>{card.descripcion}</p>
          </Card>
        ))}
      </section>
    </section>
  );
}
