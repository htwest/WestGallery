import { useState } from "react";

// Components
import UploadForm from "../comps/UploadForm";
import ImageDisplay from "../comps/ImageDisplay";
import Header from "../comps/Header";
import Modal from "../comps/Modal";
import Fog from "../comps/Fog";

// To get images
import useFireStore from "../hooks/useFireStore";

// Login Status
import { useContext } from "react";
import { AuthContext } from "../comps/Auth";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  const { docs } = useFireStore("Images");

  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="body">
      <Fog />
      <div className="header-container">
        <img src="./Header.jpg" />
        <Header />
      </div>
      <div className="gallery-container">
        {currentUser ? <UploadForm docs={docs} /> : null}
        <ImageDisplay
          setSelectedImg={setSelectedImg}
          docs={docs}
          setSelectedStory={setSelectedStory}
        />
      </div>
      {selectedImg ? (
        <Modal
          selectedImg={selectedImg}
          selectedStory={selectedStory}
          setSelectedImg={setSelectedImg}
          setSelectedStory={setSelectedStory}
        />
      ) : null}
    </div>
  );
}
