<template>
  <div class="list">
    <tally-header @showmore="handleShowMore"></tally-header>
    <tally-title :name="name" :total="total"></tally-title>
    <tally-items :list="list" :name="name" :key="name+'list'"></tally-items>
    <div class="iconfont iconadd1" @click="handleAddClick"></div>
    <!-- <div class="instruction">
      <p><b>Instructions:</b></p>
      <p>● 向左拖动添加数量</p>
      <p>● 向右拖动数量清零</p>
      <p>● 点击编辑内容</p>
    </div> -->
    <transition name="fade">
      <tally-edit 
      :show="showEdit"
      v-show="showEdit"
      @close="handleCloseItem" 
      @save-item="handleSaveItem"></tally-edit>
    </transition>
    <transition name="fade">
      <tally-more 
      v-show="showMore" 
      @close="handleCloseMore"
      @show-name="handleShowName"
      @delete-list="handleDeleteList"></tally-more>
    </transition>
    <transition name="fade">
      <tally-name 
      :name="name" 
      :show="showName"
      :key="name"
      v-show="showName"
      @close="handleCloseName"
      @save-name="handleSaveName"></tally-name>
    </transition>
  </div>
</template>

<script>
import TallyHeader from './components/TallyHeader.vue'
import TallyTitle from './components/TallyTitle.vue'
import TallyItems from './components/TallyItems.vue'
import TallyEdit from './components/common/TallyEdit.vue'
import TallyMore from './components/common/TallyMore.vue'
import TallyName from './components/common/TallyName.vue'
import { mapState } from 'vuex'
export default {
  name: 'TallyList',
  components: {
    TallyHeader,
    TallyTitle,
    TallyItems,
    TallyEdit,
    TallyMore,
    TallyName
  },
  data () {
    return {
      showEdit: false,
      showMore: false,
      showName: false
    }
  },
  methods: {
    handleAddClick () {
      this.showEdit = true
    },
    handleCloseItem () {
      this.showEdit = false
    },
    handleSaveItem (item, price) {
      this.list.push({
        info: item,
        price: price,
        num: 0
      })
      this.showEdit = false
    },
    handleShowMore () {
      this.showMore = true
    },
    handleCloseMore () {
      this.showMore = false
    },
    handleShowName () {
      this.showMore = false
      this.showName = true
    },
    handleSaveName (newName) {
      this.name = newName
      this.handleCloseName()
    },
    handleCloseName () {
      this.showName = false
    },
    handleDeleteList () {
      this.lists.splice(this.index, 1)
    }
  }, 
  computed: {
    ...mapState([
      'index', 'lists'
    ]),
    name: {
      get () {
        return this.lists[this.index].name
      },
      set (newValue) {
        this.lists[this.index].name = newValue
      }
    },
    list: function () {
      return this.lists[this.index].content
    },
    total: function () {
      let total = 0
      for (let i = 0; i < this.list.length; i++) {
        total += this.list[i].price * this.list[i].num
      }
      return total
    }
  }
}
</script>

<style lang="stylus" scoped>
  .iconadd1
    position: fixed
    bottom: .7rem
    left: 50%
    transform: translateX(-50%)
    font-size: 1.16rem
    color: #aaa
    z-index: 2
  .fade-enter-active
  .fade-leave-active
    transition: opacity .3s ease
  .fade-enter
  .fade-leave-to
    opacity: 0
  // .instruction
  //   margin: .4rem
  //   margin-top: .3rem
  //   line-height: .6rem
  //   color: #D7D7D7
</style>
