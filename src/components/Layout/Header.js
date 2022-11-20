import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";

import style from "./LayoutStyles/Header.module.scss";

import HeaderLinks from "./HeaderLinks";

import Logo from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-menu.svg";
import iconCart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";

const Header = function ({ onCartClick }) {
  const {
    myCart: { carts },
  } = useContext(CartContext);

  const countCarts = carts.reduce((prev, cur) => prev + cur.piece, 0);

  return (
    <>
      <div className={style.header}>
        <div className={style.header__wrapper}>
          <div className={style.header__logoMenu}>
            <div className={style["header__logoMenu--menu"]}>
              <img src={iconMenu} alt="" />
            </div>
            <div className={style["header__logoMenu--logo"]}>
              <img src={Logo} alt="" />
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
      </div>
    </>
  );
};

export default Header;
