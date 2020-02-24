<template>
  <div class="item-bg">
    <div 
      class="item-drag" 
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      >
      <div class="item-info">Double Bed</div>
      <div class="item-price">¥5800.00</div>   
    </div>
    <span class="num">0</span>
  </div>
</template>

<script>

export default {
  name: 'TallyItem',
  components: {
  },
  data () {
    return {
      info: '',
      price: '',
      num: '',
      // draggable: true,
      touchStatus: false,
      touchX: 0
    }
  },
  methods: {
    handleTouchStart () {
      this.touchstart = true
    }

    
  }
}
</script>
import
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .item-bg
    position: relative
    width: 100%
    height: 1.2rem
    background: $color1
    display: flex
    overflow: hidden
    &:before
      content: ""
      position: absolute
      top: 0
      width: 100%
      height: 1px
      margin-left: .24rem
      background: #f4f4f4
      z-index: 10
    .item-drag
      flex: 1
      height: 1.2rem
      line-height: 1.2rem
      background: #fff
      display: flex
      z-index: 2      
      .item-info
        flex: 1
        margin-left: .4rem
        text-align: left
      .item-price
        flex: 1
        margin-right: .52rem
        text-align: right
        font-size: .28rem
        color: #D7D7D7
    span
      min-width: .9rem
      line-height: 1.2rem
      text-align: center
      color: #fff
</style>
