import { CartWidget } from "../../common/cartwidget/CartWidget";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={style.nav}>
      <Link to="/">
        <img src=".././public/bulma.png" alt="logo" />
      </Link>
      <ul className={style.items}>
        <Link to="/" className={style.button}>
          Mangas
        </Link>
        <Link to="/category/DragonBall" className={style.button}>
          Dragon Ball
        </Link>
        <Link to="/category/Naruto" className={style.button}>
          Naruto
        </Link>
        <Link to="/category/OnePiece" className={style.button}>
          One Piece
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
