// Select clickable items for eventListener
const plusButton = Array.from(document.querySelectorAll('.plus'))
const lessButton = Array.from(document.querySelectorAll('.less'))
const deleted = Array.from(document.querySelectorAll('.deleted'))
const like = Array.from(document.querySelectorAll('.fa-regular'))

// Select items to change there values
const item = Array.from(document.querySelectorAll('.item'))
let price = Array.from(document.querySelectorAll('.price'))
let quantity = Array.from(document.querySelectorAll('.quantity'))
let total = document.querySelector('.total-price')

// Declare two arrays to store the converted quantity and price
let arrQuantity = [];
let arrPrice = [];

// Converting each quantity and price in Number
for(let i in quantity) {
    arrQuantity[i] = + quantity[i].innerHTML
}
for(let i in price) {
  arrPrice[i] = + price[i].innerHTML
}

// ____________ Function to calculate the total ______________

function totalPrice () {
  let totalPrice = 0
  for (let i in quantity) {
    totalPrice += arrPrice[i] * arrQuantity[i]
    total.innerHTML = totalPrice
  }
}
// Display the total price function
totalPrice()

// ____________ Event Listener for PLUS BUTTON ______________

for (let i = 0; i < plusButton.length; i++) {
  plusButton[i].addEventListener('click', () => {
    arrQuantity[i]++
    quantity[i].innerHTML = arrQuantity[i]
    totalPrice()
  })
}

// ____________ Event Listener for LESS BUTTON ______________

for (let i = 0; i < lessButton.length; i++) {
  lessButton[i].addEventListener('click', () => {
  if (arrQuantity[i] > 1) {
      arrQuantity[i]--
      quantity[i].innerHTML = arrQuantity[i]
      totalPrice()
    }
  })
}

// ____________ Event Listener for DELETE BUTTON ____________

for (let i = 0; i < deleted.length; i++) {
  deleted[i].addEventListener('click', () => {
    arrQuantity[i] = 0
    totalPrice()
    item[i].remove() 
  })
}

// ____________ Event Listener for HEART BUTTON _____________

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener('click', event => {
    like[i].classList.toggle('fa-solid')
  })
}