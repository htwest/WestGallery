import Carousel from "./Carousel";

const ImageDisplay = ({ setSelectedImg, docs }) => {
  return (
    <div className="img-display">
      {docs
        ? docs.map((items) => (
            <Carousel
              setSelectedImg={setSelectedImg}
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
