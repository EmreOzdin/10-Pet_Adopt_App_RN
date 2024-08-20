// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXnjTaO0Tp_APTNFZTImk_TP9Lme8z_RY",
  authDomain: "rn-pet-adopt-app.firebaseapp.com",
  projectId: "rn-pet-adopt-app",
  storageBucket: "rn-pet-adopt-app.appspot.com",
  messagingSenderId: "436744185354",
  appId: "1:436744185354:web:34e1cbe5924a97d3cfa1f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
