const checkFive = require ('../checkFive.js');

describe("checkFive", function(){

    test("should result in a number < 5 if number is < 5", function() {
       let output = checkFive(2);
       expect(output).toEqual("2 is less than 5.");
    });

    test("should result in a num equal to 5 if num === 5", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

    test("should result in number > 5 if num is > 5", function() {
        let output = checkFive(6);
        expect(output).toEqual("6 is greater than 5.");
    });

 });

