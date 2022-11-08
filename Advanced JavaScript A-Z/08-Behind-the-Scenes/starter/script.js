'use strict';

/* const codemirror = require("codemirror"); */











//===== this keyword in practice

console.log(this)

const calcAge = function(birthYear){
  console.log(2037 - birthYear)
  console.log(this)

}

calcAge(1991)


// ➡️ arrow function do not get it's this keyword
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear)
  console.log(this) // it will point to window we have one outside of the scopes 
}

calcAgeArrow(1980)


// create object refference that object 
const fara = {
  year: 1991,
  calcAge: function(){
    console.log(this);
  }
}

fara.calcAge


const matilda = {
  year: 2017,
}


matilda.calcAge = fara.calcAge;
matilda.calcAge()






//-----⚠️ reguuuular and arrow functions when we should use them when not


// 👉function in object adding a second method as function
// object literal
// arrow func will not have it's this keywork and will use it form a surrounding scope  = global scope 

//e.g.
const faraOne = {
  firstName: 'fara',
  year: 1991,
  car: 'vw',
  job: 'Sales',
  salary: 40000,
  
  calcAgeOne: function(){
  console.log(this);
  console.log(2080 - this.year)

  },

  //🛑 never use an arrow function as method  use funcitons expression
 // pitfall
  /*   greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`)
  } */

  //✅ use a regular function // this method get it's own this keyword
  greet: function(){
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  }

  
};

faraOne.greet()









// args or arguments keywords only available in regular functions 

const addExpr = function(a, b){
  console.log(arguments);
  return a + b;

}

addExpr(2, 5);
addExpr(2, 5, 8)

/// using var is bad 

/* var addArrow = (a, b) => { // when we use arrow lines that has blocks of codes we explicitly return value
  
  console.log(arguments);
  return a + b;
};

addArrow(2, 5 */






//🥇🥇 primitives objects 



let age = 30;
let oldAge = age;
age = 31;

console.log(age)
console.log(oldAge)


const me ={
  name: 'fara',
  age: 31
}



