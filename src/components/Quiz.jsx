import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { HelpCircle } from 'lucide-react';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = useCallback((isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }, [currentQuestion, questions.length]);

  const restartQuiz = useCallback(() => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  }, []);

  return (
    <section className="glass-panel" aria-labelledby="quiz-heading">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <HelpCircle size={24} color="#a855f7" aria-hidden="true" />
        <h2 id="quiz-heading">Knowledge Check</h2>
      </div>
      
      <div className="quiz-container" aria-live="polite">
        {showScore ? (
          <div className="quiz-score-section">
            <h3>You scored {score} out of {questions.length}!</h3>
            <button className="quiz-restart-btn" onClick={restartQuiz} aria-label="Restart Quiz">Try Again</button>
          </div>
        ) : (
          <div className="quiz-question-section">
            <div className="quiz-question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="quiz-question-text" aria-atomic="true">
              {questions[currentQuestion].questionText}
            </div>
            <div className="quiz-answer-options" role="group" aria-label="Answer options">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button 
                  key={index} 
                  className="quiz-answer-btn"
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  aria-label={`Answer: ${option.answerText}`}
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

Quiz.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    questionText: PropTypes.string.isRequired,
    answerOptions: PropTypes.arrayOf(PropTypes.shape({
      answerText: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })).isRequired,
  })).isRequired,
};

export default Quiz;
