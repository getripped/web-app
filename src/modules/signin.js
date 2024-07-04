import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import welcome from "./welcome";

export default function signin() {
    const provider = new GoogleAuthProvider();
    // console.log(provider);

    const auth = getAuth();
    // console.log(auth);

    const googleAuthPopup = () => {
        // console.log("before");
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // console.log(token);
                const user = result.user;
                // console.log(user);

                localStorage.setItem("user_object", JSON.stringify(user));
                localStorage.setItem("user_name", JSON.stringify(user.displayName));
                
                welcome()
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    const signInBtn = document.querySelector(".sign-in-btn");

    signInBtn.addEventListener("click", () => {
        // console.log("hi");
        googleAuthPopup();
    });
}
