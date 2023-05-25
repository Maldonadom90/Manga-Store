import { CartWidget } from "../../common/cartwidget/CartWidget";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={style.nav}>
      <img src=".././public/bulma.png" alt="logo" />
      <ul className={style.items}>
        <li className={style.button}>Inicio</li>
        <li className={style.button}>Productos</li>
        <li className={style.button}>Redes</li>
      </ul>
      <CartWidget />
    </div>
  );
};
