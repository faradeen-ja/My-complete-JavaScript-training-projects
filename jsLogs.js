'use strict';

const javaScriptsLogs = {
  dever: 'FJ',
  logs: 'JS',
  progress: '-----halfway done!',
  goal: 'become a useful dev'
}

console.log(javaScriptsLogs.logs)
console.log(javaScriptsLogs.progress)


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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
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
displayMovements(account1.movements);

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

//calculate the bal of movements////////////////////////////////////
const calcPrintBal = function (movements) {
  const balanceApp = movements.reduce(function (acc, mov) {
    return acc + mov;
  });

  labelBalance.textContent = `${balanceApp} EUR`;
};

calcPrintBal(account1.movements);

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




/// using chaining method in maps, filter and reduce 
//chain all in one






