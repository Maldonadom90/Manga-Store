import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (newProd) => {
    let exist = inCart(newProd.id);
    if (exist) {
      let secondArray = cart.map((product) => {
        if (product.id === newProd.id) {
          return {
            ...product,
            quantity: newProd.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(secondArray);
      localStorage.setItem("cart", JSON.stringify(secondArray));
    } else {
      setCart([...cart, newProd]);
      localStorage.setItem("cart", JSON.stringify([...cart, newProd]));
    }
  };

  const inCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const removeProductSelected = (id) => {
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const getTotalQuantityById = (id) => {
    let producto = cart.find((prod) => prod.id === +id);
    return producto?.quantity;
  };
  const getTotalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };
  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeProductSelected,
    getTotalQuantityById,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
