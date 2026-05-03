import React from 'react';
import { TrendingUp, Star, Clock, Trophy, Award } from 'lucide-react';
import { electionData } from '../data';

const iconMap = {
  Star: <Star size={24} />,
  Clock: <Clock size={24} />,
  Trophy: <Trophy size={24} />,
  Award: <Award size={24} />
};

const Progress = () => {
  return (
    <div className="progress-page">
      <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1><TrendingUp size={24} color="var(--primary)" /> My Progress</h1>
          <p>Keep learning and level up!</p>
        </div>
        <button className="btn-primary" style={{ background: '#5c25ea' }}>View Detailed Progress</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '1.5rem' }}>
        {/* Overall Progress */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1rem' }}>Overall Progress</h3>
          <div style={{ position: 'relative', width: '120px', height: '120px' }}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#5c25ea" strokeWidth="10" 
                strokeDasharray="314" strokeDashoffset={314 * (1 - 0.72)} strokeLinecap="round" transform="rotate(-90 60 60)" />
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem', fontWeight: 800 }}>72%</div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Great job! Keep going.</p>
        </div>

        {/* Badges */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem' }}>Badges Earned</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexGrow: 1 }}>
            {electionData.badges.map(b => (
              <div key={b.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '50%', 
                  background: `linear-gradient(135deg, ${b.color}44, ${b.color}11)`,
                  border: `2px solid ${b.color}88`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: b.color
                }}>
                  {iconMap[b.icon]}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{b.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Quizzes Taken</span>
            <h2 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>8</h2>
          </div>
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Average Score</span>
            <h2 style={{ fontSize: '1.5rem', marginTop: '0.25rem', color: '#10b981' }}>85%</h2>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Topics Completed</span>
            <h2 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>6/8</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
