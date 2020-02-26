<template>
  <div class="item-bg">
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
    <input class="num" type="text" name="num" v-model="num">
    <tally-edit 
    v-show="showEdit" 
    @close="handleCloseItem" 
    @editItem="handleEditItem"
    @delete="handleDeleteItem"
    :existItem="this.item.info" 
    :existPrice="this.item.price"></tally-edit>
  </div>
</template>

<script>
import TallyEdit from './TallyEdit.vue'
export default {
  name: 'TallyItem',
  props: {
    item: Object
  },
  components: {
    TallyEdit
  },
  data () {
    return {
      num: this.item.num,
      touchStatus: false,
      startX: 0,
      translateX:'',
      showEdit: false
    }
  },
  methods: {
    handleTouchStart (e) {
      this.touchStatus = true
      this.startX = e.touches[0].clientX;
      this.lastNum = this.num
    },
    handleTouchMove (e) {
      if(this.touchStatus) {
        const touchX = e.touches[0].clientX
        const disX = touchX > 40 ? this.startX - touchX : this.startX - 40
        if (disX > 0) {
          this.translateX = `transform:translateX(-${disX}px)`
          const add = Math.floor(disX/30)
          this.num = add + this.lastNum        
        } else {
          this.translateX = "transform:translateX(0px)"
        }
      }
    },
    handleTouchEnd () {
      this.translateX = "transform:translateX(0px)"
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
    }
  },
  computed: {
    showPrice: function () {
      return `¥${parseFloat(this.item.price).toFixed(2)}`
    }
  },
  updated () {
    this.item.num = this.num
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
    .num
      width: 10%
      min-width: .9rem
      line-height: 1.2rem
      text-align: center
      color: #fff
      background: transparent
      
</style>
