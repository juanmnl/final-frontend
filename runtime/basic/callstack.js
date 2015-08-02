/*
 CALL STACK IMPLEMENTATION IN JS
 What a lower level runtime method might do to call a function
*/

var heap = {}; //storage location in memory
var stack = []; //array of elements to be pushed and poped in and out

var callFuntion = function(nameFunc, args, lineNumber) {
  var func = heap[nameFunc];

  var stackFrame = {
    func: func,
    name: nameFunc,
    args: args,
    env: {},
    returnValue: undefined
  };

  stack.push(stack);

  var returnValue = func.apply(this, args);
  stackFrame.returnValue = returnValue;
  return stack.pop();
};
