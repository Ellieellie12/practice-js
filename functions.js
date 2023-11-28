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

const add = (a, b) => a + b

let nums = [3, 5, 6, 9]


nums.forEach(function(num) {
  console.log(num)
})


nums.forEach(num => console.log(num))
// arrow functions are good for forEach functions
