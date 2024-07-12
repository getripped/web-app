import "./assets/style.css";

import favicon from "./modules/favicon";
import images from "./modules/images";

import signin from "./modules/signin";
import firebase from "./modules/firebase";
import checkLS from "./modules/checkLS";
import createRoutine from "./modules/createRoutine";
import displayRoutine from "./modules/displayRoutine";

favicon();

document.addEventListener("DOMContentLoaded", () => {
    checkLS();
    images();
    firebase();
    signin();
    // welcome();
    displayRoutine();
    createRoutine();\
});

// import { getFirestore, collection, getDocs } from "firebase/firestore";
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

// const collectionRef = collection(db, "mycollection");

// // Fetch documents to check if the collection exists
// getDocs(collectionRef)
//     .then((querySnapshot) => {
//         if (querySnapshot.empty) {
//             console.log("Collection exists but has no documents.");
//         } else {
//             console.log("Collection exists and contains documents.");
//         }
//     })
//     .catch((error) => {
//         console.error("Error fetching documents:", error);
//     });
