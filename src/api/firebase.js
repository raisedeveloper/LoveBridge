// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAizPpReAn9hdOG54KCxvZ3X29QtncJF1U",
  authDomain: "lovebridge-29dfc.firebaseapp.com",
  projectId: "lovebridge-29dfc",
  storageBucket: "lovebridge-29dfc.appspot.com",
  messagingSenderId: "521970812699",
  appId: "1:521970812699:web:0f00eda87a9143f1de35be",
  measurementId: "G-RD4SW5M61H"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);