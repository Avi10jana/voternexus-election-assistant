import React, { useState, useRef, useEffect } from 'react';
import { CalendarDays, CheckCircle2, MessageSquare, Send, Bot, User, BookOpen, AlertTriangle, HelpCircle } from 'lucide-react';
import { electionData } from './data';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hi there! I'm your Election Assistant. Ask me anything about the voting process, registration, or polling places!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < electionData.quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    
    const lowercaseInput = inputValue.toLowerCase();
    let botResponseText = electionData.defaultBotResponse;

    for (const rule of electionData.botResponses) {
      if (rule.keywords.some(keyword => lowercaseInput.includes(keyword))) {
        botResponseText = rule.response;
        break;
      }
    }

    setInputValue('');

    // Simulate slight delay for bot response
    setTimeout(() => {
      const botMessage = { id: Date.now() + 1, type: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Election Assistant</h1>
        <p>Your interactive guide to understanding the election process.</p>
      </header>

      <main className="main-content">
        <section className="glass-panel timeline-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <CalendarDays size={24} color="var(--primary)" />
            <h2>Key Election Dates</h2>
          </div>
          <div className="timeline-container">
            {electionData.timeline.map((item) => (
              <div key={item.id} className="timeline-item">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p style={{ color: '#cbd5e1', marginTop: '0.5rem', fontSize: '0.95rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <CheckCircle2 size={24} color="var(--accent)" />
            <h2>Steps to Vote</h2>
          </div>
          <div className="steps-container">
            {electionData.steps.map((step) => (
              <div key={step.id} className="step-card">
                <div className="step-number">{step.id}</div>
                <div>
                  <h3 style={{ marginBottom: '0.3rem' }}>{step.title}</h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <BookOpen size={24} color="#f59e0b" />
            <h2>Election Vocabulary</h2>
          </div>
          <div className="vocabulary-grid">
            {electionData.vocabulary.map((vocab) => (
              <div key={vocab.id} className="vocab-card">
                <h3 className="vocab-term">{vocab.term}</h3>
                <p className="vocab-definition">{vocab.definition}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <AlertTriangle size={24} color="#ef4444" />
            <h2>Voting Do's and Don'ts</h2>
          </div>
          <div className="dos-donts-container">
            <div className="dos-list">
              <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>Do's</h3>
              <ul>
                {electionData.dosAndDonts.dos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="donts-list">
              <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Don'ts</h3>
              <ul>
                {electionData.dosAndDonts.donts.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <HelpCircle size={24} color="#a855f7" />
            <h2>Knowledge Check</h2>
          </div>
          
          <div className="quiz-container">
            {showScore ? (
              <div className="quiz-score-section">
                <h3>You scored {score} out of {electionData.quizQuestions.length}!</h3>
                <button className="quiz-restart-btn" onClick={restartQuiz}>Try Again</button>
              </div>
            ) : (
              <div className="quiz-question-section">
                <div className="quiz-question-count">
                  <span>Question {currentQuestion + 1}</span>/{electionData.quizQuestions.length}
                </div>
                <div className="quiz-question-text">
                  {electionData.quizQuestions[currentQuestion].questionText}
                </div>
                <div className="quiz-answer-options">
                  {electionData.quizQuestions[currentQuestion].answerOptions.map((option, index) => (
                    <button 
                      key={index} 
                      className="quiz-answer-btn"
                      onClick={() => handleAnswerOptionClick(option.isCorrect)}
                    >
                      {option.answerText}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="glass-panel chat-section">
          <div className="assistant-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <MessageSquare size={24} color="var(--secondary)" />
              <h2>Interactive Assistant</h2>
            </div>
            
            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-bubble-container ${msg.type}`}>
                  <div className={`chat-avatar ${msg.type}`}>
                    {msg.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`chat-bubble ${msg.type}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-container" onSubmit={handleSendMessage}>
              <input 
                type="text" 
                className="chat-input"
                placeholder="Ask about the election process..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
                <Send size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
