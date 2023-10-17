//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name,mass,scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;

    }
    addScore(newscore){
        return this.scores.push(newscore)
    };
    average(){
        let sum = null;
        for ( let i = 0; i < this.scores.length; i++){
            sum += this.scores[i];
        }
        sum = Math.round(sum / this.scores.length * 10) / 10;
            return sum
    };
    status(){
        let crewStatus = '';
        if (this.average() >= 90.0){
            crewStatus = 'Accepted';
        } else if (this.average() <= 89.9 && this.average() >= 80.0){
            crewStatus = 'Reserve';
        } else if(this.average() <= 79.9 && this.average() >= 70.0){
            crewStatus = 'Probationary';
        }else if (this.average() < 70.0){
            crewStatus = 'Rejected';
        }

        return `${this.name} earned an average test score of ${this.average()}% and has a status of ${crewStatus}`;
    };
};

let bear = new CrewCandidate('Bubba Bear','135 kg',[88,85,90]);
// console.log(bear);
let maltese = new CrewCandidate('Merry Maltese','1.5 kg', [93,88,97]);
// console.log(maltese);
let gator = new CrewCandidate('Glad Gator','225 kg',[75,78,62]);
// console.log(gator);
bear.addScore(83);



// console.log(bear.scores);
// console.log(gator.average());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

/*gator.addScore(99);
gator.addScore(99);
gator.addScore(99);
gator.addScore(99);
gator.addScore(99);
gator.addScore(99);
gator.addScore(96);*/
let count = 0;
while (gator.average() < 90.0){
      gator.addScore(99);
      
      count ++;
      
}
console.log(count);
console.log(gator.status()) 
