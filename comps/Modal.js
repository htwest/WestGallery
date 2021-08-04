import { useState } from "react";
import ModalText from "./ModalText";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const [text, setText] = useState(null);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
      setText(null);
    } else {
      setText(true);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="modal-pic" />
      {text ? <ModalText /> : null}
    </div>
  );
};

export default Modal;
