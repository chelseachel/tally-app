<template>
  <div class="container" @click="handleCloseClick">
    <input class="list-name" ref="input" v-model="listName" @blur.prevent="inputLoseFocus">
    <button @click="handleSaveClick">SAVE</button>
  </div>
</template>

<script>
export default {
  name: 'EditListName',
  props: {
    name: String
  },
  data () {
    return {
      listName: this.name || ''
    }
  },
  methods: {
    handleCloseClick (e) {
      if (e.target.className === 'container') {
        this.$emit('close')
      }
    },
    handleSaveClick () {
        this.$emit('save-name', this.listName)
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
    .list-name
      width: 80%
      max-width: 8rem
      height: 1.3rem
      position: absolute
      left: 50%
      top: 2rem
      padding: 0 .16rem
      transform: translateX(-50%)
      background: #fff
      border-radius: .2rem
      box-shadow: 0 .06rem .2rem -.04rem rgba(18, 22, 33, .1);
      -webkit-appearance: none
      outline: none
      font-family:Avenir, Helvetica, Arial, sans-serif
      color: $color
      font-size: .48rem
    button
      position: absolute
      left: 50%
      top: 4rem
      transform: translateX(-50%)
      padding: .1rem .36rem
      border-radius: .68rem
      outline: none
      color: #fff
      letter-spacing: .02rem
      background: $themeColor
</style>
