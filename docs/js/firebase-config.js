// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAMyXl5uWSWYNAy-... (EXEMPLO)",
  authDomain: "dacsovel-53481.firebaseapp.com",
  projectId: "dacsovel-53481",
  storageBucket: "dacsovel-53481.appspot.com",
  messagingSenderId: "37867522513",
  appId: "1:37867522513:web:336d687e3fc8408bd138f0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
