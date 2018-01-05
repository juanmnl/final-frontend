console.dir(document);

var bpBtn = document.querySelector('#bipolar-btn');
var bpP = document.getElementById('bipolar-p');

bpBtn.addEventListener('click', changeText);

function changeText() {
  bpP.textContent = '>:| Hey! stop clicking on me!';
}
