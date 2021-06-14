const devLogger = require('./devLogger.js');
const prodLogger = require('./prodLogger.js');

let logger = null;
if (process.env.NODE_ENV === 'development') {
  logger = devLogger();
} else {
  logger = prodLogger();
}

module.exports = logger;