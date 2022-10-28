
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


