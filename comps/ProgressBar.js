import { useState, useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, category, setFile }) => {
  const { url, progress } = useStorage(file, category);
  console.log(progress, url, category);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      Uploading
    </div>
  );
};

export default ProgressBar;
