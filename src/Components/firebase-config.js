
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA8ZeIlq-y3O56RSu54NgZvbUmPFGVjwyU",
    authDomain: "neoleon-b452e.firebaseapp.com",
    projectId: "neoleon-b452e",
    storageBucket: "neoleon-b452e.appspot.com",
    messagingSenderId: "949811321314",
    appId: "1:949811321314:web:24456fe0f3ff1e93bc01bb"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

  export const db = getFirestore(app);