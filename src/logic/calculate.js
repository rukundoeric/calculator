/* eslint-disable no-unused-vars */
const calculate = ({ total, next, operation }, buttonName) => {
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
      break;
    case 'AC':
      result.next = '0';
      result.total = null;
      result.operation = null;
      break;
    default:
      result.num = 0;
  }
  return result;
};

export default calculate;
