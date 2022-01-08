// IMPORT MODULES under test here:
import { renderTeam, renderGame } from '../render-utils.js';

const test = QUnit.test;

test('rendergame takes an argument and returns 2 divs with name and score', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const game = {
        name1: 'cow',
        score1: 3,
        name2: 'jeffy',
        score2: 2
    };

    const expected = '<div class="game"><div class="team"><p class="name">cow</p><p class="score">3</p></div><div class="team"><p class="name">jeffy</p><p class="score">2</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game);

    //Expect
    expect.equal(actual.outerHTML, expected, 'return a div with 4 p tags');
    // Make assertions about what is expected versus the actual result
    //expect.equal(actual, expected);
});


test('renderteam returns a dom node with 2 p tags name and score', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const team = {
        name1: 'cow',
        score1: 3
    };

    const expected = '<div class=\"team\"><p class=\"name\">[object Object]</p><p class=\"score\"></p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam(team);

    //Expect
    expect.equal(actual.outerHTML, expected, 'return a div with 2 p tags name and score');
    // Make assertions about what is expected versus the actual result
    //expect.equal(actual, expected);
});
