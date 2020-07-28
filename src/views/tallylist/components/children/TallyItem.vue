<template>
  <div class="item-bg" :style="{background: this.bgcolor}">
    <div 
      class="item-drag"
      :style="translateX"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleEditClick"
      >
      <div class="item-info">{{item.info}}</div>
      <div class="item-price">{{showPrice}}</div>
    </div>
    <span class="num" ref="num">{{num}}</span>
    <transition name="fade">
      <edit-tally-item
      :key="gernerateId()"
      v-if="showEdit"
      @close="handleCloseItem" 
      @save-item="handleEditItem"
      @delete="handleDeleteItem"
      :existItem="this.item.info" 
      :existPrice="parseFloat(this.item.price)"></edit-tally-item>
    </transition>
  </div>
</template>

<script>
import EditTallyItem from '@/common/EditTallyItem.vue'
export default {
  name: 'TallyItem',
  props: {
    item: Object,
    name: String
  },
  components: {
    EditTallyItem
  },
  data () {
    return {
      num: this.item.num,
      touchStatus: false,  // touchStatus 决定了 X 方向是否产生滑动行为
      firstJudge: true, // touchmove时仅判断一次滑动方向
      startX: 0,
      startY: 0,
      translateX: '',
      showEdit: false,
      timer: null,
    }
  },
  methods: {
    handleTouchStart (e) {
      this.touchStatus = true
      this.startX = e.touches[0].clientX
      this.startY = e.touches[0].clientY
      this.lastNum = this.num
      this.translateX = 'transform:translateX(0px)'
    },
    handleTouchMove (e) {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          if (this.firstJudge) { // 判断一次滑动方向
            this.touchStatus = this.judgeTouchDirX(e) ? true : false
            this.firstJudge = false
          }
          if(this.touchStatus) { // X 方向滑动行为
            // if (e.cancelable) {
            //   e.preventDefault()
            // }
            const numWidth = this.$refs.num.offsetWidth
            const touchX = e.touches[0].clientX
            const disX = touchX > 40 ? touchX - this.startX : 40 - this.startX
            this.translateX = `transform:translateX(${disX}px)`
            if (disX <= 0) {
              const add = Math.floor(-disX/30)
              this.num = add + this.lastNum        
            }
            else if (disX >= 40) {
              this.num = 0
              if (disX >= numWidth) {
                this.translateX = `transform:translateX(${numWidth}px)`
              }
            }
          }
          this.timer = null
          clearTimeout(this.timer)
        }, 16) 
      }
    },
    handleTouchEnd () {
      this.translateX = 'transform:translateX(0px);transition:all .2s ease'
      this.touchStatus = false
      this.firstJudge = true
    },
    judgeTouchDirX (e) {
      const touchX = e.touches[0].clientX
      const touchY = e.touches[0].clientY
      const x = touchX - this.startX
      const y = touchY - this.startY
      if (Math.abs(x) >= Math.abs(y)) {
        return true // 判断为 x 方向的 move 行为
      } else {
        return false
      }
    },
    handleEditClick () {
      this.showEdit = true
    },
    handleCloseItem () {
      this.showEdit = false
    },
    handleEditItem (info, price) {
      this.item.info = info
      this.item.price = price
      this.showEdit = false
    },
    handleDeleteItem () {
      this.showEdit = false
      this.$emit('delete')
    },
    gernerateId () {
      let id = this.item.info + this.name
      return id
    }
  },
  computed: {
    showPrice: function () {
      return `¥${parseFloat(this.item.price).toFixed(2)}`
    },
    bgcolor: function() {
      let bg
      if (this.num >= 0) {
        bg = '#FFCC62'
        if (this.num >= 2) {
          bg = '#FFA655'
          if (this.num >= 4) {
            bg = '#FF8951'
            if (this.num >= 6) {
              bg = '#FE7350'
              if (this.num >= 8) {
                bg = '#FF5551'
              }
            }
          }
        }
      }
      return bg
    }
  },
  updated () {
    this.item.num = this.num
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
  .item-bg
    position: relative
    width: 100%
    height: 1.2rem
    background: #FFCC62
    display: flex
    overflow: hidden
    .item-drag
      position: relative
      flex: 1
      height: 1.2rem
      line-height: 1.2rem
      background: #fff
      box-sizing: border-box
      border-bottom: 1px solid #fafafa
      font-size: .32rem
      display: flex
      z-index: 2
      &:before
        content: ''
        position: absolute
        left: -15%
        width: 15%
        height: 1.2rem  
        background: #fff 
      .item-info
        flex: 1
        margin-left: .4rem
        text-align: left
        ellipsis()
      .item-price
        flex: 1
        margin-right: .52rem
        text-align: right
        font-size: .28rem
        color: #D7D7D7
        ellipsis()
    .num
      width: 12%
      min-width: .95rem
      line-height: 1.2rem
      text-align: center
      font-size: .36rem
      font-weight: 500
      color: #fff
      background: transparent
    .fade-enter-active
    .fade-leave-active
      transition: opacity .3s ease
    .fade-enter
    .fade-leave-to
      opacity: 0
</style>
