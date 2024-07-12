import { setLogLevel } from "firebase/app";
import routineFB from "./routineFB";

export default function createRoutine() {
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");

    let routineName = "default";
    let routineObj = new Object();

    const routineNameInput = document.querySelector(".routine-name-input");

    const exerciseNameInput = document.querySelector(".exercises-name-input");
    const setsInput = document.querySelector(".sets-input");
    const repsInput = document.querySelector(".reps-input");
    const secsInput = document.querySelector(".secs-input");
    const eqInput = document.querySelector(".equipment-input");

    const plusBtn = document.querySelector(".plus-btn");

    plusBtn.addEventListener("click", () => {
        routineName = routineNameInput.value;
        // console.log(routineName);

        let e = exerciseNameInput.value;
        let s = setsInput.value;
        let r = repsInput.value;
        let ss = secsInput.value;
        let eq = eqInput.value;

        routineObj[`${e}`] = [s, r, ss, eq];

        // console.log(routineObj)

        exerciseNameInput.value = "";
        setsInput.value = "";
        repsInput.value = "";
        secsInput.value = "";
        eqInput.selectedIndex = 0;
    });

    const doneBtn = document.querySelector(".done-btn");

    doneBtn.addEventListener("click", () => {
        console.log(routineObj);

        four.classList.add('hide');
        three.classList.remove('hide');

        routineFB(routineName, routineObj);
    });
}
