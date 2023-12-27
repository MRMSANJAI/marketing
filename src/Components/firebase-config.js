
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBony9SUPFat8s4T6L3uWjTEOHCP2xxPLk",
  authDomain: "neolon.firebaseapp.com",
  projectId: "neolon",
  storageBucket: "neolon.appspot.com",
  messagingSenderId: "1088524922388",
  appId: "1:1088524922388:web:3de0f35ff3d3806ab34101",
  measurementId: "G-N2TBCRK6B6"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

  export const db = getFirestore(app);
