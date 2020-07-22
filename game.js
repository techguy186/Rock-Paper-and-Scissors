/*Get User Input*/
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' ||  userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('You should choose between rock, paper and scissors.');
  }
};

/*Get Computer Input*/
function getComputerChoice(){
 let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
      return 'rock';

    case 1:
      return 'paper';

    case 2:
      return 'scissors';
  }
}

/*Winner Determined*/
function datermineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice)
  {
    return 'The game is tie';
  }

  if(userChoice === 'bomb'){
    return 'You won!'
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won!';
    }
    else{
      return 'You won!';
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won!';
    }
    else{
      return 'You won!';
    }
  }

  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The coputer won!';
    }
    else{
      return 'You won!';
    }
  }
}

/*play game function*/
const playGame = () => {
  let userInput = document.getElementById('input').value;
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  console.log('You threw : ' + userChoice);
  document.getElementById('result1').innerHTML = 'You threw : ' + userChoice;
  console.log('The Computer threw : ' + computerChoice);
  document.getElementById('result2').innerHTML = 'The Computer threw : ' + computerChoice;
  console.log(datermineWinner(userChoice, computerChoice));
  document.getElementById('result3').innerHTML = 'Result is ' + datermineWinner(userChoice, computerChoice);
};


