# REACT - A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
Tell something about react and why it's the right paradigm for UI's

## <Component />

**(ES5)**
### Basic Component
```js
// Imports React from node modules.
var React    = require('react');
// Call ReactDOM module for rendering methods.
var ReactDOM = require('react-dom');

// REACT'S MOST BASIC COMPONENT STRUCTURE.
var App = React.createClass({
  render: function() {
    return ( // Parenthesis are used so we can indent JSX properly.
      <div>
        <h1>Hello world!</h1>
      </div>
    );
  }
});

// ReactDOM will render the component to the DOM.
ReactDOM.render(<App />, document.body);
// Since react 0.14 the render to DOM methods are separated
// from react to react-dom module.

// OR

// Export Component to be required when needed.
module.exports = App;
```

### State

### Proptypes

Props are the properties that are passed down to a component.

```js
...

var App = React.createClass({
  // Define what type of values the component is receiving.
  propTypes: {
    txt: React.PropTypes.string // Set the txt property as a string.
  },
  // Set a default value to the prop in case there's no value assigned.
  getDefaultProps: function() {
    return: {
      txt: "Hello world"
    }
  },
  render: function () {
    return (
      <div>
        <h1>{this.props.txt}</h1> // "Hello world" by default
      </div>
    );
  }
});

...
```

### Refs

---
### Lyfecycle

#### getInitialState()

```js
...

var App = React.createClass({

  ...

  getInitialState: function() {
    //code here
  },

  ...
});

...
```

#### customMethods()

```js
...

var App = React.createClass({

  ...

  customMethods: function() {
    //code here
  },

  ...
});

...
```

#### componentWillMount()

```js
...

var App = React.createClass({

  ...

  componentWillMount: function() {
    //code here
  },

  ...
});

...
```

#### render()

```js
...

var App = React.createClass({

  ...

  render: function() {
    //code here
  },

  ...
});

...
```

#### componentDidMount()

```js
...

var App = React.createClass({

  ...

  componentDidMount: function() {
    //code here
  },

  ...
});

...
```

#### componentWillReceiveProps()

```js
...

var App = React.createClass({

  ...

  componentWillReceiveProps: function() {
    //code here
  },

  ...
});

...
```

#### shouldComponentUpdate()

```js
...

var App = React.createClass({

  ...

  shouldComponentUpdate: function() {
    //code here
  },

  ...
});

...
```

#### componentWillUpdate()

```js
...

var App = React.createClass({

  ...

  componentWillUpdate: function() {
    //code here
  },

  ...
});

...
```

#### componentDidUpdate()

```js
...

var App = React.createClass({

  ...

  componentDidUpdate: function() {
    //code here
  },

  ...
});

...
```

#### componentWillUnmount()

```js
...

var App = React.createClass({

  ...

  componentWillUnmount: function() {
    //code here
  },

  ...
});

...
```


### Synthetic Events
