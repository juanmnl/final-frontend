// STRIC MODE FUNCTION FORM
(function () {
   'use strict';
   // this function is strict...
}());
//////////////////////////////////////////

function foo() {
  // what does foo() does when called?
}
// Declare a fucntion with a parameter
function square(x) { // x = 10
  // x becomes available inside the function
  console.log(x);// >_ 10
  x = x * x;
}
// x is not available outside of the function.
//
// Log the function bar with an argument of 10
console.log(square(10));// >_ 100

// GRAMMAR TIP
// It's a parameter when you declare it.
function foo(x) { return x; }
// It's and argument when you pass it.
foo(10);

// Simple example
// A seller wants a simple price printing machine.
function printPrice() {
	console.log('$' + price.toFixed(2));
}
// Declare items and its prices.
var pants = 99.99;
var shirt = 29.99;
var socks = 10;
// Machine detected 2 pants
var price = pants * 2;
printPrice();// >_ "$199.98"
// Machine detected 3 shirts plus the pants.
price = price + shirt * 3;
printPrice();// >_ "$289.95"
// Machine detected two pairs of socks
// plus the shirts and the pants.
price = price + socks * 2;
printPrice();// >_"$309.95"
// If total price is above 300,
// apply free shipping.
if (price > 300) {
	console.log("Free shipping applied!");// >_ "Free shipping applied!"
}


// Math.min own function
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

// isEven
function isEven(n) {
  if (n === 0)
    return true;
  else if (n === 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

// Count B's in a string
function countBs(string) {
  var count = 0;
  for (i=0; i < string.length; i++) {
    if (string.charAt(i) === "B")
      count += 1;
  }
  return count;
}

// Count argument char in a given string,
// refactor countBs fn to work with it.
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) === ch)
      counted += 1;
  return counted;
}
//
function countBs(string) {
  return countChar(string, "B");
}
