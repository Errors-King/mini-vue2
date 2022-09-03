import Observer from './observer'

export function initState (vm) {
  let options = vm.$options

  if (options.data) {
    initData(vm)
  }

  if (options.computed) {
    initComputed()
  }

  if (options.watch) {
    initWatch()
  }
}

export function observe (data) {
  if (typeof data !== 'object' || data == null) {
    return
  }
  return new Observer(data)
}

function initData (vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}
  observe(vm._data)
}

function initComputed () {

}
function initWatch () {}

