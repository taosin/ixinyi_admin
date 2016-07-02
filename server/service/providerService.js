'use strict'
var BaseService = require('../service/baseService')
var Promise = require('bluebird')

class ProviderService {

  // 获取全部的服务提供者
  getAllProviders () {
    return new Promise(function (resolve, reject) {
      zkClient.zk.a_get_children('/', null, function (rc, error, children) {
        if (rc !== 0) {
          reject(error)
        }else {
          resolve(children)
        }
      })
    })
  }

  getChildrenByPath (path) {
    return new Promise(function (resolve, reject) {
      zkClient.zk.a_get_children('/' + path, null, function (rc, error, children) {
        if (rc !== 0) {
          reject(error)
        }else {
          resolve(children)
        }
      })
    })
  }

  // 获取指定服务提供者信息
  getProviderDataByPath (path) {
    return new Promise(function (resolve, reject) {
      zkClient.zk.a_get('/' + path, null, function (rc, error, stat, data) {
        if (rc !== 0) {
          reject(error)
        }else {
          let dataString = ''
          if (data) {
            dataString = data.toString()
          }
          resolve(dataString)
        }
      })
    })
  }

  // 更新指定服务提供者信息
  updateProviderDataByPath (path, data) {
    return new Promise(function (resolve, reject) {
      zkClient.zk.a_set('/' + path, data, -1, function (rc, error, stat) {
        if (rc !== 0) {
          reject(error)
        }else {
          resolve('ok')
        }
      })
    })
  }

}

module.exports = new ProviderService()
