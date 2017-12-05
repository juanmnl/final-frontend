// ARRAY Methods
// SLICE

// Array.prototype.slice();
// Creates a shallow copy of an array.
//
var original = [1, 2, 3, 4, 5];
// When calling slice() on an array,
// it will literally copy the values.
var copy = original.slice();
console.log(copy); // >_ [1, 2, 3, 4, 5]
// As this is a copy, any action performed
// will not afect the original array.
copy.push(6);
console.log(copy); // >_ [1, 2, 3, 4, 5, 6]
console.log(original); // >_ [1, 2, 3, 4, 5]
//
copy[0] = 'x';
console.log(copy); // >_ ["x", 2, 3, 4, 5, 6]
console.log(original); // >_ [1, 2, 3, 4, 5]

// If the original array contains object references
// the reference itself it's copied not the object
var person = { name: 'Thom' };
var objects = [1, person];
//
var copy = objects.slice();
//
console.log(objects); // >_ [1, { name: 'Thom' }]
console.log(copy); // >_ [1, { name: 'Thom' }]
//
// If one of the values is an object, a change
// in one object value will affect the original object value.
copy[1].name = 'Isabel';
// Name value change affects both arrays.
console.log(objects); // >_ [1, { name: 'Isabel' }]
console.log(copy); // >_ [1, { name: 'Isabel' }]
// This is because it's only a reference copy
// to the original object.

// The common use of slice() is not only to create
// a copy, but instead, taking a subsection of the []
var items = [1, 2, 3, 4, 5];
// The slice method can take to parameters slice(start, end)
var iCopy = items.slice(0, 1);
// The end parameter does not include the item your ending on.
console.log(iCopy); // >_ [1]
//
var iCopy = items.slice(0, 3);
console.log(iCopy); // >_ [1, 2, 3]
// If you provide a start and not an end, the slice
// method will take everything up to the end.
//
var iCopy = items.slice(-1);
// If you provide a negative number it makes the start number
// begin from the last number backwards.
console.log(iCopy); // >_ [5]

// A common usage of the slice method.
var person = { name: 'thom-yorke' };
var filters = {
  desuglify: function desuglify(x) {
    return x.replace('-', ' ');
  },
  uppercase: function uppercase(x) {
    return x.toUpperCase();
  }
};
//
// Desired output -> THOM YORKE
var input = 'name | desuglify | uppercase';
// Split the input and trim the whitespace
var sections = input.split('|').map(function(x) {
  return x.trim();
});
console.log(sections); // >_ ["name", "desuglify", "uppercase"]
// Look for the reference.
var ref = person[sections[0]];
console.log(ref); // >_ "thom-yorke"
// Take the reference and aplly filters.
var output = sections.slice(1).reduce(function(prev, next) {
  if (filters[next]) {
    return filters[next].call(null, prev);
  }
  return prev;
}, ref);
//
console.log(output); // >_ THOM YORKE
