import { observe } from './index'

export function observeInserte (inserteValue) {
  for (let i = 0; i < inserteValue.length; i++) {
    observe(inserteValue[i])
  }
}

export let newArrayPrototype = Object.create(Array.prototype)
let methods = ['push', 'shift', 'pop', 'unshift', 'splice', 'sort', 'reverse']
methods.forEach(method => {
  newArrayPrototype[method] = function (...arg) {
    let res = Array.prototype[method].apply(this, arg)
    let inserteValue
    switch(method) {
      case 'push':
      case 'unshift':
        inserteValue = arg
        break
      case 'splice':
        inserteValue = arg.slice(2)
    }
    observeInserte(inserteValue)
    console.log('修改数组的方法')
    return res
  }
})