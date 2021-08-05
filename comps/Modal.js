import { useState } from "react";
import ModalText from "./ModalText";

const Modal = ({
  selectedImg,
  setSelectedImg,
  selectedStory,
  setSelectedStory,
}) => {
  const [text, setText] = useState(null);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
      setSelectedStory(null);
      setText(null);
    } else {
      setText(true);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="modal-pic" />
      {text ? <ModalText selectedStory={selectedStory} /> : null}
    </div>
  );
};

export default Modal;
