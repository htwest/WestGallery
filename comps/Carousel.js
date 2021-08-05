import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper core and required modules
import SwiperCore, { Navigation, EffectCoverflow } from "swiper/core";

// Install Swiper modules (NOT CURRENTLY IMPLIMENTED)
// SwiperCore.use(EffectCoverflow);

const Carousel = ({ docs, setSelectedImg, setSelectedStory }) => {
  // console.log(docs);

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
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        className="mySwiper"
      >
        {docs.map((doc, index) => (
          <SwiperSlide className="slide-outer">
            <span className="helper" />
            <div
              className="slide-inner"
              onClick={() => {
                setSelectedImg(doc.url);
                // console.log(doc.story);
                setSelectedStory(doc.story);
              }}
            >
              <img src={doc.url} key={doc.id} className="img-slide"></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
