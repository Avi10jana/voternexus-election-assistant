import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Quiz from './pages/Quiz';
import Chat from './pages/Chat';
import Scenarios from './pages/Scenarios';
import Progress from './pages/Progress';
import Map from './pages/Map';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="chat" element={<Chat />} />
          <Route path="scenarios" element={<Scenarios />} />
          <Route path="progress" element={<Progress />} />
          <Route path="map" element={<Map />} />
          {/* Mock routes for undefined pages */}
          <Route path="basics" element={<Navigate to="/" replace />} />
          <Route path="process" element={<Navigate to="/timeline" replace />} />
          <Route path="settings" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
