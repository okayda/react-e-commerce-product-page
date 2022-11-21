import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop";
import closeIcon from "../../assets/icon-close.svg";

import style from "./LayoutStyles/MobileMenu.module.scss";

const MobileMenu = function ({ activeMobileNav, displayMobileNav }) {
  const Element = (
    <Backdrop
      onHide={displayMobileNav}
      addClass={activeMobileNav ? style.showBackdrop : style.hideBackdrop}
    >
      <aside
        className={`${style.mobileNav} ${
          activeMobileNav ? style.activeMobileNav : ""
        }`}
      >
        <div className={style.mobileNav__wrapper}>
          <div>
            <button
              className={style.mobileNav__button}
              onClick={displayMobileNav}
            >
              <img src={closeIcon} alt="" />
            </button>
          </div>

          <ul className={style.mobileNav__list}>
            <li>
              <a href="#/">Collections</a>
            </li>
            <li>
              <a href="#/">Men</a>
            </li>
            <li>
              <a href="#/">Women</a>
            </li>
            <li>
              <a href="#/">About</a>
            </li>
            <li>
              <a href="#/">Contact</a>
            </li>
          </ul>
        </div>
      </aside>
    </Backdrop>
  );

  return (
    <>
      {ReactDOM.createPortal(
        Element,
        document.getElementById("mobile-nave-container")
      )}
    </>
  );
};

export default MobileMenu;
