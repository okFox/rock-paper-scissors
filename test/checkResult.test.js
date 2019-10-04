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
    assert.equal(result, 'It is a tie');
});

test('player throws rock and computer throws paper, receive lose message', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper';
    

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'You Lose');
});
test('player throws rock and computer throws scissors, receive win message', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'scissors';
    

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'You Win!');
});
test('player throws paper and computer throws rock, receive win message', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'You Win!');
});
test('player throws paper and computer throws scissors, receive lose message', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'scissors';
    

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'You Lose');
});
test('player throws scissors and computer throws rock, receive lose message', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'rock';
    

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'You Lose');
});
test('player throws scissors and computer throws paper, receive win message', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'paper';
    

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'You Win!');
});