import "./assets/style.css";

import favicon from "./modules/favicon";
import images from "./modules/images";

import signin from "./modules/signin";
import firebase from "./modules/firebase";
// import welcome from "./modules/welcome";
import checkLS from "./modules/checkLS";

favicon();

document.addEventListener("DOMContentLoaded", () => {
    checkLS();
    images();
    firebase();
    signin();
    // welcome();
});

// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMNET_ID,
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore();

// const testRef = doc(db, "test_uid", "routine_name", "workout_name", "details");

// setDoc(testRef, {
//     teest: "teeeeeeest",
// }, { merge: true });
