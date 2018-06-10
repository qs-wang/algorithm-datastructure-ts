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
export class LinkedList<T> {
  private head: LinkedNode<T>;
  // tslint:disable-next-line:variable-name
  private _length: number;

  constructor() {
    this.head = new LinkedNode(undefined);
    this._length = 0;
  }

  public get length() {
    return this._length;
  }

  public append = (value: T) => {
    let curr = this.head;
    while (curr.next !== undefined) {
      curr = curr.next;
    }

    curr.next = new LinkedNode(value);
    this._length += 1;

    return this._length;
  }

  public insert = (value: T, position: number) => {

    if (position < 0) {
      throw new Error('The position must be greater than  or equal zero');
    }

    if (position >= this._length) {
      throw new Error('The position is over the length of the list');
    }

    const curr = this.movePointTo(position);

    const temp = curr.next;
    curr.next = new LinkedNode(value);
    curr.next.next = temp;
    this._length += 1;

    return this._length;
  }

  public remove = (position: number) => {

    if (position < 0) {
      throw new Error('The position must be greater than  or equal zero');
    }

    if (position >= this._length) {
      throw new Error('The position is over the length of the list');
    }

    const curr = this.movePointTo(position);

    const temp = curr.next;

    curr.next = temp.next;
    temp.next = undefined;
    this._length -= 1;

    return this.length;
  }

  public getValue(position: number) {
    if (position < 0) {
      throw new Error('The position must be greater than or equal zero');
    }

    if (position >= this._length) {
      throw new Error('The position is over the length of the list');
    }

    const curr = this.movePointTo(position);

    return curr.next.value;
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
    let pos = 0;
    while (pos !== position) {
      curr = curr.next;
      pos += 1;
    }

    return curr;
  }
}
