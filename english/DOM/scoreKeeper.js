var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var reset = document.getElementById('reset');
var numInput = document.querySelector('input');
var goal = document.getElementById('goal');
//
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener('click', addScoreP1);
p2.addEventListener('click', addScoreP2);
reset.addEventListener('click', resetScore);
numInput.addEventListener('change', setGoal);

function setGoal() {
  goal.textContent = this.value;
  winningScore = Number(this.value);
  resetScore();
}

function addScoreP1() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add('winner');
      p1.style.color = '#999';
    }
    p1Display.textContent = p1Score;
  }
}

function addScoreP2() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add('winner');
      p2.style.color = '#999';
    }
    p2Display.textContent = p2Score;
  }
}

function resetScore() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');
  p2Display.textContent = 0;
  gameOver = false;
  p1.style.color = 'black';
  p2.style.color = 'black';
}
