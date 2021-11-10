const prompt = require('prompt-sync')();
const Quiz = require('./src/quiz');
const Question = require('./src/question');
const MultipleChoice = require('./src/multiple-choice');
const TrueFalse = require('./src/true-false');
const NumberGuess = require('./src/number-guess');

const questions = [
  new Question('What is the capital of France?', 'Paris'),
  new Question('What is the capital of Djibouti?', 'Djibouti'),
  new MultipleChoice(
    'What is the capital of England?',
    {
      a: 'London',
      b: 'York',
      c: 'Ipswich',
    },
    'a'
  ),
  new TrueFalse('Dublin is the capital of Poland?', false),
  new NumberGuess('How many countries are there in South America?', 13, 1),
];

const quiz = new Quiz('Geography Quiz', questions, prompt);

console.log(`Welcome to the ${quiz.name}`);

while (!quiz.finished) {
  console.log(quiz.answerQuestion(prompt(`${quiz.currentQuestion}: `)));
}

console.log(`Final Score: ${quiz.score}`);
