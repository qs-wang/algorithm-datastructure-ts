export type IEqualsFunction<T> = (a: T, b: T) => boolean;

export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}

// tslint:disable-next-line:no-any
export function defaultToString(item: any): string {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  }

  return item.toString();
}

export function defaultToHashCode<K>(key: K) {

  if (typeof key === 'number') {
    return key;
  }
  const tableKey = defaultToString(key);
  let hash = 0;
  // tslint:disable-next-line:no-increment-decrement
  for (let i = 0; i < tableKey.length; i++) {
    hash += tableKey.charCodeAt(i);
  }

  return hash % 37;
}
