//your JS code here. If required.

const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

// Select the buttons container
const buttons = document.getElementById("buttons");

// Create audio objects
const audios = [];

sounds.forEach((sound) => {

    // Create button
    const btn = document.createElement("button");

    btn.classList.add("btn");

    btn.textContent = sound;

    // Create audio
    const audio = new Audio(`sounds/${sound}.mp3`);

    audios.push(audio);

    // Add click event
    btn.addEventListener("click", () => {

        stopSounds();

        audio.play();

    });

    buttons.appendChild(btn);
});

// Stop all sounds function
function stopSounds() {

    audios.forEach((audio) => {

        audio.pause();

        audio.currentTime = 0;

    });

}

// Create stop button
const stopBtn = document.createElement("button");

stopBtn.classList.add("stop");

stopBtn.textContent = "Stop";

stopBtn.addEventListener("click", stopSounds);

buttons.appendChild(stopBtn);
