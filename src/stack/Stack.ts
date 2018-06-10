import { createLogger } from '../utils/loggerfacory';

const logger = createLogger('algjs.Stack');

//ES6 Symobol
const storage = Symbol();

/**
 * Stack data structure
 */
export class Stack<T> {
  constructor() {
    logger.info('Initing stack storage');
    this[storage] = [];
  }

  public push(item: T) {
    logger.info('Pushing item to stack');
    if (!item) {
      throw new Error('Cannot push null item');
    }

    return this[storage].push(item);
  }

  public pop() {
    logger.info('Poping item from stack');

    if (this.isEmpty()) {
      throw new Error('Empty stack error');
    }

    return this[storage].pop();
  }

  public top() {
    if (this.isEmpty()) {
      throw new Error('Empty stack error');
    }

    return this[storage][this.size() - 1];
  }

  public size() {
    if (this.isEmpty()) {
      return 0;
    }

    return this[storage].length;

  }
  public isEmpty() {
    return !this[storage] || this[storage].length === 0;
  }

}
