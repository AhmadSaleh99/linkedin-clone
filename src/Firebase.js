import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoAF7OD7dPAFZFxrYHN2yGrYUopTPfQ48",
  authDomain: "linkedin-clone-7ed09.firebaseapp.com",
  projectId: "linkedin-clone-7ed09",
  storageBucket: "linkedin-clone-7ed09.appspot.com",
  messagingSenderId: "701822448035",
  appId: "1:701822448035:web:8486e6abace9d2a34b6a16",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
