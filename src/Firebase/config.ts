
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBLW6oAWDg6vpZ7Fkap5L6dvElN2T70qFw",
  authDomain: "fire-53279.firebaseapp.com",
  projectId: "fire-53279",
  storageBucket: "fire-53279.appspot.com",
  messagingSenderId: "170096484102",
  appId: "1:170096484102:web:373e74ed0c20bc0ee04887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);