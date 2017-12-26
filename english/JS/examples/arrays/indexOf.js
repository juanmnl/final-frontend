// ARRAY Methods
// INDEXOF

// Array.prototype.indexOf();
// Used to search an array for a particuar value.
//
var family = ['Marie', 'Chicho', 'Isabel', 'Camila', 'Valeria'];
// Search for an existing value
console.log(family.indexOf('Isabel')); // >_ 2
// The value searched exists and it's located in index 2.

// Search for a non-existing value
console.log(family.indexOf('Juanmnl')); // >_ -1
// The search fails as there is no index of "Juanmnl"
// returning -1.

var isabelExists = family.indexOf('Isabel') > -1;
// This expression will return true or false,
// whether "Isabel" already exists or not in the [].
console.log(isabelExists); // >_ true
//
var thomExists = family.indexOf('Thom') > -1;
console.log(thomExists); // >_ false
//
// Now we have a flag to use
if (!thomExists) {
  family.push('Thom');
}
console.log(family); // >_ [.., .., 'Thom']

// IndexOf has a second parameter, which is the start
// position of the search.
console.log(family.indexOf('Chicho', 2)); // >_ -1
// The search will start at the second index "Isabel".
console.log(family.indexOf('Chicho', 1)); // >_ 1
// The search will return the index position, no matter
// where it starts. Index relative to the whole [].

// Search for object references and other values
var mom = {
  name: 'Marie'
};
var bro = {
  name: 'Chicho'
};
var dog = {
  name: 'Thom'
};
// Create an [] variable.
var family = [mom, bro, dog];
// Look for the index of an object.
console.log(family.indexOf(dog)); // >_ 2

// You can use indexOf() to create a filter
// Filter the events [] based on the extension of
// the files matches the values in the whitelist.
var whitelist = ['.css', '.js'];
//
var events = [
  {
    file: 'css/style.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];
//
// Return an array that contains the whitelist objects.
var filtered = events.filter(function(event) {
  var ext = require('path').extname(event.file);
  return whitelist.indexOf(ext) > -1;
});
console.log(filtered);
// >_ [ { file: 'css/style.css' }, { file: 'js/app.js' } ]
