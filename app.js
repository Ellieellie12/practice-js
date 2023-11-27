
// let x = 25
// x = 100 
// console.log(x)

// const x = 25
// console.log(x)
// const stays the same (constant)

// let x = 2
// x = 5

// console.log(x)

// you can reassign let 



//ACCESSING ELEMENTS IN AN ARRAY

// let movies = ['Clueless', 'Avatar', 'The Bee Movie']
// let firstMovie = movies[0]
// console.log(firstMovie)

// accessing the first movie in the array by accessing it by index 0. Arrays do not go start off at 1 they start off at 0





// ADDING ELEMENTS TO AN ARRAY (to the end of the array )

// let movies = ['Clueless', 'Avatar', 'The Bee Movie']

// movies.push('Home')

// console.log(movies)

// the push method is available on all arrays it is built in. the push method adds the specified elements to the END of an array and then returns the NEW LENGTH of the array.



//ADDING ELEMENTS TO AN ARRAY (to the front of the array )

// let movies = ['Clueless', 'Avatar', 'The Bee Movie']

// movies.unshift('Home')

// console.log(movies)

// the unshift method adds an element to the front of an array


// REMOVE ELEMENTS FROM AN ARRAY 

// let movies = ['Clueless', 'Avatar', 'The Bee Movie']
// console.log(movies, ' <- movies before pop')

// let removedMovie = movies.pop()

// console.log(removedMovie, 'is the movie removed')
// console.log(movies, ' <- movies after pop')

// The pop method only removes the element at the end of the array.


// let movies = ['Clueless', 'Avatar', 'The Bee Movie']

// let removedMovies = movies.splice(0,2, 'Home', 'Story')

// console.log(movies)

// you can use splice to add to an array


// ITERATE OVER ALL OF THE ELEMENTS IN AN ARRAY

// let movies = ['Clueless', 'Avatar', 'The Bee Movie']

// movies.forEach(movie => {
//   console.log('The current movie is ' + movie)
  
// });

// you CANT use break to exit out of a forEach loop

// const nums = [1, 2, 3, 4, 5]

// nums.forEach(function(num) {
//   console.log(num)
// })

// FOR OF LOOP

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let num of nums) {
  //   console.log(num)
  //   if (num === 7) break
  // }


  // COPY ALLL OR SOME OF AN ARRAY USING SLICE!!!
  
  // let movies = ['Clueless', 'Avatar', 'The Bee Movie', 'Alien']
  // let lastTwoMovies = movies.slice(1,3)
  // console.log(lastTwoMovies)

  //slice() <- makes a copy of the entire array
  //slice(start)
  //slice(start, end) <- start ay
  //slice(1,3) <-- start at index one and going up to but not including index 3


//COPY ALL OF AN ARRAY USING THE SPREAD OPERATER

  // let movies = ['Clueless', 'Avatar', 'The Bee Movie']
  // let moviesCopy = [...movies]
  // console.log(moviesCopy)


//COPY ALL OF AN ARRAY AND INSERT

  let movies = ['Clueless', 'Avatar', 'The Bee Movie']
  let moreMovies = ['Alien', ...movies, 'Robots']

  console.log(moreMovies)


