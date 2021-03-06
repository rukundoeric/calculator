import operate from './operate';

const calculate = ({
  total,
  next,
  operation,
  calculationPath,
  result: rlt,
}, buttonName) => {
  const result = {};

  switch (buttonName.toLowerCase()) {
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
      result.result = null;
      break;
    case '+/-':
      if (rlt) {
        const res = rlt * -1;
        result.result = res;
        result.next = res;
        result.calculationPath = res;
        result.operation = null;
      } else if (next) {
        const res = parseFloat(next) * -1;
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
    case '%':
      if (rlt) {
        const res = rlt / 100;
        result.result = res;
        result.next = res;
        result.calculationPath = res;
        result.operation = null;
      } else if (next) {
        const res = parseFloat(next) / 100;
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
    case 'ac':
      result.total = 0;
      result.next = '0';
      result.operation = null;
      result.calculationPath = undefined;
      result.result = null;
      break;
    case '=':
      if (operation) {
        const res = operate(total, parseFloat(next), operation);
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
        result.total = operate(total, parseFloat(next), operation);
      } else {
        result.total = parseFloat(next);
      }
      result.result = null;
      result.next = '0';
      result.operation = buttonName;
      result.calculationPath = (!calculationPath ? '0' : calculationPath) + buttonName;
  }
  return result;
};

export default calculate;
