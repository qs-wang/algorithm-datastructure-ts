import { createLogger } from '../../utils/loggerfacory';
import { HashTable } from '../HashTable';

const logger = createLogger('algjs.HashTable.test');

describe('HashTable', () => {
  it('should put/get the key/value', () => {
    const hash = new HashTable();
    expect(hash.put('key', 'hello')).toBeTruthy();

    // tslint:disable-next-line:no-backbone-get-set-outside-model
    const value = hash.get('key');

    expect(value).toEqual('hello');
  });

  it('should remove the key/value', () => {
    const hash = new HashTable();
    expect(hash.put('key', 'hello')).toBeTruthy();

    // tslint:disable-next-line:no-backbone-get-set-outside-model
    const value = hash.remove('key');

    // tslint:disable-next-line:no-backbone-get-set-outside-model
    expect(hash.get('key')).toBeUndefined();
  });

  fit('should iterator the keys', () => {
    const hash = new HashTable();
    expect(hash.put('key', 'hello')).toBeTruthy();
    expect(hash.put('key1', 'hello1')).toBeTruthy();

    const [...keys] = hash.kyes();
    expect(keys).toEqual(['key1', 'key']);
  });

});
