import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function viewInCalendar(workoutName, date) {
    // const calendarDiv = document.querySelector("#calendar");
    // calendarDiv.classList.remove("hide");

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

    // console.log(calendar);

    calendar.render();
}
