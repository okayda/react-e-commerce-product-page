import ProductSlides from "./ProductSlides";
import ProductContent from "./ProductContent";

import style from "./Product.module.scss";

const Product = function () {
  return (
    <article className={style.product}>
      <ProductSlides />
      <ProductContent />
    </article>
  );
};

export default Product;
