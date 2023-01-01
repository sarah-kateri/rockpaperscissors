let countPlayer = 0;
let countCPU = 0;
let playerSelection;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let cpuplays = document.querySelector('.cpuplays');
let round = document.querySelector('.round');
let results = document.querySelector('.results');
let playercount = document.querySelector('.playercount');
let cpucount = document.querySelector('.cpucount');

rock.addEventListener('click', () => {
    playRound("rock");
    });

paper.addEventListener('click', () => {
    playRound("paper");
    });

scissors.addEventListener('click', () => {
    playRound("scissors");
    });

function playRound(playerSelection) {
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
        round.textContent = "Something went wrong";
    }
    } 

    const computerSelection = getComputerChoice();
    cpuplays.textContent = "CPU plays " + getComputerChoice();
    
    if (playerSelection == computerSelection) {
        round.textContent = "It's a tie. Play again.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        round.textContent = "You lose. Paper covers rock.";
        cpucount.textContent = "CPU: " + ++countCPU;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        round.textContent = "You win! Rock crushes scissors.";
        playercount.textContent = "You: " + ++countPlayer;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        round.textContent = "You win! Paper covers rock.";
        playercount.textContent = "You: " + ++countPlayer;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        round.textContent = "You lose. Scissors cuts paper.";
        cpucount.textContent = "CPU: " + ++countCPU;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        round.textContent = "You lose. Rock crushes scissors."
        cpucount.textContent = "CPU: " + ++countCPU;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        round.textContent = "You win! Scissors cuts paper.";
        playercount.textContent = "You: " + ++countPlayer;
    } else {   
        round.textContent = "Choose a weapon.";
    }

    function winOrLose() {    
        if (countPlayer === 5) {  
            results.textContent = "YOU ARE THE WINNER!";
        } else if (countCPU === 5) {
            results.textContent = "YOU ARE THE LOSER.";
        } 
        }
    winOrLose();
    
}
    
            
 
