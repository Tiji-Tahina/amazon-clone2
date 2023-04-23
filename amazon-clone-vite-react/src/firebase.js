// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmMygvDN87IyiEbneANIx4ElbFp3DbODg",
  authDomain: "challenge-83043.firebaseapp.com",
  projectId: "challenge-83043",
  storageBucket: "challenge-83043.appspot.com",
  messagingSenderId: "497908528658",
  appId: "1:497908528658:web:20ad0dcd7358d8d0b9cacb",
  measurementId: "G-2MK3F1675C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);