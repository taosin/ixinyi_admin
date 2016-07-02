/**
 * Created by Hades on 14/10/10.
 */

var utils = {

  /**
   * 从请求里面获取 参数的json格式
   *
   * @param {*} obj
   * @return {Boolean}
   */
  getJson: function (req, params) {
    var body = req.query
    if (body && Object.keys(body).length === 0) {
      body = req.body
    }
    var json = {}
    params.forEach(function (key) {
      if (body && body[key]) {
        json[key] = body[key]
      }
    })
    return json
  },

  /**
   * 是否是字符串
   *
   * @param {*} obj
   * @return {Boolean}
   */
  isString: function (str) {
    return typeof (str) === 'string'
  },

  /**
   * 是否是布尔值
   *
   * @param {*} obj
   * @return {Boolean}
   */
  isBoolean: function (bool) {
    return typeof (bool) === 'boolean'
  },

  /**
   * 是否是数字
   *
   * @param {*} obj
   * @return {Boolean}
   */
  isNumber: function (num) {
    return typeof (num) === 'number' && !isNaN(num)
  },

  /**
   * 是否函数
   *
   * @param {*} obj
   * @return {Boolean}
   */
  isFunc: function (fn) {
    return fn instanceof Function
  },

  /**
   * 是否Generator函数
   *
   * @param {*} function
   * @return {Boolean}
   */
  isGenerator: function (func) {
    return typeof (func === 'function') && (func.constructor.name === 'GeneratorFunction')
  },

  /**
   * 是否数组
   *
   * @param {*} obj
   * @return {Boolean}
   */
  isArray: function (obj) {
    return Array.isArray(obj)
  },

  /**
   * 是否对象
   * for plain JavaScript objects.
   *
   * @param {*} obj
   * @return {Boolean}
   */
  isObject: function (o) {
    return Object.prototype.toString.call(o) === '[object Object]'
  },

  /**
   * 设置不可枚举的类属性
   *
   * @param {Object} obj
   * @param {String} key
   * @param {*} val
   */
  defineProperty: function (obj, key, val) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: false,
      writable: true,
      configurable: true
    })
  }

}

module.exports = utils
