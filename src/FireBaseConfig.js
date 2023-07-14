import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDww57dUMwiDSXad06f4CbnIhKDrY2JJqE",
  authDomain: "manga-store-dff10.firebaseapp.com",
  projectId: "manga-store-dff10",
  storageBucket: "manga-store-dff10.appspot.com",
  messagingSenderId: "804427128610",
  appId: "1:804427128610:web:4051142ffbc497feef0f7b",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
