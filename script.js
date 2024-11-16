// List of possible colors
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "lime", "brown", "grey"];
let currentColor = "";

// Function to change background color
function changeColor() {
    // Get a random color from the colors array
    currentColor = colors[Math.floor(Math.random() * colors.length)];
    // Set the background color to the random color
    document.body.style.backgroundColor = currentColor;
    // Reset message
    document.getElementById("message").textContent = "";
}

// Function to check the guessed color
function checkColor() {
    const colorGuess = document.getElementById("colorGuess").value.toLowerCase();
    const message = document.getElementById("message");

    if (colorGuess === "") {
        message.textContent = "Please enter a color name!";
        message.classList.remove("correct", "wrong");
        return;
    }

    // Check if the guess is correct
    if (colorGuess === currentColor) {
        message.textContent = "Correct! Well done!";
        message.classList.add("correct");
        message.classList.remove("wrong");
    } else {
        message.textContent = `Try again! The correct color was ${currentColor}.`;
        message.classList.add("wrong");
        message.classList.remove("correct");
    }
}
