import sortDocs from "../hooks/sortDocs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

// Install Swiper modules
SwiperCore.use(Navigation);

const Carousel = ({ mobile, docs, setSelectedImg, setSelectedStory }) => {
  return (
    <>
      <Swiper
        slidesPerView={sortDocs(mobile, docs.length)}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        navigation={true}
        className="mySwiper"
      >
        {docs.map((doc, index) => (
          <SwiperSlide className="slide-outer">
            <span className="helper" />
            <div
              className="slide-inner"
              onClick={() => {
                setSelectedImg(doc.url);
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
