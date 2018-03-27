# footballersOOP
A simple demonstration of Javascript OOP modeling for footballers
This repository models a base class of footballers from which we have two other classes which are Striker and Goalkeeper

## Footballer
This is the base class from which all other classes inherits from.
It contains the following attributes and methods
* Attributes
  * Age
  * Firstname
  * Lastname
  * Club
  * Position
* Methods
  * TakeYellowCard
    * Which works like this
      pogba.takeYellowCard( )
      * It first checks if the player has collected a yellow card before,
      * If yes, It issues a red card and a commentary.
      * If that is the first red, it issues a yellow card,a commentary and increases the yellows by 1..
  * TakeRedCard
    * Which works as follows
      Pogba.takeRedCard( )
      * It issues a staright red card and a commentary mentioning his club side.
## Striker
This is the class of all strikers. It inherits from the class of footballers.
It contains it own special attributes and methods which includes
* Attributes
  * Goals
  * Misses
* Methods
  * scoreGoal(type)
    * This could be used as thus; Ronaldo.scoreGoal('header')
  * missGoal(type)
    * This could be used as thus; Ronaldo.missGoal('penalty')
  * efficiency( )
    * This could be used as thus; Messi.efficiency( )
      * Here is the logic behind calculating efficiency of a striker
      * (goals / goals + misses) x 100.
      
## GoalKeeper
This is the class of all goal keepers. It inherits from the class of footballers.
It contains it own special attributes and methods which includes
* Attributes
  * Saves
  * GoalConceeded
* Methods
  * save(type)
    * This could be used as thus; Casilas.save('header')
  * conceedGoal(type)
    * This could be used as thus; Casilas.conceedGoal('penalty')
  * efficiency( )
    * This could be used as thus; Casilas.efficiency()
      * Here is the logic behind calculating efficiency of a goalKeeper
      * (saves / saves + goalConceeded) x 100.
Striker and goalkeeper both inherit from footballer class
To demonstrate polymorphism, the same method name can be called on a footballer subclass and gives a result, however, this names have different underlying programming logic. 

## Tests
Tests were written using mocha and chai assertion library.

*Andela Bootcamp task
