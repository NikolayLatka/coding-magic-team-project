
const rockBox = document.querySelector(".rock-box");
const paperBox = document.querySelector(".paper-box");
const scissorsBox = document.querySelector(".scissors-box");

const resultMessage = document.querySelector(".rps-result");
const computerButton = document.querySelector(".computer-result");

const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");


let userScore = 0;
let computerScore = 0;
let computerChoice = null;


const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex];
}


function decideWinner(user, computer) {
if (user === computer) return "draw";

if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
) {
    return "user";
} else {
    return "computer";
}
}


function updateResult(winner) {
if (winner === "user") {
    userScore++;
    resultMessage.textContent = "Ви виграли раунд!";
    resultMessage.style.color = "green";
} else if (winner === "computer") {
    computerScore++;
    resultMessage.textContent = "Комп’ютер виграв раунд!";
    resultMessage.style.color = "red";
} else {
    resultMessage.textContent = "Нічия!";
    resultMessage.style.color = "gray";
}
userScoreEl.textContent = userScore;
computerScoreEl.textContent = computerScore;
}


computerButton.addEventListener("click", () => {
if (!computerChoice) {
    alert("Спочатку зробіть свій вибір!");
    return;
}
alert(`Комп’ютер обрав: ${computerChoice}`);
});

function playRound(userChoice) {
computerChoice = getComputerChoice();

const winner = decideWinner(userChoice, computerChoice);
updateResult(winner);
}


rockBox.addEventListener("click", () => playRound("rock"));
paperBox.addEventListener("click", () => playRound("paper"));
scissorsBox.addEventListener("click", () => playRound("scissors"));
