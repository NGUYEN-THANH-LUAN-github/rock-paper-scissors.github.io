const choices = ['rock', 'paper', 'scissors'];

let pScore = 0,
    cScore = 0;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function computerPlay() {
    const index = randomIntFromInterval(1, 3) - 1;
    return choices[index];
};

function playRound(pSelection, cSelection) {
    if (pSelection === cSelection) {
        console.log(`It's a tie. You and computer both chose "${pSelection}"`);
    } else if (pSelection === "rock" && cSelection === "paper" ||
        pSelection === "paper" && cSelection === "scissors" ||
        pSelection === "scissors" && cSelection === "rock") {
        console.log(`You lost this round! You chose "${pSelection}" vs Computer's choice "${cSelection}"`);
        cScore++;
    } else {
        console.log(`You won this round! You chose "${pSelection}" vs Computer's choice "${cSelection}"`);
        pScore++;
    }
    console.log(`${pScore} vs. ${cScore}`);
}



function game() {
    while (pScore < 5 && cScore < 5) {
        const cSelection = computerPlay();

        const pSelection = prompt("enter your choice").toLowerCase();

        playRound(pSelection, cSelection);
    }
    pScore === 5 ? console.log("You won the game!") : console.log("You lost the game!");
}

game();