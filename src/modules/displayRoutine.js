import { getFirestore, collection, getDocs } from "firebase/firestore";
import selectRoutine from "./selectRoutine";

export default function displayRoutine() {
    const getStartedBtn = document.querySelector(".get-started-btn");

    const three = document.querySelector(".three");
    const two = document.querySelector(".two");
    const four = document.querySelector(".four");

    getStartedBtn.addEventListener("click", () => {
        two.classList.add("hide");
        three.classList.remove("hide");
    });

    const routineSection = document.querySelector(".routine-section");

    const userObject = JSON.parse(localStorage.getItem("user_object"));
    let uid = userObject.uid;

    const routineArr = [];

    const db = getFirestore();

    const testRef = collection(db, uid);

    getDocs(testRef)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                routineArr.push(doc.id);

                let tempEl = document.createElement("div");
                tempEl.classList.add("routine-name");
                tempEl.innerHTML = doc.id;

                routineSection.appendChild(tempEl);
            });
            console.log("Document IDs:", routineArr);
        })
        .then(() => {
            const routineNames = document.querySelectorAll(".routine-name");

            routineNames.forEach((routine) => {
                routine.addEventListener("click", function () {
                    let exerciseName = this.textContent.trim();
                    console.log(exerciseName);
                    selectRoutine(exerciseName);
                });
            });
        })
        .catch((error) => {
            console.error("Error fetching document IDs:", error);
        });

    const addRoutineBtn = document.querySelector(".add-routine-btn");

    addRoutineBtn.addEventListener("click", () => {
        three.classList.add("hide");
        four.classList.remove("hide");
    });
}