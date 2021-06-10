import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import sortImages from "../hooks/sortImages";

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      // order Documents in list
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        // group Images by category
        const grouped = sortImages(documents);

        // console.log(grouped);
        // console.log(documents);

        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFireStore;
