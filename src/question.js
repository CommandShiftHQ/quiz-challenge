class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  verify(guess) {
    return guess === this.answer;
  }
}

module.exports = Question;
