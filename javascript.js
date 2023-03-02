const choiceButtons = document.querySelectorAll(".choice");
const choiceText = document.querySelector(".choice-text");
const roundText = document.querySelector(".round-text");

let pChoice;
let cChoice;

choiceButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        choiceText.textContent = button.value;
        pChoice = button.value;
    });
});

function computer() {
    const choices = ["rock", "paper", "scissors"]
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
    }
cChoice = computer();

function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")){
        roundText.textContent = "Computer Wins!"
        return "Computer Wins!"
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){
        roundText.textContent = "Player Wins!"
        return "Player Wins!"
    }
    else if((playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")){
        roundText.textContent = "It is a Draw!"
        return "It is a draw!"
    } else {
        roundText.textContent = "Something went wrong!"
        return "Something went wrong!"
    }
}



// IGNORE THE REST OF THIS IS FOR REFACTORING

// function computer() {
//     const choices = ["rock", "paper", "scissors"]
//     let computerChoice = choices[Math.floor(Math.random() * 3)];
//     return computerChoice;
//     }
// let cChoice = computer();


// function playRound(playerSelection, computerSelection) {
//     if((playerSelection === "rock" && computerSelection === "paper") ||
//     (playerSelection === "paper" && computerSelection === "scissors") ||
//     (playerSelection === "scissors" && computerSelection === "rock")){
//         return "Computer Wins!"
//     }
//     else if((playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")){
//         return "Player Wins!"
//     }
//     else if((playerSelection === "rock" && computerSelection === "rock") ||
//     (playerSelection === "paper" && computerSelection === "paper") ||
//     (playerSelection === "scissors" && computerSelection === "scissors")){
//         return "It is a draw!"
//     } else {
//         return "Something went wrong!"
//     }
// }


// let playerScore = 0;
// let computerScore = 0;

// function keepScore() {
//     if(roundResult === "Computer Wins!"){
//         computerScore++
//     } else if(roundResult === "Player Wins!"){
//         playerScore++
//     }
// }


// playRound(pChoice, cChoice)
// roundResult = playRound(pChoice, cChoice);
// console.log(roundResult)
// keepScore()
// console.log(`Player Score is: ${playerScore}`)
// console.log(`Computer Score is:${computerScore}`)


// function finalScore() {
//     if(playerScore === computerScore){
//         console.log("The final result is a Draw!")
//     } else if(playerScore > computerScore){
//         console.log("The winner of the game is: Player!")
//     } else if(playerScore < computerScore){
//         console.log("The winner of the game is: Computer!")
//     }
// }

// finalScore()