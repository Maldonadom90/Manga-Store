import style from "./ItemListContainer.module.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className={style.container}>
      <h1>{greeting}</h1>
      <h2>Aca va la lista de productos</h2>
    </div>
  );
};
