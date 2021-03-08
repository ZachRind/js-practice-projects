const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
    } else {
      console.log('Not a valid argument');
    }
  }
  
  function getComputerChoice(){
    let computerOutput = Math.floor(Math.random() * 3);
      switch(computerOutput){
        case 0:
          return 'rock';
          break;
        case 1:
          return 'paper';
          break;
        case 2:
          return 'scissors';
          break;
        default:
        return;
  
      }
  }
  
  function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return console.log('Round is a tie!');
    } else if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return console.log('Computer wins!');
      } else {
        return console.log('User wins!');
      }
    } else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return console.log('Computer wins!');
      } else {
        return console.log('User wins!');
      }
    } else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return console.log('Computer wins!');
      } else {
        return console.log('User wins!');
      }
    }
  }
  
  determineWinner('paper', 'rock');