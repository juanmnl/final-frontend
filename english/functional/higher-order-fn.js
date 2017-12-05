/**
 * Higher-order functions
 *
 * Functions that take other functions as arguments
 */

////////////////////////////////////////
////////////////////////////////////////

var bands = [
  { name: 'Pearl Jam', type: 'grunge' },
  { name: 'Metallica', type: 'metal' },
  { name: 'Slipknot', type: 'metal' },
  { name: 'Nirvana', type: 'grunge' },
  { name: 'The Doors', type: 'rock' },
  { name: 'Soda Stereo', type: 'rock' }
];

////////////////////////////////////////
////////////////////////////////////////

/**
 * Make an array of rock bands only
 */

/**
 * The for loop way
 */
var rock = [];
for (var i = 0; i < bands.length; i++) {
  if (bands[i].type === 'rock') rock.push(bands[i]);
}
/**
 * FILTER
 *
 * A method on the array object that filters the object
 * and transform it into a smaller array
 */
// Composed fn
var rock = bands.filter(function(band) {
  return band.type === 'rock';
});
// ES6
var rock = bands.filter(band => {
  return band.type === 'rock';
});
// ES6 implicit return on one line
var rock = bands.filter(band => band.type === 'rock');
// In functional programming in-fn-vars
// tend to be named with single chars
var rock = bands.filter(x => x.type === 'rock');
///////////////////////////////////
// Separated logic and reusable fn
var isRock = function(band) {
  return band.type === 'rock';
};
var rock = bands.filter(isRock);
// The REJECT method will inverse the call
var otherTypes = bands.reject(isRock);
// The FIND method will transform the array
// into a single item array
var nirvana = bands.find(function(band) {
  return band.name === 'Nirvana';
});

///////////////////////////////////////
///////////////////////////////////////

/**
 * Make an array of all the bands names
 */

/**
 * The for loop way
 */
var names = [];
for (var i = 0; i < bands.length; i++) {
  names.push(bands[i].name);
}
/**
 * MAP
 *
 * A method on the array object that transforms
 * the original object into a different array
 * with the same length as the original
 */
var names = bands.map(function(band) {
  return band.name;
});
// ES6
var names = bands.map(band => {
  return band.name;
});
// ES6 implicit return on one line
var names = bands.map(band => band.name);
// In functional programming in-fn-vars
// tend to be named with single chars
var names = bands.map(x => x.name);
