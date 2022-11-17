import style from "./Product.module.scss";
import ProductDeal from "./ProductDeal";
const ProductContent = function () {
  console.log(style);

  return (
    <div className={style.product__wrapper}>
      <div className={style.product__content}>
        <span className={style.product__brand}>sneaker company</span>
        <h2 className={style.product__title}>Fall Limited Edition Sneakers</h2>
        <p className={style.product__description}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everthing the
          weather can offer.
        </p>
      </div>

      <ProductDeal />
    </div>
  );
};

export default ProductContent;
