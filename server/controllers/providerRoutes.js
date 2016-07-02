'use strict'

const providerService = require('../service/providerService')

module.exports = function (app) {
  // 获取全部提供服务者信息
  app.get('/yggdrasil/provider', function * (req, res) {
    const providers = yield providerService.getAllProviders()
    const providersInfo = []
    for (let i = 0; i < providers.length; i++) {
      let provider = providers[i]
      let object = {}
      // 提供的服务名
      object.providerName = provider
      const hosts = yield providerService.getChildrenByPath(provider)
      // 节点下的数据，地址数据
      object.hosts = hosts
      object.num = hosts.length
      providersInfo.push(object)
    }
    res.json({
      data: providersInfo
    })
  })

  // 获取指定服务提供者信息
  app.get('/yggdrasil/provider/:path', function * (req, res) {
    const data = yield providerService.getProviderDataByPath(req.params.path)
    res.json(data)
  })
  // 更新指定服务提供者
  app.put('/yggdrasil/provider/:id', function (req, res) {})
  // 删除指定服务提供者
  app.delete('/yggdrasil/provider/:id', function (req, res) {})
}
