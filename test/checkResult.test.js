// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResult from '../checkResult.js';


const test = QUnit.test;

test('player and computer throw same and receive tie message', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'rock';
    

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'tie');
});
