import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import style from "../cart/CartContainer.module.css";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, removeProductSelected, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const emptyCart = () => {
    Swal.fire({
      title: "Desea vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vacio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  return (
    <div className={style.detail}>
      <h2>El total del carrito es: $ {total} </h2>
      {cart.length > 0 && <button onClick={emptyCart}>Vaciar carrito</button>}
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.img} alt={product.title} />
            <h3>${product.price}</h3>
            <h4 className={style.quantity}>{product.quantity}</h4>
            <button onClick={() => removeProductSelected(product.id)}>
              Eliminar 💣
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartContainer;
