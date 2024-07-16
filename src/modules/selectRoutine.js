import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function selectRoutine(exerciseName) {
    const three = document.querySelector(".three");
    const five = document.querySelector(".five");

    if (exerciseName == "chest") {
        three.classList.add("hide");
        five.classList.remove("hide");
    }







    const userObject = JSON.parse(localStorage.getItem("user_object"));
    let uid = userObject.uid;



    const db = getFirestore();

    // Specify the document path
    const docRef = doc(db, uid, exerciseName);

    // Get the document
    getDoc(docRef)
        .then((docSnap) => {
            if (docSnap.exists()) {
                // Document data
                console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.error("Error getting document:", error);
        });
}
