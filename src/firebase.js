// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyDNLJ6QUnT0QTocigxfYmtKq21eaIjOLoU",
  authDomain: "portfolio-ca0d4.firebaseapp.com",
  projectId: "portfolio-ca0d4",
  storageBucket: "portfolio-ca0d4.appspot.com",
  messagingSenderId: "116541616268",
  appId: "1:116541616268:web:d219cd946f1cfbb3410ba9",
  measurementId: "G-XSWVB86E3X",
  databaseURL: "https://portfolio-ca0d4-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const db2 = getDatabase();

