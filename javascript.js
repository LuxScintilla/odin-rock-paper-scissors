function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    const CHOICES = ["rock", "paper", "scissors"];
    return CHOICES[randomNumber];
    // console.log(CHOICES[randomNumber])
}

function getPlayerChoice() {
    let playerChoice = prompt("Your weapon of choice:", "Rock, Paper, or Scissors");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
    // console.log(playerChoice)
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

console.log(computerSelection)
console.log(playerSelection)

function playGame(computerSelection, playerSelection) {

}

let result = playGame();

console.log(playGame)