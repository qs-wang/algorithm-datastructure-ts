import { createLogger } from '../../utils/loggerfacory';
import { HashTableLinear } from '../HashTableLinear';

const logger = createLogger('algjs.HashTable.test');

describe('HashTable', () => {
  it('should put/get the key/value', () => {
    const hash = new HashTableLinear();
    expect(hash.put('key', 'hello')).toBeTruthy();

    // tslint:disable-next-line:no-backbone-get-set-outside-model
    const value = hash.get('key');

    expect(value).toEqual('hello');
  });

  it('should remove the key/value', () => {
    const hash = new HashTableLinear();
    expect(hash.put('key', 'hello')).toBeTruthy();

    // tslint:disable-next-line:no-backbone-get-set-outside-model
    const value = hash.remove('key');

    // tslint:disable-next-line:no-backbone-get-set-outside-model
    expect(hash.get('key')).toBeUndefined();
  });

  it('should iterator the keys', () => {
    const hash = new HashTableLinear();
    expect(hash.put('key', 'hello')).toBeTruthy();
    expect(hash.put('key1', 'hello1')).toBeTruthy();

    const [...keys] = hash.kyes();
    expect(keys).toEqual(['key1', 'key']);
  });

  it('should not accept the null key', () => {
    const hash = new HashTableLinear();
    expect(hash.put(undefined, 'hello')).toBeFalsy();

    const [...keys] = hash.kyes();
    expect(keys).toEqual([]);
  });

  it('should not accept the null value', () => {
    const hash = new HashTableLinear();
    expect(hash.put('key', undefined)).toBeFalsy();

    const [...keys] = hash.kyes();
    expect(keys).toEqual([]);
  });

  it('should not get anything with the null key', () => {
    const hash = new HashTableLinear();
    expect(hash.get(undefined)).toBeFalsy();
  });
  it('should not remove anything with the null key', () => {
    const hash = new HashTableLinear();
    expect(hash.remove(undefined)).toBeFalsy();
  });

  it('should handle collision correctly', () => {
    const hash = new HashTableLinear();
    hash.put('FsQ', 'value1');
    hash.put('RIo', 'value2');

    // tslint:disable-next-line:no-backbone-get-set-outside-model
    expect(hash.get('FsQ')).toEqual('value1');

    // tslint:disable-next-line:no-backbone-get-set-outside-model
    expect(hash.get('RIo')).toEqual('value2');

  });

});
