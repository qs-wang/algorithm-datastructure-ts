import { Stack } from '../stack/Stack';
// import { createLogger } from '../utils/loggerfacory';
// import { addBinaryInteger } from './binaryAdd';

// const logger = createLogger('algjs.DecimalToBinary');

const positiveDecimalToBinary = (decimal: number) => {

  const stack = new Stack();
  let remaining = decimal;

  do {
    const bit = remaining % 2;
    remaining = Math.floor(remaining / 2);

    stack.push(bit.toString());
  } while (remaining > 0);

  let binary: string = '';

  while (!stack.isEmpty()) {
    binary += stack.pop();
  }

  return binary;
};

export const decimalToBinary = (decimal: number) => {
  if (!Number.isInteger(decimal)) {
    throw new Error('undefined decimal input error');
  }

  if (decimal >= 0) {
    return positiveDecimalToBinary(decimal);
  } else {
    const result =  positiveDecimalToBinary(-decimal);

    return  `-${result}`;
  }
};
