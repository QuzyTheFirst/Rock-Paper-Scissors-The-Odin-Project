// Create rock, paper, scissors const variable
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const attackTypes = [rock, paper, scissors];

// Variables for player and computer selected attacks
let computerSelection = "";
let playerSelection = "";

//Points variable
let computerWinPoints = 0;
let playerWinPoints = 0;

// StartGame
PlayGame(5);

FindWinner();


function PlayGame(roundsCount) {
    for (let i = 0; i < roundsCount; i++) {
        // Clean player and computer attack types
        computerSelection = "";
        playerSelection = "";

        // Let pc choose his attack type
        computerSelection = GetComputerChoice();
        console.log("Computer: " + computerSelection);

        // Ask user for his attack type
        do{
            playerSelection = prompt("Choose your attack type[rock, paper, scissors]:")?.toLowerCase();
        } while(!IsAttackValid(playerSelection))
        console.log("Player: " + playerSelection);

        // Check who has won a battle
        PlayRound(playerSelection, computerSelection);
    }
}

function PlayRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection === computerSelection){
        console.log(" | This round is a tie!");
    }
    else if (
        playerSelection === paper && computerSelection === rock ||
        playerSelection === rock && computerSelection === scissors ||
        playerSelection === scissors && computerSelection === paper
    ) {
        console.log(" | Player has won a round!");
        playerWinPoints++;
    }
    else {
        console.log(" | Computer has won a round!");
        computerWinPoints++;
    }
}

function FindWinner(){
    if(playerWinPoints > computerWinPoints){
        console.log("Player has won a game!");
    }    
    else if(playerWinPoints === computerWinPoints){
        console.log("Game has ended with a tie!");
    }
    else{
        console.log("Computer has won a game!");
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