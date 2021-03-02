import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('App component', () => {
  render(<App />);
  const text = screen.getByText(/Calculator App/i);
  expect(text).toBeInTheDocument();
});
