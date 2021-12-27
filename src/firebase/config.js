import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDOfacHqXZyszUTvD6bhHi6dkn-DERKH2E",
  authDomain: "clone-first-e3ab8.firebaseapp.com",
  projectId: "clone-first-e3ab8",
  storageBucket: "clone-first-e3ab8.appspot.com",
  messagingSenderId: "833923427691",
  appId: "1:833923427691:web:36d70f3089bc4578e1702e",
  measurementId: "G-LGJGZ1CSS7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}

export default db