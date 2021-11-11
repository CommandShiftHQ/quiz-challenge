const Question = require('./src/question');
const question1 = new Question('Are mince pies better than fig rolls?', 'yes');
question1.verify('no')
console.log(question1.verify('no'));