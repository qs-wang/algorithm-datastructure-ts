import { createLogger } from '../../utils/loggerfacory';
import { insertSort } from '../insertSort';

const logger = createLogger('com.qiangswa.algjs.inertSort');
describe('The insert sort', () => {
  it('should sort the array', () => {
    // the variable is from pseducode of the book <introduction to Algorightm>
    const A = [5, 2, 4, 6, 1, 3];

    logger.debug('origin list:', A);

    const result = insertSort(A);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);

  });

  it('should sort the array from excerciese 2.1-1', () => {
    const values = [31, 41, 59, 26, 41, 58];
    logger.debug('origin list:', values);

    const result = insertSort(values);

    expect(result).toEqual([26, 31, 41, 41, 58, 59]);
  });

  it('should throw the error', () => {
    const values = [];
    logger.debug('origin list:', values);

    try {
      const result = insertSort(values);
      fail();
    } catch (error) {
      logger.debug('Throw error', error);
    }
  });
});
