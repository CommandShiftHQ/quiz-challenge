function guessToBool(guess) {
  return guess.toLowerCase() === 'true';
}

class TrueFalse {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  verify(guess) {
    return guessToBool(guess) === this.answer;
  }
}

module.exports = TrueFalse;
