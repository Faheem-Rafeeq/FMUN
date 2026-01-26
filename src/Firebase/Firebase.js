import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqknGOiG6YJNyQHld9K4bQcwuw_GuqIpA",
  authDomain: "fmun-c6e09.firebaseapp.com",
  projectId: "fmun-c6e09",
  storageBucket: "fmun-c6e09.firebasestorage.app",
  messagingSenderId: "565745289163",
  appId: "1:565745289163:web:378aa1a161e4b893f1984e",
  measurementId: "G-8SEGTG0F6L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);