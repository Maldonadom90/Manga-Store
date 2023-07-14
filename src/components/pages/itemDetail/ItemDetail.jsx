import { ItemCount } from "../../common/itemCount/ItemCount";
import style from "../itemDetail/ItemDetail.module.css";

const ItemDetail = ({ productSelect, onAdd, amount }) => {
  return (
    <div className={style.detail}>
      <div>
        <h2>{productSelect.title}</h2>
        <img src={productSelect.img} alt={productSelect.title} />
        <h4 className={style.price}>${productSelect.price}</h4>
      </div>
      <h3 className={style.description}>{productSelect.description}</h3>
      <div className={style.resumen}>
        {productSelect.stock > 0 ? (
          <ItemCount
            stock={productSelect.stock}
            initial={amount}
            onAdd={onAdd}
          />
        ) : (
          <h3>No hay stock</h3>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
