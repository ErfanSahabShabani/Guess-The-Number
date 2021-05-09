'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = '';
document.querySelector('.score').textContent = '';

document.querySelector('.guess').value = 13;
*/
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let secNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gameStat = false;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if ((score > 1 || guess === secNumber) && !gameStat) {
    // guess = 0 => false; !guess => true
    if (!guess) {
      displayMessage('No number!');
    } else if (guess === secNumber) {
      displayMessage('Correct Number!');
      gameStat = true;

      document.querySelector('.number').textContent = secNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secNumber) {
      if (guess > secNumber) {
        displayMessage('Too high!');
      } else {
        displayMessage('Too low!');
      }
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score <= 1 && !gameStat) {
    displayMessage('You lost the game!');
    if (score >= 1) {
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('Already won the game!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  gameStat = false;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
