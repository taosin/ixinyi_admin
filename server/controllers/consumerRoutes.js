'use strict'

const consumerService = require('../service/consumerService')
const providerService = require('../service/providerService')

module.exports = function (app) {
  // 获取全部消费者信息
  app.get('/yggdrasil/consumer', function * (req, res) {
    const cs = []
    const consumers = yield * consumerService.getAllConsumer()
    consumers.forEach(function (consumer) {
      let object = {}
      object.host = consumer.consumer
      object.provider = consumer.provider
      cs.push(object)
    })
    res.json({
      data: cs
    })
  })

  // 获取指定消费者信息
  app.get('/yggdrasil/consumer/:id', function (req, res) {})
  // 更新指定消费者
  app.put('/yggdrasil/consumer/:id', function (req, res) {})
  // 删除指定消费者
  app.delete('/yggdrasil/consumer/:id', function (req, res) {})
}
