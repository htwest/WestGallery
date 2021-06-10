import useFireStore from "../hooks/useFireStore";
import Carousel from "./Carousel";

const ImageDisplay = () => {
  // currently only gets image from 'testImages collection
  const { docs } = useFireStore("testImages");
  console.log(docs);

  return (
    <div className="img-display">
      {docs ? docs.map((items) => <Carousel docs={items} />) : null}
    </div>
  );
};

export default ImageDisplay;
