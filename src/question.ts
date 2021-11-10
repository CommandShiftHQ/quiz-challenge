export class Question {
  constructor(public question: string, private answer: string) {}

  public verify(guess: string): boolean {
    return guess.toLowerCase() === this.answer.toLowerCase();
  }
}
