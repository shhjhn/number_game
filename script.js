
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById("guess");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

document.getElementById("guessBtn").addEventListener("click", () => {
    const guess = Number(input.value);

    if (!input.value || !Number.isInteger(guess) || guess < 1 || guess > 100) {
        message.textContent = "Enter a number from 1 to 100!";
        return;
    }

    attempts++;
    attemptsText.textContent = attempts;

    if (guess === secretNumber) {
        message.textContent = "🎉 Correct! You won!";
    } else if (guess < secretNumber) {
        message.textContent = "Too low! Try higher.";
    } else {
        message.textContent = "Too high! Try lower.";
    }

    input.value = "";
});

document.getElementById("resetBtn").addEventListener("click", () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsText.textContent = attempts;
    message.textContent = "New game! Good luck!";
    input.value = "";
});
