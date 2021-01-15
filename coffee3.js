
// wrapping the script into a function and then call it

function questionsAboutMe() {

  var arrayOfQuestions = ['Am I a Male? ',
    'Am I over the age of 40? ', 'Do I live in Washington? ', 'Do I have a dog? ', 'Was I in the Army? '];

  var arrayOfAnswers = [];
  var rightAnswers = []

  for (var i = 0; i < arrayOfQuestions.length; i++) {
    var answer = prompt(arrayOfQuestions[i]);
    var answer = answer.toUpperCase();
    arrayOfAnswers.push(answer);
    console.log(answer);

    if (answer == 'YES' || answer == 'Y') {
      alert('Youre Right!');
    } else if (answer != 'YES' || answer != 'Y') {
      alert('Sorry try again.');
    }

    arrayOfAnswers[i] = answer;
    console.log(arrayOfAnswers);

  }

}

questionsAboutMe();