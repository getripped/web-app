import { getFirestore, doc, setDoc } from "firebase/firestore";

export default function addToCalendar(workoutName) {
    const currentDate = new Date();
    console.log(currentDate);

    let formattedDate = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    console.log(formattedDate);

    const userObject = JSON.parse(localStorage.getItem("user_object"));
    let uid = userObject.uid;

    const db = getFirestore();

    const docRef = doc(db, uid, "dates");

    setDoc(
        docRef,
        {
            [formattedDate]: workoutName,
        },
        { merge: true }
    );
}
