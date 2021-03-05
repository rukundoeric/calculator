import Big from 'big-js';

const operate = (number1, number2, operation) => {
  const num1 = Big(number1);
  const num2 = Big(number2);

  switch (operation.toLowerCase()) {
    case '+':
      return parseFloat(`${num1.plus(num2)}`);
    case '-':
      return parseFloat(`${num1.minus(num2)}`);
    case 'x':
      return parseFloat(`${num1.times(num2)}`);
    case '÷':
      return `${num2}` === '0' ? 'INFINITY' : parseFloat(`${num1.div(num2)}`);

    default:
      return null;
  }
};

export default operate;
