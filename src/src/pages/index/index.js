// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import '@/utils/rem'

import LenSmJs from '@/assets/js/lenovoSmartJsSdk'
window.LenSmJs = LenSmJs;

import { Toast, Cell } from 'mint-ui'
Vue.prototype.$toast = Toast;
Vue.component(Cell.name, Cell)

if(process.env.NODE_ENV !== 'release') {
  const vConsole = require('vconsole');
  new vConsole();
}
Vue.config.productionTip = false

if(navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1) {
  window.addEventListener("resize", function() {
    document.activeElement.scrollIntoView(false)
  })
}
window.refreshView = function(){}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
