export class NumberGuess {
  constructor(
    public question: string,
    private answer: number,
    private within: number
  ) {}

  public verify(guess: string): boolean {
    const num = parseInt(guess);
    return num >= this.min && num <= this.max;
  }

  private get max(): number {
    return this.answer + this.within;
  }

  private get min(): number {
    return this.answer - this.within;
  }
}
