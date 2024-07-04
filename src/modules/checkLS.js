import welcome from "./welcome";

export default function checkLS() {
    const userObject = JSON.parse(localStorage.getItem("user_object"));

    const one = document.querySelector('.one');
    const two = document.querySelector('.two');

    if(userObject) {
        welcome()
    }

    else {
        one.classList.remove('hide');
    }
};
