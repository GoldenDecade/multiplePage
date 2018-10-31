<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <router-view/>
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
    background-color #c6c6c6
</style>
