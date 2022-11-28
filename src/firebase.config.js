import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEjiS_aJeMR8Npqq4QJ4Ca0FBlf24FUQ0",
  authDomain: "house-marketplace-app-2a96e.firebaseapp.com",
  projectId: "house-marketplace-app-2a96e",
  storageBucket: "house-marketplace-app-2a96e.appspot.com",
  messagingSenderId: "670979400217",
  appId: "1:670979400217:web:34d11f711af00bce104088",
  measurementId: "G-XV322NZSH4",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
