import { Card } from "../ui/card";

export default function Descriptions() {
  const cards = [
    {
      id: 1,
      icon: "",
      titulo: "",
      descripcion: "",
    },
    {
      id: 2,
      icon: "",
      titulo: "",
      descripcion: "",
    },
    {
      id: 3,
      icon: "",
      titulo: "",
      descripcion: "",
    },
    {
      id: 4,
      icon: "",
      titulo: "",
      descripcion: "",
    },
    {
      id: 5,
      icon: "",
      titulo: "",
      descripcion: "",
    },
    {
      id: 6,
      icon: "",
      titulo: "",
      descripcion: "",
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
