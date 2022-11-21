import ProductSlides from "./ProductSlides";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";

import closeIcon from "../../assets/icon-close-white.svg";

import "./ProductStyles/ProductSlidesLarge.scss";

const ProductSlidesLarge = function ({
  data,
  showLargeSlides,
  setShowLargeSlides,
}) {
  const hideLargeSlides = function (e) {
    e.stopPropagation();
    const targetClass = e.target.className;
    if (
      targetClass.includes("backdrop") ||
      targetClass.includes("large-slides-close-icon")
    )
      setShowLargeSlides(false);
  };

  return (
    <Modal targetContainer="large-slides-container">
      <Backdrop onHide={hideLargeSlides}>
        <div className="large-img-container">
          <button onClick={hideLargeSlides} className="large-slides-close-icon">
            <img
              src={closeIcon}
              alt=""
              className="large-slide-backdrop-close"
            />
          </button>

          <ProductSlides
            data={data}
            showLargeSlides={showLargeSlides}
            largeDisplayPic="large-display-picture"
            smallDisplayPic="small-display-picture"
            smallPicGap={25}
          />
        </div>
      </Backdrop>
    </Modal>
  );
};

export default ProductSlidesLarge;
