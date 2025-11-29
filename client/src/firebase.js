// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdKMCK_2DABzVdm1XYdT9VYckzmZbzrXA",
  authDomain: "react-learning-softuni.firebaseapp.com",
  projectId: "react-learning-softuni",
  storageBucket: "react-learning-softuni.firebasestorage.app",
  messagingSenderId: "446101339768",
  appId: "1:446101339768:web:5fee8bb69aedb4dd3c378d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
