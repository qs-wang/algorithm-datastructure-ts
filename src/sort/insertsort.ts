import {createLogger} from '../utils/loggerfacory';

const logger = createLogger('com.qiangswa.algjs.inertSort');

export const insertSort = (values: Number[]) => {
  if (!values || values.length === 0) {
    throw new Error('The values array is empty');
  }

  //don't want to modify the original array
  const sortedValues: Number[] = [...values];

  // tslint:disable-next-line:no-increment-decrement
  for (let i = 1; i < sortedValues.length; i++) {
    // tslint:disable-next-line:no-increment-decrement
    for (let j = i; j > 0; j--) {
      if (sortedValues[j] < sortedValues[j - 1]) {
        //ES6 destructuring op
        [sortedValues[j - 1], sortedValues[j]] = [sortedValues[j], sortedValues[j - 1]];
        logger.debug(`round${i}:${j}`, sortedValues);
      }
    }
  }

  return sortedValues;

};
