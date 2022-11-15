import ProductSlides from "./ProductSlides";
import ProductContent from "./ProductContent";

import style from "./Product.module.css";

const Product = function () {
  return (
    <section className={style.product}>
      <ProductSlides />
      <ProductContent />
    </section>
  );
};

export default Product;
