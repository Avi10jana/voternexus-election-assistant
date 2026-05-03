import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, PartyPopper } from 'lucide-react';
import { electionData } from '../data';

const Quiz = () => {
  const [currentIdx, setCurrentIdx] = useState(1); // Starting at Q2 to match design
  const [selectedOption, setSelectedOption] = useState(1); // Option B (Index 1) selected
  const [isAnswered, setIsAnswered] = useState(true);

  const question = electionData.quizQuestions[currentIdx] || electionData.quizQuestions[0];
  const progress = ((currentIdx + 1) / electionData.quizQuestions.length) * 100;

  return (
    <div className="quiz-page">
      <header className="page-header">
        <h1><HelpCircle size={24} color="var(--primary)" /> Quiz Time</h1>
        <p>Test your knowledge and earn badges!</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        <div className="card">
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
              <span>Question {currentIdx + 1} of {electionData.quizQuestions.length}</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: 'var(--primary)', borderRadius: '3px', transition: 'width 0.3s' }}></div>
            </div>
          </div>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{question.questionText}</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {question.answerOptions.map((opt, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = opt.isCorrect;
              
              let borderColor = 'var(--border-color)';
              let bgColor = 'rgba(255,255,255,0.02)';
              
              if (isSelected && isAnswered) {
                borderColor = isCorrect ? '#10b981' : '#ef4444';
                bgColor = isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)';
              }

              return (
                <button 
                  key={i}
                  onClick={() => !isAnswered && setSelectedOption(i)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    padding: '1.25rem', 
                    borderRadius: '12px',
                    border: `1px solid ${borderColor}`,
                    background: bgColor,
                    color: isSelected && isAnswered ? (isCorrect ? '#10b981' : '#ef4444') : 'var(--text-primary)',
                    textAlign: 'left',
                    cursor: isAnswered ? 'default' : 'pointer',
                    fontSize: '1rem',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ 
                    width: '28px', 
                    height: '28px', 
                    borderRadius: '50%', 
                    background: isSelected && isAnswered ? (isCorrect ? '#10b981' : '#ef4444') : 'rgba(255,255,255,0.1)',
                    color: isSelected && isAnswered ? 'white' : 'var(--text-secondary)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  {opt.answerText}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {isAnswered && (
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem 2rem', gap: '1.5rem', flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#10b981', fontSize: '1.5rem', fontWeight: 700 }}>
                <CheckCircle2 size={32} /> Correct! <PartyPopper size={28} />
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                The Election Commission of India is responsible for conducting free and fair elections.
              </p>
              <button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: 'auto', padding: '1rem' }}
                onClick={() => {
                  const next = (currentIdx + 1) % electionData.quizQuestions.length;
                  setCurrentIdx(next);
                  setIsAnswered(false);
                  setSelectedOption(null);
                }}
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
