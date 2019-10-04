
import getRandomThrow from './getRandomThrow.js';
import checkResult from './checkResult.js';


//get DOM elements

const oppSpan = document.getElementById('opp-throw');
const gameResultSpan = document.getElementById('game-result');
const wldSpan = document.getElementById('games-wld');
const shootButton = document.getElementById('shoot-button');


//initial state
let wld = [0, 0, 0];


//Play the Game

let randomNum = () => Math.floor(Math.random() * 3);

const playGame = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedThrow = selectedRadioButton.value;  
    
  
    let compCurrentThrow = getRandomThrow(randomNum());
    
    let gameResult = checkResult(userSelectedThrow, compCurrentThrow);

    gameResultSpan.textContent = gameResult;

    oppSpan.textContent = compCurrentThrow;
    
    if (gameResult === 'You Win!'){

        wld[0]++; 
        wldSpan.textContent = wld; 

    } else if (gameResult === 'You Lose') {

        wld[1]++; 
        wldSpan.textContent = wld; 
    
    } else {

        wld[2]++; 
        wldSpan.textContent = wld; 
    }
    gameResultSpan.textContent = gameResult;
    
    if (wld[0] > 10){
        
        alert ('I give up! But I did beat you ' + wld[1] + ' times!'); 
        location.reload();
    } 


};



shootButton.addEventListener('click', playGame);