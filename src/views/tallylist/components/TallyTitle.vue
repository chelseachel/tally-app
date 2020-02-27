<template>
  <div class="title">
    <div class="name">{{name}}</div>
    <div class="total">{{showTotal}}
      <span class="desc">Total</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TallyTitle',
  props: {
    name: String,
    total: Number
  },
  computed: {
    showTotal: function () {
      return `¥${parseFloat(this.total).toFixed(2)}`
    }
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
    padding-bottom: .2rem
    background: #fff
    display: flex
    z-index: 99
    // &:before
    //   content: ""
    //   position: absolute
    //   bottom: 0
    //   width: 100%
    //   height: 1px
    //   box-sizing: border-box
    //   margin-left: .24rem
    //   background: #f4f4f4
    .name
      flex: 1
      height: 1.4rem
      line-height: 1.4rem
      margin-left: .4rem
      text-align: left
      font-size: .48rem
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
        bottom: -.4rem
        font-size: .28rem
        color: #D7D7D7
</style>
