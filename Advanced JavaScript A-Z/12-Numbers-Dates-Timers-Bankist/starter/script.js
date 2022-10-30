'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],

  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;









///////////////////////set time out time interval for user log in interface/////////////////////////////////////////////////////////////
const autoLogoutTimer = function(){
///set time to 5m mints
let time = 120;

///call the timer every second
const timer = setInterval(function() {
  // Math.trunc will cut the extra digits.. only keeps integer number and cut off decimal part
  // padStart adds a zero  0 and makes the number 2 digits  like  02min:60secs
  const min = String(Math.trunc(time / 60)).padStart(2, 0);// it was const min = time / 60
  const sec = String(time % 60).padStart(2, 0); // it was const sec = time / 60

///in each call print the remaining time to UI
labelTimer.textContent = `${min}:${sec}`;




///when 0 seconds, stop timer and log out user
if(time === 0){
  clearInterval(timer); // time is our call back fuction from top  setinterval function 
  labelWelcome.textContent = 'Log in to get started'
  containerApp.style.opacity = 0;
}

// we need to put time-- decreas after  to avoid logging out at 1 seconds 
//remove seconds decreas seconds
time--  // time = time -1 -->is time-- 
  
}, 1000);
return timer;
};
















///FAKE ALWAYS LOGGED IN /////////////////////////////////////////
/* currentAccount = account1;
updateUI(currentAccount)
containerApp.style.opacity = 100; */


/* const day = `${now2.getDate()}`.padStart(2, 0);
const month = `${now2.getMonth() + 1}`.padStart(2, 0);
const year = now2.getFullYear();
const hours = now2.getHours();
const mints = now2.getMinutes();

labelDate.textContent = `${day}/${month}/${year}. ${hours}:${mints}`
 */

























btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

     // Timer 
     if (timer) clearInterval(timer);
     timer = autoLogoutTimer()

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

   

    // Update UI
    updateUI(currentAccount);


    //resets our timer if user is active using app
    clearInterval(timer);
    timer = autoLogoutTimer() // starts timer again 
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
   setTimeout (function(){ // add time out
    
    // Add movement 
    currentAccount.movements.push(amount);

    // add loan date
    currentAccount.movementsDates.push(new Date);

    // Update UI
    updateUI(currentAccount);

    //resets our timer if user is active using app
    clearInterval(timer);
    timer = autoLogoutTimer() // starts timer again 
  
  }, 2500)

   } // this is from our new setTimeout function }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
















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




////////////////
////////////////////////working with numbers in JavaScript // tricks /tips///////////////////////


/// conversion 
console.log(Number('111'));
console.log(+ '111'); // js sees the + operator it will do type coersion converts to number 


/// parsing
console.log(Number.parseInt('30px')) // it will work it needs to start with a number 
console.log(Number.parseInt('text200')) // it will not work NaN















/// parsefloat conversion 
console.log((Number.parseFloat('111.11rem'))) // parseFloat will return with decimal point
console.log(Number.parseInt('111.11rem')) //parseInt will return only fixed number 



// isNaN is not a number checking if value is number 
console.log(Number.isNaN(20)) // is a number 
console.log(Number.isNaN('20')) // is number
console.log(Number.isNaN(+ '20X')) // is nan
console.log(Number.isNaN(20/0)) // false  infinity

// isFinite
console.log(Number.isFinite(20))// true
console.log(Number.isFinite('20')) //false

//isInteger
console.log(Number.isInteger(1111)); //true
console.log(Number.isInteger(111.11)); //false
console.log(Number.isInteger(23 / 0)) //false


///////////////////////////////////////numbers, dates, intl and timers/////////////////////////////////////////
/// mathimatics operations 

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



// real-usecase e.g.
// formula we can use to always generate a random integers  between  2 values
const randomInt = (min, max) => 
Math.trunc(Math.random() * (max - min) + 1) + min;
// it gives us a number between 0 and 1   
console.log(randomInt(10, 20))    


////////////////rounding integers////////////////////
console.log(Math.trunc(20.30)) // removes decimals    // 20

// other ways 
console.log('rounding with round')
console.log(Math.round(20.30));  // 20 rounds down
console.log(Math.round(20.90)); // 21 rounds up
console.log(Math.round(20.51)); // 21 rounds up


console.log('rounding with ceil')
// always rounds up with any decimal part high or low 
console.log(Math.ceil(20.30));  // 21 rounds up
console.log(Math.ceil(20.90)); // 21 rounds up

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
// line 107
// labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
// line 114 
// labelSumIn.textContent = `${incomes.toFixed(2)}€`;
// line 119 
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
console.log(isEven(77))
console.log(isEven(100))

// with arrow function 
const isEvenOrOdd = n => n % 2 === 0;

console.log(isEvenOrOdd(2))
console.log(isEvenOrOdd(111))
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

//STARTING 2020 A NEW PRIMITIVE WAS ADDED IN JS TO HAVE 60 BITS NUMBERS LARGER
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
console.log(20n === 20) // strict type sheck will return false 
console.log(typeof 20n)
///coerce = convert something
//e.g.
console.log(20n == 20) //converted to nub by coerce 














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
// to the app
const now2 = new Date()
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // short long or numeric digits 2-digit
  year: 'numeric', 
  weekday: 'long'// you can use long short narrow 
}
//automatically getting the lacale languages from user end browser or location 

const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat
(locale, options).format(now2)

//maually getting the local language by specifiying it here
//labelDate.textContent = new Intl.DateTimeFormat
//('en-US', options).format(now2) //en-US is the locale language can change






//////////format numbers
const num = 879898446;
//1.
///making it more complex using adding many number types like units and so
const optionsNumbers = {
  style: 'unit',
  unit: 'mile-per-hour',
  userGrouping: false,
}

//2.
//tempreture units or degrees
const optionsTemp = {
  style: 'precent',
  unit: 'degree or celsius'
}

//3.
//currency units 
const optionsMoney = {
  style: 'curren',
  unit: '',
  currency: 'USD'
}

console.log('US:', new Intl.NumberFormat
('en-US', optionsNumbers).format(num))
console.log('Dubai:', new Intl.NumberFormat
('ar-AE', optionsNumbers).format(num))
console.log('Farsi:', new Intl.NumberFormat
('fa-IR', optionsNumbers).format(num))


//using locale language setting automatically
console.log(navigator.language, new Intl.NumberFormat
(navigator.language, optionsNumbers).format(num))










/////////////////////////////////////Timers////////mechanism called Asyn JS////////////////////////////////////////////
// set timeout timer  --> runs just once 
// set interval timer --> keeps running forever 
setTimeout((ing1 , ing2) => {
  ing1 = 'olives', 
  ing2 = 'avacado'

  console.log(`here is your pizaa2 with ${ing1} and ${ing2}`)

}, 3000);  // 3 secs


console.log('waiting...') /// proof that other code excecution will continues / wont affect other codes 
/////////////
//put comment lines and just type setTimeout --> it will populate the full function of it auto fill 



//
//
///
/////
////////////////////add tooooo github from here//////////////





// another way
// ing array first 
// set timer
// set timer stop 
const ings = ['olives', 'spinach'];
const timerTest = setTimeout((ing1, ing2) => {
 
  console.log(`pizza with new clear time out`) 
  
}, 3000, ...ings);

if(ings.includes('spinach')) clearTimeout(timerTest) //stops timer and code execution 





//// setInterval  
setInterval(function() {
  const now = new Date();
  console.log(now)
  
}, 1000000)//set 1000 ms); //inerval go here 1000 = 1 second