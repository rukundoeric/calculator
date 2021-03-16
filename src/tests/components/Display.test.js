import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Display from '../../components/_display';

test('Display component', () => {
  render(<Display result="234" />);
  expect(screen).toMatchSnapshot();
});
