const prompt = require('prompt-sync')();
const { Quiz } = require('./dist/quiz');
const { Question } = require('./dist/question');
const { MultipleChoice } = require('./dist/multiple-choice');
const { TrueFalse } = require('./dist/true-false');
const { NumberGuess } = require('./dist/number-guess');

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

const quiz = new Quiz('Geography Quiz', questions);

console.log(`Welcome to the ${quiz.name}`);

while (!quiz.finished) {
  console.log(quiz.answerQuestion(prompt(`${quiz.currentQuestion}: `)));
}

console.log(`Final Score: ${quiz.score}`);
