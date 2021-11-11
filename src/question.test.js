const Question = require('./question.js');

describe('Question', () => {
  let newQuestion;
  beforeEach(() => {
    newQuestion = new Question('Are mince pies better than fig rolls?', 'yes');
  });
  it('has the given answer', () => {
    expect(newQuestion.answer).toBe('yes');
  });

  it('returns the question', () => {
    expect(newQuestion.question).toBe('Are mince pies better than fig rolls?');
  });

  describe('verify', () => {
    it('return true if the guess is correct', () => {
      const result = newQuestion.verify('yes');
      expect(result).toBe(true);
    });
    it('return false if the guess is incorrect', () => {
      const result = newQuestion.verify('no');
      expect(result).toBe(false);
    });
  });
});
