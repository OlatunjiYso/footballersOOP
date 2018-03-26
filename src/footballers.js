
class Footballer {
    constructor(firstname, lastname, age, club, position, yellowcard){
      this._firstname = firstname;
      this._lastname = lastname;
      this._age = age;
      this._club = club;
      this._position = position;
      this._yellowcard = yellowcard;
    }
    
    get firstname(){
      return this._firstname;
    }
    get lastname(){
      return this._lastname;
    }
    get age(){
      return this._age;
    }
    get club(){
      return this._club;
    }
    get position(){
      return this._position;
    }
    get fullname(){
      return this.firstname + ' ' + this.lastname;
    }
  
  
    set club(club){
      this._club = club;
    }
  
    set age(age){
      this._age = age;
    }
  
    get generalInfo(){
      return (`${this.fullname} is a ${this.age} years old ${this.position}. He plays for ${this.club}`);
    };
  
  
    takeYellowCard() {
       this.yellowcard += 1;
      if (this.yellowCard = 0) {
        return `${this.fullname} receives his first yellow in this match, he really needs to be careful tonight!`
      }
      if (this.yellowcard > 1) {
        return `And that's it! ${this.fullname} receives his second yellow in this match, he's gonna be sent off tonight. A sad one for ${this.club} as they go 1 man down'`
      }
    }
  
    takeRedCard() {
        return `Oh no! ${this.fullname} gets a straight red. What could he have done? A sad one for ${this.club} as they go 1 man down'`
      }
  
    } // class ending brace
  
  
  
  export default Footballer;
  