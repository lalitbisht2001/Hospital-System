// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigdoctor = {
  apiKey: "AIzaSyADoBSJGJFM4T7zx1MTHG7yhwElzrIY2Rs",
  authDomain: "doctor-application-a6249.firebaseapp.com",
  projectId: "doctor-application-a6249",
  storageBucket: "doctor-application-a6249.appspot.com",
  messagingSenderId: "445534903136",
  appId: "1:445534903136:web:ffbc6366e9834ef822dc05"
};

// Initialize Firebase
const appdoctor = initializeApp(firebaseConfigdoctor , 'doctorApp');
const authdoctor = getAuth(appdoctor);
export {authdoctor};