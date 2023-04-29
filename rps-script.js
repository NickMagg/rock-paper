const choices = ['Rock', 'Paper', 'Scissors'];
const winner = "You WON!";
const loser = "You LOST!";
const tie = "It's a TIE!";
const notOption = "That's not an option!";

let playerChoice;
let computerScore = 0;
let playerScore = 0;
let winningScore = 2;


while (playerScore !== winningScore && computerScore !== winningScore){
    function game(playerChoice){
        function computerChoice(){
            return choices[Math.floor(Math.random()*choices.length)];
        }// Determine computer selection

        const computerSelection = computerChoice();

        console.log(computerSelection);

        playerChoice = prompt("Rock, Paper or Scissors?");// Prompt player for selection

        let playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

        console.log(playerSelection);

        function playRound(playerSelection, computerSelection){
            if (playerSelection == computerSelection){
                return tie;
            } else if (playerSelection === "Paper"){
                if (computerSelection === "Scissors"){
                    return loser;
                } else if (computerSelection === "Rock") {
                    return winner;
                }
            } else if (playerSelection === "Rock"){
                if (computerSelection === "Paper"){
                    return loser;
                } else if (computerSelection === "Scissors") {
                    return winner;
                }
            } else if (playerSelection === "Scissors"){
                if (computerSelection === "Rock"){
                    return loser;
                } else if (computerSelection === "Paper"){
                    return winner;
                }
            } else {
                return notOption;
            }
        };

        let outcome = playRound(playerSelection,computerSelection);

        if (outcome === winner){
            playerScore = playerScore + 1;
        } else if (outcome === loser){
            computerScore = computerScore + 1;
        }


        console.log(outcome);
        console.log("Player Score: "+playerScore);
        console.log("Computer Score: "+computerScore);

        if (playerScore === winningScore){
            console.log("YOU WON THE GAME!");
        } else if (computerScore === winningScore){
            console.log("GAME OVER");
        }
    }

    game();

}






    // Compare selections and determine the winner