


const winMsg = 'You Win!';
const loseMsg = 'You Lose';
const tieMsg = 'It is a tie';


const checkResult = (player, computer) => {


    if (player === computer) {
        
        return tieMsg;
    } else if (player === 'rock' && computer === 'paper') {
        return loseMsg;
    } else if ((player === 'rock') && (computer === 'scissors')) {
        return winMsg;
    } else if (player === 'paper' && computer === 'rock') {
        return winMsg;
    } else if (player === 'paper' && computer === 'scissors') {
        return loseMsg;
    } else if (player === 'scissors' && computer === 'paper') {
        return winMsg;
    } else if (player === 'scissors' && computer === 'rock')
        return loseMsg;
     
  
};    
     

export default checkResult;