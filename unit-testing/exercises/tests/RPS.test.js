const result = require('../RPS.js');

describe("result", function(){

    test("should result in a tie if player1 === player2 input", function(){
       let output = result.whoWon('rock', 'rock');
       expect(output).toEqual('TIE!');
    });
    test("should result in 'Player 2 wins!' if player1 = rock and player2 = paper", function(){
        let output = result.whoWon('rock','paper');
        expect(output).toEqual('Player 2 wins!');
    });
    test("should result in 'Player 2 wins!' if player1 = paper and player2 = scissors", function(){
        let output = result.whoWon('paper','scissors');
        expect(output).toEqual('Player 2 wins!');
    });
    test("should result in 'Player 2 wins!' if player1 = scissors and player2 = rock", function(){
        let output = result.whoWon('scissors','rock');
        expect(output).toEqual('Player 2 wins!');
    });
    test("should result in 'Invalid entry!' if (!player1 = scissors && !player1 = rock && !player1 = paper) || (!player2 = scissors && !player2 = rock && !player2 = paper)", function(){
        let output = result.whoWon('goats','rock');
        expect(output).toEqual('Invalid entry!');
    });
});