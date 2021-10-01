import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration

// var firebaseConfig = {
//   apiKey: "AIzaSyAjR6KDtycnCxUH26NH1JVJc2Kg6IP3GoY",
//   authDomain: "cjwest-photography.firebaseapp.com",
//   projectId: "cjwest-photography",
//   storageBucket: "cjwest-photography.appspot.com",
//   messagingSenderId: "238541324306",
//   appId: "1:238541324306:web:5a96ae04019263bc0458cb",
// };

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESS_SENDER_ID,
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
