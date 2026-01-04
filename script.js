const playerChoiceBtn = document.querySelectorAll(".player-choice");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const description = document.getElementById("description");
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound (humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        playerScore++;
        computerScore++;
        description.textContent = `It's a tie!! Both you and the computer chose ${humanChoice}`;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        description.textContent = `You win!! You chose ${humanChoice} and the computer chose ${computerChoice}`;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
    } else {
        computerScore++;
        description.textContent = `Computer Win!! The computer chose ${computerChoice} and you chose ${humanChoice}`;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
    }
}

playerChoiceBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.value);
    })
})