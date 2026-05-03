import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Layers, CalendarDays, Flag, HelpCircle, TrendingUp, MessageSquare, Settings, Map as MapIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">VN</div>
        <div>
          <h1>VoterNexus</h1>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Advanced Election Hub</span>
        </div>
      </div>
      
      <nav className="nav-menu">
        <NavLink to="/" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} end>
          <Home size={18} /> Home
        </NavLink>
        <NavLink to="/basics" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookOpen size={18} /> Learn Basics
        </NavLink>
        <NavLink to="/process" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Layers size={18} /> Voting Process
        </NavLink>
        <NavLink to="/timeline" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <CalendarDays size={18} /> Timeline
        </NavLink>
        <NavLink to="/scenarios" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Flag size={18} /> Scenarios
        </NavLink>
        <NavLink to="/quiz" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <HelpCircle size={18} /> Quiz
        </NavLink>
        <NavLink to="/map" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <MapIcon size={18} /> Live Map
        </NavLink>
        <NavLink to="/progress" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <TrendingUp size={18} /> Progress
        </NavLink>
        <NavLink to="/chat" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <MessageSquare size={18} /> Ask AI
        </NavLink>
        
        <div style={{ flexGrow: 1 }}></div>
        
        <NavLink to="/settings" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Settings size={18} /> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
