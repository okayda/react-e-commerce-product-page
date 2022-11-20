import imgProduct from "../../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../../assets/icon-delete.svg";
import "./CartStyles/cartItem.scss";

const CartItem = function ({ data, dispatch }) {
  const decrease = function () {
    dispatch({ type: "REMOVE", payload: { id: data.id } });
  };

  return (
    <li className="cartItem">
      <div className="cartItem-content-wrapper">
        <img src={imgProduct} className="cartItem-img" alt="" />

        <div className="cartItem-content">
          <span>{data.productTitle}</span>

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

      <button className="cartItem-button" onClick={decrease}>
        <img src={deleteIcon} className="cartItem-icon" alt="" />
      </button>
    </li>
  );
};

export default CartItem;
