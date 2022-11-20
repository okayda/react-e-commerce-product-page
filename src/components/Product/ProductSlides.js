import { useState, useEffect } from "react";
// Imported Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import nextIcon from "../../assets/icon-next.svg";
import prevIcon from "../../assets/icon-previous.svg";

// Imported Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./ProductStyles/ProductSlides.scss";

import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductSlides = function ({
  data,

  // only for backdrop product slides
  onLargeSlides,
  largeDisplayPic,
  smallDisplayPic,
  smallPicGap,
  showLargeSlides,
}) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const lgImgs = data.largePics.map((img, i) => (
    <SwiperSlide key={i} onClick={onLargeSlides}>
      <img src={require(`../../assets/${img}`)} alt="Product" />
    </SwiperSlide>
  ));

  const smImgs = data.smallPics.map((img, i) => {
    return (
      <SwiperSlide key={i}>
        <img src={require(`../../assets/${img}`)} alt="Product" />
      </SwiperSlide>
    );
  });

  // only for without backdrop slides & for larger slides
  // with backdrop.. alternate class name
  const alterArrowClass = function (str) {
    return showLargeSlides
      ? `swiper-large-slides-${str}`
      : `swiper-button-${str}`;
  };

  const lgSwiperObj = {
    style: {
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff",
    },
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: `.${alterArrowClass("next")}`,
      prevEl: `.${alterArrowClass("prev")}`,
    },
    thumbs: {
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
    },
    modules: [FreeMode, Navigation, Thumbs],

    className: `lgSwiper ${largeDisplayPic}`,
  };

  const smSwiperObj = {
    onSwiper: setThumbsSwiper,
    spaceBetween: smallPicGap ? smallPicGap : 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    modules: [FreeMode, Navigation, Thumbs],

    className: `smSwiper ${smallDisplayPic}`,
  };

  return (
    <div className="swiper-container">
      <Swiper {...lgSwiperObj}>
        {lgImgs}
        <button className={alterArrowClass("next")}>
          <img src={nextIcon} alt="" />
        </button>
        <button className={alterArrowClass("prev")}>
          <img src={prevIcon} alt="" />
        </button>
      </Swiper>

      <Swiper {...smSwiperObj}>{width >= 600 && smImgs}</Swiper>
    </div>
  );
};

export default ProductSlides;
