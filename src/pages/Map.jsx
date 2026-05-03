import React, { useState } from 'react';
import { Map as MapIcon, MapPin, Info, Search } from 'lucide-react';
import { electionData } from '../data';

const Map = () => {
  const [selectedBooth, setSelectedBooth] = useState(null);

  return (
    <div className="map-page">
      <header className="page-header">
        <h1><MapIcon size={24} color="var(--primary)" /> Live Voting Map</h1>
        <p>Locate polling booths and check real-time attendance density.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2.5rem', height: '600px' }}>
        {/* SVG Map Container */}
        <div className="card" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '1rem' }}>
            <div style={{ flexGrow: 1, position: 'relative' }}>
               <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
               <input 
                 type="text" 
                 placeholder="Search polling booths..." 
                 style={{ width: '100%', background: '#000', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.6rem 1rem 0.6rem 2.5rem', color: 'white', fontSize: '0.85rem' }} 
               />
            </div>
          </div>

          <svg viewBox="0 0 800 600" style={{ width: '100%', height: 'calc(100% - 70px)', background: '#080808' }}>
            {/* Mock Map Contours */}
            <path d="M100 100 Q 200 50 400 100 T 700 150 V 500 Q 500 550 300 500 T 100 450 Z" fill="rgba(16, 185, 129, 0.03)" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="2" />
            <path d="M200 200 L 600 250 L 550 450 L 150 400 Z" fill="rgba(16, 185, 129, 0.02)" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="1" />
            
            {/* Booth Pins */}
            {electionData.mapData.map((booth) => (
              <g 
                key={booth.id} 
                onClick={() => setSelectedBooth(booth)}
                style={{ cursor: 'pointer' }}
                transform={`translate(${booth.x}, ${booth.y})`}
              >
                <circle r={selectedBooth?.id === booth.id ? "12" : "8"} fill={booth.type === 'active' ? 'var(--primary)' : '#555'} opacity="0.3">
                  <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle r="5" fill={booth.type === 'active' ? 'var(--primary)' : '#555'} />
              </g>
            ))}
          </svg>
        </div>

        {/* Sidebar Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ flexGrow: 1 }}>
            {selectedBooth ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px' }}>
                     <MapPin size={24} color="var(--primary)" />
                   </div>
                   <div>
                     <h3 style={{ fontSize: '1.25rem' }}>{selectedBooth.name}</h3>
                     <span style={{ fontSize: '0.85rem', color: selectedBooth.type === 'active' ? 'var(--primary)' : '#ef4444' }}>
                        {selectedBooth.type === 'active' ? '● Open Now' : '○ Closed'}
                     </span>
                   </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                   <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Density</span>
                      <span style={{ fontWeight: 700, color: selectedBooth.density === 'High' ? '#ef4444' : 'var(--primary)' }}>{selectedBooth.density}</span>
                   </div>
                   <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Wait Time</span>
                      <span style={{ fontWeight: 700 }}>{selectedBooth.type === 'active' ? '15-20 min' : 'N/A'}</span>
                   </div>
                </div>

                <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                   <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>Recent Updates</h4>
                   <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                     Voter turnout is increasing. Additional polling officers have been deployed to speed up the verification process.
                   </p>
                </div>

                <button className="btn-primary" style={{ marginTop: 'auto' }}>Navigate to Booth</button>
              </div>
            ) : (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--text-secondary)', gap: '1rem' }}>
                <Info size={48} opacity={0.2} />
                <p>Select a polling booth on the map to view detailed information.</p>
              </div>
            )}
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Map Legend</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                  Active Polling Booth
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#555' }}></div>
                  Closed / Inactive
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
