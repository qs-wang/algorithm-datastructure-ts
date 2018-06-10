import { Queue } from '../Queue';
describe('Queue', () => {
  it('should return the one item', () => {
    const queue = new Queue();
    queue.enqueue('hello');
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toEqual('hello');
    expect(queue.size()).toBe(0);
  });

  it('should return the one item', () => {
    const queue = new Queue();
    queue.enqueue('hello');
    queue.enqueue('2');
    expect(queue.dequeue()).toEqual('hello');
    expect(queue.size()).toBe(1);
  });

  it('should throw the error', () => {
    try {
      const queue = new Queue();
      expect(queue.isEmpty()).toBeTruthy();
      queue.dequeue();
      fail();
    } catch (error) {
      //
    }
  });
});
