'use strict'
const userAdminRoutes = require('./userAdminRoutes')
const providerRoutes = require('./providerRoutes')
const consumerRouters = require('./consumerRoutes')

module.exports = function (app) {
  userAdminRoutes(app)
  providerRoutes(app)
  consumerRouters(app)
}
