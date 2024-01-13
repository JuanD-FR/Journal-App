// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvjXYczvf8KkSE8m51Wle2kHSuJxVmcBc",
  authDomain: "journal-app-4a18d.firebaseapp.com",
  projectId: "journal-app-4a18d",
  storageBucket: "journal-app-4a18d.appspot.com",
  messagingSenderId: "265267931679",
  appId: "1:265267931679:web:6dc442fc4a3c07376dc32a"
};

// Initialize Firebase
export const firebaseApp = initializeApp( firebaseConfig );
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDB = getFirestore( firebaseApp );
