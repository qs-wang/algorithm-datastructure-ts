import { createLogger } from '../../utils/loggerfacory';
import { LinkedList } from '../LinkedList';

const logger = createLogger('algjs.linkedList.test');

describe('SingleLinkedList', () => {
  it('should append the element', () => {
    const list = new LinkedList<string>();
    list.addLast('hello');
    expect(list.size()).toBe(1);

    logger.debug('LinkedList', list.toString());
  });

  it('should inert the element to position 0', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    expect(list.size()).toBe(3);

    list.add('4', 0);
    expect(list.size()).toBe(4);

    logger.debug('LinkedList', list.toString());
  });

  it('should remote the element at position 0', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    expect(list.size()).toBe(3);
    list.removeAt(0);
    expect(list.size()).toBe(2);
    logger.debug('LinkedList', list.toString());
  });

  it('should remove the element at position 2', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    expect(list.size()).toBe(3);
    list.removeAt(2);
    expect(list.size()).toBe(2);
    expect(list.toString()).toEqual('hello0,hello1,hello2,');
  });

  it('should remove the element at position 2', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    expect(list.size()).toBe(3);
    list.removeAt(1);
    expect(list.size()).toBe(2);
    logger.debug('LinkedList', list.toString());
  });

  it('should get the element at position 1', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    const value = list.getElementAt(1);
    expect(value).toBe('hello1');
  });

  it('should get the element at position 0', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    const value = list.getElementAt(0);
    expect(value).toBe('hello0');
  });

  it('should get the first element', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    const value = list.getFirst();
    expect(value).toBe('hello0');
  });

  it('should get the last element', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    const value = list.getLast();
    expect(value).toBe('hello2');
  });

  it('should get the element at position 2', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    const value = list.getElementAt(2);
    expect(value).toBe('hello2');
  });

  it('cannot get the element at 3', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    try {
      const value = list.getElementAt(3);
      fail();
    } catch (error) {
      //
    }
  });

  it('cannot get the element at -1', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    try {
      const value = list.getElementAt(-1);
      fail();
    } catch (error) {
      //
    }
  });

  it('cannot get the index as 0', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    const value = list.indexOf('hello0');
    expect(value).toBe(0);
  });

  it('cannot get the index as 2', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    const value = list.indexOf('hello2');
    expect(value).toBe(2);
  });

  it('cannot get the index as -1', () => {
    const list = new LinkedList<string>();
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < 3; i++) {
      list.addLast(`hello${i}`);
    }

    const value = list.indexOf('hello5');
    expect(value).toBe(-1);
  });
});
