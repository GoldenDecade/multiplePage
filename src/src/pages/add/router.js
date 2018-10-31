import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = r => require.ensure([], () => r(require('./hello/HelloWorld1')), 'HelloWorld');
const deviceHint = r => require.ensure([], () => r(require('./deviceHint/deviceHint')), 'deviceHint');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/deviceHint',
      name: 'deviceHint',
      component: deviceHint,
      meta: {
        keepAlive: true
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
