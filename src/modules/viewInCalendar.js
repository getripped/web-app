import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function viewInCalendar() {
    const calendarDiv = document.querySelector("#calendar");

    const calendarViewDiv = document.querySelector(".calendar-view");
    const exitBtn = document.querySelector(".exit-btn");

    const six = document.querySelector(".six");
    const two = document.querySelector(".two");
    const sixHome = document.querySelector(".six .home");

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
            calendar.render();
        })
        .then(() => {
            sixHome.addEventListener("click", () => {
                six.classList.add("hide");
                two.classList.remove("hide");

                viewInCalendar()
            });

            calendarViewDiv.addEventListener("click", () => {
                calendarDiv.classList.remove("visibility");
                two.classList.add("hide");
                exitBtn.classList.remove('hide');
            });

            exitBtn.addEventListener("click",() => {
                calendarDiv.classList.add("visibility");
                two.classList.remove("hide");
                exitBtn.classList.add('hide');
            })
        })

        .catch((error) => {
            console.error("Error getting document:", error);
        });

    console.log(eventsArr);
}
