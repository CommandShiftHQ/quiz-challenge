export interface IQuestion {
  question: string;
  verify(guess: string): boolean;
}

export class Quiz {
  public score = 0;
  private current = 0;

  constructor(public name: string, private questions: IQuestion[]) {}

  public get currentQuestion(): string {
    if (this.finished) {
      throw new Error('The quiz is finished!');
    }

    return this.questions[this.current].question;
  }

  public answerQuestion(guess: string): string {
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

  public get finished(): boolean {
    return this.current >= this.questions.length;
  }
}
