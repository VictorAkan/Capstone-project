import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB18erlcGjHWdgvj5egRTwf0KKiYq_5LHo",
    authDomain: "car-dealership-16fe5.firebaseapp.com",
    projectId: "car-dealership-16fe5",
    storageBucket: "car-dealership-16fe5.appspot.com",
    messagingSenderId: "180505679873",
    appId: "1:180505679873:web:a71fff1e7e2d56fb888800",
    measurementId: "G-KS9LYZZFFJ"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);