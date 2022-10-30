'use strict';

// Selecting elements 
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold= document.querySelector('.btn--hold')







// declaring valiables here without giving any valuse 
// if varibles are used in funciton scopes or block scopes they can't be recalled in the code base 

let scores, currentScore, activePlayer, playing;
// initiates resets the game 
const init = function() {
    scores = [0, 0] // big scores continouse scoring
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    btnRoll.classList.remove('btn--roll')  // my change adding or removing the roll dice button
    
    

};

init();


// resuable function for switch player or next player down below
const switchPlayer = function(){
        document.getElementById(`current--${activePlayer}`).textContent = 0;

        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
}





//Rolling dice function -->
if (playing){
    btnRoll.classList.remove('btn--roll')
} 
btnRoll.addEventListener('click', function(){

    // 1. generating a random dice roll number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);





    //2. Diplay dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`;




    //3. check for rolled 1: if tru, switch to next player
    if(dice !== 1){
        //addd dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        // it would be --> current0El.textContent = currentScore;//  as well


        
    } else{
        //switch to next player
        
        switchPlayer();  // function above
        
        
    }
})

//....hold scores
    btnHold.addEventListener('click', function(){

        if (playing){
            
            console.log('hole buttoton')
    // 1. add current score to active player's score
    scores[activePlayer] += currentScore;

    //-> scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];




    //2. check if player's score is >= 100
    if(scores[activePlayer] >= 100){
        //finish the game
        playing = false;
        diceEl.classList.add('hidden')// hides the dice 
        btnRoll.classList.add('btn--roll') // --> my change if active player is reaching the winning score make the roll dice button go away

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    } else {

        switchPlayer();
    }


    }
    
})
btnNew.addEventListener('click', init)    // resets the game
