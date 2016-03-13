/**
 * Higher-order functions
 *
 * Functions that take other functions as arguments
 */

var bands = [
  { name: 'Pearl Jam',   type: 'grunge' },
  { name: 'Metallica',   type: 'metal' },
  { name: 'Slipknot',    type: 'metal' },
  { name: 'Nirvana',     type: 'grunge' },
  { name: 'The Doors',   type: 'rock' },
  { name: 'Soda Stereo', type: 'rock' }
];

/**
 * Make an array of rock bands only
 */

/**
 * The for loop way
 */
var rock = [];
for ( var i = 0; i < bands.length; i++ ) {
  if (bands[i].type === 'rock')
    rock.push(bands[i]);
}

/**
 * FILTER
 */

// Composed fn
var rock = bands.filter(function ( band ) {
  return band.type === 'rock';
});
///////////////////////////////////

// Separated logic and reusable fn
var isRock = function ( band ) {
  return band.type === 'rock';
}

var rock = bands.filter( isRock );
// Inverse
var otherTypes = bands.reject( isRock );
///////////////////////////////////
