let computerSelection;
let playerSelection

const choices = ["Rock", "Paper", "Scissors"];

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}//* Determine computer selection
computerSelection = computerChoice();
console.log(computerSelection);

//* Prompt player for selection
//* Compare selections and determine the winner