import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD54xt0fxmPeIYnXeMvlTv2kZ2fZXAjxs0",
  authDomain: "e-commerce-project-d3158.firebaseapp.com",
  projectId: "e-commerce-project-d3158",
  storageBucket: "e-commerce-project-d3158.appspot.com",
  messagingSenderId: "637879706172",
  appId: "1:637879706172:web:eb17bd11aaefefcc4d5939",
};
console.log("firebaseConfig", firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
