for (var n = 1; n <= 100; i++) {
  if (n % 15 === 0) {
    console.log('FizzBuzz');
  } else if (n % 3 === 0) {
    console.log('Fizz');
  } else if (n % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(n);
  }
}

/*
 SIMPLER FizzBuzz
 better version
 */

for (n = 1; n <= 100; n++) {
  var output = '';
  if (n % 3 === 0)
    output += 'Fizz';
  if (n % 5 === 0)
    output += 'Buzz';
  console.log(output || n);
}
