import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDoRBByNnsrBaAm3rDBT8WKmkw3YsyQaDA",
  authDomain: "fir-auth-b0b25.firebaseapp.com",
  projectId: "fir-auth-b0b25",
  storageBucket: "fir-auth-b0b25.appspot.com",
  messagingSenderId: "486236633602",
  appId: "1:486236633602:web:e42d68925fbbec07aac51b",
  measurementId: "G-DJNEM53G9D",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = GoogleAuthProvider(app);
