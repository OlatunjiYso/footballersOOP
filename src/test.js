/**
 * Test for all class method and aatributes
 */

import chai from 'chai';
import players from './index';
const {assert} = chai;

describe("Tests for Inheritance", ()=>{
    describe("Test for Inheritance from base class ", ()=>{
      it("should return the footballer informtion", ()=>{
        assert.equal(players.Ronaldo.fullname, 'Christiano Ronaldo' );
      })
    })
    describe("Test for Inheritance from base class ", ()=>{
        it("should return the footballer informtion", ()=>{
          assert.equal(players.Ronaldo.age, 32 );
        })
      })
});

describe("Test for Encapsulation and Abstraction", ()=>{
      describe("Test for Encapsulation and Abstraction ", ()=>{
        it("should return a commentary through a class method", ()=>{
          assert.equal(players.Ronaldo.scoreGoal('header'), 'Goal!! What a powerful header from Christiano Ronaldo, A very nice one!' );
        })
      })
      describe("Test for Encapsulation and Abstraction ", ()=>{
        it("should return a commentary through a class method", ()=>{
          assert.equal(players.Ronaldo.missGoal('penalty'), 'What a miss!! The goalkeeper cleverly saves the penalty from Christiano Ronaldo' );
        })
      })
});

describe("Tests for Polymorphism", ()=>{
    describe("Test to describe polymorphism in stikers", ()=>{
      it("should return the footballer efficiency", ()=>{
        assert.equal(players.Ronaldo.efficiency, 'The Efficiency of Christiano Ronaldo is 88.2%' );
      })
    })
    describe("Test to describe polymorphism in goalkeepers", ()=>{
        it("should return the footballer efficiency", ()=>{
          assert.equal(players.Casilas.efficiency, 'The Efficiency of Ikka Casilas is 80%' );
        })
      })
});