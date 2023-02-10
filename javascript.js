function playGame() {

    let computerSelection = (function() {
        const choices = ["rock", "paper", "scissors"]
        let randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    })();
    
    console.log(computerSelection)
      
    let playerSelection = (function() {
        let playerChoice = prompt("Your weapon of choice:", "rock, paper, scissors");
        return playerChoice.toLowerCase();
    })();
    
    console.log(playerSelection)
    
    function playRound(computerSelection, playerSelection) {
        if((computerSelection === "rock") && (playerSelection === "paper")){
         return "Player Wins!"   
        } else if((computerSelection === "paper") && (playerSelection === "scissors")) {
         return "Player Wins!"   
        } else if((computerSelection === "scissors") && (playerSelection === "rock")) {
         return "Player Wins!"   
        } else if((computerSelection === "rock") && (playerSelection === "scissors")) {
         return "Computer Wins!"   
        } else if((computerSelection === "scissors") && (playerSelection === "paper")) {
         return "Computer Wins!"   
        } else if((computerSelection === "paper") && (playerSelection === "rock")) {
         return "Computer Wins!"   
        } else if((computerSelection === "rock") && (playerSelection === "rock")) {
         return "It is a Draw!"   
        } else if((computerSelection === "paper") && (playerSelection === "paper")) {
         return "It is a Draw!"   
        } else if((computerSelection === "scissors") && (playerSelection === "scissors")) {
         return "It is a Draw!"   
        } else {
        return "Something went wrong!"
        }                 
    }
    
    console.log(playRound(computerSelection, playerSelection))
    
    }
    
    
    
    
        for (let rounds = 0; rounds < 5; rounds++) {
            console.log(playGame());
        }
    
    
    
      