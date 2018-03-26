import Footballer from './footballers';

class Striker extends Footballer {
   constructor(firstname, lastname, age, club, yellowcard, goals, misses){
       super(firstname, lastname, age, club, yellowcard)
       this._goals = goals;
       this._misses = misses;
       this._position = 'Striker';
   }

   get goals(){
    return this._goals;
  }

  get misses(){
    return this._misses;
  }

   get efficiency() {
    let score = this.goals/(this.goals + this.misses)
    score = score.toFixed(3);
    let scorePercent = score * 100
    return  ( `The Efficiency of ${this.fullname} is ${scorePercent}%`);
   }

   scoreGoal(type) {
     return `Goal!! What a powerful ${type} from ${this.fullname}, A very nice one!`;
   }

   missGoal(type) {
     return `What a miss!! The goalkeeper cleverly saves the ${type} from ${this.fullname}`;
   }
}

export default Striker;
