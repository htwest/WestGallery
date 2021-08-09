const ModalText = ({ selectedStory }) => {
  const handleClick = (e) => {
    setText(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-text">
        <p onClick={handleClick}>{selectedStory}</p>
      </div>
    </div>
  );
};

export default ModalText;
