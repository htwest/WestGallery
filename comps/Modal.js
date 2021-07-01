const Modal = ({ selectedImg }) => {
  return (
    <div className="backdrop">
      <img src={selectedImg} alt="modal-pic" />
    </div>
  );
};

export default Modal;
