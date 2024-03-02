// Create rock, paper, scissors const variable
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const attackTypes = [rock, paper, scissors];

// Get UI Buttons
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

// Get UI
const choices = document.querySelector(".choices");
const playerPoints = document.querySelector(".player-points");
const computerPoints = document.querySelector(".computer-points");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const roundWinner = document.querySelector(".round-winner");
const gameWinner = document.querySelector(".game-winner");

// Points variable
let computerWinPoints = 0;
let playerWinPoints = 0;

// Initialize game buttons
rockButton.addEventListener('click', () => {
     PlayRound(rock, GetComputerChoice());
});

paperButton.addEventListener('click', () => {
    PlayRound(paper, GetComputerChoice());
});

scissorsButton.addEventListener('click', () =>{
    PlayRound(scissors, GetComputerChoice());
});


function PlayRound(playerSelection, computerSelection) {
    if(CheckForWinner())
        return;

    // your code here!
    if (playerSelection === computerSelection) {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundWinner.textContent = "This round is a tie!";
    }
    else if (
        playerSelection === paper && computerSelection === rock ||
        playerSelection === rock && computerSelection === scissors ||
        playerSelection === scissors && computerSelection === paper
    ) {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundWinner.textContent = "Player has won a round!";
        playerWinPoints++;
        playerPoints.textContent = `Player win points: ${playerWinPoints}`
    }
    else {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundWinner.textContent = "Computer has won a round!";
        computerWinPoints++;
        computerPoints.textContent = `Computer win points: ${computerWinPoints}`;
    }

    if(CheckForWinner()){
        FindWinner();
    }
}

function CheckForWinner(){
    if(playerWinPoints >= 5 || computerWinPoints >= 5)
        return true;
    return false;
}

function FindWinner() {
    if (playerWinPoints > computerWinPoints) {
        gameWinner.textContent = "Player has won a game!";
    }
    else if (playerWinPoints === computerWinPoints) {
        gameWinner.textContent = "Game has ended with a tie!";
    }
    else {
        gameWinner.textContent = "Computer has won a game!";
    }
}

function GetComputerChoice() {
    let randomValue = Random(3);
    return attackTypes[randomValue];
}

function IsAttackValid(chosenAttackType) {
    for (let i = 0; i < attackTypes.length; i++) {
        if (chosenAttackType === attackTypes[i])
            return true;
    }

    return false;
}

// return value from 0 to chosen value - 1
function Random(value) {
    return Math.floor(Math.random() * value);
}