export function defineReactive (obj, key, value) {
  Object.defineProperty(obj, key, {
    get () {
      return value
    },
    set (newValue) {
      this[key] = newValue
    }
  })
}
class Observer {
  constructor(data) {
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