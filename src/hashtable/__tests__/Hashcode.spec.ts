
import randomstring from 'randomstring';
import { createLogger } from '../../utils/loggerfacory';
import { loseloseHashCode } from '../../utils/utils';

const logger = createLogger('algjs.hashcode.test');

describe('loselosehas', () => {
  it('should find collision', () => {

    const first = randomstring.generate(3);
    const hash1 = loseloseHashCode(first);

    let second = randomstring.generate(3);
    let hash2 = loseloseHashCode(second);

    while (hash1 !== hash2) {
      second = randomstring.generate(3);
      hash2 = loseloseHashCode(second);
    }

    logger.info('duplidated:', `${first}, ${second}, ${hash1}`);

  });

  it('should have same hashcode', () =>{
    expect(loseloseHashCode('FsQ')).toEqual(loseloseHashCode('RIo'));
  });
});
