import useFireStore from "../hooks/useFireStore";

const ImageDisplay = () => {
  // currently only gets image from 'testImages collection
  const { docs } = useFireStore("testImages");
  console.log(docs);

  return <div className="img-display">images</div>;
};

export default ImageDisplay;
