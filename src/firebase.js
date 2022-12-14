import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAvjGbdTuZD69lNjP6h9n1eKOI391js9aw",

  authDomain: "psycquiz.firebaseapp.com",

  projectId: "psycquiz",

  storageBucket: "psycquiz.appspot.com",

  messagingSenderId: "313341454705",

  appId: "1:313341454705:web:1cf28970aac4a04b256ed0",

  measurementId: "G-H8QGRBY9C3"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
