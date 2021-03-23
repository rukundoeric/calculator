import '@testing-library/jest-dom';
import operate from '../../logic/operate';

it('should return sum of two numbers', () => {
  expect(operate(3, 5, '+')).toBe(8);
  expect(operate(13, 6, '+')).toBe(19);
});

it('should return substraction of two numbers', () => {
  expect(operate(3, 5, '-')).toBe(-2);
  expect(operate(13, 6, '-')).toBe(7);
});

it('should return multiplication of two numbers', () => {
  expect(operate(3, 5, 'x')).toBe(15);
  expect(operate(13, 6, 'x')).toBe(78);
});

it('should return division of two numbers', () => {
  expect(operate(6, 3, '÷')).toBe(2);
  expect(operate(12, 2, '÷')).toBe(6);
  expect(operate(0, 2, '÷')).toBe(0);
  expect(operate(4, 0, '÷')).toBe('INFINITY');
});

it('should null when operation is invalid', () => {
  expect(operate(6, 3, 'dcdcdcdcdc')).toBe(null);
});
