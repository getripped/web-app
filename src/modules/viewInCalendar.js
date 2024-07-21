import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import calendarImg from "../assets/calendar.svg";

export default function viewInCalendar(workoutName, date) {
    const calendarDiv = document.querySelector("#calendar");

    const six = document.querySelector(".six");
    const sixView = document.querySelector(".six .view");
    const sixViewImg = document.querySelector(".six .view img");

    sixViewImg.src = calendarImg;

    let calendarEl = document.getElementById("calendar");

    let calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin],
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek",
        },
        events: [
            {
                title: workoutName,
                start: date,
            },
        ],
    });

    sixView.addEventListener("click", () => {
        six.classList.add("hide");
        calendarDiv.classList.remove("hide");
        calendar.render();
    });
}
