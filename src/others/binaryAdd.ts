const addOneBit = (bitA: number, bitB: number) => {
  if (bitA > 1 || bitB > 1 || bitA < 0 || bitB < 0) {
    throw new Error('bitA/bitB can only be 0/1');
  }

  let amount = bitA + bitB;
  let carry = 0;
  if (amount === 2) {
    amount = 0;
    carry = 1;
  }

  return [amount, carry];
};

/**
 * Add 2 binary number.
 * Example: [1][1] + [1][0] = [1][0][1]
 */

export const addBinaryInteger = (binaryA: number[], binaryB: number[]) => {
  if (!binaryA || !binaryB || binaryA.length === 0 || binaryB.length === 0) {
    throw new Error('input parameters are not valid binary value');
  }

  let i = binaryA.length - 1;
  let j = binaryB.length - 1;

  let sum: number[] = [];

  let carry = 0;
  // tslint:disable-next-line:no-increment-decrement ban-comma-operator
  for (; i >= 0 && j >= 0; i-- , j--) {
    const result = addOneBit(binaryA[i], binaryB[j]);
    sum = [result[0], ...sum];
    carry = result[1];
  }

  if (i >= 0) {
    // tslint:disable-next-line:no-increment-decrement
    for (let k = i; k >= 0; k--) {
      const result = addOneBit(binaryA[k], carry);
      sum = [result[0], ...sum];
      carry = result[1];
    }
  }

  if (j >= 0) {
    // tslint:disable-next-line:no-increment-decrement
    for (let k = j; k >= 0; k--) {
      const result = addOneBit(binaryB[k], carry);
      sum = [result[0], ...sum];
      carry = result[1];
    }
  }

  if (carry !== 0) {
    sum = [carry, ...sum];
  }

  return sum;
};
