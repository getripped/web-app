import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import calendarImg from "../assets/calendar.svg";

import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function neww() {
    const calendarDiv = document.querySelector("#calendar");

    const six = document.querySelector(".six");
    const sixView = document.querySelector(".six .view");

    const sixViewImg = document.querySelector(".six .view img");
    sixViewImg.src = calendarImg;

    const userObject = JSON.parse(localStorage.getItem("user_object"));
    let uid = userObject.uid;

    const db = getFirestore();

    const docRef = doc(db, uid, "dates");

    const eventsArr = [{ title: "Name", start: "2024-07-10" }];

    getDoc(docRef)
        .then((docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                for (const d in data) {
                    const tempEventsObj = { title: data[d], start: d };
                    console.log(tempEventsObj);
                    eventsArr.push(tempEventsObj);
                }
            } else {
                console.log("No such document!");
            }
            return eventsArr;
        })
        .then((eventsArr) => {
            console.log(eventsArr);

            let calendarEl = document.getElementById("calendar");

            let calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, timeGridPlugin],
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek",
                },
                events: eventsArr,
            });

            return calendar;
        })
        .then((calendar) => {
            sixView.addEventListener("click", () => {
                six.classList.add("hide");
                calendarDiv.classList.remove("hide");
                calendar.render();
            });
        })

        .catch((error) => {
            console.error("Error getting document:", error);
        });

    console.log(eventsArr);
}
