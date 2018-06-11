import { defaultEquals, IEqualsFunction } from '../utils/utils';

export interface ILinkedList<T> {
  getFirst(): T;
  getElementAt(index: number): T;
  getLast(): T;
  indexOf(element: T);
  removeFirst(): T;
  remove(element: T);
  removeAt(index: number);
  removeLast(): T;
  addFirst(e: T);
  add(e: T, index: number);
  addLast(e: T);
  size(): number;
  clear();
}

/**
 *  Represents the node in the linked list
 */
class LinkedNode<T> {
  public value: T;
  public next: LinkedNode<T>;
  public prev: LinkedNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

/**
 * The linked list data structure
 */
export class LinkedList<T> implements ILinkedList<T> {
  private equalFn: IEqualsFunction<T>;
  private head: LinkedNode<T>;
  // tslint:disable-next-line:variable-name
  private _length: number;

  constructor(equal: IEqualsFunction<T> = defaultEquals) {
    this.head = new LinkedNode(undefined);
    this._length = 0;
    this.equalFn = equal;
  }

  public getFirst(): T {
    if (this._length === 0) {
      throw new Error('Empty list error');
    }

    return this.getElementAt(0);
  }
  public getElementAt(position: number) {
    if (this._length === 0) {
      throw new Error('Empty List error');
    }
    if (position < 0) {
      throw new Error('The position must be greater than or equal zero');
    }

    if (position >= this._length) {
      throw new Error('The position is over the length of the list');
    }

    const curr = this.movePointTo(position);

    return curr.value;
  }

  public getLast(): T {
    return this.getElementAt(this._length - 1);
  }

  public indexOf(element: T) {
    let curr = this.head.next;
    let i = 0;
    while (curr !== undefined && !this.equalFn(curr.value, element)) {
      curr = curr.next;
      // tslint:disable-next-line:no-increment-decrement
      i++;
    }

    if (!curr) {
      return -1;
    }

    return i;
  }

  public removeFirst(): T {
    return this.removeAt(0);
  }

  public remove(element: T) {
    let prev = this.head;
    let curr = this.head.next;

    while (curr !== undefined && !this.equalFn(curr.value, element)) {
      prev = curr;
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    const temp = curr;
    prev.next = temp.next;
    curr.next = undefined;

    this._length -= 1;

    return curr.value;
  }

  public removeLast(): T {
    return this.removeAt(this._length - 1);
  }

  public addFirst(e: T) {
    this.add(e, 0);
  }

  public addLast = (e: T) => {
    this.add(e, this._length - 1);
  }

  public size(): number {
    return this._length;
  }
  public clear() {
    this.head.next = undefined;
    this._length = 0;
  }

  public add = (e: T, position: number) => {

    if (position < -1) {
      throw new Error('The position must be greater than  or equal -1');
    }

    if (position >= this._length) {
      throw new Error('The position is over the length of the list');
    }

    const curr = this.movePointTo(position);

    const temp = curr.next;
    curr.next = new LinkedNode(e);
    curr.next.next = temp;
    this._length += 1;

    return this._length;
  }

  public removeAt = (position: number): T => {

    if (position < 0) {
      throw new Error('The position must be greater than  or equal zero');
    }

    if (position >= this._length) {
      throw new Error('The position is over the length of the list');
    }

    const curr = this.movePointTo(position - 1);

    const temp = curr.next;

    curr.next = temp.next;
    temp.next = undefined;
    this._length -= 1;

    return temp.value;
  }

  public toString() {
    let result = '';
    let curr = this.head.next;
    while (curr !== undefined) {
      // tslint:disable-next-line:prefer-template
      result = result + curr.value.toString() + ',';
      curr = curr.next;
    }

    return result;
  }

  private movePointTo(position: number) {
    let curr = this.head;
    let pos = -1;
    while (pos !== position) {
      curr = curr.next;
      pos += 1;
    }

    return curr;
  }
}
