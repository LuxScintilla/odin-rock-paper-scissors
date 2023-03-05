// MOVING BACKGROUND

const backGround = document.querySelector(".container");

backGround.addEventListener("mousemove", moveBG);

function moveBG(e) {
    backGround.style.backgroundPositionX = (e.clientX/20-200)+"px";

    backGround.style.backgroundPositionY = (e.clientY/20-100)+"px";

}

// START OF GAME FUNCTION CODE

const choiceButtons = document.querySelectorAll(".choice");
const pChoiceText = document.querySelector(".player-choice");
const cChoiceText = document.querySelector(".computer-choice");
const fightButton = document.querySelector(".fight-button");
const roundText = document.querySelector(".round-result");
const pScoreText = document.querySelector(".player-score");
const cScoreText = document.querySelector(".computer-score");
const gameResultText = document.querySelector(".game-result");
const gameReset = document.querySelector(".play-again");

let pChoice;
let cChoice;
let roundResult;

choiceButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        pChoiceText.textContent = button.value;
        pChoice = button.value;
    });
});

fightButton.addEventListener("click", function() {

    function computer() {
        const choices = ["rock", "paper", "scissors"]
        let computerChoice = choices[Math.floor(Math.random() * 3)];
        return computerChoice;
        }
    cChoice = computer();

    playRound(pChoice, cChoice)
    cChoiceText.textContent = cChoice;
    keepScore()
    pScoreText.textContent = playerScore
    cScoreText.textContent = computerScore

    buttonCount()
});

function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")){
        roundText.textContent = "Computer Wins!"
        roundResult = "Computer Wins!"
        return "Computer Wins!"
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){
        roundText.textContent = "Player Wins!"
        roundResult = "Player Wins!"
        return "Player Wins!"
    }
    else if((playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")){
        roundText.textContent = "It is a Draw!"
        roundResult = "It is a draw!"
        return "It is a draw!"
    } else {
        roundText.textContent = "Something went wrong!"
        return "Something went wrong!"
    }
}

let playerScore = 0;
let computerScore = 0;

function keepScore() {
    if(roundResult === "Computer Wins!"){
        computerScore++
    } else if(roundResult === "Player Wins!"){
        playerScore++
    } else if(roundResult === "It is a draw!") {
        playerScore = playerScore
        computerScore = computerScore
    } else if(roundResult = "Something went wrong!") {
        playerScore = playerScore
        computerScore = computerScore
    } else {
        playerScore = playerScore
        computerScore = computerScore
    }
}

let buttonPressed = 0;

function buttonCount () {
    buttonPressed++

    if(buttonPressed === 5) {
        finalScore()
        fightButton.disabled = true;
        fightButton.style.backgroundColor = "#aaaaaa";
    }
}

function finalScore() {
    if(playerScore === computerScore){
        gameResultText.textContent = "The final result is a Draw!"
    } else if(playerScore > computerScore){
        gameResultText.textContent = "The winner is Player!"
    } else if(playerScore < computerScore){
        gameResultText.textContent = "The winner is Computer!"
    }
}

gameReset.addEventListener("click", reset);

function reset() {
    pChoiceText.textContent = "" 
    cChoiceText.textContent = ""
    roundText.textContent = "Ready to Play?"
    pScoreText.textContent = "0"
    cScoreText.textContent = "0"
    gameResultText.textContent = "Who will win this Round?"
    playerScore = 0;
    computerScore = 0;
    buttonPressed = 0;
    fightButton.disabled = false;
    fightButton.style.backgroundColor = "#E4C28E";
}

