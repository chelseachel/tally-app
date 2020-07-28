<template>
  <div class="container" @click="handleCloseClick">
    <div class="edit-box">
      <div class="edit">Item
        <input v-model="item" type="text" name="item" ref="input">
      </div>
      <div class="edit">Price
        <input v-model="price" type="text" name="price">
      </div>
      <div class="prompt" v-show="showPrompt">请输入有效的内容</div>
      <div class="button-wrapper">
        <button class="remove" @click="handleRemoveClick">REMOVE</button>
        <button class="save" @click="handleSaveClick">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditTallyItem',
  props: {
    existItem: String, 
    existPrice: Number
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
    handleRemoveClick () {
      this.$emit('delete')
      this.$emit('close')
      this.inputLoseFocus()
    },
    handleSaveClick () {
      if (isNaN(this.price) || this.item.length == 0 || this.price.length == 0) {
        this.showPrompt = true       
      } else {
        this.showPrompt = false
        this.$emit('save-item', this.item, this.price)
        if((typeof this.existItem !== 'string') || (typeof this.existPrice !== 'number')) {
          this.item = ''
          this.price = ''
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
  mounted () {
    this.$nextTick(function() {
      this.$refs.input.focus()
    }, 100)
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
      padding: .6rem 1rem
      transform: translate(-50%, -50%)
      background: #fff
      border-radius: .12rem
      box-sizing: border-box
      box-shadow: 0 .06rem .2rem -.04rem rgba(18, 22, 33, .1)
      .edit
        margin-bottom: .2rem
        line-height: .56rem
        font-weight: 500
        input
          width: 100%
          height: .72rem
          background: #efefef
          border-radius: .06rem
          box-sizing: border-box
          padding: 0 .16rem
          -webkit-appearance: none
          outline: none
          font-family:Avenir, Helvetica, Arial, sans-serif
          font-size: .28rem
          color: $color
      .prompt
        line-height: .68rem
        color: $themeColor
      .button-wrapper
        margin-top: .56rem
        display: flex
        justify-content: space-around
        button
          padding: .12rem .36rem
          border-radius: .68rem
          outline: none
          font-size: .28rem
          color: #fff
        .save
          background: $themeColor
        .remove
          background: #aaaab0
</style>
