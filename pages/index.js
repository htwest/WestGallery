import UploadForm from "../comps/UploadForm";
import ImageDisplay from "../comps/ImageDisplay";
import Header from "../comps/Header";

import { useContext } from "react";
import { AuthContext } from "../comps/Auth";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <div>WORK IN PROGRESS</div>
      <h1>West-Gallery</h1>
      <Header />
      <ImageDisplay />
      <UploadForm />
    </div>
  );
}
