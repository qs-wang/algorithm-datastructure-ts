import { createLogger } from '../../utils/loggerfacory';
import { LinkedList } from '../LinkedList';

const logger = createLogger('algjs.linkedList.test');

describe('SingleLinkedList', () => {
  it('should append the element', () => {
    const list = new LinkedList<string>();
    list.append('hello');
    expect(list.length).toBe(1);

    logger.debug('LinkedList', list.toString());
  });

  it('should inert the element to position 0', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.append(`hello${i}`);
    }

    expect(list.length).toBe(3);

    list.insert('4', 0);
    expect(list.length).toBe(4);

    logger.debug('LinkedList', list.toString());
  });

  it('should remote the element at position 0', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.append(`hello${i}`);
    }

    expect(list.length).toBe(3);
    list.remove(0);
    expect(list.length).toBe(2);
    logger.debug('LinkedList', list.toString());
  });

  it('should remote the element at position 2', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.append(`hello${i}`);
    }

    expect(list.length).toBe(3);
    list.remove(2);
    expect(list.length).toBe(2);
    logger.debug('LinkedList', list.toString());
  });

  it('should remote the element at position 2', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.append(`hello${i}`);
    }

    expect(list.length).toBe(3);
    list.remove(1);
    expect(list.length).toBe(2);
    logger.debug('LinkedList', list.toString());
  });

  it('should get the element at position 1', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.append(`hello${i}`);
    }

    const value = list.getValue(1);
    expect(value).toBe('hello1');
  });

  it('should get the element at position 0', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.append(`hello${i}`);
    }

    const value = list.getValue(0);
    expect(value).toBe('hello0');
  });

  it('should get the element at position 2', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.append(`hello${i}`);
    }

    const value = list.getValue(2);
    expect(value).toBe('hello2');
  });

  it('cannot get the element at 3', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.append(`hello${i}`);
    }

    try {
      const value = list.getValue(3);
      fail();
    } catch (error) {
      //
    }
  });
});
