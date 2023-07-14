import { Link } from "react-router-dom";

const Cards = ({ element }) => {
  return (
    <div>
      <img src={element.img} alt={element.title} />
      <h2>{element.title}</h2>
      <div>
        <Link to={`/itemDetail/${element.id}`}>
          <button>+INFO</button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
