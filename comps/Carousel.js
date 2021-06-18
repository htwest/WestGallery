import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use(Navigation);

const Carousel = ({ docs }) => {
  console.log(docs);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        centeredSlides={true}
        className="mySwiper"
      >
        {docs.map((doc) => (
          <SwiperSlide>
            <div className="slide">
              <img src={doc.url} className="img-slide"></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
