import { addBinaryInteger } from '../binaryAdd';

describe('Binary integer add', () => {
  it('should return 10', () => {
    const result = addBinaryInteger([1], [1]);

    expect(result).toEqual([1, 0]);

  });

  it('should return 0', () => {
    const result = addBinaryInteger([0], [0]);

    expect(result).toEqual([0]);

  });

  it('should return 1', () => {
    const result = addBinaryInteger([1], [0]);

    expect(result).toEqual([1]);

  });

  it('should return 1', () => {
    const result = addBinaryInteger([0], [1]);

    expect(result).toEqual([1]);

  });

  it('should return 10', () => {
    const result = addBinaryInteger([1, 0], [0]);

    expect(result).toEqual([1, 0]);

  });

  it('should return 10', () => {
    const result = addBinaryInteger([1, 1, 1, 1, 1], [1]);

    expect(result).toEqual([1, 0, 0, 0, 0, 0]);

  });

});
