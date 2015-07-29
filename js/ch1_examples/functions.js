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
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
