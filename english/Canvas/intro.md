## Canvas (html5)

*Only works on HTML5.*  



**html5 document**  
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Canvas setup</title>
  </head>
  <body>
    <canvas id="canvas" width="600" height="600" ></canvas>
  </body>
</html>
```

```js
window.onload = function() {
  // tag
  // var canvas = document.getElementByTagName("canvas")[0];

  // jQuery
  // var canvas = $("#canvas")[0];

  // Create
  // var canvas = document.createElement("canvas");
  // document.body.appendChild(canvas);

  // id
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  // If you haven't set the size on html tag, you can set it here
  // canvas.width = 600;
  // canvas.height = 800;
  //
  // Do not use jQuery as it only changes the layout size

  context.fillRect(10, 10, 100, 200);
  // Will render a v-rectangle to the DOM.

  // DRAWING LINES

  context.beginPath(); // Initialize drawing
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.lineTo(300, 200);
  context.lineTo(100, 200);
  context.lineTo(100, 100);
  // context.closePath(); // Closes path if you don't specify the last line
  context.stroke(); // Render drawing line by line
  context.fill(); // Fill the body of the drawing
  // context.strokeRect();
  // context.fillRect();

}

```
