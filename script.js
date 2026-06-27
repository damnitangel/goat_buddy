let petLevel = 100;

const percentage = document.getElementById("percentage");
const mood = document.getElementById("mood");
const message = document.getElementById("message");
const button = document.getElementById("pet-btn");
const goat = document.getElementById("goat");

function updateUI() {
  percentage.textContent = petLevel + "%";

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
    mood.textContent = "Chaos Goat";
    message.textContent = "The goat has lost control";
  }
}

// drain over time
setInterval(() => {
  if (petLevel > 0) {
    petLevel -= 1;
    updateUI();
  }
}, 1000);

// button
button.addEventListener("click", () => {
  petLevel = Math.min(100, petLevel + 20);
  updateUI();
});

updateUI();