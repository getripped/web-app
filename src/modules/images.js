import logo from "../assets/logo.svg";
import google_logo from "../assets/google_logo.svg";
import plus from "../assets/plus.svg"
import calendarImg from "../assets/calendar.svg";

export default function images() {
    const mainLogo = document.querySelector(".logo img");
    mainLogo.src = logo;

    const googleLogo = document.querySelector(".google-logo img");
    googleLogo.src = google_logo;

    const plusBtn = document.querySelector(".plus-btn img");
    plusBtn.src = plus;

    const calendarViewImg = document.querySelector(".two .calendar-view img");
    calendarViewImg.src = calendarImg;
}
