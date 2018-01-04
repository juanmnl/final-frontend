console.log(
  'There are some fns, objects and arrays defined so you can play with:'
);

// ******** ARRAYS ********

var colors = ['red', 'green', 'blue', 'yellow'];
var friends = ['Tron', 'Morlis', 'Alvaro', 'Irene', 'Carlos'];

function cadunCadun(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

Array.prototype.cadunCadun = function(fn) {
  for (var i = 0; i < this.length; i++) {
    fn(this[i]);
  }
};

function printReverse(arr) {
  // print all the items in an arr in reverse order
  var reversed = [];
  var start = arr.length - 1;
  for (var i = start; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function max(arr) {
  // return the biggest number
  var bigN = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > bigN) {
      bigN = arr[i];
    }
  }
  return bigN;
}

function isUniform(arr) {
  // checks if an arr is made of the same data
  var checker = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== checker) {
      return false;
    }
  }
  return true;
}

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(item) {
    total += item;
  });
  return total;
}

var nums = [10, 12, 34, 154, 23, -109, 45];
var nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var uni = [2, 2, 2, 2, 2];

// console.log(sumArray(nums));
// console.log(printReverse(nums2));
// console.log(max(nums2));

// ******** OBJECTS ********

var person = {
  name: 'Ricardo',
  age: 39,
  city: 'Quito'
};

var dog = {
  name: 'thom',
  age: 4,
  breed: 'Delmer',
  birthday: '2013/24/05'
};

// ******** ARRAYS + OBJECTS ********

var movies = [
  {
    title: 'Blade Runner 2049',
    rating: 4.5,
    hasWatched: true
  },
  {
    title: 'The Hobbit',
    rating: 4,
    hasWatched: true
  },
  {
    title: 'La la what?',
    rating: 2,
    hasWatched: false
  },
  {
    title: 'Starship',
    rating: 3,
    hasWatched: false
  },
  {
    title: 'Alien',
    rating: 5,
    hasWatched: true
  }
];

// Excercise
// movies.forEach(function(movie) {
//   console.log(buildString(movie));
// });

// function buildString(movie) {
//   var result = 'You have';
//   if (movie.hasWatched) {
//     result += ' watched ';
//   } else {
//     result += ' not seen ';
//   }
//   result += "'" + movie.title + "'";
//   result += ' - ' + movie.rating + ' stars.';
//   return result;
// }

console.dir({
  colors,
  friends,
  cadunCadun,
  person,
  dog,
  movies,
  nums,
  nums2,
  uni,
  printReverse,
  max,
  isUniform,
  sumArray
});
