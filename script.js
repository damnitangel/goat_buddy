let petLevel = 100;

const percentage = document.getElementById("percentage");
const mood = document.getElementById("mood");
const message = document.getElementById("message");
const button = document.getElementById("pet-btn");
const goat = document.getElementById("goat");

let currentState = "";

function setGoat(state, file) {
  if (currentState !== state) {
    goat.src = file;
    currentState = state;
  }
}

function updateUI() {
  percentage.textContent = petLevel + "%";

  // ✅ Mood text
  if (petLevel > 70) {
    mood.textContent = "Happy";
    message.textContent = "Living its best goat life";
  } else if (petLevel > 30) {
    mood.textContent = "Okay";
    message.textContent = "Could use some pets";
  } else if (petLevel > 0) {
    mood.textContent = "Lonely";
    message.textContent = "Please pet the goat 🥺";
  } else {
    mood.textContent = "Still Goat";
    message.textContent = "The goat has given up...";
  }

  // ✅ GIF SPEED CONTROL
  if (petLevel > 75) {
    setGoat("fast", "goat-fast.gif");
  } else if (petLevel > 50) {
    setGoat("medium", "goat-medium.gif");
  } else if (petLevel > 25) {
    setGoat("slow", "goat-slow.gif");
  } else if (petLevel > 0) {
    setGoat("super-slow", "goat-super-slow.gif");
  } else {
    setGoat("still", "goat-super-still.gif");
  }
}

// ✅ Drain over time (OUTSIDE function)
setInterval(() => {
  if (petLevel > 0) {
    petLevel -= 1;
    updateUI();
  }
}, 1000);

// ✅ Button (OUTSIDE function)
button.addEventListener("click", () => {
  petLevel = Math.min(100, petLevel + 20);
  updateUI();
});

// ✅ Initial load (OUTSIDE function)
updateUI();