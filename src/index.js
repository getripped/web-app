import "./assets/style.css";

import favicon from "./modules/favicon";
import images from "./modules/images";

import signin from "./modules/signin";
import firebase from "./modules/firebase";

favicon();

document.addEventListener("DOMContentLoaded", () => {
    images();
});

firebase();
document.addEventListener("DOMContentLoaded", () => {
    signin();
});
