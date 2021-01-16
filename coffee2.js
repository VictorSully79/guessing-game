'use strict'



function guessNumbers() {

  var correctAnswer = 10;
  var userAnswer = prompt('Please select a number 1 - 10');
  while (userAnswer < 1 || userAnswer > 10) {
    userAnswer = prompt('Incorrect.  Please select a number 1 - 10');
  }
  var numberOfGuesses = 4;

  for (var i = 0; i < numberOfGuesses; i++) {
    userAnswer = parseInt(userAnswer)

    if (i === 3 && userAnswer !== correctAnswer) {

      alert('The correct answer was 10');
    }
    else if (userAnswer === correctAnswer) {
      alert("Wow, you are good at this!");
break

    } else if (userAnswer < correctAnswer) {
      alert('Sorry, too low.');
      userAnswer = prompt('Please select a number between 1 - 10');
    } else if (userAnswer > correctAnswer) {
      alert('Sorry, to high');
      userAnswer = prompt('Please select a number 1 - 10');
    }
  }

}

guessNumbers();
