exports.install = function install (Vue) {

  // localstorage的存储
  function h5setValue (key, value) {
    if(value){
      if(value.constructor === Object){
        return  window.localStorage.setItem(key, JSON.stringify(value))
      }else {
        return window.localStorage.setItem(key, value)
      }
    }
  }

  // localstorage的查询
  function h5getValue (key) {
    const result = window.localStorage.getItem(key);
    return result;
    if(result){

      if(result.indexOf('{') !== -1 && result.indexOf('}') !== -1 && result.indexOf(',') !== -1){
        return JSON.parse(result);
      }else{
        return result;
      }
    }
  }

  function h5remove (key) {
    window.localStorage.removeItem(key)
  }
  // 替换字符串中指定位置的字符
  function replaceStr (allstr, start, num, changestr) {
    return allstr.substring(0, start - 1) + changestr + allstr.substring(start + num - 1, allstr.length)
  }
  // 获取cookie的值
  function getCookie (key) {
    if (document.cookie.length > 0) {
      let cStart = document.cookie.indexOf('${key}=')
      if (cStart !== -1) {
        cStart = cStart + key.length + 1
        let cEnd = document.cookie.indexOf('', cStart)
        if (cEnd === -1) cEnd = document.cookie.length
          return unescape(document.cookie.substring(cStart, cEnd))
      }
    }
    return ''
  }

  // request中设置header
  function setHeaders (json) {
    Object.keys(json).forEach((key) => {
      Vue.http.headers.common[key] = json[key]
    })
  }

  // 监听各浏览器动画状态，以便回调 type为：animationstart animationiteration animationend
  function prefixedEvent (element, type, callback) {
    callback.bind(this)
    const pfx = ['webkit', 'moz', '']
    for (let p = 0; p < pfx.length; p++) {
      if (!pfx[p]) type = type.toLowerCase()
        element.addEventListener(pfx[p] + type, callback, false)
    }
  }

  // 为了兼容safari中的日期格式转换,而统一做的在月前加上0
  function dateFormate (date) {
    const dates = date.split('-')
    let month = dates[1]
    let day = dates[2]
    if (parseInt(month, 10) < 10) {
      month = '0${month}'
    }
    if (parseInt(day, 10) < 10) {
      day = '0${day}'
    }
    return '${dates[0]}-${month}-${day}'
  }

  // 事件监听
  function eventListener (target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false)
      return {
        remove() {
          target.removeEventListener(eventType, callback, false)
        }
      }
    } else if (target.attachEvent) {
      target.attachEvent('on${eventType}', callback)
      return {
        remove() {
          target.detachEvent('on${eventType}', callback)
        }
      }
    }
  }

  // 判断boolean值
  function coerceBoolean (val) {
    return (typeof val !== 'string' ? val
      : val === 'true' ? true
      : val === 'false' ? false
      : val === 'null' ? false
      : val === 'undefined' ? false : val)
  }

  // 判断是否是函数
  function isFunc (fn) {
    return fn instanceof Function
  }

  // 判断是否是对象
  function isObject (o) {
    return Object.prototype.toString.call(o) === '[object Object]'
  }

  // 获取事件源dom
  function getSource (e) {
    return e.target || e.srcElement
  }
  // 删除vuex get set 
  function removeGS (data) {
    return JSON.parse(JSON.stringify(data))
  }

  // 用原声JS实现对象的深度克隆
  function deepCopy (oldObj) {
    // 定义一个新的空对象
    let newObject = {}
    if (oldObj) {
      if (oldObj.constructor === Object) {
        newObject = new oldObj.constructor()
      } else {
        newObject = new oldObj.constructor(oldObj.valueOf())
      }
      // 遍历克隆原对象属性
      for (const key in oldObj) {
        if (key) {
          if (newObject[key] !== oldObj[key]) {
            if (typeof (oldObj[key]) === 'object') {
              // 对象内部的子对象
              newObject[key] = deepCopy(oldObj[key])
            } else {
              newObject[key] = oldObj[key]
            }
          }
        }
      }
      // 克隆原对象常用的方法
      newObject.toString = oldObj.toString
      newObject.valueOf = oldObj.valueOf

      return newObject
    }
  }
  // 日期格式化
  var formatDate = function (input, format) {
    if (!input || !format) {
      return ''
    }
    input = new Date(new Date(input).getTime() - 8 * 3600 * 1000)
    var date = {
      'M+': input.getMonth() + 1,
      'd+': input.getDate(),
      'h+': input.getHours(),
      'm+': input.getMinutes(),
      's+': input.getSeconds(),
      'q+': Math.floor((input.getMonth() + 3) / 3),
      'S+': input.getMilliseconds()
    }
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (input.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
      }
    }
    return format
  }

  // 添加vue属性
  Object.defineProperties(Vue.prototype, {
    $deepCopy: {
      get() {
        return deepCopy
      }
    },

    $prefixedEvent: {
      get() {
        return prefixedEvent.bind(this)
      }
    },

    $h5setValue: {
      get() {
        return h5setValue
      }
    },

    $h5getValue: {
      get() {
        return h5getValue
      }
    },

    $h5remove: {
      get() {
        return h5remove
      }
    },

    $getCookie: {
      get() {
        return getCookie
      }
    },

    $setHeaders: {
      get() {
        return setHeaders
      }
    },

    $formate: {
      get() {
        return dateFormate
      }
    },

    $listen: {
      get() {
        return eventListener
      }
    },

    $coerceBoolean: {
      get() {
        return coerceBoolean
      }
    },

    $isFunc: {
      get() {
        return isFunc
      }
    },

    $isObject: {
      get() {
        return isObject
      }
    },

    $getSource: {
      get() {
        return getSource
      }
    },
    $removeGS: {
      get() {
        return removeGS
      }
    },
    $formatDate: {
      get: function () {
        return formatDate
      }
    },
    $replaceStr: {
      get: function () {
        return replaceStr
      }
    }

  })

  // 拦截器
  Vue.http.interceptors.push({
    request(request) {

      // TODO
      if (!request.url.match('http')) {
        request.url = 'http://120.55.90.106/web/1.0' + request.url
      }
      return request
    },
    response(response) {
      // TODO
      if (response.status === 200) {
        return response.data
      }
    }
  })
}
=======
exports.install = function install(Vue) {

    // localstorage的存储
    function h5setValue(key, value) {
        window.localStorage.setItem(key, value);
    }

    // localstorage的查询
    function h5getValue(key) {
        return window.localStorage.getItem(key);
    }

    function h5remove(key) {
        window.localStorage.removeItem(key);
    }
    // 替换字符串中指定位置的字符
    function replaceStr(allstr, start, num, changestr){
            return allstr.substring(0, start-1)+changestr+allstr.substring(start + num -1, allstr.length);
    }
    // 获取cookie的值
    function getCookie(key) {
        if (document.cookie.length > 0) {
            let cStart = document.cookie.indexOf('${key}=');
            if (cStart !== -1) {
                cStart = cStart + key.length + 1;
                let cEnd = document.cookie.indexOf('', cStart);
                if (cEnd === -1) cEnd = document.cookie.length;
                return unescape(document.cookie.substring(cStart, cEnd));
            }
        }
        return '';
    }

    // request中设置header
    function setHeaders(json) {
        Object.keys(json).forEach((key) => {
            Vue.http.headers.common[key] = json[key];
        });
    }

    // 监听各浏览器动画状态，以便回调 type为：animationstart animationiteration animationend
    function prefixedEvent(element, type, callback) {
        callback.bind(this);
        const pfx = ['webkit', 'moz', ''];
        for (let p = 0; p < pfx.length; p++) {
            if (!pfx[p]) type = type.toLowerCase();
            element.addEventListener(pfx[p] + type, callback, false);
        }
    }

    // 为了兼容safari中的日期格式转换,而统一做的在月前加上0
    function dateFormate(date) {
        const dates = date.split('-');
        let month = dates[1];
        let day = dates[2];
        if (parseInt(month, 10) < 10) {
            month = '0${month}';
        }
        if (parseInt(day, 10) < 10) {
            day = '0${day}';
        }
        return '${dates[0]}-${month}-${day}';
    }

    // 事件监听
    function eventListener(target, eventType, callback) {
        if (target.addEventListener) {
            target.addEventListener(eventType, callback, false);
            return {
                remove() {
                    target.removeEventListener(eventType, callback, false);
                }
            };
        } else if (target.attachEvent) {
            target.attachEvent('on${eventType}', callback);
            return {
                remove() {
                    target.detachEvent('on${eventType}', callback);
                }
            };
        }
    }

    // 判断boolean值
    function coerceBoolean(val) {
        return (typeof val !== 'string' ? val
         : val === 'true' ? true
         : val === 'false' ? false
         : val === 'null' ? false
         : val === 'undefined' ? false : val);
    }

    // 判断是否是函数
    function isFunc(fn) {
        return fn instanceof Function;
    }

    // 判断是否是对象
    function isObject(o) {
        return Object.prototype.toString.call(o) === '[object Object]';
    }

    // 获取事件源dom
    function getSource(e){
        return e.target||e.srcElement;
    }
    // 删除vuex get set 
    function removeGS(data){
        return JSON.parse(JSON.stringify(data));
    }

    // 用原声JS实现对象的深度克隆
    function deepCopy(oldObj) {
        // 定义一个新的空对象
        let newObject = {};
        if (oldObj.constructor === Object) {
            newObject = new oldObj.constructor();
        } else {
            newObject = new oldObj.constructor(oldObj.valueOf());
        }


        // 遍历克隆原对象属性
        for(const key in oldObj){
            if (newObject[key] !== oldObj[key]) {
                if (typeof(oldObj[key]) === 'object') {
                // 对象内部的子对象
                    newObject[key] =deepCopy(oldObj[key]);
                } else {
                    newObject[key] = oldObj[key];
                }
            }
        }
        // 克隆原对象常用的方法
        newObject.toString = oldObj.toString;
        newObject.valueOf = oldObj.valueOf;

        return newObject;
    }
    // 日期格式化
    function formatDate(input, format) {
        if (!input || !format) {
            return '';
        }
        input = new Date(new Date(input).getTime() - 8 * 3600 * 1000);
        const date = {
            "M+": input.getMonth() + 1,
            "d+": input.getDate(),
            "h+": input.getHours(),
            "m+": input.getMinutes(),
            "s+": input.getSeconds(),
            "q+": Math.floor((input.getMonth() + 3) / 3),
            "S+": input.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (input.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (const k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    }

    // 添加vue属性
    Object.defineProperties(Vue.prototype, {
        $deepCopy: {
            get() {
                return deepCopy;
            }
        },

        $prefixedEvent: {
            get() {
                return prefixedEvent.bind(this);
            }
        },

        $h5setValue: {
            get() {
                return h5setValue;
            }
        },

        $h5getValue: {
            get() {
                return h5getValue;
            }
        },

        $h5remove: {
            get() {
                return h5remove;
            }
        },

        $getCookie: {
            get() {
                return getCookie;
            }
        },

        $setHeaders: {
            get() {
                return setHeaders;
            }
        },

        $formate: {
            get() {
                return dateFormate;
            }
        },

        $listen: {
            get() {
                return eventListener;
            }
        },

        $coerceBoolean: {
            get() {
                return coerceBoolean;
            }
        },

        $isFunc: {
            get() {
                return isFunc;
            }
        },

        $isObject: {
            get() {
                return isObject;
            }
        },

        $getSource: {
            get() {
                return getSource;
            }
        },
        $removeGS:{
            get() {
                return removeGS;
            }
        },
        $formatDate: {
            get() {

                return formatDate;
            }
        },
        $replaceStr: {
            get() {

                return replaceStr;
            }
        },


    });

    // 拦截器
    Vue.http.interceptors.push({
        request(request) {

            // TODO
            request.url='http://localhost:8111/web/1.0'+request.url;
            return request;
        },
        response(response) {
            // TODO
            if(response.status === 200){
                return response.data;
            }
        }
    });
    // Vue.http.interceptors.push((request, next) => {
    //     request.url='http://localhost:8111/web/1.0'+request.url;
    //     next((response) => {
    //         if(response.status === 200){
    //             response = response.data;
    //         }else{
    //             alert('数据获取失败，错误码'+response.status)
    //         }
    //     })
    // })
};
