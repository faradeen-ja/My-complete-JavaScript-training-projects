
//////////////////////////////////
//PART 2 JS Fundamentals

// Using a variable, without declaring it, is not allowed:
'use strict';
x = 3.14; // will throw an error



///////////////////////////// ///
//Functions

function logger() {
  console.log('My name is ____');
}
// We can invoke, call or run a function like this
logger();


function fruiteProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
// We run, invoke or call the fruiteProcessor function with 2 params or parameters args or arguments apples and oranges
// we used those values to make the juice variable 
const mixJuice = fruiteProcessor(10, 2);
console.log(mixJuice); // mix our juice with 10 apples and 2 oranges 
// We give values of 10 apples and 2 oranges to our paramters in intial function fruiteProcessor and store it in a variable called mixjuice
// We can then invoke it, (the function) by running console.log(mixJuice) to console.


// e.g. of a built if funciton is ...
const num = Number(11); 


////////////////////////////////////
//4 Types of functions

//1. Function declaration type 
function calcAge1(birthYear) {
  return 2090 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1); logs //logs age1 - 2090 
// let's review what happened here
// first we declrared our functions with a name calcAge1 
// then we gave our function a parameter birthYear 
// then we stored our function into a variable age1 
// and then gave a value to our argument birthYear 
// birthYear is an special variable used as an argument in paranthesis (funciton)
// then we can give a value to it later in our function 



//2. Function expressions type
// We can store a function into a variable, it's expressed into a variable 
const calcAge2 = function(birthYear) {
  return 2090 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

//same thing happened here except we expressed our function within a variable 


////////////////////////////////////////
//3. Arrow functions => 
const calcAge3 = (birthYear) => 2090 - 1991;  // single argument or single line function 
  const age = calAge3(1991)
  console.log(age3)
  
//  //if multi line codes if body of function is expanded we use {} curly braces
  const yearToRetire = (birthYear, firstName) => {
    const age = 2022- birthYear
    const retireDate = 65 - age;
    return `${firstNAme} retires in ${retireDate}
    
    }
 
console.log(yearToRetire(1991, "fara"));
console.log(yearToRetire(1980, "cat"));




/////////////////////////////////////
//functions calling other functins
function cutFruits(fruit) {
  // we use this function to function calling method to reduce codes to avoid writting 4 * 3 multiple time if we had many fruits or if we had to change the number of cuts
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const appleCuts = cutFruits(apples); // we could just use 4 * 4 or fruits * 4 but what if we need to change the main source code number amount?
  const orangeCuts = cutFruits(oranges);

  const juice = `Juice with ${appleCuts} apples cuts and ${orangeCuts} oranges cuts!!`;
  return juice;
}

console.log(fruitProcessor(2, 3));


///////////////////////////////////
//Challenge
onst calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(1, 4, 5));

// test one
const scoreCats = calcAverage(120, 122, 129);
const scoreDogs = calcAverage(122, 123, 124);

console.log(scoreCats, scoreDogs);

const checkWinner = function (avgCats, avgDogs) {
  if (avgCats >= 2 * avgDogs) {
    console.log(`cats wins (${avgCats} vs. ${avgDogs})`);
  } else if (avgDogs >= 2 * avgCats) {
    console.log(`dog wins (${avgDogs} vs. ${avgCats})`);
  } else {
    console.log("no animal wins...");
  }
};

checkWinner(scoreCats, scoreDogs);
checkWinner(500, 120);



////////////////////////////////////
//few of the Array [] methods

// arrays=====================push=====pop=====

/* const friend1 = cats;
const friend2 = cows;
const friend3 = elephants; */

const friends = ["cats", "cows", "elephants"];

friends.push("persian cat"); //add to end of array
console.log(friends);

friends.unshift("zebra"); // add elements to start begining of array list
console.log(friends);

friends.pop(); //remove last element in array
console.log(friends);

friends.shift(); // remove the first element from array
console.log(friends);

console.log(friends.indexOf("cows")); //shows index of emelemts  0 1 -1

console.log(friends.includes("cats")); // includes method

if (friends.includes("cows")) {
  console.log("you have a cow friend in list!");
} else {
  console.log("it is a deer");
}






/////////////////////////////////////
//Objects 
const fara = {
  firstName: "fara",
  lastName: "j",
  age: 32,
  job: "noder or coder",
  friends: ["only good people", "zombies", "robots"],
};

console.log(fara);
// getting properties from objects with dot notation
console.log(fara.lastName);

// we can get multiple values with array log bracket notation
const nameKey = "Name";
console.log(fara["first" + nameKey]);
console.log(fara["last" + nameKey]);

// we can't get multiple values with dot notation
//console.log(fara.'last' + nameKey)

// putting a value out for the user
/* const interestedIn = prompt('what you like to know about me? name, job, age')
if(fara[interestedIn]) {
    console.log(fara[interestedIn])

} else {
    console.log('Wrong request')
} */

// add new properties to objects
fara.location = "herat";
fara["linkedin"] = "@fara";
console.log(fara);

// fara object has 3 friends and best friend is....
const bestFriend = fara.friends[2];
console.log(`${fara.firstName} has one best friend ${bestFriend}`);




////////////////////////////////////
//Object methods

// ========================44. object methods ==================
//functions in objects
//object can hold functions methodes
//key is property name value is value
//adding another key in object call it function as expression

const faraFunctionInObj = {
  firstName: "fara",
  lastName: "j",
  birthYear: 1991,
  job: "noder or coder",
  friends: ["only good people", "zombies", "robots"],
  hasDL: false,
  // method one function
  /*  calculateAge: function(birthYear){ // we can use function expression only in object 
        return 2090 - birthYear;

    }, */

  //method two function in obj  this.key
  calculateAge: function () {
    this.age = 2090 - this.birthYear;
    return this.age;
  }, // <-- comma is required between methods

  // adding new methode here
  getSummary: function () {
    return `${this.firstName} is a ${this.calculateAge()} 
        - year old ${faraFunctionInObj.job}
        , and he has ${this.hasDL ? "a" : "no"} driver's lience`;
  },
};

//logging results with dot notation and braket [] .
console.log(faraFunctionInObj.calculateAge(1991));
console.log(faraFunctionInObj["calculateAge"](1991));

/*  // expression functions expressed or done in as a variable
 const calculateAge2 = function (birthYear){
    return 2090 -1991;
} */

// challeng on adding summary method in object above
console.log(faraFunctionInObj.getSummary());

///////////////////////////////////////////
// BMI challenge with objects 
const user1 = {
  fullName: "Sabrina",
  mass: 66,
  height: 2.2,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.mass;
  },
};

const user2 = {
  fullName: "Nathia",
  mass: 77,
  height: 1.9,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
  },
};

user1.calcBMI();
user2.calcBMI();

console.log(`${user1.fullName} BMi is ${user1.calcBMI()}
and ${user2.fullName} BMi is ${user2.calcBMI()}`);

if (this.bmi >= 15) {
  console.log("you are not sexy");
} else {
  console.log("you are sexy");
}

