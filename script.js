let pChoice, cChoice;
let pScore = 0,
    cScore = 0,
    ties = 0,
    games = 0;

const pScoreDisplay = document.querySelector('.pScore');
const cScoreDisplay = document.querySelector('.cScore');
const gamesPlayed = document.querySelector('.games');
const numOfTies = document.querySelector('.ties');

const choices = ['rock', 'paper', 'scissors'];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function computerPlay() {
    const index = randomIntFromInterval(1, 3) - 1;
    cChoice = choices[index];
};


function playRound(pChoice, cChoice) {
    if (pChoice === cChoice) {
        console.log(`It's a tie. You and computer both chose "${pChoice}"`);
        ties++;
        numOfTies.innerText = ties;
    } else if (pChoice === "rock" && cChoice === "paper" ||
        pChoice === "paper" && cChoice === "scissors" ||
        pChoice === "scissors" && cChoice === "rock") {
        cScore++;
        cScoreDisplay.innerText = `: ${cScore}`;
    } else {
        pScore++;
        pScoreDisplay.innerText = `: ${pScore}`;
    }
}

const btns = document.querySelectorAll('.btn');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    pChoice = "rock";
})
paper.addEventListener('click', () => {
    pChoice = "paper";
})
scissors.addEventListener('click', () => {
    pChoice = "scissors";
})

const reset = document.querySelector('.reset');
const replay = document.querySelector('.replay');

btns.forEach(btn => btn.addEventListener('click', () => {
    reset.removeAttribute('disabled');
    if (pScore < 5 && cScore < 5) {
        games++;
        gamesPlayed.innerText = games;
        computerPlay();
        playRound(pChoice, cChoice);
    }
    if (pScore === 5) {
        reset.setAttribute('disabled', '');
        replay.removeAttribute('disabled');
        btns.forEach(btn => { btn.setAttribute('disabled', '') })
        pScoreDisplay.innerHTML = ` <span style="color:green">WON!</span> (${pScore})`;
        cScoreDisplay.innerHTML = ` <span style="color:red">LOST</span> (${cScore})`;
    };
    if (cScore === 5) {
        reset.setAttribute('disabled', '');
        replay.removeAttribute('disabled');
        btns.forEach(btn => { btn.setAttribute('disabled', '') })
        pScoreDisplay.innerHTML = ` <span style="color:red">LOST</span> (${pScore})`;
        cScoreDisplay.innerHTML = ` <span style="color:green">WON</span> (${cScore})`;
    };
}));

function returnToStart() {
    games = 0;
    pScore = 0;
    cScore = 0;
    ties = 0;
    cScoreDisplay.innerText = `: ${cScore}`;
    pScoreDisplay.innerText = `: ${pScore}`;
    numOfTies.innerText = ties;
    gamesPlayed.innerText = games;
}

reset.addEventListener('click', () => {
    returnToStart();
    reset.setAttribute('disabled', '')
})
replay.addEventListener('click', () => {
    returnToStart();
    replay.setAttribute('disabled', '');
    btns.forEach(btn => { btn.removeAttribute('disabled') })
})