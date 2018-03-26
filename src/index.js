import Footballer from './footballers';
import Striker from './striker';
import GoalKeeper from './goalKeeper';


let ronaldo = new Striker('Christiano', 'Ronaldo', 32, 'Real Madrid', 0, 30, 4);

let casilas = new GoalKeeper('Ikka', 'Casilas', 35, 'Porto', 0, 24, 8 );

let pogba = new Footballer('Paul', 'Pogba', 22, 'Manchester United', 0);

const players = {
    Ronaldo: ronaldo,
    Casilas: casilas,
    Pogba: pogba
}
export default players;