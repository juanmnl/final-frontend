// ARRAY Methods

// CONCAT

// Array.prototype.concat();
// Call on an existing array and returns a new array as
// as the original, plus any parameters that you pass it in.
var item = [1, 2];

var newItems = items.concat(3, 4 ,5, 'string', undefined); // Multiple types
console.log(newItems); // >_ [1, 2, 3, 4, 'string', undefined]
// You can pass any type of value.

var arrayItems = items.concat([3, 4], [5, 6, 7]); // Multiple arrays
// Concat pulls out each value from the array
// and add it to the original.
console.log(arrayItems); // >_ [1, 2, 3, 4, 5, 6, 7]

var arrayItems = items.concat([3, 4], [5, [6, 7]]); // Nested array
// Nested arrays will return as nested arrays too.
console.log(arrayItems); // >_ [1, 2, 3, 4, 5, [6, 7]]
// *Concat can flatten arrays, but only 1 value deep* !important


// REAL EXAMPLE

var people = [ // First array
  { name: "Juanmnl" },
  { name: "Marie"   }
];

var morePeople = [ // Second array
  { name: "Isabel"  },
  { name: "Camila"  },
  { name: "Valeria" }
];

// If you want only people array.
//
// people.forEach(function(person) {
//   console.log(person.name);
// });
//
// We could repeat the same forEach, but lets use concat.
//
// morePeople.forEach(function(person) {
//   console.log(person.name);
// });

people
  .concat(morePeople)
  .forEach(function(person) {
    console.log(person.name);
  });

// >_ "Juanmnl"
// >_ "Marie"
// >_ "Isabel"
// >_ "Camila"
// >_ "Valeria"
