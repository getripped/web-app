import "./assets/style.css";

import favicon from "./modules/favicon";
import images from "./modules/images";

import signin from "./modules/signin";
import firebase from "./modules/firebase";
// import welcome from "./modules/welcome";
import checkLS from "./modules/checkLS";
import createRoutine from "./modules/createRoutine";

favicon();

document.addEventListener("DOMContentLoaded", () => {
    checkLS();
    images();
    firebase();
    signin();
    // welcome();

    createRoutine();
});

import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMNET_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const testRef = collection(db, "H88HE8Va0VV7Wx1aj6DYTNRU0Gr2");

const docIds = [];

getDocs(testRef)
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            docIds.push(doc.id);
        });
        console.log("Document IDs:", docIds);
    })
    .catch((error) => {
        console.error("Error fetching document IDs:", error);
    });

const collectionRef = collection(db, "mycollection");

// Fetch documents to check if the collection exists
getDocs(collectionRef)
    .then((querySnapshot) => {
        if (querySnapshot.empty) {
            console.log("Collection exists but has no documents.");
        } else {
            console.log("Collection exists and contains documents.");
        }
    })
    .catch((error) => {
        console.error("Error fetching documents:", error);
    });
