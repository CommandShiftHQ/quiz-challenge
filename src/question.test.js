const Question = require('./question.js');

describe('Question', () => {
  it('has the given answer', () => {
    const newQuestion = new Question(
      'Are mince pies better than fig rolls?',
      'yes'
    );
    expect(newQuestion.answer).toBe('yes');
  });

  it('returns the question', () => {
    const newQuestion = new Question(
      'Are mince pies better than fig rolls?',
      'yes'
    );
    expect(newQuestion.question).toBe('Are mince pies better than fig rolls?');
  });
});
