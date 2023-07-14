import CheckoutContainer from "../components/pages/Checkout/CheckoutContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import ItemDetailContainer from "../components/pages/itemDetail/itemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const menuRoute = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
