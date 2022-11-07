'use strict';

// Demo dom manipulation selecting elements 
/* console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent = 'Correct number!!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;


document.querySelector('.guess').value = 23; */

👉
//Handeling the click of a button starting the APP -->

// define the secret number outside here
// declare variables/ funcitons to call it later below in your code
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// declaring a function here to be used later in our code
// refactoring our code using a funciton and invoke/call it in our code
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;

}


document.querySelector('.check').addEventListener
('click', function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
   
//✅🔀refactored code using the function above ^==========>
    if (!guess){// if there is no guess or 0  // whe ther is no input
    /* document.querySelector('.message').textContent = 
    'No number!!!!' */
    displayMessage('No number!!')

    } else if (guess === secretNumber){ // if there is correct guessc// when the player wins
        /* document.querySelector('.message').textContent = 'Correct Number!'; */
        displayMessage('Correct Number')
        document.querySelector('.number').textContent = secretNumber; // if num correct show secrect num 

        // changing body and width of number  // styles 
        document.querySelector('body').style.backgroundColor = 'blue';
        document.querySelector('.number').style.width = '30rem';

        // high score part
        if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
          
        }

        // too high part
        //when guess is wrong high or low raforing code// reducing code here using ternary condition ?  :  
        
    } else if (guess !== secretNumber){
        if(score > 1){
        /* document.querySelector('.message').textContent = 
        guess > secretNumber ? 'Too High!!!' : 'Too Low!!!'; */
        displayMessage(guess > secretNumber ? 'Too High!!!' : 'Too Low!!!');
        score-- // <-- score = score - 1 
        document.querySelector('.score').textContent = score;


        }else {
        /* document.querySelector('.message').textContent = 
        'You lost the game!' */
        displayMessage('You lost the game!!!')
        document.querySelector('.score').textContent = 0;
        }

        

        //===============refactored code // reduced from below DRY=========//

        // too low part
    } /* else if(guess < secretNumber){

        if(score > 1){
            document.querySelector('.message').textContent = 
        'Too loooow!!!'
        score-- // <-- score = score - 1 
        document.querySelector('.score').textContent = score;


        }else {
        document.querySelector('.message').textContent = 
        'You lost the game!'
        document.querySelector('.score').textContent = 0;


        }
        
    } */
})




// reset button

document.querySelector('.again').addEventListener
('click', function(){ // anunymouse function  dont have a value
    score =  20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    /* document.querySelector('.message').textContent = 
    'Start guessing...'; */
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = 
    score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';


})
