
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

