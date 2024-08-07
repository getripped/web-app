import "./assets/style.css";

import favicon from "./modules/favicon";
import images from "./modules/images";

import signin from "./modules/signin";
import firebase from "./modules/firebase";
import checkLS from "./modules/checkLS";
import createRoutine from "./modules/createRoutine";
import displayRoutine from "./modules/displayRoutine";
import viewInCalendar from "./modules/viewInCalendar";
// import load from "./modules/load";

favicon();

document.addEventListener("DOMContentLoaded", () => {
    // load()
    checkLS();
    images();
    firebase();
    viewInCalendar();
    signin();
    displayRoutine();
    createRoutine();
});
