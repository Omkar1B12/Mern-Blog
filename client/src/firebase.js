// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-80b42.firebaseapp.com",
  projectId: "mern-blog-80b42",
  storageBucket: "mern-blog-80b42.firebasestorage.app",
  messagingSenderId: "459647786741",
  appId: "1:459647786741:web:7b6aafc147ddcb2f3defbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);