const promptSync = require('prompt-sync');
const Question = require('./src/question');

const question1 = new Question('Are mince pies better than fig rolls?', 'yes');
const question2 = new Question('What is the capital of France?', 'Paris');
const question3 = new Question('What is the capital of Germany?', 'yes');
const question4 = new Question('What is the capital of Djibouti?', 'Djibouti');
const question5 = new Question('What is the capital of Peru?', 'Lima');

const prompt = promptSync();

let guess = prompt(question1.question);

let result = question1.verify(guess);

console.log(result);

console.log('---');

guess = prompt(question2.question);

result = question2.verify(guess);

console.log(result);

console.log('---');

guess = prompt(question3.question);

result = question3.verify(guess);

console.log(result);

console.log('---');

guess = prompt(question4.question);

result = question4.verify(guess);

console.log(result);

console.log('---');

guess = prompt(question5.question);

result = question5.verify(guess);

console.log(result);

console.log('---');
