import { CartWidget } from "../../pages/cartwidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h2>Logo</h2>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Redes</li>
      </ul>
      <CartWidget />
    </div>
  );
};
