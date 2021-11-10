class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  verify(guess) {
    return guess.toLowerCase() === this.answer.toLowerCase();
  }
}

module.exports = Question;
