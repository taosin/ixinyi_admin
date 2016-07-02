/**
 * Created by Hades on 15/3/19.
 */
var Db = require('mongodb').Db
var Connection = require('mongodb').Connection
var config = require('../../config')
var Server = require('mongodb').Server
var ReplSet = require('mongodb').ReplSet
var BSON = require('mongodb').BSON
var ObjectID = require('mongodb').ObjectID
var mongoClient = require('mongodb').MongoClient
// 正式环境
var url = ''
if (process.env.NODE_ENV == 'production') {
  var sprintf = require('sprintf-js').sprintf
  url = sprintf('mongodb://%s:%d,%s:%d/%s?replicaSet=%s', config.dbhost1, config.dbport1, config.dbhost2, config.dbport2, config.dbname, config.replSetName)
}

var MongoDbDao = {
  _db: null,

  // dao对象初始化
  init: function (callback) {
    console.info('mongodb instance start..')
    var me = this
    if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'PRODUCTION') {
      mongoClient.connect(url, function (err, db) {
        if (err) {
          console.error('connect err:', err)
        }
        var adminDb = db.admin()
        adminDb.authenticate(config.dbusername, config.dbpwd, function (err, result) {
          if (err) {
            console.error('authenticate err:', err)
          }
          me._db = db
        })
      })
    } else {
      console.info('develop model')
      me._db = new Db(config.dbname, new Server(config.dbhost, config.dbport, {
        auto_reconnect: true
      }, {
        safe: true
      }))
      return new Promise(function (resolve, reject) {
        me._db.open(function (err, db) {
          if (err) {
            console.log('====== mongodb - err ======', err)
            reject(err)
          } else {
            me._db = db
            if (callback) {
              callback()
            }
            resolve(me)
          }
        })
      })
    }
  },

  save: function (collection, data) {
    var currentTime = this.getProcessedCurrentTime()
    if (data && data.length) {
      var _len = data.length
      for (var i = 0; i < _len; i++) {
        data[i].createTime = currentTime
      }
    } else {
      data['createTime'] = currentTime
    }

    return new Promise(function (resolve, reject) {
      this._db.collection(collection).insert(data, {
        w: 1
      }, function (err, datas) {
        if (err) reject(err)
        resolve(datas.ops[0])
      })
    }.bind(this))
  },

  query: function (collection, selector, sort) {
    if (typeof (selector) == 'string') {
      selector = {
        _id: ObjectID.createFromHexString(selector)
      }
    }
    if (!sort) {
      sort = {
        createTime: -1
      }
    }
    this.addDefaultCondition(selector)
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).find(selector).sort(sort).toArray(function (err, datas) {
        if (err) reject(err)
        resolve(datas)
      })
    }.bind(this))
  },

  queryAdv: function (collection, selector, projection, sort) {
    this.addDefaultCondition(selector)
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).find(selector, projection).sort(sort).toArray(function (err, datas) {
        if (err) reject(err)
        resolve(datas)
      })
    }.bind(this))
  },

  findOne: function (collection, selector) {
    if (typeof (selector) == 'string') {
      selector = {
        _id: ObjectID.createFromHexString(selector)
      }
    }
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).findOne(selector, function (err, datas) {
        if (err) reject(err)
        resolve(datas)
      })
    }.bind(this))
  },

  findBySort: function (collection, selector, sort, limit) {
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).find(selector).skip(0).limit(limit - 0).sort(sort).toArray(function (err, datas) {
        if (err) reject(err)
        resolve(datas)
      })
    }.bind(this))
  },

  pagingQuery: function (collection, selector, sort, start, limit) {
    this.addDefaultCondition(selector)
    var sort = sort ? sort : {
      createTime: -1
    }
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).find(selector).sort(sort).skip(start).limit(limit).toArray(function (err, datas) {
        if (err) reject(err)
        resolve(datas)
      })
    }.bind(this))
  },

  /**
   * 获取分页数据
   * @param {String} collection 表名
   * @param (Object) selector 查询过滤条件
   * @param {Object} pageRequest 分页排序信息
   * @returns {*|promise}
   */
  findPagingData: function (collection, selector, pageRequest) {
    var me = this
    me.addDefaultCondition(selector)
    return new Promise(function (resolve, reject) {
      me.getCount(collection, selector).then(function (count) {
        var start = parseInt(pageRequest.start)
        var limit = parseInt(pageRequest.limit)
        return me.pagingQuery(collection, selector, pageRequest.sort, start, limit)
      }).then(function (data) {
        resolve({
          total: data.length,
          records: data
        })
      }).catch(function (err) {
        reject(new Error(err))
      })
    }.bind(this))
  },

  getCount: function (collection, selector) {
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).find(selector).count(function (err, count) {
        if (err) reject(err)
        resolve(count)
      })
    }.bind(this))
  },

  update: function (collection, selector, newData) {
    var currentTime = this.getProcessedCurrentTime()
    if (typeof (selector) == 'string') {
      selector = {
        _id: ObjectID.createFromHexString(selector)
      }
    }
    newData['updateTime'] = currentTime
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).update(selector, {
        $set: newData
      }, {
        w: 1,
        upsert: true
      }, function (err, datas) {
        if (err) reject(err)
        resolve(datas)
      })
    }.bind(this))
  },

  updateAdv: function (collection, selector, updateObj) {
    var currentTime = this.getProcessedCurrentTime()
    if (typeof (selector) == 'string') {
      selector = {
        _id: ObjectID.createFromHexString(selector)
      }
    }
    if (updateObj.$set) {
      updateObj.$set['updateTime'] = currentTime
    } else {
      updateObj['$set'] = {
        updateTime: currentTime
      }
    }
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).update(selector, updateObj, {
        w: 1,
        upsert: true
      }, function (err, data) {
        if (err) reject(err)
        resolve(data)
      })
    }.bind(this))
  },

  updateBatch: function (collection, selector, newData) {
    var currentTime = this.getProcessedCurrentTime()
    newData['updateTime'] = currentTime
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).update(selector, {
        $set: newData
      }, {
        w: 1,
        upsert: false,
        multi: true
      }, function (err, datas) {
        if (err) reject(err)
        resolve(datas)
      })
    }.bind(this))
  },

  remove: function (collection, selector) {
    if (typeof (selector) == 'string') {
      selector = {
        _id: ObjectID.createFromHexString(selector)
      }
    }
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).remove(selector, {
        w: 1
      }, function (err, data) {
        if (err) reject(err)
        resolve(data)
      })
    }.bind(this))
  },

  /**
   * 查询并修改,该操作为一个原子操作
   *  @param remove:boolean 返回之前就删除对象
   *  @param new:true 返回已更改的对象
   *  @param fields 指定返回的字段，默认为全部
   *  @param upsert:boolean 匹配的不存在，就创建并插入数据
   */
  findAndModify: function (collection, selector, newData, sort) {
    var sort = sort ? sort : {
      createTime: -1
    }
    if (typeof (selector) == 'string') {
      selector = {
        _id: ObjectID.createFromHexString(selector)
      }
    }
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).findAndModify(selector, sort, newData, {
        w: 1,
        new: true,
        upsert: true
      }, function (err, data) {
        if (err) reject(err)
        resolve(data)
      })
    }.bind(this))
  },

  /**
   * 查询并删除,该操作为一个原子操作
   */
  findAndRemove: function (collection, selector, sort) {
    var sort = sort ? sort : {
      createTime: -1
    }
    if (typeof (selector) == 'string') {
      selector = {
        _id: ObjectID.createFromHexString(selector)
      }
    }
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).findAndRemove(selector, sort, function (err, data) {
        if (err) reject(err)
        resolve(data)
      })
    }.bind(this))
  },

  distinct: function (collection, field) {
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).distinct(field, function (err, data) {
        if (err) reject(err)
        resolve(data)
      })
    }.bind(this))
  },

  group: function (collection, keys, condition, initial, reduce) {
    return new Promise(function (resolve, reject) {
      this._db.collection(collection).group(keys, condition, initial, reduce, function (err, data) {
        if (err) reject(err)
        resolve(data)
      })
    }.bind(this))
  },

  /**
   * 默认查询加上 isDeleted: false
   * @param {Object} selector 查询参数
   */
  addDefaultCondition: function (selector) {
    // selector['isDeleted'] = false
  },

  /**
   * Mongodb的时间有偏差，加上偏差的时间，得到处理过的当前时间
   * @returns {Date}
   */
  getProcessedCurrentTime: function () {
    var date = new Date()
    var newHour = date.getHours() + 8
    date.setHours(newHour)
    return date
  }
}

MongoDbDao.init()

module.exports = MongoDbDao
