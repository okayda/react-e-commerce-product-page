import { useState, useEffect } from "react";
import ProductSlides from "./ProductSlides";
import ProductSlidesLarge from "./ProductSlidesLarge";

import ProductContent from "./ProductContent";

import style from "./ProductStyles/Product.module.scss";

const Product = function (props) {
  const [showLargeSlides, setShowLargeSlides] = useState(false);
  const [curWidth, setCurWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurWidth(window.innerWidth);
    });
  });

  const displayLargeSlides = function () {
    setShowLargeSlides(true);
  };

  return (
    <article className={style.product}>
      {/* for backdrop product slides */}
      {showLargeSlides && curWidth > 640 ? (
        <ProductSlidesLarge
          data={props.dataImgs}
          showLargeSlides={showLargeSlides}
          setShowLargeSlides={setShowLargeSlides}
        />
      ) : (
        ""
      )}

      <ProductSlides data={props.dataImgs} onLargeSlides={displayLargeSlides} />
      <ProductContent data={props.dataContent} />
    </article>
  );
};

export default Product;
