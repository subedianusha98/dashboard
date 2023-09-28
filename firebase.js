// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASbWSUEr3V7HPX2mGRsLbT9vqZuY9SopY",
  authDomain: "dashboard-design-f715a.firebaseapp.com",
  projectId: "dashboard-design-f715a",
  storageBucket: "dashboard-design-f715a.appspot.com",
  messagingSenderId: "996330838919",
  appId: "1:996330838919:web:36526dd3114faed1255122",
  measurementId: "G-J37JVDCC3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);