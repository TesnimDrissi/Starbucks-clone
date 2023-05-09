
/////////////  REGISTER  //////////////////

const register = document.querySelector('.register')
const registerBtn = document.querySelector('.login')
const closeBtn = document.querySelector('.close')

registerBtn.addEventListener('click', openRegister)
closeBtn.addEventListener('click', closeRegister)


function openRegister() {
    register.style.display = 'block'
  }
  
function closeRegister() {
    register.style.display = 'none'
  }


  //OR

// registerBtn.onclick = function(){
//   register.style.display = 'block'
// }

// closeBtn.onclick = function(){
//   register.style.display = 'none'
// }
 

var email = document.querySelector('.email')
var password = document.querySelector('.password')
var registerbtn = document.querySelector('.register-btn')
var emailList = []
var passwordList = []

registerbtn.onclick = () => {
  var newEmail = email.value;
  var newPassword  = password.value
  emailList.push(newEmail);
  passwordList.push(newPassword)		 
         
}

/////////////  SHOP  //////////////////

//show coffees images

function each(coll, f) { 
  if (Array.isArray(coll)) { 
        for (var i = 0; i < coll.length; i++) { 
              f(coll[i], i); 
        } 
  } else { 
        for (var key in coll) { 
              f(coll[key], key); 
        } 
  } 
}


var coffees = [
  "images/tosted coconut.webp",
  "images/cold brew.webp",
  "images/blonde expresso.webp",   
  "images/vanilla coffee.webp",
  "images/instant blonde.webp",
  "images/Pike Place.webp",
  "images/french roast.webp",
  "images/caramel coffee.webp",
  "images/spring blend.webp"
]

var imageHolder = document.getElementsByClassName('box-img')

function showCoffee(imageHolder, coffees) {
  each(imageHolder, function(element, i) {
    element.src=coffees[i]
  });
  return imageHolder
}


showCoffee(imageHolder,coffees)

console.log(showCoffee(imageHolder,coffees));

//order price

var prices = [
  20,
  15.6,
  13.5,
  10.5,
  17.7,
  15,
  20,
  9,
  16.5
]

var priceHolder = document.getElementsByClassName('price')

function showPrice(priceHolder, prices) {
  each(priceHolder, function(element, i) {
    element.textContent=prices[i]
  });
  return priceHolder
}

showPrice(priceHolder, prices)

// ordered items

var result = document.querySelector('.result')
var itemName = document.querySelector('.itemName')

var buy1= document.getElementById('buy-1')
var buy2=  document.getElementById('buy-2')
var buy3= document.getElementById('buy-3')
var buy4=  document.getElementById('buy-4')
var buy5= document.getElementById('buy-5')
var buy6=  document.getElementById('buy-6')
var buy7=  document.getElementById('buy-7')
var buy8=  document.getElementById('buy-8')
var buy9=  document.getElementById('buy-9')



var prices = [
  20,
  15.6,
  13.5,
  10.5,
  17.7,
  15,
  20,
  9,
  16.5
]

var count =0


buy1.onclick= function(){
  count += prices[0]

  result.innerHTML = count
}

buy2.onclick= function(){
  
  count += prices[1]
  result.innerHTML = count
}

buy3.onclick= function(){
  count += prices[2]
  result.innerHTML = count
}

buy4.onclick= function(){
  count += prices[3]
  result.innerHTML = count
}

buy5.onclick= function(){
  count += prices[4]
  result.innerHTML = count
}

buy6.onclick= function(){
  count += prices[5]
  result.innerHTML = count
}

buy7.onclick= function(){
  count += prices[6]
  result.innerHTML = count
}

buy8.onclick= function(){
  count += prices[7]
  result.innerHTML = count
}

buy9.onclick= function(){
  count += prices[8]
  result.innerHTML = count
}











