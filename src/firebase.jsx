// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigusers = {
  apiKey: "AIzaSyC0JX7p1Jn0UlO3Qy1lLti77je3fCPsn0E",
  authDomain: "customer-application-c7501.firebaseapp.com",
  projectId: "customer-application-c7501",
  storageBucket: "customer-application-c7501.appspot.com",
  messagingSenderId: "387820553595",
  appId: "1:387820553595:web:111a4415f30d4df76329de",
  measurementId: "G-MY3S60ETQ0"
};

// Initialize Firebase
const appuser = initializeApp(firebaseConfigusers , 'userApp');
const auth = getAuth(appuser);
export {auth};