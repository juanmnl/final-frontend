// <- QUICK TOUR

function functionDeclaration() {}

// Functions can be assigned to variables
var functionExpression = function () {};

// Functions can be passed and assigned
// to argument variables (like func below)
var map = function(func) {};
map(functionExpression);

// Functions can be returned
// from other Functions
var wrapFunction = function(func) {
  return function() {
    func();
  };
};

// Functions can have names
var namedFunction = function namedFunction() {};

// Or they can be anonymous
var anonFunction = function() {};

// Functions can take named or anonymous arguments
var argFunction = function(argOne, argTwo /* rest of anon arguments */) {
  // available on the arguments object
  var args = Array.prototype.slice.call(arguments);
  var rest = args.slice(2);
};

// <- QUICK TOUR END



// <- CREATING FUNCTIONS
// constructor
add = new Function("a", "b", "return a + b;");

// expression
var add = function(a, b) {
  return a + b;
};

// function declaration
function add(a, b) {
  return a + b;
}

// <- CREATING FUNCTIONS END



// <- DESTRUCTURING BASIC FUNCTIONS

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

// Count argument char in a given string, refactor countBs fn to work with it

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
  if (string.charAt(i) === ch)
  counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

// <- DESTRUCTURING BASIC FUNCTIONS END
