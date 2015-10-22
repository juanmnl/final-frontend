## Data Types

Dynamic Typing:  
No need to declare the type of a variable.  

Identifier:  
name of a variable that identifies a value.  


#### Primitive Types

Primitives are inmutable (cannot change once it has been created).

```js

myString = "myString";
myNumber = 13;
MyBoolean = true;
MyNull = null;
MyUndefined = undefined;

```

#### Object Types

Objects are mutable.

```js

// Object Types
myObject = {};

// Array 'object' type
myArray = [];

// Function type
myFunction = function() {};

// Custom constructed 'objects'
myDate = new Date;

```

### Primitive value vs. Reference value

### Objects

```js

person = {}; // Object literal

// CONSTRUCTOR FUNCTIONS
Person = function() {
	this.name = 'Juan';
	this.year = 1984;
	this.toString = function() {
		return this.name + ' ' + this.year;
	}
};

person = new Person(); // New constructor function

```
