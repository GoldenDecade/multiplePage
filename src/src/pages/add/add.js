// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import '@/utils/rem'
import store from '@/store'

import LenSmJs from '@/assets/js/lenovoSmartJsSdk'
window.LenSmJs = LenSmJs;

import { Toast, Cell, Header, Button } from 'mint-ui'

Vue.component(Header.name, Header);
Vue.prototype.$toast = Toast;
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);

Vue.config.productionTip = false
if(process.env.NODE_ENV !== 'release') {
  const vConsole = require('vconsole');
  new vConsole();
}

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
