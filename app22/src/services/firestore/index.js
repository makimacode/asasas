// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIX4RSaXVKXSw3_FOmWj0U6qdmGXqWNRw",
  authDomain: "app1-45cf2.firebaseapp.com",
  projectId: "app1-45cf2",
  storageBucket: "app1-45cf2.appspot.com",
  messagingSenderId: "451194527393",
  appId: "1:451194527393:web:a2a82a9a32900cdf4b9ae0",
  measurementId: "G-75Q4NXVTB8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app)