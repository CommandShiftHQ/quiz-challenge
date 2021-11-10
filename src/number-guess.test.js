const NumberGuess = require('./number-guess');

let subject;

const q = 'What is the answer?';
const a = 42;
const w = 2;

beforeEach(() => {
  subject = new NumberGuess(q, a, w);
});

describe('question', () => {
  it('is the given question', () => {
    expect(subject.question).toBe(q);
  });
});

describe('verify', () => {
  it('returns true if the guess matches the given answer', () => {
    expect(subject.verify('42')).toBe(true);
  });

  it('returns true if the guess matches the given answer within the permitted range', () => {
    expect(subject.verify('40')).toBe(true);
    expect(subject.verify('44')).toBe(true);
  });

  it('returns false if the guess is outside the range', () => {
    expect(subject.verify('39')).toBe(false);
    expect(subject.verify('45')).toBe(false);
  });
});
