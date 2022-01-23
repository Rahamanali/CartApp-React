import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm07SlPaeqzdQvUQWF-xPgjx4Jjs6sgZ8",
  authDomain: "shopping-cart-app-f4563.firebaseapp.com",
  projectId: "shopping-cart-app-f4563",
  storageBucket: "shopping-cart-app-f4563.appspot.com",
  messagingSenderId: "803854174062",
  appId: "1:803854174062:web:f11b7b1db9cb4259b6a37f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
