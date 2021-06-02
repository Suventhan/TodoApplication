import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add Todo button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add Todo/i);
  expect(buttonElement).toBeInTheDocument();
});
