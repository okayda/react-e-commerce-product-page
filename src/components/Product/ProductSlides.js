import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import lg1 from "../../assets/image-product-1.jpg";
import lg2 from "../../assets/image-product-2.jpg";
import lg3 from "../../assets/image-product-3.jpg";
import lg4 from "../../assets/image-product-4.jpg";

import sm1 from "../../assets/image-product-1-thumbnail.jpg";
import sm2 from "../../assets/image-product-2-thumbnail.jpg";
import sm3 from "../../assets/image-product-3-thumbnail.jpg";
import sm4 from "../../assets/image-product-4-thumbnail.jpg";

import nextIcon from "../../assets/icon-next.svg";
import prevIcon from "../../assets/icon-previous.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductSlides.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductSlides = function () {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const lgImgs = [lg1, lg2, lg3, lg4].map((img, i) => (
    <SwiperSlide key={i}>
      <img src={img} alt="Product" />
    </SwiperSlide>
  ));

  const smImgs = [sm1, sm2, sm3, sm4].map((img, i) => (
    <SwiperSlide key={i}>
      <img src={img} alt="Product" />
    </SwiperSlide>
  ));

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
    <>
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
    </>
  );
};

export default ProductSlides;
