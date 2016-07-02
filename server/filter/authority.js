/**
 * Created by tangnian on 14/11/19.
 * terminalType 0: PC; 1: mobile
 * sourceType 0: mobile browser; 1:mobile APP
 */
'use strict'
var redisDao = require('../storage/redisDao')
// 映射模型
var checkurls = Object.create(null)
var terminal = ['Macintosh', 'Windows', 'iPhone', 'Linux']
var source = 'Html5Plus/1.0'

var filter = {
  setCrossDomain: function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*')
    res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.append('Access-Control-Allow-Credentials', 'true')
    res.append('Access-Control-Allow-Methods', '*')
    next()
  },

  // 验证登陆权限
  check: function (req, res, next) {
    var path = req.path
    next()
  },

  // 访问信息来源
  getVisitInfo: function (req, res, next) {
    var agent = req.header('user-agent')
    var lowerAgent = ''
    // 0:PC,1:移动
    var terminalType = 1
    if (agent) {
      for (var i = 0; i < 2; i++) {
        if (agent.indexOf(terminal[i]) > -1) {
          terminalType = 0
          break
        }
      }
      if (agent.indexOf(source) > -1) {
        req.sourceType = 1
      } else {
        req.sourceType = 0
      }
      // 判断是否在微信中打开 START
      lowerAgent = agent.toLowerCase()
      if (/micromessenger/.test(lowerAgent)) {
        req.weiXin = 1
      } else {
        req.weiXin = 0
      }
    // 判断是否在微信中打开 END
    }
    req.terminalType = terminalType
    next()
  }

}

module.exports = filter
