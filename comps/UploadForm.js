import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = ({ docs }) => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(null);
  const [newCategory, setNewCategory] = useState(false);
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);

  const categories = [];
  docs.forEach((cat) => {
    categories.push(Object.keys(cat)[0]);
  });

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
    if (selected === "Select") {
      setNewCategory(false);
    }
    if (selected === "New Category") {
      setNewCategory(true);
    } else {
      setCategory(selected);
      setNewCategory(false);
    }
  };

  const newCategorySelector = (e) => {
    let selected = e.target.value;
    setCategory(selected);
  };

  const storySelector = (e) => {
    let selected = e.target.value;
    setStory(selected);
  };

  return (
    <form className="upload-form">
      <div className="category">
        <label className="category-label">Choose an Image Category</label>
        <select name="category" onChange={categorySelector}>
          <option>Select</option>
          {categories.map((cat) => (
            <option>{cat}</option>
          ))}
          <option>New Category</option>
        </select>
      </div>
      {newCategory ? (
        <div className="new-category">
          <input
            type="text"
            placeholder="Category"
            onChange={newCategorySelector}
          ></input>
        </div>
      ) : null}
      <div>
        <label for="story" className="story-label">
          Add a story:
        </label>
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          placeholder="This was taken on..."
          onChange={storySelector}
        />
      </div>
      <label className="upload">
        <input className="file-upload" type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error ? <div className="error">{error}</div> : null}
        {file ? <div className="file">{file.name}</div> : null}
        {file ? (
          <ProgressBar
            file={file}
            category={category}
            story={story}
            setFile={setFile}
          />
        ) : null}
      </div>
    </form>
  );
};

export default UploadForm;
