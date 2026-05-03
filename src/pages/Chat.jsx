import React, { useState } from 'react';
import { MessageSquare, Plus, Trash2, Send, Bot, User, Maximize2, Settings } from 'lucide-react';
import { generateBotResponse } from '../services/geminiService';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hello! 👋 I'm CivicGuide AI, your election learning assistant. How can I help you today?", time: "10:30 AM" },
    { id: 2, type: 'user', text: "How does voting process work?", time: "10:31 AM" },
    { id: 3, type: 'bot', text: "The voting process is simple and secure. Here are the main steps:\n\n1. Voter arrives at the polling booth\n2. Identity is verified\n3. Voter gets a ballot/EVM access\n4. Vote is cast in secret\n5. Vote is recorded\n\nEvery vote counts! 🗳️", time: "10:31 AM" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await generateBotResponse(input);
    
    setMessages(prev => [...prev, { 
      id: Date.now() + 1, 
      type: 'bot', 
      text: response, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }]);
    setIsTyping(false);
  };

  return (
    <div className="chat-page" style={{ display: 'flex', height: 'calc(100vh - 100px)', gap: '1rem' }}>
      {/* Chat Sidebar */}
      <div className="card" style={{ width: '280px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flexShrink: 0 }}>
        <button className="btn-primary" style={{ width: '100%', padding: '0.75rem', gap: '0.75rem' }}>
          <Plus size={18} /> New Chat
        </button>

        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {["What is VoterNexus?", "How does voting work?", "What if I don't vote?", "How are votes counted?"].map((text, i) => (
            <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', padding: '0.5rem', borderRadius: '8px', cursor: 'pointer' }}>
              {text}
            </div>
          ))}
        </div>

        <button style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', cursor: 'pointer', padding: '0.5rem' }}>
          <Trash2 size={16} /> Clear Conversations
        </button>
      </div>

      {/* Main Chat Area */}
      <div className="card" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
        <header style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '8px' }}><MessageSquare size={18} color="#000" /></div>
            <div>
              <h3 style={{ fontSize: '1rem' }}>VoterNexus AI Assistant</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></div> Online
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
            <Maximize2 size={18} />
            <Settings size={18} />
          </div>
        </header>

        <div style={{ flexGrow: 1, padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{ alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
              <div style={{ display: 'flex', gap: '1rem', flexDirection: msg.type === 'user' ? 'row-reverse' : 'row' }}>
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                  background: msg.type === 'bot' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {msg.type === 'bot' ? <Bot size={18} color="var(--primary)" /> : <User size={18} color="white" />}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ 
                    padding: '1rem 1.25rem', borderRadius: '12px', fontSize: '0.95rem', lineHeight: 1.5,
                    background: msg.type === 'user' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.03)',
                    color: msg.type === 'user' ? '#000' : 'var(--text-primary)',
                    whiteSpace: 'pre-line'
                  }}>
                    {msg.text}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{msg.time}</span>
                </div>
              </div>
            </div>
          ))}
          {isTyping && <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Assistant is typing...</div>}
        </div>

        <form onSubmit={handleSend} style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about elections..."
            style={{ flexGrow: 1, background: '#000', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none' }}
          />
          <button type="submit" className="btn-primary" style={{ padding: '1rem', borderRadius: '12px' }}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
