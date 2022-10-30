'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  e.preventDefault()
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


//model pop up with forEech loop 
btnsOpenModal.forEach(btn => btn.addEventListener
  ('click', openModal))


/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); */

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//////////////////////////Page navigation settings///////////////////////////
/// working on our app
//// event delegation 

//code example 1
/* document.querySelectorAll('.nav__link')// this will return a nodeList we use use forEach method in order to attach an event handler to each of the elements
.forEach(function (el){
  el.addEventListener('click', function(e){
    e.preventDefault();
    
    //lets get the href link to the section
    const id = this.getAttribute('href')
    console.log(id)
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  });
}); */



// code example 2
// ----> event delegation 
/////////second way of coding the event cupturing for navigation////////////
// we can use event delegation to reduce the code repeated 

//, 1 add event listener to common parent elements
//, 2 determine what element started the event 

document.querySelector('.nav__links').addEventListener
('click', function(e){ // e here is for event that's taking place like click
  e.preventDefault();
  console.log(e.target)  

  //matching the elements we want the click event on 
  if(e.target.classList.contains('nav__link')) { // <-----if event target contains this class name 

    const id = e.target.getAttribute('href') // <--- do this
    console.log(id)
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    console.log('contains link')
  }

  });


    
  



/////////////////////////button see more scroll to///////////////////////////////////
//////////////
////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///lets get the coordinates of the window page
btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords)
  console.log(e.target.getBoundingClientRect())


  /// we see the height and width of the viewport 
  /* console.log('height/width viewport',
  document.documentElement.clientHeight,
  document.documentElement.clientWidth);
 */
  // scrolling old way 
  //window.scrollTo(s1coords.left, s1coords.top); // with this scroll is not working if viewport is moved up or down glitchy





// new way modern way
// take the element that we want to scroll to 
section1.scrollIntoView({behavior: 'smooth'});

})







//194
///////////////////////////////////////////////////////building a tabbed component///////////////////////////////////////////////
// selecting classes from DOM here and storing in variables to call later 
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');



//adding event handlers to tab's buttons
//but this method of accessing a class to do event handeling is bad because if we had 200 buttons we needed to repeat the code call bk funciton 200 times 
// bad-->     tabs.forEach(t=>t.addEventListener('click', () => 
//            console.log('tabssssssssssssss')))

// --------------------->
// instead of above method we use event delegation to create resuable code for our tab event handling function 
// event delegation

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab'); // closest finds the parent closest element to element we are calling for 
  console.log(clicked)

  //new way if statement
  //ignoring any clicks on the outer area of our buttons tabs
  if(!clicked) return;  // <---- if when there is nothing clicked then stop the function....  then if clicked return this function -->


  //////////////active tab settings//////////////////
  /////////// remove active tabs and contents/////////////

  //1. removing the active classes of tabs and contents / style for each of the tabs first and then....
  tabs.forEach(tab => tab.classList.remove
  //2. adding the class or style to each tab after // adding it to each after  
  ('operations__tab--active'))
  //1. removing the contents before hand and adding it whrn tabs are clicked contents show
  tabsContent.forEach(content => content.classList.remove
  //2. adding the class or style to each content after // showing contents
  ('operations__content--active'))

  // when clicked classList.add adds the class name of the element makes is active 
  clicked.classList.add('operations__tab--active') // shows active tab captures active tab class style from css

// end code //


  // old way traditional way 
  if (clicked){
    clicked.classList.add('operations__tab--active') // shows active tab captures active tab class style from css

  }
 //////////////////  content area   ///////////////////////////
////////////   activate content areas 1 2 3 //////////////////////////////
document.querySelector(`.operations__content--${clicked.dataset.tab}`)// we want to use template string here because we dont want to hard code the nubmer 2 here but instead we want to get that from the data attribute 
.classList.add('operations__content--active') 
})







/////////////////// /                      ///////////////////////////
//.////////////////////// navigation animation /////////////////////////


///passing argumanets to event handlers
//opacity to 0.5 to make it blur
//1 creating a function to activate both 0.5 and 1 opacity less code used

const nav = document.querySelector('.nav');

const handlerHover =  function(e, opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    //change opacity 
    siblings.forEach(el => {
      if(el !== link) el.style.opacity = opacity;

    });

    logo.style.opacity = opacity;
  };

};




// passing an argument into handler

// or we can do this to use less code remove call back functions
// using bind method creates a copy of the function it calls
nav.addEventListener('mouseover', handlerHover.bind(0.5));
nav.addEventListener('mouseover', handlerHover.bind(1));




// use this method with call back functions but more code
nav.addEventListener('mouseover', function(e) {
  handlerHover(e, 0.5)

});

nav.addEventListener('mouseout', function(e){
  handlerHover(e, 1)


});




//2
// we don't need this code 
// this is too much code and need refoctoring 
// opacity back to 1 normal look
nav.addEventListener('mouseout', function(e){

  if(e.target.classList.contains('nav__link')){
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    //change opacity 
    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 1;

    });

    logo.style.opacity = 1;
  };


});





///////////////////////////////////////////////////////////////////////////////////////////////////////
/////1 navigation sticky effect////////////////////////

/// using the scroll event for certain action is not a good way to go, 
/// because scroll event fires all the time no matter where on page you go

// the code
/* const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords)

window.addEventListener('scroll', function(){
  console.log(this.window.scrollY)

  if(window.scrollY > initialCoords.top) 
  nav.classList.add('sticky')
  else nav.classList.remove('sticky')
})
 */





//-------------------------------------> practice e.g.

////////////////////using the new intersection observer API//////////////////////
////////////////////  
/////2 navigation sticky effect ////////////////////////
/// to use this we need to create a new intersection observer for scroll 

// the observer call back this will be call back
// this call back function will get called each time
// that the observed element or target el here is intersectiong the root element

// the code
/* const obsCallback = function(entries, observer) {

  entries.forEach(entry => {
    console.log(entry)
  })
}
// the observer options this will be an object
const observerOptions = {
  root: null,  // <--- this is the root the viewport of page 
  threshold: [0, 0.2] // before 0.1=10%  we can use array to put multiple thresholds<--- this is precentage we give at which it happens at this threshold to intersect the viewport root the function on top will get called no mattter if we are scrolling up or down
}

// intersection observer function takes 2 parameters or args 
const observer = new IntersectionObserver(obsCallback, observerOptions);
observer.observe(section1); */





//-------------------------------------->> app code

/// / modern intersetion tracking and setting for scroll moves /////////////////////
//// the better way of using sticky on scroll ///////////////////////
///////////// working on the app sticky nav ////////////////////////////////////////////////////////////////
const header2 = document.querySelector('.header') // query select the element from the DOM --> header 

//creating this variable to store bounding coordinates makes it automated 
//good for if using responsive design on mobile devices
const navHeight = nav.getBoundingClientRect().height
console.log(navHeight)

//now lets define a function to add and to remove the sticky class
const stickyNav = function(entries){
  const [entry] =  entries;
  //console.log(entry)

  // if target or entry not intersecting the root
  if(!entry.isIntersecting) nav.classList.add('sticky')
  else // if yes, remove it 
  nav.classList.remove('sticky')
};


//create our observer function
const headerObs = new IntersectionObserver(
  stickyNav, { // <---stickyNav is our callback function param
    root: null, //viewport is null because we are interested in the entire viewport to begin <-- options object
    threshold: 0,  // precentage % at 0  showing sticky nav as soon as the beginning of the page goes out of view
    rootMargin: `-${navHeight}px` //<-- this is template can be used anywhere.  rootMargin: -90px <-- this is hard coded // root margin helps get the height of element like navigation height is 90px we can set it to -90 to show nav exactly on section start lines even 

  });

headerObs.observe(header2);










///------------>>intersecting elements and revealing contents
//////////////////////////////////Scroll reveal mechanism ///////////////////
////////scroll ///////////reveal/////////////////////////////////////////////////////////////

const allSectionsScroll = document.querySelectorAll('.section');


const revealSection = function(entries, observer){
  
  const [entry] = entries;

  if(!entry.isIntersecting) return;
  entry.target .classList.remove('section--hidden');
  // to unobserve a target or entry point of our scroll we do not need anymore
  observer.unobserve(entry.target); // helps prevent logging ovbserves from page when scrolling up and down

}
const sectionObs = new IntersectionObserver(revealSection, 
  {
    root: null,
    threshold: 0.15
   })
  allSectionsScroll.forEach(function (section){
    sectionObs.observe(section);
    //section.classList.add('section--hidden')
  })
































/////////////////////////////////////////////////////
///Lectures///
////////////////////////////////////////////////////
//special way of selectiong the entire document of the webpage
// as below
// if want to set styles or event listeners we always select document and then the element 
// if selecgting the entire page  select documentElement
console.log(document.documentElement)
// selectiong the head and body
console.log(document.head)
console.log(document.body)
// for these special elements we don't meed to write selectors  like # . 


//////////////////Selectiong elements////////////////////////

// we can use querySelector for pointing to elements with selector
const header = document.querySelector('.header')  //<-----// if you dont declare variable here and give it a name it will error reference error 
// or
// we can use querySelectorAll for selecting multiple of the same elements like btn selects all buttons
const allSections = document.querySelectorAll('.section') // selects all section class
console.log(allSections)// shows a NoleList of all sections 



// selectiong with id # without the hash selector
document.getElementById('section---1')
// selecting elements by tag names like div, buttons, a anchors and more
const allbtns = document.getElementsByTagName('button')
console.log(allbtns) // returns an html collection differ from a node list html collection is a live collection if the DOM changes the list will update automatically for e.g. if remove the button and inspect you will see only 8 elements left in colleciton

//finally
document.getElementsByClassName('btn')// btn is a class



//next 
////////////// creating and inserting elements////////////////////////

//1. creating or taking the elements from or within the DOM
const message = document.createElement('div'); // this creates a DOM element and stores that element in the message variable 
message.classList.add('cookie-message');
//message.textContent = 'We use cookies, do you agree?';
message.innerHTML = 'We use cookies, do you agree?, <button class="btn btn--close-cookie">Yes</button>'

//inserting or append emelement into the DOM
//prepending adds element as the first child of the header section
//header.prepend(message); 

// error------->>>>using cloneNode will not let you add styles later in choosing an attribute or class
// header.append(message.cloneNode(true)); // this will clone or copy the element to be in 2 places 

// append adds the elements to the end of header section as last child
header.append(message) //-----< use original one if wanto style att later
/// before and after 
// header.before(message)  add to to the top = first child 
// header.after(message) add to the bottom = last child


///Deleting elements 
document
.querySelector('.btn--close-cookie')
.addEventListener
('click', function(){
  document.querySelector('.cookie-message').remove();
});






/////////////////////// Styles,  Attributes and Classess////////////////////////////////////

//1. Styles
// since we already have a message variable we can simply call the message variable to set styles here and not document.querySelector
// no need if we store the code in a variable -----> document.querySelector('.cookie-message').style.backgroundColor = '#37383d';
message.style.backgroundColor = 'blue';
message.style.width = '120%';
console.log(message.style.width) //logs backgroundColor 
console.log(message.style.backgroundColor);  //these are inline styling

//////////////////// get computed style

console.log(getComputedStyle(message))
console.log(getComputedStyle(message).color)



///////////////////////accessing or setting  css variables and properties or styles 
//document.documentElement.style.setProperty
//('--color-primary', 'gold')


///attributs 
const logo = document.querySelector('.nav__logo');
console.log(logo.src)
console.log(logo.alt)


// just as we can ready these values or attributes we can also set them 
logo.alt = 'this is a new logo'

//not a standard attribute cant find it 
console.log(logo.designer);

// it can be found or read this way 
console.log(logo.getAttribute('designer'))

// set attribute 
logo.setAttribute('company', 'NoBank')

// data attributes  are special type of attributes
// data attr
console.log(logo.dataset.versionNumber)

// classess
logo.classList.add('class', 'class2');
logo.classList.remove('class');
logo.classList.toggle('class');
logo.classList.contains('class'); // not includes



//dont use this
logo.className = 'fara'





///////////////////////////189 . type of events and events handlers///////////////////////////////////
// and event is a signal that is generated by signal dom node mouse moving , clicking anyting 

// if we drag the mouse pointer on an elements on page
// it triggers the event like move on h1 it triggers 

//new modern way of using this
/* const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function(e){
alert('addEventListener: Great! you are seeing the heading')

})
 */


// code for h1 element event lestiner

/* const h1 = document.querySelector('h1');

const h1Function = function(e){
  alert('addEventListener: Great! you are seeing the heading')

//---->will callback the function and remove h1 after the first event is done
 // h1.removeEventListener('mouseenter', h1Function)
  
  }


  h1.addEventListener('mouseenter', h1Function)

  // removing it after 3 seconds passed
  setTimeout(() => h1.removeEventListener('mouseenter', h1Function), 3000) */




//old way of using this 
// another way of attaching an evet listener to a property 
/* h1.onmouseenter = function(e){
  alert('addEventListener: Great! you are seeing the heading again')
  }
 */







  ///////////////////////////bubbeling and cupturing events////////////////////////

  ///bubeling 

  //e.g. of random color rgb(255, 255, 255)


  //code
 /*  const randomIntColor = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)+ min);

  const randomColor = () =>
  `rgb(${randomIntColor(0, 255)}, ${randomIntColor(0, 255)}, ${randomIntColor(0, 255)})`;
  console.log(randomColor(0, 255))

  // let's attach event handlers now to the nav child and parent 
  document.querySelector('.nav__link').addEventListener
  ('click', function(e){
    this.style.backgroundColor = randomColor(); // this here finds the class we attached to event handlers .nav__link
    console.log('link to show target of intitiation or happening', e.target)

    // we can stop propagation the event
    e.stopPropagation();  // event stops at this element
  });

  
  document.querySelector('.nav__links').addEventListener
  ('click', function(e){
    this.style.backgroundColor = randomColor(); // do it on parent emelent of nav
    console.log('Parent containr: link to show target of intitiation or happening', e.target)

  });


  document.querySelector('.nav').addEventListener
  ('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log('Next parent: main navbar with logo: link to show target of intitiation or happening', e.target)


  })
 */



  ///--------------> cupture phase --> cupturing events
 // it's not just useful  }, true) by default it's set to false it's not used these days






//////////////////////////////------------------Dom Traversing-----------------------//////////////////////////////////
//////// dom traversing is walking thru the dom means we selecet an element based on another element
//// a direct child or direct parent element

/*  the code


const h1 = document.querySelector('h1');
// going downwards : child
console.log(h1.querySelectorAll('.highlight')) // hightlight selector is direct children of the h1
// we can also call the childs by childNodes
console.log(h1.children)//or childNodes // .children of h1

// jonas ways of doing it --> h1.firstElementChild.style.color = 'red'
// my way of doing it accessing element position with bracket notaion index selector
h1.children[0].style.color = 'red' // selects first element 
h1.children[2].style.color = 'orange' // selects last child



// Going upwards to find parent 

// closest find the parent closet to child
// logging this we will see direct parent as node
console.log(h1.parentNode)

h1.closest('h1').style.background = 'var(--gradient-secondary)'


// going sideways:sibligns finder 
console.log(h1.nextElementSibling)
console.log(h1.nextSibling)

// if el-->arg element is not equal to h1 then everything else scales to smaller size 
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el){
  if (el !== h1) el.style.transform = 'scale(0.8)';
})



*/









//199
////////////////// lazy loading images ////////////////////////////////////////////////////////////

const imgTargets = document.querySelectorAll('img[data-src]'); /// when we have multiple elements we can use general tag name like img and use other class to referrence to the element we want  to work with

const loadimg = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  //replace src with data-src images 
  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img')

  })
}

// create our img obsrever
const imgObserver = new IntersectionObserver(loadimg, {
  root: null,
  threshold: 0,
  rootMargin: '200px' // this is to reveal our img element sooner than the user reach

})

//loop over each img and observe each image
imgTargets.forEach(img => imgObserver.observe(img));







//200
//////////////////////////////////////// Slider component PART 1 //////////////////////////////////////////////
/////////


// after all code is wrtten now we can put this all into a function to avoid global var plude unsafe
const slider = function(){


//sliderrr
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
// query selector function for dots 
const dotContainer = document.querySelector('.dots')
// let's create a new var for the current slide
let currentSlide = 0;
const maxSlide = slides.length; // calculates our slides length to max we can go
console.log(maxSlide)

//fake styles
/* const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-600px)'
slider.style.overflow = 'visible'; */




// create dots -------------- slider//////////////////////////////////////////////////////////////////////////////////////////////
//functions
const createDots = function(){
  slides.forEach(function(_, i){
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
  })
}


/////activate dots function 
const activateDot = function(slide){
  document.querySelectorAll('.dots__dot')
  .forEach(dot => dot.classList
  .remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`)
  .classList.add('dots__dot--active')
};


const goToslide = function(slide){
  
  slides.forEach((slides, index) => (slides.style.transform =
    `translateX(${100 * (index - slide)}%)`)) //current index = current slide

}



//go to next slide
const nextSlide = function(){
  if(currentSlide === maxSlide - 1){ //<-- minus one makes it zero based  //if current slides finish and reach to max numbers end then go to currrent slide one
    currentSlide = 0;
  } else {

    currentSlide++ // when we go to next slide we increase it by 1

  }
  goToslide(currentSlide)
  activateDot(currentSlide)

}

// go back to first slide 
const prevSlide = function(){
  if(currentSlide === 0){
    currentSlide = maxSlide - 1
  } else {
    currentSlide--

  }


  goToslide(currentSlide)
  activateDot(currentSlide)
}




// putting all intializaions and functions into one function will keep our code safe from global variables outside attack to our code 
// and help refactor the code as well
const init = function(){
  createDots()
  activateDot(0) // to select a default dot to be active on page reload 
  goToslide(0)


}

init()




//event handlers
btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)

//201
//////////////////////////////////////// Slider component PART 2 //////////////////////////////////////////////
///////// keyboard events


document.addEventListener('keydown', function(e){
  console.log(e)
  if(e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide()
})


dotContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')){
    console.log('DOT is here!')
    //lets get the slide
    const  {slide} = e.target.dataset;
    goToslide(slide)
    activateDot(slide)
  }
})

} // for the mother function 

// all we need to do is to call that function to activate to init all functions inside
slider();




///////////////////////////////////////////////////////////////////nice tip for browser and window/////////////////////////////////////////////////////////////////

//lifecycle DOM events////
//events that happens at the DOM during the page life cycle enter to exit 
//dom content loaded 

document.addEventListener('DOMContentLoaded', function(e){
  console.log('HTML parsed and DOM tree built!!!!!', e)
})

//we want all our code to be executed after the dom is ready
//we use script tag down at the bottom of the body
// it will parse all the HTML first and then fetch js files


window.addEventListener('load', function(e){
  console.log('PAge is loaded fully', e)
})


// before end load unload 
// used to let user know prompt user if they want to leave the page 
// good to use when user is typing a blog like github notice if document is unsaved

/* window.addEventListener('beforeunload', function(e){
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
}) */





////////////////////////////////////Defer and Async script loading////////////////////////////////////////////////////////////////
//1 regular = <script src="script.js"> never put the script js in the head --->not ideal , not good ====>  as the user opns the page and loads the page the html code will start to parse by the browser then it will find the js script tag to parse javascript and get fetched in
// HTML is found, then html is parsed then the script tag is found at the bottom then the script js is fetched  this is stil not so good 
//2 Async = <script async src="script.js">  script is loaded at the same time as html is parsed so in asyncourous way  but the html parsing still stops execution page load time will be short ---->
//3 defer = <script defer src="script.js">  can be put in body head head section <<--- best to use defer  the html parsing is never interupted and the script is only executed at the end 



