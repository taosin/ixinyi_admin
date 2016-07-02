var log4js = require('log4js')
var appender = {
  appenders: [{
    type: 'file',
    filename: 'logs/app.log',
    maxLogSize: 10485760,
    numBackups: 30,
    category: 'app'
  }, {
    type: 'file',
    filename: 'logs/error.log',
    maxLogSize: 10485760,
    numBackups: 30,
    category: 'error'
  }, {
    type: 'file',
    filename: 'logs/warn.log',
    maxLogSize: 10485760,
    numBackups: 30,
    category: 'warn'
  }, {
    type: 'dateFile',
    filename: 'logs/access.log',
    pattern: '-yyyy-MM-dd',
    category: 'http'
  }]
}

// 非生产环境，就在console输出日志
if (!(process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'PRODUCTION')) {
  appender.appenders.push({
    type: 'console'
  })
}

log4js.configure(appender)

var appLogger = log4js.getLogger('app')
var errorLogger = log4js.getLogger('error')
var warnLogger = log4js.getLogger('warn')
var accessLogger = log4js.getLogger('http')

exports.getLogger = function () {
  return {
    info: function (text) {
      appLogger.info(text)
    },
    error: function (text) {
      errorLogger.error(text)
    },
    warn: function (text) {
      warnLogger.warn(text)
    },
    access: function (text) {
      accessLogger.debug(text)
    }
  }
}
