const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();
    console.log(`Player choose ${selection}`);
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        console.log(`Computer choose ${ROCK}`);
        return ROCK;
    } else if (randomValue < 0.67) {
        console.log(`Computer choose ${PAPER}`);
        return PAPER;
    } else {
        console.log(`Computer choose ${SCISSORS}`);
        return SCISSORS;
    }
}
console.log(getComputerChoice());

const getWinner = (cChoice, pChoice) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER || 
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function() {
    // if (gameIsRunning) {
    //     return;
    // }
    // gameIsRunning = true;
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    console.log(winner);
});