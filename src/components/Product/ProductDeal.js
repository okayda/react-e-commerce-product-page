import { useState } from "react";

import { useDispatch } from "react-redux";
import { cartMapActions } from "../../store/cart-slice";

import plusIcon from "../../assets/icon-plus.svg";
import minusIcon from "../../assets/icon-minus.svg";
import cartIcon from "../../assets/icon-cart-white.svg";

import style from "./ProductStyles/ProductDeal.module.scss";

const ProductDeal = function ({ data }) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const formSubmit = function (e) {
    e.preventDefault();

    const submitter = e.nativeEvent.submitter.name;
    if (submitter === "add" && count > 0) {
      dispatch(
        cartMapActions.add({
          ...data,
          piece: count,
        })
      );
      setCount(0);
    }
  };

  const increaseCount = function () {
    setCount((prev) => (prev += 1));
  };

  const decreaseCount = function () {
    if (!count) return;

    setCount((prev) => (prev -= 1));
  };

  return (
    <div className={style.productDeal}>
      <div className={style.productDeal__prices}>
        <div className={style.productDeal__salePrice}>
          <span className={style.productDeal__sale}>${data.salePrice}</span>
          <span className={style.productDeal__percent}>{data.percent}</span>
        </div>

        <span className={style.productDeal__oldPrice}>
          <del>${data.oldPrice}</del>
        </span>
      </div>

      <form className={style.productDeal__form} onSubmit={formSubmit}>
        <div className={style.productDeal__counts}>
          <button onClick={decreaseCount} name="decrease">
            <img src={minusIcon} alt="" />
          </button>
          <span>{count}</span>
          <button onClick={increaseCount} name="increase">
            <img src={plusIcon} alt="" />
          </button>
        </div>

        <button
          className={style["productDeal__form--submit"]}
          type="submit"
          name="add"
        >
          <img src={cartIcon} alt="" />
          Add to cart
        </button>
      </form>
    </div>
  );
};

export default ProductDeal;
