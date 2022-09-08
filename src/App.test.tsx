import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Home page content 0800 887 637', () => {
  render(<App />);
  const linkElement = screen.getByText(/0800 887 637/i);
  expect(linkElement).toBeInTheDocument();
});
