// Nombre à deviner
let numberToGuess = Math.floor(Math.random() * 10) + 1;
let tries = 3;

const input = document.getElementById("guessInput");
const button = document.getElementById("submitBtn");
const message = document.getElementById("message");

button.addEventListener("click", function() {
  const userGuess = Number(input.value);
  
  if (userGuess === numberToGuess) {
    message.textContent = "Congratulations! You guessed it!";
    button.disabled = true; // fin du jeu
  } else {
    tries--;
    if (tries > 0) {
      message.textContent = `Wrong! You have ${tries} tries left.`;
    } else {
      message.textContent = `Game Over! The number was ${numberToGuess}.`;
      button.disabled = true; // fin du jeu
    }
  }

  input.value = ""; // vide l'input
});
