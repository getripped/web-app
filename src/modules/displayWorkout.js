import { getFirestore, doc, getDoc } from "firebase/firestore";
import displayExercise from "./displayExercise";
import addToCalendarFB from "./addToCalendarFB";

export default function displayWorkout(workoutName, exerciseNameArray) {
    const userObject = JSON.parse(localStorage.getItem("user_object"));
    let uid = userObject.uid;

    const workoutNameDiv = document.querySelector(".five .workout-name");
    workoutNameDiv.innerHTML = workoutName;

    // console.log(workoutNameArray);

    for (const eachExercise of exerciseNameArray) {
        // console.log(eachExercise)
        const db = getFirestore();

        const docRef = doc(db, uid, workoutName, eachExercise, "details");
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    displayExercise(eachExercise, data, workoutName);
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.error("Error getting document:", error);
            });
    }

    const workoutDoneBtn = document.querySelector(".workout-done-btn");

    workoutDoneBtn.addEventListener("click", () => {
        addToCalendarFB(workoutName);
        const five = document.querySelector(".five");
        five.classList.add("hide");
        const six = document.querySelector(".six");
        six.classList.remove("hide");
    });
}
