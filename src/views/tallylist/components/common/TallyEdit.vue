<template>
  <div class="container" @click="handleCloseClick">
    <div class="edit-box">
      <div class="edit">ITEM
        <input v-model="item" type="text" name="item" ref="input">
      </div>
      <div class="edit">PRICE
        <input v-model="price" type="text" name="price">
      </div>
      <div class="prompt" v-show="showPrompt">请输入有效的内容</div>
      <div class="button-wrapper">
        <button class="remove" @click="$emit('delete')">REMOVE</button>
        <button class="save" @click="handleSaveClick">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TallyEdit',
  props: {
    existItem: String, 
    existPrice: Number,
    show: Boolean
  },
  data () {
    return {
      item: this.existItem || '',
      price: this.existPrice == 0 ? 0 : this.existPrice || '',
      showPrompt: false
    }
  },
  methods: {
    handleCloseClick (e) {
      if (e.target.className == 'container') {
        this.$emit('close')
        this.inputLoseFocus()
      }
    },
    handleSaveClick () {
      if (isNaN(this.price) || this.item.length == 0 || this.price.length == 0) {
        this.showPrompt = true       
      } else {
        if((this.existItem || this.existItem == 0) && (this.existPrice || this.existPrice == 0)) {
          this.showPrompt = false
          this.$emit('edit-item', this.item, this.price)
        } else {
          this.showPrompt = false
          this.$emit('save-item', this.item, this.price)
          this.item = ""
          this.price = ""
        }
        this.inputLoseFocus()
      }
    },
    inputLoseFocus() {
      window.scrollTo({
        top: window.pageYOffset,
        behavior: 'smooth',
      })
    }
  },
  watch: {
    show: function () {
      if (this.show) {
        this.$nextTick(function() {
          this.$refs.input.focus()
        }, 100)
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
    background: rgba(170,170,170,.2)
    z-index: 100
    .edit-box
      width: 90%
      max-width: 8rem
      position: absolute
      left: 50%
      top: 40%
      padding: .6rem .9rem
      transform: translate(-50%, -50%)
      background: #fff
      border-radius: .12rem
      box-sizing: border-box
      box-shadow: 0 .06rem .2rem -.04rem rgba(18, 22, 33, .1);
      .edit
        margin-bottom: .2rem
        line-height: .56rem
        font-size: .28rem
        color: #aaa
        input
          width: 100%
          height: .72rem
          border: 1px solid #eee
          border-radius: .06rem
          box-sizing: border-box
          padding: 0 .16rem
          -webkit-appearance: none
          outline: none
          font-family:Avenir, Helvetica, Arial, sans-serif
          color: $color
      .prompt
        line-height: .68rem
        color: $themeColor
      .button-wrapper
        margin-top: .5rem
        display: flex
        justify-content: space-around
        button
          padding: .1rem .36rem
          border-radius: .68rem
          outline: none
          font-size: .28rem
          color: #fff
        .save
          background: $themeColor
        .remove
          background: #D7D7D7
      // .icontrash
      //   position: absolute
      //   top: .24rem
      //   right: .24rem
      //   font-size: .5rem
      //   color: #aaa
</style>
