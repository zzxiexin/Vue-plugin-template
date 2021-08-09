import Vue from 'vue'
import App from './App.vue'
import Toast from 'vue-toast-plugin_test'
Vue.use(Toast)
new Vue({
  el: '#app',
  render: h => h(App)
})
