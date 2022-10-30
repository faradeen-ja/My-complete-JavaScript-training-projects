'use strict';















// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // this is a methode in an expression functions holding 4 object variables now
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // got logged here
    console.log(`order received!! ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be deleivered to ${address} at ${time}`);
  },



  //adding a method for spread op arrays
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is you pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },



  // add another method to use for REST parameters
  orderPizza: function (mainIngs, ...otherIngs){
    console.log(mainIngs);
    console.log(otherIngs);
  },


};

// call function param and passing in an object of options
//calling a method with an object
// got called here with an object
restaurant.orderDelivery({
  time: '22:30',
  address: 'Houston, Texas, USA',
  mainIndex: 2,
  starterIndex: 2,
});

console.log('------desctructuring objects--------');
//============ destructure objects ============================
// we use curly braces to destructure obs {}  provide the vars names exactly matching in the object properties

const { name, openingHours, categories } = restaurant; // we need to write the exact property names in the object
console.log(name, openingHours, categories);

// to get data from an api we use this methode to destructure data from objects
// if we want the valiables names to be differrent than property name the ones in main object
// we still need to mention props name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// api calls come from third party this would be used to update names in objects
const { menu = [], starterMenu: starters = [] } = restaurant; //here changing main object property name into a new name

console.log(menu, starters);

// next up
// mutating variables

// lets destructure this object
let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c1: 14 }; // key values here to make an object or params
// we connot  say const or let a and b are already decllared on top
// let {a1, b1} = obj   cannot do this

// when we start a code block like this  { a, b } then js expects a code block . so we wrap in prantesese ({})
// so now if want to mutate these top valiables  replace their values
({ a1, b1 } = obj); // destructured  asignment
console.log(a1, b1);

// nested objects in destructuring
const {
  fri: { open: o, close: c2 },
} = openingHours;

console.log(' -------destructuring Arrays------ ');

// -------------------------------------------deStructuring Arrays  --------------------------------

// bad way of declaring vars
// before destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// modern way es6 ++
// we write this syntax here to destructure un--pack
const [x, y, z] = arr; //whenever js sees the var name on the right side with = sign it means to destructure it
console.log(x, y, z);
console.log(arr);

// let's take some elements from the object list above
// to deStructure it
const [first, , second] = restaurant.categories; // comma , in the middle of elements is to take the first and last elements skipping
console.log(first, second);

// let's the owner of the app decides to switch the category to main and secondary
let [main, , secondary] = restaurant.categories; // comma , in the middle of elements is to take the first and last elements skipping
console.log(main, secondary);
// if we want to switch these w/o the destructuring we would have to do it like this  create a temp variable and then asign each seprate
// this is bad / switching varis
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// do it the destructuring way es6+
/* [main, secondary] = [secondary, main]; // replacing elements reasigning values  
console.log(main, secondary); */

// write a function to order food with adding a method to our object
// this is how we receive 2 return values from a function --> destructured
const [starter, mainShit] = restaurant.order(2, 0);
console.log(starter, mainShit);

// nested array destructuring

const nested = [2, 4, [5, 6]];
/* const [i, , j] = nested;
console.log(i, j) */

// nested destructuring
// to get all elements in array and nested arr
const [i, , [j, k]] = nested;
console.log(i, j, k); // logs 2 5 6

// we also set the default values for the varible that we want to destructure them
// deafault values for destructuring

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // logs 8 9 undefined  therefore we can set default values







//-------------------------------------spread (...arr1, ...arr2) operator ------------------------------------------------


console.log('------------spread (...arr, ...arr2) operator------------------');

const arrSpread = [7, 8, 9]; // array literal
const badArr = [1, 2, arrSpread[0], arrSpread[1], arrSpread[2]];
console.log(badArr);

//use es6 plus spread operator
const goodArr = [1, 2, ...arrSpread];
// what this do is take all the emelements from arrSpread out and puts it with new array
console.log(goodArr);

// to log indivisual elements of the new array good Arr
console.log(...goodArr);
// this now will log the indivusual number in array for us 123456

// create a food item from the restuarant menu

// we are creating a new menu here using spread ops ... adding eggs
const newMenu = [...restaurant.mainMenu, 'add eggs'];
console.log(newMenu);




// next --> let''s learn about 2 use cases of the spread op
// creat a copy of the main menu
const mainMenu = [...restaurant.mainMenu];

// to join to arrays or more together we use this tip
const menu22 = [...restaurant.starterMenu, ...restaurant.mainMenu] // joining 
console.log(menu22) // log new menu from joined arrays





// spread op works on all so called iterables
// what is an iterable? things like arrays stirngs maps or sets but not objects
// most data structures in js are iterables but not objects 
const str = 'fara';
const letters = [...str, '', 'J.'];
console.log(letters);
console.log(...str);
// multiple values seprated by comma are ususally are only expected when we pass args in a function or in an array

// add a methode example to our object above 
// call it here
/* const ings= [
  prompt("let's make pasta, put ing one"),
  prompt("put ing 2"),
  prompt("put ing 3"),
]
console.log(ings)

// how do we call the orderPasta function?
restaurant.orderPasta(...ings) // expand the element of the ings array  it will write the 3 elements here together using spread op
 */


// spread op on object even objects are not iterable 
const newRestaurant = {Founded: 2022, ...restaurant, founder:'fara'};
console.log(newRestaurant) // shalow copies of arrays into objects
// we can do the same with objects. instead of using object.asigne
const restuarantCopy = {...restaurant};
restuarantCopy.name = 'Persian';
console.log(restuarantCopy.name)
console.log(restaurant.name)








//--------------------------------reset patter and parameters---------------------------------
console.log('-------------reset patern and parameters---------------------------------')


// spread op is to unpack an array while rest is to pack an element to an array
// let's see
// 1. destructuring here
const arrTest = [1, 2, ... [3, 4]]// = spread because we use it on the right side of = asignemnt operator  --> 
const [aVar, bVar, ...others] = [2, 3, 4, 5] // aVar bVar is a varible here  others... is Rest operator it's on the left side = sign




const [pizza, , eggs, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, eggs, ...otherFood) // the Rest should be the last



// REST in objects   collect elements 
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays); // only shows friday and thursdaY




// 2. functions
// ...rest syntax with argument numbers
// the REST syntax takes multiple values and puts them into one array
// with the spread operator ...spread we xpand enlarge with the REST we compress elements

const add = function(...numbers){
  //we can write a simple for loop logic here to add all the elements together
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) 
  sum += numbers[i];
  console.log(sum)
};

add(2, 3); // this is a working function which can take any num parameters
add(5, 3, 7, 4);
add(8, 2, 3, 2, 1, 4)


// make another array
const xx = [11, 111, 1111]; // if we wanted to get these elements of array and put theem together...
// we would use the spread ... operator  taking and number in array and put them together
add(...xx)
// the first arguments 'eggs' was stored into first arg of function above
restaurant.orderPizza('eggs', 'tommato', 'fries', 'cheese')





console.log('------ short circuiting --------')
console.log('----Or operator----')
// short circuiting  ( && and II  and / or) bolean?  we can do more with these
//3 properties about logical ops
// use any data type, return any data type, short - circuiting 
// short circuiting means if the first value is a truthy value it will return that first value
// like thise
console.log(3 || 'fara')
console.log('' || 'fara') // blank strings falsy value
console.log(true || 0);// 0 is a falsy value
console.log(undefined || null); // undefined is a falsy value so it returns null


console.log(undefined || 0 || '' || 'Hello' || 23 || null)


const guestList = restuarantCopy.ifGuestExist ? restaurant. ifGuestExist : 10;
console.log(guestList)

//setting default value of 10 here if guest dont exist it will show 10
const guestList2 = restaurant.ifGuestExist || 10
console.log(guestList2)




console.log('-----AND operator-----')

//it works the opposite way of the or

console.log(0 && 'fara')
console.log(11 && 'fara')

console.log('Hello' && 23 && null && 'fara') // returns or shorcircuts the falsy values only
if( restaurant.orderPizza){ // we check if 
  restaurant.orderPizza('eggs', 'cheese')
}

restaurant.orderPizza && restaurant.orderPizza
('eggs', 'cheese')







const rest1 = {
  name: 'foodland',
  numGuest: 20,


}

const rest2 ={
  name: 'iceland',
  owner: 'boo'

}



rest1.numGuest = rest1.numGuest || 10; // 10 is default value
rest2.numGuest = rest2.numGuest || 10; // 10 is default value

console.log(rest1)
console.log(rest2)

// logical operator or = to ||= concise way 
// it's like var1 + var2 = var3   --> var+=
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

console.log(rest1)
console.log(rest2)


// make rest owner name anonymous
rest2.owner = rest2.owner && '<ANONYMOUS';
rest1.owner = rest1.owner && '<ANONYMOUS';

// to make it short  or short circuit 
rest1.owner &&= 'Unknown Name'
rest2.owner &&= 'Unknown Name'

console.log(rest1)
console.log(rest2)






// looping arrays the for-of loop
console.log('-------------------for-of loop------------------')
// storing the objects or array in a new variable 
const menuLoop = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const items of menuLoop) console.log(items)
// loop over items of array and logs indivisually 
// items can be called anything we want = books, shoes...
// abstraction tiqnique
for (const items of menuLoop.entries()){
  console.log(menuLoop)
}

console.log([...menuLoop.entries()])









console.log('-----------------ES6 enhanced object literals------------------')
//ES6 object litrals


//lets say we have an object out side of object 
const openingHours2 = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};



// main object---------add openeing hours2 here---------------------

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // old object in object 

/*   openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
 */
  //before ES6 you wrote this
  openingHours2: openingHours2,
  //with new ES6 you write like this
  openingHours2, // shows object from outside inside 

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // this is a methode in an expression functions holding 4 object variables now
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // got logged here
    console.log(`order received!! ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be deleivered to ${address} at ${time}`);
  },



  //adding a method for spread op arrays
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is you pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },






// ---------------------------------ES6 new methods--------------------------------------
// old way using function keyword 

  // add another method to use for REST parameters
/*   orderPizza: function (mainIngs, ...otherIngs){
    console.log(mainIngs);
    console.log(otherIngs);
  }, */




  //new way of writing methods without function keyword 
  // no : colons it will know it's a function 
  orderPizza(mainIngs, ...otherIngs){
    console.log(mainIngs);
    console.log(otherIngs);
  },


};








console.log('-------------------optional chainin----------------------------')
//----------------------------------optional chaining ---------------------
if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open)


// with optional ES2020 chaining 
console.log(restaurant.openingHours.mon?.open) // the ? asking if it exist  open or mon is undefined do not exist

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for(const day of days){
  console.log(day);
  const isOpen = restaurant.openingHours[day]?.open ?? 'closed'; // we cannot do dot notation. if we want to use a var name as a property name we need to use bracket notation [variable name]
  console.log(`on ${day}, we open at ${isOpen}`); // ?? is a nullish value  = null and undefined
}


// optonal chaining also works fro calling methods
console.log(restaurant.order?.(0, 1) ?? 'Method not exist'); //?? is aksing if metthod or element is our code if not it returns the string 

console.log(restaurant.orderEggs?.(0, 10) ?? 'Eggs Method not exist');



// optional chaining on arrays
const users = [
  {
    name: 'fara', // if no user here it will show other condition user array empty
    email: 'hello@email.com',
}
]

// option one short way
console.log(users[0]?.name ?? 'User array empty');



// no optoin chain long 
if (users.length > 0)
console.log(users[0].name);
else console.log('user array empty')









//----------------looping objects --> array keys and values

// looping over property names they are also called keys key values

const properties = Object.keys(openingHours); //now the result shows it is an array with 3 property names
console.log(properties)

// to say how many days rest is open
let openString = `we are open on ${properties.length} days:`;


for (const day of properties){
  openString += `${day}`;

  console.log(openString)
}


// properties values
const values = Object.values (openingHours);
console.log(values)

// Entire object
const entries = Object.entries(openingHours)
console.log(entries)

// now we use this to loop over object
// key  is weekday or property of the object above  // we used destructuring on open close object
// to variable names inside the object is open and close
// so we destructure it to unpack here
// we cal key anything we want like [day] 
for(const [key, {open, close}] of entries){
  console.log(`on ${key} we open at ${open} and close at ${close}`)
}






// challenge ---------------------------------------------

// 1.

const game = {
  team1: 'Germany',
  team2: 'UK',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmish',
      'Goman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    
    ], 
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Ankanji',
      'Hakimi',
      'Weigl',
      'witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',

    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2080',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// 1.
for (const [i, player] of game.scored.entries())
console.log(`GOOOAL ${i + 1}: ${player}`)



// 2.
// we have to calc the average of odds  by looping over the object and add all 3 values together and finally devide by by num of elements or 3
// loop over obj  add odds elements  devide by number of elements 
// we take the value out to do our calculation
// average = average / by 3 or the number of elements 
let odds = (Object.values(game.odds))
let average = 0;
for (const odd of odds) // looping on the object  object . values give us the array containing the 3 values
average += odd;  // in each iteration we add the odd to the average at the we can divide it by 3 
average /= odds.length

console.log(average)


// 3.
// the goal is to log or get the content of the object
// we will loop over that (object)  team and odd
// ? here is ternary conditional operator if === to x odds of draw then 'draw    : if not then victory
//to get the entries of entire object we use main name to get the sub or child or secondary objects inside a big object we use object.entries(game.odds) pass the propety names we need
for (const [team, odds] of Object.entries(game.odds)){ // we define the varibles name by ourself the [team and odds] we dont have to much with the main object 
 const teamString = team === 'x' ? 'draw' :`victory ${game[team]}`
  console.log(`Odds of ${teamString}.... ${odds}`)

} 







// next sets
console.log('------------------------------SETS and MAPS -----------------------------')
// sets is a collection of unique values that means a set can never have any du[[plicates]]
// 6 strings but sets can hold mixed data types no problem 
// duplicates gone
// just like arrays sets are also iterables
// in sets there are no indexes there no need getting data out of a set

const orderSet = new Set(['pasta', 'pizza', 'pizza', 'rissoto', 'pizza']);
console.log(orderSet)

// strings are also iterabels 
console.log(new Set('fara set of string'))

// lets see how to work with sets
//size is how many meals there.  called size in sets not lenght

console.log(orderSet.size); // it logs the size of the set 
console.log(orderSet.has('pizza')) // 
console.log(orderSet.has('bread')) // it checks for existing values in the set
orderSet.add('eggs white'); // it adds new values to the set
orderSet.add('eggs white');
// you see it logs eggs white is added one time because it's looking for unique values one time 
console.log(orderSet)

orderSet.delete('rissoto'); // rissoto item deleted
console.log(orderSet)

orderSet.clear(); // clears all sets values 


console.log('sets are iterable for loop here')
// sets are iterables that means we can looop over them
for(const order of orderSet) console.log(order);




// example -----------------------------------------------
///big use case main use case is to remove duplicate values
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

// let's say for some reasons we want to have a uniqe array of one type elemnts
const staffUnique =  [...new Set(staff)];
console.log(staffUnique)

// conversion from a set to an array   easy because they are both iterables 
// spread op works on all iterables   
// we can now  create an array and then use ... spread op  ----> now Set(staff) = make an array ... [...now Set(staff)]

// if we want to know how many position properties are we would use size
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);


// counting letters
console.log(new Set('farajamideveloper').size)  //logs 12 letters


// whenever you have unique values and you want to use none duplicated elements use sets 
// sets are not to replace arrays   
// whenever you need to store values in order  use sets





console.log('----------------MAPS------------------')
//Maps is a data structure that we use to map values to peice 
/// data stored in key value pair like objects
//// in MAP WE CAN HAVE ANY TYPE OF KEYS OR PROPERTY  we can use any data types
// IN OBJECTS THE KEYS ARE ALWAYS STRINGS

const rest = new Map() // create an empty map 
rest.set('name', 'persian food');
rest.set(1, 'Herat', 'Kabul')
console.log(rest.set(2, 'location1', 'location2'))



// set methods
rest //is a variable holding the MAP datas we are calling it here
.set('categories', ['persian', 'pizza', 'vegie', 'organics'])
.set('open', 11 )
.set('close', 22)
.set(true, 'We are open')
.set(false, 'We are closed');



// now in roder to read data from the MAP  we use the GET method

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1))



// MAP Methods method
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest)
console.log(rest.size)

const arrMap = [1, 2]
// now we can use arryas or objects as map keys
rest.set(arrMap, 'Test')

console.log(rest.get(arrMap))




//maps iteration  using map without the set method 
// the first position in this array will be the key 
// the second position is value 
 

const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'substituted'],
  [47, 'goal'],
  [61, 'substituted'], 
  [64, 'yellow card'],
  [70, 'red card'],
  [71, 'substituted'],
  [72, 'substituted'],
  [76, 'goal'],
  [80, 'goal'],
  [92, 'yellow card']

])

console.log(gameEvents)
const events = [...new Set(gameEvents.values())]
console.log(events)



// delete an event from mint 64
gameEvents.delete(64);


//events happened the number of event 
console.log(
  `an event happened, on average, every ${90 / gameEvents.size} mints`
)

const time = [...gameEvents.keys()].pop()
console.log(time)

// now looping thru the object actually map
for (const [min, event] of gameEvents){
  const half = min <= 45 ? 'first' : 'second';
  console.log(`[${half} half] ${min}: ${event}`)
}









console.log('------------------working with strings--------------------')
// working with strings

const airline = 'TAP Air France';
const plane = 'A380';

// it logs strings here but if we wanted them to be nums we would have to convert them
console.log(plane[0])
console.log(plane[1])
console.log(plane[2])

//
console.log('plane 737B'[0]) // will show letter p  direct access

// strings have methods
// index of  get the position of the letter or element
console.log(airline.indexOf('a')); //  shows post 10


// extract part of strings with slice 
console.log(airline.slice(5)) // shows ir france

console.log(airline.slice(0, airline.indexOf('')))
console.log(airline.slice(airline.lastIndexOf('')))


// checks seats of plane
const checkMiddleSeat = function(seat){
  // b and e are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s ==='E')
  console.log( `you got the middle seat`)
  else console.log('you got lucky seats')

}

// call the function here
checkMiddleSeat('11B')
checkMiddleSeat('44E')
checkMiddleSeat('21E')
checkMiddleSeat('99C')



// strings are also objects 
console.log( new String('fara deving'));
console.log(typeof new String('fara deving'));

console.log(new String('fara deving').slice());



// fix capital letter in passenger names
const passenger = 'faRA' ;
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase
() + passengerLower.slice(1);
console.log(passengerCorrect)



// check user intput email
const email = 'hello@fara.io';
const loginEmail = 'Hello@Farra.Io\n';
/* 
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail)
 */
const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail)

console.log(email === normalEmail)




// replacing parts of the strings
const priceEu = '288,97EU';
const priceGlobal = priceEu.replace('EU', '$').replace(',', '.'); // we using chaining instead of creating another variable  replacing money sign and then replace comma to dot , > .
console.log(priceGlobal)


const announcment = 'All passnegers come to the boarding door 23. boarding door 23!!'
//console.log(announcment.replace('door', 'gate'));

// regular regex regular expression to tell to target all the occurance of door word
console.log(announcment.replace(/door/g, 'gate'));



//practice check baggage stuff
// when we receive an input from a user we start by putting everything to lowercase
const checkBaggage = function(items){
  const baggage = items.toLowerCase(); // we put every input to lower case

  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are not allowed to board the plane')
  }else {
    console.log('welcome aboard')
  }


}

checkBaggage('this passenger have a laptop, food and a pocket Knife')
checkBaggage('Socks pen and camera');
checkBaggage('this passenger has dog and gun');






//powerfull string method   --> split and join 
console.log('a+very+nice+string'.split('+'));

console.log('fara jami'.split(' '))

const [firstName, lastName] = 'fara jami'.split(' ')

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);


// capitalize a name
const bigLetters = function(name){
  const names = name.split(' ');
  const namesBig = []

  for(const n of names){
    namesBig.push(n[0].toUpperCase()+ n.slice(1))
  }
  console.log(namesBig.join(' '))
 
}
bigLetters('jerry cat mouse funny')
bigLetters('car truck tank airplan')




// next padding strings 
const message = 'Go to gate 111';;
console.log(message.padStart(25, '+')) // adds repetive strings to the begining 
console.log('tank'.padEnd(10, '$')) // adds repetive strings to the end



// credit car masking
const hideCredit = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');

}

hideCredit(485857557);

console.log(hideCredit(6+4596565))





// next up  repeat   the same string multiple times
const messageAirport = 'bad weather... all planes stopped frying: ';
console.log(messageAirport.repeat(5))


// planes in line
const planesInLine = function(n){{
  console.log( `too many like... ${n} planes ${'✈️'.repeat(n)} in line`)
}}

planesInLine(5)
planesInLine(11)






// challenge


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25, + _Arrival;bru0943384722;fao93766109;11:45 + _Delayed_Arrival;hel7439299980;fao93766109;12:05 + _Departure;fao93766109;lis2323639855;12:30';

//console.log(flights.split('+'));

for(const flight of flights.split('+')){
  const [type, from, to, time] = flights.split(';') // destructuting 

  const output = `${type.startsWith('_Delayed') ?
   'STOPPED' : '' } ${type.replaceAll(
    '_', 
    ' ')}


     ${from} ${to} (${time.replace(':', 'h')})` // create our output 

  console.log(output)
}

