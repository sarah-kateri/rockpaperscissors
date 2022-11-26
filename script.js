function playRound() {

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

const compChoice = getRandomInt();

function getComputerChoice() {
    if (compChoice == 0) {
        return ("rock");
    } else if (compChoice == 1) {
        return ("paper");
    } else if (compChoice == 2) {
        return ("scissors");
    } else {
        console.log("Something went wrong")
    }
}


let playerSelection = prompt("What is your choice? Rock Paper Scissors");

const computerSelection = getComputerChoice();

console.log("CPU plays " + getComputerChoice());

    if (playerSelection == computerSelection) {
        console.log("It's a tie. Play again.");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose. Paper covers rock.")
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock crushes scissors.")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper covers rock.")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose. Scissors cuts paper.")
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose. Rock crushes scissors.")
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors cuts paper.")
    } else {   
        console.log("Choose a weapon.");
    }
}

function game() {
    let i = playRound();
    for (let i = 0; i < 4; i++) {
        playRound();
    }
}

game();