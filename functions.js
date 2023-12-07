// function getPointsScored(elapsedTime) {
//   if (elapsedTime < 30) {
//     return 100
//   } else if (elapsedTime < 60) {
//     return 75
//   } else {
//     return 25
//   }
// }

// const points = getPointsScored(30)
//invoking the function 
// the return will be 75 because the elapsed time is 30 points
//if the elapsed time was changed to 90 it would return 25 points



// let size, board

// function initialize() {
//   size = getBoardSize()
//   // size will be "S", "M", or "L"
//   board = generateBoard(size)
//   renderBoard()
//   playSound()
// }

// when the page loads - call initialize
// when the user clicks on a reset button - call initialize


// FUNCTION

// function sayHelloDeclaration(name, location) {
//   console.log('Hello ' + name + '! You live in ' + location + '!')
// }
// sayHelloDeclaration('Maggie', 'Paris, Texas')

//arguments are going to change ^
// DECLARATIONS CAN BE INVOKED ABOVE OR BELOW THE FUNCTION/ EXPRESSIONS CAN NOT THEY CAN BE INVOKED BELOW THE FUNCTION EXPRESSION

// hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes,and imports to the top of their scope, prior to execution of the code

// focus on writing declarations and keep the code consistent



// function sayHello(parameter(s)) {
//   console.log('Hello ' + parameter + '!')
// }

// sayHello(argument)

// The parameter and the argument line up


// function add(a, b) {
//   return a + b
// }
// console.log(add(2, 6))


//arrow function

// const add = (a, b) => a + b

// let nums = [3, 5, 6, 9]


// nums.forEach(function(num) {
//   console.log(num)
// })


// nums.forEach(num => console.log(num))
// arrow functions are good for forEach functions

//function EXAMPLE

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandomInt(1, 10))


// Math.floor takes away the decimal and rounds the number down
// math.random is taking a random number between 0 and 0.9999999 repeated
// this is your go to function for determining a random value between two set integers random


//function EXAMPLE 2:

function addNums(numA, numB) {
  return numA + numB
}

const total = addNums(2, 4)

console.log(total)

// 2 and 4 in this example are the arguments for the function while numA and numB are the parameters(placeholders) in the function. Be mindful to how many arguments you put