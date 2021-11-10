class Quiz {
  constructor(name, questions) {
    this.name = name;
    this.questions = questions;
    this.current = 0;
    this.score = 0;
  }

  get currentQuestion() {
    if (this.finished) {
      throw new Error('The quiz is finished!');
    }

    return this.questions[this.current].question;
  }

  answerQuestion(guess) {
    if (this.finished) {
      throw new Error('The quiz is finished!');
    }

    const correct = this.questions[this.current].verify(guess);

    if (correct) {
      this.score += 1;
    }

    this.current += 1;

    return correct ? 'CORRECT!' : 'INCORRECT!';
  }

  get finished() {
    return this.current >= this.questions.length;
  }
}

module.exports = Quiz;
