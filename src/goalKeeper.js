import Footballer from './footballers';


// class GoalKeeper inheriting from the base class of footballers
class GoalKeeper extends Footballer {
   constructor(firstname, lastname, age, club, yellowcard, saves, goalsConceeded){
    super(firstname, lastname, age, club, yellowcard)
   this._saves = saves;
   this._goalsConceeded = goalsConceeded;
   this._position = 'goalKeeper';
   }

   get saves(){
    return this._saves;
  }

  get goalsConceeded(){
    return this._goalsConceeded;
  }
   get efficiency() {
    let score = (this.saves/(this.saves + this.goalsConceeded)).toFixed(1);
    let scorePercent = score * 100
    return `The Efficiency of ${this.fullname} is ${scorePercent}%`;
   }

   save(type) {
       this.saves += 1;
     return (`${this.fullname} saves a powerful ${type} from the opponent `)
   }

   conceedGoal(type) {
     return (`${this.fullname} conceeds a goal! what a powerful ${type} from opponent !`)
   }
};

export default GoalKeeper;
