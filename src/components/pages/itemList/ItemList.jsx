import style from "./ItemListContainer.module.css";
import Cards from "../../common/cards/Cards";

export const ItemList = ({ items }) => {
  return (
    <div className={style.container}>
      {items.map((element) => {
        return <Cards key={element.id} element={element} />;
      })}
    </div>
  );
};
