
/**
 * 返回数据原始类型
 * @param value
 * @return { 'string' | 'array' | 'boolean' | 'number' | 'object' | 'function' } type
 */
export function getValueType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

/**
 * 是否数组
 */
export function isArr(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  }
  return Object.prototype.toString.call(value) === '[object Array]'
}
/**
 * 判断是否为空
 */
export function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) { return true }
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (value === 0 || isNaN(value)) return true
      break
    case 'object':
      if (value === null || value.length === 0) return true
      for (const i in value) {
        return false
      }
      return true
  }
  return false
}
/**
 * 判断是否为空 0不是空
 */
export function isEmpty(value) {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) { return true }
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (isNaN(value)) return true
      break
    case 'object':
      if (value === null || value.length === 0) return true
      for (const i in value) {
        return false
      }
      return true
  }
  return false
}

/**
 * @description 深度克隆
 * @param {object} obj 需要深度克隆的对象
 * @returns {*} 克隆后的对象或者原值（不是对象）
 */
export function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj
  }

  const o = isArr(obj) ? [] : {}
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return o
}
/**
 * 截取字符串
 * str 原始字符
 * len 限制长度
 */
export function cutString(str, len) {
  if (str.length * 2 <= len) {
    return str
  }
  var strlen = 0
  var s = ''
  for (var i = 0; i < str.length; i++) {
    s = s + str.charAt(i)
    if (str.charCodeAt(i) > 128) {
      strlen = strlen + 2
      if (strlen >= len) {
        return s.substring(0, s.length - 1) + '...'
      }
    } else {
      strlen = strlen + 1
      if (strlen >= len) {
        return s.substring(0, s.length - 2) + '...'
      }
    }
  }
  return s
}


/**
 * @description 格式化后端返回的数据
 * @param 原始数据
 * @returns 1：空、null、undefined 返回'-'； 2：0、数据 返回 0、数据；
 */
export function formatEmptyVal(val) {
  if (isEmpty(val)) {
    return '-'
  } else {
    return val
  }
}

export function reservePoint(num, point = 4, type = 'round') {
  const pow = Math.pow(10, point)
  if (type === 'floor') {
    return Math.floor(num * pow) / pow
  } else if (type === 'round') {
    return Math.round(num * pow) / pow
  }
}

/**
 * @description 字符串url取值
 * @param {*} str  带参数url字符串 http://baidu.com?A=xxx
 * @param {*} name 取得key值 A
 * @returns
 */
export function getUrlParam(str, name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  var r = str.split('?')[1].match(reg) // 匹配目标参数
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null // 返回参数值
}
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier)
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
export function guid(len = 32, firstU = true, radix = null) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  radix = radix || chars.length

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    let r
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift()
    return `u${uuid.join('')}`
  }
  return uuid.join('')
}
/**
 *@description 用于卡住延迟加载
 * @return
 */
 export function sleep(time = 400) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}