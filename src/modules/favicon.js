import faviconImg from "../assets/favicon.svg";

export default function favicon() {
    let head = document.querySelector("head");

    let setFavicon = document.createElement("link");

    setFavicon.setAttribute("rel", "shortcut icon");
    setFavicon.setAttribute("href", faviconImg);

    head.appendChild(setFavicon);
}
