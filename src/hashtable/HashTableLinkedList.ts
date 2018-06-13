// import { createLogger } from '../utils/loggerfacory';
import { LinkedList } from '../linkedlist/LinkedList';
import { loseloseHashCode } from '../utils/utils';
import { Entry } from './Entry';
// const logger = createLogger('ajgjs.HashTableLinkedList');

export class HashTableLinkedList<K, V> {
  private table: {
    [key: string]: LinkedList<Entry<K, V>>;
  };

  public constructor(private hashFn: (key: K) => number = loseloseHashCode) {
    this.table = {};
  }

  public put(key: K, value: V) {
    if (key && value) {
      let list = this.table[this.hashFn(key)];
      if (!list) {
        list = new LinkedList<Entry<K, V>>();
        this.table[this.hashFn(key)] = list;
      }
      list.addFirst(new Entry(key, value));

      return true;
    }

    return false;
  }

  // tslint:disable-next-line:no-reserved-keywords
  public get(key: K) {
    const linkedlist = this.table[this.hashFn(key)];
    if (linkedlist) {
      for (const item of linkedlist) {
        if (item.key === key) {
          return item.value;
        }
      }
    }

    return undefined;
  }

  public remove(key: K) {
    const linkedlist = this.table[this.hashFn(key)];
    if (linkedlist) {
      for (const item of linkedlist) {
        if (item.key === key) {
          linkedlist.remove(item);

          return true;
        }
      }
    }

    return false;
  }

  public * kyes() {
    const keys = Object.keys(this.table);
    for (const key of keys) {
      const linkedlist = this.table[key];
      if (linkedlist) {
        for (const item of linkedlist) {
          yield item.key;
        }
      }
    }
  }
}
