<template>
  <section id="deviceHint" ref="deviceHint">
    <mt-header fixed title="固定在顶部">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <section ref="content" class="content">
      <ul>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
        <li>adsf</li>
      </ul>
    </section>
  </section>

</template>
<style rel="stylesheet" lang="stylus">
  .mint-header
    background-color: #fff
    opacity: 1
  span.mint-toast-text
    color: #fff
  #deviceHint
    position relative
    width: 100%
    height: 100%
    .content
      margin 0
      position absolute
      left 0
      top .4rem
      right 0
      bottom 0
      overflow-y scroll
      ul
        li
          display block
          line-height 40px
</style>
<script type="text/ecmascript-6">
  let toast = null;
  export default {
    data() {
      return {}
    },
    created() {
    },
    methods: {},
    mounted() {

    },
    activated() {
      toast =this.$toast('activated');
      let position = this.$store.state.position;
      this.$nextTick(()=> {
        this.$refs.content.scrollTop = position;
      })
    },

    beforeRouteLeave(to, from, next) {
      this.$store.state.position = this.$refs.content.scrollTop;
      if(to.path === '/') {
        to.meta.keepAlive = true;
      }else {
        to.meta.keepAlive = false;
      }
      next();
    },
    beforeDestroy() {
      if(toast) {
        toast.close();
      }
    },
    components: {}
  }
</script>
