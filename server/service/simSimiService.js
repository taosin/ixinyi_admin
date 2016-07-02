'use strict'
var BaseService = require('../service/baseService')
var constants = require('../helpers/constants')
var Promise = require('bluebird')
var request = Promise.promisifyAll(require('request'))

class SimSimiService extends BaseService {

  * send (text) {
    var response = yield request.getAsync('http://sandbox.api.simsimi.com/request.p?key=' + constants.SimSimi.KEY + '&lc=ch&ft=1.0&text=' + encodeURI(text))
    var body = JSON.parse(response.body)
    if (body.result == 100) {
      return response.response
    } else {
      return ''
    }
  }

}

module.exports = new SimSimiService('simi')
