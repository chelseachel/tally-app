<template>
  <div class="header">
    <router-link tag="div" to="/" class="iconfont iconmenu1"></router-link>
    <div class="iconfont iconswitch" @click="handleShowClick"></div>
  </div>
</template>

<script>
export default {
  name: 'TallyHeader',
  methods: {
    handleShowClick () {
      this.$emit('showmore')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .header
    position: sticky
    top: 0
    width: 100%
    height: 1rem
    background: #fff
    z-index: 99
    .iconmenu1
      height: 1rem
      line-height: 1rem
      float: left
      margin-left: .36rem
      font-size: .36rem
      color: #aaa
    .iconswitch
      height: 1rem
      line-height: 1rem
      float: right
      margin-right: .24rem
      font-size: .46rem
      color: #aaa     
</style>
