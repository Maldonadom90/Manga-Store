import "./Cards.module.css";

const Cards = ({ elemento }) => {
  return (
    <div>
      <img src={elemento.img} alt={elemento.title} />
      <h2>{elemento.title}</h2>
      <div>
        <h4>${elemento.price}</h4>
        <button>Reservar</button>
      </div>
    </div>
  );
};

export default Cards;
