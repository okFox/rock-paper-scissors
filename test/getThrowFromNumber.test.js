// IMPORT MODULES under test here:
// import example from '../src/example.js';
import getThrowFromNumber from '../getThrowFromNumber';

const test = QUnit.test;

test('takes a 0 and returns rock', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const throwResult = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(throwResult);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'rock');
});
