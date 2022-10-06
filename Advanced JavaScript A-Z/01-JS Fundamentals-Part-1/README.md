
![image](https://github.com/faradeen-ja/complete-JavaScript-lectures-logs/blob/5e2f36bb3dfce24a1038862c943874e5dc5238fe/assets/js-fundamental-1.png)



<h3 align="center">👉VS code environment shortcuts working with JS </h3>  




```html
🟨CTLR + D 
Select a text area and use this short cut to select all similar texts and update or delete 

🟨Alt + arrow up or down 
move text/code line up or down 

🟨Alt + shift + a
comment out multi line 

🟨Alt + shift + arrow down
copy line of code down 

🟨CTRL + /  single line comment
```

******
### Table of content:
- [What is JavaScript?](#what-is-javascript) 
- [Working with variables in JavaScript](#working-with-variables-in-javascript) 
- [Data types](#data-types)
- [var let and const keywords](#var-let-and-const-keywords)
- [Assignment Operators](#assignment-operators)
- [Template Latirals](#template-latirals)



##### What is JavaScript?
*JavaScript, often abbreviated to JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.*

* ParadigmMulti-paradigm: event-driven, functional, imperative, procedural, object-oriented programming

* Designed byBrendan Eich of Netscape initially; others have also contributed to the ECMAScript standard

*Read more on [wiki](https://en.wikipedia.org/wiki/JavaScript)*

--------
##### Working with variables in JavaScript

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data. To create a variable in JavaScript, use the var, let and const keywords to declare a variable.  A variable can only contain one value at a time, which can be of any data type. Meaning either a string, number, boolean, array, object, function or null or undefined.   *like e.g. code code below*  **[Source](javascript.info/variables)**
```JavaScript
let js = 'amazing';
     
      40 + 30 - 4;
      console.log(40 + 30 - 4);

      console.log('fara');

      console.log(23);


      let firstNameOne = "fara";
      let first = 'fara'
      let last = 'j'
      
      console.log(firstNameOne);
      console.log(firstNameOne);
      console.log(firstNameOne);
 ```
 
 e.g. 2
 ```JavaScript
    let pets = "cats, dogs"; // pets stores datas cats, dogs. 
    let catName = "sally";
    let dogsAges = [2, 5];

    // logging results into console
    console.log(pets) // cats, dogs
    console.log(catName) // sally
    cosole.log(dogsAges[0]) // 2
    
 ```
 
 
 ##### Data types
  1. Objects
  2. Primitives
#### Primitives
 - number floating point numbers
 - strings like sentence word characters or texts 
 - boolean are used to make decesions  true or false 
 - undefined value in a variable is not defined, set or stored, empty value or parameters 
 - null also means empty values
 - symbols #$@% 
 - bigInt Bigintergers long mathimatics numbers
 
 
 ```JavaScript
 
 let javaScriptisFun = true
console.log(javaScriptisFun)

let emptyValue = // variable with no value  / empty variable
//typeOff
console.log("ture is", typeof true); // true is boolean 
console.log(typeof javaScriptisFun) // boolean
console.log(typeof 123); //number
console.log(typeof "I am a developer") //string
console.log(typeof emptyValue) // undefined 
console.log(typeof abc123) // undefined 
console.log(typeof 983493n) // bigInt int = integer
var cars = ["Saab", "Volvo", "BMW"]; // array
var x = {firstName:"John", lastName:"Doe"}; // object
```
 
 
 
 
 ##### `var` `let` and `const` keywords
`var` declarations are globally scoped or function scoped while let and `const` are block scoped. `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared. They are all hoisted to the top of their scope.
[Source](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference)

*`var` declaration is an old keyword, avoid using `var` in your codebase as it will result in bugs and errors, for instance if you decide to create variables and if by mistake you use the same name to store differrent data later JavaScript will understand and execute the last variable you created or updated.*
 
e.g.
```JavaScript
let age =  22;
age = 80 // let variable can be updated but not re-declared --> let age = 80 will error 

const carModel = "BMW";
console.log(carModel); //logs BMS

//Now if we try to re-declare variable `carModel` or update it, it wont work. 
const carModel = "BMW" // it will log this error --> Uncaught SyntaxErr: Indentifier 'carModel' has already been declared

//or if we try change or update it's value
const carModel = "Ferrari"
console.log(carModel): it will log this error --> Uncaught SyntaxErr: Indentifier 'carModel' has already been declared


//var
//never use var keyword for it's simple to be re-declared and the value to be updated that can cause later problems in our codebase
var job = "coder"; //first varialbe declared and first value added to it
var job = "notCoder"; // value updated 
var job = "coder"; // here we can re-declare it again eventhough it's already declared. funny?
job = "noder"; //variable value got updated here js runs it no problem

// if we console log job varialbe now it wil... output noder because it reassigned or changed the value to new value "noder
console.log(job)
 
 
 ```
Variables rules  
Always declare variables meaning always store name and value by declraing it --> ✅`let job = "coder"`  ❌`job = "coder";` `let`, `const` or `var`  is the reserved keywords in js used to declare our variables 
 
 
 ***************
 
 ##### Assignment Operators
 In JavaScript there are 16 different addignemnt operators that are used to assing value to the variable. it shothand for other operators which is recommended to use. 
 The assignment operator are used to assign value based on the right oprand to its lef operand. 
 
 The assignment operators  must be a variable white the right operand may b ea variable, number, boolean, string, expression, object or combination of any other. 
 One of the most basi assignment operators is = equal , which is used to directily assign a value. 
 
 From [External Source](https://www.tutorialstonight.com/js/javascript-assignment-operators) Check for more. 
 
 Also check this source for [JavaScript Arithmetic Operators](https://www.tutorialstonight.com/js/js-arithmetic)
 
 
 ```JavaScript
 let x = 10 + 6; //x will be assigned the value of 16
 x += 10; //x = x + 10 = 26
 x *= 4; //x = x * 4 = 104
 x++; // incrementing by 1 x = x + x = ++
 x--; // decrementing by -1 x - x = x-- 
 
 ////////////////////////////////////
//Transform or combine values with + 
// Basic Operators


const now = 2022; 
const myAge =  now - 1991;
const ageSarah = now - 1994; 

console.log('You are',ageSarah, myAge); // logss You are 31
console.log(ageSarah *3, myAge * 3 / 10, 2**3);

const firstName = 'fara';
const lastName = 'j';
console.log(firstName + ' ' + lastName); // logs fara j  + ' ' + puts space 


/////////////////////////////////
//Comparison operators >, <, >=, <= 
console.log(myAge > ageSarah); // more than older than
console.log(ageSarah  >= 18); // logs if ture of false

////////////////////////////////
//Operator precedences 
let x2, y;
x2 = y = 26-10-4; // executes code from right to left 
console.log(x2, y)

const averageAge = (myAge + ageSarah) / 2 // just math in () or out of it in school this method will calculate based on precedence from left to right it adds and then devides 
console.log(myAge, ageSarah, averageAge);


 
 ```
 
 
#### Template latirals

Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.  Read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#syntax)

```JavaScript
////////////////////////////////
//Template strings 
//or Template literal

const car = 'bmw'
const tires = 4
const color = 'yellow'
const year = 1994

❌
//old ways getting varibles values as string output
const dreamCar = 'This car is ' + car + ', a very fast car that has ' + tires + ' tires ' + 'color  is ' + color + ' it was built in year ' + year;
console.log(dreamCar);

✅
//modern way using ES6 template strings / tempalte literals 
const dreamCar2 = `This car is ${car}, a very fast car that has ${tires} tires, color is ${color}, it was built in year ${year}`
console.log(dreamCar2);

//using backticks ` ` instead of qoutes '' "" 
console.log(` this is just another string with template literals ')
❌
//old ways using a new line with back slash 
console.log('string with an old way js\n\
miltiple \n\
lines')
✅
//new way using back ticks to make multi line strings. es6 
console.log(`string with new way
multiple
lines`);



```

 
 
 
 ##### Condtional Statments or if else
 
 While writing code there many situations whe you need to make a decision what to do if a certian task happens. 
 
 For example, if today is sunday then log don't go to work, if feeling hungry then eat something, etc. 
 
 A conditional statement is an action that is used to make a decision. When the condition is given true then the code is executed.  
 
 Check the followings: 
 
 1. if statement  -> is used to execute a block of code only when a fiven condition is true. 
 2. else statement -> is used to execute a block of code only when a given condition is false.
 3. else if statement -> provides a new condition to be checked if the previous condition was false to execute a new block of code. 
 4. switch statement -> is a shoter and cleaner way to use when there are many conditions to be checked and it works the same as an if-else statement. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 [Back to top](#table-of-content) 
