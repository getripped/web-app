import { getFirestore, doc, setDoc } from "firebase/firestore";

export default function routineFB(routineName, routineObj) {
    const db = getFirestore();

    const userObject = JSON.parse(localStorage.getItem("user_object"));
    let uid = userObject.uid;

    for (const key in routineObj) {
        const routineFieldRef = doc(db, `${uid}`, `${routineName}`);

        setDoc(
            routineFieldRef,
            {
                [key]:key
            },
            { merge: true }
        );

        const routineRef = doc(
            db,
            `${uid}`,
            `${routineName}`,
            `${key}`,
            "details"
        );

        const keyy = key;

        setDoc(
            routineRef,
            {
                duration: routineObj[keyy][2],
                equipment: routineObj[keyy][3],
                reps: routineObj[keyy][1],
                sets: routineObj[keyy][0],
            },
            { merge: true }
        );
    }
}
