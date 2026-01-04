const playerChoiceBtn = document.querySelectorAll(".player-choice");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const description = document.getElementById("description");
const btnContainer = document.querySelector(".btn");
const yourChoiceText = document.querySelector("h2");
const playAgain = document.getElementById("play-again");
let playerScore = 0;
let computerScore = 0;
let totalRound = 0;

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
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        description.textContent = `You win!! You chose ${humanChoice} and the computer chose ${computerChoice}`;
    } else {
        computerScore++;
        description.textContent = `Computer Win!! The computer chose ${computerChoice} and you chose ${humanChoice}`;
    }
    totalRound++;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;


    if (totalRound === 5) {
        btnContainer.style.display = "none";
        yourChoiceText.style.display = "none";
        playAgain.style.display = "block";
        if (playerScore > computerScore) {
            description.textContent = `YOU WIN!! Your score is ${playerScore} and the computer score is ${computerScore}`;
        } else if (playerScore < computerScore) {
            description.textContent = `YOU LOSE!! Your score is ${playerScore} and the computer score i ${computerScore}`;
        } else {
            description.textContent = `IT'S A TIE!! Both you and the computer score are ${playerScore}`;
        }
    }
}

playerChoiceBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.value);
    })
})

playAgain.addEventListener("click", () => {
    btnContainer.style.display = "flex";
    yourChoiceText.style.display = "block";
    playAgain.style.display = "none";
    description.textContent = "";
    playerScoreText.textContent = "0";
    computerScoreText.textContent = "0";
    playerScore = 0;
    computerScore = 0;
    totalRound = 0;
})