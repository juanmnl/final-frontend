LOADING AND READING EXTERNAL FILES

var fs = require('fs');
fs.readFile('text.txt', function(err, data) {
  console.log('Done! The file reads:');
  console.log(data.toString());
});

console.log('Reading file ...');


// function sayHello() {
//   debugger;
//   console.log('Hello modafoca!');
// }
//
// function tryEventLoop() {
//   console.log('Putting function in the task queue');
//   setTimeout(function() {
//     console.log('Task executed two seconds later');
//   }, 2000);
// }
//
// // THE EVENT LOOP
// var el = document.getElementById('button');
// el.addEventListener('click', function(e) {
//   console.log("Da'Fuck are you pressing that button so many times?");
// });
//
// var count = 0;
// window.addEventListener('mousemove', function(e) {
//   console.log('Mouse has moved: ' + count++);
// });
//
// for (var i = 0; i < 10; i++) {
//   console.log('Iteration ' + i);
// }
//
// console.log('Iteration is complete');
