import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    setDoc,
} from "firebase/firestore";

export default function userDataFB(userUID) {
    // init services
    const db = getFirestore();

    const userDataRef = doc(db, "userData", userUID);

    const userObject = JSON.parse(localStorage.getItem("user_object"));

    setDoc(userDataRef, {
        email: userObject.email,
        name: userObject.displayName,
        photo: userObject.photoURL
    });
}
