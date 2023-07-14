import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { menuNav } from "../../../routes/menuNav";
import CartWidget from "../../common/cartwidget/CartWidget";

export const Navbar = () => {
  return (
    <div className={style.nav}>
      <Link to="/">
        <img src=".././public/bulma.png" alt="logo" />
      </Link>
      <ul className={style.items}>
        {menuNav.map(({ id, path, title }) => (
          <Link key={id} to={path}>
            {title}
          </Link>
        ))}
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
