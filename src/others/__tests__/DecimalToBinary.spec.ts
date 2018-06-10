import { createLogger } from '../../utils/loggerfacory';
import { decimalToBinary } from '../DecimalToBinary';

const logger = createLogger('algjs.DecimalToBinary.test');

describe('Decimal to Binary convert', () => {
  it('should get the binary for number 5', () => {
    const binary = decimalToBinary(5);
    expect(binary).toEqual('101');
  });

  it('should return 0 for number 0', () => {
    const binary = decimalToBinary(0);
    expect(binary).toEqual('0');
  });

  it('should return 1 for number 1', () => {
    const binary = decimalToBinary(0);
    expect(binary).toEqual('0');
  });

  it('should get the binary for number 10', () => {
    const binary = decimalToBinary(10);
    expect(binary).toEqual('1010');
  });

  it('should throw error for undefined input', () => {
    try {
      const binary = decimalToBinary(undefined);
      fail();
    } catch (error) {
      logger.error('should throw error', error);
    }
  });

  it('should get the binary for number -10', () => {
    const binary = decimalToBinary(-10);
    expect(binary).toEqual('-1010');
  });
});
