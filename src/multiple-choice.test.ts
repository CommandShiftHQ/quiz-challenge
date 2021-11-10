import { MultipleChoice } from './multiple-choice';

let subject: MultipleChoice;

const q = 'What is the answer?';
const o = {
  a: 'foo',
  b: 'bar',
};
const a = 'a';

beforeEach(() => {
  subject = new MultipleChoice(q, o, a);
});

describe('question', () => {
  it('is the given question, with the formatted options', () => {
    expect(subject.question).toBe(`${q} a) ${o.a} b) ${o.b}`);
  });
});

describe('verify', () => {
  it('returns true if the guess matches the given answer', () => {
    expect(subject.verify('a')).toBe(true);
  });

  it('returns false if the guess does not match the given answer', () => {
    expect(subject.verify('b')).toBe(false);
  });

  it('is not case sensitive', () => {
    expect(subject.verify('A')).toBe(true);
  });
});
