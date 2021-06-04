import { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    // NOTE: currenly only selects one file at a time
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please Select an Image File");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error ? <div>{error}</div> : null}
        {file ? <div>{file.name}</div> : null}
      </div>
    </form>
  );
};

export default UploadForm;
