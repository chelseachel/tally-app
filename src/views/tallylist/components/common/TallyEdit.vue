<template>
  <div class="container" @click="handleCloseClick">
    <div class="edit-box">
      <div class="edit">Item
        <input v-model="item" type="text" name="item">
      </div>
      <div class="edit">Price
        <input v-model="price" type="text" name="price">
      </div>
      <div class="prompt" v-show="showPrompt">请输入有效的内容</div>
      <button @click="handleSaveClick">SAVE</button>
      <div class="iconfont icontrash" @click="$emit('delete')"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TallyEdit',
  props: {
    existItem: String, 
    existPrice: [String, Number]
  },
  data () {
    return {
      item: this.existItem || "",
      price: this.existPrice || "",
      showPrompt: false
    }
  },
  methods: {
    handleCloseClick (e) {
      if (e.target.className == 'container') {
        this.$emit('close')
      }
    },
    handleSaveClick () {
      if (isNaN(this.price) || this.item.length == 0 || this.price.length == 0) {
        this.showPrompt = true       
      } else {
        if(this.existItem && this.existPrice) {
          this.showPrompt = false
          this.$emit('editItem', this.item, this.price)
        } else {
          this.showPrompt = false
          this.$emit('saveItem', this.item, this.price)
          this.item = ""
          this.price = ""
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .container
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: rgba(170,170,170,.1)
    z-index: 100
    .edit-box
      width: 90%
      max-width: 8rem
      position: absolute
      left: 50%
      top: 50%
      padding: .8rem
      padding-bottom: .5rem
      transform: translate(-50%, -50%)
      background: #fff
      border-radius: .12rem
      box-sizing: border-box
      box-shadow: 0 .06rem .3rem -.04rem rgba(18, 22, 33, .1);
      .edit
        margin-bottom: .2rem
        line-height: .56rem
        color: #aaa
        input
          width: 100%
          height: .72rem
          border: 1px solid #D7D7D7
          border-radius: .06rem
          box-sizing: border-box
          padding: 0 .12rem
          -webkit-appearance: none
          outline: none
          color: $color
      .prompt
        line-height: .68rem
        color: $themeColor
      button
        width: 1.6rem
        height: .68rem
        display: block
        overflow: hidden
        margin: .68rem auto 0
        background: $themeColor
        border-radius: .06rem
        outline: none
        color: #fff
        letter-spacing: .02rem
      .icontrash
        position: absolute
        top: .24rem
        right: .24rem
        font-size: .5rem
        color: #aaa
</style>
