'use strict';
///OOP
////////////////////////////////////////
//constructor function and New operator
//just note that function constructor are not a feature of js lang , they are a pattern that has been developed by other devs

//we can use constructor functions to build an object using a function 
// nomal funciton difference is with New keyword

const Person = function(firstName, birthYear) {     //person object // arrow func will not work as func constructor because it doesnt have it's this keyword
console.log(this) //reffers logs person function object
// these are intance properties
this.firstName = firstName;
this.birthYear = birthYear;


// how about methods with constructor functions??
// this example will work you should never create a method inside a constructor function 
// because if we are interested in creating 100 or 10000 of person objects using this construstor functions 
// it would carry around this , it would be a 10000 copies of this method 
// to solve this we use prototypes 
// dont do this
this.cars = function(){
    console.log(1994 - birthYear)
}



    
}

const fara = new Person('fara', 1991) // new operator do a lot more
console.log(fara)
////////////////////recap 
// we are calling this this constructor func with new keyword or the new operator 
// therefore a new empty object is created right away then the func is called this.keyword points to Person type object






///////////////////////behind the scene happening//

//1. New {} object is created
//2. function is called, this = {object} this is reffering to object
//3. this ob {} linked to prototype
//4. function automatically returns empty object {}



// now we can use this constructor functions to create as many differrent objects as we want 
const sarah = new Person('Sarah Connor', 1994)
const juli = new Person('Juli', 1970)
console.log(sarah, juli)
// an object created from a class is called an instance js dont have classes 
// constructor func used to copy classes 
console.log(fara instanceof Person)  //true  show instance of object 

// if object not included in the object parameter 
const notThere = 'not in our constructor function object'
console.log(notThere instanceof Person) // false







////////////////////////////////////////////
//prototypes 
//using this will have access to all the properties of the constructor function 
console.log(Person.prototype)
Person.prototype.calcAge = function(){
    console.log(1998 - this.birthYear)
}



juli.calcAge(); // taking values from our prototype (copy) varialbes 
sarah.calcAge(); 
fara.calcAge();

// the prototype of fara object can use 
console.log(fara.__proto__)
console.log(fara.__proto__ === Person.prototype) // fara is a copy a prototype of Person constructo function

console.log(Person.prototype.isPrototypeOf(fara)) //



/////////////////////////////////////
//prototypal inheretence built in object

console.log(fara.__proto__)

// object.prototype is (top of prototype chain here)
console.log(fara.__proto__.__proto__)
console.log(fara.__proto__.__proto__.__proto__) // is null because it's the constructor function itself not a prototype of any object 

console.dir(Person.prototype.constructor);

const arr = [4,5,8,90,44,92,111]; // new array === []
console.log;(arr.__proto__);
console.log(arr.__proto__ === Array.prototype)


Array.prototype.uniqueElements = function(){
   return  [...new Set(this)];
}

console.log(arr.uniqueElements())


// built in objects in the console
const h1 = document.querySelector('h1');
console.dir(); 




/////////////////////////////////////////
///challenge

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;

}

const bmw = new Car('BMW', 120);
const mercedez = new Car('Mercedez', 95);


//now we can add our method outside the constructor function
// protypal

//add speed
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} Km/h`)
}

//reduce speed 
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} Km/h`)
}



bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedez.accelerate()
mercedez.brake();








/////////////////////////////////////////
//ES6 Classes 
//which does the same thing but using modern syntax 
//Syntatic sugar

//this is class expression 
const PersonalC = class {

}




//this is class declaration
class PersonCl{
constructor(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;


}

//here we can try adding methods within the class braces {}
calcAge(){
    console.log(2080 - this.birthYear)
}

set firstName(name){
    if(name.includes(' ')) this.fullName = name;
    else alert(`${name} is not a full name`)
}


}



//function call
//new instance of the class object 
const jessica = new PersonCl('Jessica Davis', 1993)
console.log(jessica)
jessica.calcAge();

//proof of prototype
console.log(jessica.__proto__ === PersonCl.prototype)



// we can add a property to our class function object
PersonCl.prototype.greet = function(){
    console.log(`hey ${this.firstName}`)
}



// call function
jessica.greet();






///////////////////////////////////////////
// getter and setter 
const account = {
    owner: 'fara',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov)

    }
}


console.log(account.latest)


account.latest = 50;
console.log(account.movements)






///////////////classess skipped ===================================>>


/////////////////////////////////////////
//encapsulation data privacy 
// keep properties private 
// they are not accessible from outside of class or funciton
// then the rest of the methods exposed as a public interface which are called APIs
// but js classes do not support real data encapsulation 


























/// this is class starts with capital letter 


class Account  {
    constructor(owner, currency, pin){ // giving the empty array as parameter here []
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        //this.movements = movements; 
        //  its better to add it here by giving a paramter to our constructor function however...
        //  it dont makes sense to pass the empty [] movements array into all the new accounts 
        //  we can do this

        // now we use under score _ to protect this  fake convention 
        this._movements = [];
        this.locale = navigator.language;

        // we can even execute any code here in this construtor function 
        console.log(`thanks for opening an accouunt, ${owner}`)


        /// we can add the movements dollors array and also the locale 
        // 
        

    }


    // lets now create a method for money interactivity
    // this is the public interface of our object  called APi

    // conventional data protection with _ ??????????????????/
    getMovements(){
        return this._movements;
    }


    deposit(val){
        this._movements.push(val);

    } 

    withdraw(val){
        this.deposit(-val)
    }



    // conventional data privacy protection with _ ???????????????
    _approveLoan(val){
        return true;
    }

    reaquestLoan(val){
        if(this._approveLoan(val)){ //
            this.deposit(val);
            console.log(`loan approved`)
        }
    }





}

const acct1 = new Account('fara', 'EUR',1111);
console.log(acct1);


// now calling on the new methods we added for interactivity of the money
acct1.deposit(250); // this the value we give to val parameter (val)
acct1.withdraw(140);// this the value we give to val parameter (val)


/// we should not be able to access this data from the public api interface  it must be secure (encapsulated)
acct1.reaquestLoan(1000);
acct1._approveLoan(200); /// we should not be able to access this kind of method from outside of account function class

acct1.getMovements();
console.log(acct1.getMovements())


// not a good idea to do this
// instead of doing this it's better to create methods to interact with addding or removing money form account
//acct1.movements.push(250);
//acct1.movements.push(-140);



// now for the pin, of course we can access the pin from outside of the accout (class function)
// it should not be accesseble the same it goes for methods 
console.log(acct1.pin)


// next we will encapsulate this data above



//////////////////////////////////////////////////////////////
///////////////////////////DATA PRIVACY/////////////////////////////
// Ecapsulation 
// securing methods and properties 
// 1.prevent code from outside of a class getting manipulated 
/// the rest of the methode can be accessed from outside in public API interface
// js classes do not yet support real data privacy  but there a proposal to add truely private class fields and methods to langueag but not ready yet
/// protect fields with _ form unwanted access ????















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//real privacy 
///////////////////////////////////////////////Truely private methods classes --> class fields?////////////////////////////////////////////////

// 4 class fields and methods

// 1. public fields
// 2. private fields
// 3. public methods
// 4. private methods 



class Account2  {
 /// lets add as public fields 
 locale = navigator.language;
 

 /// private fields  >> will be available on their instances not on the prototypes 
 //  not accesseble from outside of our class
 //  the fields have to be outside of any methods
 #movements = [];
 #pin;  // just set it to empty var







    constructor(owner, currency, pin){ 
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin; // we can then set the #pin here and redefine it #pin   //<---- to make pin private ? just like the movements we can convert it to truely private method but... since our pin method is in constructor funciton as parameter, we cant define a field in constructor

        

        //this.#movements = [];
        //this.locale = navigator.language;

        console.log(`thanks for opening an accouunt, ${owner}`)

        

    }



    getMovements(){
        return this.#movements;
    }


    deposit(val){
        this.#movements.push(val);

        return this; // this is the current object

    } 

    withdraw(val){
        this.deposit(-val)

        return this;
    }




  

    reaquestLoan(val){
        if(this.#approveLoan(val)){ //
            this.deposit(val);
            console.log(`loan approved`)

            return this;
        }
    }


    // static private    // not really important
    static helper(){
        console.log('Helper')
    }
    


    // private methods
    #approveLoan(val){   // to make the method private just add #  but most browsers dont know this # support this
        return true;
    }
    





}
// here giving the values to our params in constructor function 
const acct2 = new Account2('fara', 'EUR',1111);

console.log(acct2, 'this is movements with # privated');  // you can access all account2 array 


acct2.deposit(250); 
acct2.withdraw(140);


acct2.reaquestLoan(1000);
//acct2.#approveLoan(200);  // calling it here will error private field 

acct2.getMovements();
console.log(acct2.getMovements())


//console.log(acc2.#movements) // erros and wont be able to access it 


// for pin
///console.log(acc2.#pin) // errors private field 



//static not really important

Account2.helper();




/// Chaning methods
// just like filter map and reduce  we can chain methodes  
// this chaining won't work becuase --> we have to return object on each methods we used here to chain 
acct2.deposit(300).deposit(500).withdraw(35).reaquestLoan(25000).withdraw(4000)
// wont show because we stored the movements in # private mode
console.log(acct2.getMovements)













/////////////////////////////

/////////////////////////////
//////////////////////////
/////make this an app/////
///with UI interactivity 
// car going, braking, rechargin///
// character showing outside peeing////



////////////////////////////////////////////////////////////////////challenge/////////////////////////
///Our electric car 🚗🏎️🚘 

class CarClass {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;

    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);

        // to return  this for chaining 
        return this;
    }

    get speedUS(){
        return this.speed / 1.6; 
    }

    set speedUS(speed)  {// have to set at least one param for settter 
        this.speed = speed * 1.6;
    }

}

/// this is child class
class EVClass extends CarClass{
    ///we still need to define all the fields out side of any methods
    // private field for charge
    #charge;  //or _charge


    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;

        // to return  this for chaining 
        return this;
    }

    accelerate(){
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} is going at ⏩ ${this.speed} km/h, with a 🔋CHARGE of ${this.#charge}`
        )

        return this;   // to return  this for chaining 

    }
}




const rivian = new EVClass ('Rivian🚗',  120, 23)
console.log(rivian)

// if we try to access from outside or console log 
//console.log(rivian.#charge) // it is encapsulated protected 

//now chaining after putting return there
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(55).accelerate();


// also interesting to see here
// child class also inheret the getter and setter from the parent classs
console.log(rivian.speedUS)