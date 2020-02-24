<template>
  <div class="container">
    <div class="newlist"></div>
  </div>
</template>

<script>

export default {
  name: 'HomeNew',
  components: {
  }
}
</script>
import
<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .container
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #aaa
    opacity: .1
    .newlist
      margin: auto .4rem
      margin-top: 1.4rem
      height: 1rem
      box-shadow: 0 2px 12px -2px rgba(18, 22, 33, .1)
</style>
