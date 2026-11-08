// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "cortexai-b54b3.firebaseapp.com",
    projectId: "cortexai-b54b3",
    storageBucket: "cortexai-b54b3.firebasestorage.app",
    messagingSenderId: "469765564217",
    appId: "1:469765564217:web:17dd06389474b6f3de2ae8",
    measurementId: "G-CJT1HRQ6NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()