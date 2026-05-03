import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, Send, Bot, User } from 'lucide-react';
import { generateBotResponse } from '../services/geminiService';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hi there! I'm your Election Assistant. Ask me anything about the voting process, registration, or polling places!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    const responseText = await generateBotResponse(currentInput);
    
    setIsTyping(false);
    const botMessage = { id: Date.now() + 1, type: 'bot', text: responseText };
    setMessages(prev => [...prev, botMessage]);
  };

  return (
    <section className="glass-panel chat-section" aria-labelledby="chat-heading">
      <div className="assistant-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <MessageSquare size={24} color="var(--secondary)" aria-hidden="true" />
          <h2 id="chat-heading">Interactive Assistant</h2>
        </div>
        
        <div className="chat-messages" role="log" aria-live="polite" aria-label="Chat messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-bubble-container ${msg.type}`}>
              <div className={`chat-avatar ${msg.type}`} aria-hidden="true">
                {msg.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className={`chat-bubble ${msg.type}`}>
                <span className="sr-only">{msg.type === 'bot' ? 'Assistant: ' : 'You: '}</span>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="chat-bubble-container bot">
               <div className="chat-avatar bot" aria-hidden="true">
                 <Bot size={16} />
               </div>
               <div className="chat-bubble bot italic" aria-label="Assistant is typing...">
                 ...
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-container" onSubmit={handleSendMessage} aria-label="Chat input form">
          <label htmlFor="chat-input-field" className="sr-only">Type a message</label>
          <input 
            id="chat-input-field"
            type="text" 
            className="chat-input"
            placeholder="Ask about the election process..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
          />
          <button 
            type="submit" 
            className="chat-send-btn" 
            disabled={!inputValue.trim() || isTyping}
            aria-label="Send message"
          >
            <Send size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Chat;
