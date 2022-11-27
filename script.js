let countP1 = 0;
let countCPU = 0;

function playRound() {

    function getRandomInt() {
        return Math.floor(Math.random() * 3);
    }

    const num = getRandomInt();

    function getComputerChoice() {
    if (num == 0) {
        return ("rock");
    } else if (num == 1) {
        return ("paper");
    } else if (num == 2) {
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
        console.log("You lose. Paper covers rock.");
        console.count("CPU");
        countCPU++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock crushes scissors.");
        console.count("You");
        countP1++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper covers rock.")
        console.count("You");
        countP1++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose. Scissors cuts paper.")
        console.count("CPU");
        countCPU++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose. Rock crushes scissors.")
        console.count("CPU");
        countCPU++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors cuts paper.")
        console.count("You");
        countP1++;
    } else {   
        console.log("Choose a weapon.");
    }
}

function game() {
    while (countP1 < 3 && countCPU < 3) {
        playRound();
    } 
}

function winOrLose() {    
    if (countP1 == 3) {  
        console.log("YOU ARE THE WINNER!");
    } else if (countCPU == 3) {
        console.log("YOU ARE THE LOSER.");
    } else { 
        playRound();
    }
}

game();

winOrLose();