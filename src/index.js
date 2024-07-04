import "./assets/style.css";

import favicon from "./modules/favicon";
import images from "./modules/images";

import signin from "./modules/signin";
import firebase from "./modules/firebase";
import welcome from "./modules/welcome";
import checkLS from "./modules/checkLS";

favicon();

document.addEventListener("DOMContentLoaded", () => {
    checkLS();
    images();
    firebase();
    signin();
    welcome();
});