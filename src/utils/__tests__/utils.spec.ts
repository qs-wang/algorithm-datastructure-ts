import {createLogger} from '../loggerfacory';
import { defaultToString, loseloseHashCode } from '../utils';

const logger = createLogger('algjs.utils.test');

describe('utils', () => {
  it('should get the string value', () => {
    expect(defaultToString('abcd')).toEqual('abcd');
  });

  it('should generate the hashCode ', () => {
    const hashCode = loseloseHashCode('key');
    logger.info('hashCode', hashCode);

  });
});
