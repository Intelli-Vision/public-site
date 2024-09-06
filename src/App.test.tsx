import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import App from './App'; // Import the component to test
const { expect } = require('@jest/globals');

test('renders the App component', () => {
  render(<App />); // Render the App component
  const linkElement = screen.getByText(/hello world/i); // Query for text in the component
  expect(linkElement).toBeInTheDocument(); // Assert that the text is in the document
});
