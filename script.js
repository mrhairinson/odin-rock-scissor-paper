const ROCK = 1;
const SCISSOR = 2;
const PAPER = 3;
const DRAW = 0;
const WIN = 1;
const LOSE = -1;
const resultObj = {
    1: 'url("./assets/images/rock.png")',
    2: 'url("./assets/images/scissor.png")',
    3: 'url("./assets/images/paper.png")'
}

// DOM QUERRY
//Result dom
const resultDom = document.querySelector("#result");
//Restart btn
const restartBtn = document.querySelector("#restart");
//Rock btn
const rockBtn = document.querySelector("#rock");
//Scissor btn
const scissorBtn = document.querySelector("#scissor");
//Paper btn
const paperBtn = document.querySelector("#paper");
//Player choice image
const playerImage = document.querySelector("#player");
//Computer choice image
const computerImage = document.querySelector("#computer");
//Player point
const playerPointDom = document.querySelector("#user-point");
//Computer point
const computerPointDom = document.querySelector("#computer-point");
//Round
const roundDom = document.querySelector("#round");

// Game variable
const WINNER = 3;
let userChoice = 0;
let computerChoice = 0;
let userWins = 0;
let computerWins = 0;
let gameEnd = false;

// Function to get computer choice
let getComputerChoice = () => {
    //Return value range from 1 to 3
    return Math.floor(Math.random() * 3) + 1;
}

//Restart game
let restartGame = () => {
    userChoice = 0;
    computerChoice = 0;
    userWins = 0;
    computerWins = 0;
    gameEnd = false;
    computerImage.style.backgroundImage = "";
    playerImage.style.backgroundImage = "";
}

//Compare result
let cmpResult = (userChoice, computerChoice) => {
    let result = 0
    if ((userChoice === ROCK && computerChoice == SCISSOR) || (userChoice === SCISSOR && computerChoice == PAPER) || (userChoice === PAPER && computerChoice == ROCK)) {
        userWins++;
        result = WIN;
    } 
    if ((computerChoice === ROCK && userChoice == SCISSOR) || (computerChoice === SCISSOR && userChoice == PAPER) || (computerChoice === PAPER && userChoice == ROCK)) {
        computerWins++;
        result = LOSE;
    }
    if (userChoice === computerChoice) {
        result = DRAW;
    }
    showResult(userChoice, computerChoice);
    logResult(userChoice, computerChoice, result);
    updateRound();
    return result;
}

//Log result
let logResult = (userChoice, computerChoice, result) => {
    let userVal = userChoice === ROCK ? "rock" : (userChoice === SCISSOR ? "scissor" : "paper");
    let computerVal = computerChoice === ROCK ? "rock" : (computerChoice === SCISSOR ? "scissor" : "paper");
    result = result === DRAW ? "draw" : (result === WIN ? "You win" : "You lose");
    console.log(`Your choice: ${userVal}`);
    console.log(`Computer choice: ${computerVal}`);
    console.log(`Result: ${result}`);
}

//Show result
let showResult = (userChoice, computerChoice) => {
    computerImage.style.backgroundImage = resultObj[computerChoice];
    playerImage.style.backgroundImage = resultObj[userChoice];
}

//Check winner
let checkWinner = () => {
    if (userWins === WINNER) {
        gameEnd = true;
        return "You WINNNN!";
    }
    if (computerWins === WINNER) {
        gameEnd = true;
        return "You LOSEEEE!"
    }
    return "?";
}

//Update round
let updateRound = () => {
    //Update point
    playerPointDom.innerText = userWins;
    computerPointDom.innerText = computerWins;
    let winnerStr = checkWinner();
    //Update result dom
    resultDom.innerText = winnerStr;
}

// GAME PLAY
rockBtn.addEventListener("click", (event) => {
    if (!gameEnd) {
        userChoice = ROCK;
        computerChoice = getComputerChoice();
        cmpResult(userChoice, computerChoice);
    } else {
        alert("Click RESTART to play the game");
    }
});

scissorBtn.addEventListener("click", () => {
    if (!gameEnd) {
        userChoice = SCISSOR;
        computerChoice = getComputerChoice();
        cmpResult(userChoice, computerChoice);
    } else {
        alert("Click RESTART to play the game");
    }
});

paperBtn.addEventListener("click", () => {
    if (!gameEnd) {
        userChoice = PAPER;
        computerChoice = getComputerChoice();
        cmpResult(userChoice, computerChoice);
    } else {
        alert("Click RESTART to play the game");
    }
});

restartBtn.addEventListener("click", () => {
    restartGame();
    updateRound();
});
