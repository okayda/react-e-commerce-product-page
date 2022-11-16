import style from "./Header.module.css";

import HeaderLinks from "./HeaderLinks";

import Logo from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-menu.svg";
import iconCart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";

const Header = function () {
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
              <img src={iconCart} alt="" />
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
