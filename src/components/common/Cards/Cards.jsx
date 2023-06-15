import { Link } from "react-router-dom";

const Cards = ({ elemento }) => {
  return (
    <div>
      <img src={elemento.img} alt={elemento.title} />
      <h2>{elemento.title}</h2>
      <div>
        <Link to={`/itemDetail/${elemento.id}`}>
          <button>+INFO</button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
