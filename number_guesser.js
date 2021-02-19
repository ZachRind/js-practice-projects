let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if(Math.abs(targetNumber - humanGuess) <= Math.abs(targetNumber - computerGuess)){
    return true;
  } else if(Math.abs(targetNumber - computerGuess) < Math.abs(targetNumber - humanGuess)){
    return false;
  }
}

const updateScore = winner => {
  if(winner === 'human'){
    humanScore++;
  } else if(winner === 'computer'){
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}
