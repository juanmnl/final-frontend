// ARRAY Methods
// JOIN

// Array.prototype.join();
// Produces a string that is the reslult
// of adding together all items of an array.
//
// WITHOUT JOIN()
var names = [ 'Isabel', 'Cornejo'];
// Output the full name without the join() method.
console.log(names[0] + ' ' + names[1]); // >_ "Isabel Cornejo"
// Very fragile, adding another value to names[] would break it.
// Not scalable & extremely error-prone.

// WITH JOIN()
var names = [ 'Juan', 'Manuel', 'Cornejo'];
// Can provide as many values as we want, it doesn't break.
console.log(names.join(' ')); // >_ "Juan Manuel Cornejo"
// You pass whatever separator you want ' ' <- space.
//
// If you don't provide any argument at all,
// join() will default to a comma separated string.


// CLI EXAMPLE
var help = [
  'Usage',
  '     foo-app <input>'
];
// If the third argument is 'help', execute.
if (process.argv[2] === 'help') {
  console.log(help.join('\n'));
}
// >_ node join.js help
// >_ Usage
// >_     foo-app <input>


// EXAMPLE String -> array -> upper case and return a string
var name = "isabel cornejo";

var upper = name
              .split(' ') // ['isabel', 'cornejo']
              .map(function (x) {
                return x.charAt(0).toUpperCase() + x.slice(1); // ['Isabel', 'Cornejo']
              })
              .join(' '); // 'Isabel Cornejo'
//
console.log(upper); // >_ "Isabel Cornejo"
