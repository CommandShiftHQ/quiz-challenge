function guessToBool(guess: string): boolean {
  return guess.toLowerCase() === 'true';
}

export class TrueFalse {
  constructor(public question: string, private answer: boolean) {}

  verify(guess: string) {
    return guessToBool(guess) === this.answer;
  }
}
