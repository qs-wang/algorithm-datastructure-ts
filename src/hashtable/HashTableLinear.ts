// import { createLogger } from '../utils/loggerfacory';
import { loseloseHashCode } from '../utils/utils';
import { Entry } from './Entry';
// const logger = createLogger('ajgjs.HashTableLinkedList');

/**
 * Implements the HashTable datastructure,
 * uses Linear probing for handling colision
 */
export class HashTableLinear<K, V> {
  private table: {
    [key: string]: Entry<K, V>;
  };

  public constructor(private hashFn: (key: K) => number = loseloseHashCode) {
    this.table = {};
  }

  public put(key: K, value: V) {
    if (key && value) {
      const hash = this.hashFn(key);
      const entry = this.table[hash];

      if (!entry) {
        this.table[hash] = new Entry(key, value);
      } else {
        let position = hash + 1;
        while (this.table[position]) {
          position += 1;
        }

        this.table[position] = new Entry(key, value);
      }

      return true;
    }

    return false;
  }

  // tslint:disable-next-line:no-reserved-keywords
  public get(key: K) {
    let hash = this.hashFn(key);
    let entry = this.table[hash];

    while (entry && entry.key !== key) {
      // tslint:disable-next-line:no-increment-decrement
      entry = this.table[hash++];
    }

    if (entry) {
      return entry.value;
    } else {
      return undefined;
    }
  }

  public remove(key: K) {
    let hash = this.hashFn(key);
    let entry = this.table[hash];
    while (entry && entry.key !== key) {
      // tslint:disable-next-line:no-increment-decrement
      entry = this.table[hash++];
    }

    if (entry) {
      this.table[hash] = undefined;

      return true;
    } else {

      return false;
    }
  }

  public * kyes() {
    const keys = Object.keys(this.table);
    for (const key of keys) {
      yield this.table[key].key;
    }
  }
}
