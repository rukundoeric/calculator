import '@testing-library/jest-dom';
import calculate from '../../logic/calculate';

const initialState = {
  total: 0,
  next: '0',
  operation: null,
  calculationPath: undefined,
  result: null,
};

it('should return new state when buttonName is 1,2,3,4,5,6,7,8,9 or .', () => {
  const state1 = calculate({ ...initialState }, '1');
  const state2 = calculate({ ...initialState }, '9');
  expect(typeof state1).toBe('object');
  expect(state1.next).toBe('1');
  expect(typeof state2).toBe('object');
  expect(state2.next).toBe('9');
});

it('should return new state when buttonName is +/-', () => {
  const state1 = calculate({ ...initialState, next: '-10' }, '+/-');
  const state2 = calculate({ ...initialState, next: '20' }, '+/-');
  const state3 = calculate({ ...initialState, result: '20' }, '+/-');
  const state4 = calculate({ ...initialState, next: null }, '+/-');
  expect(typeof state1).toBe('object');
  expect(typeof state2).toBe('object');
  expect(typeof state3).toBe('object');
  expect(state1.operation).toBe(null);
  expect(state1.next).toBe(10);
  expect(state2.next).toBe(-20);
  expect(state3.result).toBe(-20);
  expect(state4.next).toBe('0');
});

it('should return new state when buttonName is %', () => {
  const state1 = calculate({ ...initialState }, '%');
  const state2 = calculate({ ...initialState, calculationPath: '20', next: '20' }, '%');
  const state3 = calculate({ ...initialState, result: '20' }, '%');
  const state4 = calculate({ ...initialState, next: null }, '%');
  expect(typeof state1).toBe('object');
  expect(state1.next).toBe(0);
  expect(state2.next).toBe(0.2);
  expect(state3.result).toBe(0.2);
  expect(state4.next).toBe('0');
});

it('should return new state when buttonName is ac', () => {
  const state1 = calculate({ ...initialState }, 'ac');
  const state2 = calculate({ ...initialState, calculationPath: '20', next: '20' }, 'ac');
  expect(typeof state1).toBe('object');
  expect(state1.next).toBe('0');
  expect(state1.calculationPath).toBe(undefined);
  expect(state2.next).toBe('0');
  expect(state2.calculationPath).toBe(undefined);
});

it('should return new state when buttonName is =', () => {
  const state1 = calculate({ ...initialState }, '=');
  const state2 = calculate({ ...initialState, calculationPath: '20', next: '20' }, '=');
  const state3 = calculate({ ...initialState, next: null }, '=');
  expect(typeof state1).toBe('object');
  expect(typeof state2).toBe('object');
  expect(typeof state3).toBe('object');
  expect(state1.result).toBe(0);
  expect(state2.result).toBe(20);
  expect(state3.next).toBe('0');
});

it('should return new state when buttonName is -, +, * or /', () => {
  const state1 = calculate({ ...initialState }, '-');
  const state2 = calculate({ ...initialState, calculationPath: '20' }, '-');
  const state3 = calculate({ ...initialState, calculationPath: '550' }, '+');
  const state4 = calculate({ ...initialState, operation: '+' }, '+');
  expect(typeof state1).toBe('object');
  expect(typeof state2).toBe('object');
  expect(typeof state3).toBe('object');
  expect(typeof state4).toBe('object');
  expect(state1.operation).toBe('-');
  expect(state2.operation).toBe('-');
  expect(state2.calculationPath).toBe('20-');
  expect(state3.operation).toBe('+');
  expect(state3.calculationPath).toBe('550+');
});
