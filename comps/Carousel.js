import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation, EffectCoverflow } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

const Carousel = ({ docs }) => {
  console.log(docs);

  const perView = (docs) => {
    if (docs.length === 1) {
      return 1;
    } else {
      return 3;
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={perView(docs)}
        spaceBetween={20}
        loop={true}
        navigation={true}
        centeredSlides={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        className="mySwiper"
      >
        {docs.map((doc, index) => (
          <SwiperSlide className="slide-outer">
            <div className="slide">
              <img src={doc.url} key={doc.id} className="img-slide"></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
