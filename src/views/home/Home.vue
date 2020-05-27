<template>
  <div class="home">
    <div class="title">
      <p>Tally <span>Lists</span></p>
    </div>
    <home-grid :lists="lists"></home-grid>
    <div class="iconfont iconadd3" @click="handleAddClick"></div>
    <transition name="fade">
      <home-new v-if="showNew" @close="handleCloseNew" @save-list="handleSaveNew"></home-new>
    </transition>
  </div>
</template>

<script>
import HomeGrid from './components/HomeGrid.vue'
import HomeNew from './components/HomeNew.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeGrid,
    HomeNew
  },
  data () {
    return {
      showNew: false,
      newlist: ''
    }
  },
  methods: {
    handleAddClick () {
      this.showNew = true
    },
    handleCloseNew () {
      this.showNew = false
    },
    handleSaveNew (newlist) {
      if (newlist) {
        this.lists.push({
          name: newlist,
          content: []
        })
      }
      this.showNew = false
    }
  },
  computed: {
    ...mapState([
      'lists'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .title
    position: sticky
    top: 0
    width: 100%
    height: 1.8rem
    line-height: 1.8rem
    padding-left: 8.6%
    box-sizing: border-box
    font-size: .50rem
    font-weight: 600
    color: $color
    background: #fff
    z-index: 10
    span
      font-weight: 500
      color: $color
  .iconadd3
    position: fixed
    bottom: .6rem
    left: 50%
    transform: translateX(-50%)
    font-size: 1.2rem
    color: $themeColor
    z-index: 2
    &:after
      content: ''
      position: absolute
      top: .2rem
      left: .2rem
      width: .8rem
      height: .8rem
      border-radius: 50%
      background: #fff
      z-index:-1
  .fade-enter-active
  .fade-leave-active
    transition: opacity .3s ease
  .fade-enter
  .fade-leave-to
    opacity: 0
</style>
