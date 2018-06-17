import { createLogger } from '../src/utils/loggerfacory';
const logger = createLogger('algjs.generator.test');

function* generator() {
  // A
  yield 'foo';
  // B
}

function* foo() {
  yield 'foo';
}

// How would we call 'foo' generator inside the 'bar' generator?
function* bar() {
  yield 'bar';
  yield* foo();
  yield 'bar again';
}

function* generatorDataConsumer() {
  // A
  logger.info('Ready to consume!');
  // tslint:disable-next-line:no-constant-condition
  while (true) {
    const input = yield; // B
    logger.info(`Got: ${input}`);
  }
}

describe('the generator', () => {
  fit('should take the input from yield', () => {
    const g = generatorDataConsumer();

    // (2)
    g.next();

    // (3)
    g.next('foo');
    // Got: foo

    g.next();
  });

  it('should show foo', () => {
    const gen = generator();

    logger.info('first next', gen.next());

    logger.info('second next', gen.next());
  });

  it('should do nested yield', () => {
    const b = bar();
    logger.info('first', b.next());
    logger.info('second', b.next());
    logger.info('third', b.next());
    logger.info('forth', b.next());

    logger.info('sixth', b.next());
  });

  it('should loop the iterator', () => {
    for (const e of bar()) {
      logger.info('e', e);
      // bar
      // foo
      // bar again
    }

    logger.info('show as array', [...bar()]); // [ 'bar', 'foo', 'bar again' ]
  });
});
