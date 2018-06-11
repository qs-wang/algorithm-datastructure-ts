/**
 * The entry presents the key/value pair in a HashMap
 */
export class Entry<K, V> {
  constructor(public key: K, public value: V) {
  }

  public toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}
