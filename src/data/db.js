import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkvTMB6oBjY232Z09YGieqrar-YDXtewE",
  authDomain: "e-commerce-starfire.firebaseapp.com",
  projectId: "e-commerce-starfire",
  storageBucket: "e-commerce-starfire.firebasestorage.app",
  messagingSenderId: "611750118813",
  appId: "1:611750118813:web:5b1e2ba1242a57e2bb5b74",
  measurementId: "G-P2YMF33C3S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;