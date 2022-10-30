'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//loop thru the bottons
//add event handler to each bottons
for (let i = 0; i < btnsOpenModal.length; i++)
console.log(btnsOpenModal[i].addEventListener
    ('click', function(){
        console.log('button clicked!!')
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }))



// buttons close action

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


// DRY code  refactored within a function expression here and caled back
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);



// how to handle key press envents  Esc shift letters ...  x 
document.addEventListener('keydown', function(e){
    console.log(e.key);

    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})


// !modal means if does not contain/ include

// to reduce code works the same way as up function
/* if (e.key === 'Escape' && !modal.classList.contains
('hidden')){
    closeModal();
}
 */



