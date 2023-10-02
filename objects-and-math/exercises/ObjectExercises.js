let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: '9',
   move: function() {return Math.round(Math.random()*10);}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: '8',
   move: function(){ return Math.round(Math.random()*10);}
};

let superChimpTwo = {
   name: "Brad",
   species: "chimpanzee",
   mass: 11,
   age: 6,
   astronautID: '1',
   move: function(){ return Math.round(Math.random()*10);}
};

let woof = {
   name: "Leroy",
   species: "beagle",
   mass: 14,
   age: 5,
   astronautID: '3',
   move: function(){ return Math.round(Math.random()*10);}
};

let mossPiglett = {
   name: "Almina",
   species: "tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: '2',
   move: function(){ return Math.round(Math.random()*10);}
}


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, woof,mossPiglett];
// Print out the relevant information about each animal.

function crewReports(animal){
   return `'${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.'`
}
console.log(crewReports(woof));

// Start an animal race!

function fitnessTest(candidates){
   let results = []
   for (let i = 0; i < candidates.length; i++){
       let numSteps = 0;
       let turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       console.log(numSteps);
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(crew));