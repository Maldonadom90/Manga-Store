import style from "./ItemListContainer.module.css";
import Cards from "../../common/cards/Cards";

export const ItemList = ({ items }) => {
  return (
    <div className={style.container}>
      {items.map((elemento) => {
        return <Cards key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};
