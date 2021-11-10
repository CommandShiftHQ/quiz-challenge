interface IOptions {
  [key: string]: string;
}

export class MultipleChoice {
  constructor(
    private q: string,
    private options: IOptions,
    private answer: string
  ) {}

  public verify(guess: string): boolean {
    return guess.toLowerCase() === this.answer.toLowerCase();
  }

  public get question(): string {
    return Object.keys(this.options).reduce(
      (acc, key) => `${acc} ${key}) ${this.options[key]}`,
      this.q
    );
  }
}
