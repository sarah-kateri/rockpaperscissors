function getRandomInt(max) {
    return Math.floor(Math.random * max)
}
let num = getRandomInt(3);

function getComputerChoice(num) {
    if (num == 0) {
        console.log("Rock");
    } else if (num == 1) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

getComputerChoice(2);