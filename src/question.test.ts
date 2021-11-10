import { Question } from './question';

let subject: Question;

const q = 'What is the capital of France?';
const a = 'Paris';

beforeEach(() => {
  subject = new Question(q, a);
});

describe('question', () => {
  it('is the given question', () => {
    expect(subject.question).toBe(q);
  });
});

describe('verify', () => {
  it('returns true if the guess matches the given answer', () => {
    expect(subject.verify(a)).toBe(true);
  });

  it('returns false if the guess does not match the given answer', () => {
    expect(subject.verify(`${a} ${a}`)).toBe(false);
  });

  it('is not case-sensitive', () => {
    expect(subject.verify(a.toUpperCase())).toBe(true);
    expect(subject.verify(a.toLowerCase())).toBe(true);
  });
});
