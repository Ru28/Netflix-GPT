// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQUSeq0YjCUznjzYTODeB440-qGVjsw14",
  authDomain: "netflixgpt-11336.firebaseapp.com",
  projectId: "netflixgpt-11336",
  storageBucket: "netflixgpt-11336.appspot.com",
  messagingSenderId: "630574209757",
  appId: "1:630574209757:web:ed853c3f687fe251ee9934",
  measurementId: "G-9LKPQK5TS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();