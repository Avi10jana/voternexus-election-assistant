import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Chat from './Chat';

import { vi } from 'vitest';

// Mock the gemini service to return a simple string
vi.mock('../services/geminiService', () => ({
  generateBotResponse: vi.fn(() => Promise.resolve("Mocked bot response")),
}));

describe('Chat Component', () => {
  it('renders initial welcome message', () => {
    render(<Chat />);
    expect(screen.getByText(/Hi there! I'm your Election Assistant/i)).toBeInTheDocument();
  });

  it('allows user to type and send a message', async () => {
    render(<Chat />);
    const input = screen.getByPlaceholderText(/Ask about the election process/i);
    const sendButton = screen.getByRole('button', { name: /Send message/i });

    // Type message
    fireEvent.change(input, { target: { value: 'How do I register?' } });
    expect(input.value).toBe('How do I register?');

    // Send message
    fireEvent.click(sendButton);

    // Message should be displayed
    expect(screen.getByText('How do I register?')).toBeInTheDocument();

    // Input should be cleared
    expect(input.value).toBe('');

    // Wait for bot response
    await waitFor(() => {
      expect(screen.getByText('Mocked bot response')).toBeInTheDocument();
    });
  });
});
