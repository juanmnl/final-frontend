// The this keyword is probably the most misunderstood aspect of JS
// WHERE IS THE FUNCTION INVOKED?

// EXAMPLE OF INVOKING SOMETHING (nothing to do with this keyword)
// define func
var sayName = function(name) {
  console.log("Hello, " + name);
  // We don't know what the value of name is, until it's invoked.
};
// invoke function with value
sayName('Juanmnl'); // >_ "Hello Juanmnl"


//////////////////////
// IMPLICIT BINDING //
// Look at the left of the Dot at call time

//// EX.1
var me = {
  name: 'Juanmnl',
  age : 31,
  sayName: function() {
    console.log(this.name);
  }
};

me.sayName(); // this keyword referencing what is left of the DOT

//// EX.2
var SayNameMixin = function(obj) {
  obj.sayName = function() {
    console.log(this.name);
  };
};

var me = {
  name: 'Juanmnl',
  age: 31
};

var you = {
  name: 'Thom',
  age: 2
};

SayNameMixin(me); // decorate object me with func sayName()
SayNameMixin(you);// decorate object you with func sayName()

me.sayName(); // >_ "Juanmnl"
you.sayName();// >_ "Thom"

//// EX.3

var Person = function(name, age) { // Person 'class'
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    },
    parent: {
      name: "Janis",
      age: 27,
      sayName: function() {
        console.log(this.name);
      }
    }
  };
};

var thom = Person('Thom', 2);
thom.sayName(); // >_ "Thom"
thom.parent.sayName(); // >_ "Janis"


// Explicit Binding

// New Binding

// Window Binding
