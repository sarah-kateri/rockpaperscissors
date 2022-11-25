function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

let num = getRandomInt();

function getComputerChoice() {
    if (num == 0) {
        console.log("Rock");
    } else if (num == 1) {
        console.log("Paper");
    } else if (num == 2) {
        console.log("Scissors");
    } else {
        console.log("Something went wrong")
    }
}

getComputerChoice();