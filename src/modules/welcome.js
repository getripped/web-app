export default function welcome() {
    const userObject = JSON.parse(localStorage.getItem("user_object"));

    const pfp = document.querySelector(".pfp");
    pfp.innerHTML = `<img src="${userObject.photoURL}" alt="">`;

    const welcomeText = document.querySelector(".welcome-user");
    welcomeText.innerHTML = `welcome ${userObject.displayName} !`;
}
