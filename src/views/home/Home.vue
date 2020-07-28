<template>
  <div class="home">
    <div class="title" :style="showFixed ? {position:'sticky'} : {position:'relative'}">
      <p>Tally <span>Lists</span></p>
    </div>
    <home-grid :lists="lists"></home-grid>
    <transition name="fade">
      <div 
        class="iconfont iconadd3"
        v-if="showFixed"
        :class="{rotate: rotateIcon}" 
        @click="handleAddClick"
      ></div>
    </transition>
    <transition name="fade">
      <edit-list-name 
        v-if="showNew" 
        @close="handleCloseNew" 
        @save-name="handleSaveNew"
      ></edit-list-name>
    </transition>
  </div>
</template>

<script>
import HomeGrid from './components/HomeGrid.vue'
import EditListName from '@/common/EditListName.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeGrid,
    EditListName
  },
  data () {
    return {
      showFixed: false,
      showNew: false,
      newlist: '',
      rotateIcon: false
    }
  },
  methods: {
    handleAddClick () {
      this.showNew = true
      this.rotateIcon = true
    },
    handleCloseNew () {
      this.showNew = false
      this.rotateIcon = false
    },
    handleSaveNew (newlist) {
      if (newlist) {
        this.lists.push({
          name: newlist,
          content: []
        })
      }
      this.handleCloseNew()
    }
  },
  computed: {
    ...mapState([
      'lists'
    ])
  },
  deactivated() {
    this.showFixed = false
  },
  activated() {
    const timer = setTimeout(() => {
      this.showFixed = true
      clearTimeout(timer);
    }, 200)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .home
    position: absolute
    top: 0
    left: 0
    width: 100%
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
      bottom: .9rem
      left: 50%
      transform: translateX(-50%)
      font-size: 1.2rem
      color: $themeColor
      z-index: 2
      transition: all .3s
    .rotate
      transform: translateX(-50%) rotate(45deg)
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
      transition: opacity .3s ease-in
    .fade-enter
    .fade-leave-to
      opacity: 0
    .fade-enter-to
    .fade-leave 
      opacity: 1  
</style>
