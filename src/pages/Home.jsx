import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Layers, CalendarDays, Flag, CheckCircle } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Banner Area */}
      <div className="banner card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(135deg, #0a0a0a, #111)' }}>
        <div style={{ maxWidth: '60%' }}>
          <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem' }}>Welcome to the Nexus 👋</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>VoterNexus: Your Election Hub</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>The future of civic engagement starts here. Explore, learn, and cast your vote.</p>
          <button className="btn-primary" onClick={() => navigate('/basics')}>Start Exploring →</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', position: 'relative' }}>
           <div style={{ fontSize: '3rem', fontWeight: 800, color: 'white' }}>VOTE</div>
           <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#10b981', borderRadius: '50%', padding: '8px' }}>
              <CheckCircle color="white" size={32} />
           </div>
        </div>
      </div>

      {/* Grid Menu */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
        <div className="card menu-card" onClick={() => navigate('/basics')} style={{ cursor: 'pointer', transition: 'all 0.2s' }}>
          <BookOpen size={24} color="#10b981" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Learn Basics</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Understand the fundamentals of elections.</p>
        </div>
        <div className="card menu-card" onClick={() => navigate('/process')} style={{ cursor: 'pointer', transition: 'all 0.2s' }}>
          <Layers size={24} color="#3b82f6" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Voting Process</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Step-by-step voting journey.</p>
        </div>
        <div className="card menu-card" onClick={() => navigate('/timeline')} style={{ cursor: 'pointer', transition: 'all 0.2s' }}>
          <CalendarDays size={24} color="#f59e0b" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Timeline</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Visualize the entire election process.</p>
        </div>
        <div className="card menu-card" onClick={() => navigate('/scenarios')} style={{ cursor: 'pointer', transition: 'all 0.2s' }}>
          <Flag size={24} color="#a855f7" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Scenarios</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Real-life situations & what happens.</p>
        </div>
      </div>

      {/* Bottom Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem' }}>Your Learning Progress</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>65%</span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '65%', height: '100%', background: 'var(--primary)' }}></div>
          </div>
        </div>
        
        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
           <div>
             <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Continue Learning</span>
             <h3 style={{ fontSize: '1rem' }}>Voting Process - Step 3</h3>
           </div>
           <button className="btn-primary" onClick={() => navigate('/process')} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Continue</button>
        </div>
      </div>

    </div>
  );
};

export default Home;
