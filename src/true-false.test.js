const TrueFalse = require('./true-false');

let subject;

const q = '2 + 2 === 5';
const a = false;

beforeEach(() => {
  subject = new TrueFalse(q, a);
});

describe('question', () => {
  it('is the given question', () => {
    expect(subject.question).toBe(q);
  });
});

describe('verify', () => {
  it('returns true if the input string matches the answer', () => {
    expect(subject.verify('false')).toBe(true);
  });

  it('returns false if the input string does not match the answer', () => {
    expect(subject.verify('true')).toBe(false);
  });

  it('is not case-sensitive', () => {
    expect(subject.verify('FaLSe')).toBe(true);
  });
});
