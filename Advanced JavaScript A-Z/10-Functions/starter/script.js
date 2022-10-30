'use strict';

const bookings = [];

const createBooking = function (
    flightNum,
    numPassenger = 1, // setting 1 as default values in ES21
    price = 125 * numPassenger, //setting price as default values in ES21
    tax = 0.08 * price, // i added this 

    ){

    // ES 5 old way setting default parameters
    //numPassenger = numPassenger || 1;
   // price = price || 125;

   


    const booking = {
        flightNum, 
        numPassenger,
        price,
        tax,
    }

    console.log(booking);
    bookings.push(booking)
}



createBooking('LO999')
createBooking('LOOP88', 2)
createBooking('NEW', 3)

createBooking('NEWwithtax', 4)














//passing arguments
//values vs referrece

const flight = 'DXB77';// the flight

const fara = { // the passenger
    name: 'fara', 
    passportNum: 998899
}

const checkIn = function(flightNum, passenger){ // the check in
    flightNum = 'DXB99';
    passenger.name = 'Mr. ' + passenger.name; // not good practice to change function parameters


    if(passenger.passportNum === 998899 ) {
       // alert('Checked in')

    }else {
       // alert('Wrong Pass')
    }

}


checkIn(flight, fara) //calling function
console.log(flight)
console.log(fara)



// another function
 
const newPass = function(person){
    person.passportNum = Math.trunc (Math.random() * 100000000000);

}


newPass(fara)
checkIn(flight, fara)











//higher order functions 
// functions accepting other functions as an input  (callBACK)

//1. function 
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();

  
};
//2. function
const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');

};



 //3. higher order function  it takes in a function
 const transformer = function(str, fn){
        
    console.log(`Original string: --> ${str}`)
    console.log(`Transformed String:--> ${fn(str)}`)

    console.log(`Transformed by : --> ${fn.name}`)
};

// transformer function calls other functoin passing function value upperFirstWord here
// the transformer function is calling the callback functions 
transformer('javascript is the best!!', upperFirstWord) // upperFirstWord is call function
transformer('javascript is the best!!', oneWord)// calling the transformer fnction here and into that function we are passing the callback function of oneWord




// let's say 
const high5 = function(){
    console.log('Hiiii')
}

// high5 is the call back functions // addevent is higher order function
document.body.addEventListener('click', high5) // listening to body events


//









//functions returning other functions
console.log('---------------------------functions returns functions---------------------------')

const greet = function(greeting){
    return function (name) {
        console.log(`${greeting} ${name}`);

    };
};

const greeter = greet('Hey!');
greeter('Sarah');
greeter('Pooja');



// arrow function 
const greetArr = greeting => name =>
console.log(`${greeting} ${name}`);

greetArr('hiiiiii')('fara')






// the call and apply method

const dubaiAirLine = {
    airline: 'DubaiAir',
    airCode: 'DXB',
    bookings: [],

    //book: function(){} the function method syntax
    book(flightNum, name){// this is like function but object literal syntax
        console.log(`${name} booked a seat on ${this.airline}
        flight ${this.airCode}${flightNum}`
        );
        //booking method
        this.bookings.push({flight: `${this.airCode}
        ${flightNum}, name`})
    },
};

dubaiAirLine.book(99, 'fara jami');
dubaiAirLine.book(555, 'passenger00');
console.log(dubaiAirLine)




const newAirLine = {
    name: 'abu999',
    airCode: 'NewDXB',
    bookings: [],
}


// book function recall  create booking using manualy with call to use this in both airlines
const book = dubaiAirLine.book;
// this wont work
//book(55, 'passenger');
book.call(newAirLine, 44, 'passenger new line');
console.log(newAirLine)

book.call(dubaiAirLine, 999, 'sex and the city')
console.log(dubaiAirLine)









// function expresssion immidiatlly invoked called
// only execute it once
const runOnce = function(){
    console.log('only runs once')

}






//clocures
(function (){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener
    ('click', function(){
        header.style.color = 'blue';
    });
});