import { useState } from "react";

import UploadForm from "../comps/UploadForm";
import ImageDisplay from "../comps/ImageDisplay";
import Header from "../comps/Header";
import Modal from "../comps/Modal";

// Login Status
import { useContext } from "react";
import { AuthContext } from "../comps/Auth";

export default function Home() {
  const { currentUser } = useContext(AuthContext);

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <div>
        <Header />
        {currentUser ? <UploadForm /> : null}
        <ImageDisplay setSelectedImg={setSelectedImg} />
      </div>
      {selectedImg ? (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      ) : null}
    </div>
  );
}
