//==================js funds part 2 =====================//



'use strict'
// 32.  activating strict mode   "use strict" on top of the code
let hasDriverLicense2 = false;
const passTest = true;
// we are putting an error here a bug to show how strict mode is usefull
if (passTest) hasDriverLicense2 = true;
if (hasDriverLicense2) console.log("I can drive")


/* const interface = 'Audio' //anothr bug or error 
const private = 5588;  // another bug using class keywords  */


// Functions ===========================

function logger(){
    console.log('My name is fara')
}

// we call the function here by function name
logger(); // this is called callin, running, invoking fuction


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges!!`;
    return juice;
}


// we call the fruitProcessor function here with 2 params or args apples and oranges 
// we used those values to make the juice var 
// then we need to capture those values  we declare it in a variable 
const mixJuice = fruitProcessor(10, 2); // we need to capture the value of juice string
console.log(mixJuice);

//another mix 
const newMixJuice = fruitProcessor(200, 100)
console.log(newMixJuice);

const num = Number(11)// built in functions like this and console.log



///// functions types in action DEAF 

//1: declaring or declration functions type
function calcAge1 (birthYear){
    return 2090 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1)

//2. expression fucntion

// function is value we can store it into a variable too
// type expression function   we dont put a function name instead we express it in a variable
const calcAge2 = function (birthYear){
    return 2090 - birthYear;
}
const age2 = calcAge2(1991)
console.log(age2)

// 3. arrrow => function 

const calcAge3 = birthYear => 2090 - 1991; // singel line
const age3 = calcAge3(1991);
console.log(age3);



const yearsToRetire = (birthYear, firstName) => { // multi line
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    //firstName = '';
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsToRetire(1991, 'fara'))
console.log(yearsToRetire(1980, 'cat'))





// ========================functions calling other functins ============================
function cutFruits(fruit){  // we use this function to function calling method to reduce codes to avoid writting 4 * 3 multiple time if we had many fruits or if we had to change the number of cuts
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const appleCuts = cutFruits(apples);  // we could just use 4 * 4 or fruits * 4 but what if we need to change the main source code number amount?
    const orangeCuts = cutFruits(oranges);

    const juice = `Juice with ${appleCuts} apples cuts and ${orangeCuts} oranges cuts!!`;
    return juice;
}

console.log(fruitProcessor(2, 3))





const calcAge = function (birthYear){
    return 2090 - birthYear;
}

const yearsToRetire2 = function (birthYear, firstName) { // multi line
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
    //firstName = '';
/*     return `${firstName} retires in ${retirement} years`;
 */}



console.log(yearsToRetire(1991, 'fara'))
console.log(yearsToRetire(1970, 'jerry'))






//video  38
// ==================CHALLENGE=============================
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(1, 4, 5));

// test one
const scoreCats = calcAverage(120, 122, 129);
const scoreDogs = calcAverage(122, 123, 124);

console.log(scoreCats, scoreDogs);



const checkWinner = function(avgCats, avgDogs){
    if(avgCats >= 2 * avgDogs){
        console.log(`cats wins (${avgCats} vs. ${avgDogs})`);
    }else if(avgDogs >= 2 * avgCats){
        console.log(`dog wins (${avgDogs} vs. ${avgCats})`);
    } else{
        console.log('no animal wins...');
    }
}

checkWinner(scoreCats, scoreDogs);
checkWinner(500, 120)





// arrays=====================push=====pop=====

/* const friend1 = cats;
const friend2 = cows;
const friend3 = elephants; */


const friends = ['cats', 'cows','elephants'];

friends.push('persian cat') //add to end of array
console.log(friends)

friends.unshift('zebra') // add elements to start begining of array list
console.log(friends)

friends.pop() //remove last element in array
console.log(friends)


friends.shift() // remove the first element from array
console.log(friends)


console.log(friends.indexOf('cows')) //shows index of emelemts  0 1 -1


console.log(friends.includes('cats')); // includes method

if (friends.includes('cows')){
    console.log('you have a cow friend in list!')
}else{
    console.log('it is a deer')
}




//===========================object =============================




const fara = {
    firstName: 'fara',
    lastName: 'j',
    age: 32,
    job: 'noder or coder',
    friends: ['only good people', 'zombies', 'robots']
}

console.log(fara)
// getting properties from objects with dot notation
console.log(fara.lastName)

// we can get multiple values with array log bracket notation
const nameKey = 'Name';
console.log(fara['first' + nameKey])
console.log(fara['last' + nameKey])

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
fara.location = 'herat'
fara['linkedin'] = '@fara'
console.log(fara)

// fara object has 3 friends and best friend is....
const bestFriend = fara.friends[2]
console.log(`${fara.firstName} has one best friend ${bestFriend}`)



// ========================44. object methods ==================
//functions in objects 
//object can hold functions methodes 
// key is property name value is value 
// adding another key in object call it function as expression

const faraFunctionInObj = {
    firstName: 'fara',
    lastName: 'j',
    birthYear: 1991,
    job: 'noder or coder',
    friends: ['only good people', 'zombies', 'robots'],
    hasDL: false,
    // method one function 
   /*  calculateAge: function(birthYear){ // we can use function expression only in object 
        return 2090 - birthYear;

    }, */

    //method two function in obj  this.key
    calculateAge: function (){
        this.age = 2090 - this.birthYear;
        return this.age;
    },   // <-- comma is required between methods

// adding new methode here
    getSummary: function(){

        return `${this.firstName} is a ${this.calculateAge()} 
        - year old ${faraFunctionInObj.job}
        , and he has ${this.hasDL ? 'a' : 'no'} driver's lience`
    }
};

 
//logging results with dot notation and braket [] .
console.log(faraFunctionInObj.calculateAge(1991))
console.log(faraFunctionInObj['calculateAge'](1991))




/*  // expression functions expressed or done in as a variable
 const calculateAge2 = function (birthYear){
    return 2090 -1991;
} */



// challeng on adding summary method in object above
console.log(faraFunctionInObj.getSummary());


 

//============== 45. BMI challenge  with objects ==================
const user1 = {
    fullName: 'Sabrina',
    mass: 66,
    height: 2.2,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.mass;
    }
};

const user2 = {
    fullName: 'Nathia',
    mass: 77,
    height: 1.90,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
    }
}



user1.calcBMI();
user2.calcBMI();

console.log(`${user1.fullName} BMi is ${user1.calcBMI()}
and ${user2.fullName} BMi is ${user2.calcBMI()}`)

if(this.bmi >= 15){
    console.log('you are not sexy');
    
} else{
    console.log('you are sexy')
}



// ============== 46 for loops ===============//
/* console.log('Lifting weights repetition 1')
console.log('Lifting weights repetition 2')
console.log('Lifting weights repetition 3')
console.log('Lifting weights repetition 4')
console.log('Lifting weights repetition 5')
console.log('Lifting weights repetition 6')
console.log('Lifting weights repetition 7')
console.log('Lifting weights repetition 8')
console.log('Lifting weights repetition 9')
console.log('Lifting weights repetition 10') */

// istead of top operation do for loop to iterate
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`) //using template laterals to show  1 to 10 count
}


for(let money = 0; money <= 10; money++ ){
    console.log(`You salary per month will increase if coding...`)
}

// rep = rep + 1  increasing the value just by 1
// instead we can write simple code rep++  increase it by 1


//note :
//rep is a counter here
// for loop runs until the condition is met and stops

// for loop has 3 parts
//1 intialization value
//2 conditional value logical condition 
//3 incrrrrementing the counter  ++





// ======== 47. looping arrays with for loop===========//

// in a real world of coding we would probably not practice create array in a valiable
const faraArray = [
    'fara',
    'ja',
    2090 - 1991,
    'coder noder',
    ['cats', 'zebra', 'lion'],
    true

]


for (let i = 0; i < faraArray.length; i++){ // we can replace the hard coded value of i < 5 ; array.length// 5 is the lenth of our array
    console.log(faraArray[i], typeof faraArray[i]) // we use the [i]traditional index or counter variable to retrive or receive all the elements of the array
}



const years = [1991, 1990, 2002, 2006]
const ages = []; //  <-- values pushed here

for (let i = 0; i < years.length; i++){
    ages.push(2090 - years[i]); // <-- we are pushing the result of this operation to the empty array
}

console.log(ages)









// ============2 loops statements ========================
// 1 continue statement --> is to exist the current iterration of the loop 
// 2 break statement --> is used to completely terminate the whole loop
console.log('-----only strings-----')
for(let i = 0; i <faraArray.length; i++){
    if(typeof faraArray[i] !== 'string') continue;

    console.log(faraArray[i], typeof faraArray[i]);
}

console.log('-----break with number-----') // as soon as a number is found we want to break the loop
for(let i = 0; i <faraArray.length; i++){
    if(typeof faraArray[i] === 'number') break; // if finds a number the line of code is not excecuted and looop is terminated

    console.log(faraArray[i], typeof faraArray[i]);
}







//48. looping backwards and loop in loooooooooooooops ================
const faraArray2 = [
    'fara',
    'ja',
    2090 - 1991,
    'coder noder',
    ['cats', 'zebra', 'lion'],
    true

]


for(let i = faraArray2.length -0; i >= 1; i--){
    console.log(i, faraArray2[i])
}


// ================= looping inside loop ==================

for (let workout = 1; workout < 4; workout++){
    console.log(`------starting workout------ ${workout}`)

    for (let repeat = 1; repeat < 6; repeat++){
        console.log(`workout ${workout} : -----[lifting repeats]----- ${repeat}`)
    }
}





// 49. ======================while loop=============================

// while loop can be used in a larger way 
let repeat = 1; // <-- part 2 now we need to manually explecitly define the 2 other parts of loop outside  --> the initialization and the increasing value incrementing ++    
while (repeat <= 10){ // part 1 <-- just the condition here <-- while this condition is true
    console.log(`lifting repeats with while loops ${repeat}`);
    repeat++;  // <-- incrementing value outside 

}


// while loop do not need counter value if we don't know the number of time loop will run
// if we already know how many times the looop will run in that case we need a counter
//trunc converts decimal num to full num
// we want to keep running the loop until we get a 6 
//as soon as the value is 6 it will stop
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){ // if dice is differrent than 6 not equal to
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1; //<--// to avoid the loop run forever we re asign the intial value 

    if (dice === 6){
        console.log(`loop is about to end...`)
    }
}











// ==================50/ challenge part 2 ===============

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals)






//create a function to show average 

const calcAverage2 = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        //sum = sum + arr[i]; <--same as this
        sum += arr[i]; // <-- short coded
    }

    console.log(sum) // <-- to test it 
    return sum / arr.length; // <-- this just returns it 

}

// -->  calcAverage2([2, 3, 5])  <-- to test it
console.log (calcAverage2([2, 3, 6]))  // < -- logs the result
console.log (calcAverage2(totals)) // we use this func to calculate the totals
console.log (calcAverage2(tips))// we use this to calc tips up 
