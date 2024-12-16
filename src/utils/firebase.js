// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-gpt-70684.firebaseapp.com",
  projectId: "netflix-gpt-70684",
  storageBucket: "netflix-gpt-70684.firebasestorage.app",
  messagingSenderId: "1087493422614",
  appId: "1:1087493422614:web:f233f73969391d8bd7bf37",
  measurementId: "G-BH4B0ZP6TC"
};

console.log('hereeeeeeeeeeeeeeeeeeeeeeee', firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth();