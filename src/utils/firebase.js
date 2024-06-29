import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvmRqo17Mqquma8DtKu_EIPyepDG1T3Fc",
  authDomain: "cinemagpt-28afa.firebaseapp.com",
  projectId: "cinemagpt-28afa",
  storageBucket: "cinemagpt-28afa.appspot.com",
  messagingSenderId: "999247609655",
  appId: "1:999247609655:web:e25fb29bea6162ad75a4b2",
  measurementId: "G-VF5H259XMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
