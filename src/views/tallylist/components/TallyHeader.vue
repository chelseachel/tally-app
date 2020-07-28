<template>
  <div class="header">
    <router-link replace tag="div" to="/" class="iconfont iconmenu1"></router-link>
    <div class="iconfont iconswitch" @click="handleShowClick"></div>
  </div>
</template>

<script>
export default {
  name: 'TallyHeader',
  methods: {
    handleShowClick () {
      this.$emit('showmore')
    },
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .header
    position: sticky
    top: 0
    width: 100%
    height: 1.1rem
    background: #fff
    z-index: 99
    .iconmenu1
      height: 1.1rem
      line-height: 1.1rem
      float: left
      margin-left: .38rem
      font-size: .40rem
      color: #aaaab0
    .iconswitch
      height: 1.1rem
      line-height: 1.1rem
      float: right
      margin-right: .26rem
      font-size: .52rem
      color: #aaaab0    
</style>
