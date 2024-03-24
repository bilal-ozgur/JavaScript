let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};

function playGame(guess) {
  const randomNumber = Math.random();
  const result = randomNumber < 1 / 2 ? "heads" : "tails";

  console.log(
    `Result is ${result}. So ${guess === result ? "you win!" : "you lose!"}`
  );

  guess === result ? (score.wins += 1) : (score.losses += 1);

  console.log(score);

  localStorage.setItem("score", JSON.stringify(score));
}
