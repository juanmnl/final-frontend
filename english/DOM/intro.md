# DOCUMENT OBJECT MODEL

## What is the DOM?

The **DOM** is the underlying structure of a webpage. It's a series of
**Objects** interconnected with _parent <-> children_ -and more- relationships.

* Structures and describes relationships in HTML
* How browsers interpret and organize HTML as a Document.Object.Model.
* API for CSS and Javascript

---

#### Basic Document

```html
<!DOCTYPE html>
<html lang="en"> <!-- <HTML> Root Element -->
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <ul id="parent"> <!-- parent node -->
      <li id="sibling"></li> <!-- child node -->
      <li id="sibling"></li> <!-- siblings as child nodes -->
      <li id="sibling"></li> <!-- siblings as child nodes -->
    </ul>
  </body>
</html>
```

#### Basic API

```css
#parent {
  margin: 1em;
}
```

```js
document.getElementById('parent');
```

---

### DOM Structure

Every element in the DOM including the text and attribute are considered
"nodes".\
Nodes can be both "parent" and have "children" elements, but they can also have other
relationships. Elements in the same level are known as "siblings" (elements with
the same parent).\
First and last elements have special names called "first child" and "last
child".\
The rest of the children of the (parent) element are knowns as (child nodes).

```
- html
  - head
    - title
    - script
    - link
  - body
    - header
      - nav
        - li
          - a
        - li
          - a
        - li
          - a
    - article
      - h1
      - p
      - p
```

---

## Navigating the DOM w/ Chrome's DevTools

* Open Chrome
* Open developer tools on Console tab.
* OSX -> **cmnd + opt + j**
* Win -> **ctrl + alt + j**

#### Elements

{Explain in chrome}\
tree\
edit\
css\
console w/ escapeKey

#### Console

{Explain in chrome}\
cmd+f -> search

---

##### QUICK EXAMPLES FROM THE CONSOLE

```js
document; // Selects the entire DOM
document.body; // only body tag <body>...</body>
document.head; // only head tag <head>...</head>
document.body.childNodes; // [] list of all nodes in <body>
document.body.childNodes[0]; // first child node in <body>
dir(document.body.childNodes); // vertical directory of <body> children
document.getElementById('elementId'); // gets element by its id
document.querySelector('#elementId'); // gets element by its id with the query selector
$('#elementId'); // shortcut for the document query selector w/id
$('footer'); // shortcut for the document query selector w/html tag
$$('header nav ol>li'); // get all the "li" elements in the "ol"
$_; // shortcut to last selection
inspect($('header nav ol>li')); // get element in console and tree
monitorEvents(document.getElementById('elementId'), 'click'); // report click events on selected dom node.
```

---

##### CONSOLE METHODS

```js
console.log('hello!'); // Log message to the console
console.dir('#el'); // Log node to the console in dir format
console.info('Some message'); // Log message to the console
console.warn('Warning message w/symbol');
console.error('Error message w/symbol');
```

**_Groups_**

```js
console.group('Links');
console.dir(document.querySelectorAll('a'));
console.groupEnd();

// This will show you an open group of all the anchor tags on the DOM.
```

```js
console.groupCollapsed('Paragraphs');
console.dir(document.querySelectorAll('p'));
console.groupEnd();

// This will show you a collapsed group of all the paragraph tags on the DOM.
```

**_Time_**

```js
console.time('BigLoop');
for (var i = 100000 - 1; i >= 0; i--) {
  // nothing
}
console.timeEnd('BigLoop'); // BigLoop: 91.509ms

// Log the time it takes to do something
```
