
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
