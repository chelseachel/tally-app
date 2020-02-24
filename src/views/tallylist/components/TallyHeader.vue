<template>
  <div class="header">
    <div class="iconfont iconmenu1"></div>
    <div class="iconfont iconother"></div>
    <div class="iconfont iconadd1"></div>
  </div>
</template>

<script>

export default {
  name: 'TallyHeader',
  components: {
  }
}
</script>
import
<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .header
    position: fixed
    top: 0
    width: 100%
    height: 1rem
    z-index: 999
    .iconmenu1
      height: 1rem
      line-height: 1rem
      float: left
      margin-left: .36rem
      font-size: .36rem
      color: #aaa
    .iconother
      height: 1rem
      line-height: 1rem
      float: right
      margin-right: .24rem
      font-size: .64rem
      color: #aaa
    .iconadd1
      height: 1rem
      line-height: 1rem
      float: right
      margin-right: .2rem
      font-size: .54rem
      color: #aaa
</style>
