export default function displayExercise(exerciseName, data) {
    // console.log(data);
    const exercisesDiv = document.querySelector(".five .exercises");

    if (data.duration == 0) {
        const startElement = document.createElement("div");
        startElement.classList.add("exercise-box");
        startElement.innerHTML = `<div class="exercise-name">${exerciseName}</div><div class="details-section"><div class="sets">sets: ${data.sets}</div><div class="reps">reps: ${data.reps}</div></div>`;

        exercisesDiv.appendChild(startElement);
    } else if (data.reps == 0) {
        const startElement = document.createElement("div");
        startElement.classList.add("exercise-box");
        startElement.innerHTML = `<div class="exercise-name">${exerciseName}</div><div class="details-section"><div class="sets">sets: ${data.sets}</div><div class="duration">${data.duration} seconds</div></div>`;

        exercisesDiv.appendChild(startElement);
    }
}
