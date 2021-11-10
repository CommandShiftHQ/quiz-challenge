const { expect } = require('@jest/globals');
const Quiz = require('./quiz');

let subject;

let n;
let q1;
let q2;
let q;

beforeEach(() => {
  n = jest.fn();

  q1 = {
    question: jest.fn(),
    verify: jest.fn(),
  };

  q2 = {
    question: jest.fn(),
    verify: jest.fn(),
  };

  q = [q1, q2];

  subject = new Quiz(n, q);
});

describe('constructor', () => {
  it('has the given name', () => {
    expect(subject.name).toBe(n);
  });

  it('has the given questions', () => {
    expect(subject.questions).toBe(q);
  });

  it('starts on question 0', () => {
    expect(subject.current).toBe(0);
  });

  it('has a score of 0', () => {
    expect(subject.score).toBe(0);
  });
});

describe('currentQuestion', () => {
  it('reads the current question', () => {
    expect(subject.currentQuestion).toBe(q1.question);

    subject.answerQuestion(jest.fn());

    expect(subject.currentQuestion).toBe(q2.question);
  });

  it('errors if all the questions have been answered', () => {
    subject.answerQuestion(jest.fn());
    subject.answerQuestion(jest.fn());

    expect(() => subject.currentQuestion).toThrow('The quiz is finished!');
  });
});

describe('answerQuestion', () => {
  it('verifies the current question with the guess', () => {
    const guess = jest.fn();

    subject.answerQuestion(guess);

    expect(q1.verify).toHaveBeenCalledWith(guess);
  });

  it('increments the current question index', () => {
    const expected = subject.current + 1;

    subject.answerQuestion(jest.fn());

    expect(subject.current).toBe(expected);
  });

  it('errors if all the questions have been answered', () => {
    subject.answerQuestion(jest.fn());
    subject.answerQuestion(jest.fn());

    expect(() => subject.answerQuestion()).toThrow('The quiz is finished!');
  });

  describe('if the guess is correct', () => {
    beforeEach(() => {
      q1.verify.mockReturnValue(true);
    });

    it('returns CORRECT!', () => {
      const result = subject.answerQuestion(jest.fn());

      expect(result).toBe('CORRECT!');
    });

    it('increments the score', () => {
      const expected = subject.score + 1;

      subject.answerQuestion(jest.fn());

      expect(subject.score).toBe(expected);
    });
  });

  describe('if the guess is incorrect', () => {
    beforeEach(() => {
      q1.verify.mockReturnValue(false);
    });

    it('returns INCORRECT!', () => {
      const result = subject.answerQuestion(jest.fn());

      expect(result).toBe('INCORRECT!');
    });

    it('does not increment the score', () => {
      const expected = subject.score;

      subject.answerQuestion(jest.fn());

      expect(subject.score).toBe(expected);
    });
  });
});

describe('finished', () => {
  it('is false if not all questions have been answered', () => {
    expect(subject.finished).toBe(false);
  });

  it('is true if all questions have been answered', () => {
    subject.answerQuestion(jest.fn());
    subject.answerQuestion(jest.fn());
    expect(subject.finished).toBe(true);
  });
});
