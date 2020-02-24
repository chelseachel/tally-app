<template>
  <div class="home-grid">
    <p class="grid-title">Furniture</p>
    <p class="grid-item">4 ITEMS</p>
  </div>
</template>

<script>

export default {
  name: 'HomeGrid',
  components: {
  }
}
</script>
import
<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .home-grid
    min-width: 50%
    height: 3.4rem
    padding: .4rem
    box-sizing: border-box
    border-bottom: .02rem solid #eee
    .grid-title
      font-size: .36rem
      font-weight: 500
    .grid-item
      margin-top: .1rem
      font-size: .26rem
      color: #aaa
</style>
