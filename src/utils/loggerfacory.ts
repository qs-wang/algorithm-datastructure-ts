// tslint:disable-next-line:no-require-imports
import lamlog = require('lamlog');

export const createLogger = (loggerName: string, loglevel?: string) => {
  return new lamlog({
    name: loggerName,
    level: loglevel || process.env.loglevel || 'info',
  });
};
