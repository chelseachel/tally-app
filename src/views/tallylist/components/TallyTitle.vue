<template>
  <div class="title">
    <div class="name">Furniture</div>
    <div class="total">¥0.00
      <span class="desc">total</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TallyTitle',
  components: {
  }
}
</script>
import
<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .title
    position: fixed
    top: 1rem
    width: 100%
    height: 1.4rem
    display: flex
    z-index: 999
    .name
      flex: 1
      height: 1.4rem
      line-height: 1.4rem
      margin-left: .4rem
      text-align: left
      font-size: .44rem
      font-weight: 500
    .total
      position: relative
      flex: 1
      height: 1.4rem
      line-height: 1.4rem
      margin-right: .36rem
      text-align: right
      font-size: .36rem
      color: $themeColor
      .desc
        position: absolute
        right: .02rem
        bottom: -.36rem
        font-size: .28rem
        color: #D7D7D7
</style>
