document.write('Open the console or the debugger ;) - [Cmd+opt+j]');

function sayHello() {
  debugger;
  console.log('Hello modafoca!');
}

function tryEventLoop() {
  console.log('Putting function in the task queue');
  setTimeout(function() {
    console.log('Task executed two seconds later');
  }, 2000);
}
