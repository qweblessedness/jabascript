const getUserChoice = userInput =>{
  userInput=userInput.toLowerCase();
  if(userInput==='rock'||userInput==='paper'|| userInput==='scissors'||userInput==='bomb'){
    return userInput
  }
  else{
    console.log('Error');
  }
};
function getComputerChoice(){
  randomNumber=Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
}
function determineWinner(userChoice,computerChoice){
  if(userChoice===computerChoice){
    return 'tie'
  }
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'Computer win'
    }
    else{
      return 'User win'
    }
  }
  if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      return 'Computer win'
    }
    else{
      return 'User win'
    }
    }
    if(userChoice==='bomb'){
      return 'User win'
    }
   if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'Computer win'
    }
    else{
      return 'User win'
    }
    } 
  }
  function playGame(){
    const userChoice=getUserChoice('rock');
    const computerChoice=getComputerChoice();
    console.log('You choice: '+userChoice);
    console.log('Computer choice: '+computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  playGame();
