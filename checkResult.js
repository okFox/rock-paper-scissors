/* TDD checkResult Function
Given a user choice, and a random throw for the computer, we will need to know the game result (from the user's perspective): "win", "lose", or "draw"

TDD a checkResult function that:

Has two parameters: player and computer
Returns one of the following values:
draw - the throws are identical
win - the player's throw beats the computer throw
lose - the computer's throw beats the player's throw
Write one test at a time, each test can address one of the nine possible outcomes.

You can assume valid input, meaning the passed input will always be a valid throw of rock, paper, or scissors.*/
//


//import getRandomThrow from './getRandomThrow.js';

const winMsg = 'You Win!';
const loseMsg = 'You Lose';
const tieMsg = 'It is a tie';

//let computer = getRandomThrow();

const checkResult = (player, computer) => {


    if (player === computer) {
        
        return tieMsg;
    } else if (player.value === 'rock' && computer === 'paper') {
        return loseMsg;
    } else if (player.value === 'rock' && computer === 'scissors') {
        return winMsg;
    } else if (player.value === 'paper' && computer === 'rock') {
        return winMsg;
    } else if (player.value === 'paper' && computer === 'scissors') {
        return loseMsg;
    } else if (player.value === 'scissors' && computer === 'paper') {
        return winMsg;
    } else if (player.value === 'scissors' && computer === 'rock') {
        return loseMsg;
    } else; 
  
};    
     

export default checkResult;