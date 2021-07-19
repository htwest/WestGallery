import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = ({ docs }) => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);

  const categories = [];
  docs.forEach((cat) => {
    categories.push(Object.keys(cat)[0]);
  });
  console.log(categories);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    // NOTE: currenly only selects one file at a time
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      if (category) {
        setFile(selected);
        setError(null);
      } else {
        setError("Please Select an Image Category");
      }
    } else {
      setFile(null);
      setError("Please Select an Image File");
    }
  };

  const categorySelector = (e) => {
    let selected = e.target.value;
    setCategory(selected);
  };

  return (
    <form>
      <div></div>
      <div className="category">
        <input
          type="text"
          placeholder="Category"
          onChange={categorySelector}
        ></input>
      </div>
      <label>
        <input className="file-upload" type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error ? <div className="error">{error}</div> : null}
        {file ? <div className="file">{file.name}</div> : null}
        {file ? (
          <ProgressBar file={file} category={category} setFile={setFile} />
        ) : null}
      </div>
    </form>
  );
};

export default UploadForm;
