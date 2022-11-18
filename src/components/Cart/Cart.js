import style from "./Cart.module.scss";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = function () {
  return (
    <Modal targetClass="cart-container">
      <div className={style.cart}>
        <div className={style.cart__wrapper}>
          <h4 className={style.cart__title}>Cart</h4>
          <div className={style.cart__content}>
            <ul className={style.cart__cartList}>
              <CartItem />
            </ul>
            <button className={style.cart__button}>Checkout</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
