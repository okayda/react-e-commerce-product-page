import ProductSlides from "./ProductSlides";
import ProductContent from "./ProductContent";

import style from "./ProductStyles/Product.module.scss";

const Product = function (props) {
  return (
    <article className={style.product}>
      <ProductSlides data={props.dataImgs} />
      <ProductContent data={props.dataContent} />
    </article>
  );
};

export default Product;
