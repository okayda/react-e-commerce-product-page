import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import style from "./LayoutStyles/Header.module.scss";

import HeaderLinks from "./HeaderLinks";

import Logo from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-menu.svg";
import iconCart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";

const Header = function ({ onCartClick, displayMobileNav }) {
  const cartsData = useSelector((state) => state.carts);

  const countCarts = cartsData.reduce((prev, cur) => prev + cur.piece, 0);

  const Element = (
    <nav className={style.header}>
      <div className={style.header__wrapper}>
        <div className={style.header__logoMenu}>
          <div className={style["header__logoMenu--menu"]}>
            <button onClick={displayMobileNav}>
              <img src={iconMenu} alt="" />
            </button>
          </div>

          <div className={style["header__logoMenu--logo"]}>
            <a href="#/">
              <img src={Logo} alt="" />
            </a>
          </div>

          <HeaderLinks className={style["header__logoMenu--links"]} />
        </div>

        <div className={style.header__cartAccount}>
          <div className={style["header__cartAccount--cart"]}>
            <button
              className={style["header__cartAccount--buttonCart"]}
              onClick={onCartClick}
            >
              <img src={iconCart} alt="" />
              {countCarts > 0 ? <span>{countCarts}</span> : ""}
            </button>
          </div>

          <div className={style["header__cartAccount--account"]}>
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {ReactDOM.createPortal(Element, document.getElementById("main-header"))}
    </>
  );
};

export default Header;
