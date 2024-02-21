const ROCK = 1
const SCISSOR = 2
const PAPER = 3
// Function to get computer choice
let getComputerChoice = () => {
    //Return value range from 1 to 3
    return Math.floor(Math.random() * 2) + 1;
}
//Function to validate user choice
let validateUserChoice = (choice) => {
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissor") {
        return true
    }
    alert("You must enter 'Rock' or 'Scissor' or 'Paper'!!!")
    return false
}
//Function to get user choice
let getUserChoice = () => {
    let choice
    do {
        choice = prompt("Please enter your choice for Rock-Scissor-Paper: ")
    } while (!validateUserChoice(choice))
    console.log(`User choice: ${choice}`)
    return choice === "rock" ? 1 : (choice === "scissor" ? 2 : 3)
}
//Game play
let gamePlay = () => {
    let userChoice = getUserChoice()
    let computerChoice = getComputerChoice()
    if (userChoice === ROCK) {
        if (computerChoice === ROCK) {
            //Play again
            console.log("Computer choice: rock")
            alert("Tier")
            return 0
        }
        if (computerChoice === SCISSOR) {
            //User win
            console.log("Computer choice: scissor")
            alert("You win")
            return 1
        }
        if (computerChoice === PAPER) {
            //Computer win
            console.log("Computer choice: paper")
            alert("Computer win")
            return -1
        }
    } 
    if (userChoice === SCISSOR) {
        if (computerChoice === SCISSOR) {
            //Play again
            console.log("Computer choice: scissor")
            alert("Tier")
            return 0
        }
        if (computerChoice === PAPER) {
            //User win
            console.log("Computer choice: paper")
            alert("You win")
            return 1
        }
        if (computerChoice === ROCK) {
            //Computer win
            alert("Computer win")
            console.log("Computer choice: rock")
            return -1
        }
    } 
    if (userChoice === PAPER) { //PAPER
        if (computerChoice === PAPER) {
            //Play again
            console.log("Computer choice: paper")
            alert("Tier")
            return 0
        }
        if (computerChoice === ROCK) {
            //User win
            console.log("Computer choice: rock")
            alert("You win")
            return 1
        }
        if (computerChoice === SCISSOR) {
            //Computer win
            console.log("Computer choice: scissor")
            alert("Computer win")
            return -1
        }
    }
}

//Program
//Play 3 round
let round = 3
let point = 0
while (round > 0) {
    let result = gamePlay()
    if (result === 0) {//Tier
        continue
    } 
    if (result === 1) {//User win
        point++
        round-- 
    }
    if (result === -1) {//Computer win
        point--
        round--
    }
}
//Caculate score
if (point <= 0) {
    alert(`You lose ${3 + point}/3 games. HAHA`)
} else if (point > 0) {
    alert(`You win ${point}/3 games. Congrat!!!`)
}

