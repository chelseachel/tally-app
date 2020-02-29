<template>
  <div class="home">
    <div class="title">Tally Lists</div>
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
    color: $themeColor
    z-index: 2
  .fade-enter-active
  .fade-leave-active
    transition: opacity .3s ease
  .fade-enter
  .fade-leave-to
    opacity: 0
</style>
