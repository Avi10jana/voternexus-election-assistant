import React, { useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { electionData } from '../data';

const Timeline = () => {
  const [activeId, setActiveId] = useState(4); // Default to 'Voting Day' as per design

  const activeItem = electionData.timeline.find(item => item.id === activeId) || electionData.timeline[0];

  return (
    <div className="timeline-page">
      <header className="page-header">
        <h1><CalendarDays size={24} color="var(--primary)" /> Election Timeline</h1>
        <p>Understand the key stages of an election.</p>
      </header>

      {/* Stage Indicators */}
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', marginBottom: '2rem', position: 'relative' }}>
         {/* Connecting Line */}
         <div style={{ position: 'absolute', top: '50%', left: '4rem', right: '4rem', height: '2px', background: 'rgba(255,255,255,0.05)', transform: 'translateY(-50%)', zIndex: 0 }}></div>
         
         {[1, 2, 3, 4, 5, 6].map((num) => (
           <div key={num} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                background: num === activeId ? 'var(--primary)' : 'var(--card-bg)', 
                border: '2px solid',
                borderColor: num === activeId ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                color: num === activeId ? '#000' : 'var(--text-secondary)'
              }}>
                {num}
              </div>
              <span style={{ fontSize: '0.75rem', color: num === activeId ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                {['Announcement', 'Registration', 'Campaigning', 'Voting Day', 'Counting', 'Results'][num-1]}
              </span>
           </div>
         ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Sidebar List */}
        <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[1, 2, 3, 4, 5, 6].map((num) => {
            const label = ['Announcement of Elections', 'Voter Registration', 'Campaigning Period', 'Voting Day', 'Vote Counting', 'Result Declaration'][num-1];
            return (
              <div 
                key={num} 
                onClick={() => setActiveId(num)}
                style={{ 
                  padding: '1rem', 
                  borderRadius: '12px', 
                  cursor: 'pointer',
                  background: activeId === num ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                  color: activeId === num ? 'var(--primary)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
              >
                <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{num}</span>
                {label}
              </div>
            );
          })}
        </div>

        {/* Detail Pane */}
        <div className="card" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div>
               <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{activeItem.title}</h2>
               <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', lineHeight: 1.6 }}>
                 {activeItem.description}
               </p>
               <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    Voters verify their identity.
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    They receive a ballot or use EVM.
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    Vote is cast in secret.
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    Democracy in action!
                  </li>
               </ul>
            </div>
            
            {/* Mock Illustration */}
            <div style={{ 
              width: '200px', 
              height: '180px', 
              background: 'rgba(99, 102, 241, 0.1)', 
              borderRadius: '20px', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px dashed var(--primary)',
              position: 'relative'
            }}>
               <div style={{ fontSize: '3rem' }}>🗳️</div>
               <div style={{ 
                 position: 'absolute', 
                 bottom: '20px', 
                 background: '#312e81', 
                 color: 'white', 
                 padding: '4px 12px', 
                 borderRadius: '4px', 
                 fontSize: '0.8rem',
                 fontWeight: 800
               }}>VOTE</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
            <button className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }} onClick={() => activeId > 1 && setActiveId(activeId - 1)}>
              <ChevronLeft size={18} /> Previous
            </button>
            <button className="btn-primary" onClick={() => activeId < 6 && setActiveId(activeId + 1)}>
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
