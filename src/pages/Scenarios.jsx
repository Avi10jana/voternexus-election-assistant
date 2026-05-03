import React from 'react';
import { Flag, UserX, Scale, ClipboardList, Flag as FlagIcon } from 'lucide-react';
import { electionData } from '../data';

const iconMap = {
  UserX: <UserX size={32} color="#8b5cf6" />,
  Scale: <Scale size={32} color="#3b82f6" />,
  ClipboardList: <ClipboardList size={32} color="#f59e0b" />,
  Flag: <FlagIcon size={32} color="#10b981" />
};

const Scenarios = () => {
  return (
    <div className="scenarios-page">
      <header className="page-header">
        <h1><Flag size={24} color="#10b981" /> Scenarios</h1>
        <p>Explore real-life situations and understand what happens.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
        {electionData.scenarios.map((s) => (
          <div key={s.id} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.5rem 1.5rem', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
              {iconMap[s.icon]}
            </div>
            <h3 style={{ fontSize: '1rem', lineHeight: 1.4 }}>{s.title}</h3>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
              See Scenario →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scenarios;
