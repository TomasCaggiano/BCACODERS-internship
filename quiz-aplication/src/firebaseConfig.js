// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-RsFVIS3ZajSBZv-gpHVXTg9aD9zRGiQ",
  authDomain: "quiz-aplica.firebaseapp.com",
  projectId: "quiz-aplica",
  storageBucket: "quiz-aplica.appspot.com",
  messagingSenderId: "984566881323",
  appId: "1:984566881323:web:82e09d4d271d6306371e6e",
  measurementId: "G-43J2HLEG0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };