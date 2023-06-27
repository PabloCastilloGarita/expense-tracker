// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpFdr8dZsYxcSyR7x8eYSnctjZq_asgy4",
  authDomain: "expense-tracker-61b93.firebaseapp.com",
  projectId: "expense-tracker-61b93",
  storageBucket: "expense-tracker-61b93.appspot.com",
  messagingSenderId: "803343091447",
  appId: "1:803343091447:web:89eb916dee1c5aa52575f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
