// import { createLogger } from '../utils/loggerfacory';
import { loseloseHashCode } from '../utils/utils';
import { Entry } from './Entry';

// const logger = createLogger('ajgjs.HashTable');
/**
 * Provides the simple hash table data structure
 * Note: this hash table contains only the simple implementation
 * which has no collision handling at all.
 */
export class HashTable<K, V> {
  private table: {
    [key: string]: Entry<K, V>;
  };

  constructor(protected hashFn: (key: K) => number = loseloseHashCode) {
    this.table = {};
  }

  public put(key: K, value: V) {
    if (key && value) {
      this.table[this.hashFn(key)] = new Entry(key, value);

      return true;
    }

    return false;
  }

  // tslint:disable-next-line:no-reserved-keywords
  public get(key: K) {
    const entry = this.table[this.hashFn(key)];

    return entry ? entry.value : undefined;
  }

  public remove(key: K) {
    const hashCode = this.hashFn(key);
    if (this.table.hasOwnProperty(hashCode)) {
      delete this.table[hashCode];

      return true;
    }

    return false;
  }

  public* kyes() {
    const keys = Object.keys(this.table);
    for (const key of keys) {
      yield this.table[key].key;
    }
  }
}
