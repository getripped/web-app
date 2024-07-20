import { getFirestore, doc, getDoc } from "firebase/firestore";
import displayWorkout from "./displayWorkout";

export default function selectRoutine(exerciseName) {
    const three = document.querySelector(".three");
    const five = document.querySelector(".five");

    const userObject = JSON.parse(localStorage.getItem("user_object"));
    let uid = userObject.uid;

    const db = getFirestore();

    const docRef = doc(db, uid, exerciseName);
    getDoc(docRef)
        .then((docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                const exerciseNameArray = Object.keys(data);
                console.log(exerciseNameArray);
                three.classList.add("hide");
                five.classList.remove("hide");
                displayWorkout(exerciseName, exerciseNameArray);
            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.error("Error getting document:", error);
        });
}
