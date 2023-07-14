import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";
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
    <div>
      <Cart
        total={total}
        emptyCart={emptyCart}
        cart={cart}
        removeProductSelected={removeProductSelected}
      />
    </div>
  );
};

export default CartContainer;
