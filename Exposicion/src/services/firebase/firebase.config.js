// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6-hQAb2oBQF5KkdP5bKypIzRE5HTiblg",
  authDomain: "heaven-2df58.firebaseapp.com",
  databaseURL: "https://heaven-2df58-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "heaven-2df58",
  storageBucket: "heaven-2df58.appspot.com",
  messagingSenderId: "301516674981",
  appId: "1:301516674981:web:4337ac34d86b371a0e3a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;