import { Link } from "react-router-dom";
import style from "../cart/CartContainer.module.css";

const Cart = ({ cart, emptyCart, removeProductSelected, total }) => {
  return (
    <div>
      <div className={style.detail}>
        {cart.length > 0 && <button onClick={emptyCart}>Vaciar carrito</button>}
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.img} alt={product.title} />
              <h3>${product.price}</h3>
              <h4 className={style.quantity}>
                Total: {product.quantity} mangas.
              </h4>
              <button onClick={() => removeProductSelected(product.id)}>
                Eliminar 💣
              </button>
            </div>
          );
        })}
      </div>
      <div className={style.shop}>
        <h1>El total del carrito es ${total}</h1>
        {cart.length > 0 ? (
          <div className={style.shopButton}>
            <Link to="/checkout">
              <button>Finalizar compra</button>
            </Link>
          </div>
        ) : (
          <Link to="/">
            <button>Agrega productos</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
