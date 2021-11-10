class MultipleChoice {
  constructor(question, options, answer) {
    this.q = question;
    this.options = options;
    this.answer = answer;
  }

  verify(guess) {
    return guess.toLowerCase() === this.answer.toLowerCase();
  }

  get question() {
    return Object.keys(this.options).reduce(
      (acc, key) => `${acc} ${key}) ${this.options[key]}`,
      this.q
    );
  }
}

module.exports = MultipleChoice;
