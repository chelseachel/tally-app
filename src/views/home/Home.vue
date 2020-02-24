<template>
  <div class="home">
    <div class="title">My Lists</div>
    <div class="container">
      <home-grid></home-grid>
      <home-grid></home-grid>
      <home-grid></home-grid>
      <home-grid></home-grid>
      <home-grid></home-grid>
      <span class='underline'></span>  
    </div>
    <div class="iconfont iconadd3"></div>
  </div>
</template>

<script>
import HomeGrid from './components/HomeGrid.vue'
export default {
  name: 'Home',
  components: {
    HomeGrid
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .title
    position: fixed
    height: 1.72rem
    line-height: 1.72rem
    font-size: .48rem
    font-weight: 800
    margin-left: 8.6%
    z-index: 10
  .container
    position: relative
    top: 1.72rem
    width: 92%
    margin: 0 4%
    display: flex
    flex-wrap: wrap
    .home-grid:nth-child(odd)
      border-right: .02rem solid #eee
    .underline
      position: relative
      top: -.04rem
      width: 100%
      height: .04rem
      background: #fff
  .iconadd3
    position: fixed
    bottom: .6rem
    left: 50%
    transform: translateX(-50%)
    font-size: 1rem
    color: #aaa
    z-index: 2
</style>
