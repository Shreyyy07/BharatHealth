// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFojkm9kfaJNFYzwJCeL7Ek4xqLrrO7lI",
  authDomain: "healthcare-8d05f.firebaseapp.com",
  projectId: "healthcare-8d05f",
  storageBucket: "healthcare-8d05f.firebasestorage.app",
  messagingSenderId: "307348907970",
  appId: "1:307348907970:web:6d8dfd69c74e4bcdb3185b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export {auth};