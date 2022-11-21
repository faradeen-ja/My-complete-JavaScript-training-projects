'use strict';

///////////////////////////////////////
//🛑 old way using ajax getting http req res

/* const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//resue code for multiple countries data
//we can make it a function to re use 
//const getCountryData = function(country){the code here}

// in the last code base we got a simple ajax call to fetch data from a country api 
// running in paralel means the data that comes from rest api are run randomly first or second 
// however we can make a seq of ajax calls to run in order and show neighbouring country data  


const renderCountry = function(data, className = ''){
    
    const html = `
    
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)}M People</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💵</span>${data.currencies[0].name}</p>
    </div>
  </article>` ;

  countriesContainer.insertAdjacentHTML('beforeend', html)

  countriesContainer.style.opacity = 1;
}



//1
const getCountryAndNeighbour = function(country){

    // AJAX call country one
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`)
request.send(); // we send off the request and then that request fetches the data in the background and one done it will omit the load event  
console.log(request.responseText) // we can convert this json file to object 

//register a calback 
request.addEventListener('load', function(){  // as soon as the data arrives this callback fun will be called 
    const [data] = JSON.parse(this.responseText);  // converts the json file to object  [data] destructuring data
    console.log(data)
    //render country one
    renderCountry(data)


    
//////////////////////////////////////////////////
//neighbour country

// get neighboure country (2)
const [neighbour] = data.borders
if(!neighbour) return;

// copy all ajax data here too to make a second ajax call
// AJAX call country 2
const request2 = new XMLHttpRequest();
request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)  // we can use border of country / alpha call request and neighbour = data.borders https://restcountries.com/v3.1/alpha/{code}
request2.send(); 
console.log(request2.responseText)   // we have have rename request to request2

//register call back function 
request2.addEventListener('load', function(){
    //log 
    //console.log(this.responseText)
    const data2 = JSON.parse(this.responseText);
    console.log(data2)
    //render neighbour
    renderCountry(data2, 'neighbour')
    
    
});

});
};

// we can now call the function to log data
getCountryAndNeighbour('uae')


 */








//////////////////////////////////////////////////////////////////////////////////
// it was this code we got data from rest countries on a single use way 
// we made it a reusable code in the top codes


/* const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/usa')

request.send(); // we send off the request and then that request fetches the data in the background and one done it will omit the load event  
console.log(request.responseText) // we can convert this json file to object 
//register a calback 
request.addEventListener('load', function(){  // as soon as the data arrives this callback fun will be called 

    const [data] = JSON.parse(this.responseText);  // converts the json file to object  [data] destructuring data
    console.log(data)

    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)} Million People</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💵</span>${data.currencies[0].name}</p>
    </div>
  </article>` ;

  countriesContainer.insertAdjacentHTML('beforeend', html)

  countriesContainer.style.opacity = 1;

}) */






















/////////////////////////////////////////
//2️⃣ using FETCH API pormises callbacks 
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

  /// function for error 
  const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg)
    //countriesContainer.style.opacity = 1;    // added to finally method
  }


const renderCountry = function(data, className = ''){
    
    const html = `
    
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)}M People</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💵</span>${data.currencies[0].name}</p>
    </div>
  </article>` ;

  countriesContainer.insertAdjacentHTML('beforeend', html)

  countriesContainer.style.opacity = 1;  // added to finally method
}

✅
// if we try to use callback functions over and over by getting other countries borders in this eg 
// it will make a callback hill hell
// we use pormises to reduce bugs and reduct running many callback funcs
//////////////////////////////////////i
// promises and fetch aPI   replace the old html ajax http with the new fetch api
  // FETCH API calls
  // FETCH returns promises 
  // we no longer need to rely on events and callbacks passed into asynchoronous functions to handle asynchoronous results.

//1
  //const request = fetch('https://restcountries.com/v3.1/name/usa')   // to make a simple GET request 
  //console.log(request)




/* // not in use
  // function helper for our error, fetch and json 
  const getJSON = function(url, errorMsg = 'something went wrong') {
    return fetch(url).then(function(response){
        if(!response.ok)
        throw new Error(`${errorMsg} (${response.status})`);
        return response.json()// to read the data from API point we need this  // return will be a new promise
    
// we could use this helper func to refactor our code below
// we could use getJSON instead of fetch for fetch 
// could this getJSON(`https://rescountries.com/v2/name/${country}`, 'then err msg')
// could delete the .then function(response) and body codes with )}

    })
  }
 */



//2 & 3
  const getCountryData = function(country){
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function(response){ // into the .then() method we pass a callback function 
//4
    //we can create an error manually 
    console.log(response)
    if(!response.ok)
    throw new Error(`Country not found! (${response.status})`);
    return response.json()// to read the data from API point we need this  // return will be a new promise
    
})
    .then(function(data){ //5
        console.log(data)
        renderCountry(data[0])

        //neighbour country if not neighbour  return country on top if neighbour then fetch it from the URL
        const neighbour = data[0].borders[0]
        //const neighbour = 'iroieurpeo' for error
        if(!neighbour)  throw new Error('❌No Neighbour Found!');
        return fetch (`https://restcountries.com/v2/alpha/${neighbour}`) //6 if neighbour then fetch it from the URL
    
        //we can create an error manually 
    }).then(function(response){        //7 convert rest api data into json object >?
        if(!response.ok)
        throw new Error(`Country not found! (${response.status})`);
        return response.json()

    }).then(function(data){ //8 render callback function data is data from rest api border and  neighbour is a css class 
        renderCountry(data, 'neighbour')
        console.log(data)
    }).catch(function(err) {  // catch error 
        //alert(err)
        renderError(`Someting went pooped 💩 ${err.message}. Try again?`);
    })
    .finally(() => { //no matter if the promise is fullfilled or rejected this will be done like ////hide a loading spinner when loading a page 
        countriesContainer.style.opacity = 1;

    });



    
  };// mother function fuker curly
//getCountryData('usa')


//////////////////////////////////////////////////////////////////////

  // errr handeling 
  
//btn.addEventListener('click', function(){
  //  getCountryData('usa')
//})
//getCountryData('ryeyrrett') errrrrrrrrrrrrrrrrr





//❓
////////where am i?///////////////practice 
// ////////////////////////////////
//challenge map api

/* const whereAmI = function(lat, lng) {
    fetch (`https://geocode.xyz/${lat},${lng}?geoit=JSON&auth=854861988979557627153x80320 `) //your_api_key
    .then(res => {
        if(!res.ok) throw new Error(`Problem with API ${res.status}`)
       return res.json()
    })
    .then(data => {
        console.log(data)
        console.log(`you are in ${data.city}, ${data.country} ${data.region}`)
        return fetch (`https://restcountries.com/v2/name/${data.country}`)
    }).then(function(res){        //7 convert rest api data into json object >?
        if(!res.ok)
        throw new Error(`Country not found! (${response.status})`);
        return res.json()

    }).then(function(data){ //8 render callback function data is data from rest api border and  neighbour is a css class 
        renderCountry(data[0])
        console.log(data)
    })
    .catch(err => console.error(`${err.message} ❓`))
}
 */


//whereAmI(52.508,13.381);
//whereAmI(19.037,72.873);
//whereAmI(-33.933, 18.474)








///////////////////////where am i? map ////////////////
////////🗺️🍁🍁🍁🍁//////////////////////////
/// adding geolocation to our APP 
//1.//////////////////////////////////////////////////

/* 
navigator.geolocation.getCurrentPosition( 
position => console.log(position), 
err => console.error(err))

console.log('getting position.....') */


//2.
/* const getPosition = function() {
  return new Promise(function(resolve, reject) {
// pasted code here
      navigator.geolocation.getCurrentPosition( 
      position => resolve(position), 
      err => reject(err))
      
  })
} */





//3. we can even make this simpler
// if the function automatically calls these callback func here 
/// then we can do this instead of above 2


const getPosition = function() {
  return new Promise(function(resolve, reject) {
// pasted code here
      //navigator.geolocation.getCurrentPosition( 
      //position => resolve(position), 
      //err => reject(err))
      navigator.geolocation.getCurrentPosition(resolve, reject)
      
  })
}
// now lets try it out
///getPosition().then(pos => console.log(pos))



//real app
////////////////////////////////////////
//////////////✅✅✅✅✅/////////////
//adding get my position/geoCoords to country app 

/* const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=854861988979557627153x80320`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
 */






















///////////////////////////////////
//consume promises with async and await
////////////////////////////////////////////////////////
/////////////////////////////////////

//🔽
//bring in our geolocation and geocoding 
const getPositionAwaitAsync = function() {
  return new Promise(function(resolve, reject) {
// pasted code here
      //navigator.geolocation.getCurrentPosition( 
      //position => resolve(position), 
      //err => reject(err))
      navigator.geolocation.getCurrentPosition(resolve, reject)
      
  })
}
// now lets try it out
///getPosition().then(pos => console.log(pos))

const whereAmI = async function() { // param was country 
  try{//geo locatoin 
  const pos = await getPositionAwaitAsync ();
  const { latitude: lat, longitude: lng } = pos.coords;

//reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=854861988979557627153x80320`);
    //manually creating error to show on page
    if(!resGeo.ok)throw new Error('📌Location not found! Error happened manually') /// pointing to resGeo var


const dataGeo = await resGeo.json()
console.log(dataGeo)

//country data
  const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`) // if put ${country} you need to manually write to console but you can call data.country to automatically pull location or by click event
      //manually creating error to show on page
  if(!res.ok)throw new Error('🌏Country not found! Error happened manually') /// pointing to resGeo var
// on the response we neeed to call jason to turn data from rest into object readable 
const data = await res.json();
console.log(data)
renderCountry(data[0]) // calling back to render country function on top
}catch(err) {

  // catch block for catching errors 
  console.error(err)
  renderError(`${err.message}💩💩`)

}


}

//whereAmI()


console.log('first')


/////////////////////////////////////
//next on this ERROR HANDELING
///////////////////////////////////////



// try catch blcok{} error

/* 
try{
  let y = 1;
  const x = 2;
  x = 3;
}catch(err){
  alert(err.message)
}

 */








// always use promise.all and promise.race
///////////////////////////////////////
//combinator functions  1
//////////////////////////////////////////
//running promises in parallel

// helper function to make fetch and error handling easy 
const getJSON = function(url, errorMsg = 'something went wrong') {
  return fetch(url).then(function(response){
      if(!response.ok)
      throw new Error(`${errorMsg} (${response.status})`);
      return response.json()// to read the data from API point we need this  // return will be a new promise
  })
}
/////////////
const get3Countries = async function(country1, country2, country3) {
  try{
/*    //then loads this data in sequence mode
   const [data1] = await getJSON(`https://restcountries.com/v2/name/${country1}`)
   const [data2] = await getJSON(`https://restcountries.com/v2/name/${country2}`)
   const [data3] = await getJSON(`https://restcountries.com/v2/name/${country3}`)
 */
  //console.log(data1.capital, data2.capital, data3.capital)

   //let's load data in parallel mode
  const data = await Promise.all([
  getJSON (`https://restcountries.com/v2/name/${country1}`),
  getJSON(`https://restcountries.com/v2/name/${country2}`),
  getJSON(`https://restcountries.com/v2/name/${country3}`)
])
console.log(data.map(d => d[0].capital)) // loop over the data and take out the data we wont = array with capital city
//loads in parallel
///////
///////
///////  same time 

   
  }catch(err) {
    console.error(err)
  }
};

//call back
//get3Countries('usa', 'uae', 'italy')
//loads data in sequence method
/////1
////////2
//////////3

// always run the data in parallel 
/// user friendly 








//asynchoronous 
///////////////////////////////////////
//combinator functions  2
//////////////////////////////////////////
//promise combinators: *RACE, *all, ALLSETTLED, ANY

//promise.race

const racePromise = async function() {
 const res = await Promise.race([
  getJSON (`https://restcountries.com/v2/name/italy`), //${country1}
  getJSON (`https://restcountries.com/v2/name/afghanistan`), //${country1}
  getJSON (`https://restcountries.com/v2/name/uae`) //${country1}

 ]);
 //console.log(res[0])

}

//calling function to execute code in body or log to console
racePromise()
//renders or fetches in parallel but in a race 
///////// what 
////////  ever
//////// first loads




/// if user has a verry bad internet connnection 
// a fetch req  may take too long 
// so we can create a special timeout promise automaticcally rejects after sometime is pass

const timeout = function(seconds){
  return new Promise(function(_, reject){ // _ is executer func, _ is throw away variable 
    setTimeout(function() {

      reject(new Error('request took too long'))

    },  seconds * 1000) //multiply by 1000mls is 1 second
  })
}
///////////////////////////////////////Promise.race
// ajax call rece 
Promise.race([
  getJSON (`https://restcountries.com/v2/name/uae`), //${country1}
 timeout(0.1)// second

]).then(res => console.log(res[0]
)).catch(err => console.error(err))
//if country uae data is faster to load the it will get fetched first
//if not then the timeout error will happen 




//////////////////////////////////Promise.allSettled
// it takes an arrya of promises 
// promise.allSettled will not shortcircut and if one promise is rejected it will error only that one promise and resolve all others 
Promise.allSettled([
   Promise.resolve('success'), 
   Promise.reject('ERROR'), 
   Promise.resolve('success')

]).then(res => console.log(res))


///////////////////////////////////////////Promise.all
// this promise will shortcircut all promises if there is one rejected promies
// will reject all promises 
Promise.all([
  Promise.resolve('success'), 
  Promise.reject('ERROR'), 
  Promise.resolve('success')

]).then(res => console.log(res))
.catch(err => console.error(err))






///////////////////////////////////////////////Promise.any
//may not work in browsers yet
//this one will then return the first fullfilled promise the result of this a fullfilled promies
Promise.any([
  Promise.resolve('success'), 
  Promise.reject('ERROR'), 
  Promise.resolve('success')

]).then(res => console.log(res))
.catch(err => console.error(err))












//////////////////////////// lood contents like apps links 
///////////////////////////// load elements to the page 

//challenge 


///pause the code execution for 2 secconds
const wait = function(seconds) {
  return new Promise(function(resolve){
  setTimeout(resolve, seconds * 1000)
})
}

//getting access to element in html dom 
const imgContainer = document.querySelector('.images');


const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img')
    img.src = imgPath;
    
    img.addEventListener('load', function(){
      //append that image to that element DOM 
      imgContainer.append(img);
      resolve(img)

    });

    img.addEventListener('error', function(){
      reject(new Error('Image is fuked up by bugs ATTACK🪲')); 
     
    })
  })
}

///pause the code execution for 2 secconds
//the img is only defined in the createImage function
// we need to make it global to access it in other function 
/* let currentImage; 

createImage('img/img-1.jpg').then(img => {
  currentImage = img // img here is the function img variable we take the value and put ir or asign it to currentImage var
  console.log('image one loaded')
  return wait(3) // callback wait timer function 
})
.then(() => {
currentImage.style.display = 'none'  // we access let currentImage  to hide image
return createImage('img/img-2.jpg') ////load  a second image

})
.then((img) => { 
  currentImage = img // we repeat the same method shoe image and hide after 2 seconds
  console.log('image 2 loaded')
  return wait(3) // callback wait timer function
  
})
.then(() => { // after the second image is loaded for 2 seconds .. we hide it again simple 
  currentImage.style.display = 'none'  //in the next handeler we hide our photo


})
.catch(err => console.error(err)) */












/////////////////////////////////////////////////////////////////////challenge
const loadNPause = async function(){

  try{
    //img1
    let img = await createImage('img/img-1.jpg')
    console.log('Image 1 loaded ')
    await wait(2)//
    img.style.display = 'none'


    //img2
    img = await createImage('img/img-2.jpg')
    console.log('Image 2 loaded ')
    await wait(2)//
    img.style.display = 'none'


  }catch(err){ // it needs this fuked curly for block
    console.error(err)

  }

}




loadNPause()



////////////////////////////////////////////
///part 2 load all img 

const loadAll = async function(imgArr){
try {

  const imgs = imgArr.map(async img => await 
    createImage(img));
    console.log(imgs)

// load it in parallel 
const imgsParallel = await Promise.all(imgs)  // how do we take data img elements out of array? 
console.log(imgsParallel)
//loop over
imgsParallel.forEach(img => img.classList.add('parallel'));  // style from css


}catch(err) {
  //err block here
}
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])



//Practice/////////////////////////////////
///////////////////////////////////
/////////////////////////////////
///////////////////////////////////////
// Event loop
/* console.log('Test start'); // this first
setTimeout(() => console.log('0 sec timer'), 0); // this is last executed 
Promise.resolve('Resolved immidiately promise 1').then(res => console.log(res))

//eg rendring delayed 
Promise.resolve('Resolved promise 2').then(res => { 
    for (let i = 0; i < 500000000; i++) {}
    console.log(res)

    })

console.log('Test end') // this first

////////////////////////////////////
//build a simple promise

const lotteryPrimise = new Promise(function(resolve, reject) {

console.log('this msg comes first ... lottery starting in')
  setTimeout(function(){
      //executer func
  if(Math.random() >= 0.5) {
    resolve('you win resolved ')
  }else {
    reject('you lost rejected')
  }

  }, 2000)
  

})  

lotteryPrimise.then(res => console.log(res)).catch(err => console.error(err))

//////////////////////////////////////////////
//promisify  reall world example
const wait = function(seconds) {
  return new Promise(function(resolve){
  setTimeout(resolve, seconds * 1000)
})


};

wait(2).then(() => {
  console.log('I waited for 2 seconds')
  return wait(1);
}).then(() => console.log('I waited for 1 second'))



.then(() => {
  console.log('I waited for 3 seconds')
  return wait(3);

}).then(() => {
  console.log('I waited for 4 seconds')
  return wait(4);
})













///////////////////////////// lood contents like apps links 
///////////////////////////// load elements to the page 

//challenge 


///pause the code execution for 2 secconds
const wait = function(seconds) {
  return new Promise(function(resolve){
  setTimeout(resolve, seconds * 1000)
})
}

//getting access to element in html dom 
const imgContainer = document.querySelector('.images');


const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img')
    img.src = imgPath;
    
    img.addEventListener('load', function(){
      //append that image to that element DOM 
      imgContainer.append(img);
      resolve(img)

    });

    img.addEventListener('error', function(){
      reject(new Error('Image is fuked up by bugs ATTACK🪲')); 
     
    })
  })
}

///pause the code execution for 2 secconds
//the img is only defined in the createImage function
// we need to make it global to access it in other function 
let currentImage; 

createImage('img/img-1.jpg').then(img => {
  currentImage = img // img here is the function img variable we take the value and put ir or asign it to currentImage var
  console.log('image one loaded')
  return wait(3) // callback wait timer function 
})
.then(() => {
currentImage.style.display = 'none'  // we access let currentImage  to hide image
return createImage('img/img-2.jpg') ////load  a second image

})
.then((img) => { 
  currentImage = img // we repeat the same method shoe image and hide after 2 seconds
  console.log('image one loaded')
  return wait(3) // callback wait timer function
  
})
.then(() => { // after the second image is loaded for 2 seconds .. we hide it again simple 
  currentImage.style.display = 'none'  //in the next handeler we hide our photo


})
.catch(err => console.error(err))







//end
/////////////////////////////////////////////
////////////////////////////////////////
/////////////////////////////////




































// maybe chaining method?
//const neighbour = date[0].borders?.[0]



















// Recap on the code above
//1. getCountryData function returns a prmomise >
//2. then we handle that promise using the .then() method
//3. then to read the data from the response we need to call json method on that response object since this is a promise we then...
//4. call the .then() method on that.. chaining thens......
//5. our last callback function with promise is (data) to convert array or json object into readable usable data to the DOM

 */
