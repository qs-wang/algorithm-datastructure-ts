import { Stack } from '../Stack';

describe('String stack', () => {
  it('should push the item to stack', () => {
    const stack = new Stack();
    stack.push('hello');

    expect(stack.top()).toEqual('hello');

  });

  it('should pop the last pushed element from stack', () => {
    const stack = new Stack();
    stack.push('hello');
    stack.push('last');

    expect(stack.top()).toEqual('last');

  });

  it('should throw empty error', () => {
    const stack = new Stack();

    try {
      stack.pop();
      fail();
    } catch (error) {
      //
    }
  });

  it('should get the right size', () => {
    const stack = new Stack();

    expect(stack.size()).toBe(0);

    stack.push('hello');

    expect(stack.size()).toBe(1);

    stack.push('second');
    stack.push('third');

    expect(stack.size()).toBe(3);
  });

  it('should check the empty correctly', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();

    stack.push('hello');
    stack.push('second');
    stack.push('third');

    expect(stack.isEmpty()).toBeFalsy();
  });

  it('should leave an empty statck', () => {
    const stack = new Stack();

    stack.push('hello');
    stack.push('second');
    stack.push('third');

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.isEmpty()).toBeTruthy();
  });

});
