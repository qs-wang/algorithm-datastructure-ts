
const storage = Symbol('storage');

/**
 * Queue data structure
 */
export class Queue<T> {
  constructor() {
    // tslint:disable-next-line:no-any
    this[storage] = [];
  }

  public isEmpty() {
    // tslint:disable-next-line:no-any
    return !this[storage] || this[storage].length === 0;
  }

  public enqueue(item: T) {
    if (!item) {
      throw new Error('cannot enqueue an undefined item');
    }
    // tslint:disable-next-line:no-any
    this[storage].push(item);
  }

  public dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('Empty queue error');
    }

    // tslint:disable-next-line:no-any
    return this[storage].shift();
  }

  public size() {
    if (this.isEmpty()) {
      return 0;
    }

    return this[storage].length;
  }

  public front() {
    if (this.isEmpty()) {
      throw new Error('Empty queue error');
    }

    // tslint:disable-next-line:no-any
    return this[storage][0];
  }
}
