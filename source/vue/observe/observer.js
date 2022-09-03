import { observe } from './index'
import { newArrayPrototype } from './array'

export function defineReactive(obj, key, value) {
  observe(value)
  Object.defineProperty(obj, key, {
    get() {
      console.log(`获取 ${key}`)
      return value
    },
    set(newValue) {
      observe(newValue)
      console.log(`设置 ${key}`)
      value = newValue
    }
  })
}
class Observer {
  constructor(data) {
    if (Array.isArray(data)) {
      data.__proto__ = newArrayPrototype
    }
    this.walk(data)
  }

  walk(data) {
    let keys = Object.keys(data)
    keys.forEach(key => {
      let value = data[key]
      defineReactive(data, key, value)
    })
  }
}

export default Observer