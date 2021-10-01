import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "cjwest-photography.firebaseapp.com",
  projectId: "cjwest-photography",
  storageBucket: "cjwest-photography.appspot.com",
  messagingSenderId: "238541324306",
  appId: process.env.APP_ID,
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectStorage, projectFirestore, timestamp };
