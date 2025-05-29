// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6cjfGEpmDjeEMqt-uINp_tBtr6C5OfMk",
  authDomain: "meeting-management-1880f.firebaseapp.com",
  projectId: "meeting-management-1880f",
  storageBucket: "meeting-management-1880f.firebasestorage.app",
  messagingSenderId: "884351727216",
  appId: "1:884351727216:web:17a6b7801c14c026dae6b5",
  measurementId: "G-H52XM7WD03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}