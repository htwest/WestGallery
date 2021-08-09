const ModalText = ({ selectedStory }) => {
  // console.log(selectedStory);
  return (
    <div className="modal-backdrop">
      <div className="modal-text">
        <p>{selectedStory}</p>
      </div>
    </div>
  );
};

export default ModalText;
