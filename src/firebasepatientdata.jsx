// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Correct import for Firestore

// Your web app's Firebase configuration
const firebaseConfigpatient = {
    apiKey: "AIzaSyAaIPCKHBE5NxjzR-jr8liNnbJk24bvJog",
    authDomain: "patient-details-fa53c.firebaseapp.com",
    projectId: "patient-details-fa53c",
    storageBucket: "patient-details-fa53c.appspot.com",
    messagingSenderId: "957869256679",
    appId: "1:957869256679:web:864033e8e770cd8d7c5742"
};

// Initialize Firebase
const apppatient = initializeApp(firebaseConfigpatient, 'patientApp');
const db = getFirestore(apppatient);

export { db };

const firebaseConfigdoctor = {
    apiKey: "AIzaSyCs5m_UWtSKSqm00HHBIph0RA1iNzWDc6M",
    authDomain: "doctor-details-c8ce9.firebaseapp.com",
    projectId: "doctor-details-c8ce9",
    storageBucket: "doctor-details-c8ce9.appspot.com",
    messagingSenderId: "859857627213",
    appId: "1:859857627213:web:86a5c5510096ed53d3d404"
};

// Initialize Firebase
const appdoctor = initializeApp(firebaseConfigdoctor, 'DoctordataApp');
const dba = getFirestore(appdoctor);

export { dba };
