import useFireStore from "../hooks/useFireStore";
import Carousel from "./Carousel";

const ImageDisplay = () => {
  // currently only gets image from 'testImages collection
  const { docs } = useFireStore("testImages");

  return (
    <div className="img-display">
      {docs
        ? docs.map((items) => (
            <Carousel
              className="carousel"
              docs={items[Object.keys(items)[0]]}
              key={Object.keys(items)[0]}
            />
          ))
        : null}
    </div>
  );
};

export default ImageDisplay;
