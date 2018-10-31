<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style rel="stylesheet" lang="stylus">
  @import "~@/assets/css/common.styl"
  #app
    wh()
    background-color #c6c6c6
</style>
