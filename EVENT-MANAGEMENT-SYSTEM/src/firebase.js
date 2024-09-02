import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC-M42g3G8YBsTR_wJTnQMupUQUQnDl8nk",
    authDomain: "event-managment-system-dd8f4.firebaseapp.com",
    projectId: "event-managment-system-dd8f4",
    storageBucket: "event-managment-system-dd8f4.appspot.com",
    messagingSenderId: "962229027571",
    appId: "1:962229027571:web:c318cab0618b3677c36d86",
    measurementId: "G-CEGL1XQVKB"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };