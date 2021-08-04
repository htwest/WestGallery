import { useState } from "react";

import UploadForm from "../comps/UploadForm";
import ImageDisplay from "../comps/ImageDisplay";
import Header from "../comps/Header";
import Modal from "../comps/Modal";

// To get images
import useFireStore from "../hooks/useFireStore";

// Login Status
import { useContext } from "react";
import { AuthContext } from "../comps/Auth";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  // currently only gets image from 'testImages collection
  const { docs } = useFireStore("testImages");

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <div>
        <Header />
        <div className="container">
          {currentUser ? <UploadForm docs={docs} /> : null}
          <ImageDisplay setSelectedImg={setSelectedImg} docs={docs} />
        </div>
        {selectedImg ? (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        ) : null}
      </div>
    </div>
  );
}
