import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESS_SENDER_ID,
  appId: process.env.APP_ID,
};

// var firebaseConfig = {
//   apiKey: "AIzaSyBZvatzJwQ8amwht9V5TKsy3HEyx7COhsU",
//   authDomain: "west-gallery-b5290.firebaseapp.com",
//   projectId: "west-gallery-b5290",
//   storageBucket: "west-gallery-b5290.appspot.com",
//   messagingSenderId: "520491801433",
//   appId: "1:520491801433:web:bbb21aded01d0eb624ca48",
// };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
