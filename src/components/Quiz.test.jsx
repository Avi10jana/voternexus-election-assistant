import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from './Quiz';

const mockQuestions = [
  {
    questionText: 'Test Question 1',
    answerOptions: [
      { answerText: 'Correct Answer', isCorrect: true },
      { answerText: 'Wrong Answer', isCorrect: false },
    ],
  },
];

describe('Quiz Component', () => {
  it('renders the first question', () => {
    render(<Quiz questions={mockQuestions} />);
    expect(screen.getByText('Test Question 1')).toBeInTheDocument();
  });

  it('shows the score after answering', () => {
    render(<Quiz questions={mockQuestions} />);
    
    // Click the correct answer
    const correctButton = screen.getByRole('button', { name: /Answer: Correct Answer/i });
    fireEvent.click(correctButton);

    // Should show score
    expect(screen.getByText(/You scored 1 out of 1!/i)).toBeInTheDocument();
  });

  it('allows restarting the quiz', () => {
    render(<Quiz questions={mockQuestions} />);
    
    // Complete quiz
    fireEvent.click(screen.getByRole('button', { name: /Answer: Correct Answer/i }));
    
    // Click try again
    const restartButton = screen.getByRole('button', { name: /Restart Quiz/i });
    fireEvent.click(restartButton);

    // Should show question 1 again
    expect(screen.getByText('Test Question 1')).toBeInTheDocument();
    expect(screen.queryByText(/You scored/i)).not.toBeInTheDocument();
  });
});
