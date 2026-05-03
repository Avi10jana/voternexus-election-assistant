import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders without crashing and displays the brand name', () => {
    render(<App />);
    const brandElements = screen.getAllByText(/VoterNexus/i);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  it('renders the sidebar navigation', () => {
    render(<App />);
    expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Timeline/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Quiz/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Ask AI/i).length).toBeGreaterThan(0);
  });

  it('renders the home page banner', () => {
    render(<App />);
    expect(screen.getByText(/VoterNexus: Your Election Hub/i)).toBeInTheDocument();
    expect(screen.getByText(/Start Exploring/i)).toBeInTheDocument();
  });
});
