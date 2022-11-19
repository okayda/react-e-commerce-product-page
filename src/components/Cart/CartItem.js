import imgProduct from "../../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../../assets/icon-delete.svg";
import "./cartItem.scss";

const CartItem = function () {
  return (
    <li className="cartItem">
      <div className="cartItem-content-wrapper">
        <img src={imgProduct} className="cartItem-img" alt="" />

        <div className="cartItem-content">
          <span>Autumn Limited Edition...</span>

          <div className="cartItem-order-prices">
            <span className="cartItem-price">$125.00</span>
            <span>x</span>
            <span>1</span>
            <span className="cartItem-order-price">$375.00</span>
          </div>
        </div>
      </div>
      <img src={deleteIcon} className="cartItem-icon" alt="" />
    </li>
  );
};

export default CartItem;
