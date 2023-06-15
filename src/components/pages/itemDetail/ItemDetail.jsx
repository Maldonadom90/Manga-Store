import { ItemCount } from "../../common/itemCount/ItemCount";
import style from "../itemDetail/ItemDetail.module.css";

const ItemDetail = ({ productSelect }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelect,
      quantity: cantidad,
    };

    console.log(data);
  };

  return (
    <div className={style.detail}>
      <div>
        <h2>{productSelect.title}</h2>
        <img src={productSelect.img} alt="" />
        <h4 className={style.price}>${productSelect.price}</h4>
      </div>
      <h3 className={style.description}>{productSelect.description}</h3>
      <div className={style.resumen}>
        {productSelect.stock > 0 ? (
          <ItemCount stock={productSelect.stock} initial={1} onAdd={onAdd} />
        ) : (
          <h3>No hay stock</h3>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
