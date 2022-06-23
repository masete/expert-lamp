// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFHg8HjN81mcE3CWY52_gwL-OA94CHkgw",
  authDomain: "portfolio-ceed7.firebaseapp.com",
  projectId: "portfolio-ceed7",
  storageBucket: "portfolio-ceed7.appspot.com",
  messagingSenderId: "772724881834",
  appId: "1:772724881834:web:7292a7510001ee10e293d3",
  measurementId: "G-7CB84PC1NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => signInWithPopup(auth, provider)