let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "Computer wins!";
    } else if (computerMove === "paper") {
      result = "You win!";
    } else if (computerMove === "scissors") {
      result = "Tie!";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "Tie!";
    } else if (computerMove === "scissors") {
      result = "Computer wins!";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie!";
    } else if (computerMove === "paper") {
      result = "Computer wins!";
    } else if (computerMove === "scissors") {
      result = "You win!";
    }
  }

  console.log(score);

  if (result === "Tie!") {
    score.ties += 1;
  } else if (result === "You win!") {
    score.wins += 1;
  } else if (result === "Computer wins!") {
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
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
