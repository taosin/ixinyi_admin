'use strict'
var BaseService = require('../service/baseService')
var Promise = require('bluebird')
var providerService = require('./providerService')

class ConsumerService {

	* getAllConsumer() {
		const providers = yield providerService.getAllProviders()
		const consumers = []
		for (let i = 0; i < providers.length; i++) {
			const provider = providers[i]
			let consumer = yield providerService.getChildrenByPath(provider)
			for (let j = 0; j < consumer.length; j++) {
				consumers.push({
					consumer: consumer[j],
					provider: provider
				})
			}
		}
		return consumers
	}

}

module.exports = new ConsumerService()