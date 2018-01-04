setTimeout(function() {
  // V1 ---------------------
  // var todos = ['Buy milk 🥛'];

  // var input = prompt('What do you want to do?');

  // while (input !== 'quit') {
  //   if (input === 'list') {
  //     console.log(todos);
  //   } else if (input === 'new') {
  //     var newTodo = prompt('Enter a todo...');
  //     todos.push(newTodo);
  //   }
  //   input = prompt('What do you want to do, now?');
  // }

  // console.log('Ok, bye!');

  ///////////////////////////
  // V2 ---------------------
  var todos = ['Buy milk 🥛', 'Buy groceries 🥦', 'Walk the dog 🐶'];

  var input = prompt('What do you want to do?');

  while (input !== 'quit') {
    if (input === 'list') {
      printTodos();
    } else if (input === 'new') {
      newTodo();
    } else if (input === 'delete') {
      deleteTodo();
    }
    input = prompt('What do you want to do, now?');
  }

  console.log('Ok, see you!');

  function deleteTodo() {
    var index = prompt('Which Todo would you like to remove?');
    todos.splice(index, 1);
    console.log('The item was removed from the list.');
  }

  function newTodo() {
    var newTodo = prompt('Enter a todo...');
    todos.push(newTodo);
    console.log(newTodo + ' was added to the list.');
  }

  function printTodos() {
    console.log('**********');
    todos.forEach(function(todo, i) {
      console.log(i + ': ' + todo);
    });
    console.log('**********');
  }
}, 2000);
