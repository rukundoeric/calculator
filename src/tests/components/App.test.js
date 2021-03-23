import '@testing-library/jest-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../../components/App';

afterEach(cleanup);

it('Should match snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});

it('Should display 0 by default', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('display_res')).toHaveTextContent('0');
});

it('Should display number from which the buttons you clicked on.', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_3'));
  fireEvent.click(getByTestId('button_6'));
  expect(getByTestId('display_res')).toHaveTextContent('436');
});

it('Should display calculation path', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_+'));
  fireEvent.click(getByTestId('button_6'));
  expect(getByTestId('display_res')).toHaveTextContent('4+6');
});

it('Should display persentage of entered number', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_0'));
  fireEvent.click(getByTestId('button_%'));
  expect(getByTestId('display_res')).toHaveTextContent('0.4');
});

it('Should display the result of operation:+/- ', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_2'));
  fireEvent.click(getByTestId('button_+/-'));
  expect(getByTestId('display_res')).toHaveTextContent('-42');
});

it('Should display the result of operation:+ ', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_2'));
  fireEvent.click(getByTestId('button_+'));
  fireEvent.click(getByTestId('button_9'));
  fireEvent.click(getByTestId('button_='));
  expect(getByTestId('display_res')).toHaveTextContent('51');
});

it('Should display the result of operation:- ', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_2'));
  fireEvent.click(getByTestId('button_-'));
  fireEvent.click(getByTestId('button_9'));
  fireEvent.click(getByTestId('button_='));
  expect(getByTestId('display_res')).toHaveTextContent('33');
});

it('Should display the result of operation:* ', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_2'));
  fireEvent.click(getByTestId('button_X'));
  fireEvent.click(getByTestId('button_2'));
  fireEvent.click(getByTestId('button_='));
  expect(getByTestId('display_res')).toHaveTextContent('84');
});

it('Should display the result of operation:÷ ', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_2'));
  fireEvent.click(getByTestId('button_÷'));
  fireEvent.click(getByTestId('button_2'));
  fireEvent.click(getByTestId('button_='));
  expect(getByTestId('display_res')).toHaveTextContent('21');
});

it('Should display the result of operation:÷ ', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_2'));
  fireEvent.click(getByTestId('button_÷'));
  fireEvent.click(getByTestId('button_0'));
  fireEvent.click(getByTestId('button_='));
  expect(getByTestId('display_res')).toHaveTextContent('INFINITY');
});

it('Should clear everything and display 0 ', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button_4'));
  fireEvent.click(getByTestId('button_2'));
  fireEvent.click(getByTestId('button_5'));
  expect(getByTestId('display_res')).toHaveTextContent('425');
  fireEvent.click(getByTestId('button_AC'));
  expect(getByTestId('display_res')).toHaveTextContent('0');
});
