'use strict'
var config = require('./config')
let Server = require('./server/server')
var express = require('express')
var powerExpress = require('power-express')(express)
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var RedisStore = require('connect-redis')(session)
global.logger = require('./server/log/logFactory').getLogger()
// 全局注入ZooKeeper对象
var Promise = require('bluebird')
const ZooKeeper = require('./server/service/zookeeperService')
global.zkClient = new ZooKeeper(config.zookeeperhosts)
var app = powerExpress()
// 微信开发需要开启
// var wechat = require('wechat')
// var weixinService = require('./server/service/weixinService')
var constants = require('./server/helpers/constants')
var authority = require('./server/filter/authority')
var domain = require('domain')
var exception = require('./server/helpers/exception')
var sessionMiddleware = session({
  secret: 'xiegou',
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({
    host: config.redishost,
    port: config.redisport,
    pass: config.redispass
  })
})
app.use(sessionMiddleware)
// 静态资源拦截器，指定静态资源目录
app.use(express.static(__dirname + '/public/dist/'))
app.use(require('./server/filter/accessTrace')())
// App 全局配置
app.use(cookieParser())
// 权限拦截
// app.use(authority.check)
// 设置跨域
app.use(authority.setCrossDomain)
// 设置token验证
app.use(bodyParser.json({
  limit: '1mb'
}))
app.use(bodyParser.urlencoded({
  limit: '1mb',
  extended: true
}))
app.addErrorHandle(function (err, req, res) {
  res.json({
    code: 500,
    data: err.toString()
  })
})
// 注入URL
require('./server/controllers/routes')(app)

var appServer = new Server(app)
appServer.start()
