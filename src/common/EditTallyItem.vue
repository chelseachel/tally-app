<template>
  <div class="container" @click="handleCloseClick">
    <div class="edit-box">
      <div class="edit">
        <input v-model="item" type="text" name="item" placeholder="Item" ref="input">
      </div>
      <div class="edit">
        <input v-model="price" type="number" name="price" placeholder="Price">
      </div>
      <div class="prompt" v-show="showPrompt">请输入有效的内容</div>
      <div class="button-wrapper">
        <button class="remove" @click="handleRemoveClick">REMOVE</button>
        <button class="save" @click="handleSaveClick">SAVE</button>
      </div>
      <div class="close" @click="handleCloseClick"></div>
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
      price: this.existPrice === 0 ? 0 : this.existPrice || '',
      showPrompt: false
    }
  },
  methods: {
    handleCloseClick (e) {
      if (e.target.className === 'container' || e.target.className === 'close') {
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
      if (isNaN(this.price) || this.item.length === 0 || this.price.length === 0) {
        this.showPrompt = true       
      } else {
        this.showPrompt = false
        this.$emit('save-item', this.item, this.price)
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
      width: 86%
      max-width: 8rem
      position: absolute
      left: 50%
      top: 30%
      padding: .84rem .8rem .74rem
      transform: translate(-50%, -50%)
      background: #fff
      border-radius: .2rem
      box-sizing: border-box
      box-shadow: 0 .06rem .2rem -.04rem rgba(18, 22, 33, .1)
      .edit
        margin-bottom: .46rem
        font-weight: 500
        input
          width: 100%
          height: .8rem
          box-sizing: border-box
          padding: 0 .16rem
          border-radius: 0
          border-bottom: 1px solid #efefef
          -webkit-appearance: none
          outline: none
          font-size: .32rem
          color: $color
      .prompt
        position: absolute
        top: 3.2rem
        left: 50%
        transform: translateX(-50%)
        font-size: .26rem
        color: $themeColor
      .button-wrapper
        margin-top: .86rem
        display: flex
        justify-content: space-around
        button
          padding: .12rem .35rem
          border-radius: .68rem
          outline: none
          font-size: .28rem
          color: #fff
        .save
          background: $themeColor
        .remove
          background: #ddd
      .close
        position: absolute;
        top: 10px;
        right: 10px;
        width: 24px;
        height: 24px;
        background: transparent;
        transform: rotate(45deg)
        &:before
          content: ''
          width: 21px
          height: 1px
          background: #ddd
          position: absolute
          top: 10px
        &:after
          content: ''
          width: 1px
          height: 21px
          background: #ddd
          position: absolute
          left: 10px
</style>
