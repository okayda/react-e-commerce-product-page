import ProductSlides from "./ProductSlides";
import style from "./Product.module.css";

const Product = function () {
  return (
    <section className={style.product}>
      <ProductSlides />
    </section>
  );
};

export default Product;
