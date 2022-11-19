import style from "./ProductStyles/Product.module.scss";
import ProductDeal from "./ProductDeal";
const ProductContent = function ({ data }) {
  return (
    <div className={style.product__wrapper}>
      <div className={style.product__content}>
        <span className={style.product__brand}>{data.company}</span>
        <h2 className={style.product__title}>{data.title}</h2>
        <p className={style.product__description}>{data.description}</p>
      </div>

      <ProductDeal id={data.id} />
    </div>
  );
};

export default ProductContent;
