// ARRAYS -----------------
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

console.log(sumArray(nums));
console.log(printReverse(nums2));
console.log(max(nums2));
