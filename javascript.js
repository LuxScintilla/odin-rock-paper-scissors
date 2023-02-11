function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")){
        return "Computer Wins!"
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){
        return "Player Wins!"
    }
    else if((playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")){
        return "It is a draw!"
    } else {
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
    }
}

for (let rounds = 0; rounds < 5; rounds++) {
    function player() {
        let playerChoice = prompt("Your weapon of choice:", "rock, paper, or scissors").toLowerCase();
        return playerChoice;
    }
    
    let pChoice = player();
    console.log(pChoice);
    
    function computer() {
        const choices = ["rock", "paper", "scissors"]
        let computerChoice = choices[Math.floor(Math.random() * 3)];
        return computerChoice;
    }
    
    let cChoice = computer();
    console.log(cChoice);

    playRound(pChoice, cChoice)
    roundResult = playRound(pChoice, cChoice);
    console.log(roundResult)
    keepScore()
    console.log(`Player Score is: ${playerScore}`)
    console.log(`Computer Score is:${computerScore}`)
}

function finalScore() {
    if(playerScore === computerScore){
        console.log("The final result is a Draw!")
    } else if(playerScore > computerScore){
        console.log("The winner of the game is: Player!")
    } else if(playerScore < computerScore){
        console.log("The winner of the game is: Computer!")
    }
}

finalScore()