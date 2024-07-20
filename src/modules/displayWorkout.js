import { getFirestore, doc, getDoc } from "firebase/firestore";
import displayExercise from "./displayExercise";

export default function displayWorkout(exerciseName, exerciseNameArray) {
    const userObject = JSON.parse(localStorage.getItem("user_object"));
    let uid = userObject.uid;

    const workoutName = document.querySelector(".five .workout-name");
    workoutName.innerHTML = exerciseName;

    // console.log(exerciseNameArray);

    for (const eachExercise of exerciseNameArray) {
        // console.log(eachExercise)
        const db = getFirestore();

        const docRef = doc(db, uid, exerciseName, eachExercise, "details");
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    displayExercise(eachExercise, data);
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.error("Error getting document:", error);
            });
    }
}
