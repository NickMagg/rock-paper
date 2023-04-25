const choices = ['Rock', 'Paper', 'Scissors'];

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}//* Determine computer selection

const computerSelection = computerChoice();

console.log(computerSelection);

let playerSelection = prompt("Rock, Paper or Scissors");//* Prompt player for selection

let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

console.log(playerChoice);

if (playerChoice == computerSelection){
    alert("It's a tie!");
}

if (playerChoice === "Paper"){
    if (computerSelection === "Scissors"){
        alert("You LOST");
    } else if (computerSelection === "Rock") {
        alert("You WON!");
    }
}

if (playerChoice === "Rock"){
    if (computerSelection === "Paper"){
        alert("You LOST");
    } else if (computerSelection === "Scissors") {
        alert("You WON!");
    }
}

if (playerChoice === "Scissors"){
    if (computerSelection === "Rock"){
        alert("You LOST");
    } else if (computerSelection === "Paper") {
        alert("You WON!");
    }
}

if (playerChoice != "Rock" &&
    playerChoice != "Paper" && 
    playerChoice != "Scissors"){
    alert("That's not an option!");
}
    //* Compare selections and determine the winner