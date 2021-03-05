/* eslint-disable no-unused-vars */
import operate from './operate';

const calculate = ({
  total,
  next,
  operation,
  calculationPath,
}, buttonName) => {
  const result = {};

  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      result.next = next === '0' ? buttonName : next + buttonName;
      result.calculationPath = !calculationPath ? buttonName : calculationPath + buttonName;
      break;
    case 'AC':
      result.next = '0';
      result.total = null;
      result.operation = null;
      break;
    case '=':
      if (total > 0) {
        const res = parseFloat(operate(total, parseFloat(next), operation));
        result.result = res;
        result.next = res;
        result.calculationPath = res;
        result.operation = null;
      } else if (next) {
        const res = parseFloat(next);
        result.result = res;
        result.next = res;
        result.calculationPath = res;
        result.operation = null;
      } else {
        result.result = '0';
        result.next = '0';
        result.calculationPath = '0';
        result.operation = null;
      }
      break;
    default:
      if (operation) {
        result.total = parseFloat(operate(total, parseFloat(next), operation));
      } else {
        result.total = parseFloat(next);
      }
      result.result = null;
      result.next = '0';
      result.operation = buttonName;
      result.calculationPath = calculationPath + buttonName;
  }
  return result;
};

export default calculate;
