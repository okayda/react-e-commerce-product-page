import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";

import style from "./CartStyles/Cart.module.scss";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import closeIcon from "../../assets/icon-close.svg";

const Cart = function ({ onCartClick }) {
  const {
    myCart: { carts, dispatch },
  } = useContext(CartContext);

  const ShowItems = (
    <>
      <ul className={style.cart__cartList}>
        {carts.map((cart, i) => (
          <CartItem key={i} data={cart} dispatch={dispatch} />
        ))}
      </ul>
      <button className={style.cart__button}>Checkout</button>
    </>
  );

  const ShowEmpty = (
    <span className={style.cart__empty}>Your cart is empty.</span>
  );

  return (
    <Modal targetContainer="cart-container">
      <div className={style.cart}>
        <div className={style.cart__wrapper}>
          <div className={style.cart__titleContent}>
            <span className={style.cart__title}>Cart</span>
            <button onClick={onCartClick}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <div className={style.cart__content}>
            {carts.length > 0 ? ShowItems : ShowEmpty}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
