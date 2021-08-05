import Carousel from "./Carousel";

const ImageDisplay = ({ setSelectedImg, setSelectedStory, docs }) => {
  return (
    <div className="img-display">
      {docs
        ? docs.map((items) => (
            <Carousel
              setSelectedImg={setSelectedImg}
              setSelectedStory={setSelectedStory}
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
