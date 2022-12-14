'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'ð¤© correct answer !';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'â No number';
    displayMessage('â No number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'ð¤© correct answer !';
    displayMessage('ð¤© correct answer !');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score >= 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'ð too high' : 'ð too low';
      displayMessage(guess > secretNumber ? 'ð too high' : 'ð too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'ð¥you lost the game';
      displayMessage('ð¥you lost the game');
    }
  }
  //  else if (guess > secretNumber) {
  //   if (score >= 1) {
  //     document.querySelector('.message').textContent = 'ð too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'ð¥you lost the game';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score >= 1) {
  //     document.querySelector('.message').textContent = 'ð too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'ð¥you lost the game';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
