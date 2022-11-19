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

const ProductSlides = function ({ data }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const lgImgs = data.largePics.map((img, i) => (
    <SwiperSlide key={i}>
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

  const lgSwiperObj = {
    style: {
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff",
    },
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
    },
    modules: [FreeMode, Navigation, Thumbs],
    className: "lgSwiper",
  };

  const smSwiperObj = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    modules: [FreeMode, Navigation, Thumbs],
    className: "smSwiper",
  };

  return (
    <div className="swiper-container">
      <Swiper {...lgSwiperObj}>
        {lgImgs}
        <button className="swiper-button-next">
          <img src={nextIcon} alt="" />
        </button>
        <button className="swiper-button-prev">
          <img src={prevIcon} alt="" />
        </button>
      </Swiper>
      <Swiper {...smSwiperObj}>{width >= 600 && smImgs}</Swiper>
    </div>
  );
};

export default ProductSlides;
