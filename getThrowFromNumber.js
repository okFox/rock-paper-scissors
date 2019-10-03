// TDD a function that takes a number which is 0, 1, or 2 and returns rock, paper, or scissors accordingly.

let throwResult = 0;


const getThrowFromNumber = (throwResult) => {
    if (throwResult === 0) {
        return 'rock'; 
    } else if (throwResult === 1){
        return 'paper'; } 
        
    else if (throwResult === 2){ 
        return 'scissors';
    }
    else {
        return 'You broke the game';
    }

};

console.log(throwResult);



export default getThrowFromNumber;