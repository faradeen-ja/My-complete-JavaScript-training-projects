'use strict';

const javaScriptsLogs = {
  dever: 'FJ',
  logs: 'JS',
  progress: '-----halfway done!',
  goal: 'become a useful dev'
}

console.log(javaScriptsLogs.logs)
console.log(javaScriptsLogs.progress)


'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////APP

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'; // ternary condition  if more movement more than 0 deposit if not take out

    const html = `
        
        <div class="movements__row">
          <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
/* displayMovements(account1.movements);
 */


////////////////////create app users  ////////////////////////////////
const createUsernames = function (accounts) {
  accounts.forEach(function (accounts) {
    accounts.username = accounts.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0]; //now it's an array with 3 name initials
      })
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);





// refactored function for update UI

const updateUi = function(acc){

  displayMovements(acc.movements);

  calcDisplayBalance(acc)

  calcDisplaySummary(acc)
}

/////////////////////////implementing log in///////////////////////
// event handelers here

let currentAcccount; 

btnLogin.addEventListener('click', function(e){ // e is for event / event is page auto load
  e.preventDefault();  //to remvoe browser default behaviour for reload


  currentAcccount = accounts.find(acc => acc.username === 
  inputLoginUsername.value)
  console.log(currentAcccount)


  if (currentAcccount?.pin === Number(inputLoginPin.value)) { // ? mark is optional chaining checks if current account exist 
    console.log('login')


    //display UI
    labelWelcome.textContent = `Welcome back, ${currentAcccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;



    // clear user log in input texts
    inputLoginUsername.value = inputLoginPin.value = ''; // = to empty 
    inputLoginPin.blur();  //blur function fades away the place holder names 


    //update ui
    updateUi(currentAcccount)

  }
})




////////////////////////implementing transfers////////////////////////
btnTransfer. addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value)
  const receiveAcc = accounts.find(
   acc => acc.username === inputTransferTo.value
   );
   inputTransferAmount.value = inputTransferTo.value = '';

if(
  amount > 0  &&
  receiveAcc &&
  currentAcccount.balance >=  amount && 
  receiveAcc?.username !== currentAcccount.username)

{  // doing the transfer 
  currentAcccount.movements.push(-amount);
  receiveAcc.movements.push(amount);
 //update ui
 updateUi(currentAcccount)
 
}
  
  // this part has to be in the same funtion scope or it will bug amount not defined
///////////////////////transfer user to user/////////////////////////////
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferAmount.value)
})
  
  
  
console.log(amount, receiveAcc)
// 1 if amount is greater than 0 transfer 
/// 2 && amount must not exceed the current balance to transeer > = amount
////// 3 this will not allow sending money to yourself to our account !==
///// check to seee if receiver account exist?  we can use optional chaining ?
  
  if (amount > 0 && // 1
//receiveAcc && 
  currentAcccount.balance >= amount && // 2
  receiveAcc?.username!== currentAcccount.username) // 3
    
    console.log('transfer valid')

}

})
    
    
    
    








//calculate the BAL of movements////////////////////////////////////
const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => 
  acc + mov, 0);
  labelBalance.textContent = `${acc.balance}ERU`;
}

/* calcPrintBal(account1.movements); */


///////////////////////////display summary money in out int////////////////////////

//money in
const calcDisplaySummary = function(acc){
 const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
labelSumIn.textContent = `${incomes} EUR`;

//money out
  const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
labelSumOut.textContent = `${Math.abs(outcomes)}EUR`;//to remove - sign from value we can use Math.abs to remove absolute value - from UI

//money interets
const interest = acc.movements
.filter(mov => mov > 0)
.map(deposit => (deposit * acc.interestRate ) /100)
.filter((int) => { // this filter will return interests only on > 1 dollars transactions or eur
  return int >= 1;
  
})
.reduce((acc, int) => acc + int, 0);
labelSumInterest.textContent = `${interest}EUR`;
}

// conclusions//
/// we should not over use chaining 
//// can cause performance issues 
///// compress all the functionality in one 
///// it is a bad practice in js to chain methods that underlying original array
///// e.g =  splic method

/* 
calcDisplaySummary(account1.movements) */








// mapping first letters of the full name to bank app
const user = 'fara jami ahmadi';
const username = user
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    return name[0]; //now it's an array with 3 name initials
  })
  .join('');
console.log(username);

// mapping first letters of the full name to bank app
const userLetters = 'fara jami ahmadi';
const personUsername = user
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    return name[0]; //now it's an array with 3 name initials
  })
  .join('');
console.log(username);

// we can put it now into a function to re use it any where for any number of usersname
const makeUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(function (name) {
      return name[0]; //now it's an array with 3 name initials
    })
    .join('');

  return username;
};
console.log(makeUsernames('fara jami ahmadi'));
console.log(makeUsernames('jannat jami'));





////////////////////////Acount deletion //Delete//////////////////////////
btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(
    inputCloseUsername.value === currentAcccount.username &&
    Number(inputClosePin.value) === currentAcccount.pin
  ){
    const index = accounts.findIndex(
      acc => acc.username === currentAcccount.username
    );
     console.log(index)
    //.indexof(23)
    
    //delete account
    accounts.splice(index, 1);
    
        //hide account
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})
    //


//sorting the array of display transactions

// puts the array elements back to false back to normal 
let sorted = false;

btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAcccount.movements, !sorted);
  sorted =! sorted;

})
    





////////////////////////////getting the total balance of our bank APP//////////////////////////


///getting the total balance of our bank app 
////1. doing it serprately long hand
const accMovements = accounts.map(acc => acc.movements);
console.log(accMovements);
const allMovements = accMovements.flat();
console.log(allMovements);
/* const totalBalance = allMovements.flat().reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance); */




///getting the total balance of our bank app 
////2. doing it with chaining short hand
////cleaner code
const totalBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance);




////3. another method flatMap
//combines map and flat method into one  
///better for performance 
//if you need to go deeper in arrays in a situation you still need flatMap
const totalBalanceFlatMap = accounts
.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov, 0);
console.log(totalBalanceFlatMap);






















































/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(3)); // extracts at position 3  0 1 2 3 = 3 is d 5 is e
console.log(arr.slice(2, 5)); //position 2 is c give us c d e
console.log(arr.slice(-1));
console.log(arr.slice(1, -3));

// create a shallow copy off array with slice
console.log(arr.slice());
console.log(...arr); /// create a copy with spread... operator

//splice method
// works the same as slice
// diff is it changes the original array mutates that array

console.log(arr.splice(2));
console.log('deleted elemtes from original array', arr); // the original array changes deleted by splice
arr.splice(-1);
console.log(arr);

//reverse method
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse()); // reveresed array
console.log(arr2); // it also reverses the original arr2 array

//concat + method
const letters = arr.concat(arr2);
console.log(letters);
// we can also o spread operator
console.log([...arr, ...arr2]);

//join
console.log(letters.join(' - '));

//other methods
//shif pop
//push unshift
//delete
//...

console.log('-------ES 2020 at method--------');
// ES2022 at method

const arrAt = [23, 11, 64];
console.log(arrAt[0]); /// traditional bracket notaion
console.log(arrAt.at(0)); //new method

// special use case of at
console.log(arrAt[arrAt.length - 1]); // logs position 2 last
console.log(arrAt.at(-1)); // how to get the last element

////////////////////////////////////////////////////////////////////////
/// looping arrays : forEach

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdraw ${Math.abs(movement)}`);
  }
}

console.log('-------------forEach------------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdraw ${movement}`);
  }
});

///////////////////////////////////////////////////////////////////////map method//////////////////////

// map method  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

//using for of loop
const movementsUSDfor = []; /// it pushed into this array empty array
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);

// dont use thi xxxxxxxxxxxxxx
// with arrow function
const movementsUSD2 = movements.map(mov => eurToUsd * eurToUsd);
console.log(movementsUSD2);

// regular function
// into a variable
//calling it below with var name stored in var moveDescription

const moveDescription = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `movements ${i + 1}: you deposited ${mov}`;
  } else {
    return `movement ${i + 1}: you took money out ${Math.abs(mov)}`;
  }
});

console.log(moveDescription);

// ternary

const moveDescriptionTernary = movements.map(function (movement, i) {
  // or use ternary operator
  `movement ${
    i + 1
  }: you --> ${movement > 0 ? 'deposited' : 'took money out'} ${Math.abs(movement)}`;
});

console.log(moveDescriptionTernary);

//////////////////////////////////////////////////////////filter//////////////////////////////////////////////////////
//filter method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits); // negative and 0 are filtered not to be in deposits account

// same code with for of loop

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

/////////////////////////////////////////////////////////////////////////////////////////////
//mov is a call back fufnction
// filter  using regulr function
// practice example for withdrawal numbers filtered
const withdraw = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdraw);

// coding it with for of loop
const withdrawFor = [];
for (const mov of movements) if (mov < 0) withdrawFor.push(mov);

console.log(withdrawFor);

////////////////////////////reduce method////////////////////////////////////
//reduce  adding all emelemnts in one array
// reduce >> const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, current) {
  console.log(
    `iteration means repeating positions of elements as it goes to next number ${current} : ${acc}`
  );

  return acc + current;
}, 200); // adding number

console.log(balance);

// coding it with loops here
// can make it complicated to write many loops in code base
// reduce method is good for large code base and no repeating
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// to get the max value of the movements array all the money coming and going
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);





//dogs bark --> ages
const calchumanAges = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const youngDogs = humanAges.filter(age => age >= 18);

  console.log(humanAges);
  console.log(youngDogs);

  const average = youngDogs.reduce(function (acc, age, arr) {
    return acc + age / arr.length, 0;
  });
};

calchumanAges([5, 2, 4, 1, 15, 12, 3]);
const avg1 = calchumanAges([5, 8, 7, 1, 24, 8, 22]);
console.log(avg1);









//// data transformation 
/// using chaining method in maps, filter and reduce 
// chain all in one

const eurToUsdNew = 1.1;
console.log(movements)

const totalDepositUSD = movements
.filter(mov => mov > 0) ///filters nums > 0  selects positve nums
.map(mov => mov * eurToUsdNew) 
.reduce((acc, mov) => acc + mov, 0)

console.log(totalDepositUSD)



///////////////////////////the find method/////////////////////////
// we can use the find.() to retrive one element of an array based on a condtion
/// just like the other array method find methods also accept a call back func which then can be called to loop over the array
//// loops over array but do someting differrent
//////// you might see find method is a bit the same as filter method?>
/////// fundamental diffrence is 
//////fundamental 1. filter all the ele that match the condition while find method only returns the first one
///// funamental 2. the filter returns a new array while finds only returns the element itself 

const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements);
console.log(firstWithdrawal)


// e.g.  our object in the code base
console.log(accounts)
/// find specific account owner from an object 
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account)








////////////////////////some and every arrays method ////////////////////////////

//includes 
///test an array includes a value  but includes check for equality == retuns boolean
////if we wanted to test a conditon instead we use some method
console.log(movements)
console.log(movements.includes(-130));

//conditional with some method
//test positive movements in our array
const anyDeposits = movements.some(mov => mov > 500);
console.log(anyDeposits)


///every
/// we can simplfy the functions and call back
//// simply write our function and call back
///// resue the same funciton for all kinds of diffrrent method that require call backs
const deposit = mov => mov > 0;
console.log(movements.some(deposit));  //true
console.log(movements.every(deposit)); // false 
console.log(movements.filter(deposit));// filters the array






//flat and flatMap method
//combine all arrays > nested array in one
const arrFlat = [[1, 2], 3, 4, 5, 6, 7, 8,];
console.log(arrFlat.flat())

//deep nested array 
const arrDeep = [[[1,2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)) // running it with 2 (level) is going deep in array 









/////////////
///////////////////////////////////////////////////////SORT METHOd////////////////////////////////////////////////////////////////
/////////////



//Strings --> sort
const owners = ['fara', 'ahmad', 'maria', 'sarah'];
console.log(owners.sort()); //now it sorts array in alphbetical manner
//this actually mutates the original array
console.log(owners)//<--  mutated


// Numbers -- sort
console.log(movements); //orignal array
//console.log(movements.sort()); //sorted array
// if we take a look at results now its not what we expect to see
// the numbers are not sorted at all
//// the reason for this is ... the sort method does the sorting based on strings that works by default
/// [-130,-->1  -400,-->4 -650, -->6  1300,-->1 200,-->2  3000,-->3 450,-->4 70-->7]
//if it were strings --> goes by 123 sort method 






///////////////////// we can fix this by compare call function///////////////////// 

// if we return < 0, A, B  then A will be before B  ACCENDING = from small to large numbers
// if we return > 0, B, A then B will be before A  DECENDING  = from large to small nunbers

//accending  1️⃣2️⃣3️⃣

//------->long function<-------//

/* movements.sort((a, b) => {
if(a > b)
return 1;

if(b < a)
  return -1
}) */

//✅------->Short function DRY<-------//
movements.sort((a, b) => a - b) 
console.log(movements)





//decending 3️⃣2️⃣1️⃣
//sort the opposite way decending large to small
/* movements.sort((a, b) => {
  if(a > b)
  return -1;
  
  if(b > a)
    return 1
  }) */

//✅----->Short function DRY<------//
  //as always we are returning a value with arrow funtion so we don't need to explicitly call return

movements.sort((a, b) => b - a)
console.log(movements)
//note:  if  we have a mixed array nums and strings this wont work
















//practice]1

// we get array of arrays like this
const bankDepositSum = accounts.map(acc => acc.movements)
console.log(bankDepositSum)


// with flatMap we get a big array of arrays in one 
const bankDepositSum2 = accounts
//flatens the results into one big array
.flatMap(acc => acc.movements)
//filter deposits based on mathimatic condition greater than 0
.filter(mov => mov > 0)
///adding them all togther  reducing into one array of total 
.reduce((sum, current) => sum + current, 0);
console.log(bankDepositSum2)






//practice]2
//count deposits with at least >= 1000 USD

const numberOFDeposits1000 = accounts
.flatMap(acc => acc.movements)
.reduce((count, current) => (current >= 1000 ? ++count : count), 0) // ++count or count + 1
console.log(numberOFDeposits1000)





//3 
// put withdrawals and deposits together 
//const {despsits, withdrawals} = accounts or you can use const sums = accounts
const sums = accounts
.flatMap(acc => acc.movements)
.reduce((sums, current) => {
  // with dot notation 
  current > 0 ? sums.deposits += current : sums.
  withdrawals += current;
  
     // to make it cleaner code with bracket notation 
  //sums[current > 0 ? 'deposits' : 'withdrawals'] += current;
  //return sums;

  return sums;
 

},
{deposits: 0, withdrawals: 0})


console.log(sums)






/// create a simple function to convert any string to Title Case
/// words in sentence capitalized with some exceptions
////e.g. this is a nice title -> This Is a Nice Title

const convertTitileCase = function(title){
  // to make a general funciton for the first word of the sentence to make capitalize from exceptions words if comes in the begining of the sentence
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
 // exceptions 
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with']
//conversion step
  const titleCase = title
  .toLowerCase() // to lowerCase
  .split(' ') // split string into array each word will become one of the elements of the array

   //map -> we want to go thru the array now and find index 0 of each word to capitalize based on index 
   // use another logic to check if first index [0] indclues the exception letter 
   // then we use the ? : ternary boolean if the exception is true or not if yes return that word if not next step capialize it
  .map(word => exceptions.includes(word) ? word : capitalize(word))
  .join(' ')
  
 return capitalize(titleCase);

  // capitalize non exeptioin words
  // use map



}


console.log(convertTitileCase('this is a nice title but not a long title'));
console.log(convertTitileCase('the airplane can fly in the air'));
console.log(convertTitileCase('javascript is hard but you can learn it with a study plan in place'));





///////////////////////challenge/////////////////////////////////


// find dogs eating too much to little 
// find dogs owners names 
// loop over the objects array



const dogs = [
  {
    weight: 22,
    curFood: 250, 
    owners: ['Alice', 'Bob'],

  },
  {
    weight: 8,
    curFood: 200,
    owners: ['maria']
  }, 

  {
    weight: 13, 
    curFood: 275,
    owners: ['sarah', 'jacky']
  },

  {
    weight: 32,
    curFood: 340, 
    owners: ['mooji']
  }
];
  


  dogs. forEach(dog => (dog.recFood = Math.trunc(dog
  .weight ** 0.75 * 28)))

  console.log(dogs)



const findDog = dogs 
.find(dog => dog.owners
.includes('sarah'));
console.log(findDog)
console.log(`sarah's dog is eating 
${findDog.curFood > findDog.recFood ?
 'much' : 'too little'} `);


//dogs eating too much
const dogsEatTooMuch = dogs
.filter(dog => dog.curFood > dog.recFood)
.flatMap(dog => dog.owners)
//.flat()
console.log(dogsEatTooMuch)


//dogs eating too little 
const dogsEatTooLittle = dogs
.filter(dog => dog.curFood < dog.recFood)
.flatMap(dog => dog.owners)
//.flat()
console.log(dogsEatTooLittle)







////////////////
////////////////////////working with numbers in JavaScript // tricks /tips///////////////////////

// in js all numbers are repressented as floating point numbers
//always has decimals no mmatterr how we write them
// e.g.
console.log(23 === 23.0) 
// and you see that 23 = 23.0 thats the reason we only have one data type for all numbers
// numbers are represented in a 64 base 2 format, this means number are stored in a binary format = 0 and 1

// it can't work really well to get a number in base 10 this way
// base 10 numbers 0-9 while binary is based 2 = 0 and 1
// e.g. of that is the fraction 0.1

console.log(0.1 + 0.2); // funnny js joke
//in base 10  1/10 = 0.1
// if we devide 3/10 = 3.3333333 it will be infinity 
// catch errors
console.log(0. + 0.2 === 0.3)// it should be true but you know why not in this case?



////////////////////////working with numbers/////more>//////////////////

/// conversion 
console.log(Number('111'));
console.log(+ '111'); // js sees the + operator it will do type coersion converts to number 


/// parsing
console.log(Number.parseInt('30px')) // it will work it needs to start with a number 
console.log(Number.parseInt('text200')) // it will not work NaN


/// parsefloat conversion 
console.log((Number.parseFloat('111.11rem'))) // parseFloat will return with decimal point
console.log(Number.parseInt('111.11rem')) //parseInt will return only fixed number 



/// isNaN
/// isNaN is not a number checking if value is number 
console.log(Number.isNaN(20)) // is a number 
console.log(Number.isNaN('20')) // is number
console.log(Number.isNaN(+ '20X')) // is nan
console.log(Number.isNaN(20/0)) // false  infinity



/// isFinite
console.log(Number.isFinite(20))// true
console.log(Number.isFinite('20')) //false



//isInteger
console.log(Number.isInteger(1111)); //true
console.log(Number.isInteger(111.11)); //false
console.log(Number.isInteger(23 / 0)) //false





///////////////////////////////////////numbers, dates, intl and timers/////////////////////////////////////////
///  operations 

//[] root sqour root 
console.log(Math.sqrt(25)); 
console.log(25 ** (1 / 2)) // same thing can be done using exponentiation operator as well

console.log(8 ** (1 / 3)) //quebec root


//max
console.log(Math.max(5, 18, 23, 11, 44)) // returns max value bigger namuber 
console.log(Math.max(5, 18, '23', 11, 44)) // max function do type coersion but it wont parse 
console.log(Math.max(5, 18, '23px', 11, 44)) // max function do type coersion but it wont parseInt 


//min
console.log(Math.min(5, 7, 11, 1)) // returns min small number value 


//Pi
//constance  if we want to calc the radius of a circle 
// this is how we can calculate the area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2)


//random numbers
console.log(Math.random() * 6) // gives us a random number 
console.log(Math.trunc(Math.random() * 6) +1) // add truncation to cut off the decimal part 


console.log('rounding with ceil')
// always rounds up with any decimal part high or low 
console.log(Math.ceil(20.30));  // 21 rounds up
console.log(Math.ceil(20.90)); // 21 rounds up



// real-usecase e.g.
// formula we can use to always generate a random integers  between  2 values
const randomInt = (min, max) => 
Math.trunc(Math.random() * (max - min) + 1) + min;
// it gives us a number between 0 and 1   
console.log(randomInt(10, 20))    





///////////////////////////////////rounding integers/////////////////////////////////
console.log(Math.trunc(20.30)) // removes decimals    // 20

// other ways 
console.log('rounding with round')
console.log(Math.round(20.30));  // 20 rounds down
console.log(Math.round(20.90)); // 21 rounds up
console.log(Math.round(20.51)); // 21 rounds up


console.log('rounding with floorl')
// always rounds down with any decimal part floor it 
console.log(Math.floor(20.30));  // 20 rounds down
console.log(Math.floor(20.90)); // 20 rounds up

console.log(Math.floor(-11.22))// it works backwards and rounds up if negative works on negative and positive number 




/// rounding decimals
//toFixed will alwyas return a string 
console.log((2.11).toFixed(0)) 
console.log((2.11).toFixed(3))//it add 3decimal part 
console.log((2.111).toFixed(2))
console.log(+(2.111).toFixed(2))




///////// ////////// ///////////
// //////////////////////////////////////////applying floor/ toFixed methods to our app/////////////////////////////////////////////
// rounds up or down a number of loan request
// line 211 
const amount = Math.floor(inputLoanAmount.value);

// toFixed (2) --> adds 2 decimal part at the end of the value  to fixed value 
// line 97 
// <div class="movements__value">${mov.toFixed(2)}€</div>
// labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
// line 114 
// labelSumIn.textContent = `${incomes.toFixed(2)}€`;
// labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
// line 129 
// labelSumInterest.textContent = `${interest.toFixed(2)}€`;




//////////////////////// Remainder operator //////////////////////////////////////////////////////////////////////
// simply returns the remainder of a division  %
console.log(5 % 2); // returns 1 why is that?
// if we divide 4 by 2 the result would be 0 no remainder 
console.log(4 % 2) // returns 0 
console.log(5 / 2); // 2.5
console.log(111 % 99) // 111 /  99 = 1.1222222 so 12 will be the remainder



// create a remainder function to test even or odd numbers 

// funcstoin expression
const isEven = function(n){
  if(n % 2 === 0){
    return true;
  } else{
    return false;
  }
}
console.log(isEven(2))
console.log(isEven(111))
console.log(isEvenOrOdd(77))
console.log(isEvenOrOdd(100))


///////////// remainder: coloring the odd or even rows of the movements list transactions

labelBalance.addEventListener('click', function(){
  [...document.querySelectorAll('.movements__row')].
  forEach(function(row, i) {
    if ( i % 2 === 0) row.style.backgroundColor = 'green';
    if (i % 3 === 0) row.style.backgroundColor = 'blue'
  
  });

});




//prmitive data
///////////////////////////////////////////////bigInT/////////////////////////////////////////
// JS CAN ONLY REPRESENT THIS NUMBER NOT bigger
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);


//es2020 A NEW PRIMITIVE WAS ADDED IN JS TO HAVE 60 BITS NUMBERS LARGER
console.log(45878466666666666666666666666666n);
console.log(BigInt(45878466666666))

//operations are used the same 
console.log(10000n + 10000n)

///not posible to mix bigint with regular numbers
//e.g.
const hugeNum = 545566655226655655565n;
const regNum = 22;
console.log(hugeNum * BigInt(regNum)) // we need to use constructor BigInt function 
// compareson operator 
console.log(20n > 15); 
console.log(20n === 20) // strict type check will return false 
console.log(typeof 20n)
///coerce = convert something
//e.g.
console.log(20n == 20) //converted to num by coerce 



//divisions
//console.log(10 / 3n)
//errors cannot mis bigint and other types use explicit conversions
console.log(10n / 3n) // works


////////////////////////////////////////////////creating dates///////////////////////////////.
//there are 4 ways 

//1. 
const now = new Date();
console.log(now);

//2. parse the date
console.log(new Date('Aug 06 2022 6:6:6'))
console.log(new Date(account1.movementsDates[0]))

// time stamp now
console.log(Date.now())
console.log(Date.now())


//////////operations with dates++++++++++++++++++++++++++++++++++++==================
const future = new Date(2090, 10, 19, 15, 23);
console.log(+future) //future





////////////////////////Internationalization dates and numbers///////////////////////////////////

