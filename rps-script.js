const choices = ['Rock', 'Paper', 'Scissors'];

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}//* Determine computer selection

const computerSelection = computerChoice();

console.log(computerSelection);

let playerChoice = prompt("Rock, Paper or Scissors?");//* Prompt player for selection

let playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

console.log(playerSelection);

function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (playerSelection === "Paper"){
        if (computerSelection === "Scissors"){
            return "You LOST";
        } else if (computerSelection === "Rock") {
            return "You WON!";
        }
    } else if (playerSelection === "Rock"){
        if (computerSelection === "Paper"){
            return "You LOST";
        } else if (computerSelection === "Scissors") {
            return "You WON!";
        }
    } else if (playerSelection === "Scissors"){
        if (computerSelection === "Rock"){
            return "You LOST";
        } else if (computerSelection === "Paper"){
            return "You WON!";
        }
    } else {
        return "That's not an option!";
    }
}

console.log(playRound(playerSelection, computerSelection));
    //* Compare selections and determine the winner