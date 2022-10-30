// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIX4RSaXVKXSw3_FOmWj0U6qdmGXqWNRw",
  authDomain: "app1-45cf2.firebaseapp.com",
  projectId: "app1-45cf2",
  storageBucket: "app1-45cf2.appspot.com",
  messagingSenderId: "451194527393",
  appId: "1:451194527393:web:a2a82a9a32900cdf4b9ae0",
  measurementId: "G-75Q4NXVTB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)