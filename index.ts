import prompt from 'prompt-sync';
import { Quiz } from './src/quiz';
import { Question } from './src/question';
import { MultipleChoice } from './src/multiple-choice';
import { TrueFalse } from './src/true-false';
import { NumberGuess } from './src/number-guess';

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

const p = prompt();

console.log(`Welcome to the ${quiz.name}`);

while (!quiz.finished) {
  console.log(quiz.answerQuestion(p(`${quiz.currentQuestion}: `)));
}

console.log(`Final Score: ${quiz.score}`);
