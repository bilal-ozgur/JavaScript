function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  
  if (playerMove === 'scissors') {
    if (computerMove === "rock") {
      result = "Computer wins!";
    } else if (computerMove === "paper") {
      result = "You win!";
    } else if (computerMove === "scissors") {
      result = "Tie!";
    } 

  } else if (playerMove === 'paper') {
    if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "Tie!";
    } else if (computerMove === "scissors") {
      result = "Computer wins!";}

  } else if (playerMove === 'rock') {
    if (computerMove === "rock") {
      result = 'Tie !'
    } else if (computerMove === 'paper') {
      result = 'Computer wins!'
    } else if (computerMove === 'scissors') {
      result = 'You win!'
    }
  }
  
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);

}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }
  return computerMove;
}