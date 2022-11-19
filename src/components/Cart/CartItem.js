import imgProduct from "../../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../../assets/icon-delete.svg";
import "./CartStyles/cartItem.scss";

const CartItem = function ({ data }) {
  console.log(typeof data.salePrice);

  return (
    <li className="cartItem">
      <div className="cartItem-content-wrapper">
        <img src={imgProduct} className="cartItem-img" alt="" />

        <div className="cartItem-content">
          <span>Autumn Limited Edition...</span>

          <div className="cartItem-order-prices">
            <span className="cartItem-price">${data.salePrice}</span>
            <span>x</span>
            <span>{data.piece}</span>
            <span className="cartItem-order-price">
              ${data.salePrice * data.piece}
            </span>
          </div>
        </div>
      </div>
      <img src={deleteIcon} className="cartItem-icon" alt="" />
    </li>
  );
};

export default CartItem;
