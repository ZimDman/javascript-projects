// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
    test("should result in the launchchode object key [organization] = 'nonprofit'", function (){
      let output = launchcode.organization;
      expect(output).toEqual("nonprofit");
    });
    test("should result in the launchcode object key [executiveDirector] = 'Jeff'", function () {
      let output = launchcode.executiveDirector;
      expect(output).toEqual("Jeff");
    });
    test("should result in the launchcode object key [percentageCoolEmployees] === 100", function () {
      let output = launchcode.percentageCoolEmployees;
      expect(output).toEqual(100);
    });
    test("should result in the launchcode object key [programsOffered] containing an array that includes 'Web Development','Data Analysis','Liftoff' && have a length of 3", function () {
      let output = (launchcode.programsOffered.includes('Web Development'),launchcode.programsOffered.includes('Data Analysis'),launchcode.programsOffered.includes('Liftoff'));
      expect(output).toEqual(true);
      expect(output).toEqual(true);
      expect(output).toEqual(true);
      expect(output).toEqual(launchcode.programsOffered.length === 3);
      
    });
    test("Should return 'Launch!' when launchOutput is passed a number that is only divisible by 2", function () {
      let output = launchcode.launchOutput(8);
      expect(output).toEqual('Launch!');
    });
    test("Should return 'Code!' when launchOutput is passed a number that is only divisible by 3", function () {
      let output = launchcode.launchOutput(9);
      expect(output).toEqual('Code!');
    });
    test("Should return 'Rocks!' when launchOutput is passed a number that is only divisible by 5", function () {
      let output = launchcode.launchOutput(25);
      expect(output).toEqual('Rocks!');
    });
    test("Should return 'LaunchCode!' when launchOutput is passed a number that is equally divisible by 2 && 3", function () {
      let output = launchcode.launchOutput(6);
      expect(output).toEqual('LaunchCode!');
    });
    test("Should return 'Code Rocks!' when launchOutput is passed a number that is equally divisible by 3 && 5", function () {
      let output = launchcode.launchOutput(15);
      expect(output).toEqual('Code Rocks!');
    });
    test("Should return 'Launch Rocks! (CRASH!!!!)' when launchOutput is passed a number that is equally divisible by 2 && 5", function () {
      let output = launchcode.launchOutput(10);
      expect(output).toEqual('Launch Rocks! (CRASH!!!!)');
    });
    test("Should return 'Launch Code Rocks!' when launchOutput is passed a number that is equally divisible by 2, 3 && 5", function () {
      let output = launchcode.launchOutput(30);
      expect(output).toEqual('Launch Code Rocks!');
    });
    test("Should return 'Rutabagas! That doesn't work.' when launchOutput is passed a number that is not divisible by 2, 3 && 5", function () {
      let output = launchcode.launchOutput(7);
      expect(output).toEqual(`Rutabagas! That doesn't work.`);
    });
  // Write your unit tests here!
  
});