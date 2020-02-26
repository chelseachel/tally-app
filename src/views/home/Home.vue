<template>
  <div class="home">
    <div class="title">Tally Lists</div>
    <home-grid></home-grid>
    <div class="iconfont iconadd3"></div>
  </div>
</template>

<script>
import HomeGrid from './components/HomeGrid.vue'
export default {
  name: 'Home',
  components: {
    HomeGrid
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .title
    position: fixed
    width: 100%
    height: 1.72rem
    line-height: 1.72rem
    font-size: .48rem
    font-weight: 800
    box-sizing: border-box
    padding-left: 8.6%
    background: #fff
    z-index: 10
  .iconadd3
    position: fixed
    bottom: .6rem
    left: 50%
    transform: translateX(-50%)
    font-size: 1rem
    color: #aaa
    z-index: 2
</style>
