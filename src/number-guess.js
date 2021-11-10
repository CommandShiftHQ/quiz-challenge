class NumberGuess {
  constructor(question, answer, within) {
    this.question = question;
    this.answer = answer;
    this.within = within;
  }

  verify(guess) {
    const num = parseInt(guess);
    return num >= this.min && num <= this.max;
  }

  get max() {
    return this.answer + this.within;
  }

  get min() {
    return this.answer - this.within;
  }
}

module.exports = NumberGuess;
