// tslint:disable-next-line:no-require-imports no-var-requires
const lamlog = require('lamlog');

export const createLogger = (loggerName: string, loglevel?: string) => {
  return new lamlog({
    name: loggerName,
    level: loglevel || process.env.loglevel || 'info',
  });
};
