/**
 * Created by Hades on 15/3/19.
 * 基础服务类，其他服务类，请继承它
 */
'use strict'
var mongodbDao = require('../storage/mongodbDao')
var redisDao = require('../storage/redisDao')
var commonUtil = require('../helpers/commonUtil')

class BaseService {

  constructor (tableName) {
    this.TABLE_NAME = tableName
  }

  /*
   * 保存
   * @prams:newData object对象
   * @return:Object 保存的对象
   */
  save (newData) {
    return mongodbDao.save(this.TABLE_NAME, newData)
  }

  /*
   * 获取数量
   * @prams:selector  查询条件的数据,可以直接为id的字符串，也可以用object
   * @return:int 数据总数
   */
  getCount (selector) {
    return mongodbDao.getCount(this.TABLE_NAME, selector)
  }

  /*
   * 根据查询条件获取一条信息
   * @prams:selector  查询条件的数据,可以直接为id的字符串，也可以用object
   * @return:Object
   */
  findOne (selector) {
    return mongodbDao.findOne(this.TABLE_NAME, selector)
  }

  /*
   * 根据查询条件获取信息
   * @prams:selector string/object 查询条件的数据,可以直接为id的字符串，也可以用object
   * @prams:sort object             排序参数
   * @return:[Object]
   */
  query (selector, sort) {
    return mongodbDao.query(this.TABLE_NAME, selector, sort)
  }

  /*
   * 删除
   * @prams:selector string/object  查询条件的数据,可以直接为id的字符串，也可以用object
   * @return: int                  被删除的数量
   */
  remove (selector) {
    return mongodbDao.remove(this.TABLE_NAME, selector)
  }

  /*
   * 普通更新 .方式为$set
   * @prams:selector string/object 查询条件的数据,可以直接为id的字符串，也可以用object
   * @prams:newData object          需要更新的数据 ,该处的newData，会被内部$set,所以高级的更新需要借助updateAdv来实现�更新，，,f
   * @prams:multi  boolean        是否批量更新
   * @return: int                 被更新的数量 ,成功就为1, 没有查到就为0。
   */
  update (selector, newData, multi) {
    if (multi) {
      return mongodbDao.updateBatch(this.TABLE_NAME, selector, newData)
    } else {
      return mongodbDao.update(this.TABLE_NAME, selector, newData)
    }
  }

  /*
   * 高级更新，可以运用mongodb的各种高级更新方法
   * @prams:selector string/object 查询条件的数据,可以直接为id的字符串，也可以用object
   * @prams:newData object          需要更新的数据，以及高级更新方法，比如：$inc，$addToSet，$pull等
   * @return: int                 被更新的数量 ,成功就为1, 没有查到就为0。
   */
  updateAdv (selector, newData) {
    return mongodbDao.updateAdv(this.TABLE_NAME, selector, newData)
  }

  /*
   * 获取分页查询
   * @prams:selector string/object 查询条件的数据,可以直接为id的字符串，也可以用object
   * @prams:sort  object             排序
   * @prams:start int              开始的数据下标
   * @prams:limit int              每页的数据数量
   * @return: object.total  int      总数据数
   * @return: object.records  [Object]   返回的数据
   */
  findPagingData (selector, start, limit, sort) {
    var pageRequest = {}
    pageRequest.start = start
    pageRequest.limit = limit
    pageRequest.sort = sort ? sort : {createTime: -1}
    return mongodbDao.findPagingData(this.TABLE_NAME, selector, pageRequest)
  }

  /*
   * 查找并删除， 原子操作
   * @prams:selector string/object 查询条件的数据,可以直接为id的字符串，也可以用object
   * @prams:newData          object 更新的数据
   * @prams:sort object             排序
   * @return:[Object]             返回的更新数据
   */
  findAndModify (selector, newData, sort) {
    return mongodbDao.findAndModify(this.TABLE_NAME, selector, newData, sort)
  }

  /*
   * 查找并删除， 原子操作
   * @prams:selector string/object 查询条件的数据,可以直接为id的字符串，也可以用object
   * @prams:newData          object 更新的数据
   * @prams:sort object             排序
   * @return:[Object]             返回的更新数据
   */
  findAndRemove (selector, sort) {
    return mongodbDao.findAndRemove(this.TABLE_NAME, selector, sort)
  }

  /*
   * 按组查询
   * @prams: keys object        分组键
   * @prams: selector object    查询条件的数据
   * @prams: initial object     表示$reduce函数参数prev的初始值。每个组都有一份该初始值
   * @prams: reduce function    该函数接受两个参数，doc表示正在迭代的当前文档，prev表示累加器文档
   * @return:[Object]           返回查询后的数据
   */
  group (keys, selector, initial, reduce) {
    return mongodbDao.group(this.TABLE_NAME, keys, selector, initial, reduce)
  }

  /*
   * 去重查询
   * @prams: field [string]    需要去重的字段数组
   * @return:[Object]          返回查询后的数据
   */
  distinct (field) {
    return mongodbDao.distinct(this.TABLE_NAME, field)
  }

}

module.exports = BaseService
