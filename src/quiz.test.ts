import { IQuestion, Quiz } from './quiz';

let subject: Quiz;

const n = 'mock quiz name';

let q1: IQuestion;
let q2: IQuestion;
let q: IQuestion[];

beforeEach(() => {
  q1 = {
    question: 'question 1',
    verify: jest.fn(),
  };

  q2 = {
    question: 'question 2',
    verify: jest.fn(),
  };

  q = [q1, q2];

  subject = new Quiz(n, q);
});

describe('constructor', () => {
  it('has the given name', () => {
    expect(subject.name).toBe(n);
  });

  it('has a score of 0', () => {
    expect(subject.score).toBe(0);
  });
});

describe('currentQuestion', () => {
  it('reads the current question', () => {
    expect(subject.currentQuestion).toBe(q1.question);

    subject.answerQuestion('jest.fn()');

    expect(subject.currentQuestion).toBe(q2.question);
  });

  it('errors if all the questions have been answered', () => {
    subject.answerQuestion('jest.fn()');
    subject.answerQuestion('jest.fn()');

    expect(() => subject.currentQuestion).toThrow('The quiz is finished!');
  });
});

describe('answerQuestion', () => {
  it('verifies the current question with the guess', () => {
    const guess = 'jest.fn()';

    subject.answerQuestion(guess);

    expect(q1.verify).toHaveBeenCalledWith(guess);
  });

  it('moves onto the next question', () => {
    const guess = 'jest.fn()';
    subject.answerQuestion('');

    subject.answerQuestion(guess);

    expect(q2.verify).toHaveBeenCalledWith(guess);
  });

  it('errors if all the questions have been answered', () => {
    subject.answerQuestion('jest.fn()');
    subject.answerQuestion('jest.fn()');

    expect(() => subject.answerQuestion('jest.fn()')).toThrow(
      'The quiz is finished!'
    );
  });

  describe('if the guess is correct', () => {
    beforeEach(() => {
      (q1.verify as jest.Mock).mockReturnValue(true);
    });

    it('returns CORRECT!', () => {
      const result = subject.answerQuestion('jest.fn()');

      expect(result).toBe('CORRECT!');
    });

    it('increments the score', () => {
      const expected = subject.score + 1;

      subject.answerQuestion('jest.fn()');

      expect(subject.score).toBe(expected);
    });
  });

  describe('if the guess is incorrect', () => {
    beforeEach(() => {
      (q1.verify as jest.Mock).mockReturnValue(false);
    });

    it('returns INCORRECT!', () => {
      const result = subject.answerQuestion('jest.fn()');

      expect(result).toBe('INCORRECT!');
    });

    it('does not increment the score', () => {
      const expected = subject.score;

      subject.answerQuestion('jest.fn()');

      expect(subject.score).toBe(expected);
    });
  });
});

describe('finished', () => {
  it('is false if not all questions have been answered', () => {
    expect(subject.finished).toBe(false);
  });

  it('is true if all questions have been answered', () => {
    subject.answerQuestion('jest.fn()');
    subject.answerQuestion('jest.fn()');
    expect(subject.finished).toBe(true);
  });
});
