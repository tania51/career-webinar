// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf7iEf_PbhOGSa57v9ElVDAKxkGArZgDE",
  authDomain: "careers-fair.firebaseapp.com",
  projectId: "careers-fair",
  storageBucket: "careers-fair.appspot.com",
  messagingSenderId: "646517391301",
  appId: "1:646517391301:web:ec0d4bdd50e55b7ba655ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;