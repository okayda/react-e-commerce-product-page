import plusIcon from "../../assets/icon-plus.svg";
import minusIcon from "../../assets/icon-minus.svg";
import cartIcon from "../../assets/icon-cart-white.svg";

import style from "./ProductDeal.module.scss";

const ProductDeal = function () {
  return (
    <div className={style.productDeal}>
      <div className={style.productDeal__prices}>
        <div className={style.productDeal__salePrice}>
          <span className={style.productDeal__sale}>$125.00</span>
          <span className={style.productDeal__percent}>50%</span>
        </div>

        <span className={style.productDeal__oldPrice}>
          <del>$250.00</del>
        </span>
      </div>

      <form className={style.productDeal__form}>
        <div className={style.productDeal__counts}>
          <button>
            <img src={minusIcon} alt="" />
          </button>
          <span>0</span>
          <button>
            <img src={plusIcon} alt="" />
          </button>
        </div>

        <button className={style["productDeal__form--submit"]} type="submit">
          <img src={cartIcon} alt="" />
          Add to cart
        </button>
      </form>
    </div>
  );
};

export default ProductDeal;
