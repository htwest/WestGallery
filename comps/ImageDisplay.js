import { useState, useEffect } from "react";
import Carousel from "./Carousel";

const ImageDisplay = ({ setSelectedImg, setSelectedStory, docs }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 400) {
      setMobile(true);
    }
  }, []);

  return (
    <div className="img-display">
      {docs
        ? docs.map((items) => (
            <Carousel
              setSelectedImg={setSelectedImg}
              setSelectedStory={setSelectedStory}
              className="carousel"
              mobile={mobile}
              docs={items[Object.keys(items)[0]]}
              key={Object.keys(items)[0]}
            />
          ))
        : null}
    </div>
  );
};

export default ImageDisplay;
