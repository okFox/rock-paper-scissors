        


const getRandomThrow = (compThrow) => {
    if (compThrow === 0) {
        return 'rock';
    } else if (compThrow === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};






export default getRandomThrow;