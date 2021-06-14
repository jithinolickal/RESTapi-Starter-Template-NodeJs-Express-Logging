  
const { format, createLogger, transports } = require('winston');
const { timestamp, combine, errors, printf } = format;

let errorLogFolderName =  new Date().toLocaleDateString().replace(/\D/g, ''); //creating folders each day

function prodLogger() {
  return createLogger({
    //level: 'info',
    format: combine(
      timestamp(),
      errors({ stack: true }),
      printf(info => {
        return `${info.timestamp} [${info.level}] : ${(info.stack || info.message)}`;
      })
    ),
    transports: [
        new transports.File({ filename: `./logs/${errorLogFolderName}/dailylog.log` })
    ]
  });
}

module.exports = prodLogger;