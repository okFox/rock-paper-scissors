// import functions
import './checkResult.js';
import './getRandomThrow.js';


//get DOM elements
const rockThrow = document.getElementById('rock');
const paperThrow = document.getElementById('paper');
const scissorsThrow = document.getElementById('scissors');
const oppSpan = document.getElementById('opp-throw');
const gameResultSpan = document.getElementById('game-result');
const gamesPlayedSpan = Document.getElementById('games-played');
const gamesWonSpan = document.getElementById('games-won');
//const playAgainButton = document.getElementById();

//initial state
let gamesPlayed = 0;
let gamesWon = 0;


//Random Number Generator   
let randomNum = Math.floor(Math.random() * 3);