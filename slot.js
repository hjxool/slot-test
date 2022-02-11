Vue.component('b-b', {
  data: function () {
    return {
      ddd: 'tyu',
    }
  },
  template: '<h3>{{ddd}}<slot name="before"></slot><p>在这之前</p><p>在这之后</p><slot name="after"></slot></h3>',
})
Vue.component('cc-cc', {
  template: '<h3>dasdasa<slot>备用内容</slot></h3>',
})
let aaa = new Vue({
  el: '#aaa',
  data: {
    ddd: 'qwe',
  },
})
