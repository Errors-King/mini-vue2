import Vue from 'vue'
let vm = new Vue({
  el: '#app',
  data () {
    return {
      msg: 'hello',
      num: [1,2,3],
      son: {
        age: 12
      }
    }
  },
  computed: {
  },
  watch: {}
})
vm._data.num[1] = {name: '11'}
vm._data.num[1].name = 'ffff'