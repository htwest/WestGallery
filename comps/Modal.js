import { useState } from "react";
import ModalText from "./ModalText";

const Modal = ({
  selectedImg,
  setSelectedImg,
  selectedStory,
  setSelectedStory,
}) => {
  const [text, setText] = useState(false);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
      setSelectedStory(null);
      setText(null);
    } else {
      if (!text) {
        setText(true);
      } else {
        setText(false);
      }
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="modal-pic" />
      {text ? (
        <ModalText className="text-modal" selectedStory={selectedStory} />
      ) : null}
    </div>
  );
};

export default Modal;
